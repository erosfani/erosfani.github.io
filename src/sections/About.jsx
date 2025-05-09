import {Badge, Button, Card, CardGroup, Col, Container, Row} from "react-bootstrap";
import TypingText from "../components/TypingText.jsx";
import profile from "../assets/profile.jpg";
import Scholar from "../components/logos/Scholar.jsx";
import Github from "../components/logos/Github.jsx";
import LinkedIn from "../components/logos/LinkedIn.jsx";
import NewPageButton from "../components/NewPageButton.jsx";

const About = () => {

  return (
    <Container fluid id="about" className='section'>
      <Row>
        <Col xs={12} className='my-5 justify-left' id='presentation'>
          <h1> <TypingText text_before="Hello, I'm " text_highlight="Eros Fanì" text_after="!"/> </h1>
        </Col>
      </Row>
      <Row>

      </Row>
      <Row>
        <Col xs={4}>
          <img src={profile} alt="Profile" className='profile'/>
          <Container className="mb-lg-2" fluid>
            <Button size='lg' className='about-button' onClick={() =>
              window.open('https://scholar.google.com/citations?user=rwto7AgAAAAJ&hl=en', '_blank')}>
              <Scholar/>
            </Button>
            <Button size='lg' className='about-button' onClick={() =>
              window.open('https://github.com/Erosinho13', '_blank')}>
              <Github/>
            </Button>
            <Button size='lg' className='about-button' onClick={() =>
              window.open('https://www.linkedin.com/in/eros-fani/', '_blank')}>
              <LinkedIn/>
            </Button>
            <Button size='lg' className='about-button' onClick={() =>
              window.open('about:blank', '_blank')}>
              <strong> CV </strong>
            </Button>
          </Container>

          <Badge className='contacts' bg=''>
            <a href='mailto:eros.fani@polito.it'> eros.fani@polito.it </a>
            <a href='mailto:efani@bcamath.org'> efani@bcamath.org </a>
          </Badge>

        </Col>
        <Col xs={7}>
          <Card className='p-lg-5 mb-5 about'>

            <Card.Title> <h2> About me </h2> </Card.Title>

            <Card.Body style={{marginBottom: '-1em'}}>

              <p>
                I am an <strong> ELLIS Ph.D. candidate </strong>
                at the Visual and Multimodal Applied Learning Laboratory
                within the Artificial Intelligence Hub
                at the <strong> Polytechnic University of Turin </strong>.

                Additionally, I am a <strong> Research Fellow </strong>
                at the <strong> Basque Center for Applied Mathematics</strong>,
                and a <strong> Senior Researcher </strong>
                of the Predictive Analytics Lab
                at the <strong> University of Sussex</strong>.
              </p>

              <p>
                I have had the opportunity to publish and present my papers at several international peer-reviewed
                conferences and workshops, including
                <strong> ICML</strong>,
                <strong> CVPR</strong>,
                <strong> NeurIPS</strong>,
                <strong> IROS</strong>,
                and <strong> WACV</strong>.
                Furthermore, I have served as a reviewer for various international conferences and journals,
                and I was recently honored as one of the <strong> Outstanding Reviewers </strong>
                of <strong> ECCV </strong> in 2024.
              </p>

              <p>
                My research focuses on <strong> Heterogeneity in Federated Learning </strong>
                for real-world vision applications. I also have expertise with
                <strong> Large Language Models </strong>
                and in <strong> Semantic Segmentation</strong>,
                <strong> Domain Adaptation</strong>,
                <strong> Domain Generalization</strong>,
                and <strong> Semi-Supervised Learning</strong>.
              </p>

            </Card.Body>

            <CardGroup> <h4> Affiliations </h4> </CardGroup>

            <Card.Footer style={{textAlign: 'left', backgroundColor: 'white'}}>

              <ul>

                <li>
                  Basque Center for Applied Mathematics (BCAM)
                  <NewPageButton url='https://www.bcamath.org/en/people/bcam-members/efani' />
                </li>

                <li> Polytechnic University of Turin (PoliTo):</li>
                <ul>
                  <li>
                    Department of Control and Computer Engineering (DAUIN)
                    <NewPageButton url='https://www.polito.it/en/staff?p=eros.fani' />
                  </li>
                  <li>
                    Artificial Intelligence Hub (AIH),
                    Visual And Multimodal Applied Learning Laboratory (VANDAL)
                    <NewPageButton url='https://vandal.polito.it/index.php/people/' />
                  </li>
                </ul>

                <li>
                  University of Sussex, Predictive Analytics Lab
                  <NewPageButton url='https://wearepal.ai/team' />
                </li>

                <li>
                  European Laboratory fo Learning and Intelligent Systems (ELLIS)
                  <NewPageButton url='https://ellis.eu/phd-postdoc' />
                </li>

              </ul>

            </Card.Footer>

          </Card>

        </Col>
      </Row>
    </Container>
  );
};

export default About;