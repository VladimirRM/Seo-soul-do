import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Row, Col,Button , FormControl} from "react-bootstrap";

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
      <Col>
        < FormControl
          placeholder="Enter todo"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button variant="outline-secondary"onClick={saveTodo}>Save</Button>
      </Col>
    </Row>
  );
};

export default AddTodo;
