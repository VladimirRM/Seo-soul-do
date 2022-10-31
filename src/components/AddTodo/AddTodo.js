import React,{useState} from "react";
import TodoList from "../TodoList/TodoList";

const AddTodo = ({todo,setTodo}) => {
       const [value,setValue]=useState('')


      function saveTodo(){
        setTodo([
            ...todo,{
                id:4,
                title: value,
                status:true
            }
        ])
      }

  return <div>
    <input placeholder="Enter todo" value={value}
    onChange={(e)=> setValue(e.target.value)}/>
    <button onClick={saveTodo}>Save</button>
  </div>;
};

export default AddTodo;
