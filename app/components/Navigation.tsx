'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Add scroll event listener
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 50)
    })
  }

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className={`text-3xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-beauty-pink-500' : 'text-white'
            }`}>
              BeautyGlow
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/products" 
              className={`text-lg font-medium transition-colors duration-300 ${
                isScrolled ? 'text-gray-600 hover:text-beauty-pink-500' : 'text-white hover:text-beauty-pink-200'
              }`}>
              Products
            </Link>
            <Link href="/categories" 
              className={`text-lg font-medium transition-colors duration-300 ${
                isScrolled ? 'text-gray-600 hover:text-beauty-pink-500' : 'text-white hover:text-beauty-pink-200'
              }`}>
              Categories
            </Link>
            <Link href="/about" 
              className={`text-lg font-medium transition-colors duration-300 ${
                isScrolled ? 'text-gray-600 hover:text-beauty-pink-500' : 'text-white hover:text-beauty-pink-200'
              }`}>
              About
            </Link>
            <Link href="/contact" 
              className={`text-lg font-medium transition-colors duration-300 ${
                isScrolled ? 'text-gray-600 hover:text-beauty-pink-500' : 'text-white hover:text-beauty-pink-200'
              }`}>
              Contact
            </Link>
            <button className={`px-6 py-2 rounded-full transition-all duration-300 ${
              isScrolled 
                ? 'bg-beauty-pink-500 text-white hover:bg-beauty-pink-600' 
                : 'bg-white/90 text-beauty-pink-500 hover:bg-white'
            }`}>
              Cart (0)
            </button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-pink-500"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/products"
              className="block px-3 py-2 text-gray-600 hover:text-pink-500"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/categories"
              className="block px-3 py-2 text-gray-600 hover:text-pink-500"
              onClick={() => setIsOpen(false)}
            >
              Categories
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-gray-600 hover:text-pink-500"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-gray-600 hover:text-pink-500"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <button className="w-full text-left px-3 py-2 text-gray-600 hover:text-pink-500">
              Cart (0)
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
