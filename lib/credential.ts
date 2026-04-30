import crypto from 'crypto'

export type AgentPassportCredentialInput = {
  passportId: string
  agentName: string
  ownerTeam: string
  trustScore: number
  permissions: Record<string, unknown>
}

export function createAgentPassportCredential(input: AgentPassportCredentialInput) {
  const issuer = process.env.CREDENTIAL_ISSUER || 'did:web:cybersentinels.com'
  const issuedAt = new Date().toISOString()
  const credentialId = `urn:cyber-sentinels:agent-passport:${input.passportId}`

  const credential = {
    '@context': [
      'https://www.w3.org/ns/credentials/v2',
      'https://cybersentinels.com/contexts/agent-passport/v1'
    ],
    type: ['VerifiableCredential', 'AgentPassportCredential'],
    id: credentialId,
    issuer,
    validFrom: issuedAt,
    credentialSubject: {
      id: `urn:cyber-sentinels:agent:${input.passportId}`,
      agentName: input.agentName,
      ownerTeam: input.ownerTeam,
      trustScore: input.trustScore,
      permissions: input.permissions,
      status: 'controlled_autonomy'
    }
  }

  const credentialHash = crypto
    .createHash('sha256')
    .update(JSON.stringify(credential))
    .digest('hex')

  return {
    credentialId,
    credential,
    credentialHash
  }
}
