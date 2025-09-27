import React, { useState, memo } from 'react'
import OptimizedImage from '../OptimizedImage'

const FILM_COLLABORATIONS = [
  {
    title: "Telugu Blockbuster",
    year: "2024",
    image: "/images/Screenshot 2025-09-27 152618.png"
  },
  {
    title: "Regional Cinema",
    year: "2024", 
    image: "/images/Screenshot 2025-09-27 152645.png"
  },
  {
    title: "South Indian Film",
    year: "2024",
    image: "/images/Screenshot 2025-09-27 152703.png"
  },
  {
    title: "Tollywood Production",
    year: "2024",
    image: "/images/Screenshot 2025-09-27 152725.png"
  },
  {
    title: "Telugu Movie",
    year: "2024",
    image: "/images/Screenshot 2025-09-27 152811.png"
  },
  {
    title: "Regional Film",
    year: "2024",
    image: "/images/Screenshot 2025-09-27 152824.png"
  },
  {
    title: "South Cinema",
    year: "2024",
    image: "/images/Screenshot 2025-09-27 152843.png"
  },
  {
    title: "Telugu Cinema",
    year: "2024",
    image: "/images/Screenshot 2025-09-27 152909.png"
  }
]

const FilmMarquee = memo(() => {
  const [isPaused, setIsPaused] = useState(false)
  
  // Create multiple sets for seamless infinite scroll
  const items = [...FILM_COLLABORATIONS, ...FILM_COLLABORATIONS, ...FILM_COLLABORATIONS]
  
  return (
    <section className="section-padding bg-black text-white">
      <div className="container-max">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-4xl font-bold mb-2">
              We have collaborated with{' '}
              <span className="text-gradient" style={{ color: '#FFEA00' }}>
                100+ films/movies
              </span>
            </h2>
            <p className="text-gray-400 text-lg">From blockbusters to indie masterpieces</p>
          </div>
          <div className="hidden lg:flex items-center space-x-4">
            <span className="text-sm text-gray-400">Auto-scrolling showcase</span>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsPaused(!isPaused)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200"
                title={isPaused ? "Resume" : "Pause"}
              >
                {isPaused ? (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <div 
          className="marquee-container relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 via-white/10 to-white/5 backdrop-blur-sm py-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className={`marquee-track flex items-center ${isPaused ? 'paused' : ''}`}>
            {items.map((film, idx) => (
              <div key={idx} className="mx-8 flex-shrink-0 group">
                <div className="relative">
                  <OptimizedImage
                    src={film.image}
                    alt={film.title}
                    className="h-32 w-48 object-contain bg-gray-900 rounded-xl ring-1 ring-white/10 group-hover:ring-2 group-hover:ring-[#FFEA00] transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-[#FFEA00]/20"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-white font-semibold text-sm truncate">{film.title}</h3>
                    <p className="text-[#FFEA00] text-xs">{film.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
        </div>
      </div>
    </section>
  )
})

export default FilmMarquee


