export default function CyberSentinelsDashboardV1() {
  const stats = [
    {
      label: 'Active Trust Sessions',
      value: '1,284',
      change: '+12.4%',
      note: 'Across human, agent, and session verification',
    },
    {
      label: 'Verified Humans',
      value: '92.8%',
      change: '+4.1%',
      note: 'Successful remote identity checks this week',
    },
    {
      label: 'Agent Passports Active',
      value: '316',
      change: '+21',
      note: 'Autonomous entities with policy-bound credentials',
    },
    {
      label: 'Threats Blocked',
      value: '47',
      change: '+9 today',
      note: 'Deepfake, spoofing, and anomalous interaction attempts',
    },
  ];

  const alerts = [
    {
      title: 'Executive voice clone risk detected',
      severity: 'Critical',
      time: '2 min ago',
      detail: 'Payment approval flow interrupted after acoustic mismatch and session anomaly.',
    },
    {
      title: 'Candidate verification escalated',
      severity: 'High',
      time: '18 min ago',
      detail: 'Liveness passed, but device signature conflicts with historical profile and IP region.',
    },
    {
      title: 'Agent permission drift flagged',
      severity: 'Medium',
      time: '42 min ago',
      detail: 'Autonomous procurement agent attempted action outside approved workflow scope.',
    },
  ];

  const identities = [
    {
      entity: 'Maria K. — Senior Security Candidate',
      type: 'Verified Human',
      trust: 94,
      status: 'Verified',
      lastCheck: '4 mins ago',
    },
    {
      entity: 'Apex Finance Agent',
      type: 'Agent Passport',
      trust: 89,
      status: 'Active',
      lastCheck: '7 mins ago',
    },
    {
      entity: 'Daniel R. — Contractor Access Request',
      type: 'Human Verification',
      trust: 62,
      status: 'Review',
      lastCheck: '12 mins ago',
    },
    {
      entity: 'OpsBot-EU-14',
      type: 'Machine Identity',
      trust: 97,
      status: 'Trusted',
      lastCheck: '14 mins ago',
    },
  ];

  const activity = [
    {
      event: 'Biometric liveness sequence passed',
      actor: 'Human identity check · Session #CS-20411',
      time: '09:14',
    },
    {
      event: 'Voice signature mismatch challenged',
      actor: 'Executive transaction approval · Session #CS-20408',
      time: '09:08',
    },
    {
      event: 'Agent permission token refreshed',
      actor: 'Apex Finance Agent · Passport Renewal',
      time: '08:56',
    },
    {
      event: 'High-risk region login blocked',
      actor: 'Contractor access gateway · Session #CS-20399',
      time: '08:37',
    },
    {
      event: 'Audit package exported',
      actor: 'Compliance admin · Investigation case #1092',
      time: '08:12',
    },
  ];

  const agents = [
    {
      name: 'Apex Finance Agent',
      origin: 'Internal / Treasury Automation',
      permissions: 'Payments · Read-only ledger · Alerting',
      risk: 'Low',
    },
    {
      name: 'Helix Hiring Agent',
      origin: 'Internal / Talent Intelligence',
      permissions: 'Screening · Scheduling · Verification trigger',
      risk: 'Medium',
    },
    {
      name: 'Orion Vendor Agent',
      origin: 'Third-Party / Procurement Workflow',
      permissions: 'Invoice routing · Approval request',
      risk: 'Elevated',
    },
  ];

  const severityClasses = {
    Critical: 'bg-red-500/15 text-red-300 border-red-400/30',
    High: 'bg-orange-500/15 text-orange-300 border-orange-400/30',
    Medium: 'bg-yellow-500/15 text-yellow-300 border-yellow-400/30',
  };

  const statusClasses = {
    Verified: 'bg-emerald-500/15 text-emerald-300 border-emerald-400/30',
    Active: 'bg-cyan-500/15 text-cyan-300 border-cyan-400/30',
    Review: 'bg-orange-500/15 text-orange-300 border-orange-400/30',
    Trusted: 'bg-violet-500/15 text-violet-300 border-violet-400/30',
  };

  const ringData = [88, 72, 94];

  return (
    <div className="min-h-screen bg-[#05070b] text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_24%),radial-gradient(circle_at_top_right,rgba(16,185,129,0.14),transparent_22%),linear-gradient(180deg,rgba(16,185,129,0.1),transparent_50%)]"></div>
      <div className="fixed inset-0 -z-10 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:32px_32px]"></div>

      <div className="flex min-h-screen">
        <aside className="hidden w-72 border-r border-white/10 bg-black/20 backdrop-blur-xl lg:flex lg:flex-col">
          <div className="border-b border-white/10 px-6 py-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/20 bg-white/5 shadow-[0_0_40px_rgba(16,185,129,0.18)]">
                <span className="text-sm font-semibold tracking-[0.35em] text-emerald-300">CS</span>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.35em] text-slate-400">Cyber Sentinels</div>
                <div className="mt-1 text-sm text-slate-200">Trust Command Center</div>
              </div>
            </div>
          </div>

          <nav className="flex-1 px-4 py-6 text-sm text-slate-300">
            {[
              'Overview',
              'Identity Feed',
              'Verification Requests',
              'Agent Registry',
              'Threat Alerts',
              'Trust Graph',
              'Audit Log',
              'Policies',
              'Settings',
            ].map((item, idx) => (
              <div
                key={item}
                className={`mb-2 flex items-center justify-between rounded-2xl border px-4 py-3 transition ${
                  idx === 0
                    ? 'border-emerald-400/20 bg-emerald-500/10 text-white'
                    : 'border-transparent bg-white/[0.02] text-slate-400 hover:border-white/10 hover:bg-white/[0.04] hover:text-white'
                }`}
              >
                <span>{item}</span>
                {idx === 4 ? (
                  <span className="rounded-full bg-red-500/15 px-2 py-0.5 text-xs text-red-300">3</span>
                ) : null}
              </div>
            ))}
          </nav>

          <div className="border-t border-white/10 p-4">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-4">
              <div className="text-xs uppercase tracking-[0.3em] text-slate-500">Platform mode</div>
              <div className="mt-3 text-lg font-semibold text-white">Enterprise Pilot</div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Human verification live. Agent passport module in controlled rollout.
              </p>
            </div>
          </div>
        </aside>

        <main className="flex-1">
          <header className="sticky top-0 z-20 border-b border-white/10 bg-black/20 backdrop-blur-xl">
            <div className="flex flex-col gap-4 px-5 py-5 md:px-8 xl:flex-row xl:items-center xl:justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.35em] text-emerald-300">Overview</div>
                <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  Trust infrastructure for humans, agents, and digital interactions.
                </h1>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-400 md:text-base">
                  Real-time verification, synthetic identity defense, and auditable trust signals across high-risk workflows.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm text-slate-200 hover:bg-white/[0.07]">
                  Export Audit Pack
                </button>
                <button className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black hover:opacity-95">
                  New Verification
                </button>
              </div>
            </div>
          </header>

          <div className="px-5 py-6 md:px-8">
            <section className="grid gap-4 md:grid-cols-2 2xl:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5 shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-xs uppercase tracking-[0.28em] text-slate-500">{stat.label}</div>
                      <div className="mt-4 text-3xl font-semibold text-white">{stat.value}</div>
                    </div>
                    <div className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
                      {stat.change}
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-slate-400">{stat.note}</p>
                </div>
              ))}
            </section>

            <section className="mt-6 grid gap-6 2xl:grid-cols-[1.25fr_0.75fr]">
              <div className="space-y-6">
                <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                      <div className="text-xs uppercase tracking-[0.28em] text-cyan-300">Trust posture</div>
                      <h2 className="mt-2 text-2xl font-semibold text-white">Verification confidence and risk distribution</h2>
                    </div>
                    <div className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-slate-300">
                      Last updated 2 min ago
                    </div>
                  </div>

                  <div className="mt-8 grid gap-6 xl:grid-cols-[0.9fr_1.1fr] xl:items-center">
                    <div className="flex items-center justify-center">
                      <div className="relative h-72 w-72">
                        <svg viewBox="0 0 200 200" className="h-full w-full -rotate-90">
                          {[0, 1, 2].map((idx) => {
                            const radius = 78 - idx * 18;
                            const circumference = 2 * Math.PI * radius;
                            const dash = (ringData[idx] / 100) * circumference;
                            return (
                              <g key={idx}>
                                <circle
                                  cx="100"
                                  cy="100"
                                  r={radius}
                                  stroke="rgba(255,255,255,0.08)"
                                  strokeWidth="10"
                                  fill="transparent"
                                />
                                <circle
                                  cx="100"
                                  cy="100"
                                  r={radius}
                                  stroke={idx === 0 ? 'rgba(16,185,129,0.9)' : idx === 1 ? 'rgba(34,211,238,0.9)' : 'rgba(168,85,247,0.9)'}
                                  strokeWidth="10"
                                  fill="transparent"
                                  strokeDasharray={`${dash} ${circumference - dash}`}
                                  strokeLinecap="round"
                                />
                              </g>
                            );
                          })}
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <div className="text-xs uppercase tracking-[0.3em] text-slate-500">Composite Trust</div>
                          <div className="mt-3 text-5xl font-semibold text-white">91</div>
                          <div className="mt-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
                            Stable
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {[
                        {
                          name: 'Human identity integrity',
                          score: '88 / 100',
                          width: '88%',
                          color: 'bg-emerald-400',
                        },
                        {
                          name: 'Agent governance posture',
                          score: '72 / 100',
                          width: '72%',
                          color: 'bg-cyan-400',
                        },
                        {
                          name: 'Auditability & policy coverage',
                          score: '94 / 100',
                          width: '94%',
                          color: 'bg-violet-400',
                        },
                      ].map((item) => (
                        <div key={item.name} className="rounded-3xl border border-white/10 bg-black/20 p-4">
                          <div className="flex items-center justify-between gap-4">
                            <div className="text-sm text-slate-300">{item.name}</div>
                            <div className="text-sm font-medium text-white">{item.score}</div>
                          </div>
                          <div className="mt-3 h-2 rounded-full bg-white/10">
                            <div className={`h-2 rounded-full ${item.color}`} style={{ width: item.width }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="text-xs uppercase tracking-[0.28em] text-emerald-300">Identity feed</div>
                      <h2 className="mt-2 text-2xl font-semibold text-white">Verified entities and trust outcomes</h2>
                    </div>
                    <button className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-slate-300 hover:bg-white/[0.06]">
                      View all
                    </button>
                  </div>

                  <div className="mt-6 overflow-hidden rounded-[24px] border border-white/10">
                    <div className="grid grid-cols-[1.6fr_1fr_0.6fr_0.7fr] border-b border-white/10 bg-white/[0.04] px-5 py-4 text-xs uppercase tracking-[0.25em] text-slate-500">
                      <div>Entity</div>
                      <div>Type</div>
                      <div>Trust</div>
                      <div>Status</div>
                    </div>
                    {identities.map((row) => (
                      <div
                        key={row.entity}
                        className="grid grid-cols-[1.6fr_1fr_0.6fr_0.7fr] items-center border-b border-white/10 px-5 py-4 last:border-b-0"
                      >
                        <div>
                          <div className="font-medium text-white">{row.entity}</div>
                          <div className="mt-1 text-sm text-slate-500">Last check {row.lastCheck}</div>
                        </div>
                        <div className="text-sm text-slate-300">{row.type}</div>
                        <div>
                          <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-sm text-white">
                            {row.trust}
                          </span>
                        </div>
                        <div>
                          <span className={`rounded-full border px-3 py-1 text-xs font-medium ${statusClasses[row.status]}`}>
                            {row.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
                  <div className="text-xs uppercase tracking-[0.28em] text-red-300">Threat alerts</div>
                  <h2 className="mt-2 text-2xl font-semibold text-white">Live risk escalations</h2>
                  <div className="mt-6 space-y-4">
                    {alerts.map((alert) => (
                      <div key={alert.title} className="rounded-3xl border border-white/10 bg-black/20 p-4">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <div className="font-medium text-white">{alert.title}</div>
                            <div className="mt-2 text-sm leading-6 text-slate-400">{alert.detail}</div>
                          </div>
                          <span className={`rounded-full border px-3 py-1 text-xs font-medium ${severityClasses[alert.severity]}`}>
                            {alert.severity}
                          </span>
                        </div>
                        <div className="mt-3 text-xs uppercase tracking-[0.22em] text-slate-500">{alert.time}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
                  <div className="text-xs uppercase tracking-[0.28em] text-cyan-300">Agent registry</div>
                  <h2 className="mt-2 text-2xl font-semibold text-white">Verified agent passports</h2>
                  <div className="mt-6 space-y-4">
                    {agents.map((agent) => (
                      <div key={agent.name} className="rounded-3xl border border-white/10 bg-black/20 p-4">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <div className="font-medium text-white">{agent.name}</div>
                            <div className="mt-2 text-sm text-slate-400">{agent.origin}</div>
                            <div className="mt-3 text-sm leading-6 text-slate-300">{agent.permissions}</div>
                          </div>
                          <div className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs text-slate-200">
                            Risk {agent.risk}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="mt-6 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
              <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-xs uppercase tracking-[0.28em] text-violet-300">Audit log</div>
                    <h2 className="mt-2 text-2xl font-semibold text-white">Traceability across every verification event</h2>
                  </div>
                  <button className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-slate-300 hover:bg-white/[0.06]">
                    Open investigation center
                  </button>
                </div>

                <div className="mt-6 space-y-3">
                  {activity.map((item) => (
                    <div
                      key={`${item.event}-${item.time}`}
                      className="flex items-start justify-between gap-4 rounded-3xl border border-white/10 bg-black/20 p-4"
                    >
                      <div>
                        <div className="font-medium text-white">{item.event}</div>
                        <div className="mt-1 text-sm text-slate-400">{item.actor}</div>
                      </div>
                      <div className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs text-slate-300">
                        {item.time}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
                <div className="text-xs uppercase tracking-[0.28em] text-emerald-300">Control panel</div>
                <h2 className="mt-2 text-2xl font-semibold text-white">System posture</h2>

                <div className="mt-6 space-y-4">
                  {[
                    ['Deepfake defense', 'Enabled'],
                    ['Voice clone challenge', 'Enabled'],
                    ['Agent permission guardrails', 'Enabled'],
                    ['Continuous session scoring', 'Live'],
                    ['Immutable audit capture', 'Enabled'],
                  ].map(([label, state]) => (
                    <div key={label} className="flex items-center justify-between rounded-3xl border border-white/10 bg-black/20 px-4 py-4">
                      <span className="text-sm text-slate-300">{label}</span>
                      <span className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
                        {state}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-[28px] border border-cyan-400/20 bg-cyan-500/10 p-5">
                  <div className="text-xs uppercase tracking-[0.28em] text-cyan-200">Next module</div>
                  <div className="mt-2 text-xl font-semibold text-white">Trust Graph Explorer</div>
                  <p className="mt-3 text-sm leading-6 text-cyan-50/80">
                    Relationship mapping between verified humans, AI agents, sessions, approvals, and threat events.
                  </p>
                  <button className="mt-4 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black">
                    Preview module
                  </button>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
