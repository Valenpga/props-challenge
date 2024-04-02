
import React from 'react';

function Task({ task, deleteTask, toggleComplete }) {
  const handleDelete = () => {
    deleteTask(task.id);
  };

  const handleToggleComplete = () => {
    toggleComplete(task.id);
  };

  return (
    <li
      style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
      onClick={handleToggleComplete}
    >
      {task.text}
      <button onClick={handleDelete}>Eliminar</button>
    </li>
  );
}

export default Task;
