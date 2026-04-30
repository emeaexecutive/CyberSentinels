import { NextResponse } from 'next/server'
import { pool } from '@/lib/db'
import { createAuditProofHash, createPublicProofReceipt } from '@/lib/audit-proof'

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

    const decisionResult = await pool.query(
      `SELECT final_score, decision, reasons, created_at
       FROM trust_decisions
       WHERE entity_id = $1
       ORDER BY created_at DESC
       LIMIT 1`,
      [entityId]
    )

    const latestDecision = decisionResult.rows[0]

    if (!latestDecision) {
      return NextResponse.json(
        { success: false, error: 'No trust decision found for entity' },
        { status: 404 }
      )
    }

    const payload = {
      entityType,
      entityId,
      decision: latestDecision.decision,
      trustScore: latestDecision.final_score,
      reasons: latestDecision.reasons,
      timestamp: new Date().toISOString()
    }

    const proofHash = createAuditProofHash(payload)
    const receipt = createPublicProofReceipt(payload, proofHash)

    const inserted = await pool.query(
      `INSERT INTO audit_proofs (entity_type, entity_id, proof_hash, proof_payload, ledger_status)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING id, entity_type, entity_id, proof_hash, proof_payload, ledger_status, created_at`,
      [entityType, entityId, proofHash, JSON.stringify(receipt), 'local_hash_only']
    )

    await pool.query(
      `INSERT INTO audit_logs (event_type, entity_type, entity_id, details)
       VALUES ($1, $2, $3, $4)`,
      [
        'audit_proof_hash_created',
        entityType,
        entityId,
        JSON.stringify(receipt)
      ]
    )

    return NextResponse.json({
      success: true,
      audit_proof: inserted.rows[0]
    })
  } catch (error) {
    console.error('Audit proof error:', error)

    return NextResponse.json(
      { success: false, error: 'Audit proof creation failed' },
      { status: 500 }
    )
  }
}
