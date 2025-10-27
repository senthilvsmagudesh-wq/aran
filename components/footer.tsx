"use client"

import { Leaf, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-emerald-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center">
                <Leaf className="text-white" size={20} />
              </div>
              <h3 className="text-xl font-bold">Aran Packaging</h3>
            </div>
            <p className="text-emerald-100 text-sm leading-relaxed">
              Sustainable packaging solutions for a better tomorrow.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-base">Products</h4>
            <ul className="space-y-2 text-emerald-100">
              <li>
                <a href="#products" className="hover:text-white transition-colors text-sm">
                  Eco-Friendly Containers
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors text-sm">
                  Compostable Packaging
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors text-sm">
                  Disposables
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-base">Company</h4>
            <ul className="space-y-2 text-emerald-100">
              <li>
                <a href="#about" className="hover:text-white transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors text-sm">
                  Why Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-base">Follow Us</h4>
            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="p-2 bg-emerald-800 rounded-full hover:bg-emerald-700 transition-colors"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-emerald-800 pt-6 text-center text-emerald-100 text-sm">
          <p>&copy; 2025 Aran Innovative Packaging. All rights reserved. | Committed to Sustainability</p>
        </div>
      </div>
    </footer>
  )
}
