import React,{ useState } from "react";
import "./index.css";
import { Modal, Button } from "react-bootstrap"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {  
  Header,
  Footer,
  Home,
  Login,
  Logout,
  SignUp,
  About,
  Contact,
  } from "./components/index";

function App() {
  const [show, setShow] = useState(false);

  const handleLoginClose = () => {
    setShow(false)
  };
  const handleLoginShow = () => {
    console.log("show: "+ show);
    setShow(true)
  };
  return (
    <Router>
    <Header 
      handleLoginShow = {handleLoginShow}
    />
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      {/* <Route path="/login" element={<Login />} /> */}
      <Route path="/logout" element={<Logout />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
    <Button variant="primary" onClick={handleLoginShow}>
        Login
      </Button>

      <Modal aria-labelledby="contained-modal-title-vcenter"
      centered show={show} onHide={handleLoginClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Login
          handleLoginClose = {handleLoginClose}                  
        />
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    <Footer />
  </Router>
  );
}

export default App;
