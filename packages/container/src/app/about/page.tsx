"use client"

import Link from "next/link"
import { ArrowLeft, Utensils, ChefHat, QrCode, Users, Shield, Globe, Clock, Smartphone, Star, Zap, ArrowRight } from "lucide-react"

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
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
            <a
              href="http://localhost:3001"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-primary-600 transition font-medium"
            >
              Tap to Eat
            </a>
            <a
              href="http://localhost:3002"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-primary-600 transition font-medium"
            >
              Find a Chef
            </a>
            <Link href="/" className="text-gray-700 hover:text-primary-600 transition flex items-center gap-2 font-medium">
              <ArrowLeft className="h-4 w-4" />
              Back
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-primary-600 to-blue-600 bg-clip-text text-transparent">
              Welcome to Service Hub
            </span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
            Your all-in-one platform that revolutionizes dining experiences through innovative technology. 
            We bring together restaurant ordering and chef booking in one seamless, app-free experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="http://localhost:3001"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-primary-600 to-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-3"
            >
              <QrCode className="h-5 w-5" />
              Try Tap to Eat
            </a>
            <a
              href="http://localhost:3002"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-3"
            >
              <ChefHat className="h-5 w-5" />
              Find a Chef
            </a>
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-primary-600 to-orange-600 bg-clip-text text-transparent">
              What We Offer
            </span>
          </h2>
          <div className="bg-white/80 backdrop-blur rounded-2xl p-8 shadow-xl border border-gray-200/50">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Service Hub is a revolutionary platform that combines two essential services under one roof, 
              designed to make your dining and culinary experiences effortless and enjoyable.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you're looking to order food at a restaurant or hire a professional chef for a special occasion, 
              our platform eliminates the hassle of multiple apps and complicated booking processes.
            </p>
          </div>
        </div>
      </section>

      {/* Services Deep Dive */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">
            Our Services
          </span>
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Tap-to-Eat Service */}
          <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-8 border border-primary-200/50 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-r from-primary-600 to-blue-600 p-4 rounded-xl">
                <QrCode className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Tap-to-Eat</h3>
                <p className="text-primary-600 font-medium">Smart Restaurant Ordering</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Smartphone className="h-5 w-5 text-primary-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">QR Code Menu Access</h4>
                  <p className="text-gray-600">Simply scan a QR code at any restaurant to instantly access their digital menu, complete with photos, descriptions, and prices.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Real-Time Ordering</h4>
                  <p className="text-gray-600">Browse menu items, customize your order, and send it directly to the kitchen in real-time. No more waiting for servers!</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-primary-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Secure Digital Payments</h4>
                  <p className="text-gray-600">Pay directly through the app using your preferred payment method. Split bills, add tips, and get digital receipts instantly.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-white/50 rounded-xl">
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Perfect for:</span> Quick lunches, family dinners, business meetings, and anyone who wants a seamless restaurant experience.
              </p>
            </div>
          </div>

          {/* Find-a-Chef Service */}
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-200/50 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4 rounded-xl">
                <ChefHat className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Find-a-Chef</h3>
                <p className="text-orange-600 font-medium">Elite Chef Booking</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Star className="h-5 w-5 text-orange-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Discover Professional Chefs</h4>
                  <p className="text-gray-600">Browse through our curated selection of professional chefs, each with detailed profiles, specialties, and customer reviews.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Users className="h-5 w-5 text-orange-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Personalized Dining Experiences</h4>
                  <p className="text-gray-600">Book chefs for intimate dinner parties, corporate events, cooking classes, or special dietary requirements.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Zap className="h-5 w-5 text-orange-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Hassle-Free Booking</h4>
                  <p className="text-gray-600">Check availability, compare rates, and book your preferred chef with just a few clicks. Manage all details through our platform.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-white/50 rounded-xl">
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Perfect for:</span> Birthday parties, wedding catering, corporate events, romantic dinners, and cooking enthusiasts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Why Choose Service Hub?
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="bg-white/80 backdrop-blur rounded-xl p-6 text-center hover:shadow-xl transition-all hover:scale-105 border border-gray-200/50">
            <div className="bg-gradient-to-r from-green-400 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Lightning Fast</h3>
            <p className="text-gray-600 text-sm">Skip the wait with instant QR access and real-time ordering</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur rounded-xl p-6 text-center hover:shadow-xl transition-all hover:scale-105 border border-gray-200/50">
            <div className="bg-gradient-to-r from-blue-400 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Smartphone className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">No Downloads</h3>
            <p className="text-gray-600 text-sm">Access everything through your browser - no app installation needed</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur rounded-xl p-6 text-center hover:shadow-xl transition-all hover:scale-105 border border-gray-200/50">
            <div className="bg-gradient-to-r from-purple-400 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Bank-Level Security</h3>
            <p className="text-gray-600 text-sm">Your payments and personal data are protected with enterprise-grade encryption</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur rounded-xl p-6 text-center hover:shadow-xl transition-all hover:scale-105 border border-gray-200/50">
            <div className="bg-gradient-to-r from-orange-400 to-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Premium Quality</h3>
            <p className="text-gray-600 text-sm">Curated selection of top-rated restaurants and professional chefs</p>
          </div>
        </div>
      </section>

      {/* Home Page Guide */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Navigating Your Experience
          </span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200/50 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">What to Expect on Our Home Page</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Service Overview Dashboard</h4>
                  <p className="text-gray-600">Get a bird's-eye view of all available services with real-time status indicators and quick access buttons.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Featured Options</h4>
                  <p className="text-gray-600">Discover trending restaurants, popular chefs, and special promotions highlighted just for you.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Easy Navigation</h4>
                  <p className="text-gray-600">Jump directly to any service with one click. Each service opens in a new tab for seamless multitasking.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Live Status Monitoring</h4>
                  <p className="text-gray-600">See real-time service performance, response times, and system uptime at a glance.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-white/50 rounded-xl border border-purple-200">
              <h4 className="font-bold text-gray-900 mb-3">Pro Tips:</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Bookmark your favorite restaurants and chefs for quick access</li>
                <li>• Use the service dashboard to compare options side by side</li>
                <li>• Check the live status before booking to ensure availability</li>
                <li>• Enable notifications for real-time updates on your orders and bookings</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Powered by Innovation
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-white/80 backdrop-blur rounded-2xl p-8 shadow-lg border border-gray-200/50">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Micro-Frontend Architecture</h3>
            <p className="text-gray-700 mb-4">
              Our cutting-edge micro-frontend architecture ensures maximum reliability and performance:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Independent services for maximum uptime</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Scalable infrastructure for growing demand</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Lightning-fast response times</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span>Zero-downtime deployments</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white/80 backdrop-blur rounded-2xl p-8 shadow-lg border border-gray-200/50">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Built For Everyone</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Restaurant Partners</h4>
                  <p className="text-gray-600 text-sm">Enhance customer experience and increase efficiency</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <ChefHat className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Professional Chefs</h4>
                  <p className="text-gray-600 text-sm">Grow your business and reach more clients</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Globe className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Food Lovers</h4>
                  <p className="text-gray-600 text-sm">Enjoy seamless dining experiences</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-primary-600 to-blue-600 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Dining Experience?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of users who have already discovered the convenience and innovation of Service Hub.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="http://localhost:3001"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary-600 px-10 py-4 rounded-xl font-bold hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-3"
            >
              <QrCode className="h-6 w-6" />
              Start Ordering Food
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="http://localhost:3002"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-orange-600 px-10 py-4 rounded-xl font-bold hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-3"
            >
              <ChefHat className="h-6 w-6" />
              Book a Chef
              <ArrowRight className="h-5 w-5" />
            </a>
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
