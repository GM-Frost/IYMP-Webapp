const HIGHLIGHTS = [
  {
    title: 'Signal Engine',
    description: 'Rules-based scans that surface structured setups across our core tickers.',
  },
  {
    title: 'Algo Levels',
    description: 'Daily PDF level maps and plan notes for the next session.',
  },
  {
    title: 'Ticker Coverage',
    description: 'Focused on eight liquid names for repeatable execution and consistency.',
  },
  {
    title: 'TradingView Access',
    description: 'Paid TradingView tools with our proprietary algo overlays and alerts.',
  },
];

const STRATEGIES = [
  {
    name: 'ET (8/21 SMA)',
    summary: 'Trend structure with clean continuation triggers and risk clarity.',
  },
  {
    name: 'LaunchPad',
    summary: 'Momentum ignition setup designed for breakout expansion.',
  },
  {
    name: 'DBT (3-Day Reversal)',
    summary: 'Mean reversion entry when price shifts after a three-day run.',
  },
  {
    name: 'Kicker',
    summary: 'Sharp reversal pattern that captures early trend changes.',
  },
  {
    name: 'Ideal Setup',
    summary: 'Highest-confluence scenario when all conditions align.',
  },
  {
    name: 'TGIF (Friday Momentum)',
    summary: 'End-of-week acceleration plan with defined targets.',
  },
];

export default function AlgoSuitePage() {
  return (
    <section className="relative py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col gap-5 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-text-muted">Algo Suite</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            Rule-driven trading built for consistency.
          </h1>
          <p className="text-lg text-text-muted">
            IYMP is an algorithm-first trading ecosystem. We replace emotion with a repeatable
            process so members can plan the trade, trade the plan, and build steady execution.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {HIGHLIGHTS.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-surface/60 p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-text-muted">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-border bg-surface/60 p-8">
            <h2 className="text-2xl font-semibold">Strategy Library</h2>
            <p className="mt-2 text-sm text-text-muted">
              Built-in playbooks with rules, triggers, and invalidations.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {STRATEGIES.map((strategy) => (
                <div
                  key={strategy.name}
                  className="rounded-xl border border-border/70 bg-bg/60 p-4"
                >
                  <p className="text-sm font-semibold">{strategy.name}</p>
                  <p className="mt-2 text-xs text-text-muted">{strategy.summary}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-gradient p-8 text-black">
            <h2 className="text-2xl font-semibold">How it works</h2>
            <ol className="mt-4 space-y-3 text-sm font-medium">
              <li>1. Algorithms scan the core tickers for qualified setups.</li>
              <li>2. We publish levels, plans, and context inside Discord.</li>
              <li>3. Members execute with structured entries and risk rules.</li>
            </ol>
            <p className="mt-4 text-xs opacity-80">
              Educational use only. All trades involve risk and require personal judgment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
