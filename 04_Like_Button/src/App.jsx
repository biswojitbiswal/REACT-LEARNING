import { useState } from 'react'
import './App.css'

function App() {
  const [click, setClick] = useState(false)
  const [count, setCount] = useState(0)

  const likeStyle = {color : "red"}

  const likeBtn = () => {
    setClick(!click);
    // console.log(!click)
    
    if(!click){
      setCount(count + 1);
    }

  }

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-3xl text-center mb-4 text-red-400">Like Me</h2>
        <div className="text-5xl mb-3 text-red-400" onClick={likeBtn}>{click ? <i className="fa-solid fa-heart" style={likeStyle}></i> : <i className="fa-regular fa-heart"></i>}</div>
        <p className='text-2xl text-red-400'>Liked by : {count}</p>
      </div>
    </>
  )
}

export default App
