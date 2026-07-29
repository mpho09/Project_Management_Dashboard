// src/projects/ProjectDetailsPage.tsx

export default function ProjectDetailsPage() {
  return (
    <>
      <header className="topbar">
        <nav className="breadcrumb">
          <a href="/projects">Projects</a> / <span>Riverside Apartments Site Plan</span>
        </nav>
      </header>

      <main className="content">
        <section className="header-card">
          <div>
            <span className="status status-active">Active</span>
            <h1>Riverside Apartments Site Plan</h1>
            <p className="project-meta">#PRJ-014 · Started 3 Jun · Due 12 Aug</p>
          </div>
          <div className="progress-ring" data-percent="75">75%</div>
        </section>

        <section className="row">
          <div className="col-main">
            <div className="panel">
              <div className="tab-row">
                <button className="tab active">Tasks (12)</button>
                <button className="tab">Overview</button>
              </div>
              <ul className="task-list">
                <li className="task-item">
                  <span>Finalize structural drawings</span>
                  <span className="chip chip-progress">In Progress</span>
                </li>
                <li className="task-item">
                  <span>Submit council permit application</span>
                  <span className="chip chip-todo">To Do</span>
                </li>
                {/* remaining tasks follow the same shape */}
              </ul>
            </div>

            <div className="panel">
              <h2>Recent Activity</h2>
              <ul className="activity-list">
                <li className="activity-item">
                  <strong>Naledi M.</strong> moved "Site survey and soil report" to Completed · 2h ago
                </li>
                <li className="activity-item">
                  <strong>Thabo K.</strong> commented on "Client walkthrough of floor plans" · 5h ago
                </li>
                {/* remaining activity entries follow the same shape */}
              </ul>
            </div>
          </div>

          <div className="col-side">
            <div className="panel">
              <h2>Team Members</h2>
              <ul className="member-list">
                <li className="member-item">
                  <span className="avatar">MS</span> Mpho S. — Lead Developer
                </li>
                <li className="member-item">
                  <span className="avatar">NM</span> Naledi M. — Project Manager
                </li>
                {/* remaining team members follow the same shape */}
              </ul>
            </div>

            <div className="panel">
              <h2>Deadlines</h2>
              <ul className="deadline-list">
                <li className="deadline-item">
                  <span>Permit submission</span>
                  <span className="deadline-date">3 Aug</span>
                </li>
                <li className="deadline-item">
                  <span>Client sign-off</span>
                  <span className="deadline-date">8 Aug</span>
                </li>
                {/* remaining deadlines follow the same shape */}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}