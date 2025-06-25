import Link from "next/link"
import Image from "next/image"
import { Calendar, User, ArrowRight } from "lucide-react"
import art1 from "@/assets/art1.jpg"
import art2 from "@/assets/art2.jpg"
import art3 from "@/assets/art3.jpg"
import art4 from "@/assets/art4.jpg"
import art5 from "@/assets/art5.jpg"
import art6 from "@/assets/art6.jpg"

// Complete article data - synchronized with detail page
const articles = [
  {
    id: 1,
    title: "Tren Fashion Musim Panas 2025",
    excerpt:
      "Jelajahi tren terpanas untuk musim panas mendatang. Dari warna-warna cerah hingga material berkelanjutan, kami punya semuanya.",
    image: art1,
    author: "Jane Smith",
    date: "1 Mei 2025",
    category: "Tren Fashion",
    readTime: "5 menit",
  },
  {
    id: 2,
    title: "Fashion Berkelanjutan: Panduan Lengkap",
    excerpt:
      "Cara membangun lemari pakaian ramah lingkungan tanpa mengorbankan gaya. Pelajari tentang brand etis dan praktik berkelanjutan.",
    image: art2,
    author: "Mark Johnson",
    date: "25 April 2025",
    category: "Keberlanjutan",
    readTime: "7 menit",
  },
  {
    id: 3,
    title: "Panduan Aksesori 101",
    excerpt:
      "Panduan lengkap untuk melengkapi tampilan Anda dengan aksesori sempurna. Tingkatkan gaya Anda dengan tips sederhana ini.",
    image: art3,
    author: "Sarah Lee",
    date: "20 April 2025",
    category: "Panduan Gaya",
    readTime: "4 menit",
  },
  {
    id: 4,
    title: "Ikon Gaya Gen Z",
    excerpt:
      "Melihat kepribadian yang membentuk tren fashion untuk generasi baru. Para influencer ini mengubah permainan.",
    image: art4,
    author: "David Chen",
    date: "15 April 2025",
    category: "Budaya",
    readTime: "6 menit",
  },
  {
    id: 5,
    title: "Evolusi Streetwear",
    excerpt:
      "Dari subkultur ke mainstream: perjalanan fashion streetwear. Temukan bagaimana gaya urban menjadi fenomena global.",
    image: art5,
    author: "Jane Smith",
    date: "10 April 2025",
    category: "Sejarah Fashion",
    readTime: "8 menit",
  },
  {
    id: 6,
    title: "Masa Depan Fashion: Teknologi Bertemu Gaya",
    excerpt:
      "Temukan bagaimana teknologi merevolusi industri fashion, dari pakaian yang dirancang AI hingga ruang pas virtual dan proses manufaktur berkelanjutan.",
    image: art6,
    author: "Alex Rivera",
    date: "5 Mei 2025",
    category: "Teknologi",
    readTime: "10 menit",
  },
]

// Get featured article (latest/most important)
const featuredArticle = articles.find((article) => article.id === 6) || articles[0]

// Get regular articles (excluding featured)
const regularArticles = articles.filter((article) => article.id !== 6)

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-fade-in">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Artikel StyleWave</h1>
          <p className="text-xs sm:text-sm lg:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Tetap update dengan tren fashion terbaru, tips gaya, dan wawasan industri
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-12 sm:mb-16 lg:mb-20 animate-slide-up">
          <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 sm:h-80 lg:h-auto overflow-hidden">
                <Image
                  src={featuredArticle.image || "/placeholder.svg"}
                  alt={featuredArticle.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-pink-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium shadow-lg">
                  Unggulan
                </div>
              </div>
              <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex flex-wrap items-center text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">
                  <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-xs font-medium">
                    {featuredArticle.category}
                  </span>
                  <span className="mx-2 hidden sm:inline">•</span>
                  <div className="flex items-center mt-2 sm:mt-0">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5" />
                    <span>{featuredArticle.date}</span>
                  </div>
                  <span className="mx-2 hidden sm:inline">•</span>
                  <span className="mt-2 sm:mt-0">{featuredArticle.readTime} baca</span>
                </div>
                <h2 className="text-base sm:text-lg lg:text-xl font-bold mb-3 sm:mb-4 lg:mb-6 hover:text-pink-600 transition-colors duration-300 leading-tight">
                  <Link href={`/articles/${featuredArticle.id}`} className="block">
                    {featuredArticle.title}
                  </Link>
                </h2>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-auto">
                  <div className="flex items-center">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-200 mr-3 overflow-hidden relative">
                      <Image src="/placeholder.svg?height=50&width=50" alt="Author" fill className="object-cover" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-gray-700">{featuredArticle.author}</span>
                  </div>
                  <Link
                    href={`/articles/${featuredArticle.id}`}
                    className="text-pink-600 hover:text-pink-700 flex items-center font-medium text-xs sm:text-sm transition-all duration-300 hover:translate-x-1 group"
                  >
                    Baca Selengkapnya
                    <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {regularArticles.map((article, index) => (
            <div
              key={article.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group animate-slide-up opacity-0"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "forwards",
              }}
            >
              <Link href={`/articles/${article.id}`} className="block relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-pink-100 text-pink-800 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg text-xs font-medium shadow-sm">
                  {article.category}
                </div>
              </Link>
              <div className="p-5 sm:p-6 lg:p-7">
                <h3 className="text-sm sm:text-base lg:text-lg font-bold mb-2 sm:mb-3 hover:text-pink-600 transition-colors duration-300 leading-tight">
                  <Link href={`/articles/${article.id}`}>{article.title}</Link>
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6 leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mt-auto">
                  <div className="flex items-center text-xs text-gray-500">
                    <User className="w-3 h-3 mr-1.5" />
                    <span className="font-medium">{article.author}</span>
                    <span className="mx-2">•</span>
                    <Calendar className="w-3 h-3 mr-1.5" />
                    <span>{article.date}</span>
                    <span className="mx-2">•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <Link
                    href={`/articles/${article.id}`}
                    className="text-pink-600 hover:text-pink-700 text-xs sm:text-sm font-medium flex items-center transition-all duration-300 hover:translate-x-1 group self-start sm:self-auto"
                  >
                    Baca Selengkapnya
                    <ArrowRight className="ml-1.5 w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 sm:mt-16 lg:mt-20 bg-white rounded-xl shadow-lg p-6 sm:p-8 lg:p-10 animate-slide-up">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
              Dapatkan Update Artikel Terbaru
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Berlangganan newsletter untuk mendapatkan artikel fashion terbaru, tips gaya, dan insight industri
              langsung ke email Anda
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-xs sm:text-sm"
              />
              <button className="bg-pink-600 text-white px-6 py-3 rounded-lg font-medium text-xs sm:text-sm hover:bg-pink-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                Berlangganan
              </button>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-12 sm:mt-16 lg:mt-20 flex justify-center animate-slide-up">
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <button className="px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 text-xs sm:text-sm font-medium hover:scale-105">
              Sebelumnya
            </button>
            <button className="px-3 py-2 sm:px-4 sm:py-2.5 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-all duration-300 text-xs sm:text-sm font-medium shadow-lg hover:shadow-xl hover:scale-105">
              1
            </button>
            <button className="px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 text-xs sm:text-sm font-medium hover:scale-105">
              2
            </button>
            <button className="px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 text-xs sm:text-sm font-medium hover:scale-105">
              3
            </button>
            <button className="px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 text-xs sm:text-sm font-medium hover:scale-105">
              Selanjutnya
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
