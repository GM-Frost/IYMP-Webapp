'use client';
import React, { useEffect, useState } from 'react';
import { Button, ArrowForward, PlayCircleOutlineIcon } from '@/components/ui';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { Motion } from '@/components/motion/Motion';

type FloatingItem = {
  id: string;
  label: string;
  value: string;
  valueClass?: string;
  position: string;
  animation: string;
};

const FLOATING_ITEMS: FloatingItem[] = [
  {
    id: 'top-right',
    label: 'Performance',
    value: '+24.7%',
    valueClass: 'text-green-500',
    position: '-top-2 -right-8',
    animation: 'animate-float-delayed',
  },
  {
    id: 'bottom-left',
    label: 'Win Rate',
    value: '73.2%',
    valueClass: 'text-primary',
    position: '-bottom-5 -left-6',
    animation: 'animate-float',
  },
  {
    id: 'top-left',
    label: 'Drawdown',
    value: '-6.1%',
    valueClass: 'text-red-500',
    position: '-top-1 -left-10',
    animation: 'animate-float',
  },
  {
    id: 'bottom-right',
    label: 'Trades',
    value: '1,284',
    valueClass: 'text-blue-500',
    position: '-bottom-1 -right-10',
    animation: 'animate-float-delayed',
  },
];

const LandingHero = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = mounted && resolvedTheme === 'dark';

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 -z-10 opacity-[0.03]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-size-[48px_48px]" />
      </div>

      <section className="relative max-w-7xl w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-20 lg:py-0">
        {/* Left: Content */}
        <div className="flex flex-col gap-8 max-w-2xl">
          {/* Eyebrow */}
          <Motion className="motion-fade motion-ease-out" step={0}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 w-fit">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-medium tracking-wide uppercase">
                Algorithm-Driven Trading
              </span>
            </div>
          </Motion>

          {/* Headline */}
          <Motion className="motion-slide-left motion-ease-out motion-slow" step={1}>
            <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] tracking-tight">
              Trade the{' '}
              <span className="relative inline-block">
                <span className="gradient-text">Setup</span>
                <Motion
                  className="motion-slide-left motion-ease-in motion-slow"
                  step={2}
                  stepDelay={250}
                >
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 200 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 9C60 3 140 3 198 9"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      className="text-primary/40"
                    />
                  </svg>
                </Motion>
              </span>
              , Not the Noise.
            </h1>
          </Motion>

          {/* Description */}
          <Motion
            className="motion-flip-up motion-ease-in motion-slow space-y-4"
            step={3}
            stepDelay={180}
          >
            <p className="text-lg lg:text-xl leading-relaxed opacity-90">
              <span className="font-semibold text-primary">IYMP</span> — It's Your Money Plant is an
              algorithm-driven trading ecosystem built around one core belief:
            </p>
            <p className="text-base lg:text-lg leading-relaxed opacity-80 pl-4 border-l-2 border-primary/30">
              Wealth grows best with structure, patience, and probability — just like a plant.
            </p>
          </Motion>

          {/* CTAs */}
          <Motion className="motion-rise" step={4} stepDelay={180}>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button bloom className="group">
                Get Started
                <ArrowForward className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outlined" className="group">
                <PlayCircleOutlineIcon className="group-hover:scale-110 transition-transform" />
                Watch Algo Live
              </Button>
            </div>
          </Motion>

          {/* Stats */}
          <Motion
            className="motion-flip-up motion-ease-in motion-slow flex items-center gap-8 pt-4 border-t border-border/50"
            stepDelay={150}
          >
            <div>
              <div className="text-2xl font-bold">98.7%</div>
              <div className="text-xs opacity-60 uppercase tracking-wide">Uptime</div>
            </div>
            <div className="h-10 w-px bg-border/50" />
            <div>
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-xs opacity-60 uppercase tracking-wide">Automated</div>
            </div>
            <div className="h-10 w-px bg-border/50" />
            <div>
              <div className="text-2xl font-bold">Real-time</div>
              <div className="text-xs opacity-60 uppercase tracking-wide">Execution</div>
            </div>
          </Motion>
        </div>

        {/* Right: Visual */}
        <Motion className="motion-slide-right motion-ease-out motion-slow" step={2} stepDelay={180}>
          <div className="relative flex items-center justify-center lg:justify-end">
            {/* Animated Rings */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 rounded-full border border-primary/30 animate-orbit-slow">
                  <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-emerald-300/80 shadow-[0_0_12px_rgba(16,185,129,0.9)]" />
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-96 h-96 rounded-full border border-primary/15 animate-orbit-slower">
                  <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-emerald-200/70 shadow-[0_0_10px_rgba(16,185,129,0.7)]" />
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-64 w-64 rounded-full border border-emerald-400/10 animate-spin-slow" />
              </div>

              {/* Logo Container */}
              <div className="relative z-10 group">
                {/* Glow */}
                <div
                  aria-hidden
                  className={`
                  absolute
                  inset-1/2
                  -z-10
                  h-[140%]
                  w-[140%]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  blur-3xl
                  opacity-80
                  group-hover:opacity-100
                  transition-opacity
                  duration-700
                `}
                />

                {/* Actual circle */}
                <div className="relative  backdrop-blur-sm rounded-full p-12 border border-border/10 shadow-2xl group-hover:scale-105 transition-transform duration-500">
                  <Image
                    src={isDark ? '/logo/logo.png' : '/logo/logo-white.png'}
                    alt="IYMP Logo"
                    width={200}
                    height={200}
                    className="w-40 h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 drop-shadow-2xl"
                    priority
                  />
                </div>

                {/* Floating Elements */}
                {FLOATING_ITEMS.map((item) => (
                  <div
                    key={item.id}
                    className={`
      absolute
      ${item.position}
      px-4
      py-2
      bg-surface/10
      border
      border-border
      rounded-lg
      shadow-xl
      backdrop-blur-sm
      ${item.animation}
    `}
                  >
                    <div className="text-xs opacity-90">{item.label}</div>
                    <div className={`text-lg font-bold ${item.valueClass ?? ''}`}>{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Motion>
      </section>

      {/* Scroll Indicator
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 animate-bounce">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M10 4V16M10 16L4 10M10 16L16 10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div> */}

      <style jsx>{`
        @keyframes orbit-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes orbit-slower {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(-360deg);
          }
        }
        @keyframes spin-slow {
          0% {
            transform: rotate(0deg) scale(0.98);
          }
          100% {
            transform: rotate(360deg) scale(0.98);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }
        .animate-orbit-slow {
          animation: orbit-slow 18s linear infinite;
        }
        .animate-orbit-slower {
          animation: orbit-slower 26s linear infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 40s linear infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float 3.5s ease-in-out infinite;
          animation-delay: 0.4s;
        }
      `}</style>
    </main>
  );
};

export default LandingHero;
