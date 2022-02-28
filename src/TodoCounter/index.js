import React from 'react';
import './TodoCounter.css';

function TodoCounter({totalTodos, completedTodos, loading}) {
  return (
    <h2 className={`TodoCounter ${!!loading && "TodoCounter--loaging"}`}>Has completado {completedTodos} de {totalTodos} Tareas</h2>
  );
}

export { TodoCounter };
