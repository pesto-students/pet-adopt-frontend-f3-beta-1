import React from "react";
import { Form } from "react-bootstrap";
import Autocomplete from "react-google-autocomplete";

function SearchLocation({
  style,
  onPlaceSelected,
  types,
  componentrestrictions,
  required,
  onChange,
}) {
  return (
    <>
      <Form.Group className="mb-3" controlId="searchLocation">
      <Form.Label>Search Location</Form.Label>
      <Autocomplete
        style={style}
        onPlaceSelected={onPlaceSelected}
        types={types}
        componentrestrictions={componentrestrictions}
        onChange={onChange}
        required
        />
      </Form.Group>
    </>
  );
}

export default SearchLocation;
