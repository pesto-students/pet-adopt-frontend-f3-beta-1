import { Tabs, Tab, Form, Button, Row } from "react-bootstrap";
import React from "react";

function DropDownField({ category, type }) {
  let list = category[type].map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  return (
    <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
      <Form.Label>Select {type}</Form.Label>
      <Form.Select aria-label="Select Category">{list}</Form.Select>
    </Form.Group>
  );
}

export default DropDownField;
