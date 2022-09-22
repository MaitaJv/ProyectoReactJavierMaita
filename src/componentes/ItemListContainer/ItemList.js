import './ItemListContainerCss.css'
import './ItemCount/ItemCount'
import React from 'react';
import Item from './Item';

function ItemList ({ products }){

    return(
        <div className='ItemListcontainer'>
            {products.map((product) =>
                <Item key={product.id} product={product} stock={Math.floor(Math.random() * 50)}/>
            )}
        </div>
    )
}

export default ItemList