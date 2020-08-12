import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <h3><a href="/">Logo</a></h3>
      <ul className="nav-links">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/shop">Shop</Link></li>
      </ul>
    </nav>
  )
}

export default Nav
