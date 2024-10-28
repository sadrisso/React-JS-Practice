
import { useState } from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import { HiMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import PriceOptions from './components/PriceOptions/PriceOptions';
import LineChart from './components/LineChart/LineChart';



function App() {

  const [open, setOpen] = useState(false)

  const items = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Service", path: "/service" },
    { id: 4, name: "Product", path: "/product" },
    { id: 5, name: "Contact", path: "/contact" }
  ];


  return (
    <>
      <div className='list-none bg-slate-400 py-5 px-10'>

        <nav className=''>
          <div onClick={() => setOpen(!open)} className='md:hidden text-3xl'>
            {open ? <HiMenu /> :  <RxCross2 />}
          </div>
          <div className={`${open ? "" : "hidden"}  text-left absolute md:static md:flex items-center rounded-lg`}>
            {items.map((item, i) => <Navbar key={i} item={item}/>)}
          </div>

        </nav>

      </div>

      <div>
        <PriceOptions />
      </div>

      <div>
        <LineChart/>
      </div>
    </>
  )
}

export default App
