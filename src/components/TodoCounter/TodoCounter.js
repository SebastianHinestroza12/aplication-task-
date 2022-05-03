import React from 'react';
import './TodoCounter.css';
import { FcTodoList } from "react-icons/fc";

function TodoCounter({totalTodos,completedTodos,loading}) {
  
  return (
    <h2 className={`TodoCounter ${loading && 'TodoCounter--loading'}`}>Has completado {completedTodos} de {totalTodos} Tareas <FcTodoList/> </h2>
  );
}

export { TodoCounter };