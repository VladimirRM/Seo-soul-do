import React from "react";

const TodoList = ({ todo, setTodo }) => {



  
  return (
    <div>
      {
        <div key={item.id}>
          <div>{item.title}</div>
          <button onClick={() => deleteTodo(item.id)}>Delete</button>
        </div>
      }
    </div>
  );
};

export default TodoList;
