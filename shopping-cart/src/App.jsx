// import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import './App.css'
import { ProductList } from './pages/productList'
import { CartList } from './pages/cartList'
import { ProductDetails } from './pages/productDetails'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={ <ProductList/> } />
        <Route path="/product-details/:id" element={ <ProductDetails/> } />
        <Route path="/cart-list" element={ <CartList/> } />
      </Routes>
    </>
  )
}

export default App
