import {Card, Col, Container, Row} from "react-bootstrap";

function Experience() {

  const experiences = [
    {
      role: 'Research Fellow Software Engineer',
      org: 'Basque Center for Applied Mathematics',
      date: 'Nov 2024 - present',
      location: 'Bilbao, Spain',
      color: '#ff8900',
      color_from: '#001d93',
    },
    {
      role: 'MSc thesis supervisor',
      org: 'Polytechnic University of Turin',
      date: 'Sep 2023 - Oct 2024',
      location: 'Turin, Italy',
      topic: 'Clustered Federated Learning',
      color: '#001d93',
    },
    {
      role: 'Teaching assistant',
      org: 'Polytechnic University of Turin',
      date: 'A.Y. 2022/23',
      location: 'Turin, Italy',
      color: '#001d93',
      courses: [
        {
          type: 'Graduate',
          name: 'Machine Learning and Deep Learning'
        },
        {
          type: 'Graduate',
          name: 'Advanced Machine Learning'
        },
        {
          type: 'Graduate',
          name: 'Data Analytics and Artificial Intelligence'
        },
        {
          type: 'Graduate',
          name: 'Web Applications I'
        },
        {
          type: 'Undergraduate',
          name: 'Computer Science'
        },
      ],
    },
    {
      role: 'MSc thesis supervisor',
      org: 'Polytechnic University of Turin',
      date: 'Sep 2022 - Jul 2023',
      location: 'Turin, Italy',
      topic: 'Federated Visual Geo-Localization',
      color: '#001d93',
    },
    {
      role: 'Teaching collaborator as an undergrad',
      org: 'Polytechnic University of Turin',
      date: 'A.Y. 2018/19',
      location: 'Turin, Italy',
      color: '#001d93',
      courses: [
        {
          type: 'Undergraduate',
          name: 'Algorithms and Programming'
        },
        {
          type: 'Undergraduate',
          name: 'Mathematical Analysis I'
        },
        {
          type: 'Undergraduate',
          name: 'Mathematical Analysis II'
        },
      ],
    },
  ];

  return (
    <Container fluid id="experience" className="section">
      <Row>
        <Col xs={12} className='section-title'>
          <h1> Professional and Teaching Experience </h1>
        </Col>
      </Row>
      {experiences.map((exp, index) => (
        <Row key={index}>
          <Col xs={3}>
          </Col>
          <Col xs={1} className={
            index === 0 ?
              'timeline timeline-first' : (
                index === experiences.length - 1 ?
                  'timeline timeline-last' :
                  'timeline')
          } style={exp.color_from ? {
            borderLeft: '5px solid',
            borderImage: 'linear-gradient(to bottom, ' + exp.color + ' 65%, ' + exp.color_from + ' 100%) 1 100%'
          } : null
          }>
            <div className={index === 0 ?
              'timeline-dot timeline-dot-first' : (
                index === experiences.length - 1 ?
                  'timeline-dot timeline-dot-last' :
                  'timeline-dot timeline-dot-all')
            } style={{'--timelineColor': exp.color}}> </div>
          </Col>
          <Col xs={8}>
            <Card className='timeline-card'>
              <Card.Title> <h3> {exp.role} </h3> </Card.Title>
              <Card.Body>
                <h5> {exp.org} </h5>

                {exp.topic ?
                  <Card.Text> Topic: {exp.topic} </Card.Text> : null
                }

                {exp.courses ? exp.courses.map((course, index_c) => (
                    <span key={index_c}> {course.type} course: <strong>{course.name}</strong> <br/> </span>)) : null}

                <span className='timeline-date-loc'>
                  🗓️ {exp.date}
                </span>
                <span className='timeline-date-loc'>
                  📍 {exp.location}
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