import { NextResponse } from 'next/server'
import { pool } from '@/lib/db'
import { createAgentPassportCredential } from '@/lib/credential'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const passportId = String(body.passport_id || '')
    const agentName = String(body.agent_name || '')
    const ownerTeam = String(body.owner_team || '')
    const trustScore = Number(body.trust_score || 0)
    const permissions = body.permissions || {}

    if (!passportId || !agentName) {
      return NextResponse.json(
        { success: false, error: 'passport_id and agent_name are required' },
        { status: 400 }
      )
    }

    const credentialResult = createAgentPassportCredential({
      passportId,
      agentName,
      ownerTeam,
      trustScore,
      permissions
    })

    const inserted = await pool.query(
      `INSERT INTO verifiable_credentials
       (credential_id, subject_type, subject_id, credential, credential_hash, status)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING id, credential_id, subject_type, subject_id, credential, credential_hash, status, created_at`,
      [
        credentialResult.credentialId,
        'ai_agent',
        passportId,
        JSON.stringify(credentialResult.credential),
        credentialResult.credentialHash,
        'active'
      ]
    )

    await pool.query(
      `INSERT INTO audit_logs (event_type, entity_type, entity_id, details)
       VALUES ($1, $2, $3, $4)`,
      [
        'agent_passport_credential_created',
        'ai_agent',
        passportId,
        JSON.stringify({
          credential_id: credentialResult.credentialId,
          credential_hash: credentialResult.credentialHash
        })
      ]
    )

    return NextResponse.json({
      success: true,
      credential_record: inserted.rows[0]
    })
  } catch (error) {
    console.error('Agent passport credential error:', error)

    return NextResponse.json(
      { success: false, error: 'Agent Passport credential creation failed' },
      { status: 500 }
    )
  }
}
