import { NextResponse } from 'next/server'
import { pool } from '@/lib/db'
import { generateRiskSummary } from '@/lib/ai'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const entityType = String(body.entity_type || 'human')
    const entityId = String(body.entity_id || '')

    if (!entityId) {
      return NextResponse.json(
        { success: false, error: 'entity_id is required' },
        { status: 400 }
      )
    }

    const signalsResult = await pool.query(
      `SELECT provider, signal_type, score, status
       FROM trust_signals
       WHERE entity_id = $1
       ORDER BY created_at DESC
       LIMIT 20`,
      [entityId]
    )

    const decisionResult = await pool.query(
      `SELECT final_score, decision
       FROM trust_decisions
       WHERE entity_id = $1
       ORDER BY created_at DESC
       LIMIT 1`,
      [entityId]
    )

    const latestDecision = decisionResult.rows[0]

    const aiSummary = await generateRiskSummary({
      entityType,
      entityId,
      trustScore: latestDecision?.final_score,
      decision: latestDecision?.decision,
      signals: signalsResult.rows
    })

    const inserted = await pool.query(
      `INSERT INTO ai_risk_summaries
       (entity_type, entity_id, summary, recommendation, confidence, model)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING id, entity_type, entity_id, summary, recommendation, confidence, model, created_at`,
      [
        entityType,
        entityId,
        aiSummary.summary,
        aiSummary.recommendation,
        aiSummary.confidence,
        process.env.AI_MODEL || 'fallback-rule-engine'
      ]
    )

    await pool.query(
      `INSERT INTO audit_logs (event_type, entity_type, entity_id, details)
       VALUES ($1, $2, $3, $4)`,
      [
        'ai_risk_summary_created',
        entityType,
        entityId,
        JSON.stringify(aiSummary)
      ]
    )

    return NextResponse.json({
      success: true,
      risk_summary: inserted.rows[0]
    })
  } catch (error) {
    console.error('AI risk summary error:', error)

    return NextResponse.json(
      { success: false, error: 'AI risk summary failed' },
      { status: 500 }
    )
  }
}
