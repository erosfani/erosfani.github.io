import {Button, Card, Col, Container, Row} from "react-bootstrap";
import TypingText from "../components/TypingText.jsx";
import profile from "../assets/profile.jpg";
import Scholar from "../components/logos/Scholar.jsx";
import Github from "../components/logos/Github.jsx";
import LinkedIn from "../components/logos/LinkedIn.jsx";

const About = () => {

  return (
    <Container fluid id="about" className='section'>
      <Row>
        <Col xs={12} className='my-5 justify-left'>
          <h1> <TypingText text_before="Hello, I'm " text_highlight="Eros Fanì" text_after="!"/> </h1>
        </Col>
      </Row>
      <Row>

      </Row>
      <Row>
        <Col xs={4}>
          <img src={profile} alt="Profile" className='profile' />
          <Container className="mb-lg-5" fluid>
            <Button size='lg' className='about-button' onClick={() =>
              window.open('https://scholar.google.com/citations?user=rwto7AgAAAAJ&hl=en', '_blank')}>
              <Scholar />
            </Button>
            <Button size='lg' className='about-button' onClick={() =>
              window.open('https://github.com/Erosinho13', '_blank')}>
              <Github />
            </Button>
            <Button size='lg' className='about-button' onClick={() =>
              window.open('https://www.linkedin.com/in/eros-fani/', '_blank')}>
              <LinkedIn />
            </Button>
            <Button size='lg' className='about-button' onClick={() =>
              window.open('about:blank', '_blank')}>
              <strong> CV </strong>
            </Button>
          </Container>
        </Col>
        <Col xs={7}>
          <Card className='p-lg-5 mb-5'>
            <Card.Title> <h2> About me </h2> </Card.Title>
            <Card.Body style={{marginBottom: '-1em'}}>

              <p>
                I am an <strong> ELLIS Ph.D. candidate </strong>
                at the Visual and Multimodal Applied Learning Laboratory (VANDAL)
                within the Artificial Intelligence Hub (AIH)
                at the <strong> Polytechnic University of Turin (PoliTo) </strong>.

                Additionally, I am a <strong> Research Fellow </strong>
                at the <strong> Basque Center for Applied Mathematics (BCAM) </strong>.
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
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;