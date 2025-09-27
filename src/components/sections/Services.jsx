import React from 'react'
import { CheckIcon, ArrowRightIcon, StarIcon, UsersIcon, ChartBarIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

export default function Services() {
  const influencerFeatures = [
    'Creator matchmaking & vetting',
    'Campaign strategy & creative direction',
    'Content creation & production support',
    'Performance analytics & reporting',
    'Multi-platform campaign management',
  ]

  const talentFeatures = [
    'Personal brand development & strategy',
    'Contract negotiations & deal structuring',
    'Career strategy & growth planning',
    'Legal & financial support',
    'Revenue optimization & diversification',
  ]

  const stats = [
    { icon: UsersIcon, value: "500+", label: "Successful Campaigns", color: "text-[#FFEA00]" },
    { icon: StarIcon, value: "98%", label: "Client Retention", color: "text-green-400" },
    { icon: ChartBarIcon, value: "300%", label: "Average ROI", color: "text-blue-400" },
    { icon: ShieldCheckIcon, value: "100%", label: "Transparent Reporting", color: "text-purple-400" }
  ]

  return (
    <section id="services" className="relative section-padding bg-black text-white overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="h-full w-full opacity-10" style={{
          background: 'radial-gradient(60rem 60rem at 10% 20%, rgba(255,234,0,0.15), transparent 60%), radial-gradient(50rem 50rem at 90% 30%, rgba(255,234,0,0.10), transparent 60%)'
        }} />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-[#FFEA00]/5 to-transparent"></div>
      </div>

      <div className="container-max relative z-10">
        <div className="text-center mb-12 sm:mb-16 px-4 sm:px-0">
          <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#FFEA00]/10 border border-[#FFEA00]/20 mb-4 sm:mb-6">
            <span className="text-xs sm:text-sm font-semibold text-[#FFEA00]">What we do</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="text-gradient" style={{ color: '#FFEA00' }}>
              Influencer Marketing
            </span>
            <br />
            <span className="text-white">+ Talent Management</span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We connect brands with the right voices to tell stories that matter. From takeovers to branded content and storytelling,
            we design strategies that launch products and grow brand presence.
          </p>
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 px-4 sm:px-0">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white/10 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-[#FFEA00]/20 transition-colors duration-300">
                <stat.icon className={`w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 ${stat.color}`} />
              </div>
              <div className={`text-lg sm:text-xl lg:text-2xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
              <div className="text-gray-400 text-xs sm:text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Services grid */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 px-4 sm:px-0">
          {/* Influencer Marketing */}
          <div className="group">
            <div className="card p-0 overflow-hidden hover:transform hover:scale-105 transition-all duration-500 hover:border-[#FFEA00]/30">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1400&auto=format&fit=crop" 
                  alt="Influencer marketing" 
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
                  <div className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1 rounded-full bg-[#FFEA00]/20 border border-[#FFEA00]/30">
                    <span className="text-xs sm:text-sm font-semibold text-[#FFEA00]">Influencer Marketing</span>
                  </div>
                </div>
              </div>
              
              <div className="p-4 sm:p-6 lg:p-8">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-white">Influencer Marketing</h3>
                <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg leading-relaxed">
                  Strategic partnerships that connect brands with the right creators to amplify your message and reach your target audience.
                </p>
                
                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {influencerFeatures.map((item, index) => (
                    <li key={index} className="flex items-start group/item">
                      <span className="mt-1 mr-3 sm:mr-4 inline-flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-[#FFEA00]/20 group-hover/item:bg-[#FFEA00]/30 transition-colors duration-300">
                        <CheckIcon className="h-3 w-3 sm:h-4 sm:w-4 text-[#FFEA00]" />
                      </span>
                      <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300 text-sm sm:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="btn-primary group/btn flex items-center text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3">
                  Book a strategy call
                  <ArrowRightIcon className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Talent Management */}
          <div className="group">
            <div className="card p-0 overflow-hidden hover:transform hover:scale-105 transition-all duration-500 hover:border-[#FFEA00]/30">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1400&auto=format&fit=crop" 
                  alt="Talent management" 
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
                  <div className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1 rounded-full bg-[#FFEA00]/20 border border-[#FFEA00]/30">
                    <span className="text-xs sm:text-sm font-semibold text-[#FFEA00]">Talent Management</span>
                  </div>
                </div>
              </div>
              
              <div className="p-4 sm:p-6 lg:p-8">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-white">Talent Representation & Management</h3>
                <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg leading-relaxed">
                  We nurture and represent talent across the Telugu industry — unlocking opportunities, structuring deals, and shaping long‑term careers.
                </p>
                
                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {talentFeatures.map((item, index) => (
                    <li key={index} className="flex items-start group/item">
                      <span className="mt-1 mr-3 sm:mr-4 inline-flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-[#FFEA00]/20 group-hover/item:bg-[#FFEA00]/30 transition-colors duration-300">
                        <CheckIcon className="h-3 w-3 sm:h-4 sm:w-4 text-[#FFEA00]" />
                      </span>
                      <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300 text-sm sm:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <button className="btn-primary group/btn flex items-center text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3">
                    Talk to our team
                    <ArrowRightIcon className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                  <a className="btn-secondary text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3 text-center" href="#contact">Contact</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process section */}
        <div className="mt-12 sm:mt-16 lg:mt-20 px-4 sm:px-0">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">Our Process</h3>
            <p className="text-gray-400 text-sm sm:text-base lg:text-lg">How we bring your vision to life</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your brand and goals" },
              { step: "02", title: "Strategy", desc: "Crafting the perfect campaign approach" },
              { step: "03", title: "Execution", desc: "Bringing the campaign to life" },
              { step: "04", title: "Optimization", desc: "Measuring and improving results" }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-[#FFEA00]/20 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-[#FFEA00]/30 transition-colors duration-300">
                  <span className="text-lg sm:text-xl lg:text-2xl font-bold text-[#FFEA00]">{item.step}</span>
                </div>
                <h4 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-1 sm:mb-2">{item.title}</h4>
                <p className="text-gray-400 text-xs sm:text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


