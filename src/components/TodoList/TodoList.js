import React, { useState } from "react";
import { Row, Col, Button, FormControl } from "react-bootstrap";

const TodoList = ({ todo, setTodo }) => {
  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState("");

  function deleteTodo(id) {
    let newTodo = [...todo].filter((item) => item.id != id);
    setTodo(newTodo);
  }
  function statusTodo(id) {
    let newTodo = [...todo].filter((item) => {
      if (item.id == id) {
        item.status = !item.status;
      }
      return item;
    });
    setTodo(newTodo);
  }
  function editTodo(id, title) {
    setEdit(id);
    setValue(title);
  }

  function saveTodo(id) {
    let newTodo = [...todo].map((item) => {
      if (item.id == id) {
        item.title = value;
      }
      return item;
    });
    setTodo(newTodo);
    setEdit(null);
  }

  return (
    <div>
      {todo.map((item) => (
        <div key={item.id}>
          {edit == item.id ? (
            <div>
              <input value={value} onChange={(e) => setValue(e.target.value)} />
            </div>
          ) : (
            <div>{item.title}</div>
          )}
          {edit == item.id ? (
            <div>
              <Button className={s.btn}
                variant="outline-secondary"
                onClick={() => saveTodo(item.id)}
              >
                Save
              </Button>
            </div>
          ) : (
            <div>
              <Button
                variant="outline-secondary"
                onClick={() => deleteTodo(item.id)}
              >
                Delete
              </Button>
              <Button
                variant="outline-secondary"
                onClick={() => editTodo(item.id, item.title)}
              >
                Edit
              </Button>
              <Button
                variant="outline-secondary"
                onClick={() => statusTodo(item.id)}
              >
                Close/Open
              </Button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
