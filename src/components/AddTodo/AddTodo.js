import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Row, Col,Button , FormControl} from "react-bootstrap";
import s from "../AddTodo/AddTodo.module.css"

const AddTodo = ({ todo, setTodo }) => {
  const [value, setValue] = useState("");

  function saveTodo() {
    setTodo([
      ...todo,
      {
        id: uuidv4(),
        title: value,
        status: true,
      },
    ]);
    setValue("");
  }

  return (
    <Row>
      <Col className={s.addTodoForm}>
        < FormControl variant="outline-secondary"
          placeholder="Enter todo"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button variant="outline-secondary"onClick={saveTodo} className={s.btn}>Save</Button>
      </Col>
    </Row>
  );
};

export default AddTodo;
