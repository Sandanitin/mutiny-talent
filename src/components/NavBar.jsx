import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function NavBar() {
  const location = useLocation()
  
  const scrollToSection = (sectionId) => {
    if (location.pathname === '/') {
      // If we're on the home page, scroll to the section
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // If we're on a different page, navigate to home and then scroll
      window.location.href = `/#${sectionId}`
    }
  }

  const handleNavClick = (e, sectionId) => {
    e.preventDefault()
    scrollToSection(sectionId)
  }

  return (
    <header className="fixed top-0 w-full bg-black/70 backdrop-blur-sm z-50 border-b border-white/10">
      <div className="container-max">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/">
              <img src="/logo.png" alt="logo" className="h-12 w-24" />
            </Link>
            <span className="ml-3 font-bold brand-glow" style={{ color: '#FFEA00', fontSize: '1.4rem' }}>@chaibisket</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8 text-sm">
            <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
            <a 
              href="#about" 
              onClick={(e) => handleNavClick(e, 'about')}
              className="text-gray-300 hover:text-white cursor-pointer"
            >
              About
            </a>
            <a 
              href="#services" 
              onClick={(e) => handleNavClick(e, 'services')}
              className="text-gray-300 hover:text-white cursor-pointer"
            >
              Services
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, 'contact')}
              className="text-gray-300 hover:text-white cursor-pointer"
            >
              Contact
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, 'contact')}
              className="btn-secondary cursor-pointer"
            >
              Get Started
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}


