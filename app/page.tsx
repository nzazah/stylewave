import Link from "next/link"
import Image from "next/image"
import { ChevronRight, CalendarIcon, UserIcon, ArrowRight } from "lucide-react"

import BannerSlider from "@/components/banner-slider"
import ProductCard from "@/components/product-card"

import main1 from "@/assets/main1.jpg"
import main2 from "@/assets/main2.jpg"
import main3 from "@/assets/main3.jpg"

import art1 from "@/assets/art1.jpg"
import art2 from "@/assets/art2.jpg"
import art3 from "@/assets/art3.jpg"

import logo from "@/assets/logo.jpg"

// Sample Product Data
const featuredProducts = [
  {
    id: 1,
    title: "Hoodie Urban Vibes",
    price: 399000,
    description: "Nyaman, hangat, dan trendi—dibuat untuk semua pencinta fashion.",
    image: main2,
    rating: 5,
    reviewCount: 27,
  },
  {
    id: 2,
    title: "Kaos Street Style",
    price: 249000,
    description: "Grafis yang berani dan katun premium untuk tampilan sehari-hari Anda.",
    image: main1,
    rating: 4,
    reviewCount: 18,
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
]

// Sample Article Data
const featuredArticles = [
  {
    id: 1,
    title: "Tren Fashion Musim Panas 2025",
    excerpt:
      "Jelajahi tren terpanas untuk musim panas mendatang. Dari warna-warna cerah hingga material berkelanjutan.",
    author: "Jane Smith",
    date: "1 Mei 2025",
    category: "Tren Fashion",
    readTime: "5 menit",
    image: art1,
  },
  {
    id: 2,
    title: "Fashion Berkelanjutan: Panduan Lengkap",
    excerpt:
      "Cara membangun lemari pakaian ramah lingkungan tanpa mengorbankan gaya. Pelajari tentang brand etis.",
    author: "Mark Johnson",
    date: "25 April 2025",
    category: "Keberlanjutan",
    readTime: "7 menit",
    image: art2,
  },
  {
    id: 3,
    title: "Panduan Aksesori 101",
    excerpt:
      "Panduan lengkap untuk melengkapi tampilan Anda dengan aksesori sempurna. Tingkatkan gaya Anda.",
    author: "Sarah Lee",
    date: "20 April 2025",
    category: "Panduan Gaya",
    readTime: "4 menit",
    image: art3,
  },
]

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Banner */}
      <div className="animate-fade-in">
        <BannerSlider />
      </div>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between mb-8">
            <h2 className="text-2xl font-bold">Koleksi Terbaru</h2>
            <Link
              href="/products"
              className="flex items-center text-pink-600 hover:text-pink-700 group"
            >
              Lihat semua produk
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-slide-up opacity-0"
                style={{
                  animationDelay: `${index * 150}ms`,
                  animationFillMode: "forwards",
                }}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Article Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-2">Artikel & Tips Fashion</h2>
              <p className="text-gray-600 text-sm">Dapatkan inspirasi dan wawasan fashion terbaru</p>
            </div>
            <Link
              href="/articles"
              className="flex items-center text-pink-600 hover:text-pink-700 group"
            >
              Lihat semua artikel
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <div
                key={article.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl hover:-translate-y-2 transition-all animate-slide-up opacity-0"
                style={{
                  animationDelay: `${index * 150}ms`,
                  animationFillMode: "forwards",
                }}
              >
                <Link href={`/articles/${article.id}`}>
                  <div className="relative h-56">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition"
                    />
                    <div className="absolute top-4 left-4 bg-pink-100 text-pink-800 px-3 py-1 rounded text-xs">
                      {article.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-3">{article.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{article.excerpt}</p>
                    <div className="flex items-center text-xs text-gray-500 gap-2">
                      <UserIcon className="w-3 h-3" />
                      {article.author}
                      <span>•</span>
                      <CalendarIcon className="w-3 h-3" />
                      {article.date}
                      <div className="ml-auto flex items-center text-pink-600 hover:text-pink-700">
                        {article.readTime}
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 animate-slide-left">
            <h3 className="text-2xl font-bold">Temukan Gaya Khas Anda</h3>
            <p className="text-gray-700">
              StyleWave bukan sekadar toko—ini adalah tempat bermain gaya Anda. Dari tampilan minimalis hingga streetwear yang berani, kami mengkurasi apa yang penting untuk Anda.
            </p>
            <ul className="space-y-2">
              {[
                "Trendi & dikurasi oleh Gen Z",
                "Pilihan etis & berkelanjutan",
                "Rilis terbatas—tanpa restock",
                "Dinilai oleh komunitas",
                "Pengalaman belanja mobile-first",
              ].map((item, i) => (
                <li key={i} className="flex items-center">
                  <div className="w-2 h-2 bg-pink-600 rounded-full mr-3"></div>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="inline-block bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition"
            >
              Pelajari Lebih Lanjut
            </Link>
          </div>
          <div className="animate-slide-right">
            <div className="relative h-80 w-full group">
              <Image
                src={logo}
                alt="Features"
                fill
                className="object-cover rounded-lg shadow-lg group-hover:scale-105 transition"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-pink-600 to-pink-700 text-white relative">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 container mx-auto px-4 grid lg:grid-cols-4 gap-6 items-center">
          <div className="lg:col-span-3">
            <h3 className="text-2xl font-bold mb-2">Tampilan Berani, Cerita Nyata</h3>
            <p className="text-sm max-w-2xl">
              StyleWave lebih dari sekadar fashion—ini adalah gelombang identitas, kepercayaan diri, dan ekspresi berani.
            </p>
          </div>
          <Link
            href="/register"
            className="bg-white text-pink-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Bergabung Sekarang
          </Link>
        </div>
      </section>
    </div>
  )
}
