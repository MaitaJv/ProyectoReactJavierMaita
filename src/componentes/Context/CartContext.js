import React, {createContext, useState} from 'react'

export const Context = createContext();

function CartContext({children}) {
    const [cart, setCart] = useState([])

    const addItem = (producto, count)=>{
        const isInCart = cart.findIndex(itemCart => itemCart.producto.id == producto.id)
        console.log(isInCart)
        if(isInCart !== -1){
            const newCart = cart.filter(item => item !== cart[isInCart])
            setCart([{producto, count}, ...newCart])
            console.log("duplicado")
            console.log(cart)
        }else{
            setCart([...cart, {producto, count }])
            console.log(cart)
        }
    }

    const removeItem = (producto)=>{    
        const newCart = cart.filter(oldItem => oldItem.producto !== producto)
        setCart([...newCart])
        console.log(producto)
        console.log("Context")
        console.log(newCart)
    }

    const reset = ()=>{
        setCart([])
    }

  return (
    <Context.Provider value={{addItem, removeItem, reset, cart}}>
        {children}
    </Context.Provider>
  )
}

export default CartContext