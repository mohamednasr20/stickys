import React from 'react';
import logo from '../../assets/logo.png';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import './navbar.css';

const MyNavbar = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand className="brand" href="#home">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">OUR MENU</Nav.Link>
            <Nav.Link href="#link">LOCATIONS</Nav.Link>
            <Nav.Link href="#link">ABOUT US</Nav.Link>
            <Nav.Link href="#link">CATERING</Nav.Link>
          </Nav>
          <Button className="p-0" variant="warning">
            <Nav.Link href="#link">ORDER NOW</Nav.Link>
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
