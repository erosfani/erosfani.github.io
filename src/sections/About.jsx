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

const NEWS_COLLAPSE_THRESHOLD = 50;
const NEWS_EXPAND_THRESHOLD = 80;
const NEWS_FULL_WIDTH_MAX_HEIGHT = 200;
const NEWS_MARGIN_TOP = 10;

const About = () => {

  const [inlineMaxHeight, setInlineMaxHeight] = useState(undefined);
  const [newsBelow, setNewsBelow] = useState(false);
  const asideRef = useRef(null);
  const anchorRef = useRef(null);
  const aboutMeRef = useRef(null);

  useEffect(() => {
    const updateLayout = () => {
      if (!anchorRef.current || !aboutMeRef.current) return;

      const anchorBottom = anchorRef.current.getBoundingClientRect().bottom;
      const aboutBottom = aboutMeRef.current.getBoundingClientRect().bottom;
      const available = aboutBottom - anchorBottom - NEWS_MARGIN_TOP;

      setNewsBelow(prevBelow =>
        prevBelow ? available < NEWS_EXPAND_THRESHOLD : available <= NEWS_COLLAPSE_THRESHOLD
      );
      setInlineMaxHeight(available > 0 ? available : 0);
    };

    updateLayout();

    const observer = new ResizeObserver(updateLayout);
    if (asideRef.current) observer.observe(asideRef.current);
    if (aboutMeRef.current) observer.observe(aboutMeRef.current);
    window.addEventListener('resize', updateLayout);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateLayout);
    };
  }, []);

  const newsSection = (fullWidth) => (
    <Container
      className="news"
      style={{
        overflowY: 'auto',
        maxHeight: fullWidth
          ? `${NEWS_FULL_WIDTH_MAX_HEIGHT}px`
          : (inlineMaxHeight !== undefined ? `${inlineMaxHeight}px` : undefined),
      }}
      fluid
    >
      <h3> News </h3>
      <ReactMarkdown components={newsRenderers}>{newsMarkdown}</ReactMarkdown>
    </Container>
  );

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
          <div ref={asideRef}>
            <img src={profile} alt="Profile" className='profile'/>
            <Container className="mb-lg-2 about-button-row" fluid>
              <Button size='lg' className='about-button' onClick={() =>
                window.open('https://scholar.google.com/citations?user=rwto7AgAAAAJ', '_blank')}>
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

            </Container>

            <Badge ref={anchorRef} className='contacts' bg=''>
              <a href='mailto:eros.fani@gmail.com'> eros.fani@gmail.com </a>
            </Badge>
          </div>

          {!newsBelow && newsSection(false)}

        </Col>
        <Col xs={12} md={8}>
          <Card ref={aboutMeRef} className='p-3 p-lg-5 mb-5 about'>

            {/*<CardGroup><h2> About me </h2></CardGroup>*/}

            <Card.Footer className="about-description">
              <ReactMarkdown components={aboutMeRenderers}>{aboutMeMarkdown}</ReactMarkdown>
            </Card.Footer>

          </Card>

        </Col>
      </Row>

      {newsBelow && (
        <Row>
          <Col xs={12} className='mb-5'>
            {newsSection(true)}
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default About;