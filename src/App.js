import React, { useState } from "react";

import "./App.css";
import AddTodo from "./components/AddTodo/AddTodo";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "first todo",
      status:true
    },
  ]);

  return (
    <div className="App">
      <Header />
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
