import React, {useState, useContext} from 'react'
import { Context } from "./../Context/CartContext"
import "./Cart.css"

function CartItem( producto ) {

  const { removeItem } = useContext(Context)

  const eliminar = (productoEliminado) =>{
    removeItem(productoEliminado.producto)
    console.log(productoEliminado)
  }

  const cartReset = (R) =>{
    removeItem(R)
  }

  return (
    <div className='ItemCart'>
      <img src={producto.producto.producto.image} className="ItemCartImage"/>
      <h4 className='ItemCartTitle'>{producto.producto.producto.title}</h4>
      <div>
        <p>${producto.producto.producto.price}</p>
        <p>Cantidad: {producto.producto.count}</p>
        <button onClick={ () => eliminar(producto.producto) } >Eliminar</button> 
      </div>
    </div>
  )
}

export default CartItem