'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui';
import { Motion } from '@/components/motion/Motion';

const TIERS = [
  {
    name: 'PRO',
    monthlyPrice: 99,
    annualPrice: 999,
    variant: 'default',
    badge: 'Foundation',
    highlight: 'Market context, bias, and discipline ? no execution, no signals.',
    outcome:
      'I know if the market is bullish, bearish, or neutral ? and whether I should even trade.',
    features: [
      'IYMP Lite Indicators (Algo Levels, Candles, EMA/SMA, TTM Squeeze)',
      'Daily Algo Radar (HTF bias, reaction zones, no-trade zones)',
      'Market state identification (trend / range / chop)',
      'Structured education (context & risk-first planning)',
      'Discord access (Pro channels)',
      'No signals ? No execution coaching',
    ],
    cta: 'Start Pro',
  },
  {
    name: 'PREMIUM',
    monthlyPrice: 199,
    annualPrice: 2200,
    variant: 'primary',
    badge: 'Execution',
    featured: true,
    highlight: 'Execution clarity using professional-grade tools and live guidance.',
    outcome:
      'I know what I?m waiting for, why I?m waiting, and how to execute without forcing trades.',
    features: [
      'Everything in PRO',
      'High-Level IYMP Indicators',
      'SPX Indicator (index pressure)',
      'Live market mapping & scenario planning',
      'Volatility guidance (trade / no-trade)',
      'Execution framework training',
      'Premium Discord channels + light trade reviews',
    ],
    cta: 'Go Premium',
  },
  {
    name: 'ELITE',
    variant: 'secondary',
    monthlyPrice: null,
    annualPrice: 2499,
    annualOriginal: 3000,
    badge: 'Mentorship',
    featured: true,
    highlight: 'Full Algo mastery, execution refinement, and accountability.',
    outcome: 'I trade independently, understand the Algo deeply, and execute with confidence.',
    features: [
      'Full IYMP Proprietary Algo access',
      'Institutional liquidity & session-based logic',
      'Full SPX HR-HR framework',
      'Weekly 90-min mentorship calls (small cohort)',
      'Trade reviews & discipline scoring',
      'Risk & capital preservation systems',
      'Private Elite Discord',
    ],
    cta: 'Apply for Elite',
  },
];

const COMPARISON = [
  { label: 'Market Context', type: 'section' },

  { label: 'Daily Algo Radar (Tables)', pro: true, premium: true, elite: true },

  { label: 'Indicators', type: 'section' },

  { label: 'Algo-driven key levels', pro: true, premium: true, elite: true },
  { label: 'IYMP Volatility Screener', pro: true, premium: true, elite: true },
  { label: 'IYMP Quantum Matrix', pro: true, premium: true, elite: true },
  { label: 'IYMP MR Pro', pro: true, premium: true, elite: true },
  { label: 'IYMP Algo VR Pro', pro: false, premium: true, elite: true },
  { label: 'Algo Pivot Levels', pro: false, premium: true, elite: true },
  { label: 'Algo Strategy signals', pro: false, premium: true, elite: true },
  { label: 'Algo Driven SPX Indicator (Buy/Sell)', pro: false, premium: true, elite: true },

  { label: 'Execution Support', type: 'section' },

  { label: 'Execution rules & invalidation logic', pro: false, premium: true, elite: true },
  { label: 'Live market mapping', pro: false, premium: true, elite: true },
  { label: 'Scenario planning', pro: false, premium: true, elite: true },
  { label: 'Volatility guidance', pro: false, premium: true, elite: true },

  { label: 'Mentorship & Accountability', type: 'section' },

  { label: 'Journal reviews ( 1-on-1 )', pro: false, premium: false, elite: true },
  { label: 'Algo Mentorship Session', pro: false, premium: false, elite: true },
  { label: '(A+) vs (B-) Trade Quality Filtering', pro: false, premium: 'Light', elite: true },
  { label: 'Discipline scoring system', pro: false, premium: false, elite: true },
  { label: 'Psychology & Execution Coaching', pro: false, premium: false, elite: true },
  { label: 'Risk & Capital Preservation Coaching', pro: false, premium: false, elite: true },
  { label: 'Weekly mentorship calls', pro: false, premium: false, elite: true },
  { label: 'Direct mentor access ( 1-on-1 )', pro: false, premium: false, elite: true },

  { label: 'Community', type: 'section' },

  { label: 'Discord access', pro: true, premium: true, elite: true },

  { label: 'Outcome', type: 'section' },

  {
    label: 'Primary result',
    pro: 'Market awareness',
    premium: 'Execution confidence',
    elite: 'Independent mastery',
  },
];
// const COMPARISON = [
//   { label: 'IYMP Lite Indicators', pro: true, premium: true, elite: true },
//   { label: 'Daily Algo Radar', pro: true, premium: true, elite: true },
//   { label: 'Market bias & no-trade zones', pro: true, premium: true, elite: true },

//   { label: 'High-Level Indicators', pro: false, premium: true, elite: true },
//   { label: 'Strategy signals (rule-based)', pro: false, premium: true, elite: true },
//   { label: 'SPX Indicator', pro: false, premium: true, elite: true },

//   { label: 'Live market guidance', pro: false, premium: true, elite: true },
//   { label: 'Execution framework training', pro: false, premium: true, elite: true },

//   { label: 'Full Proprietary Algo access', pro: false, premium: false, elite: true },
//   { label: 'Weekly mentorship & accountability', pro: false, premium: false, elite: true },
//   { label: 'Private Elite Discord', pro: false, premium: false, elite: true },
// ];

const FAQS = [
  {
    question: 'Is this financial advice?',
    answer:
      'No. IYMP provides educational content and structured learning tools. Every trade is your decision.',
  },
  {
    question: 'How do members receive the trade plans?',
    answer:
      'Plans and level updates are delivered inside Discord alongside the daily PDFs and charts.',
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Yes. Memberships are billed monthly and can be cancelled from your Stripe portal.',
  },
  {
    question: 'Do you support long-term and short-term options?',
    answer: 'Yes. Strategies include both short-term momentum and longer-term position frameworks.',
  },
];

export default function PricingPage() {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly');

  const formatPrice = (value: number | null | undefined) => {
    if (value === null || value === undefined) return '-';
    return `$${value.toLocaleString('en-US')}`;
  };

  const getMonthlyTotal = (value: number | null | undefined) => {
    if (value === null || value === undefined) return '-';
    return `$${(value * 12).toLocaleString('en-US')}`;
  };

  const getAnnualOriginal = (tier: { monthlyPrice?: number | null; annualOriginal?: number }) => {
    if (tier.annualOriginal) return `$${tier.annualOriginal.toLocaleString('en-US')}`;
    if (tier.monthlyPrice === null || tier.monthlyPrice === undefined) return '-';
    return `$${(tier.monthlyPrice * 12).toLocaleString('en-US')}`;
  };

  const getTierPrice = (tier: { monthlyPrice?: number | null; annualPrice?: number | null }) => {
    if (billing === 'annual' && typeof tier.annualPrice === 'number') {
      return tier.annualPrice;
    }
    return tier.monthlyPrice ?? null;
  };

  const hasAnnualPrice = (tier: { annualPrice?: number | null }) =>
    typeof tier.annualPrice === 'number';

  const scrollToCompare = () => {
    const target = document.getElementById('compare-heading');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (window.location.hash !== '#compare') {
      window.history.replaceState(null, '', '#compare');
    }
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/15 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-secondary/15 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1a2a1f10_0%,transparent_55%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <Motion className="motion-slide-left motion-ease-out" step={0}>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 w-fit">
                <span className="text-xs font-medium tracking-wide uppercase">Pricing</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
                A trading plan that feels institutional, without the noise.
              </h1>
              <p className="text-lg text-text-muted">
                Choose the membership that matches your trading rhythm. Every tier is powered by our
                algorithmic systems, daily plan PDFs, and a disciplined community.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button bloom className="min-w-45">
                  Start with Premium
                </Button>
                <Button variant="outlined" className="min-w-45" onClick={scrollToCompare}>
                  Compare Plans
                </Button>
              </div>
            </div>
          </Motion>

          <Motion className="motion-slide-right motion-ease-out" step={1}>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-6 shadow-xl mb-20">
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -right-10 -top-16 h-48 w-48 rounded-full bg-primary/15 blur-[80px]" />
                <div className="absolute -bottom-10 left-10 h-48 w-48 rounded-full bg-secondary/20 blur-[90px]" />
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(45,191,140,0.08),transparent_45%,rgba(223,185,61,0.08))]" />
              </div>
              <div className="relative rounded-2xl border border-border bg-bg p-6">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs uppercase tracking-[0.22em] text-text-muted">
                    Stripe Ready
                  </p>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase text-primary">
                    Secure Billing
                  </span>
                </div>
                <h2 className="mt-3 text-2xl font-semibold">Secure checkout is live.</h2>
                <p className="mt-2 text-sm text-text-muted">
                  We use Stripe for payment processing, billing, and account management. Your
                  subscription can be upgraded or canceled anytime from the Stripe portal.
                </p>
                <div className="mt-6 grid gap-3 text-sm text-text-muted">
                  <div className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>Instant access after payment confirmation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>PCI-compliant, secure checkout</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>Manage billing details in one place</span>
                  </div>
                </div>
                <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 px-4 py-3 text-xs text-text-muted">
                  Checkout opens on Stripe with protected payment flows and receipts.
                </div>
              </div>
            </div>
          </Motion>
        </div>
        <Motion className="motion-rise motion-ease-out" step={1}>
          <div className="mt-20 flex items-center justify-end">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-2 py-1 text-xs font-semibold uppercase tracking-[0.2em]">
              <button
                type="button"
                onClick={() => setBilling('monthly')}
                className={`rounded-full px-3 py-1 transition ${
                  billing === 'monthly'
                    ? 'bg-primary/15 text-primary'
                    : 'text-text-muted hover:text-primary'
                }`}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setBilling('annual')}
                className={`rounded-full px-3 py-1 transition ${
                  billing === 'annual'
                    ? 'bg-primary/15 text-primary'
                    : 'text-text-muted hover:text-primary'
                }`}
              >
                Annual
              </button>
              <span className="rounded-full bg-secondary/20 px-3 py-1 text-[10px] font-semibold text-secondary">
                Best Value
              </span>
            </div>
          </div>
        </Motion>
        <div className="mt-6 grid gap-8 lg:grid-cols-3">
          {TIERS.map((tier, index) => (
            <Motion key={tier.name} className="motion-rise motion-ease-out" step={index}>
              <div
                className={`relative rounded-3xl border p-6 shadow-lg transition-transform duration-300 hover:-translate-y-2 ${
                  tier.variant === 'primary'
                    ? 'border-primary/60 bg-primary text-black'
                    : tier.variant === 'secondary'
                      ? 'border-secondary/60 bg-secondary text-black'
                      : 'border-border bg-surface'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-semibold">{tier.name}</p>
                    <p className="text-xs uppercase tracking-[0.18em]">{tier.badge}</p>
                  </div>
                  {tier.variant === 'primary' && (
                    <span className="rounded-full bg-black/10 px-3 py-1 text-[10px] font-semibold uppercase">
                      Most Popular
                    </span>
                  )}

                  {tier.variant === 'secondary' && (
                    <span className="rounded-full bg-black/10 px-3 py-1 text-[10px] font-semibold uppercase">
                      Mentorship
                    </span>
                  )}
                </div>
                <div className="mt-6 flex items-end gap-2">
                  <p className="text-4xl font-semibold">{formatPrice(getTierPrice(tier))}</p>
                  <p className="text-sm text-primary-dark font-semibold">
                    {getTierPrice(tier) === null
                      ? ''
                      : billing === 'annual' && hasAnnualPrice(tier)
                        ? '/year'
                        : '/month'}
                  </p>
                </div>
                {tier.monthlyPrice !== undefined ? (
                  billing === 'annual' && hasAnnualPrice(tier) ? (
                    <div className="mt-2 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary-dark">
                      <span>Save 2 months</span>
                      <span className="opacity-70 line-through">
                        {getMonthlyTotal(tier.monthlyPrice)}
                      </span>
                      <span className="opacity-80">billed annually</span>
                    </div>
                  ) : billing === 'annual' ? (
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary-dark">
                      Monthly only
                    </p>
                  ) : null
                ) : billing === 'annual' && hasAnnualPrice(tier) ? (
                  <div className="mt-2 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary-dark">
                    <span>Best Value</span>
                    <span className="opacity-70 line-through">{getAnnualOriginal(tier)}</span>
                    <span className="opacity-80">annual access</span>
                  </div>
                ) : (
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary-dark">
                    Application only
                  </p>
                )}
                <p className="mt-3 text-sm bg-black/20 rounded-2xl p-2 text-center tracking-wide">
                  {tier.highlight}
                </p>
                <div className="mt-6 space-y-3 text-sm">
                  {tier.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary-dark" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Button
                  bloom={tier.variant !== 'default'}
                  variant={
                    tier.variant === 'primary' || tier.variant === 'secondary'
                      ? 'contained'
                      : 'outlined'
                  }
                  color={tier.variant === 'secondary' ? 'secondary' : undefined}
                  className="mt-8 w-full"
                >
                  {tier.cta}
                </Button>
              </div>
            </Motion>
          ))}
        </div>

        <Motion className="motion-fade-up motion-ease-out" step={1}>
          <div id="compare" className="mt-10 rounded-3xl border border-primary/60 bg-surface p-8">
            <div className="flex flex-col gap-4">
              <h2 id="compare-heading" className="scroll-mt-24 text-2xl font-semibold">
                Compare what you get
              </h2>
              <p className="text-sm text-text-muted">
                Every tier is built on the same algorithmic core. Higher tiers unlock deeper
                support.
              </p>
            </div>
            <div className="mt-8 overflow-x-auto">
              <div className="relative min-w-130 ">
                {/* Column background layers */}
                <div className="pointer-events-none absolute inset-0 grid grid-cols-4 gap-4">
                  <div />
                  <div className="rounded-2xl bg-black/10" />
                  <div className="rounded-2xl bg-primary/50" />
                  <div className="rounded-2xl bg-secondary/50" />
                </div>

                {/* Table content */}
                <div className="relative z-10 grid grid-cols-4 gap-4 text-sm py-2">
                  <div className="text-text-muted font-bold uppercase tracking-[0.16em] text-xs">
                    Feature
                  </div>
                  <div className="text-muted text-center font-bold uppercase tracking-[0.16em] text-xs">
                    PRO
                  </div>
                  <div className="text-black text-center font-bold uppercase tracking-[0.16em] text-xs">
                    PREMIUM
                  </div>
                  <div className="text-black text-center font-bold uppercase tracking-[0.16em] text-xs">
                    ELITE
                  </div>

                  {COMPARISON.map((row) =>
                    row.type === 'section' ? (
                      <div
                        key={row.label}
                        className="col-span-1 mt-4 rounded-2xl border border-border bg-black/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-text-muted"
                      >
                        {row.label}
                      </div>
                    ) : (
                      <div
                        key={row.label}
                        className="col-span-4 grid grid-cols-4 gap-4 border-t border-border py-2 items-center capitalize"
                      >
                        <div>{row.label}</div>
                        <div className="text-center">
                          {row.pro ? (row.pro === true ? 'Included' : row.pro) : '❌'}
                        </div>
                        <div className="text-center">
                          {row.premium ? (row.premium === true ? 'Included' : row.premium) : '❌'}
                        </div>
                        <div className="text-center">
                          {row.elite ? (row.elite === true ? 'Included' : row.elite) : '❌'}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </Motion>

        <div className="mt-20 grid gap-6 lg:grid-cols-2">
          <Motion className="motion-slide-left motion-ease-out" step={0}>
            <div className="rounded-3xl border border-border bg-bg p-8">
              <p className="text-xs uppercase tracking-[0.22em] text-text-muted">Disclaimer</p>
              <h2 className="mt-4 text-2xl font-semibold">Educational by design.</h2>
              <p className="mt-3 text-sm text-text-muted">
                IYMP does not provide financial advice or guaranteed profits. Every trade carries
                risk. Trade responsibly and manage position sizing based on your own plan.
              </p>
            </div>
          </Motion>
          <Motion className="motion-slide-right motion-ease-out" step={1}>
            <div className="rounded-3xl border border-border bg-surface p-8">
              <p className="text-xs uppercase tracking-[0.22em] text-text-muted">FAQ</p>
              <div className="mt-4 space-y-4">
                {FAQS.map((faq) => (
                  <div key={faq.question} className="border-b border-border/70 pb-4">
                    <p className="text-sm font-semibold">{faq.question}</p>
                    <p className="mt-2 text-sm text-text-muted">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </Motion>
        </div>
      </div>
    </section>
  );
}
