import React from 'react'

function CartItem({producto, removeItem}) {
  return (
    <>
        <h1>{producto.producto.title}</h1>
        <button onClick={() => removeItem(producto)}>Quitar</button>
    </>
  )
}

export default CartItem