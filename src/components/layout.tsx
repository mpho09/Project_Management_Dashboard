// src/components/Layout.tsx
import { Outlet, NavLink } from "react-router-dom";

export default function Layout() {
  return (
    <div className="layout">
      <aside className="sidebar">
        <div className="brand">PulseBoard</div>
        <nav>
          <NavLink to="/dashboard" className="nav-item">Dashboard</NavLink>
          <NavLink to="/projects" className="nav-item">Projects</NavLink>
          <NavLink to="/tasks" className="nav-item">Tasks</NavLink>
        </nav>
      </aside>

      <div className="main">
        <Outlet /> 
      </div>
    </div>
  );
}