'use client';

import Link from 'next/link';
import { Button } from '@/components/ui';
import { Motion } from '@/components/motion/Motion';

const TIERS = [
  {
    name: 'PRO',
    price: '$99',
    cadence: '/month',
    variant: 'default',
    highlight: 'Build a rules-based trading foundation with structure and clarity.',
    badge: 'Foundation Trader',
    features: [
      'Daily Algo Radar (levels + bias)',
      'Market structure guidance (ES / NQ / SPY / key stocks)',
      'TradingView IYMP indicators',
      'Educational content library (process, risk, mindset)',
      'Discord access (read + limited chat)',
    ],
    cta: 'Start Pro',
  },
  {
    name: 'PREMIUM',
    price: '$199',
    cadence: '/month',
    variant: 'primary',
    highlight: 'For traders focused on execution consistency and decision-making.',
    badge: 'Execution Trader',
    featured: true,
    features: [
      'Everything in PRO',
      'Live market mapping (AM sessions)',
      'Bias confirmation & scenario planning',
      'Trade execution walkthroughs (education)',
      'Weekly performance recap',
      'Discipline framework & journaling guidance',
      'Priority VIP Discord channels',
    ],
    cta: 'Go Premium',
  },
  {
    name: 'ELITE',
    price: 'Apply',
    variant: 'secondary',
    cadence: '',
    highlight: 'Direct mentorship, accountability, and system mastery.',
    badge: 'Mentorship',
    featured: true,
    features: [
      'Weekly 90-min live mentorship call',
      'Live Q&A + chart walkthroughs',
      'Trade reviews (submitted in advance)',
      'IYMP discipline scoring system',
      'Risk & capital management templates',
      'Private Elite Discord',
      'Small-group interaction',
      'Direct mentor access (office hours)',
    ],
    cta: 'Apply for Elite',
  },
];

const COMPARISON = [
  {
    label: 'Daily Algo Radar (levels + bias)',
    pro: true,
    premium: true,
    elite: true,
  },
  {
    label: 'Market structure guidance',
    pro: true,
    premium: true,
    elite: true,
  },
  {
    label: 'TradingView IYMP indicators',
    pro: true,
    premium: true,
    elite: true,
  },
  {
    label: 'Educational content library',
    pro: true,
    premium: true,
    elite: true,
  },
  {
    label: 'Discord access',
    pro: 'Limited',
    premium: 'VIP',
    elite: 'Private',
  },
  {
    label: 'Live market mapping sessions',
    pro: false,
    premium: true,
    elite: true,
  },
  {
    label: 'Bias confirmation & scenario planning',
    pro: false,
    premium: true,
    elite: true,
  },
  {
    label: 'Trade execution walkthroughs',
    pro: false,
    premium: true,
    elite: true,
  },
  {
    label: 'Weekly performance recap',
    pro: false,
    premium: true,
    elite: true,
  },
  {
    label: 'Discipline & journaling frameworks',
    pro: false,
    premium: true,
    elite: true,
  },
  {
    label: 'Weekly mentorship call (90 min)',
    pro: false,
    premium: false,
    elite: true,
  },
  {
    label: 'Trade reviews',
    pro: false,
    premium: false,
    elite: true,
  },
  {
    label: 'Direct mentor access',
    pro: false,
    premium: false,
    elite: true,
  },
];

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
            <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-6 shadow-xl">
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

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
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
                  <p className="text-4xl font-semibold">{tier.price}</p>
                  <p className="text-sm text-primary-dark font-semibold">{tier.cadence}</p>
                </div>
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
          <div id="compare" className="mt-40 rounded-3xl border border-primary/60 bg-surface p-8">
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

                  {COMPARISON.map((row) => (
                    <div
                      key={row.label}
                      className="col-span-4 grid grid-cols-4 gap-4 border-t border-border  py-2 items-center"
                    >
                      <div className="text-text-muted">{row.label}</div>
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
                  ))}
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
