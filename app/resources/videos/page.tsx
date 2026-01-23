const VIDEO_TRACKS = [
  {
    title: 'Quick Start',
    detail: 'Platform walkthroughs and setup primers for new members.',
  },
  {
    title: 'Strategy Deep Dives',
    detail: 'Breakdowns of entries, exits, and risk management.',
  },
  {
    title: 'Market Context',
    detail: 'Weekly and daily commentary tied to the algo signals.',
  },
];

export default function VideosPage() {
  return (
    <section className="relative py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col gap-5 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-text-muted">Video Library</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            Visual learning built around the plan.
          </h1>
          <p className="text-lg text-text-muted">
            Watch strategy breakdowns, execution walkthroughs, and live review sessions.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {VIDEO_TRACKS.map((track) => (
            <div
              key={track.title}
              className="rounded-2xl border border-border bg-surface/60 p-6"
            >
              <h3 className="text-lg font-semibold">{track.title}</h3>
              <p className="mt-2 text-sm text-text-muted">{track.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
