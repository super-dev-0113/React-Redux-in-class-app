import React, { Component } from 'react'
import './cart.css'

class Cart extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="cart-title"> YOUR CART </h1>

        <div className="cart-hold">
          This is the cart
        </div>
        <h2 className="total">TOTAL: NULL</h2>
      </div>
    )
  }
}

export default Cart
