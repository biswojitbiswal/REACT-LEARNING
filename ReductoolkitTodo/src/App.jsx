import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from "./components/AddTodo"
import Todo from "./components/Todo"

function App() {


  return (
    <div>
      <h1>Learning Redux-Toolkit</h1>
      <AddTodo />
      <Todo />
    </div>
  )
}

export default App
