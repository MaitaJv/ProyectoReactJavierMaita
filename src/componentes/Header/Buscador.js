import React from 'react'
import NavBar from './NavBar'
import { AiOutlineSearch } from "react-icons/ai";

function Buscador( {categories} ) {
  return (
    <div className='Buscador'>
        <div className='Search'>
            <input type={Text} className='Input'/>
            <AiOutlineSearch/>
        </div>
        <NavBar categories={categories}/>
    </div>
  )
}

export default Buscador