import { Form } from "react-bootstrap";
import React from "react";

function DropDownField({ category, type, onChange, name }) {
  let list = category[type].map((item, index) => (
    <option key={item} value={item}>
      {item}
    </option>
  ));
  return (
    <Form.Group className="mb-2" controlId={`form ${type}`}>
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
