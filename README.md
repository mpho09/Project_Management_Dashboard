Project Management Dashboard
A frontend-only project management dashboard built with React, TypeScript, Vite, and Tailwind CSS.
The application allows users to view projects, manage tasks, track progress, and monitor deadlines through a responsive and user-friendly interface.

Project Overview
This dashboard provides a streamlined way to manage projects and tasks without requiring a backend.
Data can be sourced from an existing API, mock API, or provided dataset.

Key capabilities include:
Viewing and filtering projects
Managing tasks with statuses and priorities
Tracking deadlines and overdue tasks
Monitoring project progress and team activity

Core Features:

Dashboard;
Total projects, active projects, completed projects
Total tasks, completed tasks, overdue tasks
Upcoming deadlines
Project progress overview

Projects;
View all projects
Search and filter projects by status
View detailed project information

Project Details;
Project information and progress
Task lists and statuses
Team members and assignments
Deadlines and recent activity

Task Management;
View and create tasks via controlled forms
Update task status (To Do → In Progress → In Review → Completed)
Set task priorities
Assign tasks to team members
View task details

Technical Features;
This project demonstrates modern React + TypeScript practices:
React functional components
TypeScript interfaces and typed props
Typed function arguments and events
Tailwind CSS for styling
Responsive design
React Router with multiple pages
API or mock data fetching
Loading, error, and empty states
Controlled forms with validation
State management with useState, useEffect, and useContext
At least one custom hook
Practical use of useRef
Lazy loading of components/pages

 Suggested Routes;
/
/dashboard
/projects
/projects/:id
/tasks/:id

Frontend State Management;
Since this is a frontend-only project, state is managed using:
React state
Context API
LocalStorage

Deliverables;
Each team must submit:
A working React + TypeScript application
GitHub repository with clear documentation
Deployed application on Vercel

README containing:
Project overview
Features
Technologies used
Setup instructions
Data source information

Definition of Done;
The project is complete when:
Built with React + TypeScript
Responsive design implemented
Multiple pages and routes functional
Data fetched from API or provided source
Loading, error, and empty states handled
Search and filter for projects/tasks available
Task creation and updates functional
Context API used for shared state
Custom hook implemented
useRef applied for a practical feature
Lazy loading implemented
Deployed to Vercel
GitHub repo includes clear documentation

Technologies Used
React
TypeScript
Vite
Tailwind CSS
React Router 




Setup Instructions
Clone the repository:

bash
git clone https://github.com/mpho09/Project_Management_Dashboard.git
cd PROJECT_MANAGEMENT_DASHBOARD

Install dependencies:
bash
npm install

Setup Tailwind CSS:
Install Tailwind and dependencies:
bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

Configure tailwind.config.js:

js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}


Add Tailwind to src/index.css:
css
@tailwind base;
@tailwind components;
@tailwind utilities;

Start development server:
bash
npm run dev

Build for production:
bash
npm run build

Preview production build:
bash
npm run preview
 
Sample vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
  },
})


Data Source Information
Data can be fetched from a mock API (e.g., JSON server, static JSON files)

Or integrated with an existing API endpoint