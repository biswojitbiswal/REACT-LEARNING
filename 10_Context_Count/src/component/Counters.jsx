import React, { useContext } from 'react'
import { CountContext } from '../context/CountContext';
import Counter from './Counter';

function Counters() {
  const { count } = useContext(CountContext);
  return (
    <div>
      <h1>Count : {count}</h1>
      <Counter />
      <br />
      <Counter />
      <br />
      <Counter />
    </div>
  )
}

export default Counters
