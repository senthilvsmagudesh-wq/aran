"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import HomeProducts from "@/components/home-products"
import Features from "@/components/features"
import About from "@/components/about"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="bg-gradient-to-b from-emerald-50 via-green-50 to-white">
      <Navigation />
      <Hero scrollY={scrollY} />
      <HomeProducts />
      <Features />
      <About />
      <Contact />
      <Footer />

      <a
        href="https://wa.me/918610101752?text=Hello%2C%20I%20am%20interested%20in%20Aran%20Innovative%20Packaging.%20Can%20you%20please%20provide%20details%20about%20your%20products%20and%20solutions%3F"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50 rounded-full bg-green-500 p-4 text-white shadow-xl hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
        onClick={async (e) => {
          const msg = "Hello, I am interested in Aran Innovative Packaging. Can you please provide details about your products and solutions?"
          try {
            await navigator.clipboard.writeText(msg)
          } catch {}
          // let the default navigation continue; ensure URL has encoded message
          const url = `https://wa.me/918610101752?text=${encodeURIComponent(msg)}`
          // Replace the href just before navigating to guarantee correct encoding
          ;(e.currentTarget as HTMLAnchorElement).href = url
        }}
      >
        <Image src="/whatsapp.svg" alt="WhatsApp" width={40} height={40} priority />
      </a>
    </main>
  )
}
