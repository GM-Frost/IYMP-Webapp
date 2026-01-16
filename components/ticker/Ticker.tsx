'use client';

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

  return (
    <section className="relative w-full overflow-hidden bg-black border-y border-white/10">
      {/* Gradient mask */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black to-transparent" />
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black to-transparent" />
      </div>

      <div
        className={`flex min-w-full w-max ${animationClass} hover:[animation-play-state:paused]`}
      >
        {[...items, ...items, ...items].map((item, index) => {
          const isPositive = item.changePercent >= 0;

          return (
            <div
              key={index}
              className="flex items-center gap-2 px-6 py-3 text-sm md:text-base whitespace-nowrap border-r border-white/10 last:border-none"
            >
              <span className="font-semibold text-white/90">{item.symbol}</span>

              <span className={`font-mono ${isPositive ? 'text-emerald-400' : 'text-red-400'}`}>
                {formatPercentage(item.changePercent)}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
