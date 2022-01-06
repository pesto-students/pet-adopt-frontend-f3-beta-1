import React from "react";
import { Form } from "react-bootstrap";
import PetCategory from "../../mock-constant/pet-category-constant.json";
import dogs from "../../mock-constant/pet-category/dog-constant.json";
import petgender from "../../mock-constant/pet-gender-constant.json";
import petsize from "../../mock-constant/pet-size-contant.json";
import DropDownField from "../../common/DropDownField/DropDownField";
import SearchLocation from "../../common/SearchLocation/SearchLocation";

export default function AddPets() {
  const initialAddPetState = {
    petname: null,
    title: "",
    description: "",
    published: false,
  };
  const handleInputChange = (event) => {
    console.log(event.target.value);
    const { name, value } = event.target;
    //setCurrentTutorial({ ...initialAddPetState, [name]: value });
  };
  return (
    <Form>
      <h2>Add Pet Details</h2>
      <Form.Group className="mb-2" controlId="formName">
        <Form.Label>Enter Pet Name</Form.Label>
        <Form.Control
          type="text"
          name="petname"
          placeholder="Enter Pet Name"
          onChange={handleInputChange}
          required
        />
      </Form.Group>

      <DropDownField
        category={PetCategory}
        type="Pet Category"
        name="petcategory"
        onChange={handleInputChange}
      />
      <Form.Group className="mb-2" controlId="upload image">
        <Form.Label>Upload Pet Image</Form.Label>
        <Form.Control
          type="file"
          name="petimage"
          placeholder="Enter Pet Name"
          accept="image/*"
          onChange={handleInputChange}
          required
        />
      </Form.Group>

      <DropDownField
        category={dogs}
        type="Dogs"
        name="selectedPet"
        onChange={handleInputChange}
        required
      />
      <DropDownField
        category={petgender}
        type="Gender"
        name="gender"
        onChange={handleInputChange}
      />
      <Form.Group className="mb-2" controlId="form age">
        <Form.Label>Age</Form.Label>
        <Form.Control
          onChange={handleInputChange}
          type="number"
          name="age"
          placeholder="Age"
          required
          min={0}
          max={20}
        />
      </Form.Group>
      <DropDownField
        category={petsize}
        type="Size"
        name="size"
        onChange={handleInputChange}
      />
      <Form.Group className="mb-3" controlId="form about">
        <Form.Label>About</Form.Label>
        <Form.Control
          as="textarea"
          rows={6}
          name="about"
          onChange={handleInputChange}
          required
        />
      </Form.Group>
      <SearchLocation
        name="searchlocation"
        style={{ width: "40%" }}
        onChange={handleInputChange}
        onPlaceSelected={(place) => {
          console.log({ searchlocation: place.formatted_address });
        }}
        types={["(regions)"]}
        componentrestrictions={{ country: "in" }}
        required
      />
      <Form.Group className="mb-3" controlId="adoptionFee">
        <Form.Label>Adoption Fee</Form.Label>
        <Form.Control
          name="adoptionFee"
          type="number"
          placeholder="Adoption Fee"
          onChange={handleInputChange}
          required
          min={0}
          max={2000}
        />
      </Form.Group>
    </Form>
  );
}
