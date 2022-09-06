import React from "react";
import Icono from "./icono";
import Carrito from "./Carrito";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Header.css";

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container className="NavBar-Conteiner">
        <Navbar.Brand href="#home" className="Logo"><Icono/></Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto links">
                <Nav.Link href="#home" className="enlase">Nosotros</Nav.Link>
                <Nav.Link href="#link" className="enlase">Deseados</Nav.Link>
                <Nav.Link href="#link" className="Carrito"><Carrito/></Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;