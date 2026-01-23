const TICKERS = ['AAPL', 'TSLA', 'AMZN', 'NFLX', 'BA', 'GOOGL', 'SHOP', 'NVDA'];

export default function TickerCoveragePage() {
  return (
    <section className="relative py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col gap-5 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-text-muted">Ticker Coverage</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            Focused liquidity for repeatable execution.
          </h1>
          <p className="text-lg text-text-muted">
            Our algorithms scan eight major tickers to keep the playbook tight, liquid, and
            consistent across sessions.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TICKERS.map((ticker) => (
            <div
              key={ticker}
              className="rounded-2xl border border-border bg-surface/60 p-6 text-center"
            >
              <p className="text-xl font-semibold tracking-wide">{ticker}</p>
              <p className="mt-2 text-xs text-text-muted">High-liquidity options focus</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-bg/80 p-6">
          <h3 className="text-lg font-semibold">Why eight?</h3>
          <p className="mt-2 text-sm text-text-muted">
            A focused watchlist improves speed, pattern recognition, and confidence. It also keeps
            the Discord community aligned around the same opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}
