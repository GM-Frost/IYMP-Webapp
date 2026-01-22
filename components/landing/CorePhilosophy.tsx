'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Motion } from '@/components/motion/Motion';

const PHILOSOPHIES = [
  {
    title: 'Algorithm-First Discipline',
    description:
      'Every decision starts with rules, not reaction. We let verified signals lead and remove emotional drift.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-emerald-500 dark:text-emerald-300"
        aria-hidden
      >
        <path d="M4 7h9M4 12h16M4 17h11" />
        <path d="M17 7l3 3-3 3" />
      </svg>
    ),
  },
  {
    title: 'Repeatable by Design',
    description:
      'We grow outcomes through consistency. Every trade follows the same planting cycle: signal, size, protect.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-emerald-500 dark:text-emerald-300"
        aria-hidden
      >
        <path d="M3 12a9 9 0 0 1 15.3-6.3L21 8" />
        <path d="M21 12a9 9 0 0 1-15.3 6.3L3 16" />
      </svg>
    ),
  },
  {
    title: 'Risk as Healthy Soil',
    description:
      'We protect capital so growth can compound. Tight exposure, clear exits, and patient scaling keep the roots strong.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-emerald-500 dark:text-emerald-300"
        aria-hidden
      >
        <path d="M12 3v18" />
        <path d="M6 9c3 2 9 2 12 0" />
        <path d="M8 21c1.5-4 6.5-4 8 0" />
      </svg>
    ),
  },
];

const CorePhilosophy = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = mounted && resolvedTheme === 'dark';

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative overflow-hidden py-20">
      {/* background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 right-10 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute bottom-10 left-6 h-72 w-72 rounded-full bg-emerald-800/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        {/* heading */}
        <Motion
          className="motion-slide-top motion-ease-out motion-slow mb-12 text-center"
          step={0}
          stepDelay={180}
        >
          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.35em] text-emerald-300">
              Thoughtful automation
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              IYMP Core Philosophy
            </h2>
          </div>
        </Motion>

        {/* cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {PHILOSOPHIES.map((item, index) => (
            <Motion
              key={item.title}
              className="motion-fade-up motion-slow"
              delay={index * 220}
              step={1}
              stepDelay={180}
            >
              <div
                className={`group relative overflow-hidden rounded-2xl p-6 backdrop-blur-xl ${
                  isDark
                    ? 'border border-white/10 bg-black/50 text-white shadow-[0_30px_80px_-60px_rgba(16,185,129,0.45)]'
                    : 'border border-black/10 bg-white/70 text-slate-900 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.2)]'
                }`}
              >
                <div
                  aria-hidden
                  className={`pointer-events-none absolute inset-0 ${
                    isDark
                      ? 'bg-linear-to-br from-white/12 via-white/6 to-transparent'
                      : 'bg-linear-to-br from-white/70 via-white/30 to-transparent'
                  }`}
                />
                {/* glow */}
                <div
                  aria-hidden
                  className="absolute -top-16 -right-10 h-32 w-32 rounded-full bg-emerald-400/10 blur-2xl transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  aria-hidden
                  className="absolute bottom-0 left-0 h-1 w-full bg-linear-to-r from-emerald-400/50 via-emerald-300/10 to-transparent"
                />

                <div className="relative z-10">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl border bg-emerald-500/10 ${
                        isDark ? 'border-emerald-400/20' : 'border-emerald-300/50'
                      }`}
                    >
                      {item.icon}
                    </div>
                    <h3
                      className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}
                    >
                      {item.title}
                    </h3>
                  </div>

                  <p
                    className={`mt-4 text-sm leading-relaxed ${
                      isDark ? 'text-white/70' : 'text-slate-700'
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </Motion>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorePhilosophy;
