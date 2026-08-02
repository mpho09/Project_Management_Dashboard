// src/projects/ProjectDetailsPage.tsx

import { Link } from "react-router-dom";

const TASKS = [
  { title: "Finalize structural drawings", chip: "In Progress", tone: "bg-status-activebg text-status-active" },
  { title: "Submit council permit application", chip: "To Do", tone: "bg-status-todobg text-status-todo" },
  { title: "Client walkthrough of floor plans", chip: "In Review", tone: "bg-status-reviewbg text-status-review" },
  { title: "Site survey and soil report", chip: "Completed", tone: "bg-status-donebg text-status-done" },
];

const ACTIVITY = [
  { who: "Naledi M.", text: 'moved "Site survey and soil report" to Completed', when: "2h ago" },
  { who: "Thabo K.", text: 'commented on "Client walkthrough of floor plans"', when: "5h ago" },
  { who: "Mpho S.", text: 'uploaded "Revised elevation drawings v3.pdf"', when: "Yesterday" },
];

const MEMBERS = [
  { initials: "MS", name: "Mpho S.", role: "Lead Developer" },
  { initials: "NM", name: "Naledi M.", role: "Project Manager" },
  { initials: "TK", name: "Thabo K.", role: "Architect" },
];

const DEADLINES = [
  { name: "Permit submission", date: "3 Aug" },
  { name: "Client sign-off", date: "8 Aug" },
  { name: "Phase 2 handover", date: "12 Aug" },
];

export default function ProjectDetailsPage() {
  const [tab, setTab] = useState<"tasks" | "overview">("tasks");

  return (
    <>
      <header className="sticky top-0 z-10 border-b border-line bg-surface/80 px-8 py-4 backdrop-blur">
        <nav className="text-sm text-ink-faint">
          <Link to="/projects" className="hover:text-brand-600">Projects</Link>
          <span className="mx-1.5">/</span>
          <span className="text-ink">Riverside Apartments Site Plan</span>
        </nav>
      </header>

      <main className="px-8 py-6">
        <section className="mb-6 flex items-center justify-between rounded-xl border border-line bg-surface p-6 shadow-card">
          <div>
            <span className="rounded-md bg-status-activebg px-2 py-0.5 text-xs font-semibold text-status-active">Active</span>
            <h1 className="mt-2 text-2xl font-bold tracking-tight text-ink">Riverside Apartments Site Plan</h1>
            <p className="mt-1 text-sm text-ink-faint">#PRJ-014 · Started 3 Jun · Due 12 Aug</p>
          </div>
          <ProgressRing percent={75} />
        </section>

        <section className="grid gap-4 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-4">
            <div className="rounded-xl border border-line bg-surface shadow-card">
              <div className="flex gap-1 border-b border-line px-4 pt-3">
                <TabButton active={tab === "tasks"} onClick={() => setTab("tasks")}>Tasks (12)</TabButton>
                <TabButton active={tab === "overview"} onClick={() => setTab("overview")}>Overview</TabButton>
              </div>
              {tab === "tasks" ? (
                <ul className="divide-y divide-line">
                  {TASKS.map((t) => (
                    <li key={t.title} className="flex items-center justify-between px-4 py-3">
                      <span className="text-sm font-medium text-ink">{t.title}</span>
                      <span className={`rounded-md px-2 py-0.5 text-xs font-semibold ${t.tone}`}>{t.chip}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="px-4 py-5 text-sm leading-relaxed text-ink-soft">
                  Structural and layout planning for the new residential block phase 2, covering
                  floor plans, council permits, and client sign-off before construction handover.
                </div>
              )}
            </div>

            <div className="rounded-xl border border-line bg-surface p-5 shadow-card">
              <h2 className="mb-4 text-sm font-bold text-ink">Recent Activity</h2>
              <ul className="space-y-3">
                {ACTIVITY.map((a, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-500" />
                    <p className="text-ink-soft">
                      <strong className="font-semibold text-ink">{a.who}</strong> {a.text}
                      <span className="text-ink-faint"> · {a.when}</span>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-xl border border-line bg-surface p-5 shadow-card">
              <h2 className="mb-4 text-sm font-bold text-ink">Team Members</h2>
              <ul className="space-y-3">
                {MEMBERS.map((m) => (
                  <li key={m.initials} className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-100 text-xs font-semibold text-brand-700">
                      {m.initials}
                    </span>
                    <div>
                      <p className="text-sm font-medium text-ink">{m.name}</p>
                      <p className="text-xs text-ink-faint">{m.role}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-line bg-surface p-5 shadow-card">
              <h2 className="mb-4 text-sm font-bold text-ink">Deadlines</h2>
              <ul className="space-y-2.5">
                {DEADLINES.map((d) => (
                  <li key={d.name} className="flex items-center justify-between rounded-lg border border-line px-3 py-2.5">
                    <span className="text-sm text-ink">{d.name}</span>
                    <span className="text-xs font-semibold text-ink-soft">{d.date}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function TabButton({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`-mb-px border-b-2 px-3 py-2 text-sm font-medium transition-colors ${
        active ? "border-brand-500 text-brand-600" : "border-transparent text-ink-soft hover:text-ink"
      }`}
    >
      {children}
    </button>
  );
}

function ProgressRing({ percent }: { percent: number }) {
  const r = 30;
  const circ = 2 * Math.PI * r;
  const offset = circ - (percent / 100) * circ;
  return (
    <div className="relative grid h-20 w-20 place-items-center">
      <svg className="h-20 w-20 -rotate-90" viewBox="0 0 72 72">
        <circle cx="36" cy="36" r={r} fill="none" stroke="#e6e8eb" strokeWidth="7" />
        <circle
          cx="36" cy="36" r={r} fill="none" stroke="#4f46e5" strokeWidth="7" strokeLinecap="round"
          strokeDasharray={circ} strokeDashoffset={offset}
        />
      </svg>
      <span className="absolute text-sm font-bold text-ink">{percent}%</span>
    </div>
  );
}
