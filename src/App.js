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
  DisplayAllPets,
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

  const handleLoginSignUpToggle = () => {
    const shLogin = showLogin;
    const shSignUp = showSignUp;
    setShowLogin(!shLogin);
    setShowSignUp(!shSignUp);
  }

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
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/petindetail" element={<PetDetails />} />
      <Route path="/category/:category" element={<DisplayAllPets />} />
      
    </Routes>
      <Modal aria-labelledby="contained-modal-title-vcenter"
      centered show={showLogin} onHide={handleLoginClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Login
          handleLoginClose = {handleLoginClose}
          handleLoginSignUpToggle = {handleLoginSignUpToggle}
        />
        <Modal.Footer></Modal.Footer>
      </Modal>
      <Modal aria-labelledby="contained-modal-title-vcenter"
      centered show={showSignUp} onHide={handleSignUpClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <SignUp
          handleSignUpClose = {handleSignUpClose}
          handleLoginSignUpToggle = {handleLoginSignUpToggle}                  
        />
        <Modal.Footer></Modal.Footer>
      </Modal>
    <Footer />
  </Router>
  );
}

export default App;
