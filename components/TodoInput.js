import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const TodoInput = (props) => {
  const [enteredTodo, setEnteredTodo] = useState("");

  const todoInputHandler = (inputText) => {
    setEnteredTodo(inputText);
  };
  const addTodoHandler = () => {
    props.onAddTodo(enteredTodo);
    setEnteredTodo("");
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Add items to your list..."
          style={styles.input}
          onChangeText={todoInputHandler}
          value={enteredTodo}
        />
        <View style={styles.buttonView}>
          <Button title="ADD" color="green" onPress={addTodoHandler} />
          <Button title="Close" color="red" onPress={props.onCancel} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    height: 40,
    margin: 5,
    paddingLeft: 10,
    borderColor: "black",
    borderWidth: 2,
  },
  buttonView: {
    flexDirection: row,
  },
});

export default TodoInput;
