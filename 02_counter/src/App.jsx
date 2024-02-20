import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {  
    if(counter < 20){
      setCounter(counter + 1);
      // setCounter(counter + 1);
      // setCounter(counter + 1);
      // setCounter(counter + 1);
      // if we want to increase our count 4 times and in this way then it is not working
    }
    else {
      counter = 20;
    }
  }


  // const addValue = () => {  
  //     setCounter(prevCounter => prevCounter + 1);
      //  setCounter(prevCounter => prevCounter + 1);
      // setCounter(prevCounter => prevCounter + 1);
      // setCounter(prevCounter => prevCounter + 1);
      // if we do this then our counter value will be increase 4 times 
  // }

  const removeValue = () => {
    if(counter > 0){
      setCounter(counter - 1);
    }
    else {
      counter = 0;
    }
  }
  


  return (
    <>
      <h1>Hello World</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <p>The Value is : {counter}</p>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value</button>
      <p>The Value is : {counter}</p>
    </>
  )
}

export default App
