import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import PetCategory from "../../mock-constant/pet-category-constant.json";
import petList from "../../mock-constant/pet-category/pet-list-constant.json";
import { createPetDetails } from "../../../store/slices/AddPetSlice";
import petgender from "../../mock-constant/pet-gender-constant.json";
import petsize from "../../mock-constant/pet-size-contant.json";
import DropDownField from "../../common/DropDownField/DropDownField";
// eslint-disable-next-line
import { Navigate, useNavigate } from "react-router-dom";
import { loggedInUser } from "../../../store/slices/LoggedInUserDataSlice";

export default function AddPets() {
  const state = useSelector(state => state.loggedInUserDetails)
  const initialAddPetState = {
    userId: state._id,
    petname: "",
    petcategory: "Dogs",
    petimage: [],
    selectedPet: "",
    gender: "Male",
    age: "",
    size: "Large",
    about: "",
    adoptionFee: "",
    adoptedBy: "ttt",
  };
  const [addPet, setAddPet] = useState(initialAddPetState);
  const [displayImageName, setDisplayImageName] = useState();
  const [submitted, setSubmitted] = useState(false);
  const [files, setFiles] = useState([]);
  const navigate =useNavigate();

  const checkUser = async () => {
    dispatch(loggedInUser())
    .catch(() =>navigate("/home"))
  };

  async function postImage({ image, petId }) {
    const formData = new FormData();
    console.log(petId);
    formData.append("image", image);
    formData.append("petId", petId);
    await axios.post("/images", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  }
  //  image upload to state  function
  const handleImageChange = async (event) => {
    event.preventDefault();
    const fl = event.target.files[0]; // get the file
    setFiles([...files, fl]); // set the file
    // image thumbnail after upload
    console.log(files, "filessssssssss");
    // const result = await postImage({ image: file,description: "image sent" });
    // setAddPet({ ...addPet, petimage: [result.Key, ...addPet.petimage] });
  };
  const handleImageUpload = async (petId) => {
    for (let i = 0; i < files.length; i++) {
      console.log(files);
      await postImage({ image: files[i], petId: petId });
    }
  };
  const removeImage = (imageName) => {
    console.log(imageName);
    const items = files.filter((image) => image.name !== imageName);
    console.log(items);
    setFiles(items);
  };
  useEffect(() => {
    checkUser();
    let imageThumbnailName = files.map((image, index) => {
      return (
        <div tabIndex={0} key={image.name} style={{ display: "flex" }}>
          <li
            style={{ border: "1px solid red", margin: "10px" }}
            key={image.name}
          >
            {image.name}
          </li>
          <button onClick={() => removeImage(image.name)}>Button</button>
        </div>
      );
    });
    setDisplayImageName(imageThumbnailName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [files || displayImageName]);
  const dispatch = useDispatch();
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAddPet({ ...addPet, [name]: value });
    console.log(submitted, addPet);
  };
  const savePetDetail = async (event) => {
    event.preventDefault();
    setSubmitted(true);
    console.log(addPet);
    dispatch(createPetDetails(addPet))
    .then(data =>{
      console.log(data.payload.data._id);
      handleImageUpload(data.payload.data._id)
      .then(data =>{
        // navigate('/about')
      })
    })
  };
  return (
    <div>
    <Form style={{ width: "60%", margin: "20px 20%" }}>
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
          multiple
        />
      </Form.Group>
      <div>{displayImageName}</div>
      <Row className="mb-3">
        <DropDownField
          as={Col}
          category={petList}
          type={addPet.petcategory}
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
        <Form.Group style={{marginTop: "2rem",textAlign: "center"}} controlId="adoptionFee">
          <Button variant="primary" onClick={savePetDetail}>
            Submit
          </Button>
        </Form.Group>
      </Row>
    </Form>
    </div>
  );
}