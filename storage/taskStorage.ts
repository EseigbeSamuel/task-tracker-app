import AsyncStorage from "@react-native-async-storage/async-storage";
import { Task } from "../types/task";

const TASK_KEY = "tasks";

export async function saveTasks(tasks: Task[]) {
  await AsyncStorage.setItem(TASK_KEY, JSON.stringify(tasks));
}

export async function loadTasks(): Promise<Task[]> {
  const data = await AsyncStorage.getItem(TASK_KEY);
  return data ? JSON.parse(data) : [];
}
