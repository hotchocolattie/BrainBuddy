import React, { useState } from 'react';
import './App.css';

function Productivity() {
  const [taskInput, setTaskInput] = useState(""); // For the input field
  const [tasks, setTasks] = useState([]); // For the list of tasks

  const handleAddItem = (event) => {
    event.preventDefault(); // Prevent page reload on form submission
    if (taskInput.trim() === "") return; // Ignore empty input

    // Create a new task with a unique ID
    const newTask = { id: `item-${Date.now()}`, text: taskInput };

    // Update the task list and reset the input field
    setTasks([...tasks, newTask]);
    setTaskInput("");
  };

  return (
    <div className="list">
      <h3 id="to-do">To-do List</h3>
      <form onSubmit={handleAddItem}>
        <input
          type="text"
          className="task"
          placeholder="Enter to-do list item"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)} // Sync input field with state
        />
        <br />
        <br />
        <button id="addItem">Add Item</button>
      </form>

      <div id="itemList">
        {/* Render each task */}
        {tasks.map((task) => (
          <div key={task.id}>
            <input type="checkbox" id={task.id} />
            <label htmlFor={task.id}>{task.text}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Productivity;
