import Link from "next/link"
import Image from "next/image"
import { Calendar, User, ArrowRight } from "lucide-react"
import art1 from "@/assets/art1.jpg";
import art2 from "@/assets/art2.jpg";
import art3 from "@/assets/art3.jpg";
import art4 from "@/assets/art4.jpg";
import art5 from "@/assets/art5.jpg";
import art6 from "@/assets/art6.jpg";


// Sample article data
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
  },
]

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-3 sm:mb-4">
            Artikel StyleWave
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed">
            Tetap update dengan tren fashion terbaru, tips gaya, dan wawasan industri
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-12 sm:mb-16 lg:mb-20 animate-slide-up">
          <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 sm:h-80 lg:h-auto overflow-hidden">
               <Image
                  src={art6}
                  alt="Featured article"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-pink-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-sm sm:text-base font-medium shadow-lg">
                  Unggulan
                </div>
              </div>
              <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex flex-wrap items-center text-sm sm:text-base text-gray-500 mb-4 sm:mb-6">
                  <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    Trending
                  </span>
                  <span className="mx-2 hidden sm:inline">•</span>
                  <div className="flex items-center mt-2 sm:mt-0">
                    <Calendar className="w-4 h-4 mr-1.5" />
                    <span>5 Mei 2025</span>
                  </div>
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 sm:mb-4 lg:mb-6 hover:text-pink-600 transition-colors duration-300 leading-tight">
                  <Link href="/articles/featured" className="block">
                    Masa Depan Fashion: Teknologi Bertemu Gaya
                  </Link>
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                  Temukan bagaimana teknologi merevolusi industri fashion, dari pakaian yang dirancang AI hingga ruang
                  pas virtual dan proses manufaktur berkelanjutan.
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-auto">
                  <div className="flex items-center">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-200 mr-3 overflow-hidden relative">
                      <Image src="/placeholder.svg?height=50&width=50" alt="Author" fill className="object-cover" />
                    </div>
                    <span className="text-sm sm:text-base font-medium text-gray-700">Alex Rivera</span>
                  </div>
                  <Link
                    href="/articles/featured"
                    className="text-pink-600 hover:text-pink-700 flex items-center font-medium text-sm sm:text-base transition-all duration-300 hover:translate-x-1 group"
                  >
                    Baca Selengkapnya
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {articles.map((article, index) => (
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
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-pink-100 text-pink-800 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg text-xs sm:text-sm font-medium shadow-sm">
                  {article.category}
                </div>
              </Link>
              <div className="p-5 sm:p-6 lg:p-7">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 hover:text-pink-600 transition-colors duration-300 leading-tight">
                  <Link href={`/articles/${article.id}`}>{article.title}</Link>
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mt-auto">
                  <div className="flex items-center text-xs sm:text-sm text-gray-500">
                    <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5" />
                    <span className="font-medium">{article.author}</span>
                    <span className="mx-2">•</span>
                    <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5" />
                    <span>{article.date}</span>
                  </div>
                  <Link
                    href={`/articles/${article.id}`}
                    className="text-pink-600 hover:text-pink-700 text-sm sm:text-base font-medium flex items-center transition-all duration-300 hover:translate-x-1 group self-start sm:self-auto"
                  >
                    Baca Selengkapnya
                    <ArrowRight className="ml-1.5 w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 sm:mt-16 lg:mt-20 flex justify-center animate-slide-up">
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <button className="px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 text-sm sm:text-base font-medium hover:scale-105">
              Sebelumnya
            </button>
            <button className="px-3 py-2 sm:px-4 sm:py-2.5 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-all duration-300 text-sm sm:text-base font-medium shadow-lg hover:shadow-xl hover:scale-105">
              1
            </button>
            <button className="px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 text-sm sm:text-base font-medium hover:scale-105">
              2
            </button>
            <button className="px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 text-sm sm:text-base font-medium hover:scale-105">
              3
            </button>
            <button className="px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 text-sm sm:text-base font-medium hover:scale-105">
              Selanjutnya
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
