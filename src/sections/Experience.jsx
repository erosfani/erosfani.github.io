import {Card, Col, Container, Row} from "react-bootstrap";
import getWindowWidth from "../components/getWindowWidth.jsx";

function Experience() {

  const experiences = [
    {
      role: 'Machine Learning Researcher',
      org: 'Gensyn',
      date: 'Oct 2025 - present',
      color: '#f7d5cf',
      color_from: '#2d99d5',
    },
    {
      role: 'Postdoctoral Fellow & Software Engineer',
      org: 'Basque Center for Applied Mathematics',
      date: 'Nov 2024 - Sep 2025',
      color: '#2295d3',
      color_from: '#0d3652',
    },
    {
      role: 'MSc thesis supervisor',
      org: 'Polytechnic University of Turin',
      date: 'Sep 2023 - Oct 2024',
      topic: 'Clustered Federated Learning',
      color: '#0d3652',
    },
    {
      role: 'Teaching assistant',
      org: 'Polytechnic University of Turin',
      date: 'A.Y. 2022/23',
      color: '#0d3652',
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
      topic: 'Federated Visual Geo-Localization',
      color: '#0d3652',
    },
    {
      role: 'Teaching collaborator as an undergrad',
      org: 'Polytechnic University of Turin',
      date: 'A.Y. 2018/19',
      color: '#0d3652',
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

  const width = getWindowWidth();

  return (
    <Container fluid id="experience" className="section">
      <Row>
        <Col xs={12} className='section-title'>
          <h1> Professional and Teaching Experience </h1>
        </Col>
      </Row>
      {experiences.map((exp, index) => (
        <Row key={index}>
          <Col xs={1} className="d-none d-sm-block">
          </Col>
          <Col xs={1} className={`d-none d-sm-block ${
            index === 0 ?
              'timeline timeline-first' : (
                index === experiences.length - 1 ?
                  'timeline timeline-last' :
                  'timeline')
          }`} style={exp.color_from ? {
            borderLeft: '5px solid',
            borderImage: 'linear-gradient(to bottom, ' + exp.color + ' 65%, ' + exp.color_from + ' 100%) 1 100%'
          } : {'--timelineColor': exp.color}
          }>
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