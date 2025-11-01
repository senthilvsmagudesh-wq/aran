"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-emerald-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src="/divine-mart-logo.png" alt="Aran Innovative Packaging Logo" width={36} height={36} className="rounded" />
              <h3 className="text-xl font-bold">Aran Innovative Packaging</h3>
            </div>
            <p className="text-emerald-100 text-sm leading-relaxed">
              No.10,<br />
              J.Jayarathana Complex,<br />
              Omalur Main Rd, Five roads,<br />
              Salem, Tamil Nadu 636004
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-base">Products</h4>
            <ul className="space-y-2 text-emerald-100">
              <li>
                <Link href="/products" className="hover:text-white transition-colors text-sm">
                  Eco-Friendly Containers
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors text-sm">
                  Compostable Packaging
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors text-sm">
                  Disposables
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-base">Company</h4>
            <ul className="space-y-2 text-emerald-100">
              <li>
                <Link href="/#about" className="hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#features" className="hover:text-white transition-colors text-sm">
                  Why Us
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-base">Follow Us</h4>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/share/19E9fNtrzs/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-emerald-800 rounded-full hover:bg-emerald-700 transition-colors"
                aria-label="Facebook"
                title="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://x.com/aran_innov_pack?t=bdFedk9h1i3sAKZQu-PBqw&s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-emerald-800 rounded-full hover:bg-emerald-700 transition-colors"
                aria-label="X (Twitter)"
                title="X (Twitter)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M18.244 2H21.5l-7.52 8.592L23 22h-6.828l-5.35-6.338L4.6 22H1.34l8.06-9.2L1 2h6.93l4.823 5.833L18.244 2Zm-1.195 18h1.976L7.045 4H4.96L17.05 20Z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/aran-innovative-packaging-1ba569218?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-emerald-800 rounded-full hover:bg-emerald-700 transition-colors"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://wa.me/918610101752?text=Hello%2C%20I%20am%20interested%20in%20Aran%20Innovative%20Packaging.%20Can%20you%20please%20provide%20details%20about%20your%20products%20and%20solutions%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-emerald-800 rounded-full hover:bg-emerald-700 transition-colors"
                aria-label="WhatsApp"
                title="WhatsApp"
                onClick={async (e) => {
                  const msg =
                    "Hello, I am interested in Aran Innovative Packaging. Can you please provide details about your products and solutions?"
                  try {
                    await navigator.clipboard.writeText(msg)
                  } catch {}
                  const url = `https://wa.me/918610101752?text=${encodeURIComponent(msg)}`
                  ;(e.currentTarget as HTMLAnchorElement).href = url
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 256 256"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M187.6 68.4A87.8 87.8 0 0 0 128 44a88 88 0 0 0-75.9 129.7L40 224l51.5-11.9A88 88 0 0 0 128 212h.1a88 88 0 0 0 59.5-151.6ZM128.1 196a68 68 0 0 1-34.8-9.5l-2-.1-30.7 7.1 6.6-29.9-.7-2.2A68 68 0 1 1 128.1 196Zm39.7-47.2c-2.2-1.1-13.3-6.6-15.3-7.4s-3.6-1.1-5.2 1.1-6 7.4-7.4 9-2.7 1.6-5 .6a55.5 55.5 0 0 1-16.3-10 61.3 61.3 0 0 1-11.4-14c-1.2-2-.1-3.1.9-4.2l3-3.5c1-1.1 1.6-2 2.4-3.4a3.9 3.9 0 0 0 .2-3.7c-.6-1.1-5.3-12.7-7.3-17.4s-3.9-3.8-5.3-3.8h-4.5a8.6 8.6 0 0 0-6.2 2.9c-2.1 2.3-8.1 7.9-8.1 19.2s8.3 22.3 9.4 23.8 16.4 25.1 39.8 35.2 23.9 6.6 28.3 6.2 13.9-5.7 15.9-11.2 2-10.3 1.4-11.2-2.1-1.6-4.3-2.7Z"/>
                </svg>
              </a>
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
