// src/dashboard/DashboardPage.tsx

export default function DashboardPage() {
  return (
    <main className="content">
      <section className="stat-grid">
        <div className="stat-card">
          <p className="stat-label">Total Projects</p>
          <p className="stat-value">12</p>
        </div>
        <div className="stat-card">
          <p className="stat-label">Active Projects</p>
          <p className="stat-value">7</p>
        </div>
        <div className="stat-card">
          <p className="stat-label">Completed Projects</p>
          <p className="stat-value">5</p>
        </div>
        <div className="stat-card">
          <p className="stat-label">Overdue Tasks</p>
          <p className="stat-value">4</p>
        </div>
        <div className="stat-card">
          <p className="stat-label">Total Tasks</p>
          <p className="stat-value">86</p>
        </div>
        <div className="stat-card">
          <p className="stat-label">Completed Tasks</p>
          <p className="stat-value">54</p>
        </div>
        <div className="stat-card">
          <p className="stat-label">Upcoming Deadlines</p>
          <p className="stat-value">6</p>
        </div>
        <div className="stat-card">
          <p className="stat-label">Average Progress</p>
          <p className="stat-value">63%</p>
        </div>
      </section>

      <section className="row">
        <div className="panel">
          <h2>Project Progress</h2>
          <ul className="progress-list">
            <li className="progress-item">
              <span className="progress-name">Riverside Apartments Site Plan</span>
              <span className="progress-pct">75%</span>
            </li>
            <li className="progress-item">
              <span className="progress-name">Client Portal Redesign</span>
              <span className="progress-pct">40%</span>
            </li>
          </ul>
        </div>

        <div className="panel">
          <h2>Upcoming Deadlines</h2>
          <ul className="deadline-list">
            <li className="deadline-item">
              <span>Finalize floor plans</span>
              <span className="tag tag-high">High · 2 days</span>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}