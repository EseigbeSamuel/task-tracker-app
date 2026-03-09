import { useEffect, useState } from "react";
import { Task } from "../types/task";
import { loadTasks, saveTasks } from "../storage/taskStorage";

const generateId = () => `${Date.now()}-${Math.random().toString(36).slice(2)}`;

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    loadTasks().then(setTasks);
  }, []);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = (title: string) => {
    const newTask: Task = {
      id: generateId(),
      title,
      completed: false,
    };

    setTasks((prev) => [...prev, newTask]);
  };

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  return { tasks, addTask, toggleTask };
}
