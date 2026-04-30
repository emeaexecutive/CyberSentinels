import { NextResponse } from 'next/server'
import { pool } from '@/lib/db'
import { runSentinelReviewAgent } from '@/lib/agentic-review'
import { TrustSignal } from '@/lib/trust-score'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const entityType = String(body.entity_type || 'human')
    const entityId = String(body.entity_id || '')
    const agentSecret = request.headers.get('x-internal-agent-secret')

    if (process.env.INTERNAL_AGENT_SECRET && agentSecret !== process.env.INTERNAL_AGENT_SECRET) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized agent request' },
        { status: 401 }
      )
    }

    if (!entityId) {
      return NextResponse.json(
        { success: false, error: 'entity_id is required' },
        { status: 400 }
      )
    }

    const result = await pool.query(
      `SELECT provider, signal_type, score, status
       FROM trust_signals
       WHERE entity_id = $1
       ORDER BY created_at DESC
       LIMIT 20`,
      [entityId]
    )

    const signals: TrustSignal[] = result.rows.map((row) => ({
      provider: row.provider,
      signalType: row.signal_type,
      score: Number(row.score),
      status: row.status
    }))

    const review = runSentinelReviewAgent(signals)

    const inserted = await pool.query(
      `INSERT INTO agentic_reviews
       (agent_name, entity_type, entity_id, action_taken, decision, reasons)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING id, agent_name, entity_type, entity_id, action_taken, decision, reasons, created_at`,
        review.agentName,
        entityType,
        entityId,
        review.actionTaken,
        review.decision,
        JSON.stringify(review.reasons)
      ]
    )

    await pool.query(
      `INSERT INTO audit_logs (event_type, entity_type, entity_id, details)
       VALUES ($1, $2, $3, $4)`,
      [
        'agentic_review_completed',
        entityType,
        entityId,
        JSON.stringify(review)
      ]
    )

    return NextResponse.json({
      success: true,
      review: inserted.rows[0],
      final_score: review.finalScore
    })
  } catch (error) {
    console.error('Agentic review error:', error)

    return NextResponse.json(
      { success: false, error: 'Agentic review failed' },
      { status: 500 }
    )
  }
}
      [
