import React, {useState} from 'react';
import './../ItemListContainerCss.css'
import camperita from './../../../media/campRustica.jfif'

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
        <div className='card'>
            <div className='info'>
                <div className='imagenContainer'>
                    <img src={camperita} height='300px' className='imagen'/>
                </div>
            </div>
            <div className='nombre'>
                <h4>Campera Rustica</h4>
            </div>
            <div className='contador'>
                <button onClick={restar} className='btn'>-</button>
                <div>{count}</div>
                <button onClick={sumar} className='btn'>+</button>
            </div>
            <div className='agregarContainer'>
            <button onClick={()=>onAdd(count)}  className='btn'>Agregar al carrito</button>
            </div>
        </div>
    )
}
export default ItemCount;