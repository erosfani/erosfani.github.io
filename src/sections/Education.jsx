import {Button, Card, Col, Container, Row} from "react-bootstrap";
import getWindowWidth from "../components/getWindowWidth.jsx";
import NewPage from "../components/icons/NewPage.jsx";
import ReactMarkdown from "react-markdown";
import {useState} from "react";
import educations from "../content/education/educations.json";
import courses from "../content/education/courses.json";
import schools from "../content/education/schools.json";
import educationDescriptionsMarkdown from "../content/education/descriptions.md?raw";
import ellisLogo from "../assets/experience/ellis-cropped.png";
import ellisLogoDark from "../assets/experience/ellis-cropped-dark.png";
import liceoLogo from "../assets/experience/liceo-marie-curie.png";
import politoLogo from "../assets/experience/polito.svg";
import sussexLogo from "../assets/experience/sussex-cropped.svg";

const educationLogos = {
  ellis: {
    light: ellisLogo,
    dark: ellisLogoDark,
  },
  liceo: {
    light: liceoLogo,
    dark: liceoLogo,
    sizeClass: "experience-logo--large",
  },
  polito: {
    light: politoLogo,
    dark: politoLogo,
    darkNeedsContrast: true,
    sizeClass: "experience-logo--large",
  },
  sussex: {
    light: sussexLogo,
    dark: sussexLogo,
    darkNeedsContrast: true,
    sizeClass: "experience-logo--small",
  },
};

function parseEducationDescriptions(markdown) {
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

const educationDescriptions = parseEducationDescriptions(educationDescriptionsMarkdown);

function getEducationLogo(organization) {
  if (organization.includes("Polytechnic University of Turin")) return educationLogos.polito;
  if (organization.includes("University of Sussex")) return educationLogos.sussex;
  if (organization.includes("ELLIS")) return educationLogos.ellis;
  if (organization.includes("European Laboratory for Learning and Intelligent Systems")) {
    return educationLogos.ellis;
  }
  if (organization.includes("Liceo Scientifico Statale M. Curie Giulianova")) return educationLogos.liceo;
  return null;
}

const educationRenderers = {
  a: ({href, children}) => (
    <a href={href} target="_blank" rel="noreferrer" className="highlight">
      {children}
    </a>
  ),
};

function Education() {
  const width = getWindowWidth();
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  const toggleDescription = (key) => {
    setExpandedDescriptions((current) => ({
      ...current,
      [key]: !current[key],
    }));
  };

  const renderDescription = (description, key) => description ? (
    <>
      <button
        type="button"
        className="experience-description-toggle"
        onClick={() => toggleDescription(key)}
        aria-expanded={Boolean(expandedDescriptions[key])}
        aria-controls={`education-description-${key}`}
      >
        {expandedDescriptions[key] ? 'Hide details ▲' : 'Show details ▼'}
      </button>
      <div
        id={`education-description-${key}`}
        className={`experience-description${expandedDescriptions[key] ? ' is-expanded' : ''}`}
        aria-hidden={!expandedDescriptions[key]}
      >
        <ReactMarkdown components={educationRenderers}>{description}</ReactMarkdown>
      </div>
    </>
  ) : null;

  const renderStaticDescription = (description) => description ? (
    <div className="education-extra-description">
      <ReactMarkdown components={educationRenderers}>{description}</ReactMarkdown>
    </div>
  ) : null;

  return (
    <Container fluid id="education" className="section" style={{paddingBottom: '15px'}}>
      <Row>
        <Col xs={12} className="section-title">
          <h1>Education</h1>
        </Col>
      </Row>

      {educations.map((edu, index) => {
        const description = educationDescriptions[edu.course];
        const logo = getEducationLogo(edu.org);
        const key = `education-${index}`;

        return (
          <Row key={key} className="timeline-row">
            <Col xs={1} className="d-none d-sm-block" />
            <Col
              xs={1}
              className={`d-none d-sm-block ${
                index === 0 ? 'timeline timeline-first' : (
                  index === educations.length - 1 ? 'timeline timeline-last' : 'timeline'
                )
              }`}
              style={{'--timelineColor': edu.color, '--timelineColorFrom': edu.color_from}}
            >
              <div
                className={index === 0 ? 'timeline-dot timeline-dot-first' : (
                  index === educations.length - 1 ? 'timeline-dot timeline-dot-last' : 'timeline-dot timeline-dot-all'
                )}
                style={{'--timelineColor': edu.color}}
              />
            </Col>
            <Col xs={width < 576 ? 12 : 10}>
              <Card className="timeline-card experience-card education-card">
                {logo ?
                  <span className={`experience-logo ${logo.sizeClass || ''}`} aria-label={`${edu.org} logo`}>
                    <img className="experience-logo-light" src={logo.light} alt={`${edu.org} logo`} />
                    <img
                      className={`experience-logo-dark${logo.darkNeedsContrast ? ' experience-logo-dark--contrast' : ''}`}
                      src={logo.dark}
                      alt={`${edu.org} logo`}
                    />
                  </span> : null
                }
                <Card.Title><h3>{edu.course}</h3></Card.Title>
                <Card.Body>
                  <h5>{edu.org}</h5>
                  {renderDescription(description, key)}
                  <span className="timeline-date-loc">🗓️ {edu.date}</span>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        );
      })}

      <Row>
        <Col xs={12} className="section-subtitle education-subtitle">
          <h2>Additional courses</h2>
        </Col>
      </Row>
      <div className="education-extra-grid">
        {courses.map((course, index) => {
          const key = `course-${index}`;
          return (
            <Card key={key} className="education-extra-card">
              <div className="education-extra-heading">
                <h4>{course.title}</h4>
              </div>
              <p>{course.organizer}</p>
              {renderStaticDescription(educationDescriptions[`Course — ${course.title}`])}
              <span className="education-extra-date">🗓️ {course.date}</span>
              {course.certificate ?
                <Button
                  className="new-page-button"
                  aria-label={`Open certificate for ${course.title}`}
                  onClick={() => window.open(course.certificate, '_blank')}
                >
                  <NewPage />
                </Button> : null
              }
            </Card>
          );
        })}
      </div>

      <Row>
        <Col xs={12} className="section-subtitle education-subtitle">
          <h2>Main attended schools and programs</h2>
        </Col>
      </Row>
      <div className="education-extra-grid">
        {schools.map((school, index) => {
          const key = `school-${index}`;
          return (
            <Card key={key} className="education-extra-card">
              <div className="education-extra-heading">
                <h4>{school.title}</h4>
              </div>
              <p>{school.organizer}</p>
              {renderStaticDescription(educationDescriptions[`School — ${school.title}`])}
              <span className="education-extra-date">🗓️ {school.date}</span>
              <p>📍 {school.position}</p>
            </Card>
          );
        })}
      </div>
    </Container>
  );
}

export default Education;
