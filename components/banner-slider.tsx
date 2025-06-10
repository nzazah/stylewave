"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import slider1 from "@/assets/slider1.jpg";
import slider2 from "@/assets/slider2.jpg";
import slider3 from "@/assets/slider3.jpg";

// Banner data
const banners = [
  {
    id: 1,
    title: "Koleksi Musim Panas",
    subtitle: "Temukan gaya terbaru untuk musim panas ini",
    cta: "Belanja Sekarang",
    image: slider1,
    link: "/collections/summer",
    color: "from-pink-600 to-purple-600",
  },
  {
    id: 2,
    title: "Urban Streetwear",
    subtitle: "Ekspresi gaya jalanan dengan koleksi eksklusif",
    cta: "Lihat Koleksi",
    image: slider2,
    link: "/collections/streetwear",
    color: "from-blue-600 to-indigo-600",
  },
  {
    id: 3,
    title: "Diskon Hingga 50%",
    subtitle: "Penawaran terbatas untuk item pilihan",
    cta: "Dapatkan Sekarang",
    image: slider3,
    link: "/sale",
    color: "from-red-600 to-orange-600",
  },
]

export default function BannerSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev === 0 ? banners.length - 1 : prev - 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [currentSlide])

  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute inset-0 w-full h-full transition-all duration-500 ease-in-out ${
            index === currentSlide
              ? "opacity-100 translate-x-0"
              : index < currentSlide
                ? "opacity-0 -translate-x-full"
                : "opacity-0 translate-x-full"
          }`}
        >
          <div className="relative w-full h-full">
            <Image
              src={banner.image || "/placeholder.svg"}
              alt={banner.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${banner.color} opacity-60`}></div>
            <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-24">
              <div className="max-w-xl text-white">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 animate-slide-up">
                  {banner.title}
                </h2>
                <p
                  className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 md:mb-8 opacity-90 animate-slide-up"
                  style={{ animationDelay: "0.2s" }}
                >
                  {banner.subtitle}
                </p>
                <Link
                  href={banner.link}
                  className="inline-block bg-white text-gray-900 px-6 py-3 rounded-lg font-medium text-sm sm:text-base hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-slide-up"
                  style={{ animationDelay: "0.4s" }}
                >
                  {banner.cta}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/50 transition-all duration-300 z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/50 transition-all duration-300 z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white scale-125" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  )
}
