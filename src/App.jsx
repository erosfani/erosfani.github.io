import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavigationBar from "./components/NavigationBar.jsx";
import {Col, Container, Row} from "react-bootstrap";
import profileImage from './assets/profile.jpg';
import TypingText from "./components/TypingText.jsx";

function App() {

  return (
    <>
      <NavigationBar />

      <Container fluid id="about" className='section'>
        <Row>
          <Col xs={4} className='my-5'>
            <h1> <TypingText text_before="Hello, I'm " text_highlight="Eros Fanì" text_after="!"/> </h1>
          </Col>
        </Row>
        <Row>

        </Row>
        <Row>
          <Col xs={4}>
            <img src={profileImage} alt="Profile" className='profile' />
          </Col>
        </Row>
      </Container>

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

    </>
  )
}


export default App
