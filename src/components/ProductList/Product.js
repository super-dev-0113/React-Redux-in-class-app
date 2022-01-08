import React from 'react'
import { Link } from 'react-router-dom'
import './productList.css'

const Product = (props) => {
  return (
    <div className="product">
      <Link>
        PRODUCT NAME
      </Link>

      <p>PRODUCT PRICE</p>
      <p>PRODUCT DESC</p>
      <button
        className="add-to-cart"
      >
        Add to cart
      </button>
    </div>
  )
}
export default Product
