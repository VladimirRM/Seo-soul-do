import React,{useState} from 'react'

const AddTodo = () => {
const [value,setValue] = useState('')

  return (
    <div>
      <input type="text"
      value={value}
      placeholder='Enter something...'
      onChange={(e)=>setValue(e.target.value)} />
      <button onClick={saveTodo}></button>
    </div>
  )
}

export default AddTodo