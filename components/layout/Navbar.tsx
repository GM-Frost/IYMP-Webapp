'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/components/hooks/useTheme';
import Image from 'next/image';
import { WbSunnyIcon, BedtimeIcon } from '@/components/ui/icons';
export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const pathname = usePathname();

  const isLanding = pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!isLanding) return;

    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [isLanding]);

  const solid = !isLanding || scrolled;

  return (
    <header
      className={`
        fixed top-0 z-50 w-full transition-all duration-300
        ${solid ? ' backdrop-blur-xl shadow-xl' : 'bg-transparent'}
      `}
    >
      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image src="/logo/logo.png" alt="IYMP Logo" width={36} height={36} className="w-9 h-9" />
          <div className="flex flex-col leading-tight">
            <span className="font-bold text-lg text-primary group-hover:opacity-80 transition">
              IYMP
            </span>
            <span className="text-xs font-light text-text-muted">Its your Money Plant</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-text-primary">
          <Link href="/" className="hover:text-primary transition">
            Home
          </Link>
          {/* add more nav items as needed */}
          <button onClick={toggleTheme} className="px-3 py-1 rounded-md text-sm hover:text-primary">
            {isDark ? <WbSunnyIcon /> : <BedtimeIcon />}
          </button>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-primary"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-surface border-t border-border">
          <div className="px-6 py-4 flex flex-col gap-4 text-text-primary">
            <Link href="/" onClick={() => setOpen(false)} className="hover:text-primary transition">
              Home
            </Link>
            <Link
              href="/pricing"
              onClick={() => setOpen(false)}
              className="hover:text-primary transition"
            >
              Pricing
            </Link>
            <button onClick={toggleTheme} className=" px-3 py-1 rounded-md w-fit transition">
              {isDark ? <WbSunnyIcon /> : <BedtimeIcon />}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
