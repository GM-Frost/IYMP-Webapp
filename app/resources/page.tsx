import Link from 'next/link';

const RESOURCE_CARDS = [
  {
    title: 'Booklet',
    description: 'Your starting guide to the IYMP trading framework.',
    href: '/resources/booklet',
  },
  {
    title: 'Video Library',
    description: 'Tactical breakdowns, walkthroughs, and market context.',
    href: '/resources/videos',
  },
  {
    title: 'PDF Vault',
    description: 'Daily levels, playbooks, and structured execution notes.',
    href: '/resources/pdfs',
  },
];

export default function ResourcesPage() {
  return (
    <section className="relative py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col gap-5 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-text-muted">Resources</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            Learn the system, then refine the craft.
          </h1>
          <p className="text-lg text-text-muted">
            From structured PDFs to strategy videos, everything is built to support the same
            algorithmic playbook.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {RESOURCE_CARDS.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-surface/60 p-6"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-text-muted">{item.description}</p>
              <Link
                href={item.href}
                className="mt-4 inline-flex text-xs font-semibold text-primary"
              >
                Explore
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
