"use client"

import { useState } from "react"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { Star, ShoppingCart, Heart } from "lucide-react"

interface ProductCardProps {
  id: number
  title: string
  price: number
  description: string
  image: string | StaticImageData
  rating: number
  reviewCount: number
}

export default function ProductCard({ id, title, price, description, image, rating, reviewCount }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Format price to IDR
  const formattedPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price)

  return (
    <div
      className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/products/${id}`} className="block relative">
        <div className="relative h-64 sm:h-72 w-full overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}  
            alt={title}
            fill
            className={`object-cover transition-transform duration-700 ${isHovered ? "scale-110" : "scale-100"}`}
          />
          <div
            className={`absolute inset-0 bg-black/10 transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          ></div>
        </div>

        {/* Quick action buttons */}
        <div
          className={`absolute top-4 right-4 flex flex-col space-y-2 transition-all duration-300 ${
            isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
          }`}
        >
          <button
            className="bg-white p-2 rounded-full shadow-md hover:bg-pink-50 transition-colors duration-300"
            aria-label="Add to wishlist"
          >
            <Heart className="w-5 h-5 text-pink-600" />
          </button>
          <button
            className="bg-pink-600 p-2 rounded-full shadow-md hover:bg-pink-700 transition-colors duration-300"
            aria-label="Add to cart"
          >
            <ShoppingCart className="w-5 h-5 text-white" />
          </button>
        </div>
      </Link>

      <div className="p-4 sm:p-5">
        <Link href={`/products/${id}`}>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 group-hover:text-pink-600 transition-colors duration-300">
            {title}
          </h3>
        </Link>

        <div className="flex items-center mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-2">({reviewCount} ulasan)</span>
        </div>

        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>

        <div className="flex items-center justify-between">
          <span className="text-lg sm:text-xl font-bold text-pink-600">{formattedPrice}</span>
          <Link
            href={`/products/${id}`}
            className="text-sm font-medium text-gray-900 hover:text-pink-600 transition-colors duration-300"
          >
            Detail
          </Link>
        </div>
      </div>
    </div>
  )
}
