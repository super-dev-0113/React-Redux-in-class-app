import React, { Component } from 'react'
import Loading from '../ProductList/Loading'
import './productView.css'

class ProductView extends Component {
  componentDidMount() {

  }

  render() {
    return true ? (
      <Loading />
    ) : (
      <div className="container">
        <h1 className="product-view-name">PRODUCT NAME</h1>
        <p className="product-price">$ PRODUCT PRICE</p>
        <p className="product-description">PRODUCT DESC</p>
        <button>
          BACK TO PRODUCTS
        </button>
      </div>
    )
  }
}

export default ProductView