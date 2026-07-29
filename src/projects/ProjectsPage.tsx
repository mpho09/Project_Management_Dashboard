import { Link } from "react-router-dom";

export default function ProjectsPage() {
  return (
    <>
      <header className="topbar">
        <h1>Projects</h1>

        <div className="topbar-actions">
          <input
            type="text"
            id="searchInput"
            className="search"
            placeholder="Search projects..."
          />

          <div className="avatar">MK</div>
        </div>
      </header>

      <main className="content">
        <div className="toolbar">
          <div className="filters">
            <button className="filter-btn active">All</button>
            <button className="filter-btn">Active</button>
            <button className="filter-btn">Completed</button>
            <button className="filter-btn">At Risk</button>
          </div>

          <button className="btn-primary">+ New Project</button>
        </div>

        <section className="grid" id="cardGrid">

          <Link
            className="card"
            data-status="active"
            data-name="riverside apartments site plan"
            to="/projects/prj-014"
          >
            <div className="card-top">
              <span className="status status-active">Active</span>
              <span className="card-id">#PRJ-014</span>
            </div>

            <h3 className="card-title">
              Riverside Apartments Site Plan
            </h3>

            <p className="card-desc">
              Structural and layout planning for the new residential block phase 2.
            </p>

            <div className="bar-track">
              <div className="bar-fill" style={{ width: "75%" }} />
            </div>

            <div className="card-meta">
              <span>75% complete</span>
              <span>Due 12 Aug</span>
            </div>
          </Link>

          <Link
            className="card"
            data-status="at-risk"
            data-name="warehouse inventory system"
            to="/projects/prj-027"
          >
            <div className="card-top">
              <span className="status status-atrisk">At Risk</span>
              <span className="card-id">#PRJ-027</span>
            </div>

            <h3 className="card-title">
              Warehouse Inventory System
            </h3>

            <p className="card-desc">
              Barcode scanning and stock reconciliation tooling for the main depot.
            </p>

            <div className="bar-track">
              <div className="bar-fill" style={{ width: "20%" }} />
            </div>

            <div className="card-meta">
              <span>20% complete</span>
              <span>Overdue 3 days</span>
            </div>
          </Link>

        </section>
      </main>
    </>
  );
}