import React from 'react'
import ItemCount from '../ItemListContainer/ItemCount/ItemCount';
import './ItemDetail.css'

const ItemDetail = ({producto, stock}) => {

  const onAdd = (count) => {
    console.log(`Se agregan ${count} productos`);
  }

  return (
    <div className='itemCard'>
        <img src={producto.image} height={200}/>
        <h4>{producto.title}</h4>
        <p>{producto.description}</p>
        <p>{producto.price}</p>
        <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
    </div>
  )
}

export default ItemDetail