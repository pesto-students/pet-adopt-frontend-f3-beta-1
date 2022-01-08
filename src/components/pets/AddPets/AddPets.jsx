import React, { useState } from "react";
import axios from "axios";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import PetCategory from "../../mock-constant/pet-category-constant.json";
import dogs from "../../mock-constant/pet-category/dog-constant.json";
//import cats from "../../mock-constant/pet-category/cats-constant.json";
import { createPetDetails } from "../../../store/slices/AddPetSlice";
import petgender from "../../mock-constant/pet-gender-constant.json";
import petsize from "../../mock-constant/pet-size-contant.json";
import DropDownField from "../../common/DropDownField/DropDownField";
import SearchLocation from "../../common/SearchLocation/SearchLocation";

async function postImage({ image, description }) {
  const formData = new FormData();
  formData.append("image", image);
  formData.append("description", description);

  const result = await axios.post("/images", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  console.log(result.data.Location);
  return result.data;
}
export default function AddPets() {
  const initialAddPetState = {
    petname: "",
    petcategory: "Dogs",
    petimage: [],
    selectedPet: "",
    gender: "Male",
    age: "",
    size: "Large",
    about: "",
    searchlocation: "",
    adoptionFee: "",
  };
  const [addPet, setAddPet] = useState(initialAddPetState);
  const [submitted, setSubmitted] = useState(false);

  //  image upload function
  const [file, setFile] = useState();


  const handleImageChange = (event) => {
    event.preventDefault();
    const file = event.target.files[0]; // get the file
    setFile(file); // set the file
  };

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAddPet({ ...addPet, [name]: value });
    console.log(submitted, addPet);
  };

  const onPlaceSelected = (place) => {
    setAddPet({ ...addPet, searchlocation: place.formatted_address });
  };

  const savePetDetail = async (event) => {
    event.preventDefault();
    setSubmitted(true);
    const result = await postImage({ image: file,description: "image sent" });    
    setAddPet({ ...addPet, petimage: [result.Location, ...addPet.petimage] });
    console.log(addPet);
    // dispatch(createPetDetails(addPet))
    //   .unwrap()
    //   .then((data) => console.log(data, "data"));
    // console.log(submitted, addPet);
  };

  return (
    <Form style={{ width: "60%", margin: "0 20%" }}>
      <h2 style={{ textAlign: "center" }}>Add Pet Details</h2>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formName">
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
          as={Col}
          category={PetCategory}
          type="Pet Category"
          name="petcategory"
          onChange={handleInputChange}
        />
      </Row>

      <Form.Group className="mb-3" controlId="upload image">
        <Form.Label>Upload Pet Image</Form.Label>
        <Form.Control
          type="file"
          name="petimage"
          placeholder="Enter Pet Name"
          accept="image/*"
          onChange={handleImageChange}
          required
        />
      </Form.Group>
      <Row className="mb-3">
        <DropDownField
          as={Col}
          category={dogs}
          type="Dogs"
          name="selectedPet"
          onChange={handleInputChange}
          required
        />
        <DropDownField
          as={Col}
          category={petgender}
          type="Gender"
          name="gender"
          onChange={handleInputChange}
        />
        <Form.Group as={Col} controlId="form age">
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
          as={Col}
          category={petsize}
          type="Size"
          name="size"
          onChange={handleInputChange}
        />
      </Row>
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
      <Row className="mb-4">
        {/* <SearchLocation
          as={Col}
          name="searchlocation"
          style={{
            display: "block",
            padding: " 0.375rem 0.75rem",
            fontSize: " 1rem",
            fontWeight: " 400",
            lineHeight: " 1.5",
            color: " #212529",
            backgroundColor: " #fff",
            backgroundClip: " padding-box",
            border: " 1px solid #ced4da",
            appearance: " none",
            borderRadius: " 0.25rem",
            transition:
              " border-color .15s ease-in-out,box-shadow .15s ease-in-out",
          }}
          onChange={handleInputChange}
          onPlaceSelected={onPlaceSelected}
          onSelect={handleInputChange}
          types={["(regions)"]}
          componentRestrictions={{ country: "in" }}
          required
        /> */}
        <Form.Group as={Col} controlId="adoptionFee">
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
        <Form.Group as={Col} controlId="adoptionFee">
          <Button variant="primary" onClick={savePetDetail}>
            Submit
          </Button>
        </Form.Group>
      </Row>
    </Form>
  );
}
