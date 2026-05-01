"use client"

import Link from "next/link"
import { ArrowLeft, Utensils, ChefHat, QrCode, ChevronDown, Info, Heart, Users, Zap } from "lucide-react"
import { useState } from "react"

export default function About() {
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
            <Link href="/about" className="text-primary-600 font-semibold transition flex items-center gap-2">
              <Info className="h-4 w-4" />
              About
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Revolutionizing dining and chef services with QR technology and seamless booking experiences.
          </p>
        </div>

        {/* Mission */}
        <section className="bg-white border border-gray-200 rounded-lg p-8 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Heart className="h-8 w-8 text-primary-600" />
            <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            At Tap-to-Eat, we believe that great food and exceptional service should be accessible to everyone, 
            everywhere. Our mission is to bridge the gap between diners and restaurants, and connect people with 
            talented chefs who can bring their culinary expertise to homes and events. We're committed to making 
            the dining experience seamless, convenient, and enjoyable for everyone involved.
          </p>
        </section>

        {/* What We Offer */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-md transition">
              <div className="bg-primary-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <QrCode className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Tap to Eat</h3>
              <p className="text-gray-600">
                Scan QR codes at restaurants to instantly access menus, place orders, and make payments - 
                all without downloading any app. It's fast, convenient, and contactless.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-md transition">
              <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <ChefHat className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Find a Chef</h3>
              <p className="text-gray-600">
                Discover professional chefs for your home cooking needs or special events. Browse by cuisine, 
                check ratings, and book the perfect chef for your occasion.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Speed & Efficiency</h3>
              <p className="text-gray-600">
                We prioritize fast, seamless experiences that save you time and effort.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Community First</h3>
              <p className="text-gray-600">
                We build connections between diners, restaurants, and chefs to strengthen communities.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Passion for Food</h3>
              <p className="text-gray-600">
                We celebrate culinary excellence and help talented chefs showcase their skills.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-primary-600 rounded-lg p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Join thousands of users who are already enjoying the Tap-to-Eat experience.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/tap-to-eat"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center gap-2"
            >
              <QrCode className="h-5 w-5" />
              Try Tap to Eat
            </Link>
            <Link
              href="/find-a-chef"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center gap-2"
            >
              <ChefHat className="h-5 w-5" />
              Find a Chef
            </Link>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 text-center text-gray-600 border-t border-gray-200 mt-12">
        <p>&copy; 2024 Tap-to-Eat Platform. All rights reserved.</p>
      </footer>
    </div>
  )
}
