import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
        <NavLink to='/'  >Home</NavLink>
        </li>
        <li>
        <NavLink to='/About-Us'>About Us</NavLink>
        </li>
        <li>
          <Link to='/galery' >
            Galery
          </Link>
        </li>
        <li>
          <NavLink to='/ProductScreen'  >Product</NavLink></li>
      </ul>
    </div>
  )
}

export default Navbar
