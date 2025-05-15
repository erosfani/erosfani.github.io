import {Button, Modal, Tab, Tabs} from "react-bootstrap";
import React from "react";
import MultipleLineText from "./MultipleLineText.jsx";

function CiteWindow(props) {

  return (
    <>
      <Modal show={props.show} onHide={() => props.setShow(false)} backdropClassName="custom-backdrop" centered>
        <Modal.Header closeButton>
          <Modal.Title>Cite</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Tabs>
            <Tab eventKey="text" title="text">
              <div className="mt-3">
                {props.cite.text}
              </div>
            </Tab>
            <Tab eventKey="bibtex" title="bibtex">
              <div className="mt-3">
                <MultipleLineText text={props.cite.bibtex} />
              </div>
            </Tab>
          </Tabs>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => props.setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CiteWindow;