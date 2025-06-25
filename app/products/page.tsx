"use client"

import { useState } from "react"
import ProductCard from "@/components/product-card"
import { Search, Filter, Tag, Truck } from "lucide-react"
import main1 from "@/assets/main1.jpg"
import main2 from "@/assets/main2.jpg"
import main3 from "@/assets/main3.jpg"
import main4 from "@/assets/main4.jpg"
import main5 from "@/assets/main5.jpg"
import main7 from "@/assets/main7.jpg"
import main8 from "@/assets/main8.jpg"
import main9 from "@/assets/main9.jpg"

// Sample product data
const products = [
  {
    id: 1,
    title: "Hoodie Urban Vibes",
    price: 399000,
    originalPrice: 499000,
    description: "Nyaman, hangat, dan trendi—dibuat untuk semua pencinta fashion.",
    image: main2,
    rating: 5,
    reviewCount: 27,
    isOnSale: true,
  },
  {
    id: 2,
    title: "Kaos Street Style",
    price: 249000,
    description: "Grafis yang berani dan katun premium untuk tampilan sehari-hari Anda.",
    image: main1,
    rating: 4,
    reviewCount: 18,
    isNew: true,
  },
  {
    id: 3,
    title: "Celana Cargo Flow",
    price: 499000,
    description: "Kantong fungsional dengan potongan santai untuk gaya dan kenyamanan maksimal.",
    image: main3,
    rating: 5,
    reviewCount: 32,
  },
  {
    id: 4,
    title: "Sneakers Wave Rider",
    price: 799000,
    description: "Sol empuk dengan desain yang siap untuk jalanan, nyaman sepanjang hari.",
    image: main4,
    rating: 4,
    reviewCount: 15,
  },
  {
    id: 5,
    title: "Beanie Vibe Check",
    price: 199000,
    description: "Tetap hangat dan stylish dengan aksesori penting ini.",
    image: main5,
    rating: 5,
    reviewCount: 23,
  },
  {
    id: 7,
    title: "Kemeja Formal Slim",
    price: 450000,
    description: "Tahan cuaca dengan warna gradien yang menarik perhatian.",
    image: main7,
    rating: 4,
    reviewCount: 12,
  },
  {
    id: 8,
    title: "Celana Jeans Vintage",
    price: 550000,
    description: "Tahan cuaca dengan warna gradien yang menarik perhatian.",
    image: main8,
    rating: 4,
    reviewCount: 12,
  },
  {
    id: 9,
    title: "Topi Baseball Classic",
    price: 150000,
    description: "Tahan cuaca dengan warna gradien yang menarik perhatian.",
    image: main9,
    rating: 4,
    reviewCount: 12,
  },
]

// Filter categories
const categories = [
  { id: "all", name: "Semua" },
  { id: "tops", name: "Atasan" },
  { id: "bottoms", name: "Bawahan" },
  { id: "footwear", name: "Alas Kaki" },
  { id: "accessories", name: "Aksesoris" },
]

const sortOptions = [
  { id: "popular", name: "Terpopuler" },
  { id: "newest", name: "Terbaru" },
  { id: "price-low", name: "Harga Terendah" },
  { id: "price-high", name: "Harga Tertinggi" },
  { id: "rating", name: "Rating Tertinggi" },
]

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("popular")

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8 sm:mb-12 animate-fade-in">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">Katalog Produk</h1>
          <p className="text-xs sm:text-sm lg:text-base text-gray-600 max-w-2xl leading-relaxed">
            Temukan gaya terbaru yang mendefinisikan tren dengan koleksi fashion pilihan kami
          </p>
        </div>

        {/* Promotional Info */}
        <div className="mb-8 bg-pink-50 border border-pink-200 rounded-lg p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center">
              <Truck className="w-5 h-5 text-pink-600 mr-3" />
              <div>
                <h3 className="text-sm font-semibold text-gray-900">Gratis Ongkos Kirim</h3>
                <p className="text-xs text-gray-600">Untuk pembelian minimal Rp 300.000</p>
              </div>
            </div>
            <div className="flex items-center">
              <Tag className="w-5 h-5 text-pink-600 mr-3" />
              <div>
                <h3 className="text-sm font-semibold text-gray-900">Diskon Member</h3>
                <p className="text-xs text-gray-600">Daftar dan dapatkan diskon 10%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Cari produk..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-sm"
            />
          </div>

          {/* Filters and Sort */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-pink-600 text-white shadow-md"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 text-xs sm:text-sm focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              >
                {sortOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 mb-12">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="animate-slide-up opacity-0"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "forwards",
              }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
          <div className="text-center max-w-xl mx-auto">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Dapatkan Update Koleksi Terbaru</h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-4">
              Berlangganan newsletter untuk mendapatkan info produk terbaru dan penawaran khusus
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-sm"
              />
              <button className="bg-pink-600 text-white px-6 py-2 rounded-lg font-medium text-sm hover:bg-pink-700 transition-colors">
                Berlangganan
              </button>
            </div>
          </div>
        </div>

        {/* Load More Button */}
        <div className="flex justify-center">
          <button className="bg-white border-2 border-pink-600 text-pink-600 hover:bg-pink-50 px-8 py-4 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center space-x-2">
            <span>Muat Lebih Banyak</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 animate-bounce"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
