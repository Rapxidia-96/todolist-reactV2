import React from 'react';
import {useTodos} from'./useTodos';
import { TodoContext } from './useTodos';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import {TodoForm} from'../TodoForm';
import {LoaderPage} from '../LoaderPage';
import { TodoHeader } from '../TodoHeader';



function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo
    } = useTodos();
    return(
      <React.Fragment>
          <TodoHeader>
              <TodoCounter
              totalTodos ={totalTodos} 
              completedTodos ={completedTodos} 
              />
              <TodoSearch
                  searchValue= {searchValue}
                  setSearchValue={setSearchValue}
              />
          </TodoHeader>
          
          <TodoList>
              {error && <p>Desespérate, hubo un error...</p>}
              {loading && <LoaderPage/>}
              {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}
              
              {searchedTodos.map(todo => (
              <TodoItem
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={() => completeTodo(todo.text)}
                  onDelete={() => deleteTodo(todo.text)}
              />
              ))}
          </TodoList>
          {!!openModal &&(
              <Modal>
                  <TodoForm
                    addTodo ={addTodo}
                    setOpenModal ={setOpenModal}
                  />
              </Modal>
          )}
              
          <CreateTodoButton 
              setOpenModal= {setOpenModal}
          />
      </React.Fragment>
   );
}

export default App;
