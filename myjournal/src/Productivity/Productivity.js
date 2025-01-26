import React, { useState, useEffect } from 'react';
import './Productivity.css'


function Productivity() {
  const [taskInput, setTaskInput] = useState(""); // For the to-do list input
  const [tasks, setTasks] = useState([]); // To-do list tasks

  // Pomodoro timer states
  const [timeLeft, setTimeLeft] = useState(2 * 60); // Default: 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false); // Timer running or not
  const [isBreak, setIsBreak] = useState(false); // Work or break period

  // Add item to the to-do list
  const handleAddItem = (event) => {
    event.preventDefault();
    if (taskInput.trim() === "") return;
    setTasks([...tasks, { id: `item-${Date.now()}`, text: taskInput }]);
    setTaskInput("");
  };

  // Timer logic using useEffect
  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime === 0) {
            clearInterval(timer);
            setIsRunning(false);
            setIsBreak(!isBreak); // Toggle work/break mode
            setTimeLeft(isBreak ? 2 * 60 : 1 * 60); // Reset timer
           // return prevTime;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer); // Cleanup on component unmount or timer stop
  }, [isRunning, isBreak]);

  // Format time as MM:SS
    const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <div className="list">

      
      <h3 id="to-do">To-do List</h3>
      <form onSubmit={handleAddItem}>
        <input
          type="text"
          className="task"
          placeholder="Enter to-do list item"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <br />
        <br />
        <button id="addItem">Add Item</button>
      </form>

      <div id="itemList">
        {tasks.map((task) => (
          <div key={task.id}>
            <input type="checkbox" id={task.id} />
            <label htmlFor={task.id}>{task.text}</label>
          </div>
        ))}
      </div>
      </div>
      {/* Pomodoro timer section */}
      <div className="timer">
      <h3>Pomodoro Timer</h3>
      
        <h4>{isBreak ? "Break Time" : "Work Time"}</h4>
        <h1>{formatTime(timeLeft)}</h1>
        <button
          onClick={() => setIsRunning(true)}
        //   style={{ marginRight: '10px', padding: '10px', backgroundColor: '#4CAF50', color: '#fff' }}
        >
          Start
        </button>
        <button
          onClick={() => setIsRunning(false)}
        //   style={{ marginRight: '10px', padding: '10px', backgroundColor: '#FF5733', color: '#fff' }}
        >
          Pause
        </button>
        <button
          onClick={() => {
            setIsRunning(false);
            setIsBreak(false);
            setTimeLeft(2 * 60); // Reset to 25 minutes
          }}
        //   style={{ padding: '10px', backgroundColor: '#007BFF', color: '#fff' }}
        >
          Reset
        </button>
      </div>
      </div>
  );
}

export default Productivity;
