import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

interface ItemProps {
  text: String;
  onDeleteItem: (id: string) => void;
  id: string;
}

function GoalItem({ text, onDeleteItem, id }: ItemProps) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={() => onDeleteItem(id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e08cc",
  },
  goalText: {
    color: "white",
    padding: 8,
  },
  pressedItem: {},
});
