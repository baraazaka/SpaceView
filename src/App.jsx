import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom';



import Home from './pages/Home/Home'
import Explore from './pages/Home/Explore/Explore'
import About from './pages/Home/About/About'
import Space from './pages/Home/Space/Space'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>

    <Routes>
      <Route path="/"  element={<Home/>}/>
      <Route path="/explore"  element={<Explore/>}/>
      <Route path="/about"  element={<About/>}/>
       <Route path="/space"  element={<Space/>}/>

    </Routes>
    </>
  );
}

export default App
