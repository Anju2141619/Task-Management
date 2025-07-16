import { useState } from "react";
import Header from "./components/header";
import Filter from "./components/filter";
import TaskList from "./components/tasklist";
import TaskForm from "./components/taskform";

const addTask = (task) => {
  setTasks([...tasks, task]);
};

const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id));
};

const toggleTask = (id) => {
  setTasks(
    tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    )
  );
};
