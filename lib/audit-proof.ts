import crypto from 'crypto'

export type AuditProofPayload = {
  entityType: string
  entityId: string
  decision?: string
  trustScore?: number
  timestamp: string
  reasons?: unknown
}

export function createAuditProofHash(payload: AuditProofPayload) {
  const secret = process.env.AUDIT_HASH_SECRET

  if (!secret) {
    throw new Error('Missing AUDIT_HASH_SECRET')
  }

  const canonicalPayload = JSON.stringify(payload, Object.keys(payload).sort())

  return crypto
    .createHmac('sha256', secret)
    .update(canonicalPayload)
    .digest('hex')
}

export function createPublicProofReceipt(payload: AuditProofPayload, proofHash: string) {
  return {
    type: 'CyberSentinelsAuditProof',
    version: '1.0',
    proof_hash: proofHash,
    entity_type: payload.entityType,
    entity_id: payload.entityId,
    timestamp: payload.timestamp,
    ledger_status: 'local_hash_only'
  }
}
