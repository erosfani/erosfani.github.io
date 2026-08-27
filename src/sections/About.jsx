import {Badge, Button, Card, CardGroup, Col, Container, Dropdown, Row} from "react-bootstrap";
import TypingText from "../components/TypingText.jsx";
import profile from "../assets/profile.jpg";
import Scholar from "../components/logos/Scholar.jsx";
import Github from "../components/logos/Github.jsx";
import LinkedIn from "../components/logos/LinkedIn.jsx";
import {Children, useEffect, useRef, useState} from "react";
import ReactMarkdown from "react-markdown";
import aboutMeMarkdown from "../content/about.md?raw";
import newsMarkdown from "../content/news.md?raw";

const highlightLink = ({href, children}) => {
  if (href.startsWith('#')) {
    return (
      <a href={href} className='highlight' style={{textDecoration: 'underline'}}>
        {children}
      </a>
    );
  }
  return (
    <span className='highlight' onClick={() => window.open(href, '_blank')}>
      {children}
    </span>
  );
};

const aboutMeRenderers = {
  a: highlightLink,
};

const newsRenderers = {
  a: highlightLink,
  ul: ({children}) => <ul className='news-list'>{children}</ul>,
  li: ({children}) => {
    const [dateNode, ...rest] = Children.toArray(children);
    if (typeof rest[0] === 'string') {
      rest[0] = rest[0].replace(/^\s+/, '');
    }
    return (
      <li>
        <span className='date'>{dateNode}</span>
        <span className='content'>{rest}</span>
      </li>
    );
  },
};

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
          <Container className="mb-lg-2 about-button-row" fluid>
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

            <div className="about-button-break" aria-hidden="true"/>

            <Button size='lg' className='about-button' onClick={() =>
              window.open('resume_v202608.pdf', '_blank')}>
             <strong> Resume </strong>
            </Button>

            <Button size='lg' className='about-button' onClick={() =>
              window.open('cv_v202608.pdf', '_blank')}>
              <strong> CV </strong>
            </Button>

            {/* <Dropdown className='about-button-dropdown'>
              <Dropdown.Toggle size='lg' className='about-button'>
                <strong> CV </strong>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => window.open('resume_v202607.pdf', '_blank')}>
                  Resume
                </Dropdown.Item>
                <Dropdown.Item onClick={() => window.open('cv_v202607.pdf', '_blank')}>
                  Complete CV
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}
            
          </Container>

          <Badge className='contacts' bg=''>
            <a href='mailto:eros.fani@gmail.com'> eros.fani@gmail.com </a>
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
            <ReactMarkdown components={newsRenderers}>{newsMarkdown}</ReactMarkdown>
          </Container>

        </Col>
        <Col xs={12} md={8}>
          <Card ref={aboutMeRef} className='p-3 p-lg-5 mb-5 about'>

            <CardGroup><h2> About me </h2></CardGroup>

            <Card.Footer className="about-description">
              <ReactMarkdown components={aboutMeRenderers}>{aboutMeMarkdown}</ReactMarkdown>
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