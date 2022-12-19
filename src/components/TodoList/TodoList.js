import React,{useState} from 'react'

const TodoList = ({todo,setTodo}) => {

const [edit,setEdit]=useState(null)
const [value,setValue]= useState('')

  return (
    <div>
         {todo.map((item)=>(
          <div key={item.id}>
            <div>{item.title}</div>
            <button>Delete</button>
          </div>
         ))}
    </div>
  )
}

export default TodoList