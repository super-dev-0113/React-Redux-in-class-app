import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

// We'll also want the img to be clickable and take the user to landing

const Header = (props) => {
  return (
    <header className="header">
      <div className="logo">
        <div className="first-line-hold">
          <img
            src="https://pngimg.com/uploads/letter_p/letter_p_PNG83.png"
            className="fancy-p"
            alt="P"
          />
          <p>ARTIAL</p>
        </div>
        <p>FOODS</p>
        <p>MARKET</p>
      </div>

      <h1 className="user">WELCOME, GUEST!</h1>

      <Link className="cart-hold" to="/cart">
        <img
          src="https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG37.png"
          alt="cart"
          className="cart"
        />
        <p className="cart-notification">0</p>
      </Link>
    </header>
  )
}

export default Header
