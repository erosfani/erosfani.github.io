import {Card, Col, Container, Row} from "react-bootstrap";
import getWindowWidth from "../components/getWindowWidth.jsx";
import experiences from "../content/experience/experiences.json";

function Experience() {

  const width = getWindowWidth();

  return (
    <Container fluid id="experience" className="section">
      <Row>
        <Col xs={12} className='section-title'>
          <h1> Professional and Teaching Experience </h1>
        </Col>
      </Row>
      {experiences.map((exp, index) => (
        <Row key={index} className="timeline-row">
          <Col xs={1} className="d-none d-sm-block">
          </Col>
          <Col xs={1} className={`d-none d-sm-block ${
            index === 0 ?
              'timeline timeline-first' : (
                index === experiences.length - 1 ?
                  'timeline timeline-last' :
                  'timeline')
          }`} style={{'--timelineColor': exp.color, '--timelineColorFrom': exp.color_from}}>
            <div className={index === 0 ?
              'timeline-dot timeline-dot-first' : (
                index === experiences.length - 1 ?
                  'timeline-dot timeline-dot-last' :
                  'timeline-dot timeline-dot-all')
            } style={{'--timelineColor': exp.color}}> </div>
          </Col>
          <Col xs={width < 576 ? 12 : 10}>
            <Card className='timeline-card'>
              <Card.Title> <h3> {exp.role} </h3> </Card.Title>
              <Card.Body>
                <h5> {exp.org} </h5>

                {exp.topic ?
                  <Card.Text> Topic: {exp.topic} </Card.Text> : null
                }

                {exp.role === 'Machine Learning Researcher' && exp.org === 'Gensyn' ?
                  <Card.Text> <strong>Research topic</strong>: massively decentralized and heterogeneous distributed
                    learning </Card.Text> : null }

                {exp.role === 'Postdoctoral Fellow & Software Engineer' && exp.org === 'Basque Center for Applied Mathematics' ?
                  <Card.Text> Lead developer,
                      <span onClick={() =>
                        window.open('https://www.bcamath.org/en/research/projects/actai', '_blank')}>
                        <span> <strong className='highlight'>Act.AI project</strong> </span>
                      </span>
                    (PI: Prof. N. Quadrianto)
                  </Card.Text> : null }

                {exp.courses ? exp.courses.map((course, index_c) => (
                    <span key={index_c}> {course.type} course: <strong>{course.name}</strong> <br/> </span>)) : null}

                <span className='timeline-date-loc'>
                  🗓️ {exp.date}
                </span>


              </Card.Body>
            </Card>
          </Col>
        </Row>))
      }
    </Container>
  );
}

export default Experience;