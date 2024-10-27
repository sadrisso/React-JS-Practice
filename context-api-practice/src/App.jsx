import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { counterContext } from './context/context'

function App()
{
  const [count, setCount] = useState(0)

  return (
    <>
      <counterContext.Provider value={{count, setCount}}>
        <Navbar/>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            single {count}
          </button>
        </div>
      </counterContext.Provider>
    </>
  )
}

export default App
