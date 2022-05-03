import React from "react";
import './TodoList.css';

function TodoList(props) {

  const propsFuntion = props.render || props.childen;

  return (
    <section>    
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}
      
      {props.searchedTodos.map(propsFuntion)}
      
      {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptyResults()}
      
      <ul>
        { props.children }
      </ul>
    </section>
  );
};


export { TodoList };