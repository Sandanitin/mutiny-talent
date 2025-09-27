import React, { useState } from 'react'
import { ArrowRightIcon, EnvelopeIcon, PhoneIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline'
import { SITE } from '@/config/site'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', company: '', email: '', phone: '', role: '', subject: '', brief: '', budget: '' })
  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })
  const onSubmit = (e) => { e.preventDefault(); /* no-op */ }

  return (
    <section id="contact" className="section-padding bg-black text-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6" style={{ color: '#FFEA00' }}>Let's Create Something Amazing</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your journey with us? Get in touch and let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name *</label>
                  <input id="name" name="name" required value={formData.name} onChange={onChange} className="input-primary" placeholder="Your full name" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                  <input id="company" name="company" value={formData.company} onChange={onChange} className="input-primary" placeholder="Your company name" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                  <input type="email" id="email" name="email" required value={formData.email} onChange={onChange} className="input-primary" placeholder="you@email.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                  <input id="phone" name="phone" value={formData.phone} onChange={onChange} className="input-primary" placeholder="+91 7893525156" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-gray-300 mb-2">Role *</label>
                  <select id="role" name="role" required value={formData.role} onChange={onChange} className="input-primary">
                    <option value="">Select your role</option>
                    <option value="brand">Brand Representative</option>
                    <option value="creator">Creator/Talent</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Subject *</label>
                  <select id="subject" name="subject" required value={formData.subject} onChange={onChange} className="input-primary">
                    <option value="">Choose a subject</option>
                    <option value="campaign">New Campaign Inquiry</option>
                    <option value="partnerships">Partnerships</option>
                    <option value="talent">Talent Application</option>
                    <option value="press">Press/Media</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="brief" className="block text-sm font-medium text-gray-300 mb-2">Project Brief *</label>
                <textarea id="brief" name="brief" required rows={4} value={formData.brief} onChange={onChange} className="input-primary" placeholder="Tell us about your project..." />
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">Budget Range</label>
                <select id="budget" name="budget" value={formData.budget} onChange={onChange} className="input-primary">
                  <option value="">Select budget range</option>
                  <option value="under-10k">Under $10K</option>
                  <option value="10k-25k">$10K - $25K</option>
                  <option value="25k-50k">$25K - $50K</option>
                  <option value="50k-100k">$50K - $100K</option>
                  <option value="over-100k">Over $100K</option>
                </select>
              </div>

              <div className="text-sm text-gray-500">By submitting, you agree to our processing of your information in accordance with our privacy policy.</div>

              <button type="submit" className="btn-primary w-full">
                Send Message
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>

          <div className="bg-white/5 rounded-2xl p-8 text-white border border-white/10 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Email</h4>
                <p className="text-gray-300">{SITE.email}</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Phone</h4>
                <p className="text-gray-300">{SITE.phone}</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-300 hover:text-coral-400 transition-colors">LinkedIn</a>
                  <a href="#" className="text-gray-300 hover:text-coral-400 transition-colors">Instagram</a>
                  <a href="#" className="text-gray-300 hover:text-coral-400 transition-colors">Twitter</a>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-start">
                    <MapPinIcon className="h-5 w-5 text-coral-300 mr-3 mt-1" />
                    <div>
                      <div className="font-semibold text-white">Address</div>
                      <div className="text-gray-300 text-sm">123 Creator Ave, Suite 200, Los Angeles, CA</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-start">
                    <ClockIcon className="h-5 w-5 text-coral-300 mr-3 mt-1" />
                    <div>
                      <div className="font-semibold text-white">Office Hours</div>
                      <div className="text-gray-300 text-sm">Mon–Fri: 9am–6pm PT</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                <a href={`mailto:${SITE.email}?subject=General%20Inquiry`} className="bg-white/10 rounded-lg p-4 block hover:bg-white/15 transition-colors">
                  <div className="flex items-center mb-2"><EnvelopeIcon className="h-5 w-5 text-coral-300 mr-2" /><span className="font-semibold">General</span></div>
                  <div className="text-gray-300 text-sm">Questions and support</div>
                </a>
                <a href={`mailto:${SITE.email}?subject=Partnerships`} className="bg-white/10 rounded-lg p-4 block hover:bg-white/15 transition-colors">
                  <div className="flex items-center mb-2"><EnvelopeIcon className="h-5 w-5 text-coral-300 mr-2" /><span className="font-semibold">Partnerships</span></div>
                  <div className="text-gray-300 text-sm">Brands and collaborations</div>
                </a>
                <a href={`mailto:${SITE.email}?subject=Talent%20Application`} className="bg-white/10 rounded-lg p-4 block hover:bg-white/15 transition-colors">
                  <div className="flex items-center mb-2"><EnvelopeIcon className="h-5 w-5 text-coral-300 mr-2" /><span className="font-semibold">Talent</span></div>
                  <div className="text-gray-300 text-sm">Creators and roster</div>
                </a>
              </div>

              <div className="pt-6 border-t border-gray-700">
                <h4 className="font-semibold mb-4">Stay Updated</h4>
                <div className="flex">
                  <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-2 rounded-l-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-coral-400" />
                  <button className="px-6 py-2 text-black rounded-r-lg transition-colors" style={{ backgroundColor: '#FFEA00' }}>Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


