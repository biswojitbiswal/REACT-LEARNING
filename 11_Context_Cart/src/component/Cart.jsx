import React from 'react'
// import { CartContext } from '../context/CartContext'
import { useCart } from '../context/CartContext';

function Cart() {
    const cart = useCart();

    const total = cart.items.reduce((a, b) => a + b.price, 0);
  return (
    <>
      <h1>Cart Page</h1>
      {
        cart && cart.items.map(item => <h2>{item.name} = {item.price}</h2>)
      }
      <h3>Total = {total}</h3>
    </>
  )
}

export default Cart
