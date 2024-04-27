import React, { Fragment} from 'react';
import { useTodos } from './useTodos';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoForm } from '../TodoForm/TodoForm';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { Modal } from '../Modal/Modal';
import { Loading } from '../Loading/Loading';
import { Footer } from '../Footer/Footer';
import { TodoHeader } from '../TodoHeader/TodoHeader';
import { Error } from '../Error/Error';
import { EmptyTodos } from '../EmptyTodos/EmptyTodos';


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
    addTodo,

  } = useTodos();


  return (
    <Fragment>
      <TodoHeader loading={loading}>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
          
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          
        />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchValue = {searchValue}
        
        onError={() => <Error />}
        onLoading={() => <Loading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptyResults={() => <p> No hay resultado para { searchValue}</p> }

        render={todo => (
          
          <TodoItem
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
          onComplete={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
          />
        )}
      
      />

      {
        !!openModal && (
        <Modal>
          <TodoForm
            addTodo={addTodo}
            setOpenModal = {setOpenModal}
          />
        </Modal>
        )
      }

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
      
      <Footer/>
    </Fragment>
  );
}

export default App;

