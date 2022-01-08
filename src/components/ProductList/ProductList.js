import React, { Component } from 'react'
import Product from './Product'
import Loading from './Loading'
import './productList.css'

class ProductList extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <div className="products-list">
          <Loading />
      </div>
    )
  }
}

export default ProductList
