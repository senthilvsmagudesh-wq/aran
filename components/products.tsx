"use client"

import { Package, Leaf, Droplet, Zap } from "lucide-react"
import Link from "next/link"

const products = [
  {
    id: 1,
    name: "Bio Carry Bags",
    description: "Biodegradable carry bags for eco-conscious packaging",
    image: "/pa1.jpg",
    category: "Customizable",
    icon: Package,
    customizable: true,
  },
  {
    id: 15,
    name: "Pouches",
    description: "Customizable retail and food-grade pouches",
    image: "/pouch.jpg",
    category: "Customizable",
    icon: Package,
    customizable: true,
  },
  {
    id: 2,
    name: "Brown Bag & Covers",
    description: "Brown Paper Bags and Paper Covers for natural packaging",
    image: "/WhatsApp Image 2025-11-05 at 14.34.21_2cc2ab39.jpg",
    category: "Customizable",
    icon: Leaf,
    customizable: true,
  },
  {
    id: 3,
    name: "Bio Paper Cups & Containers",
    description: "Biodegradable paper cups and containers for beverages and food",
    image: "/IMG-20251105-WA0006.jpg",
    category: "Customizable",
    icon: Package,
    customizable: true,
  },
  {
    id: 4,
    name: "PP, LDPE & BOPP Pouches",
    description: "Flexible plastic pouches in various materials for packaging",
    image: "/plastic-pouches-pp-ldpe-bopp.jpg",
    category: "Customizable",
    icon: Droplet,
    customizable: true,
  },
  {
    id: 5,
    name: "Aluminium Containers",
    description: "Durable aluminium containers and wraps for food storage",
    image: "/IMG-20251106-WA0008.jpg",
    category: "Containers",
    icon: Package,
  },
  {
    id: 6,
    name: "PP Food Containers",
    description: "Food-grade PP containers for takeaway and storage",
    image: "/IMG-20251105-WA0016.jpg",
    category: "Containers",
    icon: Droplet,
  },
  {
    id: 13,
    name: "PP Juice Cups",
    description: "Disposable PP cups for juices and cold beverages",
    image: "/IMG-20251106-WA0003.jpg",
    category: "Containers",
    icon: Droplet,
  },
  {
    id: 14,
    name: "PP Sweet Boxes",
    description: "PP boxes designed for sweets and gifting",
    image: "/001.jpg",
    category: "Containers",
    icon: Droplet,
  },
  {
    id: 7,
    name: "PET Hinged Containers",
    description: "Clear PET hinged containers for secure, display-ready packaging",
    image: "/007.jpg",
    category: "Containers",
    icon: Package,
  },
  {
    id: 16,
    name: "Dessert Cups",
    description: "Elegant PET dessert cups for single-serve presentations",
    image: "/IMG-20251106-WA0012.jpg",
    category: "Containers",
    icon: Package,
  },
  {
    id: 8,
    name: "Wooden Cutlery & Paper Straw",
    description: "Eco-friendly wooden cutlery and biodegradable paper straws",
    image: "/wooden-cutlery-paper-straws.jpg",
    category: "Accessories",
    icon: Leaf,
  },
  {
    id: 9,
    name: "Napkin Tissue Paper",
    description: "Soft and absorbent napkin tissue paper for food service",
    image: "/napkin-tissue-paper.jpg",
    category: "Paper",
    icon: Package,
  },
  {
    id: 10,
    name: "Areca Plates",
    description: "Natural fiber plates made from areca materials",
    image: "/areca-bagasse-plates-natural-fiber.jpg",
    category: "Plates",
    icon: Leaf,
  },
  {
    id: 17,
    name: "Bagasse Plates",
    description: "Biodegradable plates made from sugarcane bagasse",
    image: "/arpl1.jpg",
    category: "Plates",
    icon: Leaf,
  },
  {
    id: 11,
    name: "Hand Gloves & Bouffant Caps",
    description: "Protective hand gloves and bouffant caps for food handling",
    image: "/hand-gloves-bouffant-caps.jpg",
    category: "Safety",
    icon: Zap,
  },
  {
    id: 12,
    name: "Garbage Bags",
    description: "Durable garbage bags for waste management and disposal",
    image: "/garbage-bags-waste-management.jpg",
    category: "Bags",
    icon: Package,
  },
]

export default function Products() {
  return (
    <section id="products" className="py-32 px-4 bg-white/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-6xl md:text-7xl font-bold text-emerald-900 mb-6">All Products</h2>
          <p className="text-emerald-700 text-2xl max-w-3xl mx-auto leading-relaxed">
            Complete range of eco-friendly packaging solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, index) => {
            const Icon = product.icon
            return (
              <div
                key={product.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 animate-fade-in-up"
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

                  {product.customizable ? (
                    <Link
                      href={`/?product=${encodeURIComponent(product.name)}#contact`}
                      className="w-full inline-flex items-center justify-center bg-gradient-to-r from-emerald-600 to-green-600 text-white py-3 rounded-lg hover:shadow-lg transition-all hover:scale-105 font-bold text-lg"
                    >
                      Request Custom Quote
                    </Link>
                  ) : (
                    <Link
                      href={`/products/${product.id}`}
                      className="w-full inline-flex items-center justify-center bg-gradient-to-r from-emerald-600 to-green-600 text-white py-3 rounded-lg hover:shadow-lg transition-all hover:scale-105 font-bold text-lg"
                    >
                      Learn More
                    </Link>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
