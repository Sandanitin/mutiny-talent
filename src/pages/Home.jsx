import React from 'react'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import FilmMarquee from '@/components/sections/FilmMarquee'
import WhyUs from '@/components/sections/WhyUs'
import Collaborate from '@/components/sections/Collaborate'
import Contact from '@/components/sections/Contact'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="pt-16">
        <section id="hero"><Hero /></section>
        {/* <About /> */}
        {/* <Services /> */}
        <FilmMarquee />
        <WhyUs />
        <Collaborate />
        {/* <Contact /> */}
      </main>

      <Footer />
    </div>
  )
}


