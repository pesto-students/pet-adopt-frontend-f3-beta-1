import { useSelector } from "react-redux";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { loggedInUser } from "../../store/slices/LoggedInUserDataSlice";

function Navigation1({ handleLoginShow, handleSignUpShow, auth }) {
  // const dispatch = useDispatch();
  const urlLocation = useLocation();
  const navigate = useNavigate();
  const [styleNavbar, setStyleNavbar] = useState(true);
  const state = useSelector((state) => state.loggedInUserDetails);

  // const checkUser = async () => {
  //   dispatch(loggedInUser());
  // };

  useEffect(() => {
    //checkUser();
    if (urlLocation.pathname === "/home" || urlLocation.pathname === "/" || urlLocation.pathname === "/mypets") {
      setStyleNavbar(true);
    } else {
      setStyleNavbar(false);
    }
    // eslint-disable-next-line
  }, [urlLocation.pathname]);

  const NavLinks = () => {
    if (state.name) {
      return (
        <>
        <NavDropdown
          bg="dark"
          title={state.name}
          id="basic-nav-dropdown"
        >
          <NavDropdown.Item href="/myaccount">My Account</NavDropdown.Item>
          <NavDropdown.Item onClick={()=> navigate("/mypets")}>My Pet</NavDropdown.Item>
          <NavDropdown.Item onClick={()=> navigate("/addpet")} >Add Pet</NavDropdown.Item>
          <NavDropdown.Item onClick={()=> navigate(`/myrequests/${state._id}`)}>My Requests</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
        </NavDropdown>
        </>
      );
    } else {
      return (
        <>
          <Nav.Link onClick={handleLoginShow}>Login</Nav.Link>
          <Nav.Link onClick={handleSignUpShow}>Sign Up</Nav.Link>
        </>
      );
    }
  };

  return (
    <>
      <Navbar
        collapseOnSelect
        className={styleNavbar ? "my-nav-home" : "my-nav"}
        expand="lg"
        variant="dark"
      >
        <Container>
          <Navbar.Brand onClick={()=>{navigate("/home")}}>
            <img
              src="http://dogprintsgrooming.com/wp-content/uploads/2015/03/Dog_Print_Icons_3.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="petpal logo"
              loading="lazy"
            />
            {" "}PetPal
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <NavLinks />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation1;
