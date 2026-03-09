import { View, Pressable, Text } from "react-native";

export type Filter = "all" | "active" | "completed";

export default function FilterTabs({
  setFilter,
}: {
  setFilter: (filter: Filter) => void;
}) {
  return (
    <View className="flex-row justify-around mb-4">
      <Pressable onPress={() => setFilter("all")}>
        <Text>All</Text>
      </Pressable>

      <Pressable onPress={() => setFilter("active")}>
        <Text>Active</Text>
      </Pressable>

      <Pressable onPress={() => setFilter("completed")}>
        <Text>Completed</Text>
      </Pressable>
    </View>
  );
}
