import Header from './components/Header/Header'
import Team from './components/Team/Team'
import Teams from './components/Teams/Teams'
import './App.css'

function App() {

  return (
    <>
      <div>
        <Header></Header>
      </div>
      <div className='container mx-auto my-5'>
        <Teams></Teams>
        <Team></Team>
      </div>
    </>
  )
}

export default App
