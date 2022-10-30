import React from "react";

const TodoList = ({ todo, setTodo }) => {
  function deleteTodo(id) {
    let newTodo = [...todo].filter(item=> item.id!=id)
    setTodo(newTodo)
  }

  return (
    <div>
      {todo.map((item) => (
        <div key={item.id}>
          <div>{item.title}</div>
          <button onClick={() => deleteTodo(item.id)}>Delete</button>
          <button onClick={() => deleteTodo(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
