'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { Button } from '@/components/ui';
import { Motion } from '@/components/motion/Motion';

const PDF_LIBRARY = [
  {
    title: 'Daily Level Map - AAPL',
    summary: 'Support, resistance, trigger zones, and execution notes.',
    access: 'premium',
    tag: 'Premium',
    updated: 'Updated daily',
    cover: 'AAPL',
  },
  {
    title: 'Daily Level Map - NVDA',
    summary: 'Structured plan aligned to our algo filters.',
    access: 'premium',
    tag: 'Premium',
    updated: 'Updated daily',
    cover: 'NVDA',
  },
  {
    title: 'Weekly Strategy Cheat Sheet',
    summary: 'One-page summaries for core setups and invalidations.',
    access: 'free',
    tag: 'Free after login',
    updated: 'Updated weekly',
    cover: 'CHEAT',
  },
  {
    title: 'Execution Checklist',
    summary: 'Pre-trade and post-trade discipline checklist.',
    access: 'free',
    tag: 'Free after login',
    updated: 'Updated monthly',
    cover: 'CHECK',
  },
  {
    title: 'Risk Management Playbook',
    summary: 'Position sizing frameworks and risk controls.',
    access: 'premium',
    tag: 'Premium',
    updated: 'Updated monthly',
    cover: 'RISK',
  },
  {
    title: 'TGIF Momentum Brief',
    summary: 'Friday momentum playbook and target map.',
    access: 'premium',
    tag: 'Premium',
    updated: 'Updated weekly',
    cover: 'TGIF',
  },
  {
    title: 'New Book 1',
    summary: 'Friday momentum playbook and target map.',
    access: 'premium',
    tag: 'Premium',
    updated: 'Updated weekly',
    cover: 'TGIF',
  },
  {
    title: 'New Book 2',
    summary: 'Friday momentum playbook and target map.',
    access: 'premium',
    tag: 'Premium',
    updated: 'Updated weekly',
    cover: 'TGIF',
  },
];

const ACCESS_RULES = [
  {
    title: 'Register to access free PDFs',
    detail: 'Free resources unlock after you create an account and log in.',
  },
  {
    title: 'Premium unlocks all PDFs',
    detail: 'Daily level maps and premium playbooks are for paid members.',
  },
  {
    title: 'Secure delivery in your dashboard',
    detail: 'Admins publish PDFs and members download from a protected vault.',
  },
];

export default function PdfVaultPage() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const pageSize = 6;

  const filteredLibrary = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return PDF_LIBRARY;
    return PDF_LIBRARY.filter(
      (item) => item.title.toLowerCase().includes(term) || item.summary.toLowerCase().includes(term)
    );
  }, [query]);

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
                <span className="text-xs font-medium tracking-wide uppercase">PDF Vault</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
                A protected library of daily plans and playbooks.
              </h1>
              <p className="text-lg text-text-muted">
                Structured PDFs keep the plan consistent. Free resources unlock after login, while
                premium members get the full daily level maps and execution briefs.
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
                <p className="text-xs uppercase tracking-[0.22em] text-text-muted">Access rules</p>
                <div className="mt-4 space-y-3 text-sm text-text-muted">
                  {ACCESS_RULES.map((rule) => (
                    <div key={rule.title} className="flex gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                      <div>
                        <p className="font-semibold text-text-primary">{rule.title}</p>
                        <p>{rule.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 px-4 py-3 text-xs text-primary">
                  Downloads are gated by account status and membership tier.
                </div>
              </div>
            </div>
          </Motion>
        </div>

        <Motion className="motion-fade-up motion-ease-out" step={0}>
          <div className="mt-14 flex flex-col gap-6">
            <div className="flex flex-col gap-4 rounded-3xl border border-border bg-primary p-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold">Search the PDF vault</p>
                <p className="text-xs text-text-muted">Filter by title or description.</p>
              </div>
              <div className="flex w-full max-w-lg items-center gap-3">
                <input
                  value={query}
                  onChange={(event) => {
                    setQuery(event.target.value);
                    setPage(1);
                  }}
                  placeholder="Search PDFs..."
                  className="h-11 w-full rounded-2xl border border-border bg-bg px-4 text-sm text-text-primary outline-none focus:border-primary/60"
                />
                <Button variant="outlined" className="h-11 px-5">
                  Filter
                </Button>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {pageItems.map((item, index) => {
                const isPremium = item.access === 'premium';
                return (
                  <div
                    key={`${item.title}-${index}`}
                    className={`relative rounded-3xl border p-6 shadow-lg ${
                      isPremium ? 'border-primary/40 bg-surface' : 'border-border bg-bg'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="relative h-20 w-16 shrink-0 overflow-hidden rounded-xl border border-border bg-bg shadow-sm">
                        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(46,191,140,0.15),transparent_45%,rgba(223,185,61,0.18))]" />
                        <div className="relative flex h-full w-full flex-col items-center justify-center gap-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-text-muted">
                          <span>{item.cover}</span>
                          <span>PDF</span>
                        </div>
                      </div>

                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="text-lg font-semibold">{item.title}</p>
                            <p className="mt-2 text-sm text-text-muted">{item.summary}</p>
                          </div>
                          <span
                            className={`rounded-full text-center px-3 py-1 text-[10px] font-semibold uppercase ${
                              isPremium
                                ? 'bg-primary/15 text-primary'
                                : 'bg-secondary/15 text-secondary'
                            }`}
                          >
                            {item.tag}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 flex items-center justify-between text-xs text-text-muted">
                      <span>{item.updated}</span>
                      <span>{isPremium ? 'Premium vault' : 'Free vault'}</span>
                    </div>

                    <div className="mt-6">
                      {isPremium ? (
                        <Button
                          variant="outlined"
                          className="w-full opacity-60 cursor-not-allowed"
                          disabled
                        >
                          Unlock with Premium
                        </Button>
                      ) : (
                        <Button
                          variant="outlined"
                          className="w-full opacity-60 cursor-not-allowed"
                          disabled
                        >
                          Login required to download
                        </Button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border bg-surface px-5 py-4 text-sm">
              <span className="text-text-muted">
                Showing {pageItems.length} of {filteredLibrary.length} PDFs
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

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <Motion className="motion-slide-left motion-ease-out" step={0}>
            <div className="rounded-3xl border border-border bg-bg p-8">
              <p className="text-xs uppercase tracking-[0.22em] text-text-muted">
                For free members
              </p>
              <h2 className="mt-4 text-2xl font-semibold">Register and access free PDFs.</h2>
              <p className="mt-3 text-sm text-text-muted">
                Free members can download selected PDFs after logging in. These include strategy
                previews and monthly checklists to build discipline.
              </p>
            </div>
          </Motion>
          <Motion className="motion-slide-right motion-ease-out" step={1}>
            <div className="rounded-3xl border border-border bg-surface p-8">
              <p className="text-xs uppercase tracking-[0.22em] text-text-muted">For premium</p>
              <h2 className="mt-4 text-2xl font-semibold">Daily level maps and full playbooks.</h2>
              <p className="mt-3 text-sm text-text-muted">
                Premium members receive the daily PDF plan, level maps, and execution notes inside
                the protected vault.
              </p>
            </div>
          </Motion>
        </div>
      </div>
    </section>
  );
}
