const LEVEL_FEATURES = [
  'Key support and resistance zones for the next session',
  'Trigger areas tied to our algorithm filters',
  'Invalidation notes so risk stays defined',
  'Aligned with TradingView overlays for quick execution',
];

export default function AlgoLevelsPage() {
  return (
    <section className="relative py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col gap-5 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-text-muted">Algo Levels</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            Daily level maps with a clear plan.
          </h1>
          <p className="text-lg text-text-muted">
            We publish structured PDFs so members know the possible options before the bell.
            Levels are aligned with our algo filters and shared in Discord.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface/60 p-6">
            <h3 className="text-lg font-semibold">What is inside</h3>
            <ul className="mt-4 space-y-2 text-sm text-text-muted">
              {LEVEL_FEATURES.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-bg/80 p-6">
            <h3 className="text-lg font-semibold">Delivery cadence</h3>
            <p className="mt-2 text-sm text-text-muted">
              Updates post as soon as the plan is ready, usually ahead of the next session.
              Members can track revisions in Discord and compare against TradingView.
            </p>
            <div className="mt-6 rounded-xl border border-border/70 bg-surface/60 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-text-muted">Sample</p>
              <p className="mt-2 text-sm font-semibold">Tomorrow Levels - PDF</p>
              <p className="text-xs text-text-muted">Support, resistance, and execution notes.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
