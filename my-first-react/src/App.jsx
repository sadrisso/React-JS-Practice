import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'
import Student from './Student'
import Todo from './Todo'
import Player from './Player'
import Singer from './Singer'
import Counter from './Counter'

function App() {
  const [count, setCount] = useState(0)

  const players = ["tamim", 'sakib', 'imrul']
  const singers = [
    {name: "Mahfuzur", age: 67},
    {name: "Eva", age: 33},
    {name: "Prothom", age: 29}
  ]

  return (
    <>
      <Home name="Parmanent Home" road="03"></Home>
      <Home name="Persent Home" road="01"></Home>

      <Student name="Rahim" grade="07" score="100"></Student>

      <Todo task="Understands Core Concepts" isDone={true}></Todo>
      <Todo task="try JSX" isDone={false}></Todo>
      <Todo task="Learn React" isDone={true}></Todo>

      {players.map(player => <Player name={player}></Player>)}

      {singers.map(singer => <Singer singer={singer}></Singer>)}

      <Counter></Counter>

    </>
  )
}

export default App
