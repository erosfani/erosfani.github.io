import {Button, Card, Col, Container, Row} from "react-bootstrap";
import getWindowWidth from "../components/getWindowWidth.jsx";
import NewPage from "../components/icons/NewPage.jsx";
import React from "react";

function Education() {

  const educations = [

    {
      course: 'Ph.D. candidate in Computer and Control Engineering',
      org: 'Polytechnic University of Turin',
      date: 'Nov 2021 - present',
      location: 'Turin, Italy',
      description: 'Advisor: Prof. B. Caputo ⋅ PoliTo',
      thesis: 'Addressing Heterogeneity in Federated Learning for Real-world Vision Applications',
      color: '#001d93',
    },
    {
      course: 'ELLIS Ph.D. program - Academic track',
      org: 'European Laboratory for Learning and Intelligent Systems',
      date: 'Nov 2021 - present',
      location: 'Turin, Italy',
      description: 'Primary Host: Prof. B. Caputo · PoliTo\n' +
        'Exchange Host: Prof. N. Quadrianto · University of Sussex',
      color: '#001d93',
    },
    {
      course: 'Visiting period at the University of Sussex for the ELLIS Exchange',
      org: 'University of Sussex, European Laboratory for Learning and Intelligent Systems',
      date: 'May 2024 - Oct 2024',
      location: 'Brighton, United Kingdom',
      description: 'Research Advisor: Prof. N. Quadrianto · University of Sussex',
      color: '#001d93',
    },
    {
      course: 'Visiting period at ELLIS Alicante',
      org: 'ELLIS Alicante, European Laboratory for Learning and Intelligent Systems',
      date: 'Sep 2024',
      location: 'Alicante, Spain',
      description: 'Research Advisor: Prof. N. Oliver · ELLIS Alicante',
      color: '#001d93',
      color_from: '#076744',
    },
    {
      course: 'MSc in Data Science and Engineering',
      org: 'Polytechnic University of Turin',
      date: 'Oct 2019 - Oct 2021',
      location: 'Turin, Italy',
      grade: '110/110 cum laude',
      thesis: 'On the Challenges of Class Imbalance in Federated Learning for Semantic Segmentation',
      color: '#076744',
      color_from: '#098a04',
    },
    {
      course: 'BSc in Computer Engineering',
      org: 'Polytechnic University of Turin',
      date: 'Oct 2016 - Jul 2019',
      location: 'Turin, Italy',
      grade: '108/110',
      color: '#098a04',
    },
    {
      course: 'Young Talent Project',
      org: 'Polytechnic University of Turin, CRT Foundation',
      date: 'Oct 2016 - Jul 2019',
      location: 'Turin, Italy',
      description: 'Study program of excellence open only to the 2% top-tier students admitted to the PoliTo for the ' +
        'A.Y. 2016/17',
      color: '#098a04',
      color_from: '#5ec85c',
    },
    {
      course: 'High school diploma',
      org: 'Liceo Scientifico Statale M. Curie',
      date: 'Sep 2011 - Jul 2016',
      location: 'Giulianova, Italy',
      grade: '100/100 cum laude',
      color: '#5ec85c',
    },

  ]

  const courses = [

    {
      title: 'Warm up your muscles: A ten-stage marathon to become the protagonist of your financial future',
      organizer: 'Museo del Risparmio, Intesa San Paolo',
      date: 'Feb 2025 - Apr 2025',
      certificate: 'certificate_warm_up_you_muscles_ten-stage_marathon_to_become_the_protagonist_of_your_financial_future.pdf'
    },

    {
      title: 'Fundamentals of Reinforcement Learning',
      organizer: 'Coursera, University of Alberta',
      date: 'Feb 2022',
      certificate: 'https://www.coursera.org/account/accomplishments/verify/E8XHQC8Y5GD4',
    },

    {
      title: 'Sample-based Learning Methods',
      organizer: 'Coursera, University of Alberta',
      date: 'Jan 2022',
      certificate: 'https://www.coursera.org/account/accomplishments/verify/A983W59KX3JY',
    },

    {
      title: 'Security Soft Start',
      organizer: 'ONstairs Academy',
      date: 'Jun 2020',
      certificate: 'certificate_security_soft_start.pdf',
    },

  ]

  const schools = [

    {
      title: 'Mediterranean Machine Learning (M2L) Summer School',
      organizer: 'AI Education Foundation',
      position: 'Thessaloniki, Greece',
      date: 'Aug 2023',
      description: 'Selected as one of the top 10 students among 805 applicants (top 1.25%) and 180 participants (top 5.55%)',
    },

    {
      title: 'ELLIS Doctoral Symposium 2021',
      organizer: 'University of Tübingen, Max-Plank Institute for Intelligent Systems',
      position: 'Tübingen, Germany',
      date: 'Oct 2021',
    },

    {
      title: 'Vodafone IoT Academy',
      organizer: 'Vodafone, Polytechnic University of Turin',
      position: 'Turin, Italy',
      date: 'Jan 2020 - Jul 2020',
      description: 'University-wide selection of the best 30 applicants at PoliTo'
    },

  ]

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
                  {edu.thesis ? <>Thesis title: <strong>{edu.thesis}</strong></> : null}
                </Card.Text> : null}

                <span className='timeline-date-loc'>
                  🗓️ {edu.date}
                </span>
                <span className='timeline-date-loc'>
                  📍 {edu.location}
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