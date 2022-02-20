import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function Navigation() {
    return (
      <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark">
        <Container >
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="w-100 d-flex justify-content-center">
              <Nav.Link href="/">KfzService</Nav.Link>
              <Nav.Link href="/services">Services</Nav.Link>
              <Nav.Link href="/impressum">Impressum</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default Navigation;

/* <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark">
  <Container>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav>
        <Nav.Link href="/">KfzService</Nav.Link>
        <Nav.Link href="/services">Services</Nav.Link>
        <Nav.Link href="/impressum">Impressum</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar> */