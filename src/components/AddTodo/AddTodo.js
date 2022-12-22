import React, { useState } from "react";
import { Row, Col, Button, FormControl } from "react-bootstrap";

const AddTodo = ({ todo, setTodo }) => {
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
    <Row>
      <Col>
        <FormControl
          type="text"
          value={value}
          placeholder="Enter something..."
          onChange={(e) => setValue(e.target.value)}
        />
        <Button variant="secondary" onClick={saveTodo}>
          Add
        </Button>
      </Col>
    </Row>
  );
};

export default AddTodo;
