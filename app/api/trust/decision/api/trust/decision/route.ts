import { evaluatePolicy } from '@/lib/policy-engine'
const policy = evaluatePolicy({
  region: 'EU', // later dynamic
  entityType,
  trustScore: decision.finalScore,
  decision: decision.decision,
  signals
})
await pool.query(
  `INSERT INTO audit_logs (event_type, entity_type, entity_id, details)
   VALUES ($1, $2, $3, $4)`,
  [
    'policy_evaluation',
    entityType,
    entityId,
    JSON.stringify(policy)
  ]
)
return NextResponse.json({
  success: true,
  decision: inserted.rows[0],
  policy
})
