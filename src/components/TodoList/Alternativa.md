 #  <TodoList>
        {error && <p>Hubo un error...</p>}
        {loading && <Loading/>}
        {(!loading && !searchedTodos.length) && <EmptyTodos/> }
        
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

>Alternativa para las render props.

tenemos render props y funtion props.
