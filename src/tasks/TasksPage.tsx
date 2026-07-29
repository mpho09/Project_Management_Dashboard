// src/tasks/TasksPage.tsx

export default function TasksPage() {
  return (
    <>
      <header className="topbar">
        <h1>Tasks</h1>
        <button className="btn-primary">+ New Task</button>
      </header>

      <main className="content">
        <section className="board">
          <div className="col">
            <div className="col-head">
              <span>To Do</span>
              <span className="count">3</span>
            </div>
            <div className="task-card">
              <span className="priority p-high">High</span>
              <h3 className="task-title">Submit council permit application</h3>
              <div className="task-meta">
                <span>Riverside Apts</span>
                <span className="avatar">NM</span>
              </div>
            </div>
            {/* remaining To Do cards follow the same shape */}
          </div>

          <div className="col">
            <div className="col-head">
              <span>In Progress</span>
              <span className="count">2</span>
            </div>
            <div className="task-card">
              <span className="priority p-high">High</span>
              <h3 className="task-title">Finalize structural drawings</h3>
              <div className="task-meta">
                <span>Riverside Apts</span>
                <span className="avatar">MS</span>
              </div>
            </div>
            {/* remaining In Progress cards follow the same shape */}
          </div>

          <div className="col">
            <div className="col-head">
              <span>In Review</span>
              <span className="count">1</span>
            </div>
            <div className="task-card">
              <span className="priority p-med">Medium</span>
              <h3 className="task-title">Client walkthrough of floor plans</h3>
              <div className="task-meta">
                <span>Riverside Apts</span>
                <span className="avatar">TK</span>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="col-head">
              <span>Completed</span>
              <span className="count">2</span>
            </div>
            <div className="task-card">
              <span className="priority p-med">Medium</span>
              <h3 className="task-title">Site survey and soil report</h3>
              <div className="task-meta">
                <span>Riverside Apts</span>
                <span className="avatar">NM</span>
              </div>
            </div>
            {/* remaining Completed cards follow the same shape */}
          </div>
        </section>

        {/* New Task modal and Task Detail modal go here as separate
            components once we wire up useState for open/close + form fields */}
      </main>
    </>
  );
}