import { useState } from 'react'
import './App.css'
import Items from './component/Items'
import Cart from './component/Cart'
import { CartContextProvider } from './context/CartContext'

function App() {


  return (
    <CartContextProvider>
      <Items name="HP X-360" price = {60000} />
      <Items name="INFINIX NOTE 11" price = {11000} />
      <Items name="PEN-DRIVE" price = {3000} />
      <Cart />
    </CartContextProvider>
  )
}

export default App
