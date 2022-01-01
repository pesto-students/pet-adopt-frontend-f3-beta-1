import React from "react";
import "./index.css";
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
  return (
    <Router>
    <Header />
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
    <Footer />
  </Router>
  );
}

export default App;
