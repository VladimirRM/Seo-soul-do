// import React ,{useState} from 'react'
// import Header from './components/Header/Header'
// import TodoList from './components/TodoList/TodoList'
// import AddTodo from './components/AddTodo/AddTodo'
// import './App.css'

import { Container } from "react-bootstrap"



const App = () => {
  const [todo,setTodo] = useState([
    {
      id:1,
      title: 'first todo',
      status: true,

    },
    {
      id:2,
      title: 'second todo',
      status: true,

    },
    {
      id:3,
      title: 'third todo',
      status: false,

    },
  ])

  return (
    <Container>
     <Header/>
     <AddTodo setTodo={setTodo} todo={todo}/>
     <TodoList todo={todo} setTodo={setTodo}/>
    </Container>
  )
}

// export default App
