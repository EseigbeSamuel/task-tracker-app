import { View, Text, Pressable } from "react-native";
import { Task } from "../types/task";

export default function TaskItem({
  task,
  onToggle,
}: {
  task: Task;
  onToggle: () => void;
}) {
  return (
    <Pressable onPress={onToggle} className="p-3 border-b border-gray-200">
      <Text
        className={`text-lg ${
          task.completed ? "line-through text-gray-400" : ""
        }`}
      >
        {task.title}
      </Text>
    </Pressable>
  );
}
