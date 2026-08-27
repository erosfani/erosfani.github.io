import {Button, Card, Col, Container, Row} from "react-bootstrap";
import getWindowWidth from "../components/getWindowWidth.jsx";
import NewPage from "../components/icons/NewPage.jsx";
import educations from "../content/education/educations.json";
import courses from "../content/education/courses.json";
import schools from "../content/education/schools.json";

function Education() {

  const width = getWindowWidth();

  return (
    <Container fluid id="education" className="section" style={{paddingBottom: '15px'}}>
      <Row>
        <Col xs={12} className='section-title'>
          <h1> Education </h1>
        </Col>
      </Row>
      {educations.map((edu, index) => (
        <Row key={index}>
          <Col xs={1} className="d-none d-sm-block">
          </Col>
          <Col xs={1} className={`d-none d-sm-block ${
            index === 0 ?
              'timeline timeline-first' : (
                index === educations.length - 1 ?
                  'timeline timeline-last' :
                  'timeline')
          }`} style={edu.color_from ? {
            borderLeft: '5px solid',
            borderImage: 'linear-gradient(to bottom, ' + edu.color + ' 65%, ' + edu.color_from + ' 100%) 1 100%'
          } : {'--timelineColor': edu.color}
          }>
            <div className={index === 0 ?
              'timeline-dot timeline-dot-first' : (
                index === educations.length - 1 ?
                  'timeline-dot timeline-dot-last' :
                  'timeline-dot timeline-dot-all')
            } style={{'--timelineColor': edu.color}}> </div>
          </Col>
          <Col xs={width < 576 ? 12 : 10}>
            <Card className='timeline-card timeline-card-white'>
              <Card.Title> <h3> {edu.course} </h3> </Card.Title>
              <Card.Body>
                <h5> {edu.org} </h5>

                {edu.description ?
                  <Card.Text style={{ whiteSpace: 'pre-line' }}> {edu.description} </Card.Text> : null}

                {edu.grade || edu.thesis ?
                <Card.Text>
                  {edu.grade ? <>Final grade: <strong>{edu.grade}</strong></> : null}
                  {edu.grade && edu.thesis ? <br/> : null}
                  {edu.thesis ? <>Thesis title: { edu.thesis_link ?
                    <span className='highlight' onClick={() =>
                    window.open(edu.thesis_link, '_blank')}><strong>{edu.thesis}</strong></span> :
                    <span><strong>{edu.thesis}</strong></span>
                  }</> : null}
                </Card.Text> : null}

                <span className='timeline-date-loc'>
                  🗓️ {edu.date}
                </span>


              </Card.Body>
            </Card>
          </Col>
        </Row>))
      }

      <Row>
        <Col xs={12} className='section-subtitle' style={{marginBottom: '10px'}}>
          <h2> Additional courses </h2>
        </Col>
      </Row>
      {courses.map((course, index) => (
        <Row key={index} className={"review-row certificate"}>
          <Col xs={width < 576 ? 12 : 8} className='review'>
            <h4> {course.title} </h4>
            {course.organizer}
            {course.certificate ? <Button className='new-page-button' onClick={() =>
              window.open(course.certificate, '_blank')}>
              <NewPage />
            </Button> : null}
            {course.description ? <><br/> <strong> {course.description} </strong> </> : null}
          </Col>
          <Col xs={width < 576 ? 12 : 4}>
            🗓️ <span>{course.date}</span>
          </Col>
        </Row>
      ))}

      <Row>
        <Col xs={12} className='section-subtitle' style={{marginBottom: '10px', marginTop: '10px'}}>
          <h2> Main attended schools and programs </h2>
        </Col>
      </Row>
      {schools.map((school, index) => (
        <Row key={index} className={"review-row certificate"}>
          <Col xs={width < 576 ? 12 : 8} className='review'>
            <h4> {school.title} </h4>
            {school.organizer}
            {school.certificate ? <Button className='new-page-button' onClick={() =>
              window.open(school.certificate, '_blank')}>
              <NewPage />
            </Button> : null}
            {school.description ? <><br/> <strong> {school.description} </strong> </> : null}
          </Col>
          <Col xs={width < 576 ? 12 : 4}>
            📍 <span>{school.position}</span>
            <br/>
            🗓️ <span>{school.date}</span>
          </Col>
        </Row>
      ))}
    </Container>
  );
}

export default Education;