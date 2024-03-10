import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [state, setState] = useState({count: 5, theme: "blue"});
  
  let decrement = () => {
    setState((prevstate) => {
      return {...prevstate, count: prevstate.count - 1};
    })
  }

  let increament = () => {
    setState((prevstate) => {
      return {...prevstate, count: prevstate.count + 1}
    })
  }

  return (
    <>
      <button onClick={decrement}>-</button>
      &nbsp;&nbsp;&nbsp;
      <span>{state.count}</span>
      &nbsp;
      <span>{state.theme}</span>
      &nbsp;&nbsp;&nbsp;
      <button onClick={increament}>+</button>
    </>
  )
}

export default App
