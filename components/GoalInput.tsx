import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";

interface GoalInputProps {
  onAddGoal: (enteredGoalText: string) => void;
  modalVisible: boolean;
  onCancel: () => void;
}

function GoalInput({ onAddGoal, modalVisible, onCancel }: GoalInputProps) {
  const [enteredGoalText, setEnteredText] = useState("");

  function goalInputHandler(enteredText: string) {
    setEnteredText(enteredText);
  }

  function addGoalHandler() {
    onAddGoal(enteredGoalText);
    setEnteredText("");
  }

  return (
    <Modal visible={modalVisible} animationType="fade">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View>
            <Button title="cancel" onPress={onCancel} color="#31282" />
          </View>
          <View>
            <Button title="Add Goal" onPress={addGoalHandler} color="#b180f0" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e08cc",
  },
  goalText: {
    color: "white",
  },
  inputContainer: {
    flex: 1, // TextInput and Button takes 1 quoter of mobile hight
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#12048",
    borderRadius: 6,
    width: "100%",
    marginRight: 8,
    padding: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
