import React, { useState } from "react";

const AddTodo = ({ todo, setTodo }) => {
  const [value, setValue] = useState("");

  function saveTodo(id) {
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
        type="text"
        value={value}
        placeholder="Enter something..."
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => saveTodo()}>Add</button>
    </div>
  );
};

export default AddTodo;
