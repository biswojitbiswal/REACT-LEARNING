import React from 'react'
import { CartContext } from '../context/CartContext'
import { useContext } from 'react'
import { useCart } from '../context/CartContext';

function Items({name, price}) {
    const cart = useCart();
    // console.log(items);
  return (
    <>
      <h2>Product : {name}</h2>
      <h3>Price : {price}</h3>
      <button onClick={() => cart.setItems([...cart.items, {name: name, price : price},])}>Add To Cart</button>
    </>
  )
}

export default Items
