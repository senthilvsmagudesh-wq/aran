"use client"

import { useState } from "react"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { products } from "@/lib/products-data"
import { ArrowLeft } from "lucide-react"

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", "Customizable", "Containers", "Accessories", "Paper", "Plates", "Safety", "Bags"]

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (p) => p.category === selectedCategory || (selectedCategory === "Customizable" && p.customizable),
        )

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

          <div className="flex flex-wrap gap-3 justify-center mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-3 rounded-full font-bold transition-all ${
                  selectedCategory === cat
                    ? "bg-emerald-600 text-white shadow-lg"
                    : "bg-white text-emerald-600 border-2 border-emerald-600 hover:bg-emerald-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProducts.map((product, index) => {
              const Icon = product.icon
              return (
                <Link key={product.id} href={`/products/${product.id}`}>
                  <div
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 cursor-pointer h-full"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="relative h-80 overflow-hidden bg-emerald-100">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
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

                      <button className="w-full bg-gradient-to-r from-emerald-600 to-green-600 text-white py-3 rounded-lg hover:shadow-lg transition-all hover:scale-105 font-bold text-lg">
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
