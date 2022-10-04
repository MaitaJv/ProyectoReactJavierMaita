import React, {useState, useEffect, useContext} from 'react'
import ItemCount from '../ItemListContainer/ItemCount/ItemCount';
import ItemAfterCount from '../ItemListContainer/ItemCount/ItemAfterCount';
import { Context } from '../Context/CartContext';
import './ItemDetail.css'

const ItemDetail = ({producto, stock}) => {
  const [compra, setCompra] = useState(0)

  const [inCart, setInCart] = useState(0)

  const { addItem } = useContext(Context);

  const onAdd = (count) => {
    setCompra(compra + 1)
    setInCart(inCart + 1)

    addItem(producto, count, inCart)
  }

  return (
    <div className='itemCardPage'>
      <div className='itemCard'>
        <img src={producto.image} className='detailImg'/>
        <div>
          <h4>{producto.title}</h4>
          <p>{producto.description}</p>
          <p>${producto.price}</p>
            {compra > 1?
              <ItemAfterCount/>
              :
              <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
              }
        </div>
      </div>
    </div>
  )
}

export default ItemDetail