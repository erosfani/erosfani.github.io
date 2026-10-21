import {Button, Card, Col, Container, Modal, Row, Tab, Tabs} from "react-bootstrap";
import Cite from "../components/icons/Cite.jsx";
import Read from "../components/icons/Read.jsx";
import GithubSmall from "../components/logos/GithubSmall.jsx";
import Web from "../components/icons/Web.jsx";
import getWindowWidth from "../components/getWindowWidth.jsx";

import React, { useState } from 'react';
import CiteWindow from "../components/CiteWindow.jsx";
import NewPage from "../components/icons/NewPage.jsx";
import publicationData from "../content/research/publications.json";
import reviewer_conferences from "../content/research/reviewer_conferences.json";
import venues from "../content/research/venues.json";

const PUBLICATIONS_PER_PAGE = 3;
const publications = [...publicationData].sort((first, second) => second.date - first.date);

function getPublicationTypeClass(type) {
  return `publication-type-tag-${type.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
}

function getPublicationTypes(tags = []) {
  return [...new Set(tags.map((tag) => venues[tag]?.type).filter(Boolean))];
}

function getVenueColor(tag) {
  const venue = venues[tag];
  return venue?.main_conference
    ? venues[venue.main_conference]?.color || 'var(--accent)'
    : venue?.color || 'var(--accent)';
}

function shouldShowVenueTag(tag) {
  return venues[tag]?.show_tag !== false;
}

function getYearFilter(year) {
  return `year:${year}`;
}

const venueOrder = [
  'NeurIPS',
  'ICML',
  'SPOT ICLR',
  'AdaptFM ICML',
  'FL@FM NeurIPS',
  'IROS',
  'WACV',
  'FedVision CVPR',
  'IEEE Access',
  'FLTA',
  'I-RIM',
];

const usedVenueTags = new Set(publications.flatMap((publication) => publication.tags || []));
const allVenueTags = venueOrder.filter((tag) => usedVenueTags.has(tag) && shouldShowVenueTag(tag));
const allPublicationTypes = [...new Set(publications.flatMap((publication) => getPublicationTypes(publication.tags)))];
const allPublicationYears = [...new Set(publications.map((publication) => publication.date))]
  .filter(Boolean)
  .sort((firstYear, secondYear) => secondYear - firstYear);


function Research() {

  const [show, setShow] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [cite, setCite] = useState({});
  const [activeFilter, setActiveFilter] = useState(null);
  const [visibleCount, setVisibleCount] = useState(PUBLICATIONS_PER_PAGE);
  const width = getWindowWidth();
  const toggleFilter = (filter) => {
    setActiveFilter((currentFilter) => currentFilter === filter ? null : filter);
    setVisibleCount(PUBLICATIONS_PER_PAGE);
  };
  const isPublicationVisible = (publication) =>
    !activeFilter ||
    publication.tags?.includes(activeFilter) ||
    getPublicationTypes(publication.tags).includes(activeFilter) ||
    getYearFilter(publication.date) === activeFilter
  ;
  const filteredPublications = publications.filter(isPublicationVisible);
  const visiblePublications = filteredPublications.slice(0, visibleCount);
  const hidePublications = () => {
    setVisibleCount(PUBLICATIONS_PER_PAGE);
    document.getElementById('publications-title')?.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
      block: 'start',
    });
  };

  return (
    <Container fluid id="research" className="section research-section">
      <Row>
        <Col xs={12} className='section-title'>
          <h1> Research </h1>
        </Col>
      </Row>
      <Row>
        <Col xs={12} className='section-subtitle'>
          <h2 id="publications-title"> Publications </h2>
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="publication-filter-bar">
          <button
            type="button"
            className="publication-filter-toggle"
            onClick={() => setShowFilters((isVisible) => !isVisible)}
            aria-expanded={showFilters}
            aria-controls="publication-filter-options"
          >
            Filters {showFilters ? '▲' : '▼'}
          </button>
          <div
            id="publication-filter-options"
            className={`publication-filter-options${showFilters ? ' is-open' : ''}`}
            aria-label="Publication filters"
            aria-hidden={!showFilters}
            inert={!showFilters}
          >
              <div className="publication-filter-row">
                {allPublicationTypes.map((type) => (
                  <button
                    key={`filter-type-${type}`}
                    type="button"
                    className={`publication-type-tag ${getPublicationTypeClass(type)}${activeFilter === type ? ' active-filter' : ''}`}
                    onClick={() => toggleFilter(type)}
                    aria-pressed={activeFilter === type}
                  >
                    {type}
                  </button>
                ))}
              </div>
              <div className="publication-filter-row">
                {allVenueTags.map((tag) => (
                  <button
                    key={`filter-venue-${tag}`}
                    type="button"
                    className={`conference-tag${activeFilter === tag ? ' active-filter' : ''}`}
                    style={{'--tag-color': getVenueColor(tag)}}
                    onClick={() => toggleFilter(tag)}
                    aria-pressed={activeFilter === tag}
                    aria-label={`${tag} venue filter`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
              <div className="publication-filter-row">
                {allPublicationYears.map((year) => (
                  <button
                    key={`filter-year-${year}`}
                    type="button"
                    className={`publication-year-tag${activeFilter === getYearFilter(year) ? ' active-filter' : ''}`}
                    onClick={() => toggleFilter(getYearFilter(year))}
                    aria-pressed={activeFilter === getYearFilter(year)}
                    aria-label={`${year} publication year filter`}
                  >
                    {year}
                  </button>
                ))}
              </div>
          </div>
        </Col>
      </Row>
      <div id="publications-list">
      {
        visiblePublications.map((publication, index) => (
          <Row
            key={publication.title}
            className={`publication${index >= PUBLICATIONS_PER_PAGE ? ' publication--revealed' : ''}`}
            style={{'--publication-reveal-delay': `${(index % PUBLICATIONS_PER_PAGE) * 60}ms`}}
          >
            <Col xs={12} md={8} className='publication-description'>
              <h5>
                {
                  (() => {
                    const index = publication.authors.findIndex(
                      (author) => author.name === 'Eros' && author.surname === 'Fanì'
                    );

                    if (index === 0) return (
                      <>
                        <strong>E. Fanì</strong>, et al. “<em>{publication.title}</em>”.
                      </>
                    );

                    const author = publication.authors[0];
                    const initials = author.name
                      .split(' ')
                      .map((n) => n.charAt(0).toUpperCase() + '.')
                      .join(' ');
                    const displayName = `${initials} ${author.surname}${author.equal ? '*' : ''}`;

                    return (
                      <>
                        <span>{displayName}, {index > 1 ? <>…, </> : <></>}</span>
                        <strong>E. Fanì</strong>{author.equal ? '*' : ''}, et al. “<em>{publication.title}</em>”.
                      </>
                    );
                  })()
                }
                <> {publication.venue}</>, {publication.date}.
              </h5>
              {publication.tags?.length || publication.date ?
                <div className="publication-tags" aria-label="Publication categories and venues">
                  {getPublicationTypes(publication.tags).map((type) => (
                    <button
                      key={type}
                      type="button"
                      className={`publication-type-tag ${getPublicationTypeClass(type)}${activeFilter === type ? ' active-filter' : ''}`}
                      onClick={() => toggleFilter(type)}
                      aria-pressed={activeFilter === type}
                    >
                      {type}
                    </button>
                  ))}
                  {(publication.tags || []).filter(shouldShowVenueTag).map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      className={`conference-tag${activeFilter === tag ? ' active-filter' : ''}`}
                      style={{'--tag-color': getVenueColor(tag)}}
                      onClick={() => toggleFilter(tag)}
                      aria-pressed={activeFilter === tag}
                      aria-label={`${tag} venue filter`}
                    >
                      {tag}
                    </button>
                  ))}
                  <button
                    type="button"
                    className={`publication-year-tag${activeFilter === getYearFilter(publication.date) ? ' active-filter' : ''}`}
                    onClick={() => toggleFilter(getYearFilter(publication.date))}
                    aria-pressed={activeFilter === getYearFilter(publication.date)}
                    aria-label={`${publication.date} publication year filter`}
                  >
                    {publication.date}
                  </button>
                </div>
                : null}
              <Button size='sm' className="about-button publication-button"
                      onClick={() => window.open(publication.link, '_blank')}><Read/></Button>
              {publication.website ?
                <Button size='sm' className="about-button publication-button"
                        onClick={() => window.open(publication.website, '_blank')}><Web/></Button>
                : null}
              {publication.code ?
              <Button size='sm' className="about-button publication-button"
                      onClick={() => window.open(publication.code, '_blank')}><GithubSmall/></Button>
                : null }
              <Button size='sm' className="about-button publication-button"
                      onClick={() => {setShow(true); setCite(publication.cite)}}><Cite/></Button>
              {publication.description ? <Card className="publication-tldr">
              <Card.Text>
                {publication.description}
              </Card.Text>
              </Card> : null}
            </Col>
            <Col xs={12} md={4} className="publication-teaser">
              {
                publication.teaser_url ?
                  <div className="publication-teaser-frame">
                    <img src={publication.teaser_url} alt={`${publication.title} teaser`} className='teaser' loading="lazy"/>
                  </div>
                  : null
              }
            </Col>
          </Row>
          ))
      }
      </div>
      <p className="visually-hidden" role="status">
        Showing {visiblePublications.length} of {filteredPublications.length} publications.
      </p>
      {visibleCount < filteredPublications.length ? (
        <div className="projects-reveal-actions publication-reveal-actions">
          <button
            type="button"
            className="projects-show-more"
            aria-controls="publications-list"
            onClick={() => setVisibleCount((current) => Math.min(current + PUBLICATIONS_PER_PAGE, filteredPublications.length))}
          >
            Show more <span aria-hidden="true">↓</span>
          </button>
          <button
            type="button"
            className="projects-show-more"
            aria-controls="publications-list"
            onClick={() => setVisibleCount(filteredPublications.length)}
          >
            Show all
          </button>
        </div>
      ) : visibleCount > PUBLICATIONS_PER_PAGE && (
        <div className="projects-reveal-actions publication-reveal-actions">
          <button
            type="button"
            className="projects-show-more"
            aria-controls="publications-list"
            onClick={hidePublications}
          >
            Hide <span aria-hidden="true">↑</span>
          </button>
        </div>
      )}
      <CiteWindow show={show} setShow={setShow} cite={cite} />
      <span className='section-footnote'> *equal contribution. </span>

      <Row>
        <Col xs={12} className='section-subtitle' style={{marginTop: '15px'}}>
          <h2> Peer reviewing </h2>
        </Col>
      </Row>

      {reviewer_conferences.map((conference, index) => (
        <Row key={index} className={"review-row"}>
          <Col xs={width < 576 ? 12 : 8} className='review'>
            <ul className="review-list">
              <li>
                {conference.name} (<strong>{conference.acronym}</strong>)
                {conference.pc ?
                  <>
                    <br/>
                    <span className='review-pc'>
                      Invited as <strong>Program Committee </strong>
                      <span className='bind review-pc'> <strong> Member</strong>
                      <Button className='new-page-button' onClick={() =>
                        window.open(conference.pc, '_blank')}>
                          <NewPage />
                        </Button></span>
                    </span>
                  </>
                  : null
                }
                {conference.outstanding ?
                  <>
                    <br/>
                    <span className='review-pc'>
                      Awarded as <strong>Outstanding </strong>
                      <span className='bind review-pc'>
                        <strong>Reviewer</strong>
                        <Button className='new-page-button' onClick={() =>
                        window.open(conference.outstanding, '_blank')}>
                          <NewPage />
                        </Button>
                      </span>
                    </span>
                  </>
                  : null
                }
              </li>
            </ul>
          </Col>
          <Col xs={width < 576 ? 12 : 4} className='review-date'>
            🗓️ {conference.years.map((year, cindex) => (
            <span key={cindex}>{year}{cindex !== conference.years.length - 1 ? <>, </> : null}</span>
          ))}
          </Col>
        </Row>
      ))}

    </Container>
  );
}


export default Research;
