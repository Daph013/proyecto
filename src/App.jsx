import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Inicio from './pages/Inicio'
import Footer from './components/Footer'

const App = () => {
  return (
    <BrowserRouter >
    <Header/>
   
        <Routes>
          <Route path="/" element={<Inicio/>}/>
  
          
        </Routes>
    
    <Footer/>
  </BrowserRouter>
  )
}

export default App