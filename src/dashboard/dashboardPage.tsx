// src/dashboard/DashboardPage.tsx

const STATS = [
  { label: "Total Projects", value: "12", trend: "+2 this month", tone: "neutral" },
  { label: "Active Projects", value: "7", trend: "In flight", tone: "active" },
  { label: "Completed", value: "5", trend: "42% of total", tone: "done" },
  { label: "Overdue Tasks", value: "4", trend: "Needs attention", tone: "risk" },
  { label: "Total Tasks", value: "86", trend: "Across all projects", tone: "neutral" },
  { label: "Completed Tasks", value: "54", trend: "63% done", tone: "done" },
  { label: "Upcoming Deadlines", value: "6", trend: "Next 14 days", tone: "neutral" },
  { label: "Average Progress", value: "63%", trend: "+8% vs last week", tone: "active" },
];

const toneRing: Record<string, string> = {
  neutral: "text-ink",
  active: "text-status-active",
  done: "text-status-done",
  risk: "text-status-risk",
};

const PROGRESS = [
  { name: "Riverside Apartments Site Plan", pct: 75, tone: "bg-status-active" },
  { name: "Client Portal Redesign", pct: 40, tone: "bg-brand-500" },
  { name: "Warehouse Inventory System", pct: 20, tone: "bg-status-risk" },
  { name: "Mobile App Onboarding", pct: 88, tone: "bg-status-done" },
];

const DEADLINES = [
  { name: "Finalize floor plans", meta: "High · 2 days", tone: "bg-prio-highbg text-prio-high" },
  { name: "Council permit submission", meta: "High · 4 days", tone: "bg-prio-highbg text-prio-high" },
  { name: "Client walkthrough", meta: "Medium · 6 days", tone: "bg-prio-medbg text-prio-med" },
  { name: "Sprint 4 review", meta: "Low · 9 days", tone: "bg-prio-lowbg text-prio-low" },
];

export default function DashboardPage() {
  return (
    <>
      <header className="sticky top-0 z-10 flex items-center justify-between border-b border-line bg-surface/80 px-8 py-4 backdrop-blur">
        <div>
          <h1 className="text-lg font-bold text-ink">Dashboard</h1>
          <p className="text-xs text-ink-faint">Overview of everything on the go</p>
        </div>
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Search…"
            className="h-9 w-56 rounded-lg border border-line bg-surface-sunken px-3 text-sm outline-none transition focus:border-brand-500 focus:bg-surface"
          />
          <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-500 text-xs font-semibold text-white">MK</span>
        </div>
      </header>

      <main className="px-8 py-6">
        <section className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="rounded-xl border border-line bg-surface p-4 shadow-card transition hover:shadow-raised">
              <p className="text-xs font-medium uppercase tracking-wide text-ink-faint">{s.label}</p>
              <p className={`mt-2 text-3xl font-bold tracking-tight ${toneRing[s.tone]}`}>{s.value}</p>
              <p className="mt-1 text-xs text-ink-faint">{s.trend}</p>
            </div>
          ))}
        </section>

        <section className="mt-6 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-xl border border-line bg-surface p-5 shadow-card">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-sm font-bold text-ink">Project Progress</h2>
              <span className="text-xs text-ink-faint">4 active</span>
            </div>
            <ul className="space-y-4">
              {PROGRESS.map((p) => (
                <li key={p.name}>
                  <div className="mb-1.5 flex items-center justify-between text-sm">
                    <span className="font-medium text-ink">{p.name}</span>
                    <span className="tabular-nums text-ink-soft">{p.pct}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-surface-sunken">
                    <div className={`h-full rounded-full ${p.tone}`} style={{ width: `${p.pct}%` }} />
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-line bg-surface p-5 shadow-card">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-sm font-bold text-ink">Upcoming Deadlines</h2>
              <span className="text-xs text-ink-faint">Next 14 days</span>
            </div>
            <ul className="space-y-2.5">
              {DEADLINES.map((d) => (
                <li key={d.name} className="flex items-center justify-between rounded-lg border border-line px-3 py-2.5">
                  <span className="text-sm font-medium text-ink">{d.name}</span>
                  <span className={`rounded-md px-2 py-0.5 text-xs font-semibold ${d.tone}`}>{d.meta}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
