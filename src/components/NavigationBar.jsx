import EF_logo from '../assets/black_dragon.svg'
import {Container, Nav, Navbar} from "react-bootstrap";
import Dragon from "./logos/Dragon.jsx";

function NavigationBar(props) {

  return (

    <Navbar className='navbar navbar-expand-sm navbar-light bg-light fixed-top'>

      <Container className='mx-lg-5'>

        <Navbar.Brand href="#about" active=""
                      className={props.activeSection === 'about' ? 'active_tab' : undefined}>

          <span className="logo-container">
            <Dragon />
          </span>

          <strong>Eros Fanì</strong>

        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav"/>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#jobs" active=""
                      className={props.activeSection === 'jobs' ? 'active_tab' : undefined}>
              Professional experience
            </Nav.Link>
            <Nav.Link href="#education" active=""
                      className={props.activeSection === 'education' ? 'active_tab' : undefined}>
              Education
            </Nav.Link>
            <Nav.Link href="#publications" active=""
                      className={props.activeSection === 'publications' ? 'active_tab' : undefined}>
              Publications
            </Nav.Link>
          </Nav>

        </Navbar.Collapse>

      </Container>

    </Navbar>
  );
}

export default NavigationBar;