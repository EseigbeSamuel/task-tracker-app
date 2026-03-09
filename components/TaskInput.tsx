import { useState } from "react";
import { View, TextInput, Pressable, Text, Alert } from "react-native";

export default function TaskInput({
  onAdd,
}: {
  onAdd: (title: string) => void;
}) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (!text.trim()) {
      Alert.alert("Task cannot be empty");
      return;
    }

    onAdd(text);
    setText("");
  };

  return (
    <View className="mb-4">
      <TextInput
        placeholder="Enter task..."
        value={text}
        onChangeText={setText}
        className="border border-gray-300 rounded-lg p-3 mb-2"
      />

      <Pressable onPress={handleAdd} className="bg-blue-500 p-3 rounded-lg">
        <Text className="text-white text-center font-semibold">Add Task</Text>
      </Pressable>
    </View>
  );
}
