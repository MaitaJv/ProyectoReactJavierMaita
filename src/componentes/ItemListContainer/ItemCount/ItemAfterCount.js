import React from 'react'
import { Link } from 'react-router-dom'
import '../ItemListContainerCss.css'

const ItemAfterCount = () => {
  return (
    <div className='agregarContainer'>
      <Link to="/cart">
        <button className='btn'>Finalizar compra</button>
      </Link>
    </div>
    
  )
}

export default ItemAfterCount