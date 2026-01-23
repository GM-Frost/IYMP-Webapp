export default function DisclaimerPage() {
  return (
    <section className="relative py-16 lg:py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col gap-5">
          <p className="text-xs uppercase tracking-[0.2em] text-text-muted">Disclaimer</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            Educational content only.
          </h1>
          <p className="text-lg text-text-muted">
            IYMP provides educational material and market insights. We do not provide financial
            advice, investment recommendations, or guarantees of profit. Trading involves risk and
            can result in significant losses. Always make decisions based on your own research and
            risk tolerance.
          </p>
          <div className="rounded-2xl border border-border bg-surface/60 p-6">
            <p className="text-sm text-text-muted">
              By using this site or participating in the community, you agree that IYMP is not
              responsible for trading outcomes. Please trade responsibly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
