import React, {useState} from 'react';
import './../ItemListContainerCss.css'

const ItemCount = ({ initial, stock, onAdd }) => {

    const [count,setcount] = useState(initial)

    const restar = ()=>{
        if(count > 1){
            setcount(count - 1)
        }
    }

    const sumar = ()=>{
        if(count < stock){
            setcount(count + 1)
        }
    }

    return (
        <>
            <div className='contador'>
                <button onClick={restar} className='boton'>-</button>
                <div className='count'>{count}</div>
                <button onClick={sumar} className='boton'>+</button>
            </div>
            <div className='agregarContainer'>
                <button onClick={()=>onAdd(count)}  className='botonAgregar'>Agregar al carrito</button>
            </div>
        </>)
}
export default ItemCount;