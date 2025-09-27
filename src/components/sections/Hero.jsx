import React, { useEffect, useRef, useState } from 'react'
import { ArrowRightIcon, PlayIcon, SparklesIcon } from '@heroicons/react/24/outline'

export default function Hero() {
  const Counter = ({ end = 100, suffix = '+', duration = 1500, label = '' }) => {
    const [value, setValue] = useState(0)
    const ref = useRef(null)
    const startedRef = useRef(false)

    useEffect(() => {
      const el = ref.current
      if (!el) return
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !startedRef.current) {
              startedRef.current = true
              const start = performance.now()
              const animate = (now) => {
                const progress = Math.min((now - start) / duration, 1)
                const current = Math.floor(progress * end)
                setValue(current)
                if (progress < 1) requestAnimationFrame(animate)
              }
              requestAnimationFrame(animate)
            }
          })
        },
        { threshold: 0.4 }
      )
      observer.observe(el)
      return () => observer.disconnect()
    }, [end, duration])

    const formatted = new Intl.NumberFormat('en-US').format(value)
    return (
      <div ref={ref} className="text-center group">
        <div className="text-4xl lg:text-5xl font-bold mb-2 text-gradient" style={{ color: '#FFEA00' }}>
          {formatted}{suffix}
        </div>
        <div className="text-sm text-gray-400 font-medium">{label}</div>
      </div>
    )
  }
  
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }
  
  return (
    <section className="hero-bg min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#FFEA00] rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      {/* Throwing animation elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating strategy elements */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-[#FFEA00] rounded-full animate-bounce opacity-60" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-blue-500 rounded-full animate-bounce opacity-50" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-5 h-5 bg-purple-500 rounded-full animate-bounce opacity-40" style={{ animationDelay: '2s', animationDuration: '3.5s' }}></div>
        
        {/* Throwing motion elements */}
        <div className="absolute top-1/2 left-0 w-2 h-2 bg-[#FFEA00] rounded-full animate-ping opacity-70" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 right-0 w-2 h-2 bg-pink-500 rounded-full animate-ping opacity-60" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Floating text elements */}
        <div className="absolute top-1/4 right-1/4 text-[#FFEA00] text-xs font-bold opacity-30 animate-pulse" style={{ animationDelay: '2.5s' }}>
          Strategy
        </div>
        <div className="absolute bottom-1/4 left-1/4 text-blue-400 text-xs font-bold opacity-30 animate-pulse" style={{ animationDelay: '3s' }}>
          Storytelling
        </div>
        <div className="absolute top-1/2 left-1/2 text-purple-400 text-xs font-bold opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
          Talent
        </div>
      </div>

      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="text-white px-4 sm:px-0">
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#FFEA00]/10 border border-[#FFEA00]/20 mb-4 sm:mb-6">
              <SparklesIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 text-[#FFEA00]" />
              <span className="text-xs sm:text-sm font-semibold text-[#FFEA00]">Trusted by 500+ Brands</span>
            </div>

            <div className="mb-4 sm:mb-6">
              <img src="/logo.png" alt="MUTINY TALENT Logo" className="h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 w-auto" />
            </div>
            
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-gray-300">
              A @chaibisket company
            </h2>
            
            <h3 className="text-base sm:text-lg md:text-xl text-[#FFEA00] mb-4 sm:mb-6 font-medium">
              We're a fusion of talent, strategy and storytelling mastery.
            </h3>
            
            <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 text-white">
              Elevate your narrative.
            </h4>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed max-w-2xl">
              We're a full-service marketing agency that combines creative talent, strategic thinking, and compelling storytelling 
              to elevate your brand's narrative. Our partnerships with Meta, Snapchat, and YouTube give us unique insights and 
              access to cutting-edge platforms that drive real results for our clients.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
              <button 
                onClick={() => scrollTo('contact')} 
                className="btn-primary text-sm sm:text-base md:text-lg px-6 py-3 sm:px-8 sm:py-4 group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">
                Work With Us
                  <ArrowRightIcon className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#FFEA00] to-[#FFD700] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button className="btn-secondary text-sm sm:text-base md:text-lg px-6 py-3 sm:px-8 sm:py-4 group flex items-center justify-center">
                <PlayIcon className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform" />
                Watch Our Story
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-6 text-xs sm:text-sm text-gray-400 mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>500+ Successful Campaigns</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#FFEA00] rounded-full"></div>
                <span>Strategic Partnerships</span>
              </div>
            </div>

            {/* Partnership badges */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6">
              <span className="text-xs text-gray-400 font-medium">Partnerships:</span>
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="px-3 py-1.5 bg-blue-600/20 border border-blue-600/30 rounded-full hover:scale-110 transition-transform duration-300 animate-bounce" style={{ animationDelay: '0s', animationDuration: '2s' }}>
                  <span className="text-xs font-semibold text-blue-400">@meta</span>
                </div>
                <div className="px-3 py-1.5 bg-yellow-500/20 border border-yellow-500/30 rounded-full hover:scale-110 transition-transform duration-300 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '2s' }}>
                  <span className="text-xs font-semibold text-yellow-400">@snapchat</span>
                </div>
                <div className="px-3 py-1.5 bg-red-600/20 border border-red-600/30 rounded-full hover:scale-110 transition-transform duration-300 animate-bounce" style={{ animationDelay: '1s', animationDuration: '2s' }}>
                  <span className="text-xs font-semibold text-red-400">@youtube</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative px-4 sm:px-0">
            {/* Main image with enhanced styling */}
          <div className="relative">
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/20 bg-gradient-to-br from-[#FFEA00]/10 to-transparent p-1">
              <img
                src="/images/hero/influencer.jpg"
                alt="Social media influencer with smartphone and social media icons"
                  className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-contain bg-gray-900 rounded-xl sm:rounded-2xl"
                loading="lazy"
              />
            </div>
              
              {/* Floating stats cards */}
              <div className="absolute -top-3 -right-3 sm:-top-6 sm:-right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-3 sm:p-6 shadow-2xl">
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-[#FFEA00] mb-1">127</div>
                  <div className="text-xs text-gray-300">Active Creators</div>
                </div>
              </div>
              
              <div className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-3 sm:p-6 shadow-2xl">
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-[#FFEA00] mb-1">98%</div>
                  <div className="text-xs text-gray-300">Success Rate</div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        
        {/* Enhanced stats section */}
        <div className="mt-12 sm:mt-16 lg:mt-20 px-4 sm:px-0">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Our Impact in Numbers</h3>
            <p className="text-sm sm:text-base text-gray-400">Trusted by brands and creators across Telugu markets</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-center border border-white/20 hover:border-[#FFEA00]/30 transition-all duration-300 hover:transform hover:scale-105 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-[#FFEA00]/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 animate-pulse">
                <SparklesIcon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#FFEA00]" />
              </div>
              <Counter end={5000} label="Influencer network" />
            </div>
            
            <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-center border border-white/20 hover:border-[#FFEA00]/30 transition-all duration-300 hover:transform hover:scale-105 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3s' }}>
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-[#FFEA00]/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 animate-pulse">
                <PlayIcon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#FFEA00]" />
              </div>
              <Counter end={500} label="Campaigns executed" />
            </div>
            
            <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-center border border-white/20 hover:border-[#FFEA00]/30 transition-all duration-300 hover:transform hover:scale-105 animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }}>
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-[#FFEA00]/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 animate-pulse">
                <ArrowRightIcon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#FFEA00]" />
          </div>
              <Counter end={50} label="Exclusive creators" />
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}


