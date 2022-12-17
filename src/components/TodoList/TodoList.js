import React, { useState } from "react";

const TodoList = ({ todo, setTodo }) => {
  const [value, setValue] = useState("");
  const [edit, setEdit] = useState(null);

  function deleteTodo(id) {
    const newTodo = [...todo].filter((item) => item.id != id);
    setTodo(newTodo);
  }

  function statusTodo(id) {
    const newTodo = [...todo].filter((item) => {
      if (item.id === id) {
        item.status = !item.status;
      }
    });
  }

  function editTodo(id, title) {
    setEdit(id);
    setValue(title);
  }

  return (
    <div>
      {todo.map((item) => (
        <div key={item.id}>
          {edit == item.id ? (
            <div>
              <input value={value} />
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
              <button onClick={() => editTodo(item.id, item.title)}>
                Edit
              </button>
              <button onClick={() => statusTodo(item.id)}>Close/Open</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
