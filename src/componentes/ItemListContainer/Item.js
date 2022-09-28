import './ItemListContainerCss.css'
import './ItemCount/ItemCount'
import ItemCount from './ItemCount/ItemCount';
import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";

function Item ({ product, stock}){

    console.log(stock)
    
    const onAdd = (count) => {
        console.log(`Se agregan ${count} productos`);
    }

    return(
        <div className='card'>
            <div className='info'>
                <div className='imagenContainer'>
                    <img src={product.image} height='200px' className='imagen'/>
                </div>
            </div>
            <div className='nombre'>
                <p className='nombre'>{product.title}</p>
                <p className='price'>${product.price}</p>
            </div>
            <Link to={`/product/${product.id}`}>
                <button>Ver detalles</button>
            </Link>
            <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
        </div>)

    
}

export default Item