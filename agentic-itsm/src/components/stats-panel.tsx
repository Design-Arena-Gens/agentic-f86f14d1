const stats = [
  {
    value: "92%",
    label: "automation coverage",
    detail: "across top IT service workflows within six weeks"
  },
  {
    value: "7x",
    label: "faster MTTR",
    detail: "through autonomous diagnostics and action sequencing"
  },
  {
    value: "98%",
    label: "employee satisfaction",
    detail: "CSAT for AI-resolved incidents with human validation"
  }
];

export function StatsPanel() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-24">
      <div className="grid gap-4 rounded-3xl border border-white/10 bg-gradient-to-r from-white/10 via-brand-500/10 to-slate-950 p-8 text-center md:grid-cols-3">
        {stats.map((item) => (
          <div key={item.label} className="flex flex-col items-center gap-2">
            <span className="text-4xl font-semibold text-white md:text-5xl">
              {item.value}
            </span>
            <span className="text-xs uppercase tracking-[0.25em] text-brand-200">
              {item.label}
            </span>
            <p className="max-w-xs text-sm text-slate-300">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
