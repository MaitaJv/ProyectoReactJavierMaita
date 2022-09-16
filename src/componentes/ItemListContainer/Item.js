import './ItemListContainerCss.css'
import './ItemCount/ItemCount'
import GrowExample from 'react-bootstrap/Spinner';
import ItemCount from './ItemCount/ItemCount';
import React, {useState, useEffect} from 'react';
import camperita from './../../media/campRustica.jfif'

function Item ({ product }){
    
    const onAdd = (count) => {
        console.log(`Se agregan ${count} productos`);
    }

    return(
        <div className='ItemListcontainer'>
             <div className='card'>
                <div className='info'>
                    <div className='imagenContainer'>
                        <img src={camperita} height='300px' className='imagen'/>
                    </div>
                </div>
                <div className='nombre'>
                    <h4 className='nombre'>{product.name}</h4>
                    <p className='price'>${product.price}</p>
                </div>
                <ItemCount stock={product.stock} initial={1} onAdd={onAdd}/>
            </div>
        </div>)

    
}

export default Item