import React,{useState} from "react";


const TodoList = ({ todo, setTodo }) => {
  const [edit,setEdit]= useState(null)
  function deleteTodo(id) {
    let newTodo = [...todo].filter(item=> item.id!=id)
    setTodo(newTodo)
  }
  function statusTodo (id){
    let newTodo =[...todo].filter(item=>{
        if(item.id == id){
            item.status = !item.status
        }
        return item
    })
    setTodo(newTodo)
  }
    function editTodo(id){
       setEdit(true)    
    }

  return (
    <div>
      {todo.map((item) => (
        <div key={item.id}>
            {
            edit?
            <div>
            <input/>
            <button>Save</button>
             </div>
             :
             <div>
             {item.title}
            </div>
             }

          
          <button onClick={() => deleteTodo(item.id)}>Delete</button>
          <button onClick={() => editTodo(item.id)}>Edit</button>
          <button onClick={() => statusTodo(item.id)}>Close/Open</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
