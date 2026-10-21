import {Card, Col, Container, Row} from "react-bootstrap";
import {useLayoutEffect, useRef, useState} from "react";
import ReactMarkdown from "react-markdown";
import GithubSmall from "../components/logos/GithubSmall.jsx";
import Web from "../components/icons/Web.jsx";
import projectData from "../content/projects/projects.json";
import projectMarkdown from "../content/projects/projects.md?raw";
import parseProjectContent from "../utils/parseProjectContent.js";

const PROJECTS_PER_PAGE = 2;
const projectContent = parseProjectContent(projectMarkdown);
const projects = projectData.map((project) => {
  const content = projectContent[project.id];
  if (!content) throw new Error(`Missing Markdown content for project "${project.id}".`);
  return {...project, ...content};
}).sort((first, second) => Date.parse(second.startDate) - Date.parse(first.startDate));
const projectCategories = [...new Set(projects.map((project) => project.category).filter(Boolean))];

function ProjectCard({project, revealIndex}) {
  const [expanded, setExpanded] = useState(false);
  const detailsId = `project-details-${project.id}`;
  const resources = project.resources || (project.resource ? [project.resource] : []);

  return (
    <Card
      as="article"
      className={`education-extra-card project-card${revealIndex !== undefined ? ' project-card--revealed' : ''}`}
      style={{'--project-reveal-delay': `${(revealIndex || 0) * 75}ms`}}
      aria-labelledby={`project-title-${project.id}`}
    >
      <div className="project-image-frame" style={{'--project-image-background': project.imageBackground || '#ffffff'}}>
        <img
          className="project-image"
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="project-content">
        <div className="project-meta">
          {project.category && <span className="project-category">{project.category}</span>}
          <span className="education-extra-date project-date">
            <span aria-hidden="true">🗓️ </span>{project.date}
          </span>
        </div>
        <h2 className="project-title" id={`project-title-${project.id}`}>{project.title}</h2>
        {project.subtitle && <p className="project-subtitle">{project.subtitle}</p>}
        <p className="project-summary"><strong>TL;DR</strong> {project.summary}</p>
        <button
          type="button"
          className="experience-description-toggle project-details-toggle"
          onClick={() => setExpanded((current) => !current)}
          aria-expanded={expanded}
          aria-controls={detailsId}
          aria-label={`${expanded ? 'Hide' : 'Show'} details about ${project.title}`}
        >
          {expanded ? 'Hide details' : 'Show details'} <span className="project-details-chevron" aria-hidden="true">⌄</span>
        </button>
        <div id={detailsId} className="project-details" hidden={!expanded}>
          <ReactMarkdown>{project.details}</ReactMarkdown>
        </div>
        <div className="project-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} on GitHub (opens in a new tab)`}>
              <GithubSmall /> GitHub
            </a>
          )}
          {resources.filter((resource) => resource.url).map((resource) => (
            <a key={resource.url} href={resource.url} target="_blank" rel="noreferrer" aria-label={`${project.title}: ${resource.label || 'External resources'} (opens in a new tab)`}>
              <Web /> {resource.label || 'External resources'} <span className="project-link-arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>
    </Card>
  );
}

function Projects() {
  const [visibleCount, setVisibleCount] = useState(PROJECTS_PER_PAGE);
  const [showFilters, setShowFilters] = useState(false);
  const [activeFilter, setActiveFilter] = useState(null);
  const revealRef = useRef(null);
  const previousHeightRef = useRef(null);
  const filteredProjects = projects.filter((project) => !activeFilter || project.category === activeFilter);
  const visibleProjects = filteredProjects.slice(0, visibleCount);

  useLayoutEffect(() => {
    const container = revealRef.current;
    const previousHeight = previousHeightRef.current;
    previousHeightRef.current = null;

    if (previousHeight === null || !container?.animate || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const animation = container.animate([
      {height: `${previousHeight}px`, overflow: 'clip'},
      {height: `${container.getBoundingClientRect().height}px`, overflow: 'clip'},
    ], {
      duration: 600,
      easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
    });

    return () => animation.cancel();
  }, [visibleCount, activeFilter]);

  const toggleFilter = (category) => {
    previousHeightRef.current = revealRef.current?.getBoundingClientRect().height ?? null;
    setActiveFilter((current) => current === category ? null : category);
    setVisibleCount(PROJECTS_PER_PAGE);
  };

  const showMore = () => {
    previousHeightRef.current = revealRef.current?.getBoundingClientRect().height ?? null;
    setVisibleCount((current) => Math.min(current + PROJECTS_PER_PAGE, filteredProjects.length));
  };

  const showAll = () => {
    previousHeightRef.current = revealRef.current?.getBoundingClientRect().height ?? null;
    setVisibleCount(filteredProjects.length);
  };

  const hideProjects = () => {
    previousHeightRef.current = revealRef.current?.getBoundingClientRect().height ?? null;
    setVisibleCount(PROJECTS_PER_PAGE);
    document.getElementById('projects')?.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
      block: 'start',
    });
  };

  return (
    <Container fluid id="projects" className="section projects-section" aria-labelledby="projects-title">
      <Row>
        <Col xs={12} className="section-title">
          <h1 id="projects-title">Projects</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="publication-filter-bar">
          <button
            type="button"
            className="publication-filter-toggle"
            onClick={() => setShowFilters((current) => !current)}
            aria-expanded={showFilters}
            aria-controls="project-filter-options"
          >
            Filters{activeFilter ? ` · ${activeFilter}` : ''} {showFilters ? '▲' : '▼'}
          </button>
          <div
            id="project-filter-options"
            className={`publication-filter-options${showFilters ? ' is-open' : ''}`}
            aria-hidden={!showFilters}
            inert={!showFilters}
          >
            <div className="publication-filter-row" role="group" aria-label="Project category filters">
              <button
                type="button"
                className={`conference-tag${activeFilter === null ? ' active-filter' : ''}`}
                onClick={() => toggleFilter(null)}
                aria-pressed={activeFilter === null}
                aria-controls="projects-grid"
              >
                All
              </button>
              {projectCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={`conference-tag${activeFilter === category ? ' active-filter' : ''}`}
                  onClick={() => toggleFilter(category)}
                  aria-pressed={activeFilter === category}
                  aria-controls="projects-grid"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </Col>
      </Row>
      <div ref={revealRef} className="projects-reveal">
        <div id="projects-grid" className="education-extra-grid projects-grid">
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              revealIndex={index >= PROJECTS_PER_PAGE ? index % PROJECTS_PER_PAGE : undefined}
            />
          ))}
        </div>
      </div>
      <p className="visually-hidden" role="status">
        Showing {visibleProjects.length} of {filteredProjects.length} projects{activeFilter ? ` in ${activeFilter}` : ''}.
      </p>
      {visibleCount < filteredProjects.length ? (
        <div className="projects-reveal-actions">
          <button
            type="button"
            className="projects-show-more"
            aria-controls="projects-grid"
            onClick={showMore}
          >
            Show more <span aria-hidden="true">↓</span>
          </button>
          <button
            type="button"
            className="projects-show-more"
            aria-controls="projects-grid"
            onClick={showAll}
          >
            Show all
          </button>
        </div>
      ) : visibleCount > PROJECTS_PER_PAGE && (
        <div className="projects-reveal-actions">
          <button
            type="button"
            className="projects-show-more"
            aria-controls="projects-grid"
            onClick={hideProjects}
          >
            Hide <span aria-hidden="true">↑</span>
          </button>
        </div>
      )}
    </Container>
  );
}

export default Projects;
