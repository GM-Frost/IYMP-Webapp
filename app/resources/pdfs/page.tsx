const PDF_COLLECTIONS = [
  {
    title: 'Daily Level Maps',
    detail: 'Support, resistance, and trigger zones for the next session.',
  },
  {
    title: 'Strategy Cheat Sheets',
    detail: 'One-page summaries for each core setup.',
  },
  {
    title: 'Execution Checklists',
    detail: 'Pre-trade and post-trade routines to keep discipline high.',
  },
];

export default function PdfVaultPage() {
  return (
    <section className="relative py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col gap-5 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-text-muted">PDF Vault</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            The library of daily plans and playbooks.
          </h1>
          <p className="text-lg text-text-muted">
            Structured PDFs keep the plan consistent. Each file is designed for fast reference
            during the trading session.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {PDF_COLLECTIONS.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-surface/60 p-6"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-text-muted">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
