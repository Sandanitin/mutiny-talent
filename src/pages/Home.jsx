import React, { Suspense, lazy } from 'react'
import Hero from '@/components/sections/Hero'
import { Footer } from '@/components/Footer'

// Lazy load heavy components
const FilmMarquee = lazy(() => import('@/components/sections/FilmMarquee'))
const WhyUs = lazy(() => import('@/components/sections/WhyUs'))
const Collaborate = lazy(() => import('@/components/sections/Collaborate'))
const About = lazy(() => import('@/components/sections/About'))
const Services = lazy(() => import('@/components/sections/Services'))
const Contact = lazy(() => import('@/components/sections/Contact'))

// Loading component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center py-16">
    <div className="w-8 h-8 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
  </div>
)

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="pt-16">
        <section id="hero"><Hero /></section>
        
        <Suspense fallback={<LoadingSpinner />}>
          <About />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <Services />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <FilmMarquee />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <WhyUs />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <Collaborate />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <Contact />
        </Suspense>
      </main>

      <Footer />
    </div>
  )
}


