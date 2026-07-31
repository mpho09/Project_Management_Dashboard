import type { Task } from "./Task";
import type { TeamMember } from "./TeamMember";

export interface Project {
  id: string;
  name: string;
  description: string;
  status: "Active" | "Completed" | "On Hold";
  progress: number;
  deadline: string;
  tasks: Task[];
  teamMembers: TeamMember[];
}