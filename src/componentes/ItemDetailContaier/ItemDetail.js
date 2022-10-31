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
    setCompra(1)
    setInCart(inCart + 1)

    addItem(producto, count, inCart)
  }

  return (
    <div className='itemCardPage'>
      <div className='itemCard'>
        <div className='itemInfoContainer'>
          <div className='detailImgContainer'>
            <img src={producto.image} className='detailImg'/>
          </div>
          <div className='itemInfo'>
            <h4>{producto.title}</h4>
            <div>
              <p className='precio'>${producto.price}</p>
              <p>Stock disponible: {stock}</p>
              {compra?
                <ItemAfterCount/>
                :
                <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
                }
            </div>
          </div>
          <div className='description'>
            <h5>Descripcion del producto</h5>
            <p>{producto.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail