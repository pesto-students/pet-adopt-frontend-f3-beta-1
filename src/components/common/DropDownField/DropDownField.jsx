import { Form } from "react-bootstrap";
import React from "react";

function DropDownField({ category, type, onChange, name, as, required }) {
  let list = category[type].map((item, index) => (
    <option key={item} value={item}>
      {item}
    </option>
  ));
  return (
    <Form.Group as={as} controlId={`form ${type}`}>
      <Form.Label>Select {type}</Form.Label>
      <Form.Select
        aria-label={`Select Category ${type}`}
        onChange={onChange}
        required
        name={name}
      >
        {list}
      </Form.Select>
    </Form.Group>
  );
}

export default DropDownField;
