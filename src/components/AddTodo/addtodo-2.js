// import React,{useState} from 'react'

const AddTodo = ({todo,setTodo}) => {
   const [value,setValue]= useState('')
   console.log(value);
  function saveTodo(){
      setTodo([...todo,{
        id:Math.random(),
        title: value,
        status:true,
      }])
      setValue('')
  }
  return (
    <div>
      <input type="text"
      placeholder='Enter something...'
      value={value}
      onChange={(e)=>setValue(e.target.value)} />
      <button onClick={saveTodo}>Save</button>
    </div>
  )
}

// export default AddTodo
