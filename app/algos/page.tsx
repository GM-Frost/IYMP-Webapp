import Link from 'next/link';
import { Button } from '@/components/ui';
import { Motion } from '@/components/motion/Motion';

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
    name: 'ET',
    summary: 'Trend structure with clean continuation triggers and risk clarity.',
  },
  {
    name: 'LaunchPad',
    summary: 'Momentum ignition setup designed for breakout expansion.',
  },
  {
    name: 'DBT (3-Day Continuation)',
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
  {
    name: 'TGIT (Thursday Momentum)',
    summary: 'End-of-week acceleration plan with defined targets.',
  },
  {
    name: 'COC',
    summary: '1 day swing',
  },
];

const TICKERS = ['AAPL', 'TSLA', 'AMZN', 'NFLX', 'BA', 'GOOGL', 'SHOP', 'NVDA'];

const PROCESS = [
  {
    title: 'Scan',
    detail: 'Algorithms monitor the core tickers and filter only qualified setups.',
  },
  {
    title: 'Plan',
    detail: 'Levels, scenarios, and notes publish in Discord before the session.',
  },
  {
    title: 'Execute',
    detail: 'Members trade the plan with defined invalidation and risk limits.',
  },
  {
    title: 'Review',
    detail: 'We refine with recaps, replays, and community feedback.',
  },
];

export default function AlgoSuitePage() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/15 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-secondary/15 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1a2a1f10_0%,transparent_55%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] items-center">
          <Motion className="motion-slide-left motion-ease-out" step={0}>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 w-fit">
                <span className="text-xs font-medium tracking-wide uppercase">Algo Suite</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
                Institutional discipline for real traders.
              </h1>
              <p className="text-lg text-text-muted">
                IYMP is an algorithm-first trading ecosystem. We replace emotion with a repeatable
                process so members can plan the trade, trade the plan, and build steady execution.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/pricing">
                  <Button bloom className="min-w-45">
                    Start with Pro
                  </Button>
                </Link>
                <Link href="/community/discord">
                  <Button variant="outlined" className="min-w-45">
                    Join the Discord
                  </Button>
                </Link>
              </div>
            </div>
          </Motion>

          <Motion className="motion-slide-right motion-ease-out" step={1}>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-6 shadow-xl">
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -right-10 -top-16 h-48 w-48 rounded-full bg-primary/15 blur-[80px]" />
                <div className="absolute -bottom-10 left-10 h-48 w-48 rounded-full bg-secondary/20 blur-[90px]" />
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(45,191,140,0.08),transparent_45%,rgba(223,185,61,0.08))]" />
              </div>
              <div className="relative rounded-2xl border border-border bg-bg p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-text-muted">
                  Daily Workflow
                </p>
                <div className="mt-4 grid gap-3 text-sm text-text-muted">
                  {PROCESS.map((step) => (
                    <div key={step.title} className="flex gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                      <div>
                        <p className="font-semibold text-text-primary">{step.title}</p>
                        <p>{step.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 px-4 py-3 text-xs text-text-muted">
                  Educational use only. All trades involve risk and require personal judgment.
                </div>
              </div>
            </div>
          </Motion>
        </div>

        <Motion className="motion-fade-up motion-ease-out" step={0}>
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -right-10 -top-16 h-48 w-48 rounded-full bg-primary/15 blur-[80px]" />
              <div className="absolute -bottom-10 left-10 h-48 w-48 rounded-full bg-secondary/10 blur-[90px]" />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(45,191,140,0.08),transparent_45%,rgba(223,185,61,0.08))]" />
            </div>
            {HIGHLIGHTS.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-surface p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </Motion>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Motion className="motion-slide-left motion-ease-out" step={0}>
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute rounded-3xl  inset-0 bg-[linear-gradient(35deg,rgba(45,191,140,0.08),transparent_45%,rgba(223,185,61,0.08))]" />
            </div>
            <div className="rounded-3xl border border-border bg-surface p-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-semibold">Strategy Library</h2>
                  <p className="mt-2 text-sm text-text-muted">
                    Built-in playbooks with rules, triggers, and invalidations.
                  </p>
                </div>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase text-primary">
                  Core
                </span>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {STRATEGIES.map((strategy) => (
                  <div
                    key={strategy.name}
                    className="rounded-xl border border-primary/70  bg-primary/10 p-4"
                  >
                    <p className="text-sm font-semibold">{strategy.name}</p>
                    <p className="mt-2 text-xs text-text-muted">{strategy.summary}</p>
                  </div>
                ))}
              </div>
            </div>
          </Motion>

          <Motion className="motion-slide-right motion-ease-out" step={1}>
            <div className="rounded-3xl border border-border bg-gradient p-8 text-black">
              <h2 className="text-2xl font-semibold">Core tickers</h2>
              <p className="mt-2 text-sm font-medium opacity-80">
                Eight liquid names for repeatable execution.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3 text-sm font-semibold">
                {TICKERS.map((ticker) => (
                  <div
                    key={ticker}
                    className="rounded-xl border border-black/10 bg-white/70 px-3 py-2 text-center"
                  >
                    {ticker}
                  </div>
                ))}
              </div>
              <div className="mt-6 text-xs font-medium opacity-80">
                Focus keeps the community aligned and reduces noise.
              </div>
            </div>
          </Motion>
        </div>

        <Motion className="motion-fade-up motion-ease-out" step={1}>
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-border bg-bg p-6">
              <p className="text-xs uppercase tracking-[0.22em] text-text-muted">Algo Levels</p>
              <h3 className="mt-3 text-xl font-semibold">Daily level maps.</h3>
              <p className="mt-2 text-sm text-text-muted">
                Structured PDFs post before the session with support, resistance, and triggers.
              </p>
              <Link
                href="/algos/levels"
                className="mt-6 inline-flex text-xs font-semibold text-primary"
              >
                View Levels
              </Link>
            </div>
            <div className="rounded-3xl border border-border bg-surface p-6">
              <p className="text-xs uppercase tracking-[0.22em] text-text-muted">TradingView</p>
              <h3 className="mt-3 text-xl font-semibold">Overlay access.</h3>
              <p className="mt-2 text-sm text-text-muted">
                Paid tools and scripts with our proprietary signals and alerts.
              </p>
              <Link
                href="/algos/tradingview"
                className="mt-6 inline-flex text-xs font-semibold text-primary"
              >
                See Access
              </Link>
            </div>
            <div className="rounded-3xl border border-border bg-bg p-6">
              <p className="text-xs uppercase tracking-[0.22em] text-text-muted">Community</p>
              <h3 className="mt-3 text-xl font-semibold">Trade plans in Discord.</h3>
              <p className="mt-2 text-sm text-text-muted">
                Live updates, level adjustments, and support from the IYMP team.
              </p>
              <Link
                href="/community/discord"
                className="mt-6 inline-flex text-xs font-semibold text-primary"
              >
                Join Discord
              </Link>
            </div>
          </div>
        </Motion>
      </div>
    </section>
  );
}
