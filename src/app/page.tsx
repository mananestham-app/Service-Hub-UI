"use client"

import Link from "next/link"
import { useState } from "react"
import { Utensils, ChefHat, QrCode, ArrowRight, ChevronDown, Info } from "lucide-react"

export default function Home() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-primary-600 p-2 rounded-lg">
              <Utensils className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">Tap-to-Eat</span>
          </div>
          <div className="flex gap-8 items-center">
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 text-gray-700 hover:text-primary-600 transition"
              >
                Services
                <ChevronDown className={`h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 py-2 w-48 z-50">
                  <Link
                    href="/tap-to-eat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Tap to Eat
                  </Link>
                  <Link
                    href="/find-a-chef"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Find a Chef
                  </Link>
                </div>
              )}
            </div>
            <Link href="/about" className="text-gray-700 hover:text-primary-600 transition flex items-center gap-2">
              <Info className="h-4 w-4" />
              About
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Order Food & Book Chefs
          <span className="text-primary-600"> Instantly</span>
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
          Scan QR codes to browse restaurant menus and order food, or find and book professional chefs for your events - all without downloading an app.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/tap-to-eat"
            className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition flex items-center gap-2"
          >
            <QrCode className="h-5 w-5" />
            Scan to Order
          </Link>
          <Link
            href="/find-a-chef"
            className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition border border-gray-300 flex items-center gap-2"
          >
            <ChefHat className="h-5 w-5" />
            Find a Chef
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Services</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Tap to Eat Card */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-md transition">
            <div className="bg-primary-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
              <QrCode className="h-8 w-8 text-primary-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Tap to Eat</h3>
            <p className="text-gray-600 mb-4">
              Scan a QR code at any restaurant to browse menus, add items to cart, and pay online - no app required.
            </p>
            <Link
              href="/tap-to-eat"
              className="text-primary-600 font-semibold hover:text-primary-700 flex items-center gap-1"
            >
              Try it now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Find a Chef Card */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-md transition">
            <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
              <ChefHat className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Find a Chef</h3>
            <p className="text-gray-600 mb-4">
              Discover professional chefs for home cooking or events. Browse by cuisine, rating, and availability.
            </p>
            <Link
              href="/find-a-chef"
              className="text-primary-600 font-semibold hover:text-primary-700 flex items-center gap-1"
            >
              Browse chefs <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-6 py-16 bg-gray-50 rounded-lg">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              1
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Scan QR Code</h3>
            <p className="text-gray-600">Simply scan the QR code at the restaurant or chef profile</p>
          </div>
          <div className="text-center">
            <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              2
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Browse & Select</h3>
            <p className="text-gray-600">Explore menus or chef profiles and make your selection</p>
          </div>
          <div className="text-center">
            <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              3
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Order & Pay</h3>
            <p className="text-gray-600">Place your order or booking and pay securely online</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 text-center text-gray-600 border-t border-gray-200 mt-16">
        <p>&copy; 2024 Tap-to-Eat Platform. All rights reserved.</p>
      </footer>
    </div>
  )
}
