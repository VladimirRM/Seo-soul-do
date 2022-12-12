import React from 'react'

const TodoList = ({todo,setTodo}) => {
function deleteTodo(){
  
}


  return (
    <div>
      {
        todo.map(item=>(
          <div key={item.id}>
          <div>{item.title}</div>
          <button onClick={()=>deleteTodo(item.id)}></button>
          </div>
        ))
      }
    </div>
  )
}

export default TodoList
