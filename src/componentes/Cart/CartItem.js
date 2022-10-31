import React, {useState, useContext} from 'react'
import { Context } from "./../Context/CartContext"

function CartItem( producto ) {

  const { removeItem } = useContext(Context)

  const eliminar = (productoEliminado) =>{
    removeItem(productoEliminado.producto)
    console.log(productoEliminado)
  }

  return (
    <div className='ItemCart'>
      <div className='ItemCartImageContainer'>
        <img src={producto.producto.producto.image} className="ItemCartImage"/>
      </div>
      <div className='ItemCartTitleContainer'>
        <h4 className='ItemCartTitle'>{producto.producto.producto.title}</h4>
      </div>
      <div className='ItemCartPricesContainer'>
        <div className='ItemCartPricesText'>
          <p className='margin0'>${producto.producto.producto.price}</p>
          <p className='margin0'>Cantidad: {producto.producto.count}</p>
        </div>
        <button className='DeleteCrossBtn' onClick={ () => eliminar(producto.producto) } >
          <img className='DeleteCross' src='https://firebasestorage.googleapis.com/v0/b/proyecto-coder-javiermaita.appspot.com/o/cross-sign.png?alt=media&token=140c5b80-66c2-4408-a684-4be0f5ea29af'/>
        </button> 
      </div>
    </div>
  )
}

export default CartItem