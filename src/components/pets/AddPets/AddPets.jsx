import React from "react";
import { Tabs, Tab, Form, Button, Row } from "react-bootstrap";
import PetCategory from "../../mock-constant/pet-category-constant.json";
import dogs from "../../mock-constant/pet-category/dog-constant.json";
import petgender from "../../mock-constant/pet-gender-constant.json";
import petsize from '../../mock-constant/pet-size-contant.json'
import DropDownField from "../../common/DropDownField/DropDownField";
import SearchLocation from "../../common/SearchLocation/SearchLocation";

export default function AddPets() {
  return (
    <Form>
      <h2>Add Pet Details</h2>
      <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
        <Form.Label>Enter Pet Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Pet Name" required />
      </Form.Group>
      <DropDownField category={PetCategory} type="Pet Category" />
      <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
        <Form.Label>Upload Pet Image</Form.Label>
        <Form.Control
          type="file"
          placeholder="Enter Pet Name"
          accept="image/*"
          required
        />
      </Form.Group>
      <DropDownField category={dogs} type="Dogs" required />
      <DropDownField category={petgender} type="Gender" />
      <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
        <Form.Label>Age</Form.Label>
        <Form.Control type="number" placeholder="Age" required max={20} />
      </Form.Group>
      <DropDownField category={petsize} type="Size" />
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>About</Form.Label>
        <Form.Control as="textarea" rows={6} required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Search Location</Form.Label>
        <SearchLocation
          style={{ width: "40%" }}
          onPlaceSelected={(place) => {
            console.log(place);
          }}
          types={["(regions)"]}
          componentRestrictions={{ country: "in" }}
          required
        />
      </Form.Group>
    </Form>
  );
}
