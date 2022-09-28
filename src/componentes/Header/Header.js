import React from "react";
import Icono from "./icono";
import CartWidget from "./CartWidget";
import NavBar from "./NavBar";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  const categories = [
    { id: 0, title: "electronics", route: "/category/electronics" },
    { id: 1, title: "jewelery", route: "/category/jewelery" },
    { id: 2, title: "men's clothing", route: "/category/men's clothing" },
    { id: 3, title: "women's clothing", route: "/category/women's clothing" },
  ];

  return (
    <Navbar bg="light" expand="lg">
      <Container className="NavBar-Conteiner">
        <Link to="/">
          <Navbar.Brand href="#home" className="Logo"><Icono/></Navbar.Brand>
        </Link>
        <Navbar.Collapse id="basic-navbar-nav" className="NavBarMe">
          <Nav className="me-auto links">
              <NavBar categories={categories}/>
              <Nav.Link href="#link" className="Carrito"><CartWidget/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;