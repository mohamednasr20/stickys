import React from 'react';
import logo from '../../assets/logo.png';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const MyNavbar = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <NavLink to="/">
          <Navbar.Brand className="brand">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
        </NavLink>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/menu">OUR MENU</NavLink>
            <NavLink to="/locations">LOCATIONS</NavLink>
            <NavLink to="/about">ABOUT US</NavLink>
            <NavLink to="/catering">CATERING</NavLink>
          </Nav>

          <NavLink className="btn-link" to="/order">
            <Button variant="warning">ORDER NOW</Button>
          </NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
