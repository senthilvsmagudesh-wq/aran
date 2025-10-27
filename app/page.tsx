"use client"

import { useState, useEffect } from "react"
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
    </main>
  )
}
