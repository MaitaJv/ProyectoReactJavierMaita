import './ItemListContainerCss.css'
import './ItemCount/ItemCount'
import React, {useState, useEffect} from 'react';
import ItemList from './ItemList';

function ItemListContainer(){

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const GetProduct = async ()=>{
            try{
                let promesa = await fetch("https://fakestoreapi.com/products?limit=4")
                let data = await promesa.json()
                setProducts(data)
                console.log(data)
            }
            catch{
                console.error("error")
            }
            finally{
                setLoading(false)
            }
        }

        GetProduct()

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