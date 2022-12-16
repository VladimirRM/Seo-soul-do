import React, { useState } from "react";
import TodoList from "./components/TodoList/TodoList";
import AddTodo from "./components/AddTodo/AddTodo";
import Header from "./components/Header/Header";
import "./index.css";
import "./App.css";

const App = () => {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "first todo",
      status: true,
    },
    {
      id: 2,
      title: "second todo",
      status: true,
    },
    {
      id: 3,
      title: "third todo",
      status: true,
    },
  ]);

  return (
    <div>
      <Header />
      <AddTodo todo={todo} setTodo={setTodo} />
      <TodoList todo={todo} setTodo={setTodo} />
    </div>
  );
};

export default App;
