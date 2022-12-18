import React, { useState } from "react";

const AddTodo = ({ todo, setTodo }) => {
  const [value, setValue] = useState("");
  function saveTodo() {
    setTodo([...todo], {
      id: Math.random(),
      title: value,
      status: true,
    });
  }

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue((e) => setValue(e.target.value))}
        placeholder="Enter something..."
      />
      <button onClick={saveTodo}>Save</button>
    </div>
  );
};

export default AddTodo;
