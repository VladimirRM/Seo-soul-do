import React, { useState } from "react";

const TodoList = ({ todo, setTodo }) => {
  const [edit, setEdit] = useState(null);
  function deleteTodo(id) {
    let newTodo = [...todo].filter((item) => item.id != id);
    setTodo(newTodo);
  }
  function statusTodo(id) {
    let newTodo = [...todo].filter((item) => {
      if (item.id == id) {
        item.status = !item.status;
      }
      return item;
    });
    setTodo(newTodo);
  }
  function editTodo(id) {
    setEdit(id);
  }

  return (
    <div>
      {todo.map((item) => (
        <div key={item.id}>
          {edit == item.id ? (
            <div>
              <input />
            </div>
          ) : (
            <div>{item.title}</div>
          )}
          {edit == item.id ? (
            <div>
              <button>Save</button>
            </div>
          ) : (
            <div>
              <button onClick={() => deleteTodo(item.id)}>Delete</button>
              <button onClick={() => editTodo(item.id)}>Edit</button>
              <button onClick={() => statusTodo(item.id)}>Close/Open</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
