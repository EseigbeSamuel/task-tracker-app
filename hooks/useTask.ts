import { useEffect, useState } from "react";
import { Task } from "../types/task";
import { loadTasks, saveTasks } from "../storage/taskStorage";
import { v4 as uuid } from "uuid";

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
      id: uuid(),
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
