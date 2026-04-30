export type AiRiskInput = {
  entityType: string
  entityId: string
  trustScore?: number
  decision?: string
  signals: Array<{
    provider: string
    signal_type: string
    score: number
    status: string
  }>
}

export type AiRiskSummary = {
  summary: string
  recommendation: 'approved' | 'review' | 'blocked'
  confidence: number
}

export async function generateRiskSummary(input: AiRiskInput): Promise<AiRiskSummary> {
  const apiKey = process.env.AI_API_KEY
  const baseUrl = process.env.AI_API_BASE_URL || 'https://api.openai.com/v1'
  const model = process.env.AI_MODEL || 'gpt-4o-mini'

  if (!apiKey) {
    return fallbackRiskSummary(input)
  }

  const prompt = buildRiskPrompt(input)

  const response = await fetch(`${baseUrl}/chat/completions`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model,
      temperature: 0.2,
      messages: [
        {
          role: 'system',
          content:
            'You are Sentinel Analyst, a cyber identity risk analyst. Return only valid JSON with summary, recommendation and confidence. Do not include personal data. Be concise, cautious and enterprise-ready.'
        },
        {
          role: 'user',
          content: prompt
        }
      ]
    })
  })

  if (!response.ok) {
    return fallbackRiskSummary(input)
  }

  const data = await response.json()
  const content = data?.choices?.[0]?.message?.content

  try {
    const parsed = JSON.parse(content)

    return {
      summary: String(parsed.summary || 'Risk summary unavailable.'),
      recommendation: normalizeRecommendation(parsed.recommendation),
      confidence: clampNumber(Number(parsed.confidence || 60), 0, 100)
    }
  } catch {
    return fallbackRiskSummary(input)
  }
}

function buildRiskPrompt(input: AiRiskInput) {
  return JSON.stringify({
    task: 'Create a concise enterprise risk summary for a trust decision.',
    entity_type: input.entityType,
    entity_id: input.entityId,
    trust_score: input.trustScore,
    current_decision: input.decision,
    signals: input.signals,
    output_schema: {
      summary: 'one paragraph, board/CISO friendly',
      recommendation: 'approved | review | blocked',
      confidence: '0-100 integer'
    }
  })
}

function fallbackRiskSummary(input: AiRiskInput): AiRiskSummary {
  const failed = input.signals.some((signal) => signal.status === 'failed')
  const review = input.signals.some((signal) => signal.status === 'review')
  const lowScore = typeof input.trustScore === 'number' && input.trustScore < 70

  if (failed || lowScore) {
    return {
      summary:
        'Cyber Sentinels detected material risk across one or more trust signals. The entity should not be automatically approved without human review and supporting evidence.',
      recommendation: 'blocked',
      confidence: 72
    }
  }

  if (review) {
    return {
      summary:
        'Cyber Sentinels detected mixed trust signals. Identity or session data appears partially valid, but additional review is recommended before privileged access is granted.',
      recommendation: 'review',
      confidence: 68
    }
  }

  return {
    summary:
      'Cyber Sentinels detected consistent trust signals across available providers. No immediate high-risk anomaly was identified in the current verification context.',
    recommendation: 'approved',
    confidence: 75
  }
}

function normalizeRecommendation(value: unknown): AiRiskSummary['recommendation'] {
  if (value === 'approved' || value === 'review' || value === 'blocked') {
    return value
  }

  return 'review'
}

function clampNumber(value: number, min: number, max: number) {
  if (Number.isNaN(value)) return min
  return Math.max(min, Math.min(max, value))
}
