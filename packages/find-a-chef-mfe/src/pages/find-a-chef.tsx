import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ChefHat, Star, MapPin, DollarSign, Filter, ChevronDown, Info } from "lucide-react"
import { Chef } from "@tap-to-eat/shared"

const chefs: Chef[] = [
  {
    id: "1",
    name: "Marco Rossi",
    cuisine: "Italian",
    rating: 4.9,
    experience: "15 years",
    price: "$50/hour",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&h=400&fit=crop",
    available: true,
  },
  {
    id: "2",
    name: "Yuki Tanaka",
    cuisine: "Japanese",
    rating: 4.8,
    experience: "12 years",
    price: "$65/hour",
    image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=400&h=400&fit=crop",
    available: true,
  },
  {
    id: "3",
    name: "Sophie Martin",
    cuisine: "French",
    rating: 4.7,
    experience: "10 years",
    price: "$55/hour",
    image: "https://images.unsplash.com/photo-1598278254013-6b5e04f2770e?w=400&h=400&fit=crop",
    available: false,
  },
  {
    id: "4",
    name: "Carlos Rodriguez",
    cuisine: "Mexican",
    rating: 4.9,
    experience: "8 years",
    price: "$45/hour",
    image: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=400&h=400&fit=crop",
    available: true,
  },
  {
    id: "5",
    name: "Priya Sharma",
    cuisine: "Indian",
    rating: 4.8,
    experience: "14 years",
    price: "$40/hour",
    image: "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=400&h=400&fit=crop",
    available: true,
  },
  {
    id: "6",
    name: "James Wilson",
    cuisine: "American",
    rating: 4.6,
    experience: "6 years",
    price: "$35/hour",
    image: "https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?w=400&h=400&fit=crop",
    available: true,
  },
]

const cuisines = ["All", "Italian", "Japanese", "French", "Mexican", "Indian", "American"]

export default function FindAChef() {
  const [selectedCuisine, setSelectedCuisine] = useState("All")
  const [showAvailableOnly, setShowAvailableOnly] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const filteredChefs = chefs.filter(chef => {
    const cuisineMatch = selectedCuisine === "All" || chef.cuisine === selectedCuisine
    const availabilityMatch = !showAvailableOnly || chef.available
    return cuisineMatch && availabilityMatch
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 text-gray-700 hover:text-primary-600 transition">
            <ArrowLeft className="h-5 w-5" />
            <span>Back</span>
          </Link>
          <div className="flex items-center gap-6">
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
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Tap to Eat
                  </Link>
                  <Link
                    href="/find-a-chef"
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

      <div className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Professional Chefs</h1>
        <p className="text-gray-600 mb-8">Discover and book talented chefs for your home or events</p>

        {/* Filters */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="h-5 w-5 text-gray-700" />
            <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Cuisine</label>
            <div className="flex gap-2 flex-wrap">
              {cuisines.map(cuisine => (
                <button
                  key={cuisine}
                  onClick={() => setSelectedCuisine(cuisine)}
                  className={`px-4 py-2 rounded-lg font-medium transition ${
                    selectedCuisine === cuisine
                      ? "bg-primary-600 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
                  }`}
                >
                  {cuisine}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="available"
              checked={showAvailableOnly}
              onChange={(e) => setShowAvailableOnly(e.target.checked)}
              className="w-4 h-4 text-primary-600 rounded"
            />
            <label htmlFor="available" className="text-sm text-gray-700">
              Show available chefs only
            </label>
          </div>
        </div>

        {/* Chef Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredChefs.map(chef => (
            <div key={chef.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition">
              <div className="relative">
                <img
                  src={chef.image}
                  alt={chef.name}
                  className="w-full h-64 object-cover"
                />
                {!chef.available && (
                  <div className="absolute top-4 right-4 bg-gray-800 text-white px-3 py-1 rounded text-sm">
                    Unavailable
                  </div>
                )}
                {chef.available && (
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded text-sm">
                    Available
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{chef.name}</h3>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="font-semibold">{chef.rating}</span>
                  </div>
                </div>
                <p className="text-orange-600 font-semibold mb-3">{chef.cuisine} Cuisine</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{chef.experience} experience</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <DollarSign className="h-4 w-4" />
                    <span className="text-sm">{chef.price}</span>
                  </div>
                </div>

                <button
                  disabled={!chef.available}
                  className={`w-full py-2 rounded-lg font-semibold transition ${
                    chef.available
                      ? "bg-orange-600 text-white hover:bg-orange-700"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  {chef.available ? "Book Chef" : "Currently Unavailable"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredChefs.length === 0 && (
          <div className="text-center py-12 bg-white border border-gray-200 rounded-lg">
            <ChefHat className="h-12 w-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500">No chefs match your filters</p>
          </div>
        )}
      </div>
    </div>
  )
}
