import React, { useState } from "react";

function AddTodo({ todo, setTodo }) {
  const [value, setValue] = useState("");

  function saveTodo() {
    setTodo([
      ...todo,
      {
        id: Math.random(),
        title: value,
        status: true,
      },
    ]);
    setValue("");
  }

  return (
    <div>
      <input
        placeholder="Enter something"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={saveTodo}>Save</button>
    </div>
  );
}

export default AddTodo;
