import React from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { BrowserRouter, Routes, Route, Link, Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import AboutApp from '../pages/AboutApp'
import AboutAuthor from '../pages/AboutAuthor'
import PageNotFound from '../pages/PageNotFound'


export default function NavbarMenu() {
  return (
    <BrowserRouter>
      <div>
        <Navbar className='color-nav' variant='dark'>
        <Container>
          <Navbar.Brand href="#home">TODOS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
              {/* <Nav.Link as={Link} to={"/About"}>About</Nav.Link> */}
              <NavDropdown title="About" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to={"/AboutApp"}>About App</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/AboutAuthor"}>About Author</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
    <div className="outer-box">
    <Routes>
      <Route path="/home" element={<Home/>} />
      <Route path="/About" element={<About />} />
      <Route path="/AboutApp" element={<AboutApp />} />
      <Route path="/AboutAuthor" element={<AboutAuthor />} />
      <Route path="*" element={<PageNotFound/>} />
      <Route path="/" element={<Navigate replace to="/home" />} />
    </Routes>
    </div>

</BrowserRouter>
  )
}
