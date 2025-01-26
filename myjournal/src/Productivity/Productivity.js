import React, { useState } from 'react';

function Productivity() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const addTask = (event) => {
    event.preventDefault();
    if (taskInput.trim() === "") return;

    const newTask = {
      id: `item-${Date.now()}`,
      text: taskInput,
      completed: false
    };

    setTasks([...tasks, newTask]);
    setTaskInput(""); // Clear the input field
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="navbuttons">
      <a href="index.js">
        <button>Home</button>
      </a>
      <a href="journal.js">
        <button>Journal</button>
      </a>
      <a href="productivity.js">
        <button>Productivity</button>
      </a>

      <h3>To-do List</h3>
      <form onSubmit={addTask}>
        <input
          type="text"
          placeholder="Enter to-do list item"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          style={{ padding: '10px', width: 'calc(100% - 24px)', marginBottom: '10px' }}
        />
        <button
          type="submit"
          style={{
            padding: '10px 15px',
            backgroundColor: '#007BFF',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Add Item
        </button>
      </form>

      <div style={{ marginTop: '20px' }}>
        {tasks.map((task) => (
          <div key={task.id} style={{ marginBottom: '10px' }}>
            <input
              type="checkbox"
              id={task.id}
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id)}
            />
            <label
              htmlFor={task.id}
              style={{
                textDecoration: task.completed ? 'line-through' : 'none',
                marginLeft: '5px',
              }}
            >
              {task.text}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Productivity;
