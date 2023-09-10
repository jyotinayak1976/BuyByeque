import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import LandingPage from './pages/landingPage/LandingPage'
import Registration from './pages/registration/Registration';
import './App.css'

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/registration" element={<Registration />} />

        {/* Add more routes as needed */}
      </Routes>
    </Router>
  )
}

export default App
