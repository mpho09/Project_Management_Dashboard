// src/App.tsx
import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout";

// Lazy-loaded pages
const DashboardPage = lazy(() => import("./dashboard/dashboardPage"));
const ProjectsPage = lazy(() => import("./projects/ProjectsPage"));
const ProjectDetailsPage = lazy(
  () => import("./projects/ProjectsDetailsPage")
);
const TasksPage = lazy(() => import("./tasks/TasksPage"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="flex h-screen items-center justify-center">
          <p className="text-lg font-semibold">Loading...</p>
        </div>
      }
    >
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="projects/:id" element={<ProjectDetailsPage />} />
          <Route path="tasks" element={<TasksPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;