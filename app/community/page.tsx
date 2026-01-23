const COMMUNITY_PILLARS = [
  {
    title: 'Daily Planning',
    detail: 'Pre-market notes and scenarios to define the plan.',
  },
  {
    title: 'Live Support',
    detail: 'Collaborate, review, and learn inside Discord.',
  },
  {
    title: 'Execution Focus',
    detail: 'We emphasize discipline, risk, and rules over hype.',
  },
];

export default function CommunityPage() {
  return (
    <section className="relative py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col gap-5 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-text-muted">Community</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            Learn, share, and grow together.
          </h1>
          <p className="text-lg text-text-muted">
            IYMP members collaborate inside Discord to refine execution and stay aligned with the
            algo-driven plan.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {COMMUNITY_PILLARS.map((item) => (
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
