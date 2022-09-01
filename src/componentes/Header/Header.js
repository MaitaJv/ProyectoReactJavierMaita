import React from "react";
import Icono from "./icono";
import Carrito from "./Carrito";

import "./Header.css";

function Header() {
    return(
        <div className="NavBar">
            <Icono/>
            <div className="NavsConteiner">
                <a className="enlase">Nosotros</a>
                <a className="enlase">Deseados</a>
                <a className="enlase carrito"><Carrito/></a>
            </div>
        </div>
    );
}

export default Header;