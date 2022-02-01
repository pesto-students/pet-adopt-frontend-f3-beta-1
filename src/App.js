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
  MyPets,
  AddPet,
  PetDetails,
  DisplayAllPets,
  MyRequests,
  MyAccount,
  } from "./components/index";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [auth,setAuth] = useState(false);

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
      auth = {auth}
    />
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route exact path="/" element={<Home />} />
      <Route path="/mypets" element={<MyPets />} />
      <Route path="/addpet" element={<AddPet />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/myaccount" element={<MyAccount />} />
      <Route path="/myrequests/:userId" element={<MyRequests />} />
      <Route path="/petindetail/:petId" element={<PetDetails />} />
      <Route path="/petindetail/:petId/reqs" element={<PetDetails />} />
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
          setAuth = {setAuth}
        />
        
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
      </Modal>
    <Footer />
  </Router>
  );
}

export default App;
