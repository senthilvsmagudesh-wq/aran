import { useState, useEffect } from "react"
import Link from "next/link"

interface HeroProps {
  scrollY: number
}

export default function Hero({ scrollY }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      <div className="absolute inset-0 z-0">
        <div
                      className="absolute inset-0 bg-cover bg-center opacity-50"          style={{
            backgroundImage:
              "url(/slide4.png)",
            transform: `translateY(${scrollY * 0.5}px)`,
            transition: "transform 0.1s ease-out",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/20 via-green-800/10 to-emerald-900/30" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-emerald-900 mb-6 animate-fade-in-up leading-tight">
          Sustainable <span className="text-green-600">Packaging</span>, Materials
        </h1>

        <p className="text-lg md:text-xl text-emerald-700 mb-10 animate-fade-in-up animation-delay-200 max-w-2xl mx-auto leading-relaxed">
          Biodegradable, compostable, and eco-friendly packaging solutions for businesses committed to sustainability
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
          <Link href="/products" className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-lg font-bold text-base hover:shadow-xl hover:scale-105 transition-all">
            View Products
          </Link>
          <button
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }}
            className="px-8 py-4 border-2 border-emerald-600 text-emerald-600 rounded-lg font-bold text-base hover:bg-emerald-50 transition-all"
          >
            Request Quote
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-emerald-600 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-emerald-600 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}

