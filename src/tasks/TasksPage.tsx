// src/tasks/TasksPage.tsx

interface Task {
  title: string;
  project: string;
  who: string;
  priority: "High" | "Medium" | "Low";
}

const COLUMNS: { name: string; tone: string; tasks: Task[] }[] = [
  {
    name: "To Do",
    tone: "bg-status-todo",
    tasks: [
      { title: "Submit council permit application", project: "Riverside Apts", who: "NM", priority: "High" },
      { title: "Draft Q3 campaign brief", project: "Q3 Marketing Site", who: "TK", priority: "Medium" },
      { title: "Audit legacy report tables", project: "Data Warehouse", who: "MS", priority: "Low" },
    ],
  },
  {
    name: "In Progress",
    tone: "bg-status-active",
    tasks: [
      { title: "Finalize structural drawings", project: "Riverside Apts", who: "MS", priority: "High" },
      { title: "Build portal component library", project: "Client Portal", who: "NM", priority: "Medium" },
    ],
  },
  {
    name: "In Review",
    tone: "bg-status-review",
    tasks: [
      { title: "Client walkthrough of floor plans", project: "Riverside Apts", who: "TK", priority: "Medium" },
    ],
  },
  {
    name: "Completed",
    tone: "bg-status-done",
    tasks: [
      { title: "Site survey and soil report", project: "Riverside Apts", who: "NM", priority: "Medium" },
      { title: "Onboarding flow QA pass", project: "Mobile App", who: "MS", priority: "Low" },
    ],
  },
];

const prioStyle: Record<Task["priority"], string> = {
  High: "bg-prio-highbg text-prio-high",
  Medium: "bg-prio-medbg text-prio-med",
  Low: "bg-prio-lowbg text-prio-low",
};

export default function TasksPage() {
  return (
    <>
      <header className="sticky top-0 z-10 flex items-center justify-between border-b border-line bg-surface/80 px-8 py-4 backdrop-blur">
        <div>
          <h1 className="text-lg font-bold text-ink">Tasks</h1>
          <p className="text-xs text-ink-faint">Board view · 8 tasks</p>
        </div>
        <button className="rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-600">
          + New Task
        </button>
      </header>

      <main className="px-8 py-6">
        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {COLUMNS.map((col) => (
            <div key={col.name} className="flex flex-col rounded-xl border border-line bg-surface-sunken">
              <div className="flex items-center justify-between px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className={`h-2 w-2 rounded-full ${col.tone}`} />
                  <span className="text-sm font-semibold text-ink">{col.name}</span>
                </div>
                <span className="rounded-full bg-surface px-2 py-0.5 text-xs font-semibold text-ink-soft">
                  {col.tasks.length}
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-2.5 px-2.5 pb-2.5">
                {col.tasks.map((t) => (
                  <div
                    key={t.title}
                    className="cursor-pointer rounded-lg border border-line bg-surface p-3 shadow-card transition hover:-translate-y-0.5 hover:shadow-raised"
                  >
                    <span className={`inline-block rounded px-1.5 py-0.5 text-[11px] font-semibold ${prioStyle[t.priority]}`}>
                      {t.priority}
                    </span>
                    <h3 className="mt-2 text-sm font-medium leading-snug text-ink">{t.title}</h3>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-xs text-ink-faint">{t.project}</span>
                      <span className="grid h-6 w-6 place-items-center rounded-full bg-brand-100 text-[10px] font-semibold text-brand-700">
                        {t.who}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
