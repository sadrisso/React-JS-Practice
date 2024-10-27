
import './App.css'
import Navbar from './components/Navbar/Navbar';

function App() {

  const items = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Service", path: "/service" },
    { id: 4, name: "Product", path: "/product" },
    { id: 5, name: "Contact", path: "/contact" }
  ];


  return (
    <>
      <div className='list-none flex justify-between bg-slate-400 py-5 px-10'>
        <nav className='flex'>
          {items.map((item, i) => <Navbar key={i} item={item}/>)}
        </nav>
        <h2>Logo</h2>
      </div>
    </>
  )
}

export default App
