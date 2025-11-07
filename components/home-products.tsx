"use client"

import Link from "next/link"
import { useState } from "react"
import { products } from "@/lib/products-data"
import { Grid3X3, Settings, Package, Utensils, FileText, ShoppingBag, ShieldCheck, Puzzle } from "lucide-react"

export default function HomeProducts() {
  type CatKey = "all" | "custom" | "containers" | "plates" | "paper" | "bags" | "safety" | "accessories"
  const [selectedKey, setSelectedKey] = useState<CatKey>("all")

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

  // Enforce fixed order for Featured Products regardless of category selection
  const featuredOrder = [
    "Bio Carry Bags",
    "Brown Bag & Covers",
    "Bio Paper Cups & Containers",
    "PP Food Containers",
    "PET Hinged Containers",
    "Aluminium Containers",
  ]
  const featuredProducts = featuredOrder
    .map((name) => products.find((p) => p.name === name))
    .filter(Boolean) as typeof products

  return (
    <section id="products" className="py-24 px-4 bg-white/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-6">Featured Products</h2>
          <p className="text-emerald-700 text-lg max-w-3xl mx-auto leading-relaxed">
            Explore our most popular eco-friendly packaging solutions
          </p>
        </div>

        <div className="hidden flex-wrap gap-3 justify-center mb-10">
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
                className={`px-5 py-2 rounded-full font-semibold transition-all duration-200 inline-flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-emerald-300 hover:scale-105 active:scale-95 ${
                  active ? activeBg : inactive
                }`}
              >
                <Icon size={16} className={active ? "opacity-100" : "opacity-80"} />
                {label}
              </button>
            )
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => {
            const Icon = product.icon
            const cardImage =
              product.name === "Brown Bag & Covers" && Array.isArray((product as any).images) && (product as any).images[1]
                ? (product as any).images[1]
                : (product.image || "/placeholder.svg")
            return (
              <Link key={product.id} href={`/products/${product.id}`} className="block">
                <div
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-transform duration-300 ease-out hover:-translate-y-2 animate-fade-in-up cursor-pointer h-full will-change-transform"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-80 overflow-hidden bg-emerald-100">
                    <img
                      src={cardImage}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 ease-out will-change-transform"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Icon className="text-emerald-600" size={24} />
                      <h3 className="text-xl font-bold text-emerald-900">{product.name}</h3>
                    </div>
                    <p className="text-emerald-600 text-base mb-5">{product.description}</p>

                    <div className="w-full bg-gradient-to-r from-emerald-600 to-green-600 text-white py-2 rounded-lg hover:shadow-lg transition-all hover:scale-105 font-bold text-base text-center">
                      View Details
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link href="/products">
            <button className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all hover:scale-105 font-bold text-lg">
              View All Products
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
