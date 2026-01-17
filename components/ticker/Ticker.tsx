'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { TickerItem } from './ticker.types';

type Props = {
  items: TickerItem[];
  direction?: 'left' | 'right';
};

function formatPercentage(value: number) {
  const sign = value > 0 ? '+' : '';
  return `${sign}${value.toFixed(2)}%`;
}

export default function Ticker({ items, direction = 'left' }: Props) {
  const animationClass = direction === 'left' ? 'animate-ticker-left' : 'animate-ticker-right';
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = mounted && resolvedTheme === 'dark';

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      className={`
        relative w-full h-32 flex items-center overflow-hidden
        shadow-xl transition-colors duration-300
        ${isDark ? 'bg-emerald-700/5 backdrop-blur-2xl' : 'bg-gray-50 border-gray-100'}
      `}
      // style={
      //   isDark
      //     ? {
      //         backgroundImage:
      //           'radial-gradient(2000px 700px at 50% 0%, rgba(31, 168, 102, 0.45), rgba(31, 168, 102, 0.15) 35%, transparent 65%)',
      //       }
      //     : undefined
      // }
    >
      <div className="pointer-events-none absolute inset-0 z-10">
        <div
          className={`absolute left-0 top-0 h-full w-24 bg-linear-to-r to-transparent ${
            isDark ? 'from-emerald-700/5' : 'from-gray-50'
          }`}
        />
        <div
          className={`absolute right-0 top-0 h-full w-24 bg-linear-to-l to-transparent ${
            isDark ? 'from-emerald-700/5' : 'from-gray-50'
          }`}
        />
      </div>
      <div className={`flex w-max ${animationClass} hover:[animation-play-state:paused]`}>
        {[...items, ...items, ...items].map((item, index) => {
          const isPositive = item.changePercent >= 0;
          return (
            <div
              key={index}
              className="flex items-center gap-4 px-10 py-6 text-lg md:text-xl whitespace-nowrap border-r border-primary-dark/30 dark:border-white/20 last:border-none"
            >
              <span
                className={`font-semibold tracking-wide ${isDark ? 'text-white' : 'text-zinc-800'}`}
              >
                {item.symbol}
              </span>
              <span
                className={`font-mono font-semibold ${
                  isPositive
                    ? 'text-emerald-500 dark:text-emerald-200'
                    : 'text-red-700 dark:text-red-300'
                }`}
              >
                {formatPercentage(item.changePercent)}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
