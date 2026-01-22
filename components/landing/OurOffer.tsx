'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useTheme } from 'next-themes';
import { Motion } from '@/components/motion/Motion';
import {
  AdminPanelSettingsIcon,
  DescriptionIcon,
  MenuBookIcon,
  QueryStatsIcon,
  SchoolIcon,
  VoiceChatIcon,
} from '@/components/ui';

const OUR_OFFER = [
  {
    title: 'Structured Education',
    description:
      'Cohesive tracks that move from market structure to execution with exercises, checklists, and step audits.',
    tag: 'Foundations',
    highlights: ['Progressive modules', 'Decision templates', 'Skill checkpoints'],
    icon: <SchoolIcon />,
  },
  {
    title: 'Live Algo Previews',
    description:
      'See the algorithm think in real time. We reveal entries, exits, and risk posture before the market confirms.',
    tag: 'Live Signals',
    highlights: ['Pre-trade bias', 'Risk overlays', 'Session replay'],
    icon: <QueryStatsIcon />,
  },
  {
    title: 'Exclusive PDF Resources',
    description:
      'A library of curated PDFs built for fast recall: playbooks, checklists, and pattern filters.',
    tag: 'Vault',
    highlights: ['Printable playbooks', 'Pattern filters', 'Risk frameworks'],
    icon: <DescriptionIcon />,
  },
  {
    title: 'Portfolio Guardrails',
    description:
      'Capital preservation systems that cap exposure, define recovery paths, and prevent emotional drift.',
    tag: 'Risk Control',
    highlights: ['Exposure caps', 'Auto stop rules', 'Drawdown map'],
    icon: <AdminPanelSettingsIcon />,
  },
  {
    title: 'Trade Journal OS',
    description:
      'A lightweight journaling system that grades each trade, highlights mistakes, and builds streaks.',
    tag: 'Feedback Loop',
    highlights: ['Mistake tags', 'Performance stats', 'Weekly reset'],
    icon: <MenuBookIcon />,
  },
  {
    title: 'Community War Room',
    description:
      'A focused feed for market context, recaps, and tactical updates — no noise, only signals.',
    tag: 'Community',
    highlights: ['Session notes', 'Macro bias', 'Live Q&A'],
    icon: <VoiceChatIcon />,
  },
];

const OurOffer = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = mounted && resolvedTheme === 'dark';
  const trackRef = useRef<HTMLDivElement>(null);
  const firstCardRef = useRef<HTMLDivElement>(null);
  const scrollEndRef = useRef<number | null>(null);
  const programmaticRef = useRef(false);
  const pendingIndexRef = useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardStep, setCardStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => {
      if (scrollEndRef.current) {
        window.clearTimeout(scrollEndRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const updateStep = () => {
      if (!firstCardRef.current) return;
      const cardWidth = firstCardRef.current.getBoundingClientRect().width;
      const gap = 24;
      setCardStep(cardWidth + gap);
    };
    updateStep();
    window.addEventListener('resize', updateStep);
    return () => window.removeEventListener('resize', updateStep);
  }, []);

  useEffect(() => {
    if (!cardStep || isPaused) return;
    const interval = window.setInterval(() => {
      setActiveIndex((prevIndex) => {
        const nextIndex = prevIndex + 1 > OUR_OFFER.length - 1 ? 0 : prevIndex + 1;
        scrollToIndex(nextIndex);
        return nextIndex;
      });
    }, 2200);
    return () => window.clearInterval(interval);
  }, [cardStep, isPaused]);

  const scrollToIndex = (index: number) => {
    if (!trackRef.current || !cardStep) return;
    programmaticRef.current = true;
    pendingIndexRef.current = index;
    trackRef.current.scrollTo({
      left: index * cardStep,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    if (!trackRef.current || !cardStep) return;
    if (scrollEndRef.current) {
      window.clearTimeout(scrollEndRef.current);
    }
    scrollEndRef.current = window.setTimeout(() => {
      const resolvedIndex =
        pendingIndexRef.current ?? Math.round(trackRef.current!.scrollLeft / cardStep);
      const clampedIndex = Math.max(0, Math.min(OUR_OFFER.length - 1, resolvedIndex));
      setActiveIndex(clampedIndex);
      programmaticRef.current = false;
      pendingIndexRef.current = null;
    }, 120);
  };

  const progress = useMemo(() => {
    if (OUR_OFFER.length <= 1) return 100;
    return (activeIndex / (OUR_OFFER.length - 1)) * 100;
  }, [activeIndex]);

  return (
    <section className="relative overflow-hidden py-20">
      {/* background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-6 left-6 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.06]">
          <div className="h-full w-full bg-[radial-gradient(circle_at_top,#ffffff12,transparent_45%),radial-gradient(circle_at_bottom,#ffffff0f,transparent_50%)]" />
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6">
        {/* heading */}
        <Motion
          className="motion-slide-top motion-ease-out motion-slow mb-12 text-center"
          step={0}
          stepDelay={180}
        >
          <div className="mb-10">
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              What We Offer
            </h2>
            <p className="text-xs uppercase tracking-[0.35em] text-emerald-400"></p>
          </div>
        </Motion>

        {/* slider */}
        <Motion className="motion-fade-up motion-slow" step={1} stepDelay={180}>
          <div className="flex items-center justify-between gap-4 pb-6">
            <div className="flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-emerald-400/70">
              <span>Offer Stack</span>
              <span className="h-px w-10 bg-emerald-400/30" />
              <span>
                {activeIndex + 1}/{OUR_OFFER.length}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollToIndex(Math.max(activeIndex - 1, 0))}
                className={`h-10 w-10 rounded-full border text-sm transition ${
                  isDark
                    ? 'border-white/15 text-white/80 hover:text-white'
                    : 'border-black/10 text-slate-700 hover:text-slate-900'
                }`}
              >
                ‹
              </button>
              <button
                type="button"
                onClick={() => scrollToIndex(Math.min(activeIndex + 1, OUR_OFFER.length - 1))}
                className={`h-10 w-10 rounded-full border text-sm transition ${
                  isDark
                    ? 'border-white/15 text-white/80 hover:text-white'
                    : 'border-black/10 text-slate-700 hover:text-slate-900'
                }`}
              >
                ›
              </button>
            </div>
          </div>

          <div className="relative">
            <div
              ref={trackRef}
              onScroll={handleScroll}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onFocus={() => setIsPaused(true)}
              onBlur={() => setIsPaused(false)}
              className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-6 pt-2 scrollbar-hidden scroll-smooth scroll-pl-6 scroll-pr-8"
            >
              {OUR_OFFER.map((item, index) => (
                <div
                  key={item.title}
                  ref={index === 0 ? firstCardRef : undefined}
                  className="snap-center"
                >
                  <div
                    className={`group relative h-92 w-[82vw] min-w-[82vw] max-w-[82vw] overflow-hidden rounded-3xl p-6 backdrop-blur-xl sm:w-96 sm:min-w-96 sm:max-w-96 lg:w-105 lg:min-w-105 lg:max-w-105 ${
                      isDark
                        ? 'border border-white/10 bg-black/60 text-white shadow-[0_25px_80px_-50px_rgba(16,185,129,0.55)]'
                        : 'border border-black/10 bg-white/95 text-slate-900 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.18)]'
                    }`}
                  >
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(16,185,129,0.12),transparent_40%,rgba(56,189,248,0.12))]"
                    />
                    <div
                      aria-hidden
                      className="absolute -top-16 -right-10 h-32 w-32 rounded-full bg-emerald-400/15 blur-2xl transition-transform duration-700 group-hover:scale-110"
                    />
                    <div
                      aria-hidden
                      className="absolute -bottom-10 left-6 h-20 w-20 rounded-full bg-cyan-400/20 blur-2xl transition-transform duration-700 group-hover:translate-y-2"
                    />
                    <div
                      aria-hidden
                      className="absolute bottom-0 left-0 h-px w-full bg-linear-to-r from-emerald-400/60 via-cyan-300/20 to-transparent"
                    />

                    <div className="relative z-10 flex h-full flex-col gap-5">
                      <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-emerald-400/80">
                        <span>{item.tag}</span>
                        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] text-white/70">
                          Core
                        </span>
                      </div>

                      <div className="flex items-start gap-4">
                        <div
                          className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border bg-emerald-500/10 ${
                            isDark
                              ? 'border-emerald-400/20 text-emerald-600'
                              : 'border-emerald-400/50'
                          }`}
                        >
                          {item.icon}
                        </div>
                        <div>
                          <h3
                            className={`text-lg font-semibold ${
                              isDark ? 'text-white' : 'text-slate-900'
                            }`}
                          >
                            {item.title}
                          </h3>
                          <p
                            className={`mt-2 text-sm leading-relaxed ${
                              isDark ? 'text-white/70' : 'text-slate-700'
                            }`}
                          >
                            {item.description}
                          </p>
                        </div>
                      </div>

                      <div className="mt-auto flex flex-wrap gap-2">
                        {item.highlights.map((highlight, highlightIndex) => (
                          <span
                            key={highlight}
                            className={`rounded-full px-3 py-1 text-xs ${
                              isDark
                                ? 'border border-white/10 bg-white/5 text-white/70'
                                : 'border border-black/10 bg-black/3 text-slate-600'
                            } ${highlightIndex === 0 ? 'shadow-[0_0_18px_rgba(16,185,129,0.25)]' : ''}`}
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 h-1 w-full rounded-full bg-black/10 dark:bg-white/10">
            <div
              className="h-full rounded-full bg-emerald-400 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </Motion>
      </div>
    </section>
  );
};

export default OurOffer;
