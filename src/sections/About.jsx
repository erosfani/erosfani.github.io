import {Badge, Button, Card, CardGroup, Col, Container, Row} from "react-bootstrap";
import TypingText from "../components/TypingText.jsx";
import profile from "../assets/profile.jpg";
import Scholar from "../components/logos/Scholar.jsx";
import Github from "../components/logos/Github.jsx";
import LinkedIn from "../components/logos/LinkedIn.jsx";
import NewPageButton from "../components/NewPageButton.jsx";
import {useEffect, useRef, useState} from "react";

const About = () => {

  const [maxHeight, setMaxHeight] = useState(undefined);
  const newsRef = useRef(null);
  const aboutMeRef = useRef(null);

  useEffect(() => {
    const updateMaxHeight = () => {
      if (newsRef.current && aboutMeRef.current) {
        const newsRect = newsRef.current.getBoundingClientRect();
        const aboutRect = aboutMeRef.current.getBoundingClientRect();

        const maxHeightPx = aboutRect.bottom - newsRect.top;

        setMaxHeight(maxHeightPx > 0 ? maxHeightPx : 0);
      }
    };

    updateMaxHeight();
    window.addEventListener('resize', updateMaxHeight);
    window.addEventListener('scroll', updateMaxHeight, true);

    return () => {
      window.removeEventListener('resize', updateMaxHeight);
      window.removeEventListener('scroll', updateMaxHeight, true);
    };
  }, []);


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
            <a href='mailto:eros@gensyn.ai'> eros@gensyn.ai </a>
          </Badge>

          <Container
            className="news"
            ref={newsRef}
            style={{
              overflowY: 'auto',
              maxHeight: maxHeight ? `${maxHeight}px` : undefined,
            }}
            fluid
          >
            <h3> News </h3>
            <ul className="news-list">
              <li>
                <span className="date">09/2025:</span>
                <span className="content">I will join <span className='highlight'><strong>Gensyn</strong></span> as
                  a <span className='highlight'><strong>Machine Learning Researcher</strong></span>.
                  I am thrilled about this new position and look forward to starting in October!</span>
              </li>
              <li>
                <span className="date">08/2025:</span>
                <span className="content">Our paper “<span onClick={() =>
                  window.open('https://arxiv.org/pdf/2504.11216', '_blank')}>
                  <><span className='highlight'>
                    <strong>Diversity-Driven Learning: Tackling Spurious Correlations and Data Heterogeneity in Federated Models</strong>
                  </span></>
                </span>”
                  has been accepted at <strong>FLTA25</strong>!</span>
              </li>
              <li>
                <span className="date">07/2025:</span>
                <span className="content">I am excited to announce that I <strong>successfully defended my Ph.D. on July 9</strong>!
                  Check out my Ph.D. thesis <span onClick={() =>
                    window.open('https://tesidottorato.depositolegale.it/static/PDF/web/viewer.jsp', '_blank')}>
                  <><span className='highlight'>
                    <strong>here</strong>
                  </span></>
                </span>.</span>
              </li>
              <li>
                <span className="date">06/2025:</span>
                <span className="content">I will be attending <strong>ICML25 @ Vancouver</strong>! Join our poster session at the East Exhibition Hall A-B #E-1202, at the poster session 3, on Wednesday, July 16, at 11 a.m. local time. See you there!</span>
              </li>
              <li>
                <span className="date">05/2025:</span>
                <span className="content">Our new paper
                  “<span onClick={() =>
                    window.open('https://arxiv.org/pdf/2502.03340', '_blank')}>
                  <><span className='highlight'>
                    <strong>Interaction-Aware Gaussian Weighting for Clustered Federated Learning</strong>
                  </span></>
                </span>”
                  has been accepted at <strong>ICML25</strong>!</span>
              </li>
              <li>
                <span className="date">03/2025:</span>
                <span className="content">Check out our new paper,
                  “<span onClick={() =>
                    window.open('https://ieeexplore.ieee.org/abstract/document/10946159', '_blank')}>
                  <><span className='highlight'>
                    <strong>Resource-Efficient Personalization in
                      Federated Learning with Closed-Form Classifiers</strong>
                  </span></>”
                </span>
                  , accepted at
                  <strong> IEEE Access</strong>!</span>
              </li>
              <li>
                <span className="date">11/2024:</span>
                <span className="content">I am happy to share that I am starting a new position as a
                  <strong> Research Fellow Software Engineer</strong> at the
                  <strong> Basque Center for Applied Mathematics (BCAM)</strong>! </span>
              </li>
              <li>
                <span className="date">09/2024:</span>
                <span className="content">I am proud to announce that I have been awarded as
                  <strong> Outstanding Reviewer</strong> for <strong>ECCV24</strong>! </span>
              </li>
            </ul>
          </Container>

        </Col>
        <Col xs={12} md={8}>
          <Card ref={aboutMeRef} className='p-3 p-lg-5 mb-5 about'>

            <CardGroup><h2> About me </h2></CardGroup>

            <Card.Footer className="about-description">

              <p>
                I recently joined <strong> Gensyn </strong> as a
                <strong> Machine Learning Researcher</strong>, where I am
                currently pursuing research on Mixture of Experts and
                Model Merging for Large Language Models. Previously, I was a
                <span onClick={() =>
                  window.open('https://www.bcamath.org/en/people/bcam-members/efani', '_blank')}>
                  <> <span className='highlight'>
                    <strong> Postdoctoral Fellow </strong>
                    at the <strong> Basque Center for Applied Mathematics </strong>
                  </span></>
                </span>
                and a
                <span onClick={() =>
                  window.open('https://wearepal.ai/team', '_blank')}>
                  <> <span className='highlight'>
                    <strong> Senior Researcher </strong>
                    in the Predictive Analytics Lab
                    at the <strong> University of Sussex</strong>
                  </span></>
                </span>.

                I have earned a <strong> Ph.D. in Artificial Intelligence </strong>
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
                <span onClick={() =>
                  window.open('https://tesidottorato.depositolegale.it/static/PDF/web/viewer.jsp', '_blank')}>
                  <> <span className='highlight'>
                    <strong> Addressing Heterogeneity in Federated Learning for Real-world Vision Applications</strong>
                  </span></>
                </span>
                ).

                My Ph.D. was conducted within the framework of the
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
                and <strong> WACV</strong>, and to an <strong> IEEE </strong> journal (check my publications
                <> <a href="#research">
                  <span className='highlight' style={{textDecoration: 'underline'}}>here</span>
                </a></>
                ).
                Furthermore, I have served as a reviewer for many international conferences and journals,
                and I was honored as an
                <strong onClick={() =>
                  window.open('certificate_outstanding_reviewer_ECCV24.pdf', '_blank')}>
                  <> <span className='highlight'>Outstanding Reviewer</span> </>
                </strong>
                at <strong> ECCV </strong> in 2024.
              </p>

              <p>
                My research focuses on <strong>building scalable, distributed models</strong> over uniquely
                <strong> decentralised and heterogeneous infrastructure</strong>, and on addressing the challenge of
                <strong> data heterogeneity </strong> in real-world applications of <strong> federated learning</strong>.
                Additionally, I possess a solid track record in
                <strong> semantic segmentation</strong>,
                <strong> domain adaptation</strong>,
                <strong> domain generalization</strong>,
                <strong> semi-supervised learning</strong>.
              </p>

            </Card.Footer>

            {/*<CardGroup> <h4> Affiliations </h4> </CardGroup>*/}

            {/*<Card.Footer style={{textAlign: 'left', backgroundColor: 'white'}}>*/}

            {/*  <ul>*/}

            {/*    <li>*/}
            {/*    <span className="bind"> Gensyn*/}
            {/*      <NewPageButton url='about:blank' /> </span>*/}
            {/*    </li>*/}

            {/*  </ul>*/}

            {/*  <CardGroup> <h5> Past affiliations </h5> </CardGroup>*/}

            {/*  <ul>*/}

            {/*    <li>*/}
            {/*      Basque Center for Applied Mathematics <span className="bind"> (BCAM)*/}
            {/*      <NewPageButton url='https://www.bcamath.org/en/people/bcam-members/efani' /> </span>*/}
            {/*    </li>*/}

            {/*    <li>*/}
            {/*      University of Sussex, Predictive Analytics <span className="bind"> Lab*/}
            {/*      <NewPageButton url='https://wearepal.ai/team' /> </span>*/}
            {/*    </li>*/}

            {/*    <li> Polytechnic University of Turin (PoliTo):</li>*/}
            {/*    <ul>*/}
            {/*      <li>*/}
            {/*        Department of Control and Computer Engineering <span className="bind"> (DAUIN)*/}
            {/*        <NewPageButton url='https://www.polito.it/en/staff?p=eros.fani' /> </span>*/}
            {/*      </li>*/}
            {/*      <li>*/}
            {/*        Artificial Intelligence Hub (AIH),*/}
            {/*        Visual And Multimodal Applied Learning Laboratory <span className="bind"> (VANDAL)*/}
            {/*        <NewPageButton url='https://vandal.polito.it/index.php/people/' /> </span>*/}
            {/*      </li>*/}
            {/*    </ul>*/}

            {/*    <li>*/}
            {/*      European Laboratory for Learning and Intelligent Systems <span className="bind"> (ELLIS)*/}
            {/*      <NewPageButton url='https://ellis.eu/phd-postdoc' /> </span>*/}
            {/*    </li>*/}

            {/*  </ul>*/}

            {/*</Card.Footer>*/}

          </Card>

        </Col>
      </Row>
    </Container>
  );
};

export default About;