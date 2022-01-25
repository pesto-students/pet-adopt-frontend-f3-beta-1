import { useSelector } from 'react-redux';
import { Navbar,Container,Nav,NavDropdown } from "react-bootstrap"
import { Link } from 'react-router-dom';

function Navigation1({handleLoginShow,handleSignUpShow}) {
  const state = useSelector(state=>state.loggedInUserDetails);
  console.log(state,"Nav");

  const NavLinks = () => {
    if (state.length) {
      return (
        <NavDropdown styles="{{background-color: transparent}}" bg="none" title={state[0].name} id="basic-nav-dropdown">
          <NavDropdown.Item href="">My Account</NavDropdown.Item>
          <NavDropdown.Item ><Link to="/about" >My Pet</Link></NavDropdown.Item>
          <NavDropdown.Item ><Link to="/contact" >Add Pet</Link></NavDropdown.Item>
          <NavDropdown.Item href="">All Requests</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
        </NavDropdown>
      );
    }
    else{
      return (<>
        <Nav.Link onClick={handleLoginShow} >Login</Nav.Link>
        <Nav.Link onClick={handleSignUpShow} >Sign Up</Nav.Link>
      </>);
    }
  };

  return (<>
    <Navbar collapseOnSelect variant="dark" className="my-nav" expand="lg">
        <Container>
            <Navbar.Brand href="/">PetPal</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
                <Nav.Link href="/home">Home</Nav.Link>
                <NavLinks />
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    </>

  );
}

export default Navigation1;