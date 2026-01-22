'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Motion } from '@/components/motion/Motion';
import { Button } from '@/components/ui';

const CHANNELS = [
  {
    name: 'Discord War Room',
    description: 'Live market commentary, setups, and after-action recaps.',
    cta: 'Join Discord',
    accent: 'from-indigo-600/30 via-blue-500/10 to-transparent',
    glow: 'bg-indigo-500/20',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-indigo-400"
        aria-hidden
      >
        <path d="M8 17c.9.7 2.2 1 4 1s3.1-.3 4-1" />
        <path d="M7 7h10l1.8 8.4a2 2 0 0 1-1 2.2C16.9 19 14.7 20 12 20s-4.9-1-5.8-2.4a2 2 0 0 1-1-2.2L7 7Z" />
        <circle cx="9" cy="12" r="1" />
        <circle cx="15" cy="12" r="1" />
      </svg>
    ),
  },
  {
    name: 'Instagram Signal Reel',
    description: 'Visual breakdowns, wins, and quick pattern lessons.',
    cta: 'Follow Instagram',
    accent: 'from-fuchsia-600/30 via-rose-500/10 to-transparent',
    glow: 'bg-fuchsia-500/20',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-fuchsia-400"
        aria-hidden
      >
        <rect x="4" y="4" width="16" height="16" rx="5" />
        <circle cx="12" cy="12" r="3.2" />
        <circle cx="17.2" cy="6.8" r="1" />
      </svg>
    ),
  },
  {
    name: 'Daily Signal Room',
    description: 'Curated alerts and summaries delivered straight to your inbox.',
    cta: 'Join Newsletter',
    accent: 'from-emerald-600/30 via-emerald-500/10 to-transparent',
    glow: 'bg-emerald-500/20',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-emerald-500"
        aria-hidden
      >
        <path d="M4 7h16v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
        <path d="m4 8 8 5 8-5" />
      </svg>
    ),
  },
];

const JoinSection = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = mounted && resolvedTheme === 'dark';

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative py-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-12 right-10 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute bottom-8 left-0 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.05]">
          <div className="h-full w-full bg-[radial-gradient(circle_at_top,#ffffff12,transparent_45%),radial-gradient(circle_at_bottom,#ffffff0f,transparent_50%)]" />
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <Motion className="motion-slide-top motion-ease-out motion-slow text-center" step={0}>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-500/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-emerald-400">
            Join the crew
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Enter the Signal Network
          </h2>
          <p className={`mt-3 text-sm ${isDark ? 'text-white/65' : 'text-slate-600'}`}>
            Tap into the channels that keep the IYMP community locked in and moving together.
          </p>
        </Motion>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {CHANNELS.map((channel, index) => (
            <Motion
              key={channel.name}
              className="motion-fade-up motion-slow"
              step={1}
              delay={index * 140}
            >
              <div
                className={`group relative overflow-hidden rounded-3xl border p-6 backdrop-blur-xl transition-transform duration-500 hover:-translate-y-2 ${
                  isDark
                    ? 'border-white/10 bg-black/60 text-white shadow-[0_22px_70px_-50px_rgba(99,102,241,0.5)]'
                    : 'border-black/10 bg-white/90 text-slate-900 shadow-[0_18px_60px_-40px_rgba(15,23,42,0.2)]'
                }`}
              >
                <div aria-hidden className={`absolute inset-0 bg-linear-to-br ${channel.accent}`} />
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 ${channel.glow}`}
                    >
                      {channel.icon}
                    </div>
                    <span className="text-xs uppercase tracking-[0.3em] text-red-500 animate-pulse">
                      Live
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">{channel.name}</h3>
                    <p className={`mt-2 text-sm ${isDark ? 'text-white/65' : 'text-slate-600'}`}>
                      {channel.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-emerald-500">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                      Active now
                    </div>
                    <Button variant="outlined" className="text-xs">
                      {channel.cta}
                    </Button>
                  </div>
                </div>
              </div>
            </Motion>
          ))}
        </div>

        <Motion className="motion-fade-up motion-slow" step={2} stepDelay={160}>
          <div
            className={`mt-10 flex flex-col items-center justify-between gap-4 rounded-3xl border px-6 py-5 text-center md:flex-row md:text-left ${
              isDark
                ? 'border-white/10 bg-white/5 text-white'
                : 'border-black/10 bg-white/90 text-slate-900'
            }`}
          >
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-400/80">IYMP Updates</p>
              <p className={`mt-2 text-sm ${isDark ? 'text-white/65' : 'text-slate-600'}`}>
                Weekly playbook drops, performance audits, and market recaps.
              </p>
            </div>
            <Button bloom>Get Weekly Update</Button>
          </div>
        </Motion>
      </div>
    </section>
  );
};

export default JoinSection;
