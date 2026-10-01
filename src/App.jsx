import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contato from './pages/Contato'
import Sobre from './pages/Sobre'
import Menu from './components/Menu'

const App = () => {
  return (
    <Router>

      <div className="min-h-screen bg-gray-50">

        <Menu/>

        <div className="max-w-4xl mx-auto">

          <Routes> 

            <Route path="/" element={<Home/>}/>
            <Route path="/sobre" element={<Sobre/>}/>
            <Route path="/contato" element={<Contato/>}/>

          </Routes>

        </div>

    </div>

    </Router>
  )
}

export default App
