export default function VerificationFlowV1() {
  const steps = [
    {
      step: '01',
      title: 'Identity Intake',
      desc: 'User details, work email, company context, access reason, and verification intent captured before session begins.',
      status: 'Complete',
    },
    {
      step: '02',
      title: 'Liveness + Face Verification',
      desc: 'Real-time video challenge with anti-spoofing, replay defense, and biometric confirmation.',
      status: 'Live',
    },
    {
      step: '03',
      title: 'Device + Session Intelligence',
      desc: 'Fingerprinting, browser posture, geolocation signals, velocity checks, and anomaly detection.',
      status: 'Processing',
    },
    {
      step: '04',
      title: 'Trust Decision',
      desc: 'Composite trust score assigned with explainable evidence and policy outcome.',
      status: 'Pending',
    },
  ];

  const signals = [
    ['Biometric Match', '97%'],
    ['Liveness Confidence', '95%'],
    ['Device Integrity', '89%'],
    ['Geo Consistency', '92%'],
    ['Behavioral Confidence', '87%'],
  ];

  const evidence = [
    'Face movement challenge completed successfully',
    'Voice cadence matched historical baseline',
    'Browser environment consistent with known profile',
    'No replay attack signature detected',
    'IP region aligned with declared working location',
  ];

  return (
    <div className="min-h-screen bg-[#05070b] text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.14),transparent_24%),radial-gradient(circle_at_top_right,rgba(34,211,238,0.12),transparent_22%),linear-gradient(180deg,#04060a_0%,#071018_52%,#04060a_100%)]" />

      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
        <header className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
          <div className="text-xs uppercase tracking-[0.35em] text-emerald-300">Verification Flow</div>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            Prove identity before permission is granted.
          </h1>
          <p className="mt-5 max-w-4xl text-base leading-7 text-slate-300 md:text-lg">
            Continuous identity verification for candidates, employees, contractors, executives, and autonomous workflows. Designed to stop synthetic fraud before trust is granted.
          </p>
        </header>

        <section className="mt-6 grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6">
              <div className="text-xs uppercase tracking-[0.28em] text-cyan-300">Session Overview</div>
              <h2 className="mt-2 text-2xl font-semibold">Verification Journey</h2>

              <div className="mt-6 space-y-4">
                {steps.map((item) => (
                  <div key={item.title} className="rounded-3xl border border-white/10 bg-black/20 p-4">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-500/10 text-sm font-semibold text-emerald-300">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-4">
                          <div className="font-medium text-white">{item.title}</div>
                          <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs text-slate-300">
                            {item.status}
                          </span>
                        </div>
                        <p className="mt-2 text-sm leading-6 text-slate-400">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6">
              <div className="text-xs uppercase tracking-[0.28em] text-violet-300">Evidence Chain</div>
              <h2 className="mt-2 text-2xl font-semibold">Explainable Trust Signals</h2>
              <div className="mt-6 space-y-3">
                {evidence.map((item) => (
                  <div key={item} className="rounded-3xl border border-white/10 bg-black/20 p-4 text-sm text-slate-300">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.28em] text-emerald-300">Live Session</div>
                  <h2 className="mt-2 text-2xl font-semibold">Verified Human Assessment</h2>
                </div>
                <div className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300">
                  Live Check
                </div>
              </div>

              <div className="mt-6 rounded-[28px] border border-white/10 bg-black/20 p-6">
                <div className="aspect-[4/3] rounded-[24px] border border-white/10 bg-[radial-gradient(circle,rgba(255,255,255,0.05),transparent_60%)] flex items-center justify-center text-slate-400">
                  Live Verification Camera Session
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {signals.map(([label, value]) => (
                    <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <div className="text-xs uppercase tracking-[0.22em] text-slate-500">{label}</div>
                      <div className="mt-2 text-xl font-semibold">{value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6">
              <div className="text-xs uppercase tracking-[0.28em] text-red-300">Trust Decision</div>
              <h2 className="mt-2 text-2xl font-semibold">Composite Trust Outcome</h2>

              <div className="mt-6 rounded-[28px] border border-emerald-400/20 bg-emerald-500/10 p-6">
                <div className="text-xs uppercase tracking-[0.28em] text-emerald-200">Trust Score</div>
                <div className="mt-3 text-6xl font-semibold">94</div>
                <div className="mt-3 text-lg text-white">Verified — Access Approved</div>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-emerald-50/80">
                  Identity confidence exceeded enterprise policy threshold. No replay, spoofing, or anomaly risk requiring escalation detected.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <button className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black">
                  Approve Access
                </button>
                <button className="rounded-full border border-white/10 bg-black/20 px-5 py-3 text-sm text-slate-300">
                  Export Audit Record
                </button>
                <button className="rounded-full border border-white/10 bg-black/20 px-5 py-3 text-sm text-slate-300">
                  Escalate Review
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
