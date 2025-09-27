import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import AboutPage from '@/pages/AboutPage'
import ServicesPage from '@/pages/ServicesPage'
import ContactPage from '@/pages/ContactPage'
import NavBar from '@/components/NavBar'
import MobileBottomNav from '@/components/MobileBottomNav'
import LandingPage from '@/pages/LandingPage'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <div className="pb-16 md:pb-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
      <MobileBottomNav />
    </BrowserRouter>
  </React.StrictMode>,
)
