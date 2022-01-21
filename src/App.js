import React,{ useState } from "react";
import "./index.css";
import { Modal } from "react-bootstrap"
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
  PetDetails,
  } from "./components/index";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleLoginClose = () => {
    setShowLogin(false)
  };
  const handleLoginShow = () => {
    setShowLogin(true)
  };

  const handleSignUpClose = () => {
    setShowSignUp(false)
  };
  const handleSignUpShow = () => {
    setShowSignUp(true)
  };
  return (
    <Router>
    <Header 
      handleLoginShow = {handleLoginShow}
      handleSignUpShow = {handleSignUpShow}
    />
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/petindetail" element={<PetDetails />} />
    </Routes>
      <Modal aria-labelledby="contained-modal-title-vcenter"
      centered show={showLogin} onHide={handleLoginClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Login
          handleLoginClose = {handleLoginClose}                  
        />
      </Modal>
      <Modal aria-labelledby="contained-modal-title-vcenter"
      centered show={showSignUp} onHide={handleSignUpClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <SignUp
          handleSignUpClose = {handleSignUpClose}                  
        />
      </Modal>
    <Footer />
  </Router>
  );
}

export default App;
