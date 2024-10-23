
import './App.css'
import Players from './components/Players/Players'
import Header from './components/Header/Header'
import SelectedPlayer from './components/SelectedPlayer/SelectedPlayer'
import { useState } from 'react'



function App() {

  const [players, setPlayers] = useState([]);


  const handleAddPlayers = player => {
    const newPlayers = [...players, player];
    setPlayers(newPlayers);
  }

  const handleRemovePlayer = (id) => {
    const remainingPlayers = players.filter((player) => player.id !== id);
    setPlayers(remainingPlayers);
  }


  return (
    <>
      <div>
        <Header></Header>
      </div>
      <div className='flex'>
        <Players handleAddPlayers={handleAddPlayers} handleRemovePlayer={handleRemovePlayer}></Players>
        <SelectedPlayer players={players}></SelectedPlayer>
      </div>
    </>
  )
}

export default App
