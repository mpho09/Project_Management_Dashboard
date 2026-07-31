import { useState } from "react";

// src/tasks/TasksPage.tsx

export default function TasksPage() {
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("To Do");

  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!title.trim()) {
      setError("Task title is required.");
      return;
    }

    if (!description.trim()) {
      setError("Description is required.");
      return;
    }

    if (!priority) {
      setError("Please select a priority.");
      return;
    }

    setError("");

    alert("Validation passed!");
  }

  return (
    <>
      <header className="topbar">
        <h1>Tasks</h1>
        <button
          className="btn-primary"
          onClick={() => setIsTaskModalOpen(true)}
        >
          + New Task
        </button>
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
        {isTaskModalOpen && (
          <div className="modal">
            <h2>New Task</h2>

            <form onSubmit={handleSubmit}>
              {error && (
                <p style={{ color: "red", marginBottom: "1rem" }}>{error}</p>
              )}
              <div>
                <label>Title</label>

                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div>
                <label>Description</label>

                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div>
                <label>Priority</label>

                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                >
                  <option value="">Select Priority</option>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>

              <div>
                <label>Status</label>

                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option>To Do</option>
                  <option>In Progress</option>
                  <option>In Review</option>
                  <option>Completed</option>
                </select>
              </div>

              <button type="submit">Save Task</button>
            </form>
          </div>
        )}
      </main>
    </>
  );
}
