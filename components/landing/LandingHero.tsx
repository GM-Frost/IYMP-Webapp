'use client';
import React, { useEffect, useState } from 'react';
import { Button, ArrowForward, PlayCircleOutlineIcon } from '@/components/ui';
import Image from 'next/image';
import { useTheme } from 'next-themes';

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
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 w-fit">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium tracking-wide uppercase">
              Algorithm-Driven Trading
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] tracking-tight">
            Trade the{' '}
            <span className="relative inline-block">
              <span className="gradient-text">Setup</span>
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
            </span>
            , Not the Noise.
          </h1>

          {/* Description */}
          <div className="space-y-4">
            <p className="text-lg lg:text-xl leading-relaxed opacity-90">
              <span className="font-semibold text-primary">IYMP</span> — It's Your Money Plant is an
              algorithm-driven trading ecosystem built around one core belief:
            </p>
            <p className="text-base lg:text-lg leading-relaxed opacity-80 pl-4 border-l-2 border-primary/30">
              Wealth grows best with structure, patience, and probability — just like a plant.
            </p>
          </div>

          {/* CTAs */}
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

          {/* Stats */}
          <div className="flex items-center gap-8 pt-4 border-t border-border/50">
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
          </div>
        </div>

        {/* Right: Visual */}
        <div className="relative flex items-center justify-center lg:justify-end">
          {/* Animated Rings */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 rounded-full border border-primary/20 animate-ping-slow" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-96 h-96 rounded-full border border-primary/10 animate-ping-slower" />
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
              <div className="absolute -top-8 -right-8 px-4 py-2 bg-surface border border-border rounded-lg shadow-xl backdrop-blur-sm animate-float">
                <div className="text-xs opacity-60">Performance</div>
                <div className="text-lg font-bold text-green-500">+24.7%</div>
              </div>

              <div className="absolute -bottom-6 -left-6 px-4 py-2 bg-surface border border-border rounded-lg shadow-xl backdrop-blur-sm animate-float-delayed">
                <div className="text-xs opacity-60">Win Rate</div>
                <div className="text-lg font-bold text-primary">73.2%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll Indicator */}
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
      </div>

      <style jsx>{`
        @keyframes ping-slow {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.3;
          }
        }
        @keyframes ping-slower {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.08);
            opacity: 0.1;
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
        .animate-ping-slow {
          animation: ping-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animate-ping-slower {
          animation: ping-slower 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 3.5s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
};

export default LandingHero;
