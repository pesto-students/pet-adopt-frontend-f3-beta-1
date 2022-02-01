import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { login } from "../../store/slices/LoggedInUserDataSlice";


function Login({handleLoginClose, handleLoginSignUpToggle, setAuth}) {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });
  const dispatch = useDispatch();

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...user, [name]: value });
  }

  async function handleLogin(e) {
    e.preventDefault();

    const { email, password } = user;

    dispatch(login({email, password}))
    .then((data) => {
      handleLoginClose();
      navigate('/home')
    })

    // const res = await FetchLoginAuth(email, password);
    // console.log(res, "res");
    // const data = res;
    // console.log(data);

    // if (data.status === 200) {
    //   handleLoginClose();
    //   window.alert("Login done...");
    //   setAuth(true)
    //   navigate("/home");
    // } else {
    //   window.alert("Login failed");
    // }
  }

  return (
    <div style={{marginLeft:"3rem", marginRight:"3rem", marginBottom:"1rem"}} className="login">      
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
              <Button type="submit" variant="primary" onClick={handleLogin}>
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
