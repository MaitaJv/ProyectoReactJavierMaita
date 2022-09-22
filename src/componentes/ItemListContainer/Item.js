import './ItemListContainerCss.css'
import './ItemCount/ItemCount'
import ItemCount from './ItemCount/ItemCount';
import React, {useState, useEffect} from 'react';

function Item ({ product, stock}){

    console.log(stock)
    
    const onAdd = (count) => {
        console.log(`Se agregan ${count} productos`);
    }

    return(
        <div className='ItemListcontainer'>
             <div className='card'>
                <div className='info'>
                    <div className='imagenContainer'>
                        <img src={product.image} height='300px' className='imagen'/>
                    </div>
                </div>
                <div className='nombre'>
                    <h4 className='nombre'>{product.name}</h4>
                    <p className='price'>${product.price}</p>
                </div>
                <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
            </div>
        </div>)

    
}

export default Item