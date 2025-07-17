import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() === '') return;
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask('');
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4 text-center text-purple-700">Task Manager</h1>
      
      <div className="flex justify-center mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="border border-gray-400 rounded-l px-4 py-2 w-1/2"
          placeholder="Enter a new task..."
        />
        <button
          onClick={addTask}
          className="bg-purple-600 text-white px-4 py-2 rounded-r hover:bg-purple-700"
        >
          Add Task
        </button>
      </div>

      <ul className="max-w-xl mx-auto">
        {tasks.length === 0 && <p className="text-center text-gray-500">No tasks added yet.</p>}
        {tasks.map((task, index) => (
          <li
            key={index}
            className="bg-white shadow-md rounded p-3 mb-2 flex justify-between items-center"
          >
            <span
              onClick={() => toggleTask(index)}
              className={`cursor-pointer ${task.completed ? 'line-through text-gray-500' : ''}`}
            >
              {task.text}
            </span>
            <button
              onClick={() => deleteTask(index)}
              className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
