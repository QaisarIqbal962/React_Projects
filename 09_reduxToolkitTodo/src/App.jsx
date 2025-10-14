import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/TodosTemp'

function App() {
  
  return (
    <>
     <h2 className="text-3xl font-bold text-green-700 text-center mb-6 underline">
  Learn about Redux Toolkit
</h2>

      <AddTodo />
      <Todos />
    </>
  )
}

export default App