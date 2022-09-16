import './ItemListContainerCss.css'
import './ItemCount/ItemCount'
import React, {useState, useEffect} from 'react';
import ItemList from './ItemList';

const initialProducts = [
    {name:"Campera1", id:0, price:200, stock: 20},
    {name:"Campera2", id:1, price:300, stock: 10},
    {name:"Campera3", id:2, price:400, stock: 15},
    {name:"Campera4", id:3, price:200, stock: 20},
]
    
const promesa = new Promise((res,rej) =>{
    res(initialProducts)
    console.log("5seg")

})

function ItemListContainer(){

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        setTimeout(() => {
            promesa
                .then((data)=>{setProducts(data)})
                .catch(()=>{console.log("esta todo mal")})
                .finally(setLoading(false))
        }, 2000);
        
    }, [])

    return(
        <div className='ItemListcontainer'>
            {
                loading
                ? <p>Loading...</p>
                : <ItemList products={products}/>
            }
        </div>
    );
}

export default ItemListContainer;