import React from "react";
import { Form } from "react-bootstrap";
import Autocomplete from "react-google-autocomplete";

function SearchLocation({
  style,
  onPlaceSelected,
  types,
  componentRestrictions,
  required,
  onChange,
  name,
  as
}) {
  return (
    <>
      <Form.Group as={as} controlId="searchLocation">
        <Form.Label>Search Location</Form.Label>
        <Autocomplete
          name={name}
          style={style}
          onPlaceSelected={onPlaceSelected}
          types={types}
          componentRestrictions={componentRestrictions}
          onChange={onChange}
          required
          tabIndex={0}
        />
      </Form.Group>
    </>
  );
}

export default SearchLocation;
