import React ,{useState} from 'react'
import Header from './components/Header/Header'
import TodoList from './components/TodoList/TodoList'
import AddTodo from './components/AddTodo/AddTodo'
import './App.css'
import Header from './components/Header/Header'

const App = () => {
  const [todo,setTodo] = useState([])

  return (
    <div>
     <Header/>
     <TodoList/>
     <AddTodo/>      
    </div>
  )
}

export default App
