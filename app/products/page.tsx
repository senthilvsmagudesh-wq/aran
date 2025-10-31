"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { products } from "@/lib/products-data"
import { ArrowLeft, Grid3X3, Settings, Package, Utensils, FileText, ShoppingBag, ShieldCheck, Puzzle } from "lucide-react"

export default function ProductsPage() {
  type CatKey = "all" | "custom" | "containers" | "plates" | "paper" | "bags" | "safety" | "accessories"
  const [selectedKey, setSelectedKey] = useState<CatKey>("all")

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"))
    if (els.length === 0) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0")
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [selectedKey])

  const categories: Array<{
    key: CatKey
    label: string
    icon: React.ComponentType<{ size?: number; className?: string }>
    color: string
  }> = [
    { key: "all", label: "All", icon: Grid3X3, color: "emerald" },
    { key: "custom", label: "Custom Orders", icon: Settings, color: "amber" },
    { key: "containers", label: "Food Containers", icon: Package, color: "emerald" },
    { key: "plates", label: "Plates & Tableware", icon: Utensils, color: "teal" },
    { key: "paper", label: "Paper & Tissue", icon: FileText, color: "sky" },
    { key: "bags", label: "Carry & Garbage Bags", icon: ShoppingBag, color: "lime" },
    { key: "safety", label: "Hygiene & Safety", icon: ShieldCheck, color: "rose" },
    { key: "accessories", label: "Accessories", icon: Puzzle, color: "indigo" },
  ]

  const keyToFilter = (key: CatKey, p: (typeof products)[number]) => {
    if (key === "all") return true
    if (key === "custom") return !!p.customizable
    const map: Record<Exclude<CatKey, "all" | "custom">, string> = {
      containers: "Containers",
      plates: "Plates",
      paper: "Paper",
      bags: "Bags",
      safety: "Safety",
      accessories: "Accessories",
    }
    return p.category === map[key]
  }

  const filteredProducts = products.filter((p) => keyToFilter(selectedKey, p))

  return (
    <main className="bg-gradient-to-b from-emerald-50 via-green-50 to-white min-h-screen">
      <Navigation />

      <div className="pt-32 px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 mb-8 font-semibold">
            <ArrowLeft size={20} />
            Back to Home
          </Link>

          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-bold text-emerald-900 mb-6">All Products</h1>
            <p className="text-emerald-700 text-2xl max-w-3xl mx-auto leading-relaxed">
              Complete range of eco-friendly packaging solutions
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center mb-16">
            {categories.map(({ key, label, icon: Icon, color }) => {
              const active = selectedKey === key
              const colorMap: Record<string, string> = {
                emerald: "bg-emerald-600",
                amber: "bg-amber-600",
                teal: "bg-teal-600",
                sky: "bg-sky-600",
                lime: "bg-lime-600",
                rose: "bg-rose-600",
                indigo: "bg-indigo-600",
              }
              const activeBg = `${colorMap[color] || "bg-emerald-600"} text-white shadow-lg`
              const inactive = "bg-white text-emerald-700 border-2 border-emerald-200 hover:bg-emerald-50"
              return (
                <button
                  key={key}
                  onClick={() => setSelectedKey(key)}
                  className={`px-6 py-3 rounded-full font-bold transition-all duration-200 inline-flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-emerald-300 hover:scale-105 active:scale-95 ${
                    active ? activeBg : inactive
                  }`}
                >
                  <Icon size={18} className={active ? "opacity-100" : "opacity-80"} />
                  {label}
                </button>
              )
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProducts.map((product, index) => {
              const Icon = product.icon
              return (
                <Link key={product.id} href={`/products/${product.id}`}>
                  <div
                    className="reveal opacity-0 translate-y-6 group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-transform duration-300 ease-out hover:-translate-y-3 cursor-pointer h-full will-change-transform"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="relative h-80 overflow-hidden bg-emerald-100">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 ease-out will-change-transform"
                      />
                      <div
                        className={`absolute top-4 right-4 px-4 py-2 rounded-full text-base font-bold ${
                          product.customizable ? "bg-amber-500 text-white" : "bg-emerald-600 text-white"
                        }`}
                      >
                        {product.category}
                      </div>
                      {product.customizable && (
                        <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                          Customizable
                        </div>
                      )}
                    </div>

                    <div className="p-8">
                      <div className="flex items-center gap-3 mb-3">
                        <Icon className="text-emerald-600" size={28} />
                        <h3 className="text-2xl font-bold text-emerald-900">{product.name}</h3>
                      </div>
                      <p className="text-emerald-600 text-lg mb-6">{product.description}</p>

                      <button className="w-full bg-gradient-to-r from-emerald-600 to-green-600 text-white py-3 rounded-lg hover:shadow-lg transition-transform duration-200 hover:scale-[1.02] font-bold text-lg">
                        View Details
                      </button>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
