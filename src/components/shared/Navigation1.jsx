import { useSelector } from "react-redux";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { loggedInUser } from "../../store/slices/LoggedInUserDataSlice";

function Navigation1({ handleLoginShow, handleSignUpShow, auth }) {
  // const dispatch = useDispatch();
  const urlLocation = useLocation();
  const [styleNavbar, setStyleNavbar] = useState(true);
  const state = useSelector((state) => state.loggedInUserDetails);

  // const checkUser = async () => {
  //   dispatch(loggedInUser());
  // };

  useEffect(() => {
    //checkUser();
    if (urlLocation.pathname === "/home" || urlLocation.pathname === "/" || urlLocation.pathname === "/about") {
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
          styles="{{background-color: transparent}}"
          bg="none"
          title={state.name}
          id="basic-nav-dropdown"
        >
          <NavDropdown.Item href="/myaccount">My Account</NavDropdown.Item>
          <NavDropdown.Item href="/about">My Pet</NavDropdown.Item>
          <NavDropdown.Item href="/contact">Add Pet</NavDropdown.Item>
          <NavDropdown.Item><Link to={`/myrequests/${state._id}`} >My Requests</Link></NavDropdown.Item>
          {/* <NavDropdown.Divider />
            <Nav.Link as={Link} to="/about">My Pet</Nav.Link>
          <NavDropdown.Divider />
            <Nav.Link as={Link} to="/contact">Add Pet</Nav.Link>
          <NavDropdown.Divider />
            <Nav.Link as={Link} to={`/myrequests/${state._id}`}>My requests</Nav.Link> */}
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
          <Navbar.Brand href="/">
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
