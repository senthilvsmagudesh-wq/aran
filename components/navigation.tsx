"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Leaf } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-emerald-100">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center">
            <Leaf className="text-white" size={24} />
          </div>
          <h1 className="text-xl font-bold text-emerald-900">Aran Packaging</h1>
        </Link>

        <div className="hidden md:flex gap-8">
          <Link href="/" className="text-emerald-700 hover:text-emerald-900 font-medium transition-colors">
            Home
          </Link>
          <Link href="/products" className="text-emerald-700 hover:text-emerald-900 font-medium transition-colors">
            Products
          </Link>
          <a href="/#features" className="text-emerald-700 hover:text-emerald-900 font-medium transition-colors">
            Features
          </a>
          <a href="/#about" className="text-emerald-700 hover:text-emerald-900 font-medium transition-colors">
            About
          </a>
          <a href="/#contact" className="text-emerald-700 hover:text-emerald-900 font-medium transition-colors">
            Contact
          </a>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-emerald-700">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-emerald-100 p-4 space-y-3">
          <Link
            href="/"
            className="block text-emerald-700 hover:text-emerald-900 font-medium"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/products"
            className="block text-emerald-700 hover:text-emerald-900 font-medium"
            onClick={() => setIsOpen(false)}
          >
            Products
          </Link>
          <a
            href="/#features"
            className="block text-emerald-700 hover:text-emerald-900 font-medium"
            onClick={() => setIsOpen(false)}
          >
            Features
          </a>
          <a
            href="/#about"
            className="block text-emerald-700 hover:text-emerald-900 font-medium"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="/#contact"
            className="block text-emerald-700 hover:text-emerald-900 font-medium"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  )
}
