import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
} from "react-native";

export default function App() {
  const [enteredTodo, setEnteredTodo] = useState("");
  const [showTodo, setShowTodo] = useState([]);

  const todoInputHandler = (inputText) => {
    setEnteredTodo(inputText);
  };

  const addTodoHandler = () => {
    setShowTodo((showTodo) => [...showTodo, enteredTodo]);
  };

  return (
    <View style={styles.mainScreen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="ToDO List"
          style={styles.input}
          onChangeText={todoInputHandler}
          value={enteredTodo}
        />
        <Button title="ADD" color="green" onPress={addTodoHandler} />
      </View>
      <ScrollView>
        {showTodo.map((goal, i) => (
          <View key={i} style={styles.list}>
            <Text>{goal}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: 200,
    margin: 5,
    paddingLeft: 10,
    borderColor: "black",
    borderWidth: 2,
  },
  mainScreen: {
    paddingTop: 30,
    paddingLeft: 10,
    paddingRight: 10,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  list: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});
