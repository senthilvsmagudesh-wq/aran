"use client"

import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-15 z-0"
            style={{
              backgroundImage:
                "url(/placeholder.svg?height=800&width=1600&query=sustainable-business-office-green-environment)",
              backgroundAttachment: "fixed",
            }}
          />
    
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-6">Get in Touch</h2>
              <p className="text-emerald-700 text-lg">Contact us for quotes, partnerships, or inquiries</p>
            </div>
    
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: Phone,
                  title: "Call Us",
                  content: "+91 98765 43210",
                },
                {
                  icon: Mail,
                  title: "Email Us",
                  content: "info@aranpackaging.com",
                },
                {
                  icon: MapPin,
                  title: "Visit Us",
                  content: "Salem, Tamil Nadu, India",
                },
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="inline-block p-4 bg-gradient-to-br from-emerald-100 to-green-100 rounded-full mb-5">
                      <Icon className="text-emerald-600" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-emerald-900 mb-2">{item.title}</h3>
                    <p className="text-emerald-700 text-base">{item.content}</p>
                  </div>
                )
              })}
            </div>
    
            <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl p-12 text-white">
              <div className="max-w-2xl mx-auto">
                <h3 className="text-3xl font-bold mb-6">Request a Quote</h3>
                <p className="mb-6 opacity-90 text-base">
                  Fill out the form below and our team will get back to you within 24 hours
                </p>
    
                <form className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="px-5 py-3 rounded-lg text-emerald-900 focus:outline-none focus:ring-2 focus:ring-white text-base"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="px-5 py-3 rounded-lg text-emerald-900 focus:outline-none focus:ring-2 focus:ring-white text-base"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full px-5 py-3 rounded-lg text-emerald-900 focus:outline-none focus:ring-2 focus:ring-white text-base"
                  />
                  <textarea
                    placeholder="Tell us about your packaging needs..."
                    rows={4}
                    className="w-full px-5 py-3 rounded-lg text-emerald-900 focus:outline-none focus:ring-2 focus:ring-white text-base"
                  />
                  <button
                    type="submit"
                    className="w-full bg-white text-emerald-600 font-bold py-3 rounded-lg hover:bg-emerald-50 transition-colors flex items-center justify-center gap-2 text-base"
                  >
                    <Send size={20} />
                    Send Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
  )
}
