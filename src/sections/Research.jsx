import {Button, Card, Col, Container, Modal, Row, Tab, Tabs} from "react-bootstrap";
import Cite from "../components/icons/Cite.jsx";
import Read from "../components/icons/Read.jsx";
import GithubSmall from "../components/logos/GithubSmall.jsx";
import Web from "../components/icons/Web.jsx";
import getWindowWidth from "../components/getWindowWidth.jsx";

import React, { useState } from 'react';
import CiteWindow from "../components/CiteWindow.jsx";
import NewPage from "../components/icons/NewPage.jsx";
import publications from "../content/research/publications.json";
import reviewer_conferences from "../content/research/reviewer_conferences.json";
import venues from "../content/research/venues.json";

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
  const width = getWindowWidth();
  const toggleFilter = (filter) => {
    setActiveFilter((currentFilter) => currentFilter === filter ? null : filter);
  };
  const isPublicationVisible = (publication) =>
    !activeFilter ||
    publication.tags?.includes(activeFilter) ||
    getPublicationTypes(publication.tags).includes(activeFilter) ||
    getYearFilter(publication.date) === activeFilter
  ;

  return (
    <Container fluid id="research" className="section research-section">
      <Row>
        <Col xs={12} className='section-title'>
          <h1> Research </h1>
        </Col>
      </Row>
      <Row>
        <Col xs={12} className='section-subtitle'>
          <h2> Publications </h2>
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
      {
        publications.map((publication) => {
          const isVisible = isPublicationVisible(publication);

          return (
          <Row
            key={publication.title}
            className={`publication${isVisible ? '' : ' publication-filter-hidden'}`}
            aria-hidden={!isVisible}
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
              <CiteWindow show={show} setShow={setShow} cite={cite} />
              <Card.Text>
                {publication.description}
              </Card.Text>
              </Card> : null}
            </Col>
            <Col xs={12} md={4} className="publication-teaser">
              {
                publication.teaser_url ?
                  <img src={publication.teaser_url} alt={publication.teaser_url} className='teaser'/>
                  : null
              }
            </Col>
          </Row>
          );
        })
      }
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
