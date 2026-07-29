// src/App.tsx
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout";
import DashboardPage from "./dashboard/dashboardPage";
import ProjectsPage from "./projects/projectsPage";
import ProjectDetailsPage from "./projects/projectsDetailsPage";
import TasksPage from "./tasks/tasksPage";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="projects/:id" element={<ProjectDetailsPage />} />
        <Route path="tasks" element={<TasksPage />} />
      </Route>
    </Routes>
  );
}

export default App;
