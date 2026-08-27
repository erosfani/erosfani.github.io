import {Container, Nav, Navbar} from "react-bootstrap";
import Dragon from "./logos/Dragon.jsx";
import {useState} from "react";
import ThemeToggle from "./ThemeToggle.jsx";
import useTheme from "../hooks/useTheme.js";

function NavigationBar(props) {

  const [expanded, setExpanded] = useState(false);
  const {preference, resolvedTheme, setPreference} = useTheme();

  return (

    <Navbar expand="sm" bg={resolvedTheme === 'dark' ? 'dark' : 'light'}
            variant={resolvedTheme === 'dark' ? 'dark' : 'light'} fixed="top"
            expanded={expanded} onToggle={() => setExpanded(prev => !prev)}>

      <Container className='mx-auto'>

        <Navbar.Brand href="#about" active=""
                      className={props.activeSection === 'about' ? 'active_tab' : undefined}
                      onClick={() => setExpanded(false)}>

          <span className="logo-container">
            <Dragon />
          </span>

          <strong>Eros Fanì</strong>

        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav"/>

        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto">
            <Nav.Link href="#experience" active=""
                      className={props.activeSection === 'experience' ? 'active_tab' : undefined}
                      onClick={() => setExpanded(false)}>
              Experience
            </Nav.Link>
            <Nav.Link href="#education" active=""
                      className={props.activeSection === 'education' ? 'active_tab' : undefined}
                      onClick={() => setExpanded(false)}>
              Education
            </Nav.Link>
            <Nav.Link href="#research" active=""
                      className={props.activeSection === 'research' ? 'active_tab' : undefined}
                      onClick={() => setExpanded(false)}>
              Research
            </Nav.Link>
          </Nav>

          <ThemeToggle preference={preference} onChange={setPreference}/>

        </Navbar.Collapse>

      </Container>

    </Navbar>
  );
}

export default NavigationBar;