import { useSelector } from 'react-redux';
import { Navbar,Container,Nav,NavDropdown } from "react-bootstrap"

function Navigation1({handleLoginShow}) {
  const state = useSelector(state=>state.loggedInUserDetails);
  console.log(state,"Nav");

  const NavLinks = () => {
    if (state.length) {
      return (
        <NavDropdown title={state[0].name} id="basic-nav-dropdown">
          <NavDropdown.Item href="">My Account</NavDropdown.Item>
          <NavDropdown.Item href="/about">My Pets</NavDropdown.Item>
          <NavDropdown.Item href="/contact">Add Pet</NavDropdown.Item>
          <NavDropdown.Item href="">All Requests</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
        </NavDropdown>
      );
    }
    else{
      return <>
        <Nav.Link onClick={handleLoginShow} href="/login">Login</Nav.Link>
        <Nav.Link href="/signup">Sign Up</Nav.Link>
      </>
    }
  };

  return (
    <Navbar className="my-nav" expand="lg">
        <Container>
            <Navbar.Brand href="/">PetPal</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <NavLinks />
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default Navigation1;