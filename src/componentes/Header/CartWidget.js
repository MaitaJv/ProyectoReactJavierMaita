import React, { useContext, useState, useEffect } from "react";
import { Context } from "./../Context/CartContext"
import "./Header.css";

function CartWidget(){

    const { cart } = useContext(Context)

    const [productos, setProductos] = useState(0)

    console.log(cart)

    useEffect(() => {

        let productosAgregados = 0
    
        cart.forEach(element => {
          console.log(element.producto.price)
          console.log(element.count)
          
          productosAgregados += element.count
          console.log(productosAgregados)
        });
    
        setProductos(productosAgregados)
        console.log(cart)
    
      }, [cart])

    return(
        <>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="512"
            height="512"
            viewBox="0 0 512 512"
            className="Carrito"
            >
                <path
                    fill="var(--ci-primary-color, currentColor)"
                    d="M160 96.039L160 128.039 464 128.039 464 191.384 428.5 304.039 149.932 304.039 109.932 16 16 16 16 48 82.068 48 122.068 336.039 451.968 336.039 496 196.306 496 96.039 160 96.039z"
                    className="ci-primary"
                ></path>
                <path
                    fill="var(--ci-primary-color, currentColor)"
                    d="M176.984 368.344a64.073 64.073 0 00-64 64 64 64 0 00128 0 64.072 64.072 0 00-64-64zm0 96a32 32 0 1132-32 32.038 32.038 0 01-32 32zM400.984 368.344a64.073 64.073 0 00-64 64 64 64 0 00128 0 64.072 64.072 0 00-64-64zm0 96a32 32 0 1132-32 32.038 32.038 0 01-32 32z"
                    className="ci-primary"
                ></path>
            </svg>
            {
                productos !== 0
                ?
                <p>{productos}</p>
                :
                <p className="Nada"></p>
            }
        </>
    );
}

export default CartWidget;