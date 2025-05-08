import EF_logo from '../assets/black_dragon.svg'
import {Container, Nav, Navbar} from "react-bootstrap";

function NavigationBar(props) {

  return (

    <Navbar className='navbar navbar-expand-sm navbar-light bg-light fixed-top'>

      <Container className='mx-lg-5'>

        <Navbar.Brand href="#about">

          <span className="logo-container">
            <img src={EF_logo} alt="EF logo" className="logo-circle" />
          </span>

          <strong>Eros Fanì</strong>

        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav"/>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#jobs"> Professional experience </Nav.Link>
            <Nav.Link href="#education"> Education </Nav.Link>
            <Nav.Link href="#publications"> Publications </Nav.Link>
          </Nav>

        </Navbar.Collapse>

      </Container>

    </Navbar>
  );
}

export default NavigationBar;