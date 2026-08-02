import { useState } from "react";

// src/tasks/TasksPage.tsx

interface Task {
  id: number;
  title: string;
  description: string;
  project: string;
  who: string;
  priority: "High" | "Medium" | "Low";
  status: "To Do" | "In Progress" | "In Review" | "Completed";
}

const prioStyle: Record<Task["priority"], string> = {
  High: "bg-prio-highbg text-prio-high",
  Medium: "bg-prio-medbg text-prio-med",
  Low: "bg-prio-lowbg text-prio-low",
};

const columns = [
  "To Do",
  "In Progress",
  "In Review",
  "Completed",
] as const;

export default function TasksPage() {
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [priority, setPriority] = useState<
    "High" | "Medium" | "Low" | ""
  >("");

  const [status, setStatus] = useState<
    "To Do" | "In Progress" | "In Review" | "Completed"
  >("To Do");

  const [error, setError] = useState("");

  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Submit council permit application",
      description: "Submit documents for council approval",
      project: "Riverside Apts",
      who: "NM",
      priority: "High",
      status: "To Do",
    },
    {
      id: 2,
      title: "Finalize structural drawings",
      description: "Complete building drawings",
      project: "Riverside Apts",
      who: "MS",
      priority: "High",
      status: "In Progress",
    },
    {
      id: 3,
      title: "Client walkthrough of floor plans",
      description: "Review plans with client",
      project: "Riverside Apts",
      who: "TK",
      priority: "Medium",
      status: "In Review",
    },
    {
      id: 4,
      title: "Site survey and soil report",
      description: "Complete site inspection",
      project: "Riverside Apts",
      who: "NM",
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
      setError("Please select priority.");
      return;
    }


    const newTask: Task = {
      id: Date.now(),
      title,
      description,
      project: "Riverside Apts",
      who: "EM",
      priority,
      status,
    };


    setTasks((prev) => [...prev, newTask]);

    setTitle("");
    setDescription("");
    setPriority("");
    setStatus("To Do");

    setError("");
    setIsTaskModalOpen(false);
  }


  return (
    <>
      <header className="sticky top-0 z-10 flex items-center justify-between border-b border-line bg-surface/80 px-8 py-4 backdrop-blur">

        <div>
          <h1 className="text-lg font-bold text-ink">
            Tasks
          </h1>

          <p className="text-xs text-ink-faint">
            Board view · {tasks.length} tasks
          </p>
        </div>


        <button
          onClick={() => setIsTaskModalOpen(true)}
          className="rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-600"
        >
          + New Task
        </button>

      </header>


      <main className="px-8 py-6">

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">


          {columns.map((column) => (

            <div
              key={column}
              className="flex flex-col rounded-xl border border-line bg-surface-sunken"
            >

              <div className="px-4 py-3">

                <span className="text-sm font-semibold text-ink">
                  {column}
                </span>

              </div>


              <div className="flex flex-col gap-2 px-3 pb-3">


                {tasks
                  .filter((task) => task.status === column)
                  .map((task) => (

                  <div
                    key={task.id}
                    className="rounded-lg border border-line bg-surface p-3 shadow-card"
                  >

                    <span
                      className={`inline-block rounded px-2 py-1 text-xs font-semibold ${prioStyle[task.priority]}`}
                    >
                      {task.priority}
                    </span>


                    <h3 className="mt-2 text-sm font-medium text-ink">
                      {task.title}
                    </h3>


                    <p className="text-xs text-ink-faint">
                      {task.description}
                    </p>


                    <div className="mt-3 flex justify-between">

                      <span className="text-xs text-ink-faint">
                        {task.project}
                      </span>


                      <span className="avatar">
                        {task.who}
                      </span>

                    </div>


                  </div>

                ))}


              </div>

            </div>

          ))}


        </section>

      </main>



      {isTaskModalOpen && (

        <div className="fixed inset-0 flex items-center justify-center bg-black/40">


          <form
            onSubmit={handleSubmit}
            className="w-96 rounded-xl bg-white p-6"
          >

            <h2 className="mb-4 text-lg font-bold">
              Create New Task
            </h2>


            {error && (
              <p className="mb-3 text-sm text-red-500">
                {error}
              </p>
            )}


            <input
              className="mb-3 w-full rounded border p-2"
              placeholder="Task title"
              value={title}
              onChange={(e)=>setTitle(e.target.value)}
            />


            <textarea
              className="mb-3 w-full rounded border p-2"
              placeholder="Description"
              value={description}
              onChange={(e)=>setDescription(e.target.value)}
            />


            <select
              className="mb-3 w-full rounded border p-2"
              value={priority}
              onChange={(e)=>setPriority(e.target.value as any)}
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


            <select
              className="mb-4 w-full rounded border p-2"
              value={status}
              onChange={(e)=>setStatus(e.target.value as any)}
            >

              {columns.map((item)=>(
                <option key={item}>
                  {item}
                </option>
              ))}

            </select>


            <div className="flex justify-end gap-3">


              <button
                type="button"
                onClick={()=>setIsTaskModalOpen(false)}
                className="rounded bg-gray-200 px-4 py-2"
              >
                Cancel
              </button>


              <button
                type="submit"
                className="rounded bg-brand-500 px-4 py-2 text-white"
              >
                Add Task
              </button>


            </div>


          </form>


        </div>

      )}

    </>
  );
}