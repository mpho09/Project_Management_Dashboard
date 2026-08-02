import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

interface Project {
  id: string;
  name: string;
  desc: string;
  status: "active" | "at-risk" | "completed";
  pct: number;
  due: string;
}

const PROJECTS: Project[] = [
  {
    id: "prj-014",
    name: "Riverside Apartments Site Plan",
    desc: "Structural and layout planning for the new residential block phase 2.",
    status: "active",
    pct: 75,
    due: "Due 12 Aug",
  },
  {
    id: "prj-027",
    name: "Warehouse Inventory System",
    desc: "Barcode scanning and stock reconciliation tooling for the main depot.",
    status: "at-risk",
    pct: 20,
    due: "Overdue 3 days",
  },
  {
    id: "prj-031",
    name: "Client Portal Redesign",
    desc: "Refresh of the customer-facing portal with a new design system.",
    status: "active",
    pct: 40,
    due: "Due 28 Aug",
  },
  {
    id: "prj-009",
    name: "Mobile App Onboarding",
    desc: "New signup and first-run experience for the iOS and Android apps.",
    status: "completed",
    pct: 100,
    due: "Delivered 2 Jul",
  },
  {
    id: "prj-040",
    name: "Q3 Marketing Site",
    desc: "Campaign landing pages and CMS integration for the autumn push.",
    status: "active",
    pct: 55,
    due: "Due 5 Sep",
  },
  {
    id: "prj-022",
    name: "Data Warehouse Migration",
    desc: "Move legacy reporting tables to the new cloud data warehouse.",
    status: "at-risk",
    pct: 33,
    due: "Due 19 Aug",
  },
];


const FILTERS = [
  "All",
  "Active",
  "Completed",
  "At Risk",
] as const;


type Filter = (typeof FILTERS)[number];


const statusStyle: Record<Project["status"], string> = {
  active: "bg-status-activebg text-status-active",
  "at-risk": "bg-status-riskbg text-status-risk",
  completed: "bg-status-donebg text-status-done",
};


const statusLabel: Record<Project["status"], string> = {
  active: "Active",
  "at-risk": "At Risk",
  completed: "Completed",
};


const barTone: Record<Project["status"], string> = {
  active: "bg-status-active",
  "at-risk": "bg-status-risk",
  completed: "bg-status-done",
};


export default function ProjectsPage() {

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState<Filter>("All");


  const [showModal, setShowModal] = useState(false);


  const [newProject, setNewProject] = useState({
    name: "",
    description: "",
    dueDate: "",
  });


  const createProject = () => {

    console.log(newProject);

    setShowModal(false);

    setNewProject({
      name: "",
      description: "",
      dueDate: "",
    });

  };


  const visible = useMemo(() => {

    const q = search.trim().toLowerCase();

    return PROJECTS.filter((p) => {

      const matchesSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q);


      const matchesFilter =
        filter === "All" ||
        (filter === "Active" && p.status === "active") ||
        (filter === "Completed" && p.status === "completed") ||
        (filter === "At Risk" && p.status === "at-risk");


      return matchesSearch && matchesFilter;

    });

  }, [search, filter]);  return (
    <>
      <header className="sticky top-0 z-10 flex items-center justify-between border-b border-line bg-surface/80 px-8 py-4 backdrop-blur">

        <div>
          <h1 className="text-lg font-bold text-ink">
            Projects
          </h1>

          <p className="text-xs text-ink-faint">
            {PROJECTS.length} projects total
          </p>
        </div>


        <div className="flex items-center gap-3">

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search projects…"
            className="h-9 w-64 rounded-lg border border-line bg-surface-sunken px-3 text-sm outline-none transition focus:border-brand-500 focus:bg-surface"
          />


          <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-500 text-xs font-semibold text-white">
            MK
          </span>

        </div>

      </header>



      <main className="px-8 py-6">


        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">


          <div className="flex gap-1 rounded-lg border border-line bg-surface p-1">


            {FILTERS.map((f) => (

              <button

                key={f}

                onClick={() => setFilter(f)}

                className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                  filter === f
                    ? "bg-brand-500 text-white"
                    : "text-ink-soft hover:bg-surface-sunken"
                }`}

              >

                {f}

              </button>

            ))}


          </div>



          <button

            onClick={() => setShowModal(true)}

            className="rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-600"

          >

            + New Project

          </button>


        </div>




        {visible.length === 0 ? (

          <div className="grid place-items-center rounded-xl border border-dashed border-line bg-surface py-20 text-center">


            <p className="text-sm font-semibold text-ink">
              No projects match that
            </p>


            <p className="mt-1 text-sm text-ink-faint">
              Try a different search or filter.
            </p>


          </div>


        ) : (


          <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">


            {visible.map((p) => (


              <Link

                key={p.id}

                to={`/projects/${p.id}`}

                className="group flex flex-col rounded-xl border border-line bg-surface p-5 shadow-card transition hover:-translate-y-0.5 hover:border-brand-100 hover:shadow-raised"

              >



                <div className="mb-3 flex items-center justify-between">


                  <span
                    className={`rounded-md px-2 py-0.5 text-xs font-semibold ${statusStyle[p.status]}`}
                  >

                    {statusLabel[p.status]}

                  </span>



                  <span className="text-xs font-medium text-ink-faint">

                    #{p.id.toUpperCase()}

                  </span>


                </div>





                <h3 className="text-base font-bold text-ink group-hover:text-brand-600">

                  {p.name}

                </h3>





                <p className="mt-1.5 line-clamp-2 flex-1 text-sm text-ink-soft">

                  {p.desc}

                </p>





                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-surface-sunken">


                  <div

                    className={`h-full rounded-full ${barTone[p.status]}`}

                    style={{
                      width: `${p.pct}%`
                    }}

                  />


                </div>





                <div className="mt-2 flex items-center justify-between text-xs text-ink-faint">


                  <span>
                    {p.pct}% complete
                  </span>


                  <span>
                    {p.due}
                  </span>


                </div>



              </Link>


            ))}



          </section>


        )}



      </main>
            {showModal && (

        <div className="modal-overlay">


          <div className="modal">


            <h2>
              Add New Project
            </h2>




            <input

              type="text"

              placeholder="Project name"

              value={newProject.name}

              onChange={(e) =>
                setNewProject({
                  ...newProject,
                  name: e.target.value,
                })
              }

            />





            <textarea

              placeholder="Description"

              value={newProject.description}

              onChange={(e) =>
                setNewProject({
                  ...newProject,
                  description: e.target.value,
                })
              }

            />





            <input

              type="text"

              placeholder="Due date"

              value={newProject.dueDate}

              onChange={(e) =>
                setNewProject({
                  ...newProject,
                  dueDate: e.target.value,
                })
              }

            />






            <div className="modal-buttons">



              <button

                className="cancel-btn"

                onClick={() => setShowModal(false)}

              >

                Cancel

              </button>






              <button

                className="create-btn"

                onClick={createProject}

              >

                Create Project

              </button>




            </div>



          </div>



        </div>


      )}



    </>
  );

}