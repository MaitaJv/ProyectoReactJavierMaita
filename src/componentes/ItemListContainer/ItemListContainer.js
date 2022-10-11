import './ItemListContainerCss.css'
import './ItemCount/ItemCount'
import React, {useState, useEffect} from 'react';
import ItemList from './ItemList';
import Carrusel from '../Carrusel/Carrusel';
import { Form, useParams } from "react-router-dom";
import { API } from "./../API/Api"
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { db } from "../../firebase/Firebase";
import { getDocs, collection, query, where } from "firebase/firestore";

function ItemListContainer(){

    const { id } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const productsCollection = collection(db, "productos");
        const q = query(productsCollection, where("category", "==", `${id}`));

        const url = id ? q : productsCollection

        getDocs(url)
        .then((data) => {
            const lista = data.docs.map((product) => {
            return {
                ...product.data(),
                id: product.id,
            };
            });
            setProducts(lista);
        })
        .catch(() => {
            console.error("error")
        })
        .finally(() => {
            setLoading(false);
        });




        // const url = id ? `${API.CATEGORY}${id}` : API.LIST;
        // const GetProduct = async ()=>{
        //     try{
        //         setLoading(true)
        //         let promesa = await fetch(url)
        //         let data = await promesa.json()
        //         setProducts(data)
        //         console.log(data)
        //     }
        //     catch{
        //         console.error("error")
        //     }
        //     finally{
        //         setLoading(false)
        //     }
        // }

        // GetProduct()

    }, [id])

    return(
        <div className='ItemListcontainer'>
            {
                loading
                ? (
                    <div className='SpinnerPage'>
                        <Spinner animation="grow" />
                    </div>
                ):
                (
                    id 
                    ? (
                        <ItemList products={products} categoria={id}/>
                    ):
                    (
                        <>
                            <Carrusel/>
                            <ItemList products={products} categoria={id}/>
                        </>
                    )
                )
            }
        </div>
    );
}

export default ItemListContainer;