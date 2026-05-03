export type PolicyContext = {
  region?: 'EU' | 'GLOBAL'
  entityType: 'human' | 'ai_agent' | 'session'
  trustScore: number
  decision: 'approved' | 'review' | 'blocked'
  signals: Array<{
    provider: string
    status: string
    score: number
  }>
}

export type PolicyResult = {
  allowed: boolean
  requiresHumanReview: boolean
  auditRequired: boolean
  explainabilityRequired: boolean
  reasons: string[]
}

export function evaluatePolicy(context: PolicyContext): PolicyResult {
  const isEU = context.region === 'EU'

  let requiresHumanReview = false
  let auditRequired = true
  let explainabilityRequired = true
  let allowed = true

  const reasons: string[] = []

  // --- HIGH RISK RULES ---
  const hasFailedSignal = context.signals.some(s => s.status === 'failed')

  if (hasFailedSignal) {
    allowed = false
    requiresHumanReview = true
    reasons.push('Failed trust signal detected')
  }

  // --- LOW TRUST ---
  if (context.trustScore < 50) {
    allowed = false
    requiresHumanReview = true
    reasons.push('Low trust score')
  }

  // --- EU MODE STRICT RULES ---
  if (isEU) {
    if (context.entityType === 'human' || context.entityType === 'ai_agent') {
      if (context.trustScore < 75) {
        requiresHumanReview = true
        reasons.push('EU high-risk threshold triggered')
      }
    }

    // No autonomous approval for high-risk
    if (context.decision === 'approved' && context.trustScore < 90) {
      requiresHumanReview = true
      reasons.push('EU requires human validation for non-high confidence')
    }
  }

  // --- AGENT GOVERNANCE ---
  if (context.entityType === 'ai_agent') {
    if (context.trustScore < 80) {
      requiresHumanReview = true
      reasons.push('AI agent below safe autonomy threshold')
    }
  }

  return {
    allowed,
    requiresHumanReview,
    auditRequired,
    explainabilityRequired,
    reasons
  }
}
