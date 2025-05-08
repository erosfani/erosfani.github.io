import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavigationBar from "./components/NavigationBar.jsx";
import {Col, Container, Row} from "react-bootstrap";
import About from "./sections/About.jsx";

function App() {

  return (
    <>
      <NavigationBar />

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

    </>
  )
}


export default App
