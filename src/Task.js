// src/Task.js

import React from 'react';

function Task({ task, onDelete, onUpdate }) {
  return (
    <div>
      <span>{task.title}</span>
      <button onClick={() => onUpdate(task.id)}>Edit</button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
}

export default Task;
