import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavigationBar from "./components/NavigationBar.jsx";
import {Col, Container, Row} from "react-bootstrap";
import About from "./sections/About.jsx";
import {useState, useEffect} from "react";

function App() {

  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {

    const handleScroll = () => {
      const sections = ['about', 'jobs', 'education', 'publications'];
      let current = '';

      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          current = id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, []);

  return (
    <>
      <NavigationBar activeSection={activeSection} />

      <main>
        <About />

        <Container fluid id="jobs" className='section'>
          <Row>
            <Col>
              Jobs
            </Col>
          </Row>
        </Container>

        <Container fluid id="education" className='section'>
          <Row>
            <Col>
            Education
            </Col>
          </Row>
        </Container>

        <Container fluid id="publications" className='section'>
          <Row>
            <Col>
              Publications
            </Col>
          </Row>
        </Container>
      </main>
    </>
  )
}


export default App
