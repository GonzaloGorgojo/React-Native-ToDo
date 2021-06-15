import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button, Text } from "react-native";
import TodoItem from "./components/TodoItem";
import TodoInput from "./components/TodoInput";

export default function App() {
  const [showTodo, setShowTodo] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addTodoHandler = (enteredTodo) => {
    if (enteredTodo.length === 0) {
      return;
    }
    setShowTodo((currentTodos) => [
      ...currentTodos,
      { key: Math.random().toString(), value: enteredTodo },
    ]);
    setIsAddMode(false);
  };

  const removeTodoHandler = (todoId) => {
    setShowTodo((currentTodos) => {
      return currentTodos.filter((todo) => todo.key !== todoId);
    });
  };

  const cancelTodoModal = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.mainScreen}>
      <View style={styles.titlesView}>
        <Text style={styles.titleText}>React-Native TO DO APP</Text>
        <Text style={styles.subtitleText}>
          Build your grocery store list, your to-do list or whatever list you
          want !
        </Text>
      </View>
      <Button title="Add New Item" onPress={() => setIsAddMode(true)} />
      <TodoInput
        visible={isAddMode}
        onAddTodo={addTodoHandler}
        onCancel={cancelTodoModal}
      />
      <FlatList
        data={showTodo}
        renderItem={(itemData) => (
          <TodoItem
            id={itemData.item.key}
            onDelete={removeTodoHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainScreen: {
    paddingTop: 40,
    paddingHorizontal: 10,
  },
  titleText: {
    fontSize: 25,
    fontWeight: "bold",
  },
  titlesView: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  subtitleText: {
    fontSize: 20,
    marginHorizontal: 20,
    marginVertical: 10,
    color: "green",
  },
});
