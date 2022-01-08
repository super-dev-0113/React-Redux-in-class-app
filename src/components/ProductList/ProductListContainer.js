import React, { Component } from 'react'
import ProductList from './ProductList'
import './productList.css'

class ProductListContainer extends Component {
  constructor() {
    super()
    this.state = {
      userInput: '',
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  render() {
    return (
      <div className="container">
        <h1 className="product-list-head">
          'Log in to see products'
        </h1>
        <div className="form">
        <input
            name="userInput"
            placeholder="Username"
            onChange={this.handleChange}
        />
        <button>
            Sign In
        </button>
        </div>
      </div>
    )
  }
}

export default ProductListContainer
