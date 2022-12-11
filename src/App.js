import React, { useState } from "react";
import Header from "./components/Header/Header";
import AddTodo from "./components/AddTodo/AddTodo";

const App = () => {
  return (
    <div>
      <Header />
      <AddTodo/>
    </div>
  );
};

export default App;
