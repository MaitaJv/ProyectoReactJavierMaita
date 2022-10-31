import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from "react-router-dom";
import { db } from "../../firebase/Firebase";
import { doc, getDoc, collection } from "firebase/firestore";

function ItemDetailContainer () {

    const { id } = useParams();
    const [producto, setProducto] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{

        const productCollection = collection(db, "productos");
        const refDoc = doc(productCollection, id);
        getDoc(refDoc)
        .then((result) => {
            setProducto({
            id: result.id,
            ...result.data(),
            });
            console.log(producto.stock)
        })
        .catch(() => {
            console.log("ERROR");
        })
        .finally(() => {
            setLoading(false);
        });

    },[id])

    return (
        <div>
            {
                loading
                ? <p>Loading...</p>
                : <ItemDetail producto={producto} stock={producto.stock}/>
            }
        </div>
    )
}

export default ItemDetailContainer