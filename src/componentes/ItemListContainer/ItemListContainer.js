import './ItemListContainerCss.css'
import './ItemCount/ItemCount'
import React, {useState, useEffect} from 'react';
import ItemList from './ItemList';
import { useParams } from "react-router-dom";
import { API } from "./../API/Api"

function ItemListContainer(){

    const { id } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const url = id ? `${API.CATEGORY}${id}` : API.LIST;
        const GetProduct = async ()=>{
            try{
                let promesa = await fetch(url)
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

    }, [id])

    return(
        <div className='ItemListcontainer'>
            {
                loading
                ? <p>Loading...</p>
                : <ItemList products={products} categoria={id}/>
            }
        </div>
    );
}

export default ItemListContainer;