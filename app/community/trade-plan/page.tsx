const PLAN_STEPS = [
  {
    title: 'Pre-market scan',
    detail: 'Review the algo signals and key levels for each ticker.',
  },
  {
    title: 'Scenario mapping',
    detail: 'Define what you will do if price confirms or invalidates.',
  },
  {
    title: 'Execution notes',
    detail: 'Share entry, risk, and target guidance with the community.',
  },
];

export default function TradePlanPage() {
  return (
    <section className="relative py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col gap-5 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-text-muted">Daily Trade Plan</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            Plan the trade before the trade.
          </h1>
          <p className="text-lg text-text-muted">
            The plan is delivered daily with structured levels and a clear playbook so members can
            act with discipline.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {PLAN_STEPS.map((step) => (
            <div
              key={step.title}
              className="rounded-2xl border border-border bg-surface/60 p-6"
            >
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-text-muted">{step.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
