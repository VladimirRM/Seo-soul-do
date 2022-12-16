import React, { useState } from "react";

const TodoList = ({ todo, setTodo }) => {
  const [edit, setEdit] = useState();
  function deleteTodo(id) {
    let newTodo = [...todo].filter((item) => item.id != id);
    setTodo(newTodo);
  }

  function statusTodo(id) {
    let newTodo = [...todo].filter((item) => {
      if (item.id === id) {
        item.status = !item.status;
      }
      return item;
    });
    setTodo(newTodo);
  }

  function editTodo(id) {}

  return (
    <div>
      {todo.map((item) => (
        <div key={item.id}>
          <div>{item.title}</div>
          <button onClick={() => statusTodo(item.id)}>Delete</button>
          <button onClick={() => editTodo(item.id)}>Edit</button>
          <button onClick={() => deleteTodo(item.id)}>Open/Close</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
