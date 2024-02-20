import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'

function App() {
  return (
    <>
      <h1 className='bg-cyan-50 text-cyan-500 p-3 rounded-xl mb-5'>Tailwind CSS Test</h1>
      <Card username="Biswo" btnText="Click Me" />
      <Card username="Linky" /> 
    </>
  )
}

export default App
