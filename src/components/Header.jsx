import React from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export function Header({ isMenuOpen, setIsMenuOpen, onNav }) {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container-max">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img src="/images/logo.png" alt="logo" className="h-8 w-auto" />
            <span className="ml-3 text-xl font-bold text-primary-900">Where Brands, Creators, and Stories Meet</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => onNav('about')} className="text-gray-700 hover:text-coral-400 transition-colors">About</button>
            <button onClick={() => onNav('services')} className="text-gray-700 hover:text-coral-400 transition-colors">Services</button>
            <button onClick={() => onNav('approach')} className="text-gray-700 hover:text-coral-400 transition-colors">Approach</button>
            <button onClick={() => onNav('case-studies')} className="text-gray-700 hover:text-coral-400 transition-colors">Case Studies</button>
            <button onClick={() => onNav('contact')} className="btn-primary">Work With Us</button>
          </div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4">
            <div className="flex flex-col space-y-4">
              <button onClick={() => onNav('about')} className="text-left text-gray-700 hover:text-coral-400 transition-colors">About</button>
              <button onClick={() => onNav('services')} className="text-left text-gray-700 hover:text-coral-400 transition-colors">Services</button>
              <button onClick={() => onNav('approach')} className="text-left text-gray-700 hover:text-coral-400 transition-colors">Approach</button>
              <button onClick={() => onNav('case-studies')} className="text-left text-gray-700 hover:text-coral-400 transition-colors">Case Studies</button>
              <button onClick={() => onNav('contact')} className="btn-primary w-full">Work With Us</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}


