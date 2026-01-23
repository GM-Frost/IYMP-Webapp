const METHOD_STEPS = [
  {
    title: 'Scan',
    detail: 'Algorithms monitor our eight core tickers for qualified setups.',
  },
  {
    title: 'Plan',
    detail: 'We publish levels and scenarios so the trade is defined first.',
  },
  {
    title: 'Execute',
    detail: 'Members follow the rules with risk limits and clear invalidations.',
  },
  {
    title: 'Review',
    detail: 'We refine performance through feedback and continuous learning.',
  },
];

export default function MethodologyPage() {
  return (
    <section className="relative py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col gap-5 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-text-muted">Methodology</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            A process built on rules and repetition.
          </h1>
          <p className="text-lg text-text-muted">
            Our methodology prioritizes structure. Every setup has criteria, every trade has risk,
            and every session has a plan.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {METHOD_STEPS.map((step) => (
            <div
              key={step.title}
              className="rounded-2xl border border-border bg-surface/60 p-6"
            >
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-text-muted">{step.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
