export default function AgentPassportDetailV1() {
  const permissions = [
    ['Payments Approval Requests', 'Restricted'],
    ['Vendor Invoice Routing', 'Enabled'],
    ['Treasury Ledger Read Access', 'Read Only'],
    ['External Communication', 'Blocked'],
    ['Escalation Authority', 'Manager Approval Required'],
  ];

  const auditTrail = [
    {
      event: 'Permission scope refreshed',
      detail: 'Policy engine updated invoice approval threshold rules.',
      time: '09:18',
    },
    {
      event: 'Anomalous action prevented',
      detail: 'Agent attempted approval outside approved treasury workflow.',
      time: '08:47',
    },
    {
      event: 'Passport integrity verified',
      detail: 'Origin signature and operating environment successfully revalidated.',
      time: '08:10',
    },
    {
      event: 'Compliance export generated',
      detail: 'Audit package created for finance governance review.',
      time: '07:42',
    },
  ];

  const riskSignals = [
    ['Origin Verification', '98'],
    ['Behavior Stability', '91'],
    ['Permission Compliance', '84'],
    ['Anomaly Exposure', '22'],
  ];

  return (
    <div className="min-h-screen bg-[#05070b] text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_24%),radial-gradient(circle_at_top_right,rgba(16,185,129,0.14),transparent_22%),linear-gradient(180deg,#04060a_0%,#071018_52%,#04060a_100%)]" />

      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
        <header className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
          <div className="text-xs uppercase tracking-[0.35em] text-cyan-300">Agent Passport</div>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            Every autonomous agent needs identity, permissions, and accountability.
          </h1>
          <p className="mt-5 max-w-4xl text-base leading-7 text-slate-300 md:text-lg">
            Agent Passport turns AI agents into governed digital entities. Origin is verified, permissions are controlled, actions are traceable, and trust is continuously scored before autonomous execution is allowed.
          </p>
        </header>

        <section className="mt-6 grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.28em] text-emerald-300">Passport Summary</div>
                  <h2 className="mt-2 text-2xl font-semibold">Apex Finance Agent</h2>
                </div>
                <div className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300">
                  Verified Active
                </div>
              </div>

              <div className="mt-6 rounded-[28px] border border-white/10 bg-black/20 p-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <div className="text-xs uppercase tracking-[0.22em] text-slate-500">Origin</div>
                    <div className="mt-2 text-lg font-medium">Internal Treasury Automation</div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.22em] text-slate-500">Passport ID</div>
                    <div className="mt-2 text-lg font-medium">CS-AGT-88421</div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.22em] text-slate-500">Owner</div>
                    <div className="mt-2 text-lg font-medium">Finance Operations</div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.22em] text-slate-500">Policy Level</div>
                    <div className="mt-2 text-lg font-medium">High Trust Controlled</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6">
              <div className="text-xs uppercase tracking-[0.28em] text-violet-300">Permissions Matrix</div>
              <h2 className="mt-2 text-2xl font-semibold">Allowed vs restricted actions</h2>

              <div className="mt-6 space-y-3">
                {permissions.map(([label, state]) => (
                  <div key={label} className="flex items-center justify-between rounded-3xl border border-white/10 bg-black/20 px-4 py-4">
                    <span className="text-sm text-slate-300">{label}</span>
                    <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs text-slate-200">
                      {state}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6">
              <div className="text-xs uppercase tracking-[0.28em] text-red-300">Trust Score</div>
              <h2 className="mt-2 text-2xl font-semibold">Continuous agent trust posture</h2>

              <div className="mt-6 rounded-[28px] border border-cyan-400/20 bg-cyan-500/10 p-6">
                <div className="text-xs uppercase tracking-[0.28em] text-cyan-100">Agent Trust Score</div>
                <div className="mt-3 text-6xl font-semibold">89</div>
                <div className="mt-3 text-lg">Operational — Controlled Autonomy</div>
                <p className="mt-4 text-sm leading-7 text-cyan-50/80">
                  Agent remains inside approved workflow boundaries. One anomaly event prevented this week with no unresolved escalation.
                </p>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {riskSignals.map(([label, score]) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <div className="text-xs uppercase tracking-[0.22em] text-slate-500">{label}</div>
                    <div className="mt-2 text-2xl font-semibold">{score}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6">
              <div className="text-xs uppercase tracking-[0.28em] text-emerald-300">Audit Trail</div>
              <h2 className="mt-2 text-2xl font-semibold">Traceable operating history</h2>

              <div className="mt-6 space-y-3">
                {auditTrail.map((item) => (
                  <div key={item.event} className="rounded-3xl border border-white/10 bg-black/20 p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="font-medium">{item.event}</div>
                        <div className="mt-2 text-sm leading-6 text-slate-400">{item.detail}</div>
                      </div>
                      <div className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs text-slate-300">
                        {item.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-6 rounded-[32px] border border-white/10 bg-white/[0.04] p-6">
          <div className="text-xs uppercase tracking-[0.28em] text-cyan-300">Control Actions</div>
          <h2 className="mt-2 text-2xl font-semibold">Govern the agent before it governs outcomes</h2>

          <div className="mt-6 flex flex-wrap gap-3">
            {[
              'Freeze Permissions',
              'Escalate Compliance Review',
              'Export Passport Audit Pack',
              'Rotate Identity Signature',
              'Approve Expanded Scope',
            ].map((action) => (
              <button
                key={action}
                className="rounded-full border border-white/10 bg-black/20 px-5 py-3 text-sm text-slate-300 hover:bg-white/[0.05]"
              >
                {action}
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
