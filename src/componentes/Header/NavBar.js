import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Header.css";

function NavBar({categories}) {
  return (
    <div className='NavBar'>
        {categories.map((category) => {
            return <NavLink key={category.id} to={category.route} className='NavLink'>{category.title}</NavLink>
        })}
    </div>
  )
}

export default NavBar