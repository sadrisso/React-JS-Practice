import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Posts from './Posts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3>React Core Concepts Recap</h3>
      <ol>
        <li>Component</li>
        <li>JSX</li>
        <li>Props</li>
        <li>Event Handler</li>
        <li>State Control</li>
        <li>Data Loading</li>
      </ol>
      <hr />

      <Posts></Posts>
    </>
  )
}

export default App
