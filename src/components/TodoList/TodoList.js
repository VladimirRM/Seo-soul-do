import React from "react";

const TodoList = ({todo,setTodo}) => {
   function deleteTodo (id){
    
   }


  return (
    <div>
      {todo.map((item) => (
        <div key={item.id}>
          <div>{item.title}</div>
          <button onClick={() => deleteTodo(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
