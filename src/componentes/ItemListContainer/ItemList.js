import './ItemListContainerCss.css'
import './ItemCount/ItemCount'
import React from 'react';
import Item from './Item';

function ItemList ({ products, categoria}){

    return(
        <div className='page'>
            {categoria ? <h3 className='pageTitle'>{categoria}</h3> : <h3 className='pageTitle'>Todos los productos</h3>}
            <div className='ItemListcontainerGrid'>
                {products.map((product) =>
                    <Item key={product.id} product={product} stock={Math.floor(Math.random() * 50)}/>
                )}
            </div>
        </div>
    )
}

export default ItemList