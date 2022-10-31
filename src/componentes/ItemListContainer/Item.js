import './ItemListContainerCss.css'
import './ItemCount/ItemCount'
import ItemCount from './ItemCount/ItemCount';
import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";

function Item ({ product, stock}){

    console.log(stock)

    return(
        <div className='card'>
            <div className='info'>
                <div className='imagenContainer'>
                    <img src={product.image} height='150px' className='imagen'/>
                </div>
            </div>
            <div className='softInfo'>
                <p className='nombre'>{product.title}</p>
                <p className='price'>${product.price}</p>
            </div>
            <div className='viewDetail'>
                <Link to={`/product/${product.id}`}>
                    <button className='detailBtn'>Ver detalles</button>
                </Link>
            </div>
        </div>
    )

    
}

export default Item