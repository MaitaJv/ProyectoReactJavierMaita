import React from 'react'
import { Link } from 'react-router-dom'

const ItemAfterCount = () => {
  return (
    <Link to="/cart">
        <button className='btn'>Finalizar compra</button>
    </Link>
  )
}

export default ItemAfterCount