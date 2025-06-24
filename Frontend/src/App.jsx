import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import About from './pages/About/About'
import Home from './pages/Home/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path = '/home' element = {<Home />}/>
        <Route path = '/about' element = {<About />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
