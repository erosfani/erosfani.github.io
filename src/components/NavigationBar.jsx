import {Container, Nav, Navbar} from "react-bootstrap";
import Dragon from "./logos/Dragon.jsx";

function NavigationBar(props) {

  return (

    <Navbar className='navbar navbar-expand-sm navbar-light bg-light fixed-top'>

      <Container className='mx-auto'>

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
            <Nav.Link href="#experience" active=""
                      className={props.activeSection === 'experience' ? 'active_tab' : undefined}>
              Experience
            </Nav.Link>
            <Nav.Link href="#education" active=""
                      className={props.activeSection === 'education' ? 'active_tab' : undefined}>
              Education
            </Nav.Link>
            <Nav.Link href="#publications" active=""
                      className={props.activeSection === 'publications' ? 'active_tab' : undefined}>
              Publications
            </Nav.Link>
            <Nav.Link href="#reviews" active=""
                      className={props.activeSection === 'reviews' ? 'active_tab' : undefined}>
              Peer Reviewing
            </Nav.Link>
            <Nav.Link href="#certifications" active=""
                      className={props.activeSection === 'certifications' ? 'active_tab' : undefined}>
              Certifications
            </Nav.Link>
            <Nav.Link href="#dissemination" active=""
                      className={props.activeSection === 'dissemination' ? 'active_tab' : undefined}>
              Dissemination
            </Nav.Link>
            <Nav.Link href="#honors-and-awards" active=""
                      className={props.activeSection === 'honors-and-awards' ? 'active_tab' : undefined}>
              Honors & Awards
            </Nav.Link>
            <Nav.Link href="#projects" active=""
                      className={props.activeSection === 'projects' ? 'active_tab' : undefined}>
              Projects
            </Nav.Link>
            <Nav.Link href="#achievements" active=""
                      className={props.activeSection === 'achievements' ? 'active_tab' : undefined}>
              Achievements
            </Nav.Link>
          </Nav>

        </Navbar.Collapse>

      </Container>

    </Navbar>
  );
}

export default NavigationBar;