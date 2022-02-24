import React from "react";
import {useLocalStorage} from './useLocalStorage'
const TodoContext =  React.createContext();

 function useTodos(){
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);

  const [searchValue, setSearchValue]= React.useState('');

  const [openModal, setOpenModal] = React.useState(false);
  // console.log(openModal);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  let searchedTodos =[];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } 
  else{
    //esto es super importante para generar buscadores!!!!!!!!!
    searchedTodos = todos.filter(todo =>{
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      // console.log(searchText);
      return todoText.includes(searchText);
    })
  }

  const addTodo =(text) =>{
    // investigar que es spread operator (...)
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
    });
    saveTodos(newTodos);
  }

  
  const completeTodo =(text) =>{
    const todoIndex = todos.findIndex(todo => todo.text ===text);
    // investigar que es spread operator (...)
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }
  const deleteTodo =(text) =>{
    const todoIndex = todos.findIndex(todo => todo.text ===text);
    // investigar que es spread operator (...)
    const newTodos = [...todos];
    // splice borra elementos de un array
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
  return{
      
    error,
    loading,
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
 export { useTodos };