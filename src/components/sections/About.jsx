import React from 'react'
import { HeartIcon, LightBulbIcon, ChartBarIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

export default function About() {
  const values = [
    {
      icon: HeartIcon,
      title: "Storytelling",
      description: "Compelling narratives that connect with audiences and drive emotional engagement.",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: LightBulbIcon,
      title: "Strategy",
      description: "Data-driven approaches that deliver measurable results and maximize ROI.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: ChartBarIcon,
      title: "Talent",
      description: "Creative professionals who bring fresh perspectives and innovative solutions.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: ShieldCheckIcon,
      title: "Partnership",
      description: "Collaborative relationships built on trust, transparency, and shared success.",
      color: "from-blue-500 to-cyan-500"
    }
  ]


  return (
    <section id="about" className="section-padding bg-black text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#FFEA00] rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container-max relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 px-4 sm:px-0">
          <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#FFEA00]/10 border border-[#FFEA00]/20 mb-4 sm:mb-6">
            <span className="text-xs sm:text-sm font-semibold text-[#FFEA00]">Our Story</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8">
            Where{' '}
            <span className="text-gradient" style={{ color: '#FFEA00' }}>
              Strategy
            </span>{' '}
            Meets Storytelling
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12">
            At @chaibisket, we believe great marketing is the perfect fusion of creative talent, strategic thinking, and compelling storytelling. 
            Our mission is to elevate your brand's narrative through innovative campaigns that resonate with your audience and drive measurable results.
          </p>

          {/* CEO Information */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-8 sm:mb-12 border border-white/20 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden mx-auto mb-4 ring-2 ring-[#FFEA00]/30">
                <img 
                  src="/market/ceo.png" 
                  alt="Vikranth Shetty, CEO" 
                  className="w-full h-full object-contain bg-gray-900"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Vikranth Shetty</h3>
              <p className="text-[#FFEA00] font-semibold mb-3">CEO & Founder</p>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Leading @chaibisket with a vision to transform how brands connect with their audiences through innovative marketing strategies and authentic storytelling.
              </p>
            </div>
          </div>

        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20 px-4 sm:px-0">
          {values.map((value, index) => (
            <div key={index} className="group">
              <div className="card p-4 sm:p-6 lg:p-8 text-center h-full hover:transform hover:scale-105 transition-all duration-300 hover:border-[#FFEA00]/30 animate-bounce" style={{ animationDelay: `${index * 0.2}s`, animationDuration: '2.5s' }}>
                <div className={`w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-gradient-to-br ${value.color} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 animate-pulse`} style={{ animationDelay: `${index * 0.3}s` }}>
                  <value.icon className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed text-xs sm:text-sm">{value.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced gallery section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center px-4 sm:px-0">
          <div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
              Behind the{' '}
              <span className="text-gradient" style={{ color: '#FFEA00' }}>
                Scenes
              </span>
            </h3>
            <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed">
              From creative workshops to campaign execution, we bring together the best minds in the industry 
              to create content that truly resonates with Telugu audiences.
            </p>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-2 h-2 bg-[#FFEA00] rounded-full flex-shrink-0"></div>
                <span className="text-gray-300 text-sm sm:text-base">Creative strategy sessions</span>
              </div>
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-2 h-2 bg-[#FFEA00] rounded-full flex-shrink-0"></div>
                <span className="text-gray-300 text-sm sm:text-base">Content production workshops</span>
              </div>
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-2 h-2 bg-[#FFEA00] rounded-full flex-shrink-0"></div>
                <span className="text-gray-300 text-sm sm:text-base">Performance analytics & optimization</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="space-y-3 sm:space-y-4">
              <img 
                className="w-full h-32 sm:h-40 lg:h-48 object-cover rounded-xl sm:rounded-2xl hover:scale-105 transition-transform duration-300" 
                src="https://images.unsplash.com/photo-1527661591475-527312dd65f5?q=80&w=1200&auto=format&fit=crop" 
                alt="Workshop" 
              />
              <img 
                className="w-full h-24 sm:h-28 lg:h-32 object-cover rounded-xl sm:rounded-2xl hover:scale-105 transition-transform duration-300" 
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop" 
                alt="Teamwork" 
              />
            </div>
            <div className="space-y-3 sm:space-y-4 mt-4 sm:mt-6 lg:mt-8">
              <img 
                className="w-full h-24 sm:h-28 lg:h-32 object-cover rounded-xl sm:rounded-2xl hover:scale-105 transition-transform duration-300" 
                src="https://images.unsplash.com/photo-1521747116042-5a810fda9664?q=80&w=1200&auto=format&fit=crop" 
                alt="Creators" 
              />
              <img 
                className="w-full h-32 sm:h-40 lg:h-48 object-cover rounded-xl sm:rounded-2xl hover:scale-105 transition-transform duration-300" 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop" 
                alt="Campaign execution" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


