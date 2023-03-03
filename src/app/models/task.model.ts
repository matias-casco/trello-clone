export interface Task {
  id: string;
  name: string;
}

export interface Column {
  title: string;
  todos: Task[];
}
