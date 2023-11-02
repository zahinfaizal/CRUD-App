// src/App.js

import React, { useState } from 'react';
import Task from './Task';
import './App.css'; // Import the CSS file

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editingTask, setEditingTask] = useState(null);

  const addTask = () => {
    setTasks([...tasks, { id: Date.now(), title: newTask }]);
    setNewTask('');
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const updateTask = (taskId) => {
    const taskToUpdate = tasks.find((task) => task.id === taskId);
    if (taskToUpdate) {
      setEditingTask(taskToUpdate);
      setNewTask(taskToUpdate.title);
    }
  };

  const saveTask = () => {
    if (editingTask) {
      setTasks(tasks.map((task) => (task.id === editingTask.id ? { ...task, title: newTask } : task)));
      setEditingTask(null);
    }
  };

  return (
    <div className="container">
    <h1>Task Manager</h1>
    <div className="input-container">
      <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
      {editingTask ? (
        <button className="edit-button" onClick={saveTask}>Save</button>
      ) : (
        <button className="add-button" onClick={addTask}>Add Task</button>
      )}
    </div>
    <div>
      {tasks.map((task) => (
        <div className="task" key={task.id}>
          <span>{task.title}</span>
          <button className="edit-button" onClick={() => updateTask(task.id)}>Edit</button>
          <button className="delete-button" onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  </div>
  
  );
}

export default App;
