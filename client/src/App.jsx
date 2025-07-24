import { useState } from 'react'
import {Routes , Route} from 'react-router-dom'
import LandingPage from "./pages/LandingPage.jsx"
import SignupPage from './pages/SignupPage.jsx'
import LoginPage from './pages/LoginPage.jsx'

function App() {
  

  return (
    <>
      <div className='min-h-screen bg-black text-white overflow-hidden'>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </>
    
  )
}

export default App
