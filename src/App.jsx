import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import { useState } from 'react'
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

import NavigationBar from "./NavigationBar.jsx";
import Home from "./Home.jsx";
import {Container} from "react-bootstrap";


function App() {

  return (
    <>
      <BrowserRouter>
        <NavigationBar/>
        <Container className="container-fluid">
          <Routes>
            <Route exact path='/' element={
              <>
                <Home/>
              </>
            }/>
            <Route path='*' element={<Navigate to='/' replace />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  )
}


export default App
