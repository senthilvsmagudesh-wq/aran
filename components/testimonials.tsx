"use client"

import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Devotee",
    image: "/woman-portrait-spiritual.jpg",
    text: "The quality of products is exceptional. I have been a customer for 15 years and never disappointed.",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    role: "Temple Priest",
    image: "/man-portrait-spiritual.jpg",
    text: "We use HMW Divine Mart products exclusively in our temple. The purity is unmatched.",
    rating: 5,
  },
  {
    name: "Anjali Patel",
    role: "Yoga Instructor",
    image: "/woman-portrait-yoga.jpg",
    text: "Perfect for my meditation practice. The natural ingredients make all the difference.",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 px-4 bg-gradient-to-b from-emerald-50 to-green-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4">Blessed by Our Customers</h2>
          <p className="text-emerald-700 text-base">Hear from those who trust us with their spiritual journey</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-emerald-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-emerald-900">{testimonial.name}</h4>
                  <p className="text-emerald-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
