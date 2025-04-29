import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import {Container, Navbar, Nav, NavDropdown, Col} from "react-bootstrap";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar expand='lg' className='navbar navbar-expand-sm navbar-dark bg-primary fixed-top'>
        <Container>
          <Navbar.Brand href="#home">Eros Fanì</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">About me</Nav.Link>
              <Nav.Link href="#jobs">Professional experience</Nav.Link>
              <Nav.Link href="#education">Education</Nav.Link>
              <Nav.Link href="#research">Research</Nav.Link>
              {/*<NavDropdown title="Dropdown" id="basic-nav-dropdown">*/}
              {/*  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>*/}
              {/*  <NavDropdown.Item href="#action/3.2">*/}
              {/*    Another action*/}
              {/*  </NavDropdown.Item>*/}
              {/*  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>*/}
              {/*  <NavDropdown.Divider />*/}
              {/*  <NavDropdown.Item href="#action/3.4">*/}
              {/*    Separated link*/}
              {/*  </NavDropdown.Item>*/}
              {/*</NavDropdown>*/}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/*<div>*/}
      {/*  <a target="_blank">*/}
      {/*    <img src={reactLogo} className="logo react" alt="React logo" />*/}
      {/*  </a>*/}
      {/*</div>*/}
      {/*<h1>Eros Fanì</h1>*/}
      {/*<div className="card">*/}
      {/*  <button onClick={() => setCount((count) => count + 1)}>*/}
      {/*    count is {count}*/}
      {/*  </button>*/}
      {/*</div>*/}
      {/*<p className="read-the-docs">*/}
      {/*  Work in progress...*/}
      {/*</p>*/}
    </>
  )
}

export default App
