import React from 'react'
import Services from '@/components/sections/Services'
import { Footer } from '@/components/Footer'

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="pt-16">
        <Services />
      </main>
      <Footer />
    </div>
  )
}


