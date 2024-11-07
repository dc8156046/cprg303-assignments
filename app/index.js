import { StyleSheet, Text, View } from "react-native";
import ToDoList from "../component/ToDoList";
import ToDoForm from "../component/ToDoForm";
import { useState } from "react";

export default function Page() {
  const [tasks, setTasks] = useState(["Do laundry", "Go to gym", "Walk dog"]);

  const addTask = (taskText) => {
    if (!taskText) {
      return;
    }
    if (tasks.filter((task) => task === taskText).length > 0) {
      alert("Task already exists");
    } else {
      setTasks([...tasks, taskText]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.subtitle}>To Do List</Text>
        <ToDoList tasks={tasks} />
        <ToDoForm addTask={addTask} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5F5F5",
    padding: 20,
  },
  main: {
    justifyContent: "center",
    width: "100%",
    maxWidth: 600,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
    textAlign: "center",
    marginBottom: 20,
  },
});
