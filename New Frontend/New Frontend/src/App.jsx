import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import BlogDetails from './pages/BlogDetails'


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path= "/" element= {<Home />}/>
      <Route path = "/blog/:id" element = {<BlogDetails />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
