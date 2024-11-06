import React from 'react'
import Header from './components/Header'
import Carrusel from './components/Carrusel'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Toda from './pages/Toda'
import Topbar from './components/Topbar'





const App = () => {
  return (
    <BrowserRouter>
      <Topbar />
      <Header />
      <Carrusel />
      <Routes>
        <Route path='/' element={<Toda />} />
  
       
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App