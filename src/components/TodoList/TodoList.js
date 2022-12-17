import React from "react";

const TodoList = ({ todo, setTodo }) => {
  function deleteTodo(id) {
    let newTodo = [...todo].filter((item) => item.id !== id);
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
     function editTodo(id){
         
     }

  return (
    <div>
      {todo.map((item) => (
        <div key={item.id}>
          {edit ? 
          <div>
          <input type="text"/>
          <button>Save</button>
          </div>:
          
          
        }
          <div>{item.title}</div>
          <button onClick={() => deleteTodo(item.id)}>Delete</button>
          <button onClick={() => editTodo(item.id)}>Edit</button>
          <button onClick={() => statusTodo(item.id)}>Open/Close</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
