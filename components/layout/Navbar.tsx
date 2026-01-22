'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';

import { NAV_ITEMS } from '@/components/navigation/nav.config';
import { CloseIcon, DarkModeIcon, ExpandMoreIcon, LightModeIcon, MenuIcon } from '@/components/ui';

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  const pathname = usePathname();
  const isLanding = pathname === '/';

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!isLanding) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [isLanding]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render NOTHING until client hydration is done
    return null;
  }

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  const solid = !isLanding || scrolled;

  return (
    <>
      <header
        className={`fixed top-0 z-40 w-full transition-all duration-200 ${
          solid ? 'backdrop-blur-2xl shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w-350 mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 lg:h-16">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group shrink-0 -ml-1"
              onClick={() => setMobileOpen(false)}
            >
              <div className="relative w-7 h-7 lg:w-8 lg:h-8 shrink-0">
                <Image
                  src={isDark ? '/logo/logo.png' : '/logo/logo-white.png'}
                  alt="IYMP"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-semibold text-base lg:text-lg tracking-tight">IYMP</span>
                <span className="text-[9px] lg:text-[10px] font-normal text-text-muted tracking-wide uppercase">
                  Its your Money Plant
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {NAV_ITEMS.map((item) =>
                item.children ? (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="flex items-center gap-1 px-3.5 py-1.5 text-[13px] font-medium tracking-wide transition-colors hover:text-primary">
                      {item.label}
                      <ExpandMoreIcon
                        className={`w-4 h-4 transition-transform duration-150 ${
                          activeDropdown === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {/* Dropdown */}
                    <div
                      className={`absolute left-0 top-full pt-1 transition-all duration-500 ${
                        activeDropdown === item.label
                          ? 'opacity-100 translate-y-0 pointer-events-auto'
                          : 'opacity-0 -translate-y-1 pointer-events-none'
                      }`}
                    >
                      <div
                        className={`rounded-xl shadow-lg min-w-45 py-1  overflow-hidden ${
                          isDark
                            ? 'bg-black backdrop-blur-2xl shadow-md border border-primary/30'
                            : 'bg-white'
                        }`}
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href!}
                            className="block px-4 py-2 text-[13px] font-medium tracking-wide transition-colors hover:bg-muted hover:text-primary"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href!}
                    className={`px-3.5 py-1.5 text-[13px] font-medium tracking-wide transition-colors ${
                      pathname === item.href ? 'text-primary' : 'hover:text-primary'
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}

              {/* Theme Toggle - Desktop */}
              <button
                onClick={toggleTheme}
                className="ml-3 p-1.5 transition-opacity hover:opacity-70"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <LightModeIcon className="w-4.5 h-4.5 hover:text-secondary" />
                ) : (
                  <DarkModeIcon className="w-4.5 h-4.5 " />
                )}
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-1 lg:hidden">
              {/* Theme Toggle - Mobile */}
              <button
                onClick={toggleTheme}
                className="p-2 transition-opacity hover:opacity-70"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <LightModeIcon className="w-5 h-5" />
                ) : (
                  <DarkModeIcon className="w-5 h-5" />
                )}
              </button>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 transition-opacity hover:opacity-70"
                aria-label="Toggle menu"
              >
                <MenuIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay - Outside header */}
      <div
        className={`lg:hidden fixed inset-0 z-50 transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <button
          className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu overlay"
        />
        <div
          className={`absolute right-0 top-0 h-full w-[75%] max-w-sm border-l shadow-2xl transform-gpu transition-transform duration-300 ease-out ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          } ${
            isDark
              ? 'bg-black/60 backdrop-blur-xl border-primary-dark/60'
              : 'bg-white/80 backdrop-blur-lg border-border'
          }`}
        >
          <div className="h-full overflow-y-auto">
            <div className="h-14 border-b border-border flex items-center justify-end px-4">
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 transition-opacity hover:opacity-70"
                aria-label="Close menu"
              >
                <CloseIcon className="w-5 h-5" />
              </button>
            </div>
            <nav className="px-6 py-6 flex flex-col gap-1">
              {NAV_ITEMS.map((item) =>
                item.children ? (
                  <div key={item.label} className="border-b border-border pb-3 mb-2">
                    <button
                      onClick={() =>
                        setActiveDropdown(activeDropdown === item.label ? null : item.label)
                      }
                      className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium tracking-wide transition-colors"
                    >
                      {item.label}
                      <ExpandMoreIcon
                        className={`w-5 h-5 transition-transform duration-150 ${
                          activeDropdown === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-200 ${
                        activeDropdown === item.label
                          ? 'max-h-96 opacity-100 mt-1'
                          : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="pl-3 flex flex-col gap-0.5">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href!}
                            onClick={() => setMobileOpen(false)}
                            className="px-3 py-2 text-sm font-medium tracking-wide transition-colors hover:text-primary"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href!}
                    onClick={() => setMobileOpen(false)}
                    className={`px-3 py-2.5 text-sm font-medium tracking-wide transition-colors ${
                      pathname === item.href ? 'text-primary' : 'hover:text-primary'
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
