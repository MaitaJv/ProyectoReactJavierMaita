import React, {useState, useEffect} from 'react'
import ItemCount from '../ItemListContainer/ItemCount/ItemCount';
import ItemAfterCount from '../ItemListContainer/ItemCount/ItemAfterCount';
import './ItemDetail.css'

const ItemDetail = ({producto, stock}) => {
  const [compra, setCompra] = useState(0)

  const onAdd = (count) => {
    setCompra(1)
    console.log(`Se agregan ${count} productos`);
  }

  return (
    <div className='itemCardPage'>
      <div className='itemCard'>
        <img src={producto.image} className='detailImg'/>
        <div>
          <h4>{producto.title}</h4>
          <p>{producto.description}</p>
          <p>${producto.price}</p>
          {
            compra?
              <ItemAfterCount />
            :
              <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
          }
        </div>
      </div>
    </div>
  )
}

export default ItemDetail