CREATE TABLE IF NOT EXISTS ai_risk_summaries (
  id SERIAL PRIMARY KEY,
  entity_type VARCHAR(100) NOT NULL,
  entity_id VARCHAR(255) NOT NULL,
  summary TEXT NOT NULL,
  recommendation VARCHAR(50) NOT NULL,
  confidence INTEGER DEFAULT 0,
  model VARCHAR(100),
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS agentic_reviews (
  id SERIAL PRIMARY KEY,
  agent_name VARCHAR(255) NOT NULL,
  entity_type VARCHAR(100) NOT NULL,
  entity_id VARCHAR(255) NOT NULL,
  action_taken VARCHAR(100) NOT NULL,
  decision VARCHAR(50) NOT NULL,
  reasons JSONB,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS audit_proofs (
  id SERIAL PRIMARY KEY,
  entity_type VARCHAR(100) NOT NULL,
  entity_id VARCHAR(255) NOT NULL,
  proof_hash TEXT UNIQUE NOT NULL,
  proof_payload JSONB NOT NULL,
  ledger_status VARCHAR(50) DEFAULT 'local_hash_only',
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS verifiable_credentials (
  id SERIAL PRIMARY KEY,
  credential_id VARCHAR(255) UNIQUE NOT NULL,
  subject_type VARCHAR(100) NOT NULL,
  subject_id VARCHAR(255) NOT NULL,
  credential JSONB NOT NULL,
  credential_hash TEXT UNIQUE NOT NULL,
  status VARCHAR(50) DEFAULT 'active',
  created_at TIMESTAMP DEFAULT NOW()
);
