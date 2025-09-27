import React from 'react'
import Contact from '@/components/sections/Contact'
import { Footer } from '@/components/Footer'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="pt-16">
        <Contact />
      </main>
      <Footer />
    </div>
  )
}


