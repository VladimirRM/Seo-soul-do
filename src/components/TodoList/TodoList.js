import React, { useState } from "react";

const TodoList = ({ todo, setTodo }) => {
const [edit,setEdit]=useState(null)
const [value,setValue]=useState('')


  function deleteTodo(id) {
    const newTodo = [...todo].filter((item) => item.id !== id);
    setTodo(newTodo);
  }

  function statusTodo(id) {
    const newTodo = [...todo].filter((item) => {
      if (item.id === id) {
        item.status = !item.status;
      }
      return item;
    });
    setTodo(newTodo)
  }

  return (
    <div>
      {todo.map((item) => (
        <div key={item.id}>
          {
              edit===item.id ?
              <div>
                <input type="text" 
                value={value}
                onChange={(e)=>setValue(e.target.value)}/>
                <button onClick={saveTodo(item.id)}>Save</button>
              </div>

          }
          <div>{item.title}</div>
          <button onClick={() => deleteTodo(item.id)}>Delete</button>
          <button onClick={() => deleteTodo(item.id,item.title)}>Edit</button>
          <button onClick={() => statusTodo(item.id)}>Open/Close</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
