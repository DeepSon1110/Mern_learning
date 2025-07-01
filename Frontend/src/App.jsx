import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import About from './pages/About/About'
import Home from './pages/Home/Home'
import Count from './pages/Count'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path = '/home' element = {<Home />}/>
        <Route path = '/about' element = {<About />} />
        <Route path = '/count' element = {<Count />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
