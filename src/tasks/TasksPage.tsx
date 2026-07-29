<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Tasks — Project Management Dashboard</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body>
  <div class="layout">
    <aside class="sidebar">
      <div class="brand">PulseBoard</div>
      <nav>
        <a class="nav-item" href="dashboard.html">Dashboard</a>
        <a class="nav-item" href="projects.html">Projects</a>
        <a class="nav-item active" href="tasks.html">Tasks</a>
      </nav>
    </aside>

    <div class="main">
      <header class="topbar">
        <h1>Tasks</h1>
        <button class="btn-primary" onclick="openModal('newTaskModal')">+ New Task</button>
      </header>

      <main class="content">
        <section class="board">
          <div class="col">
            <div class="col-head">
              <span>To Do</span>
              <span class="count">3</span>
            </div>
            <div class="task-card" onclick="openTaskDetail('Submit council permit application','To Do','High','Riverside Apartments Site Plan','Naledi M.')">
              <span class="priority p-high">High</span>
              <h3 class="task-title">Submit council permit application</h3>
              <div class="task-meta"><span>Riverside Apts</span><span class="avatar">NM</span></div>
            </div>
            <div class="task-card" onclick="openTaskDetail('Landscape layout draft','To Do','Low','Riverside Apartments Site Plan','Thabo K.')">
              <span class="priority p-low">Low</span>
              <h3 class="task-title">Landscape layout draft</h3>
              <div class="task-meta"><span>Riverside Apts</span><span class="avatar">TK</span></div>
            </div>
            <div class="task-card" onclick="openTaskDetail('Vendor quote comparison','To Do','Medium','Warehouse Inventory System','Mpho S.')">
              <span class="priority p-med">Medium</span>
              <h3 class="task-title">Vendor quote comparison</h3>
              <div class="task-meta"><span>Warehouse</span><span class="avatar">MS</span></div>
            </div>
          </div>

          <div class="col">
            <div class="col-head">
              <span>In Progress</span>
              <span class="count">2</span>
            </div>
            <div class="task-card" onclick="openTaskDetail('Finalize structural drawings','In Progress','High','Riverside Apartments Site Plan','Mpho S.')">
              <span class="priority p-high">High</span>
              <h3 class="task-title">Finalize structural drawings</h3>
              <div class="task-meta"><span>Riverside Apts</span><span class="avatar">MS</span></div>
            </div>
            <div class="task-card" onclick="openTaskDetail('Budget reconciliation with contractor','In Progress','Medium','Riverside Apartments Site Plan','Naledi M.')">
              <span class="priority p-med">Medium</span>
              <h3 class="task-title">Budget reconciliation with contractor</h3>
              <div class="task-meta"><span>Riverside Apts</span><span class="avatar">NM</span></div>
            </div>
          </div>

          <div class="col">
            <div class="col-head">
              <span>In Review</span>
              <span class="count">1</span>
            </div>
            <div class="task-card" onclick="openTaskDetail('Client walkthrough of floor plans','In Review','Medium','Riverside Apartments Site Plan','Thabo K.')">
              <span class="priority p-med">Medium</span>
              <h3 class="task-title">Client walkthrough of floor plans</h3>
              <div class="task-meta"><span>Riverside Apts</span><span class="avatar">TK</span></div>
            </div>
          </div>

          <div class="col">
            <div class="col-head">
              <span>Completed</span>
              <span class="count">2</span>
            </div>
            <div class="task-card" onclick="openTaskDetail('Site survey and soil report','Completed','Medium','Riverside Apartments Site Plan','Naledi M.')">
              <span class="priority p-med">Medium</span>
              <h3 class="task-title">Site survey and soil report</h3>
              <div class="task-meta"><span>Riverside Apts</span><span class="avatar">NM</span></div>
            </div>
            <div class="task-card" onclick="openTaskDetail('Campaign asset export','Completed','Low','Q3 Marketing Launch','Mpho S.')">
              <span class="priority p-low">Low</span>
              <h3 class="task-title">Campaign asset export</h3>
              <div class="task-meta"><span>Q3 Marketing</span><span class="avatar">MS</span></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>

  <!-- New Task modal: controlled form with validation -->
  <div class="overlay" id="newTaskModal">
    <div class="modal">
      <h2>New Task</h2>
      <form id="taskForm" onsubmit="return validateTaskForm(event)">
        <div class="field">
          <label for="taskTitle">Task Title</label>
          <input id="taskTitle" type="text" placeholder="e.g. Review contractor invoice" />
          <p class="error" id="titleError" hidden>Title is required.</p>
        </div>
        <div class="field">
          <label for="taskProject">Project</label>
          <select id="taskProject">
            <option>Riverside Apartments Site Plan</option>
            <option>Client Portal Redesign</option>
            <option>Warehouse Inventory System</option>
          </select>
        </div>
        <div class="field">
          <label for="taskPriority">Priority</label>
          <select id="taskPriority">
            <option>Low</option>
            <option selected>Medium</option>
            <option>High</option>
          </select>
        </div>
        <div class="field">
          <label for="taskAssignee">Assignee</label>
          <select id="taskAssignee">
            <option>Mpho S.</option>
            <option>Naledi M.</option>
            <option>Thabo K.</option>
          </select>
        </div>
        <div class="field">
          <label for="taskDueDate">Due Date</label>
          <input id="taskDueDate" type="date" />
        </div>
        <div class="modal-actions">
          <button type="button" class="btn-ghost" onclick="closeModal('newTaskModal')">Cancel</button>
          <button type="submit" class="btn-primary">Create Task</button>
        </div>
      </form>
    </div>
  </div>

  <!-- Task detail modal -->
  <div class="overlay" id="taskDetailModal">
    <div class="modal">
      <h2 id="detailTitle">Task Title</h2>
      <p id="detailProject">Project</p>
      <div class="field">
        <label>Status</label>
        <p id="detailStatus"></p>
      </div>
      <div class="field">
        <label>Priority</label>
        <p id="detailPriority"></p>
      </div>
      <div class="field">
        <label>Assigned to</label>
        <p id="detailAssignee"></p>
      </div>
      <div class="modal-actions">
        <button type="button" class="btn-ghost" onclick="closeModal('taskDetailModal')">Close</button>
      </div>
    </div>
  </div>

  <script>
    function openModal(id) {
      document.getElementById(id).classList.add('open');
    }

    function closeModal(id) {
      document.getElementById(id).classList.remove('open');
    }

    function openTaskDetail(title, status, priority, project, assignee) {
      document.getElementById('detailTitle').textContent = title;
      document.getElementById('detailProject').textContent = project;
      document.getElementById('detailStatus').textContent = status;
      document.getElementById('detailPriority').textContent = priority;
      document.getElementById('detailAssignee').textContent = assignee;
      openModal('taskDetailModal');
    }

    function validateTaskForm(e) {
      e.preventDefault();
      const title = document.getElementById('taskTitle');
      const error = document.getElementById('titleError');
      if (!title.value.trim()) {
        error.hidden = false;
        return false;
      }
      error.hidden = true;
      closeModal('newTaskModal');
      alert('Task created (wireframe demo — not persisted).');
      return false;
    }
  </script>
</body>
</html>