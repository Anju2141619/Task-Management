import { useState } from "react";

function TaskForm({ onAdd }) {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("low");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text,
      priority,
      completed: false,
    };

    onAdd(newTask);
    setText(""); // reset input
    setPriority("low"); // reset priority
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Enter task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ padding: "8px", marginRight: "10px", width: "60%" }}
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        style={{ padding: "8px", marginRight: "10px" }}
      >
        <option value="low"> Low</option>
        <option value="medium"> Medium</option>
        <option value="high">High</option>
      </select>
      <button type="submit" style={{ padding: "8px 16px" }}>
        Add
      </button>
    </form>
  );
}

export default TaskForm;