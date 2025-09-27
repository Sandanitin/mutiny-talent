import React from 'react'
import About from '@/components/sections/About'
import { Footer } from '@/components/Footer'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="pt-16">
        <About />
      </main>
      <Footer />
    </div>
  )
}


