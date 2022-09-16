import './ItemListContainerCss.css'
import './ItemCount/ItemCount'
import React, {useState, useEffect} from 'react';
import Item from './Item';

function ItemList ({ products }){

    return(
        <div className='ItemListcontainer'>
            {products.map((product) =>
                <Item key={product.id} product={product} />
            )}
        </div>
    )
}

export default ItemList