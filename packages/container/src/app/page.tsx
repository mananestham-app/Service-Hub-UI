"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { Utensils, ChefHat, QrCode, ArrowRight, ChevronDown, Info, Sparkles, Zap, Globe, TrendingUp, Menu, X, Star, Shield, Clock, Users } from "lucide-react"

export default function Home() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    const handleScroll = () => setScrollY(window.scrollY)
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousedown', handleClickOutside)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-primary-200/20 rounded-full blur-3xl animate-pulse"
          style={{
            left: `${mousePosition.x * 0.05}px`,
            top: `${mousePosition.y * 0.05}px`,
            transform: `translate(-50%, -50%)`
          }}
        />
        <div 
          className="absolute w-64 h-64 bg-blue-200/20 rounded-full blur-2xl animate-pulse"
          style={{
            right: `${100 - mousePosition.x * 0.02}px`,
            top: `${scrollY * 0.1}px`,
            transform: 'translate(50%, -50%)'
          }}
        />
        <div 
          className="absolute w-80 h-80 bg-purple-200/20 rounded-full blur-2xl animate-pulse"
          style={{
            left: '50%',
            bottom: `${100 - scrollY * 0.05}px`,
            transform: 'translateX(-50%)'
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary-400/30 rounded-full animate-pulse"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 12}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-lg border-b border-gray-200/50 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3 group">
            <div className="bg-gradient-to-r from-primary-600 to-blue-600 p-3 rounded-xl shadow-lg group-hover:shadow-xl transition-all group-hover:scale-110">
              <Utensils className="h-6 w-6 text-white group-hover:rotate-12 transition-transform" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-primary-600 bg-clip-text text-transparent">Service Hub</span>
          </div>
          <div className="flex gap-8 items-center">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 text-gray-700 hover:text-primary-600 transition"
              >
                Services
                <ChevronDown className={`h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 py-2 w-64 z-50">
                  <a
                    href={process.env.NEXT_PUBLIC_ENVIRONMENT === 'production' ? process.env.NEXT_PUBLIC_TAP_TO_EAT_URL || 'https://service-hub-tap-to-eat.vercel.app/tap-to-eat' : process.env.NEXT_PUBLIC_ENVIRONMENT === 'staging' ? process.env.NEXT_PUBLIC_TAP_TO_EAT_URL || 'https://service-hub-tap-to-eat-staging.vercel.app/tap-to-eat' : 'http://localhost:3001'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors group"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <div className="flex items-center justify-center w-8 h-8 bg-primary-100 rounded-lg group-hover:bg-primary-200 transition-colors">
                      <Utensils className="h-4 w-4 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">Tap to Eat</div>
                      <div className="text-sm text-gray-500">Restaurant ordering</div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-primary-600 transition-colors" />
                  </a>
                  <a
                    href={process.env.NEXT_PUBLIC_ENVIRONMENT === 'production' ? process.env.NEXT_PUBLIC_FIND_A_CHEF_URL || 'https://service-hub-find-a-chef.vercel.app/find-a-chef' : process.env.NEXT_PUBLIC_ENVIRONMENT === 'staging' ? process.env.NEXT_PUBLIC_FIND_A_CHEF_URL || 'https://service-hub-find-a-chef-staging.vercel.app/find-a-chef' : 'http://localhost:3002'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-secondary-50 hover:text-secondary-700 transition-colors group"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <div className="flex items-center justify-center w-8 h-8 bg-secondary-100 rounded-lg group-hover:bg-secondary-200 transition-colors">
                      <ChefHat className="h-4 w-4 text-secondary-600" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">Find a Chef</div>
                      <div className="text-sm text-gray-500">Chef booking service</div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-secondary-600 transition-colors" />
                  </a>
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
      <section className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-2">
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-50 to-blue-50 px-6 py-3 rounded-full mb-8 border border-primary-200/50 shadow-lg hover:shadow-xl transition-all group">
              <Sparkles className="h-4 w-4 text-primary-600 animate-spin" />
              <span className="text-primary-700 font-semibold text-sm group-hover:scale-105 transition-transform">🚀 Revolutionary Micro-Frontend Platform</span>
            </div>
            
            {/* Epic Headline */}
            <div className="relative mb-8">
              <h1 className="text-6xl lg:text-7xl font-black leading-tight mb-4">
                <span className="bg-gradient-to-r from-gray-900 via-primary-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
                  Transform
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary-600 to-orange-600 bg-clip-text text-transparent">
                  Dining Forever
                </span>
              </h1>
              <div className="absolute -top-4 -right-8 w-16 h-16 bg-yellow-400 rounded-full animate-bounce opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-8 w-20 h-20 bg-blue-400 rounded-full animate-pulse opacity-20 blur-xl"></div>
            </div>
            
            {/* Enhanced Description */}
            <p className="text-xl text-gray-700 mb-10 max-w-2xl leading-relaxed">
              Step into the future of culinary excellence with our cutting-edge micro-frontend architecture. 
              <span className="font-bold text-primary-600"> Instant ordering</span>, 
              <span className="font-bold text-orange-600"> elite chefs</span>, 
              <span className="font-bold text-blue-600"> zero friction</span> - all powered by next-generation technology.
            </p>
            
            {/* Epic CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <a
                href="http://localhost:3001"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-gradient-to-r from-primary-600 to-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all hover:scale-105 flex items-center justify-center gap-4"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-blue-700 translate-y-full group-hover:translate-y-0 transition-transform"></div>
                <div className="relative flex items-center gap-4">
                  <QrCode className="h-6 w-6 group-hover:rotate-180 transition-transform duration-500" />
                  <span>Order Food Now</span>
                  <Zap className="h-5 w-5 group-hover:animate-pulse" />
                </div>
              </a>
              <a
                href="http://localhost:3002"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-gradient-to-r from-orange-500 to-red-500 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all hover:scale-105 flex items-center justify-center gap-4 border-2 border-orange-200"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 translate-y-full group-hover:translate-y-0 transition-transform"></div>
                <div className="relative flex items-center gap-4">
                  <ChefHat className="h-6 w-6 group-hover:rotate-180 transition-transform duration-500" />
                  <span>Book Elite Chef</span>
                  <TrendingUp className="h-5 w-5 group-hover:animate-bounce" />
                </div>
              </a>
            </div>
            
            {/* Enhanced Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="group bg-white/80 backdrop-blur p-4 rounded-xl border border-gray-200/50 hover:shadow-xl transition-all hover:scale-105">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-green-600 rounded-full animate-pulse"></div>
                  <span className="font-bold text-gray-900 group-hover:text-green-600 transition">Lightning Fast</span>
                </div>
                <p className="text-sm text-gray-600">Instant access to services</p>
              </div>
              <div className="group bg-white/80 backdrop-blur p-4 rounded-xl border border-gray-200/50 hover:shadow-xl transition-all hover:scale-105">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full animate-pulse"></div>
                  <span className="font-bold text-gray-900 group-hover:text-blue-600 transition">Zero Downloads</span>
                </div>
                <p className="text-sm text-gray-600">No app required</p>
              </div>
              <div className="group bg-white/80 backdrop-blur p-4 rounded-xl border border-gray-200/50 hover:shadow-xl transition-all hover:scale-105">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-4 h-4 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full animate-pulse"></div>
                  <span className="font-bold text-gray-900 group-hover:text-purple-600 transition">Fort Knox Security</span>
                </div>
                <p className="text-sm text-gray-600">Bank-level encryption</p>
              </div>
            </div>
          </div>
          
          {/* Epic Live Services Dashboard */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-blue-600 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
            <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-3xl p-8 shadow-2xl border border-purple-500/30 backdrop-blur-xl">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent flex items-center gap-2">
                  <Globe className="h-6 w-6 text-purple-400 animate-spin" />
                  Live Command Center
                </h3>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-bold">ONLINE</span>
                </div>
              </div>
              
              <div className="space-y-6">
                {/* Tap-to-Eat Service */}
                <div className="group bg-gradient-to-r from-primary-900/50 to-blue-900/50 rounded-2xl p-6 border border-primary-500/30 hover:border-primary-400 transition-all hover:shadow-2xl hover:shadow-primary-500/20">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-gradient-to-r from-primary-500 to-blue-500 p-3 rounded-xl group-hover:scale-110 transition-transform">
                        <QrCode className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-lg">Tap-to-Eat</h4>
                        <p className="text-sm text-primary-300">Restaurant Ordering System</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-green-400 font-bold text-lg">ACTIVE</div>
                      <div className="text-xs text-gray-400">Port 3001</div>
                    </div>
                  </div>
                  <div className="bg-slate-900/50 rounded-xl p-3">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Response</span>
                        <span className="text-green-400 font-bold">12ms</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Uptime</span>
                        <span className="text-green-400 font-bold">99.9%</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Find-a-Chef Service */}
                <div className="group bg-gradient-to-r from-orange-900/50 to-red-900/50 rounded-2xl p-6 border border-orange-500/30 hover:border-orange-400 transition-all hover:shadow-2xl hover:shadow-orange-500/20">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-xl group-hover:scale-110 transition-transform">
                        <ChefHat className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-lg">Find-a-Chef</h4>
                        <p className="text-sm text-orange-300">Elite Chef Booking</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-green-400 font-bold text-lg">ACTIVE</div>
                      <div className="text-xs text-gray-400">Port 3002</div>
                    </div>
                  </div>
                  <div className="bg-slate-900/50 rounded-xl p-3">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Response</span>
                        <span className="text-green-400 font-bold">8ms</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Uptime</span>
                        <span className="text-green-400 font-bold">100%</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* System Stats */}
                <div className="pt-6 border-t border-purple-500/30">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-slate-800/50 rounded-xl p-3">
                      <div className="text-3xl font-black text-white">2</div>
                      <div className="text-xs text-gray-400">Services</div>
                    </div>
                    <div className="bg-slate-800/50 rounded-xl p-3">
                      <div className="text-3xl font-black text-green-400">100%</div>
                      <div className="text-xs text-gray-400">Uptime</div>
                    </div>
                    <div className="bg-slate-800/50 rounded-xl p-3">
                      <div className="text-3xl font-black text-purple-400">∞</div>
                      <div className="text-xs text-gray-400">Scalability</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
            <a
              href="http://localhost:3001"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 font-semibold hover:text-primary-700 flex items-center gap-1"
            >
              Try it now <ArrowRight className="h-4 w-4" />
            </a>
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
            <a
              href="http://localhost:3002"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 font-semibold hover:text-primary-700 flex items-center gap-1"
            >
              Browse chefs <ArrowRight className="h-4 w-4" />
            </a>
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
        <p>&copy; 2026 Service Hub Platform. All rights reserved.</p>
      </footer>
    </div>
  )
}
