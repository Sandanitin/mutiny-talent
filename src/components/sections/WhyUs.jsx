import React, { memo } from 'react'
import OptimizedImage from '../OptimizedImage'
import { 
  SparklesIcon, 
  LightBulbIcon, 
  ChartBarIcon, 
  HeartIcon, 
  StarIcon, 
  UsersIcon, 
  ShieldCheckIcon,
  RocketLaunchIcon,
  GlobeAltIcon,
  TrophyIcon
} from '@heroicons/react/24/outline'

const WhyUs = memo(() => {
  const advantages = [
    {
      icon: SparklesIcon,
      title: "Creative Ecosystem",
      description: "Backed by Chai Bisket's creative powerhouse, we combine storytelling with strategy.",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/20"
    },
    {
      icon: GlobeAltIcon,
      title: "Tailored Storytelling",
      description: "Hyper-local campaigns built for Telugu markets with authentic cultural understanding.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20"
    },
    {
      icon: ChartBarIcon,
      title: "Results That Matter",
      description: "Every strategy aligns with your business goals, connecting you to the right creators and platforms.",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20"
    }
  ]

  const stats = [
    { icon: UsersIcon, value: "500+", label: "Brands Trust Us", color: "text-[#FFEA00]" },
    { icon: StarIcon, value: "98%", label: "Client Retention", color: "text-green-400" },
    { icon: TrophyIcon, value: "25+", label: "Awards Won", color: "text-blue-400" },
    { icon: RocketLaunchIcon, value: "300%", label: "Average ROI", color: "text-purple-400" }
  ]


  return (
    <section id="why-us" className="section-padding bg-black text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#FFEA00] rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container-max relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 px-4 sm:px-0">
          <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#FFEA00]/10 border border-[#FFEA00]/20 mb-4 sm:mb-6">
            <span className="text-xs sm:text-sm font-semibold text-[#FFEA00]">Why Choose Us</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8">
            Why{' '}
            <span className="text-gradient" style={{ color: '#FFEA00' }}>
              Us?
            </span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8">
            At Mutiny Talent, we don't just run campaigns — we{' '}
            <span className="text-[#FFEA00] font-semibold">spark movements</span>.
          </p>
        </div>

        {/* Main advantages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16 lg:mb-20 px-4 sm:px-0">
          {advantages.map((advantage, index) => (
            <div key={index} className="group">
              <div className={`card p-4 sm:p-6 h-full hover:transform hover:scale-105 transition-all duration-500 hover:border-[#FFEA00]/30 ${advantage.bgColor} ${advantage.borderColor}`}>
                <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${advantage.color} rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <advantage.icon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-white" />
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{advantage.title}</h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">{advantage.description}</p>
                
                <div className="flex items-center text-[#FFEA00] font-semibold text-xs sm:text-sm group-hover:translate-x-2 transition-transform duration-300">
                  <span>Learn More</span>
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="mb-12 sm:mb-16 lg:mb-20 px-4 sm:px-0">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Our Impact in Numbers</h3>
            <p className="text-gray-400 text-sm sm:text-base lg:text-lg">Proven results that speak for themselves</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white/10 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-[#FFEA00]/20 transition-colors duration-300">
                  <stat.icon className={`w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 ${stat.color}`} />
                </div>
                <div className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
                <div className="text-gray-400 font-medium text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>


        {/* Competitive advantages */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center px-4 sm:px-0">
          <div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
              What Sets Us{' '}
              <span className="text-gradient" style={{ color: '#FFEA00' }}>
                Apart
              </span>
            </h3>
            <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed">
              We're not just another agency. We're your strategic partners in the Telugu market, 
              combining deep cultural understanding with cutting-edge marketing strategies.
            </p>
            
            <div className="space-y-4 sm:space-y-6">
              {[
                "Deep Telugu market expertise and cultural understanding",
                "Direct access to 5000+ verified creators and influencers",
                "Proven track record with 500+ successful campaigns",
                "End-to-end campaign management and optimization",
                "Transparent reporting and real-time analytics"
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#FFEA00] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300 text-sm sm:text-base lg:text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <OptimizedImage 
                className="w-full h-32 sm:h-40 lg:h-48 object-contain bg-gray-900 rounded-xl sm:rounded-2xl hover:scale-105 transition-transform duration-300" 
                src="/market/group.png" 
                alt="Team collaboration" 
              />
              <OptimizedImage 
                className="w-full h-32 sm:h-40 lg:h-48 object-contain bg-gray-900 rounded-xl sm:rounded-2xl hover:scale-105 transition-transform duration-300" 
                src="/market/ceo.png" 
                alt="CEO and leadership" 
              />
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
})

export default WhyUs


