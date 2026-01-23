const DISCORD_FEATURES = [
  'Algo alerts and level updates in real time',
  'Dedicated channels for strategy discussion',
  'Member Q and A, feedback, and reviews',
];

export default function DiscordHubPage() {
  return (
    <section className="relative py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col gap-5 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-text-muted">Discord Hub</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            The home base for real-time updates.
          </h1>
          <p className="text-lg text-text-muted">
            Our Discord keeps the community in sync with the latest levels, trade plans, and
            educational drops.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-surface/60 p-8">
          <h2 className="text-2xl font-semibold">What members get</h2>
          <ul className="mt-4 space-y-3 text-sm text-text-muted">
            {DISCORD_FEATURES.map((item) => (
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
