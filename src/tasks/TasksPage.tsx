import { useState } from "react";

// src/tasks/TasksPage.tsx

interface Task {
  id: number;
  title: string;
  description: string;
  priority: string;
  status: string;
}

export default function TasksPage() {
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("To Do");

  const [error, setError] = useState("");

  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Submit council permit application",
      description: "Submit documents for council approval",
      priority: "High",
      status: "To Do",
    },
    {
      id: 2,
      title: "Finalize structural drawings",
      description: "Complete building drawings",
      priority: "High",
      status: "In Progress",
    },
    {
      id: 3,
      title: "Client walkthrough of floor plans",
      description: "Review plans with client",
      priority: "Medium",
      status: "In Review",
    },
    {
      id: 4,
      title: "Site survey and soil report",
      description: "Complete site inspection",
      priority: "Medium",
      status: "Completed",
    },
  ]);

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

    const newTask: Task = {
      id: Date.now(),
      title,
      description,
      priority,
      status,
    };

    setTasks([...tasks, newTask]);

    setTitle("");
    setDescription("");
    setPriority("");
    setStatus("To Do");

    setError("");
    setIsTaskModalOpen(false);
  }

  function renderTasks(taskStatus: string) {
    return tasks
      .filter((task) => task.status === taskStatus)
      .map((task) => (
        <div className="task-card" key={task.id}>
          <span
            className={
              task.priority === "High"
                ? "priority p-high"
                : task.priority === "Medium"
                ? "priority p-med"
                : "priority"
            }
          >
            {task.priority}
          </span>

          <h3 className="task-title">{task.title}</h3>

          <p>{task.description}</p>

          <div className="task-meta">
            <span>Riverside Apts</span>
            <span className="avatar">EM</span>
          </div>
        </div>
      ));
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
              <span className="count">
                {tasks.filter((task) => task.status === "To Do").length}
              </span>
            </div>

            {renderTasks("To Do")}
          </div>


          <div className="col">
            <div className="col-head">
              <span>In Progress</span>
              <span className="count">
                {tasks.filter((task) => task.status === "In Progress").length}
              </span>
            </div>

            {renderTasks("In Progress")}
          </div>


          <div className="col">
            <div className="col-head">
              <span>In Review</span>
              <span className="count">
                {tasks.filter((task) => task.status === "In Review").length}
              </span>
            </div>

            {renderTasks("In Review")}
          </div>


          <div className="col">
            <div className="col-head">
              <span>Completed</span>
              <span className="count">
                {tasks.filter((task) => task.status === "Completed").length}
              </span>
            </div>

            {renderTasks("Completed")}
          </div>

        </section>


        {isTaskModalOpen && (
          <div className="modal">

            <h2>New Task</h2>

            <form onSubmit={handleSubmit}>

              {error && (
                <p style={{ color: "red" }}>
                  {error}
                </p>
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
                  <option value="">
                    Select Priority
                  </option>

                  <option value="High">
                    High
                  </option>

                  <option value="Medium">
                    Medium
                  </option>

                  <option value="Low">
                    Low
                  </option>

                </select>
              </div>


              <div>
                <label>Status</label>

                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option>
                    To Do
                  </option>

                  <option>
                    In Progress
                  </option>

                  <option>
                    In Review
                  </option>

                  <option>
                    Completed
                  </option>

                </select>

              </div>


              <button type="submit">
                Save Task
              </button>


              <button
                type="button"
                onClick={() => setIsTaskModalOpen(false)}
              >
                Cancel
              </button>


            </form>

          </div>
        )}

      </main>
    </>
  );
}