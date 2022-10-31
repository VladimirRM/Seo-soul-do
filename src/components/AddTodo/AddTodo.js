import React,{useState} from "react";

const AddTodo = () => {
       const [value,setValue]=useState()


      function saveTodo(){

      }

  return <div>
    <input placeholder="Enter todo"/>
    <button onClick={saveTodo}>Save</button>
  </div>;
};

export default AddTodo;
