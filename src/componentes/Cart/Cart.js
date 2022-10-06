import React, {useContext, useState , useEffect} from 'react'
import { Link } from "react-router-dom";
import { Context } from '../Context/CartContext'
import CartItem from './CartItem';

const Cart = () => {

  const { cart, reset } = useContext(Context);

  const [price, setPrice] = useState(0)
  
  const limpiar = () =>{
    reset()
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
      {
        cart.length !== 0
        ?
        (
          cart.map((producto) =>
          <CartItem key={producto.id} producto={producto}/>)
        )
        :
        (
          <>
            <p>Tu carrito esta vacio</p>
            <Link to="/">
              Home
            </Link>
          </>
        )
      }
      <p>Total: ${price}</p>
      
      <button onClick={() => limpiar()}>Reset</button>
    </div>
  )
}

export default Cart