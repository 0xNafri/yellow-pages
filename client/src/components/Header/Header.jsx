import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './header.css'


function Header() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-primary" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/" id='nav-brand'>Yellow Pages</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" id='nav-link'>
              {/* TODO: add page routing */}
              <Nav.Link href="/view-contacts">View Contacts</Nav.Link>
              <Nav.Link href="/add-contact">Add Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header