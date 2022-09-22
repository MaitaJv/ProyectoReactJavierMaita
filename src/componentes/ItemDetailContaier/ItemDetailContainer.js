import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'

function ItemDetailContainer () {

    const [producto, setProducto] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{

        const GetItem = async ()=> {
            try{
                let promesa = await fetch('https://fakestoreapi.com/products/1')
                let respuesta = await promesa.json()
                setProducto(respuesta)
                console.log(respuesta);
            }
            catch{
                console.log("todo mal");
            }
            finally{
                setLoading(false)
            }
        }

        GetItem()

    },[])

    return (
        <div>
            {
                loading
                ? <p>Loading...</p>
                : <ItemDetail producto={producto} stock={Math.floor(Math.random() * 50)}/>
            }
        </div>
    )
}

export default ItemDetailContainer