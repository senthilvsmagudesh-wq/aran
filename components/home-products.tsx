"use client"

import Link from "next/link"
import { products } from "@/lib/products-data"

export default function HomeProducts() {
  const featuredProducts = products.slice(0, 6)

  return (
    <section id="products" className="py-24 px-4 bg-white/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-6">Featured Products</h2>
          <p className="text-emerald-700 text-lg max-w-3xl mx-auto leading-relaxed">
            Explore our most popular eco-friendly packaging solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => {
            const Icon = product.icon
            return (
              <Link key={product.id} href={`/products/${product.id}`}>
                <div
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up cursor-pointer h-full"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-64 overflow-hidden bg-emerald-100">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div
                      className={`absolute top-3 right-3 px-3 py-1 rounded-full text-sm font-bold ${
                        product.customizable ? "bg-amber-500 text-white" : "bg-emerald-600 text-white"
                      }`}
                    >
                      {product.category}
                    </div>
                    {product.customizable && (
                      <div className="absolute top-3 left-3 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                        Customizable
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Icon className="text-emerald-600" size={24} />
                      <h3 className="text-xl font-bold text-emerald-900">{product.name}</h3>
                    </div>
                    <p className="text-emerald-600 text-base mb-5">{product.description}</p>

                    <button className="w-full bg-gradient-to-r from-emerald-600 to-green-600 text-white py-2 rounded-lg hover:shadow-lg transition-all hover:scale-105 font-bold text-base">
                      View Details
                    </button>
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
