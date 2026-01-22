'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export default function Footer() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = mounted && resolvedTheme === 'dark';

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer
      className={`relative mt-24 overflow-hidden border-t ${
        isDark ? 'border-white/10 bg-black text-white' : 'border-black/10 bg-slate-950 text-white'
      }`}
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 right-10 h-72 w-72 rounded-full bg-emerald-500/15 blur-3xl" />
        <div className="absolute bottom-0 left-10 h-80 w-80 rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.08]">
          <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-size-[64px_64px]" />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/40 text-emerald-200">
                <span className="text-lg font-semibold">IYMP</span>
              </div>
              <div>
                <p className="text-sm font-semibold tracking-wide text-white">
                  It’s Your Money Plant
                </p>
                <p className="text-xs uppercase tracking-[0.3em] text-emerald-300/70">
                  Algorithmic Trading
                </p>
              </div>
            </div>
            <p className="max-w-md text-sm text-white/70">
              A disciplined trading ecosystem built on rules, risk control, and repeatable
              execution. No noise, just signal.
            </p>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-emerald-300/70">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Always learning, always adapting
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">Platform</p>
              <ul className="space-y-2 text-sm text-white/75">
                <li>Live Algo Preview</li>
                <li>Study Materials</li>
                <li>Historical Performance</li>
                <li>Community War Room</li>
              </ul>
            </div>
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">Resources</p>
              <ul className="space-y-2 text-sm text-white/75">
                <li>Risk Frameworks</li>
                <li>Trade Journal OS</li>
                <li>Weekly Recaps</li>
                <li>FAQs</li>
              </ul>
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-300/80">
                Signal Updates
              </p>
              <p className="mt-2 text-sm text-white/70">
                Get weekly playbooks, risk notes, and new setup alerts.
              </p>
              <div className="mt-4 flex gap-2">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-400/40"
                />
                <button
                  type="button"
                  className="rounded-2xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-black transition hover:bg-emerald-400"
                >
                  Join
                </button>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/60">
              <span>Discord</span>
              <span className="h-px w-6 bg-white/20" />
              <span>Instagram</span>
              <span className="h-px w-6 bg-white/20" />
              <span>YouTube</span>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} IYMP Trading Education. Educational purposes only.</p>
          <p>Built with discipline • Powered by data</p>
        </div>
      </div>
    </footer>
  );
}
