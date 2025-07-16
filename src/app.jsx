import { useState } from "react";
import Header from "./components/header";
import Filter from "./components/filter";
import TaskList from "./components/tasklist";
import TaskForm from "./components/taskform";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "All") return true;
    if (filter === "Active") return !task.completed;
    if (filter === "Completed") return task.completed;
  });

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <Header />
      <TaskForm onAdd={addTask} />
      <Filter current={filter} onChange={setFilter} />
      <TaskList
        tasks={filteredTasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
      />
    </div>
  );
}

export default App;
