import React from 'react';
import { SITE } from '../config/site';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  ArrowRightIcon,
  SparklesIcon,
  GlobeAltIcon,
  UserGroupIcon,
  FilmIcon
} from '@heroicons/react/24/outline';

export function Footer() {
  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#FFEA00] rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main footer content */}
        <div className="container-max py-12 sm:py-16 lg:py-20 px-4 sm:px-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-4 sm:mb-6">
                <img src="/images/logo.png" alt="logo" className="h-6 sm:h-8 w-auto" />
                <span className="ml-2 sm:ml-3 text-lg sm:text-xl font-bold text-white">{SITE.name}</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4 sm:mb-6 max-w-sm">
                Connecting visionary brands with inspiring creators to craft stories that move audiences across Telugu markets.
              </p>
              
              {/* Trust badges */}
              <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                <span className="px-2 py-1 sm:px-3 sm:py-1.5 rounded-full border border-[#FFEA00]/20 bg-[#FFEA00]/10 text-xs font-semibold text-[#FFEA00]">
                  ISO-ready
                </span>
                <span className="px-2 py-1 sm:px-3 sm:py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-gray-300">
                  India • Remote-first
                </span>
              </div>

              {/* Contact info */}
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center space-x-2 sm:space-x-3 text-xs sm:text-sm text-gray-300">
                  <EnvelopeIcon className="w-3 h-3 sm:w-4 sm:h-4 text-[#FFEA00] flex-shrink-0" />
                  <span className="break-all">{SITE.email}</span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3 text-xs sm:text-sm text-gray-300">
                  <PhoneIcon className="w-3 h-3 sm:w-4 sm:h-4 text-[#FFEA00] flex-shrink-0" />
                  <span>{SITE.phone}</span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3 text-xs sm:text-sm text-gray-300">
                  <MapPinIcon className="w-3 h-3 sm:w-4 sm:h-4 text-[#FFEA00] flex-shrink-0" />
                  <span>Hyderabad, India</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold mb-4 sm:mb-6 text-base sm:text-lg" style={{ color: '#FFEA00' }}>
                Our Services
              </h4>
              <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-300">
                <li>
                  <a href="/services" className="hover:text-[#FFEA00] transition-colors duration-300 flex items-center group">
                    <span>Influencer Marketing</span>
                    <ArrowRightIcon className="w-3 h-3 ml-1 sm:ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
                  </a>
                </li>
                <li>
                  <a href="/services" className="hover:text-[#FFEA00] transition-colors duration-300 flex items-center group">
                    <span>Talent Management</span>
                    <ArrowRightIcon className="w-3 h-3 ml-1 sm:ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
                  </a>
                </li>
                <li>
                  <a href="/services" className="hover:text-[#FFEA00] transition-colors duration-300 flex items-center group">
                    <span>Content Strategy</span>
                    <ArrowRightIcon className="w-3 h-3 ml-1 sm:ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
                  </a>
                </li>
                <li>
                  <a href="/services" className="hover:text-[#FFEA00] transition-colors duration-300 flex items-center group">
                    <span>Campaign Analytics</span>
                    <ArrowRightIcon className="w-3 h-3 ml-1 sm:ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
                  </a>
                </li>
                <li>
                  <a href="/services" className="hover:text-[#FFEA00] transition-colors duration-300 flex items-center group">
                    <span>Brand Partnerships</span>
                    <ArrowRightIcon className="w-3 h-3 ml-1 sm:ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Our Verticals */}
            <div>
              <h4 className="font-bold mb-4 sm:mb-6 text-base sm:text-lg" style={{ color: '#FFEA00' }}>
                Our Verticals
              </h4>
              <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-[#FFEA00] transition-colors duration-300 flex items-center group">
                    <FilmIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 flex-shrink-0" />
                    <span>Chai Shots</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#FFEA00] transition-colors duration-300 flex items-center group">
                    <FilmIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 flex-shrink-0" />
                    <span>First Show</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#FFEA00] transition-colors duration-300 flex items-center group">
                    <UserGroupIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 flex-shrink-0" />
                    <span>Mutiny Talent</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#FFEA00] transition-colors duration-300 flex items-center group">
                    <FilmIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 flex-shrink-0" />
                    <span>Studio Panchatantra</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#FFEA00] transition-colors duration-300 flex items-center group">
                    <SparklesIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 flex-shrink-0" />
                    <span>Creative Experiments</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Company & Connect */}
            <div>
              <h4 className="font-bold mb-4 sm:mb-6 text-base sm:text-lg" style={{ color: '#FFEA00' }}>
                Company
              </h4>
              <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-300 mb-6 sm:mb-8">
                <li>
                  <a href="/about" className="hover:text-[#FFEA00] transition-colors duration-300">About Us</a>
                </li>
                <li>
                  <a href="/services" className="hover:text-[#FFEA00] transition-colors duration-300">For Brands</a>
                </li>
                <li>
                  <a href="/services" className="hover:text-[#FFEA00] transition-colors duration-300">For Talent</a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-[#FFEA00] transition-colors duration-300">Contact Us</a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#FFEA00] transition-colors duration-300">Careers</a>
                </li>
              </ul>

              <h4 className="font-bold mb-3 sm:mb-4 text-base sm:text-lg" style={{ color: '#FFEA00' }}>
                Connect With Us
              </h4>
              <div className="flex space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                <a 
                  href={SITE.socials.linkedin} 
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#FFEA00]/20 transition-colors duration-300 group"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300 group-hover:text-[#FFEA00]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a 
                  href={SITE.socials.instagram} 
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#FFEA00]/20 transition-colors duration-300 group"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300 group-hover:text-[#FFEA00]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348zm7.718 0c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348z"/>
                  </svg>
                </a>
                <a 
                  href={SITE.socials.twitter} 
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#FFEA00]/20 transition-colors duration-300 group"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300 group-hover:text-[#FFEA00]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter signup */}
          <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/10">
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                  Stay in the{' '}
                  <span className="text-gradient" style={{ color: '#FFEA00' }}>
                    Loop
                  </span>
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Get the latest updates on our campaigns, creator spotlights, and industry insights delivered to your inbox.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#FFEA00] transition-colors duration-300 text-sm"
                />
                <button className="btn-primary px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-center text-sm">
                  Subscribe
                  <ArrowRightIcon className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-4 sm:py-6">
          <div className="container-max px-4 sm:px-0">
            <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm text-gray-400">
              <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:items-center sm:space-x-6">
                <p>&copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                  <a href="#" className="hover:text-[#FFEA00] transition-colors duration-300">Privacy Policy</a>
                  <a href="#" className="hover:text-[#FFEA00] transition-colors duration-300">Terms of Service</a>
                  <a href="#" className="hover:text-[#FFEA00] transition-colors duration-300">Cookie Policy</a>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-xs text-gray-500">
                <GlobeAltIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Made with ❤️ in India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


