import React, { useState, useEffect } from 'react';
import './Productivity.css'


function Productivity() {
  const [taskInput, setTaskInput] = useState(""); 
  const [tasks, setTasks] = useState([]); 

  const [timeLeft, setTimeLeft] = useState(25 * 60); 
  const [isRunning, setIsRunning] = useState(false); 
  const [isBreak, setIsBreak] = useState(false);

  
  const addItem = (event) => {
    event.preventDefault();
    if (taskInput.trim() === "") return;
    setTasks([...tasks, { id: `item-${Date.now()}`, text: taskInput }]);
    setTaskInput("");
  };

  
  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime === 0) {
            clearInterval(timer);
            setIsRunning(false);
            setIsBreak(!isBreak); 
            setTimeLeft(isBreak ? 25 * 60 : 5 * 60); 
          
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, isBreak]);

  
    const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <div className="list">

      
      <h3 id="to-do">To-do List</h3>
      <form onSubmit={addItem}>
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
        >
          Start
        </button>
        <button
          onClick={() => setIsRunning(false)}
        >
          Pause
        </button>
        <button
          onClick={() => {
            setIsRunning(false);
            setIsBreak(false);
            setTimeLeft(25 * 60);
          }}
        >
          Reset
        </button>
      </div>
      </div>
  );
}

export default Productivity;
