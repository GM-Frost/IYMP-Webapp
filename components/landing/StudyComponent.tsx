'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Motion } from '@/components/motion/Motion';
import { Button } from '@/components/ui';

const STUDY_ITEMS = [
  {
    title: 'Option Trading Basics',
    subtitle: 'Foundations',
    badge: 'Starter Kit',
    cta: 'Download Now',
    accent: 'from-emerald-400/30 via-emerald-500/10 to-transparent',
    cover: 'from-emerald-500/90 via-emerald-700/90 to-slate-950',
  },
  {
    title: 'Advanced Strategies',
    subtitle: 'Systems',
    badge: 'Pro Build',
    cta: 'Download Now',
    accent: 'from-cyan-400/30 via-cyan-500/10 to-transparent',
    cover: 'from-cyan-500/90 via-teal-700/90 to-slate-950',
  },
  {
    title: 'Algo Setup Guide',
    subtitle: 'Execution',
    badge: 'Live Stack',
    cta: 'Download Now',
    accent: 'from-amber-300/30 via-amber-500/10 to-transparent',
    cover: 'from-amber-400/90 via-orange-600/90 to-slate-950',
  },
];

const StudyComponent = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = mounted && resolvedTheme === 'dark';

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative py-25">
      {/* ambiance */}
      <div className="absolute inset-0 -z-10 opacity-[0.05]">
        <div className="h-full w-full bg-[radial-gradient(circle_at_top,#ffffff12,transparent_45%),radial-gradient(circle_at_bottom,#ffffff0f,transparent_50%)]" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <Motion
          className="motion-slide-top motion-ease-out motion-slow mb-10 text-center"
          step={0}
          stepDelay={160}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-500/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-emerald-300">
            Study Lab
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Our Study Materials
          </h2>
          <p className={`mt-3 text-sm ${isDark ? 'text-white/65' : 'text-slate-600'}`}>
            Printable playbooks that turn setups into a repeatable system.
          </p>
        </Motion>

        <div className="grid gap-8 lg:grid-cols-3">
          {STUDY_ITEMS.map((item, index) => (
            <Motion
              key={item.title}
              className="motion-fade-up motion-slow"
              step={1}
              delay={index * 140}
            >
              <div
                className={`group relative overflow-hidden rounded-3xl border p-6 backdrop-blur-xl transition-transform duration-500 hover:-translate-y-2 ${
                  isDark
                    ? 'border-white/10 bg-black/60 text-white shadow-[0_25px_80px_-50px_rgba(16,185,129,0.6)]'
                    : 'border-black/10 bg-white/90 text-slate-900 shadow-[0_18px_60px_-40px_rgba(15,23,42,0.2)]'
                }`}
              >
                <div aria-hidden className={`absolute inset-0 bg-linear-to-br ${item.accent}`} />

                <div className="relative z-10 space-y-6">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.25em]">
                    <span className="text-emerald-500">{item.subtitle}</span>
                    <span
                      className={`rounded-full border px-3 py-1 text-[10px]
                        ${
                          isDark
                            ? ' border-white/15 bg-white/5 text-white/70 shadow-[0_25px_80px_-50px_rgba(16,185,129,0.6)]'
                            : ' border-black/15 bg-white/5 text-black/70 shadow-[0_18px_60px_-40px_rgba(15,23,42,0.2)]'
                        }
                        `}
                    >
                      {item.badge}
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <div
                      className={`relative h-40 w-28 rounded-2xl bg-linear-to-br ${item.cover} shadow-[0_18px_40px_-28px_rgba(15,23,42,0.75)]`}
                    >
                      <div className="absolute inset-3 rounded-xl border border-white/15 bg-black/20" />
                      <div className="absolute left-3 top-3 h-6 w-10 rounded-md bg-white/10" />
                      <div className="absolute bottom-4 left-3 right-3 h-1 rounded-full bg-white/30" />
                      <div className="absolute bottom-8 left-3 right-8 h-1 rounded-full bg-white/20" />
                      <div className="absolute bottom-12 left-3 right-12 h-1 rounded-full bg-white/20" />
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold leading-snug">{item.title}</h3>
                      <p className={`text-sm ${isDark ? 'text-white/65' : 'text-slate-600'}`}>
                        Field-ready notes, checklists, and decision prompts for faster execution.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-emerald-500">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      Updated weekly
                    </div>
                    <Button variant="outlined" className="text-xs">
                      {item.cta}
                    </Button>
                  </div>
                </div>
              </div>
            </Motion>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudyComponent;
