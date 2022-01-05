import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {Button,Form} from 'react-bootstrap';
import FetchLoginAuth from '../../api/api.js'

function Login() {
    const navigate = useNavigate();
    const [user,setUser] = useState({email: '', password:''});

    function handleChange(e){
        const name = e.target.name;
        const value = e.target.value;

        setUser({...user, [name]:value});
    }

    async function handleLogin(e){
        e.preventDefault();

        const {email, password} = user;

        const res = await FetchLoginAuth(email, password);

        const data = await res.json();
        console.log(data);

        if(data.message === 'User logged in successfully'){
          window.alert("Login done...");
          navigate("/home")
        }
        else{
            window.alert("Login failed");
        }
    }

    return (
    <div className="login">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">Login</h1>
        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control name='email' value={user.email} onChange={handleChange} type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control name='password' value={user.password} onChange={handleChange} type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
  </Form.Group>
  <Button variant="primary" onClick={handleLogin}>Login</Button>{' '}
  <Button variant="primary" onClick={() => navigate("/signup")}>Sign Up</Button>
</Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
