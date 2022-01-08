import React from 'react'
import Header from './components/Header/Header'
import routes from './routes'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      {routes}
    </div>
  )
}

export default App
