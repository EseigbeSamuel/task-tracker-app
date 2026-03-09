// import { useState } from "react";
// import { View, FlatList, Text } from "react-native";
// import { useTasks } from "../hooks/useTasks";
// import TaskInput from "../components/TaskInput";
// import TaskItem from "../components/TaskItem";
// import FilterTabs, { Filter } from "../components/FilterTabs";
import "./global.css";

import { useState } from "react";
import { useTasks } from "./hooks/useTask";
import { FlatList, Text, View } from "react-native";
import TaskInput from "./components/TaskInput";
import FilterTabs, { Filter } from "./components/FilterTabs";
import TaskItem from "./components/TaskItem";

export default function App() {
  const { tasks, addTask, toggleTask } = useTasks();
  const [filter, setFilter] = useState<Filter>("all");

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <View className="flex-1 p-6 pt-16 bg-white">
      <Text className="text-2xl font-bold mb-4">Task Tracker</Text>

      <TaskInput onAdd={addTask} />

      <FilterTabs setFilter={setFilter} />

      {filteredTasks.length === 0 && (
        <Text className="text-center text-gray-400">No tasks yet</Text>
      )}

      <FlatList
        data={filteredTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem task={item} onToggle={() => toggleTask(item.id)} />
        )}
      />
    </View>
  );
}
