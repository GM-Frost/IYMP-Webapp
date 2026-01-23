export default function CompanyPage() {
  return (
    <section className="relative py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col gap-5 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-text-muted">Company</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            IYMP - Its Your Money Plant.
          </h1>
          <p className="text-lg text-text-muted">
            We are building a disciplined, algorithmic approach to trading where rules, data, and
            strategy replace emotion and guesswork.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface/60 p-6">
            <h3 className="text-lg font-semibold">Mission</h3>
            <p className="mt-2 text-sm text-text-muted">
              Create a repeatable trading system that helps members grow steady, not chase hype.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-surface/60 p-6">
            <h3 className="text-lg font-semibold">Focus</h3>
            <p className="mt-2 text-sm text-text-muted">
              Algorithmic signals, structured education, and a supportive community workflow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
