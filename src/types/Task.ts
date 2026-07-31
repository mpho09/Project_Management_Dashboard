export interface Task {
  id: string;
  title: string;
  description: string;
  status: "To Do" | "In Progress" | "In Review" | "Completed";
  priority: "Low" | "Medium" | "High";
  dueDate: string;
  assignedTo: string;
}