import React from "react";
import Icono from "./Icono";
import CartWidget from "./CartWidget";
import "./Header.css";
import { Link } from "react-router-dom";
import Buscador from "./Buscador";

function Header() {
  const categories = [
    { id: 0, title: "Electronics", route: "/category/electronics" },
    { id: 1, title: "Jewelery", route: "/category/jewelery" },
    { id: 2, title: "Men's clothing", route: "/category/men's clothing" },
    { id: 3, title: "Women's clothing", route: "/category/women's clothing" },
  ];

  return (
    <div className="Header">
      <Link to='/' className="BrandLink">
        <Icono/>
      </Link>
      <Buscador categories={categories}/>
      <Link to='/cart' className="CartLink">
        <CartWidget/>
      </Link>
    </div>
  );
}

export default Header;