const SECTIONS = [
  'Core strategies and setup definitions',
  'Why algorithmic trading removes emotion',
  'How to execute with a repeatable plan',
  'Community workflow inside Discord',
];

export default function BookletPage() {
  return (
    <section className="relative py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col gap-5 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-text-muted">Booklet</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            Welcome to IYMP - Its Your Money Plant.
          </h1>
          <p className="text-lg text-text-muted">
            The booklet is the starting point for new members, outlining our disciplined,
            algorithmic approach to options trading.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-surface/60 p-8">
          <h2 className="text-2xl font-semibold">Inside the guide</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 text-sm text-text-muted">
            {SECTIONS.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
