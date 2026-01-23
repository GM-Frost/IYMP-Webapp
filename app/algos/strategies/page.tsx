const STRATEGIES = [
  {
    title: 'ET (8/21 SMA)',
    detail: 'Trend alignment strategy using the 8 and 21 moving averages.',
  },
  {
    title: 'LaunchPad',
    detail: 'Momentum ignition play for tight consolidations.',
  },
  {
    title: 'DBT (3-Day Reversal)',
    detail: 'Three-day reversal framework to capture mean reversion.',
  },
  {
    title: 'Kicker',
    detail: 'Sharp reversal pattern to catch early trend shifts.',
  },
  {
    title: 'Ideal Setup',
    detail: 'Highest-confluence setup when all filters align.',
  },
  {
    title: 'TGIF (Friday Momentum)',
    detail: 'End-of-week push designed for defined momentum targets.',
  },
];

export default function StrategiesPage() {
  return (
    <section className="relative py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col gap-5 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-text-muted">Strategy Library</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            Documented setups that remove guesswork.
          </h1>
          <p className="text-lg text-text-muted">
            Each strategy includes entry rules, invalidation points, and target logic. The goal is
            disciplined execution, not random predictions.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {STRATEGIES.map((strategy) => (
            <div
              key={strategy.title}
              className="rounded-2xl border border-border bg-surface/60 p-6"
            >
              <h3 className="text-lg font-semibold">{strategy.title}</h3>
              <p className="mt-2 text-sm text-text-muted">{strategy.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
