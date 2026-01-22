'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Motion } from '@/components/motion/Motion';
import { Button } from '@/components/ui';

const FEATURES = [
  {
    title: 'Signal Alignment',
    description: 'Bias, momentum, and liquidity sync before the alert is sent.',
  },
  {
    title: 'Risk Envelope',
    description: 'A live safety band shows max loss, target zones, and cutoffs.',
  },
  {
    title: 'Execution Trace',
    description: 'Every entry highlights the exact rule that fired the signal.',
  },
];

const STREAM = [
  { time: '09:41', label: 'Nasdaq: pullback', tone: 'text-emerald-300' },
  { time: '09:44', label: 'Trend bias: bullish', tone: 'text-cyan-300' },
  { time: '09:47', label: 'Risk: 0.62', tone: 'text-amber-200' },
  { time: '09:52', label: 'Entry armed', tone: 'text-emerald-300' },
];

const LiveAlgoPreview = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = mounted && resolvedTheme === 'dark';

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative overflow-hidden py-20">
      {/* background atmosphere */}
      <div className="absolute inset-0 -z-10">
        {/* <div className="absolute top-10 right-50 h-72 w-72 rounded-full bg-emerald-500/10 blur-5xl" />
        <div className="absolute bottom-10 left-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" /> */}
        <div className="absolute inset-0 opacity-[0.06]">
          <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-size-[46px_46px]" />
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          {/* left content */}
          <div className="space-y-8">
            <Motion className="motion-fade motion-ease-out" step={0}>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-500/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-emerald-500">
                Premium preview
              </div>
            </Motion>

            <Motion className="motion-slide-left motion-ease-out motion-slow" step={1}>
              <div>
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  Live Algo Preview
                </h2>
                <p
                  className={`mt-4 text-base leading-relaxed ${isDark ? 'text-white/70' : 'text-slate-700'}`}
                >
                  Watch the strategy think in real time. The feed shows the rules, the bias, and the
                  risk guardrails before a trade is ever confirmed.
                </p>
              </div>
            </Motion>

            <Motion className="motion-fade-up motion-slow" step={2} stepDelay={160}>
              <div className="grid gap-4 sm:grid-cols-3">
                {FEATURES.map((feature) => (
                  <div
                    key={feature.title}
                    className={`rounded-2xl border p-4 backdrop-blur-xl ${
                      isDark
                        ? 'border-white/10 bg-black/45 text-white'
                        : 'border-black/10 bg-white/80 text-slate-900'
                    }`}
                  >
                    <div className="flex items-center gap-2 text-sm font-semibold">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.6)]" />
                      {feature.title}
                    </div>
                    <p
                      className={`mt-2 text-xs leading-relaxed ${isDark ? 'text-white/70' : 'text-slate-600'}`}
                    >
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </Motion>

            <Motion className="motion-rise" step={3} stepDelay={160}>
              <div className="flex flex-wrap items-center gap-4">
                <Button bloom>Unlock Live Signals</Button>
                <div
                  className={`text-xs uppercase tracking-[0.3em] ${isDark ? 'text-white/50' : 'text-slate-500'}`}
                >
                  IYMP Pro members
                </div>
              </div>
            </Motion>
          </div>

          {/* right preview */}
          <Motion
            className="motion-slide-right motion-ease-out motion-slow"
            step={2}
            stepDelay={120}
          >
            <div
              className={`relative overflow-hidden rounded-3xl border p-6 shadow-[0_30px_80px_-60px_rgba(16,185,129,0.55)] ${
                isDark
                  ? 'border-white/10 bg-black/60 text-white'
                  : 'border-black/10 bg-white/90 text-slate-900'
              }`}
            >
              <div className="absolute -top-10 left-10 h-40 w-40 rounded-full bg-emerald-400/10 blur-3xl" />
              <div className="absolute -bottom-20 right-8 h-44 w-44 rounded-full bg-cyan-400/10 blur-3xl" />

              <div className="relative z-10 space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-emerald-500/80 drop-shadow-[0_0_10px_rgba(16,185,129,0.65)]">
                      IYMP Algo Terminal
                    </p>
                    <p className={`text-sm ${isDark ? 'text-white/70' : 'text-slate-600'}`}>
                      Real-time decision stream
                    </p>
                  </div>
                  <div className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-500">
                    Locked preview
                  </div>
                </div>

                <div className="relative overflow-hidden  border border-white/10 bg-linear-to-br from-black/90 via-black/90 to-emerald-900/70 p-5">
                  <div className="absolute inset-0 opacity-60">
                    <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[24px_24px]" />
                  </div>

                  <div className="relative z-10">
                    <div className="mb-6 flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      <div className="h-2 w-2 rounded-full bg-cyan-300 animate-pulse" />
                      <div className="h-2 w-2 rounded-full bg-amber-200 animate-pulse" />
                      <span className="ml-2 text-xs uppercase tracking-[0.3em] text-white/60">
                        Live feed
                      </span>
                    </div>

                    <svg
                      viewBox="0 0 420 140"
                      className="h-32 w-full text-emerald-300/70"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M0 110 C40 95, 60 120, 90 95 C125 65, 150 70, 175 60 C200 50, 220 80, 245 70 C270 60, 300 40, 335 55 C360 65, 385 85, 420 40" />
                      <path
                        d="M0 125 C30 110, 70 130, 120 115 C155 105, 190 95, 220 100 C255 108, 280 95, 310 88 C340 80, 375 90, 420 65"
                        className="text-cyan-300/60"
                      />
                    </svg>

                    <div className="mt-4 grid gap-2 text-xs text-white/70 sm:grid-cols-2">
                      {STREAM.map((item) => (
                        <div
                          key={item.time}
                          className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-3 py-2"
                        >
                          <span className="text-white/40">{item.time}</span>
                          <span className={`font-semibold ${item.tone}`}>{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* lock overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/50 text-center backdrop-blur-sm">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/5">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-7 w-7 text-white/80"
                        aria-hidden
                      >
                        <path d="M7 11V8a5 5 0 0 1 10 0v3" />
                        <rect x="5" y="11" width="14" height="10" rx="2" />
                      </svg>
                    </div>
                    <p className="text-sm font-semibold text-white">Locked for subscribers</p>
                    <p className="text-xs text-white/70">
                      Sign up to unlock the live signal stream.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs">
                  <div className="flex items-center gap-2 text-emerald-600">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    Premium feed active
                  </div>
                  <div className="text-muted/60">Updates every 3 seconds</div>
                </div>
              </div>
            </div>
          </Motion>
        </div>
      </div>
    </section>
  );
};

export default LiveAlgoPreview;
