"use client"

import { CheckCircle, Leaf, Zap, Shield, Globe, Award } from "lucide-react"

const features = [
  {
    icon: Leaf,
    title: "100% Biodegradable",
    description: "All products break down naturally without harming the environment",
  },
  {
    icon: Shield,
    title: "FDA Approved",
    description: "Certified safe for food contact and consumer use",
  },
  {
    icon: Globe,
    title: "Sustainable Sourcing",
    description: "Materials sourced responsibly from renewable resources",
  },
  {
    icon: Zap,
    title: "Cost Effective",
    description: "Competitive pricing without compromising on quality",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "Rigorous testing ensures consistent product excellence",
  },
  {
    icon: CheckCircle,
    title: "Custom Orders",
    description: "Tailored solutions for your specific business requirements",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 px-4 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10 z-0"
        style={{
          backgroundImage:
            "url(/placeholder.svg?height=800&width=1600&query=green-nature-leaves-sustainable-background)",
          backgroundAttachment: "fixed",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-6">Why Choose Aran Packaging?</h2>
          <p className="text-emerald-700 text-lg max-w-3xl mx-auto leading-relaxed">
            Industry-leading eco-friendly solutions with proven quality and sustainability
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-block p-3 bg-gradient-to-br from-emerald-100 to-green-100 rounded-lg mb-5">
                  <Icon className="text-emerald-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-emerald-900 mb-2">{feature.title}</h3>
                <p className="text-emerald-600 text-base">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
