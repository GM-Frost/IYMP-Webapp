'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Motion } from '@/components/motion/Motion';
import { Button } from '@/components/ui';

const TRADE_ROWS = [
  { ticker: 'AAPL', entry: '$3.65', pnl: '+2.75%' },
  { ticker: 'NVDA', entry: '$2.59', pnl: '+1.90%' },
  { ticker: 'MSFT', entry: '$3.10', pnl: '+0.82%' },
  { ticker: 'GOOGL', entry: '$5.65', pnl: '+2.43%' },
  { ticker: 'AMZN', entry: '$3.80', pnl: '+2.47%' },
  { ticker: 'META', entry: '$3.05', pnl: '-1.80%' },
  { ticker: 'UARO', entry: '$3.62', pnl: '+0.30%' },
  { ticker: 'TSLA', entry: '$7.09', pnl: '+1.45%' },
];

const HistoricChartSection = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = mounted && resolvedTheme === 'dark';

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative py-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-6 left-10 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-6 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.05]">
          <div className="h-full w-full bg-[radial-gradient(circle_at_top,#ffffff12,transparent_45%),radial-gradient(circle_at_bottom,#ffffff0f,transparent_50%)]" />
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <Motion className="motion-slide-top motion-ease-out motion-slow text-center" step={0}>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-500/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-emerald-400">
            Verified performance
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Historical Profit and Loss
          </h2>
          <p className={`mt-3 text-sm ${isDark ? 'text-white/65' : 'text-slate-600'}`}>
            Long-view equity curves with recent trade highlights and risk context.
          </p>
        </Motion>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          <Motion className="motion-fade-up motion-slow" step={1}>
            <div
              className={`relative overflow-hidden rounded-3xl border p-6 ${
                isDark
                  ? 'border-white/10 bg-black/60 text-white shadow-[0_25px_80px_-50px_rgba(16,185,129,0.55)]'
                  : 'border-black/10 bg-white/90 text-slate-900 shadow-[0_18px_60px_-40px_rgba(15,23,42,0.2)]'
              }`}
            >
              <div className="absolute inset-0 opacity-[0.08]">
                <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-size-[36px_36px]" />
              </div>

              <div className="relative z-10 space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-emerald-400/80">
                      All-time PnL (since 2025)
                    </p>
                    <p className={`mt-2 text-sm ${isDark ? 'text-white/60' : 'text-slate-600'}`}>
                      Equity curve with drawdown filters applied.
                    </p>
                  </div>
                  <div className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
                    +24.7% CAGR
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br to-emerald-900/30 p-5">
                  <svg viewBox="0 0 520 200" className="h-48 w-full" fill="none">
                    <defs>
                      <linearGradient id="area" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="rgba(52,211,153,0.6)" />
                        <stop offset="70%" stopColor="rgba(52,211,153,0.12)" />
                        <stop offset="100%" stopColor="rgba(52,211,153,0)" />
                      </linearGradient>
                      <linearGradient id="line" x1="0" x2="1" y1="0" y2="0">
                        <stop offset="0%" stopColor="rgba(52,211,153,0.95)" />
                        <stop offset="100%" stopColor="rgba(34,211,238,0.85)" />
                      </linearGradient>
                      <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
                        <feGaussianBlur stdDeviation="6" result="blur" />
                        <feMerge>
                          <feMergeNode in="blur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>

                    <path
                      d="M0 170 L30 162 L60 168 L90 150 L120 152 L150 138 L180 140 L210 120 L240 126 L270 110 L300 105 L330 88 L360 95 L390 76 L420 68 L450 72 L480 55 L520 40 L520 200 L0 200 Z"
                      fill="url(#area)"
                    />
                    <path
                      d="M0 170 L30 162 L60 168 L90 150 L120 152 L150 138 L180 140 L210 120 L240 126 L270 110 L300 105 L330 88 L360 95 L390 76 L420 68 L450 72 L480 55 L520 40"
                      stroke="url(#line)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      filter="url(#glow)"
                    />
                  </svg>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-emerald-400/70">
                  <span>16.3% max drawdown</span>
                  <span className="h-px w-10 bg-emerald-300/30" />
                  <span>1.8R avg trade</span>
                </div>
              </div>
            </div>
          </Motion>

          <Motion className="motion-fade-up motion-slow" step={2} stepDelay={140}>
            <div
              className={`relative overflow-hidden rounded-3xl border p-6 ${
                isDark
                  ? 'border-white/10 bg-black/60 text-white'
                  : 'border-black/10 bg-white/90 text-slate-900'
              }`}
            >
              <div className="absolute inset-0 bg-linear-to-br from-emerald-500/10 via-transparent to-cyan-500/10" />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-emerald-400/80">
                      Recent trade PnL
                    </p>
                    <p className={`mt-2 text-sm ${isDark ? 'text-white/60' : 'text-slate-600'}`}>
                      Last 8 closed positions
                    </p>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                    86% Win
                  </span>
                </div>

                <div className="space-y-2">
                  {TRADE_ROWS.map((row) => (
                    <div
                      key={row.ticker}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-emerald-400">{row.ticker}</span>
                        <span className={`${isDark ? 'text-white/60' : 'text-slate-600'}`}>
                          {row.entry}
                        </span>
                      </div>
                      <span
                        className={`font-semibold ${row.pnl.startsWith('+') ? 'text-emerald-400' : 'text-rose-500'}`}
                      >
                        {row.pnl}
                      </span>
                    </div>
                  ))}
                </div>

                <Button bloom className="w-full">
                  Download Full History
                </Button>
              </div>
            </div>
          </Motion>
        </div>
      </div>
    </section>
  );
};

export default HistoricChartSection;
