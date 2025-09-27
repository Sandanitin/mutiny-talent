import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <header className="fixed top-0 w-full bg-black/70 backdrop-blur-sm z-50 border-b border-white/10">
      <div className="container-max">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img src="/logo.png" alt="logo" className="h-12 w-24" />
            <span className="ml-3 font-bold brand-glow" style={{ color: '#FFEA00', fontSize: '1.4rem' }}>@chaibisket</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8 text-sm">
            <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
            <Link to="/about" className="text-gray-300 hover:text-white">About</Link>
            <Link to="/services" className="text-gray-300 hover:text-white">Services</Link>
            <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>
            <Link to="/contact" className="btn-secondary">Get Started</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}


