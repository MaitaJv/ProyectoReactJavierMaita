import "./Carrusel.css"
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carrusel() {

    const [producto, setProducto] = useState([])
    const [loading, setLoading] = useState(true);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };

    useEffect(() => {
        const urlE = "https://fakestoreapi.com/products/9"
        const urlJ = "https://fakestoreapi.com/products/5"
        const urlM = "https://fakestoreapi.com/products/2"
        const urlW = "https://fakestoreapi.com/products/15"

        const getItem1 = async () =>{
            try{
                const promesaE = await fetch(urlE)
                const promesaJ = await fetch(urlJ)
                const promesaM = await fetch(urlM)
                const promesaW = await fetch(urlW)

                const dataE = await promesaE.json()
                const dataJ = await promesaJ.json()
                const dataM = await promesaM.json()
                const dataW = await promesaW.json()

                const productos = [dataE, dataJ, dataM, dataW]

                setProducto(productos)

                console.log(dataE)
                console.log(dataJ)
                console.log(dataM)
                console.log(dataW)

                console.log(productos)

                console.log(productos[1])
            }
            catch{
                console.error("no se encontro api")
            }
            finally{
                setLoading(false)
                console.clear()
            }
        }

        getItem1()
    }, [])
    

    return (
        loading
        ?
        <div className="SpinnerPageCarrusel">
            <Spinner animation="grow" />
        </div>
        :
        <div className="CategoryContainer">
            <h3>Categorias</h3>
            <Slider {...settings}>
                {producto.map((product) =>
                    <div className="ImgProductContainer">
                        <div className="ImgProductBackground">
                            <Link to={`/category/${product.category}`}>
                                <img src={product.image} key={product.id} className="ImgProduct"/>
                            </Link>
                        </div>
                        <p>{product.category}</p>
                    </div>
                )}
            </Slider>
        </div>
    )
}

export default Carrusel