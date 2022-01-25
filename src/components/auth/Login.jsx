import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { FetchLoginAuth } from "../../api/api.js";


function Login({handleLoginClose, handleLoginSignUpToggle}) {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...user, [name]: value });
  }

  async function handleLogin(e) {
    e.preventDefault();

    const { email, password } = user;

    const res = await FetchLoginAuth(email, password);
    console.log(res, "res");
    const data = res;
    console.log(data);

    if (data.status === 200) {
      window.alert("Login done...");
      navigate("/home");
      handleLoginClose();
    } else {
      window.alert("Login failed");
    }
  }

  return (
    <div style={{marginLeft:"2em", marginRight:"2em"}} className="login">
      
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Enter email"
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="formBasicCheckbox"
              ></Form.Group>
              <Button variant="primary" onClick={handleLogin}>
                Login
              </Button>{" "}
              <Button variant="link" onClick={handleLoginSignUpToggle}>
                Sign Up
              </Button>
            </Form>
    </div>
  );
}

export default Login;
