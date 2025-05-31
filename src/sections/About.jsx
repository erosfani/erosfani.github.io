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
        <Col xs={12} md={4}>
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
              window.open('cv_v202505.pdf', '_blank')}>
              <strong> CV </strong>
            </Button>
          </Container>

          <Badge className='contacts' bg=''>
            <a href='mailto:efani@bcamath.org'> efani@bcamath.org </a>
            <a href='mailto:eros.fani@polito.it'> eros.fani@polito.it </a>
          </Badge>

        </Col>
        <Col xs={12} md={8}>
          <Card className='p-3 p-lg-5 mb-5 about'>

            <CardGroup> <h2> About me </h2> </CardGroup>

            <Card.Footer className="about-description">

              <p>

                I am a
                <span onClick={() =>
                  window.open('https://www.bcamath.org/en/people/bcam-members/efani', '_blank')}>
                  <> <span className='highlight'>
                    <strong> Research Fellow </strong>
                    at the <strong> Basque Center for Applied Mathematics</strong>
                  </span></>
                </span>,
                and a
                <span onClick={() =>
                  window.open('https://wearepal.ai/team', '_blank')}>
                  <> <span className='highlight'>
                    <strong> Senior Researcher </strong>
                    of the Predictive Analytics Lab
                    at the <strong> University of Sussex</strong>
                  </span></>
                </span>.

                Additionally, I am completing a <strong> Ph.D. in Artificial Intelligence </strong>
                at the
                <span onClick={() =>
                  window.open('https://vandal.polito.it/index.php/people/', '_blank')}>
                  <> <span className='highlight'>
                    Visual and Multimodal Applied Learning Laboratory
                  </span> </>
                </span>
                within the Artificial Intelligence Hub
                at the
                <span onClick={() =>
                  window.open('https://www.polito.it/en/staff?p=eros.fani', '_blank')}>
                  <> <span className='highlight'>
                    <strong> Polytechnic University of Turin</strong>
                  </span> </>
                </span>
                (thesis title:
                <strong> Addressing Heterogeneity in Federated Learning for Real-world Vision Applications</strong>).

                My Ph.D. is conducted within the framework of the
                <span onClick={() =>
                  window.open('https://ellis.eu/phd-postdoc', '_blank')}>
                  <> <span className='highlight'>
                    European Laboratory for Learning and Intelligent Systems (<strong>ELLIS</strong>)
                    <strong> Ph.D. program</strong>
                  </span></>
                </span>,
                a pan-European initiative for excellence in machine learning and AI.

              </p>

              <p>
                I have published and presented my work at several international peer-reviewed
                conferences and workshops, including
                <strong> ICML</strong>,
                <strong> NeurIPS</strong>,
                <strong> CVPR</strong>,
                <strong> IROS</strong>,
                and <strong> WACV</strong>, and to an <strong> IEEE </strong> journal.
                Furthermore, I have served as a reviewer for various international conferences and journals,
                and I was recently honored as an
                <strong onClick={() =>
                  window.open('certificate_outstanding_reviewer_ECCV24.pdf', '_blank')}>
                  <> <span className='highlight'>Outstanding Reviewer</span> </>
                </strong>
                at <strong> ECCV </strong> in 2024.
              </p>

              <p>
                My research focuses on addressing the challenge of <strong> Data Heterogeneity </strong>
                in real-world applications of <strong> Federated Learning</strong>.
                Additionally, I possess a solid track record in
                <strong> Semantic Segmentation</strong>,
                <strong> Domain Adaptation</strong>,
                <strong> Domain Generalization</strong>,
                <strong> Semi-Supervised Learning</strong>,
                and in designing innovative solutions for ML problems using
                <strong> Large Language Models</strong>.
              </p>

            </Card.Footer>

            <CardGroup> <h4> Affiliations </h4> </CardGroup>

            <Card.Footer style={{textAlign: 'left', backgroundColor: 'white'}}>

              <ul>

                <li>
                  Basque Center for Applied Mathematics <span className="bind"> (BCAM)
                  <NewPageButton url='https://www.bcamath.org/en/people/bcam-members/efani' /> </span>
                </li>

                <li>
                  University of Sussex, Predictive Analytics <span className="bind"> Lab
                  <NewPageButton url='https://wearepal.ai/team' /> </span>
                </li>

                <li> Polytechnic University of Turin (PoliTo):</li>
                <ul>
                  <li>
                    Department of Control and Computer Engineering <span className="bind"> (DAUIN)
                    <NewPageButton url='https://www.polito.it/en/staff?p=eros.fani' /> </span>
                  </li>
                  <li>
                    Artificial Intelligence Hub (AIH),
                    Visual And Multimodal Applied Learning Laboratory <span className="bind"> (VANDAL)
                    <NewPageButton url='https://vandal.polito.it/index.php/people/' /> </span>
                  </li>
                </ul>

                <li>
                  European Laboratory for Learning and Intelligent Systems <span className="bind"> (ELLIS)
                  <NewPageButton url='https://ellis.eu/phd-postdoc' /> </span>
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