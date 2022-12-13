import React, { useState } from "react";

const AddTodo = () => {
  const [value, setValue] = useState("");

function saveTodo


  return (
    <div>
      <input
        type="text"
        placeholder="Enter something..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={saveTodo}>Save</button>
    </div>
  );
};

export default AddTodo;
