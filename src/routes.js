import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ProductListContainer from './components/ProductList/ProductListContainer'
import Cart from './components/Cart/Cart'
import ProductView from './components/ProductView/ProductView'

export default (
  <Switch>
    <Route exact path="/" component={ProductListContainer} />
    <Route path="/cart" component={Cart} />
    <Route path="/product/:id" component={ProductView} />
  </Switch>
)
