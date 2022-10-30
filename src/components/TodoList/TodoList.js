import React from 'react'

const TodoList = ({todo,setTodo}) => {

function deleteTodo  (){
console.log("delete");
}

  return (
    <div>
        {
            todo.map(item=>(
                <div key={item.id}>
                <div>{item.title}</div>
                <button onClick={()=>deleteTodo(note.id)}>Delete</button>
                </div>
            ))
        }
    </div>
  )
}

export default TodoList
