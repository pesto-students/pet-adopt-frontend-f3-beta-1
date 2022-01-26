import { useSelector } from "react-redux";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigation1({ handleLoginShow, handleSignUpShow, auth }) {
  const NavLinks = () => {
    const state = useSelector((state) => state.loggedInUserDetails);
    if (state.name) {
      return (
        <NavDropdown
          styles="{{background-color: transparent}}"
          bg="none"
          title={state.name}
          id="basic-nav-dropdown"
        >
          <NavDropdown.Item href="">My Account</NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/about">My Pet</Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/contact">Add Pet</Link>
          </NavDropdown.Item>
          <NavDropdown.Item href="">All Requests</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
        </NavDropdown>
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
      <Navbar collapseOnSelect variant="dark" className="my-nav" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img
              src="http://dogprintsgrooming.com/wp-content/uploads/2015/03/Dog_Print_Icons_3.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />
            {" "} PetPal
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/home">Home</Link>
              </Nav.Link>
            </Nav>
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
