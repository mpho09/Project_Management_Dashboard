import { Link } from "react-router-dom";
import { useState } from "react";

interface Project {
  id: string;
  name: string;
  description: string;
  status: string;
  progress: number;
  dueDate: string;
}

export default function ProjectsPage() {

  const [showModal, setShowModal] = useState(false);

  const [projects, setProjects] = useState<Project[]>([
    {
      id: "PRJ-014",
      name: "Riverside Apartments Site Plan",
      description:
        "Structural and layout planning for the new residential block phase 2.",
      status: "Active",
      progress: 75,
      dueDate: "12 Aug",
    },
    {
      id: "PRJ-027",
      name: "Warehouse Inventory System",
      description:
        "Barcode scanning and stock reconciliation tooling for the main depot.",
      status: "At Risk",
      progress: 20,
      dueDate: "Overdue 3 days",
    },
  ]);


  const [newProject, setNewProject] = useState({
    name: "",
    description: "",
    dueDate: "",
  });


  function createProject() {

    if (!newProject.name) {
      return;
    }


    const project: Project = {
      id: `PRJ-${projects.length + 1}`,
      name: newProject.name,
      description: newProject.description,
      status: "Active",
      progress: 0,
      dueDate: newProject.dueDate,
    };


    setProjects([...projects, project]);


    setNewProject({
      name: "",
      description: "",
      dueDate: "",
    });


    setShowModal(false);
  }



  return (
    <>

      <header className="topbar">

        <h1>Projects</h1>


        <div className="topbar-actions">

          <input
            className="search"
            placeholder="Search projects..."
          />

          <div className="avatar">
            MK
          </div>

        </div>

      </header>



      <main className="content">


        <div className="toolbar">


          <div className="filters">
            
         <button className="filter-btn">
              All
          </button>



            <button className="filter-btn">
              Active
            </button>


            <button className="filter-btn">
              Completed
            </button>


            <button className="filter-btn">
              At Risk
            </button>

          </div>



          <button
            className="add-project-btn"
            onClick={() => setShowModal(true)}
          >
            + Add New Project
          </button>


        </div>





        <section className="grid">


          {projects.map((project) => (

            <Link
              key={project.id}
              className="card"
              to={`/projects/${project.id}`}
            >


              <div className="card-top">


                <span className="status">
                  {project.status}
                </span>


                <span className="card-id">
                  #{project.id}
                </span>


              </div>



              <h3 className="card-title">
                {project.name}
              </h3>



              <p className="card-desc">
                {project.description}
              </p>



              <div className="bar-track">

                <div
                  className="bar-fill"
                  style={{
                    width: `${project.progress}%`
                  }}
                />

              </div>



              <div className="card-meta">

                <span>
                  {project.progress}% complete
                </span>


                <span>
                  Due {project.dueDate}
                </span>


              </div>



            </Link>

          ))}


        </section>


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
                  name: e.target.value
                })
              }
            />



            <textarea
              placeholder="Description"
              value={newProject.description}
              onChange={(e) =>
                setNewProject({
                  ...newProject,
                  description: e.target.value
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
                  dueDate: e.target.value
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