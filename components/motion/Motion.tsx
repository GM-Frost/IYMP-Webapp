'use client';

import { useEffect, useRef } from 'react';

type MotionProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  step?: number;
  stepDelay?: number;
};

export function Motion({
  children,
  className = '',
  delay = 0,
  step,
  stepDelay = 140,
}: MotionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const computedDelay = (step ?? 0) * stepDelay + delay;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('motion-visible');
          observer.disconnect();
        }
      },
      {
        threshold: 0.35, // IMPORTANT: must be > 0
        rootMargin: '0px 0px -80px 0px', // triggers slightly before full view
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`motion ${className}`}
      style={{ animationDelay: `${computedDelay}ms` }}
    >
      {children}
    </div>
  );
}
