"use client"

import { useState } from "react"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { products } from "@/lib/products-data"
import { ArrowLeft, Check } from "lucide-react"
import { useParams } from "next/navigation"

export default function ProductDetail() {
  const params = useParams()
  const productId = Number.parseInt(params.id as string)
  const product = products.find((p) => p.id === productId)
  const [selectedImage, setSelectedImage] = useState(0)

  if (!product) {
    return (
      <main className="bg-gradient-to-b from-emerald-50 via-green-50 to-white min-h-screen">
        <Navigation />
        <div className="pt-32 px-4 pb-20 text-center">
          <h1 className="text-4xl font-bold text-emerald-900">Product not found</h1>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="bg-gradient-to-b from-emerald-50 via-green-50 to-white min-h-screen">
      <Navigation />

      <div className="pt-32 px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/products"
            className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 mb-8 font-semibold"
          >
            <ArrowLeft size={20} />
            Back to Products
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Images Section */}
            <div>
              <div className="bg-emerald-100 rounded-2xl overflow-hidden mb-6 h-96 lg:h-full">
                <img
                  src={product.images[selectedImage] || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`rounded-lg overflow-hidden border-4 transition-all h-24 ${
                      selectedImage === idx ? "border-emerald-600" : "border-transparent hover:border-emerald-300"
                    }`}
                  >
                    <img
                      src={img || "/placeholder.svg"}
                      alt={`${product.name} ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div>
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  {product.customizable && (
                    <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                      Customizable
                    </span>
                  )}
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-bold ${
                      product.customizable ? "bg-amber-500 text-white" : "bg-emerald-600 text-white"
                    }`}
                  >
                    {product.category}
                  </span>
                </div>
                <h1 className="text-5xl font-bold text-emerald-900 mb-4">{product.name}</h1>
                <p className="text-emerald-700 text-xl mb-6">{product.description}</p>
              </div>

              <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg">
                <h3 className="text-2xl font-bold text-emerald-900 mb-4">About This Product</h3>
                <p className="text-emerald-700 text-lg leading-relaxed mb-8">{product.details}</p>

                <h3 className="text-2xl font-bold text-emerald-900 mb-4">Specifications</h3>
                <ul className="space-y-3">
                  {product.specs.map((spec, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-emerald-700 text-lg">
                      <Check className="text-emerald-600" size={24} />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>

              <Link href={`/?product=${encodeURIComponent(product.name)}#contact`}>
                <button className="w-full bg-gradient-to-r from-emerald-600 to-green-600 text-white py-4 rounded-lg hover:shadow-lg transition-all hover:scale-105 font-bold text-xl mb-4">
                  Request Quote
                </button>
              </Link>

              <Link href="/products">
                <button className="w-full border-2 border-emerald-600 text-emerald-600 py-4 rounded-lg hover:bg-emerald-50 transition-all hover:scale-[1.01] font-bold text-xl">
                  View More Products
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
