import {Card, Col, Container, Row} from "react-bootstrap";
import getWindowWidth from "../components/getWindowWidth.jsx";
import ReactMarkdown from "react-markdown";
import {useState} from "react";
import experiences from "../content/experience/experiences.json";
import experienceDescriptionsMarkdown from "../content/experience/descriptions.md?raw";
import gensynOnLightLogo from "../assets/experience/gensyn-symbol-brown.svg";
import gensynOnDarkLogo from "../assets/experience/gensyn-symbol-pink.svg";
import bcamOnLightLogo from "../assets/experience/bcam-cropped.png";
import bcamOnDarkLogo from "../assets/experience/bcam-dark.png";
import sussexLogo from "../assets/experience/sussex-cropped.svg";
import politoLogo from "../assets/experience/polito.svg";

const experienceLogos = {
  Gensyn: {light: gensynOnLightLogo, dark: gensynOnDarkLogo},
  "Basque Center for Applied Mathematics": {
    light: bcamOnLightLogo,
    dark: bcamOnDarkLogo,
    sizeClass: "experience-logo--small",
  },
  "Predictive Analytics Lab, University of Sussex": {
    light: sussexLogo,
    dark: sussexLogo,
    darkNeedsContrast: true,
    sizeClass: "experience-logo--small",
  },
  "Polytechnic University of Turin": {
    light: politoLogo,
    dark: politoLogo,
    darkNeedsContrast: true,
    sizeClass: "experience-logo--large",
  },
  "VANDAL lab, Polytechnic University of Turin": {
    light: politoLogo,
    dark: politoLogo,
    darkNeedsContrast: true,
    sizeClass: "experience-logo--large",
  },
};

function parseExperienceDescriptions(markdown) {
  const descriptions = {};
  let currentTitle = null;
  let currentContent = [];

  markdown.split('\n').forEach((line) => {
    const heading = line.match(/^#{1,6}\s+(.+?)\s*$/);

    if (heading) {
      if (currentTitle) descriptions[currentTitle] = currentContent.join('\n').trim();
      currentTitle = heading[1].trim();
      currentContent = [];
      return;
    }

    if (currentTitle) currentContent.push(line);
  });

  if (currentTitle) descriptions[currentTitle] = currentContent.join('\n').trim();

  return descriptions;
}

const experienceDescriptions = parseExperienceDescriptions(experienceDescriptionsMarkdown);

function getExperienceDescription(exp) {
  const roleAndDate = `${exp.role} — ${exp.date}`;
  return experienceDescriptions[roleAndDate] || experienceDescriptions[exp.role];
}

const experienceRenderers = {
  a: ({href, children}) => (
    <a href={href} target="_blank" rel="noreferrer" className="highlight">
      {children}
    </a>
  ),
};

function Experience() {

  const width = getWindowWidth();
  const [expandedDescriptions, setExpandedDescriptions] = useState({});
  const toggleDescription = (index) => {
    setExpandedDescriptions((current) => ({
      ...current,
      [index]: !current[index],
    }));
  };

  return (
    <Container fluid id="experience" className="section">
      <Row>
        <Col xs={12} className='section-title'>
          <h1> Professional and Teaching Experience </h1>
        </Col>
      </Row>
      {experiences.map((exp, index) => {
        const description = getExperienceDescription(exp);
        const logo = experienceLogos[exp.org];

        return (
        <Row key={index} className="timeline-row">
          <Col xs={1} className="d-none d-sm-block">
          </Col>
          <Col xs={1} className={`d-none d-sm-block ${
            index === 0 ?
              'timeline timeline-first' : (
                index === experiences.length - 1 ?
                  'timeline timeline-last' :
                  'timeline')
          }`} style={{'--timelineColor': exp.color, '--timelineColorFrom': exp.color_from}}>
            <div className={index === 0 ?
              'timeline-dot timeline-dot-first' : (
                index === experiences.length - 1 ?
                  'timeline-dot timeline-dot-last' :
                  'timeline-dot timeline-dot-all')
            } style={{'--timelineColor': exp.color}}> </div>
          </Col>
          <Col xs={width < 576 ? 12 : 10}>
            <Card className='timeline-card experience-card'>
              {logo ?
                <span className={`experience-logo ${logo.sizeClass || ''}`} aria-label={`${exp.org} logo`}>
                  <img
                    className="experience-logo-light"
                    src={logo.light}
                    alt={`${exp.org} logo`}
                  />
                  <img
                    className={`experience-logo-dark${logo.darkNeedsContrast ? ' experience-logo-dark--contrast' : ''}`}
                    src={logo.dark}
                    alt={`${exp.org} logo`}
                  />
                </span> : null
              }
              <Card.Title> <h3> {exp.role} </h3> </Card.Title>
              <Card.Body>
                <h5> {exp.org} </h5>

                {description ?
                  <>
                    <button
                      type="button"
                      className="experience-description-toggle"
                      onClick={() => toggleDescription(index)}
                      aria-expanded={Boolean(expandedDescriptions[index])}
                      aria-controls={`experience-description-${index}`}
                    >
                      {expandedDescriptions[index] ? 'Hide details ▲' : 'Show details ▼'}
                    </button>
                    <div
                      id={`experience-description-${index}`}
                      className={`experience-description${expandedDescriptions[index] ? ' is-expanded' : ''}`}
                      aria-hidden={!expandedDescriptions[index]}
                    >
                      <ReactMarkdown components={experienceRenderers}>
                        {description}
                      </ReactMarkdown>
                    </div>
                  </> : null
                }

                <span className='timeline-date-loc'>
                  🗓️ {exp.date}
                </span>


              </Card.Body>
            </Card>
          </Col>
        </Row>
        );
      })
      }
    </Container>
  );
}

export default Experience;
