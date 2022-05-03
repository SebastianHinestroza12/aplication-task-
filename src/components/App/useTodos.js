import { useState} from 'react';
import { useLocalStorage } from './useLocalStorage';


function useTodos() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);

  const [searchValue, setSearchValue] = useState('');
  const [openModal, setOpenModal] = useState(false);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
    });
    saveTodos(newTodos);
  };
  // Completar Tarea
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };
    // Eliminar Tarea
  /**
   * Toma un argumento de texto, encuentra el índice de la tarea pendiente con ese texto, crea una
   * nueva matriz con todas las tareas pendientes, elimina la tarea pendiente en el índice y guarda la
   * nueva matriz.
   * @param text - El texto de la tarea a eliminar
   */
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
  
  return {
      loading,
      error,
      totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      addTodo,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,
    }
};

export { useTodos};