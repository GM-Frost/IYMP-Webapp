const ACCESS_POINTS = [
  {
    title: 'Proprietary overlays',
    detail: 'Custom scripts for levels, setups, and alerts built into TradingView.',
  },
  {
    title: 'Chart templates',
    detail: 'Saved layouts for fast scanning and repeatable execution.',
  },
  {
    title: 'Level alignment',
    detail: 'PDF level maps match the TradingView visuals for clarity.',
  },
];

export default function TradingViewAccessPage() {
  return (
    <section className="relative py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col gap-5 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-text-muted">TradingView Access</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            Paid data, our scripts, your edge.
          </h1>
          <p className="text-lg text-text-muted">
            We use TradingView premium tools to deliver algorithm overlays and alerts that align
            with the IYMP playbook.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {ACCESS_POINTS.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-surface/60 p-6"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-text-muted">{item.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-bg/80 p-6">
          <h3 className="text-lg font-semibold">Execution workflow</h3>
          <p className="mt-2 text-sm text-text-muted">
            Start with the level map, confirm the setup on TradingView, then execute with defined
            risk. Everything points to a clear plan before entry.
          </p>
        </div>
      </div>
    </section>
  );
}
