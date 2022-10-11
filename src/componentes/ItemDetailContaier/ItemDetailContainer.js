import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import {API} from './../API/Api'
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
        })
        .catch(() => {
            console.log("ERROR");
        })
        .finally(() => {
            setLoading(false);
        });




        // const url = `${API.PRODUCTO}${id}`;
        // const GetItem = async ()=> {
        //     try{
        //         let promesa = await fetch(url)
        //         let respuesta = await promesa.json()
        //         setProducto(respuesta)
        //         console.log(respuesta);
        //     }
        //     catch{
        //         console.log("todo mal");
        //     }
        //     finally{
        //         setLoading(false)
        //     }
        // }

        // GetItem()

    },[id])

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