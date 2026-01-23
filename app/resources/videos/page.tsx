'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { Button } from '@/components/ui';
import { Motion } from '@/components/motion/Motion';

const VIDEO_LIBRARY = [
  {
    title: 'Discord Orientation',
    summary: 'How to navigate channels, alerts, and daily PDFs.',
    access: 'free',
    tag: 'Free',
    duration: '6 min',
    type: 'Platform',
  },
  {
    title: 'Payment & Billing Walkthrough',
    summary: 'How Stripe billing, upgrades, and cancellations work.',
    access: 'free',
    tag: 'Free',
    duration: '4 min',
    type: 'Platform',
  },
  {
    title: 'How to Verify Member Access',
    summary: 'Quick steps to confirm membership tiers and permissions.',
    access: 'free',
    tag: 'Free',
    duration: '3 min',
    type: 'Platform',
  },
  {
    title: 'TradingView Setup',
    summary: 'How to load the IYMP overlays and chart templates.',
    access: 'premium',
    tag: 'Premium',
    duration: '12 min',
    type: 'Trading',
  },
  {
    title: 'Algo Signals Breakdown',
    summary: 'What qualifies a signal and how to execute the plan.',
    access: 'premium',
    tag: 'Premium',
    duration: '18 min',
    type: 'Trading',
  },
  {
    title: 'Learn Markets: Price Action',
    summary: 'Core market structure lessons tied to the IYMP playbook.',
    access: 'starter',
    tag: 'Starter+',
    duration: '14 min',
    type: 'Education',
  },
  {
    title: 'Live Plan Review',
    summary: 'Weekly recap and what to watch for next session.',
    access: 'starter',
    tag: 'Starter+',
    duration: '22 min',
    type: 'Education',
  },
  {
    title: 'Instagram Reel: Setup of the Week',
    summary: 'Short-form recap of a high-probability setup.',
    access: 'free',
    tag: 'Free',
    duration: '1 min',
    type: 'Reels',
  },
];

const ACCESS_FILTERS = [
  { id: 'all', label: 'All Videos' },
  { id: 'free', label: 'Free' },
  { id: 'starter', label: 'Starter+' },
  { id: 'premium', label: 'Premium' },
];

export default function VideosPage() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [accessFilter, setAccessFilter] = useState('all');
  const pageSize = 6;

  const filteredLibrary = useMemo(() => {
    const term = query.trim().toLowerCase();
    return VIDEO_LIBRARY.filter((video) => {
      const matchesSearch =
        !term ||
        video.title.toLowerCase().includes(term) ||
        video.summary.toLowerCase().includes(term) ||
        video.type.toLowerCase().includes(term);
      const matchesAccess = accessFilter === 'all' || video.access === accessFilter;
      return matchesSearch && matchesAccess;
    });
  }, [query, accessFilter]);

  const totalPages = Math.max(1, Math.ceil(filteredLibrary.length / pageSize));
  const safePage = Math.min(page, totalPages);
  const pageItems = filteredLibrary.slice((safePage - 1) * pageSize, safePage * pageSize);

  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/15 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-secondary/15 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1a2a1f10_0%,transparent_55%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <Motion className="motion-slide-left motion-ease-out" step={0}>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 w-fit">
                <span className="text-xs font-medium tracking-wide uppercase">Video Vault</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
                Watch, learn, and execute with clarity.
              </h1>
              <p className="text-lg text-text-muted">
                Free reels and walkthroughs sit alongside premium strategy sessions. Every video is
                built to support the IYMP playbook.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/auth/register">
                  <Button bloom className="min-w-45">
                    Register Free
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button variant="outlined" className="min-w-45">
                    Upgrade to Premium
                  </Button>
                </Link>
              </div>
            </div>
          </Motion>

          <Motion className="motion-slide-right motion-ease-out" step={1}>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-6 shadow-xl">
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -right-10 -top-16 h-48 w-48 rounded-full bg-primary/15 blur-[80px]" />
                <div className="absolute -bottom-10 left-10 h-48 w-48 rounded-full bg-secondary/20 blur-[90px]" />
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(45,191,140,0.08),transparent_45%,rgba(223,185,61,0.08))]" />
              </div>
              <div className="relative rounded-2xl border border-border bg-bg p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-text-muted">
                  Content delivery
                </p>
                <div className="mt-4 space-y-3 text-sm text-text-muted">
                  <div className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <div>
                      <p className="font-semibold text-text-primary">Reels & short clips</p>
                      <p>Instagram reels and short summaries are free to watch.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <div>
                      <p className="font-semibold text-text-primary">Premium strategy sessions</p>
                      <p>Locked videos require Starter+ or Premium access.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <div>
                      <p className="font-semibold text-text-primary">Secure streaming</p>
                      <p>Videos are served from protected storage (S3).</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 px-4 py-3 text-xs text-text-muted">
                  Playback will open an embedded player when the upload is live.
                </div>
              </div>
            </div>
          </Motion>
        </div>

        <Motion className="motion-fade-up motion-ease-out" step={0}>
          <div className="mt-14 flex flex-col gap-6">
            <div className="flex flex-col gap-4 rounded-3xl border border-border bg-primary p-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold">Search the library</p>
                <p className="text-xs text-text-muted">
                  Find reels, walkthroughs, or strategy labs.
                </p>
              </div>
              <div className="flex w-full max-w-lg items-center gap-3">
                <input
                  value={query}
                  onChange={(event) => {
                    setQuery(event.target.value);
                    setPage(1);
                  }}
                  placeholder="Search videos..."
                  className="h-11 w-full rounded-2xl border border-border bg-bg px-4 text-sm text-text-primary outline-none focus:border-primary/60"
                />
                <Button variant="outlined" className="h-11 px-5">
                  Filter
                </Button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {ACCESS_FILTERS.map((filter) => (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => {
                    setAccessFilter(filter.id);
                    setPage(1);
                  }}
                  className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition ${
                    accessFilter === filter.id
                      ? 'bg-primary/15 text-primary border border-primary/30'
                      : 'border border-border text-text-muted hover:text-primary'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {pageItems.map((video, index) => {
                const isLocked = video.access !== 'free';
                return (
                  <div
                    key={`${video.title}-${index}`}
                    className={`relative rounded-3xl border p-6 shadow-lg ${
                      isLocked ? 'border-primary/40 bg-surface' : 'border-border bg-bg'
                    }`}
                  >
                    <div className="relative h-40 w-full overflow-hidden rounded-2xl border border-border bg-bg">
                      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(46,191,140,0.16),transparent_40%,rgba(223,185,61,0.2))]" />
                      <div className="relative flex h-full w-full flex-col items-center justify-center text-xs uppercase tracking-[0.3em] text-text-muted">
                        <span>{video.type}</span>
                        <span className="mt-2 text-[10px]">Preview</span>
                      </div>
                      {isLocked ? (
                        <div className="absolute right-3 top-3 rounded-full bg-black/60 px-3 py-1 text-[10px] font-semibold uppercase text-white">
                          Locked
                        </div>
                      ) : null}
                    </div>

                    <div className="mt-5 flex items-start justify-between gap-3">
                      <div>
                        <p className="text-lg font-semibold">{video.title}</p>
                        <p className="mt-2 text-sm text-text-muted">{video.summary}</p>
                      </div>
                      <span
                        className={`rounded-full text-center px-3 py-1 text-[10px] font-semibold uppercase ${
                          video.access === 'premium'
                            ? 'bg-primary/15 text-primary'
                            : video.access === 'starter'
                              ? 'bg-secondary/15 text-secondary'
                              : 'bg-surface text-text-muted border border-border'
                        }`}
                      >
                        {video.tag}
                      </span>
                    </div>

                    <div className="mt-6 flex items-center justify-between text-xs text-text-muted">
                      <span>{video.duration}</span>
                      <span>{video.type}</span>
                    </div>

                    <div className="mt-6">
                      {isLocked ? (
                        <Button variant="outlined" className="w-full opacity-60" disabled>
                          Unlock to Watch
                        </Button>
                      ) : (
                        <Button variant="outlined" className="w-full">
                          Watch Now
                        </Button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border bg-surface px-5 py-4 text-sm">
              <span className="text-text-muted">
                Showing {pageItems.length} of {filteredLibrary.length} videos
              </span>
              <div className="flex items-center gap-2">
                <Button
                  variant="outlined"
                  className="h-9 px-4"
                  onClick={() => setPage((prev) => Math.max(1, prev - 1))}
                  disabled={safePage === 1}
                >
                  Previous
                </Button>
                <div className="rounded-full border border-border px-4 py-1 text-xs font-semibold">
                  Page {safePage} of {totalPages}
                </div>
                <Button
                  variant="outlined"
                  className="h-9 px-4"
                  onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
                  disabled={safePage === totalPages}
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </Motion>
      </div>
    </section>
  );
}
