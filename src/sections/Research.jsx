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


function Research() {

  const [show, setShow] = useState(false);
  const [cite, setCite] = useState({});
  const width = getWindowWidth();

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
      {
        publications.map((publication, index) => (
          <Row key={index} className="publication">
            <Col xs={12} md={8} className='publication-description'>
              <h5>
                {
                  (() => {
                    const index = publication.authors.findIndex(
                      (author) => author.name === 'Eros' && author.surname === 'Fanì'
                    );

                    if (index === 0) return (
                      <>
                        <strong>E. Fanì</strong>, et. al. “<em>{publication.title}</em>”.
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
                        <strong>E. Fanì</strong>{author.equal ? '*' : ''}, et. al. “<em>{publication.title}</em>”.
                      </>
                    );
                  })()
                }
                <> {publication.venue}</>, {publication.date}.
              </h5>
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
            <Col xs={12} md={4}>
              {
                publication.teaser_url ?
                  <img src={publication.teaser_url} alt={publication.teaser_url} className='teaser'/>
                  : null
              }
            </Col>
          </Row>
        ))
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