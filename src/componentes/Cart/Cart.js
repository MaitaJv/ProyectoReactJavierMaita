import React, {useContext, useState , useEffect} from 'react'
import { Link } from "react-router-dom";
import { Context } from '../Context/CartContext'
import CartItem from './CartItem';
import Formulario from './Formulario';
import { db } from '../../firebase/Firebase'
import { collection, addDoc, serverTimestamp, doc, updateDoc } from "firebase/firestore";
import './Cart.css'

const Cart = () => {

  const { cart, reset } = useContext(Context);

  const [price, setPrice] = useState(0)
  const [form, setForm] = useState(0)
  const [comprado, serComprado] = useState(0)
  const [compraId, setCompraId] = useState("")
  const [user, setUser] = useState([])
  
  const limpiar = () =>{
    reset()
  }

  const finalizarCompra = ()=>{
    const ventasCollection = collection(db,"ventas");
    addDoc(ventasCollection, {
      comprador: user,
      items: cart,
      date: serverTimestamp(),
      total: price
    })
    .then(result=>{
      console.log(result.id)
      setCompraId(result.id)
      cart.forEach(producto => {
        actualizarStock(producto)
      });
      limpiar();
    })
    serComprado(1)
  }

  const actualizarStock = (producto) =>{
    const updateStock = doc(db, "productos", producto.producto.id)
    updateDoc(updateStock,{stock:(producto.producto.stock - producto.count)})
  }

  const formState = () => {
    setForm(1)
  }

  const usuarioDatos = (data) => {
    const comprador = {
      nombre: data.name,
      apellido: data.surname,
      email: data.mail,
      tarNum: data.tarNum,
      tarName: data.tarName,
      tarCode: data.tarCode
    };

    setUser(comprador)
  }

  useEffect(() => {

    let precioTotal = 0

    cart.forEach(element => {
      console.log(element.producto.price)
      console.log(element.count)
      
      precioTotal += (element.producto.price)*element.count
      console.log(precioTotal)
    });

    setPrice(precioTotal)
    console.log(cart)

  }, [cart])

  return (
    <div className='CartPage'>
      <div>
        {
          cart.length !== 0
          ?
          (
            <div className='CartItemContainer'>
              {cart.map((producto) => <CartItem key={producto.id} producto={producto}/>)}
              <button onClick={formState}>Finalizar Compra</button>
              {form ? <Formulario usuarioDatos={usuarioDatos} finalizarCompra={finalizarCompra}/> : <></>}
            </div>
          )
          :
          (
            <div className='cartState'>
              {comprado ?
              <p>Gracias por su compra, la Id de su compra es: {compraId}</p> 
              : 
              <></>
              }
              <p>Tu carrito esta vacio</p>
              <Link to="/">
                Home
              </Link>
            </div>
          )
        }
      </div>
      <div className='totalContainer'>
        <div>
          <p className='Price'>Total: ${price}</p>
        </div>
      </div>
      <button onClick={() => limpiar()}>Reset</button>
    </div>
  )
}

export default Cart