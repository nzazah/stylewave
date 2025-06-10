import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import BannerSlider from "@/components/banner-slider"
import ProductCard from "@/components/product-card"
import main1 from "@/assets/main1.jpg";
import main2 from "@/assets/main2.jpg";
import main3 from "@/assets/main3.jpg";

// Sample product data
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

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Banner */}
      <div className="animate-fade-in">
        <BannerSlider />
      </div>

      {/* Featured Products */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 md:mb-12 animate-slide-up">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-0">Koleksi Terbaru</h2>
            <Link
              href="/products"
              className="group flex items-center text-base sm:text-lg text-pink-600 hover:text-pink-700 transition-all duration-300 hover:translate-x-1"
            >
              lihat semua produk
              <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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

      {/* Best Features */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12 animate-slide-up">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Mengapa StyleWave?</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 animate-slide-left">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900">Temukan Gaya Khas Anda</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                StyleWave bukan sekadar toko—ini adalah tempat bermain gaya Anda. Dari tampilan minimalis hingga
                streetwear yang berani, kami mengkurasi apa yang penting untuk Anda.
              </p>
              <ul className="space-y-3">
                {[
                  "Trendi & dikurasi oleh Gen Z",
                  "Pilihan etis & berkelanjutan",
                  "Rilis terbatas—tanpa restock",
                  "Dinilai oleh komunitas",
                  "Pengalaman belanja mobile-first",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center text-sm sm:text-base text-gray-700 hover:text-pink-600 transition-colors duration-300 cursor-pointer group"
                  >
                    <div className="w-2 h-2 bg-pink-600 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="inline-block bg-pink-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-medium text-sm sm:text-base hover:bg-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Pelajari Lebih Lanjut
              </Link>
            </div>
            <div className="animate-slide-right">
              <div className="relative h-64 sm:h-80 lg:h-96 w-full group">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Features image"
                  fill
                  className="object-cover rounded-lg shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-pink-600 to-pink-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8 items-center animate-slide-up">
            <div className="lg:col-span-3 text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4">
                Tampilan <em className="font-light italic">Berani</em>, Cerita{" "}
                <em className="font-light italic">Nyata</em>
              </h3>
              <p className="text-sm sm:text-base lg:text-lg opacity-90 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                StyleWave lebih dari sekadar fashion—ini adalah gelombang identitas, kepercayaan diri, dan ekspresi
                berani.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Link
                href="#"
                className="bg-white text-pink-600 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-medium text-sm sm:text-base hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl inline-block"
              >
                Bergabung Sekarang
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 animate-pulse"></div>
        <div
          className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </section>
    </div>
  )
}
