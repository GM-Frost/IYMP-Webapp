'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Motion } from '@/components/motion/Motion';

const TESTIMONIALS = [
  {
    name: 'Maya R.',
    role: 'Options Trader',
    headline: 'Finally a system that feels calm.',
    quote:
      'The daily playbooks remove the guesswork. I know exactly when to size up or stand down, and it keeps me consistent.',
    metric: '+18.4% 90-day',
  },
  {
    name: 'Darius K.',
    role: 'Swing Trader',
    headline: 'Signals + structure is the edge.',
    quote:
      'IYMP pairs alerts with reasoning. The recap calls changed my execution and helped me hold winners longer.',
    metric: '71% win rate',
  },
  {
    name: 'Selena J.',
    role: 'Full-Time Trader',
    headline: 'Risk finally feels controlled.',
    quote:
      'The journal templates and risk guardrails keep me from revenge trades. It feels like a real trading desk now.',
    metric: '-6% max DD',
  },
  {
    name: 'Andre W.',
    role: 'Futures Trader',
    headline: 'Best community energy.',
    quote:
      'The Discord war room is electric. The team calls out pivots before they happen, and the strategy stays clear.',
    metric: '+2.1R avg',
  },
  {
    name: 'Nayan B.',
    role: 'Swing Trader',
    headline: 'Clean, repeatable setups.',
    quote:
      'The playbook format makes every trade feel pre-planned. I do not chase; I execute exactly what the setup requires.',
    metric: '4x weekly',
  },
  {
    name: 'Ayan B.',
    role: 'Scalp Trader',
    headline: 'Fewer trades, better ones.',
    quote:
      'The filters cut out noise fast. My win rate improved because I only take the A+ triggers now.',
    metric: '+12% MoM',
  },
  {
    name: 'Prakash S.',
    role: 'Futures Trader',
    headline: 'Signal flow feels professional.',
    quote:
      'Risk calls, bias updates, and exits are clear. It feels like sitting on a real desk with a lead strategist.',
    metric: '1.9R avg',
  },
  {
    name: 'Ivy L.',
    role: 'Options Trader',
    headline: 'Confidence finally sticks.',
    quote:
      'I used to second-guess every entry. Now I follow the system and review the notes each week.',
    metric: '82% plans',
  },
];

const Testimonial = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = mounted && resolvedTheme === 'dark';

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative py-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-12 left-10 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-6 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.06]">
          <div className="h-full w-full bg-[radial-gradient(circle_at_top,#ffffff12,transparent_45%),radial-gradient(circle_at_bottom,#ffffff0f,transparent_50%)]" />
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <Motion className="motion-slide-top motion-ease-out motion-slow text-center" step={0}>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-500/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-emerald-400">
            Proof from the floor
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Traders Speak for Themselves
          </h2>
          <p className={`mt-3 text-sm ${isDark ? 'text-white/65' : 'text-slate-600'}`}>
            Real feedback from active members across multiple trading styles.
          </p>
        </Motion>

        <Motion className="motion-fade-up motion-slow" step={1} stepDelay={160}>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {TESTIMONIALS.map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className={`group relative overflow-hidden rounded-3xl border p-5 backdrop-blur-xl transition-transform duration-500 hover:-translate-y-2 ${
                  isDark
                    ? 'border-white/10 bg-black/60 text-white shadow-[0_20px_60px_-40px_rgba(16,185,129,0.45)]'
                    : 'border-black/10 bg-white/90 text-slate-900 shadow-[0_18px_60px_-40px_rgba(15,23,42,0.2)]'
                } ${index % 2 === 0 ? 'xl:translate-y-3' : 'xl:-translate-y-2'}`}
              >
                <div
                  aria-hidden
                  className="absolute inset-0 bg-linear-to-br from-white/8 via-transparent to-emerald-400/10"
                />

                <div className="relative z-10 flex h-full flex-col gap-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-emerald-400/70">
                        {item.role}
                      </p>
                      <h3 className="mt-3 text-base font-semibold leading-snug">{item.headline}</h3>
                    </div>
                    <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-[11px] text-emerald-400">
                      {item.metric}
                    </span>
                  </div>

                  <p
                    className={`text-sm leading-relaxed ${isDark ? 'text-white/70' : 'text-slate-600'}`}
                  >
                    "{item.quote}"
                  </p>

                  <div className="mt-auto flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm font-semibold text-emerald-400">
                      {item.name.split(' ')[0][0]}
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{item.name}</p>
                      <p className={`text-xs ${isDark ? 'text-white/50' : 'text-slate-500'}`}>
                        Verified member
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Motion>

        <Motion className="motion-fade-up motion-slow" step={2} stepDelay={220}>
          <div
            className={`mt-10 flex flex-wrap items-center justify-between gap-4 rounded-3xl border px-6 py-4 text-xs uppercase tracking-[0.3em] ${
              isDark
                ? 'border-white/10 bg-white/5 text-white/70'
                : 'border-black/10 bg-white/90 text-slate-600'
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Verified member feedback
            </div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-emerald-300/40" />
              Weekly trade reviews
            </div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-emerald-300/40" />
              Risk-first culture
            </div>
          </div>
        </Motion>
      </div>
    </section>
  );
};

export default Testimonial;
