import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavigationBar from "./components/NavigationBar.jsx";
import {Col, Container, Row} from "react-bootstrap";
import About from "./sections/About.jsx";
import {useState, useEffect} from "react";
import Experience from "./sections/Experience.jsx";
import Education from "./sections/Education.jsx";
import Publications from "./sections/Publications.jsx";
import LastUpdateDate from "./components/LastUpdateDate.jsx";

function App() {

  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {

    const handleScroll = () => {
      const sections = ['about', 'experience', 'education', 'publications', 'reviews', 'certifications',
                                'dissemination', 'honors-and-awards', 'projects', 'achievements'];
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

        <Experience />

        <Education />

        <Publications />

        <Container fluid id="reviews" className='section'>
          <Row>
            <Col>
              Peer Reviewing
            </Col>
          </Row>
        </Container>

        <Container fluid id="certifications" className='section'>
          <Row>
            <Col>
              Certifications
            </Col>
          </Row>
        </Container>

        <Container fluid id="dissemination" className='section'>
          <Row>
            <Col>
              Dissemination
            </Col>
          </Row>
        </Container>

        <Container fluid id="honors-and-awards" className='section'>
          <Row>
            <Col>
              Honors & Awards
            </Col>
          </Row>
        </Container>

        <Container fluid id="projects" className='section'>
          <Row>
            <Col>
              Projects
            </Col>
          </Row>
        </Container>

        <Container fluid id="achievements" className='section'>
          <Row>
            <Col>
              Achievements
            </Col>
          </Row>
        </Container>

      </main>

      <footer className="footer">

        <span> <strong> Eros Fanì </strong> - All rights reserved. </span>
        <br/>
        <span style={{color: 'grey'}}> Last update: <LastUpdateDate /> </span>
      </footer>
    </>
  )
}


export default App
