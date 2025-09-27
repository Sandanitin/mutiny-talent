import React from 'react'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function Collaborate() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <section id="collaborate" className="section-padding bg-black text-white">
      <div className="container-max">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-4">Let’s Collaborate</h2>
          <p className="text-xl text-gray-300 mb-8">
            Looking to partner with leading creators or talent? Let’s bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => scrollTo('contact')} className="btn-primary">
              📩 Contact Us – Partner with us
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </button>
            <a href="#" className="btn-secondary">📬 Join the Team – Careers in creativity</a>
          </div>
        </div>
      </div>
    </section>
  )
}


