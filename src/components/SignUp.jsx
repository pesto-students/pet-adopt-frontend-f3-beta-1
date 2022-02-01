import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUpUser } from "../store/slices/UserDetailSlice";
import { useSelector, useDispatch } from "react-redux";
import { Button, Form } from "react-bootstrap";

function SignUp({handleSignUpClose, handleLoginSignUpToggle}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    password: "",
    cpassword: "",
  });

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  }

  const userDetails = useSelector((state) => state.userSignUp);

  async function handlePost(e) {
    e.preventDefault();
    const { name, email, phone, location, password, cpassword } = user;
    if (password === cpassword) {
      const res = dispatch(
        signUpUser({ name, email, phone, location, password, cpassword })
      );

      res.then((data) => {
        console.log(data.payload, "signup.jsx");
        if (data.payload === 201) {
          window.alert("Registration Successful!!");
          console.log(data, userDetails, "userDetails");
          handleSignUpClose();
        } else {
          console.log(data, userDetails, "userDetails");
          window.alert("Registeration failed");
        }
        navigate("/home");
      });
    }
    // console.log(data);
  }

  return (
    <div style={{marginLeft:"3rem", marginRight:"3rem", marginBottom:"1rem"}} className="signup">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            value={user.name}
            onChange={handleChange}
            type="text"
            placeholder="Enter name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            value={user.email}
            onChange={handleChange}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            value={user.password}
            onChange={handleChange}
            type="password"
            placeholder="Enter password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            name="cpassword"
            value={user.cpassword}
            onChange={handleChange}
            type="password"
            placeholder="Confirm password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            name="phone"
            value={user.phone}
            onChange={handleChange}
            type="text"
            placeholder="Enter phone"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Location</Form.Label>
          <Form.Control
            name="location"
            value={user.location}
            onChange={handleChange}
            type="text"
            placeholder="Enter you location"
          />
        </Form.Group>
        <Button variant="primary" onClick={handlePost}>
          Sign Up
        </Button>{" "}
        <Button variant="link" onClick={handleLoginSignUpToggle}>
          Login
        </Button>
      </Form>
      {/* <form method="post" className="form">
        <div className="form">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </div>
        <div className="form">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div className="form">
          <label htmlFor="email">Password:</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <div className="form">
          <label htmlFor="email">Confirm Password:</label>
          <input
            type="password"
            name="cpassword"
            value={user.cpassword}
            onChange={handleChange}
          />
        </div>
        <div className="form">
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            name="phone"
            value={user.phone}
            onChange={handleChange}
          />
        </div>
        <div className="form">
          <label htmlFor="work">Location:</label>
          <input
            type="text"
            name="location"
            value={user.location}
            onChange={handleChange}
          />
        </div>
        <div className="form">
          <input
            type="submit"
            name="signup"
            value="Register"
            onClick={handlePost}
          />
        </div>
        <div className="form">
          <input
            type="button"
            name="login"
            value="Login"
            onClick={handleLoginSignUpToggle}
          />
        </div>
      </form>          */}
    </div>
  );
}
export default SignUp;
