import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'
import Student from './Student'
import Todo from './Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home name="Parmanent Home" road="03"></Home>
      <Home name="Persent Home" road="01"></Home>

      <Student name="Rahim" grade="07" score="100"></Student>
      <Student name="Karim" grade="08" score="98"></Student>

      <Todo task="Understands Core Concepts" isDone={true}></Todo>
      <Todo task="try JSX" isDone={false}></Todo>
      <Todo task="Learn React" isDone={true}></Todo>
    </>
  )
}

export default App
