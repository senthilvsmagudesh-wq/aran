"use client"

import { useState, useEffect, useRef } from "react"
import { Mail, Phone, MapPin, Send, User } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    mobile: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [prefilled, setPrefilled] = useState("")
  const [highlight, setHighlight] = useState(false)
  const messageRef = useRef<HTMLTextAreaElement | null>(null)

  useEffect(() => {
    if (typeof window === "undefined") return
    const params = new URLSearchParams(window.location.search)
    const product = params.get("product")
    if (product) {
      setFormData((prev) => ({
        ...prev,
        message:
          prev.message && prev.message.trim().length > 0
            ? prev.message
            : `I am interested in this product: ${product}`,
      }))
      setPrefilled(product)
      setTimeout(() => {
        messageRef.current?.focus()
        setHighlight(true)
        setTimeout(() => setHighlight(false), 1600)
      }, 0)
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, product: prefilled }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ name: "", email: "", company: "", mobile: "", message: "" })
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    }
  }

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
              content: (
                <a href="tel:8610101752" className="text-emerald-700 hover:underline">
                  +91 86101 01752
                </a>
              ),
            },
            {
              icon: Mail,
              title: "Email Us",
              content: "aran.innovpack@gmail.com",
            },
            {
              icon: MapPin,
              title: "Visit Us",
              content: (
                <a
                  href="https://maps.google.com/maps?cid=16326731438831290335"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 transition-colors"
                >
                  View on Map
                </a>
              ),
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

        <div className={`bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl p-12 text-white ${highlight ? "ring-4 ring-white/40 transition" : ""}`}>
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">Request a Quote</h3>
            <p className="mb-6 opacity-90 text-base">
              Fill out the form below and our team will get back to you within 24 hours
            </p>

            {isSubmitted ? (
              <div className="text-center bg-white text-emerald-900 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Thank you!</h3>
                <p>Your quote request has been sent successfully. We will be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="px-5 py-3 rounded-lg bg-white text-emerald-900 focus:outline-none focus:ring-2 focus:ring-white text-base placeholder:text-emerald-500"
                    required
                  />
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Mobile Number"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="px-5 py-3 rounded-lg bg-white text-emerald-900 focus:outline-none focus:ring-2 focus:ring-white text-base placeholder:text-emerald-500"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-3 rounded-lg bg-white text-emerald-900 focus:outline-none focus:ring-2 focus:ring-white text-base placeholder:text-emerald-500 md:col-span-2"
                    required
                  />
                </div>
                <input
                  type="text"
                  name="company"
                  placeholder="Your's business"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-5 py-3 rounded-lg bg-white text-emerald-900 focus:outline-none focus:ring-2 focus:ring-white text-base placeholder:text-emerald-500"
                />
                <textarea
                  name="message"
                  placeholder="tell us about your packaging needs.."
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-5 py-3 rounded-lg bg-white text-emerald-900 focus:outline-none focus:ring-2 focus:ring-white text-base placeholder:text-emerald-500"
                  ref={messageRef}
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-white text-emerald-600 font-bold py-3 rounded-lg hover:bg-emerald-50 transition-all duration-200 hover:scale-[1.01] flex items-center justify-center gap-2 text-base"
                >
                  <Send size={20} />
                  Send Request
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-emerald-900 mb-2">Shop Location</h3>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
            <div className="flex items-start gap-2 text-emerald-800">
              <MapPin size={20} className="mt-0.5 shrink-0" />
              <p className="text-base">
                No.10, J.Jayarathana Complex, Omalur Main Road, Five Roads, Salem, Tamil Nadu 636004
              </p>
            </div>
            <a
              href={
                `https://www.google.com/maps?daddr=11.676964831404963,78.13350050066198+(Aran+Packaging)`
              }
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-colors text-sm w-max"
            >
              Get Directions
            </a>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-emerald-100 bg-transparent">
            <div className="relative w-full h-[380px] md:h-[520px]">
              <div className="absolute left-3 top-3 z-10 inline-flex items-center gap-2 rounded-md bg-white/90 px-3 py-2 text-sm font-semibold text-emerald-900 shadow">
                <MapPin size={16} className="text-emerald-700" />
                Aran Packaging
              </div>
              <iframe
                title="Aran Innovative Packaging Location"
                src={`https://www.google.com/maps?q=11.676964831404963,78.13350050066198%20(Aran%20Packaging)&z=16&hl=en&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-0"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
