import { calculateCompositeTrustScore, TrustSignal } from '@/lib/trust-score'

export type AgenticReviewResult = {
  agentName: string
  actionTaken: string
  decision: 'approved' | 'review' | 'blocked'
  reasons: string[]
  finalScore: number
}

export function runSentinelReviewAgent(signals: TrustSignal[]): AgenticReviewResult {
  const composite = calculateCompositeTrustScore(signals)

  const criticalFailure = signals.find(
    (signal) => signal.status === 'failed' && ['world_id', 'persona', 'sumsub'].includes(signal.provider)
  )

  const actionTaken = criticalFailure
    ? 'blocked_high_risk_identity_event'
    : composite.decision === 'review'
      ? 'escalated_for_human_review'
      : 'approved_low_risk_trust_event'

  return {
    agentName: 'Sentinel Review Agent',
    actionTaken,
    decision: composite.decision,
    reasons: composite.reasons,
    finalScore: composite.finalScore
  }
}
