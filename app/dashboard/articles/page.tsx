"use client"

import { useState } from "react"
import Image from "next/image"
import {
  Search,
  Filter,
  Plus,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  Edit,
  Trash2,
  Eye,
  TrendingUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
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
    status: "Dipublikasikan",
    views: 1250,
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
    status: "Dipublikasikan",
    views: 980,
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
    status: "Dipublikasikan",
    views: 765,
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
    status: "Dipublikasikan",
    views: 1100,
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
    status: "Dipublikasikan",
    views: 890,
  },
  {
    id: 6,
    title: "Kolaborasi Brand Terbaru 2025",
    excerpt:
      "Kolaborasi fashion yang paling dinantikan tahun ini. Lihat bagaimana desainer top bergabung untuk menciptakan koleksi inovatif.",
    image: "/placeholder.svg?height=100&width=150",
    author: "Alex Rivera",
    date: "5 April 2025",
    category: "Berita Fashion",
    status: "Draft",
    views: 0,
  },
  {
    id: 7,
    title: "Panduan Perawatan Pakaian Premium",
    excerpt:
      "Cara merawat pakaian berkualitas tinggi agar tahan lama. Tips dan trik untuk menjaga investasi fashion Anda.",
    image: "/placeholder.svg?height=100&width=150",
    author: "Maya Wijaya",
    date: "1 April 2025",
    category: "Perawatan",
    status: "Draft",
    views: 0,
  },
]

export default function ArticlesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null)

  // Filter articles based on search query, category, and status
  const filteredArticles = articles.filter((article) => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory ? article.category === selectedCategory : true
    const matchesStatus = selectedStatus ? article.status === selectedStatus : true
    return matchesSearch && matchesCategory && matchesStatus
  })

  // Get unique categories
  const categories = Array.from(new Set(articles.map((article) => article.category)))

  // Get stats
  const totalArticles = articles.length
  const publishedArticles = articles.filter((a) => a.status === "Dipublikasikan").length
  const draftArticles = articles.filter((a) => a.status === "Draft").length
  const totalViews = articles.reduce((sum, article) => sum + article.views, 0)

  // Get status badge styling
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Dipublikasikan":
        return "bg-green-100 text-green-800 hover:bg-green-200"
      case "Draft":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-200"
    }
  }

  return (
    <div className="h-full flex flex-col p-6 overflow-auto animate-fade-in">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 gap-4 animate-slide-up">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Manajemen Artikel</h1>
          <p className="text-base text-gray-600 mt-1">Kelola dan pantau semua artikel blog Anda</p>
        </div>
        <Button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 text-base font-medium rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
          <Plus className="mr-2 h-5 w-5" /> Tulis Artikel
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {[
          {
            title: "Total Artikel",
            value: totalArticles,
            icon: Edit,
            color: "blue",
            delay: "0ms",
          },
          {
            title: "Dipublikasikan",
            value: publishedArticles,
            icon: Eye,
            color: "green",
            delay: "100ms",
          },
          {
            title: "Draft",
            value: draftArticles,
            icon: Edit,
            color: "yellow",
            delay: "200ms",
          },
          {
            title: "Total Views",
            value: totalViews.toLocaleString(),
            icon: TrendingUp,
            color: "purple",
            delay: "300ms",
          },
        ].map((stat, index) => (
          <Card
            key={index}
            className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up opacity-0"
            style={{
              animationDelay: stat.delay,
              animationFillMode: "forwards",
            }}
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-base font-medium text-gray-600 mb-2">{stat.title}</p>
                  <p className="text-2xl lg:text-3xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div
                  className={`h-12 w-12 sm:h-14 sm:w-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                    stat.color === "blue"
                      ? "bg-blue-100 text-blue-600"
                      : stat.color === "green"
                        ? "bg-green-100 text-green-600"
                        : stat.color === "yellow"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-purple-100 text-purple-600"
                  }`}
                >
                  <stat.icon className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Content Card - Full height utilization */}
      <div
        className="bg-white rounded-xl shadow-lg overflow-hidden flex-1 flex flex-col animate-slide-up"
        style={{ animationDelay: "0.4s" }}
      >
        {/* Card Header */}
        <div className="p-6 border-b border-gray-100 flex-shrink-0">
          <div className="mb-4">
            <h2 className="text-xl font-bold text-gray-900">Daftar Artikel</h2>
            <p className="text-base text-gray-600 mt-1">Kelola semua artikel blog Anda</p>
          </div>

          {/* Filters */}
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="search"
                placeholder="Cari artikel berdasarkan judul..."
                className="pl-10 pr-4 py-3 text-base border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-3">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="gap-2 px-4 py-3 text-base border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105"
                  >
                    <Filter className="h-5 w-5" /> Kategori
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48">
                  <DropdownMenuItem
                    onClick={() => setSelectedCategory(null)}
                    className="text-base hover:bg-pink-50 hover:text-pink-600"
                  >
                    Semua Kategori
                  </DropdownMenuItem>
                  {categories.map((category) => (
                    <DropdownMenuItem
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className="text-base hover:bg-pink-50 hover:text-pink-600"
                    >
                      {category}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="gap-2 px-4 py-3 text-base border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105"
                  >
                    <Filter className="h-5 w-5" /> Status
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48">
                  <DropdownMenuItem
                    onClick={() => setSelectedStatus(null)}
                    className="text-base hover:bg-pink-50 hover:text-pink-600"
                  >
                    Semua Status
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => setSelectedStatus("Dipublikasikan")}
                    className="text-base hover:bg-pink-50 hover:text-pink-600"
                  >
                    Dipublikasikan
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => setSelectedStatus("Draft")}
                    className="text-base hover:bg-pink-50 hover:text-pink-600"
                  >
                    Draft
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>

        {/* Table container - Flex-1 to fill remaining space */}
        <div className="flex-1 flex flex-col min-h-0">
          <div className="flex-1 overflow-auto">
            <table className="w-full">
              <thead className="sticky top-0 bg-gray-50 z-10">
                <tr className="text-left">
                  <th className="p-4 font-semibold text-base text-gray-700">Artikel</th>
                  <th className="p-4 font-semibold text-base text-gray-700">Kategori</th>
                  <th className="p-4 font-semibold text-base text-gray-700">Penulis</th>
                  <th className="p-4 font-semibold text-base text-gray-700">Tanggal</th>
                  <th className="p-4 font-semibold text-base text-gray-700">Status</th>
                  <th className="p-4 font-semibold text-base text-gray-700">Views</th>
                  <th className="p-4 font-semibold text-base text-gray-700 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredArticles.map((article, index) => (
                  <tr
                    key={article.id}
                    className="hover:bg-gray-50 transition-all duration-300 group animate-slide-up opacity-0"
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animationFillMode: "forwards",
                    }}
                  >
                    <td className="p-4">
                      <div className="flex items-center">
                        <div className="relative h-16 w-24 flex-shrink-0 group">
                          <Image
                            src={article.image || "/placeholder.svg"}
                            alt={article.title}
                            fill
                            className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <div className="ml-4 min-w-0 flex-1">
                          <p className="text-base font-semibold text-gray-900 group-hover:text-pink-600 transition-colors duration-300 line-clamp-2">
                            {article.title}
                          </p>
                          <p className="text-sm text-gray-500 line-clamp-1 mt-1">{article.excerpt}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <Badge
                        variant="secondary"
                        className="px-3 py-1.5 text-sm font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors duration-300"
                      >
                        {article.category}
                      </Badge>
                    </td>
                    <td className="p-4 text-base text-gray-700">{article.author}</td>
                    <td className="p-4 text-base text-gray-700">{article.date}</td>
                    <td className="p-4">
                      <Badge
                        className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ${getStatusBadge(
                          article.status,
                        )}`}
                      >
                        {article.status}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <div className="text-base font-bold text-gray-900">{article.views.toLocaleString()}</div>
                      <div className="text-sm text-gray-500 mt-1">views</div>
                    </td>
                    <td className="p-4 text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-10 w-10 hover:bg-gray-100 transition-all duration-300 hover:scale-110"
                          >
                            <MoreHorizontal className="h-5 w-5" />
                            <span className="sr-only">Aksi</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-48">
                          <DropdownMenuItem className="text-base hover:bg-pink-50 hover:text-pink-600">
                            <Eye className="mr-2 h-4 w-4" /> Lihat Artikel
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-base hover:bg-pink-50 hover:text-pink-600">
                            <Edit className="mr-2 h-4 w-4" /> Edit Artikel
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-base text-red-600 hover:bg-red-50">
                            <Trash2 className="mr-2 h-4 w-4" /> Hapus Artikel
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination - Sticky at bottom */}
          <div className="p-6 border-t border-gray-100 bg-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 flex-shrink-0">
            <div className="text-base text-gray-500">
              Menampilkan {filteredArticles.length} dari {articles.length} artikel
            </div>
            <div className="flex items-center justify-center sm:justify-end space-x-2">
              <Button variant="outline" size="icon" disabled className="h-10 w-10 border-gray-300 hover:bg-gray-50">
                <ChevronLeft className="h-5 w-5" />
                <span className="sr-only">Halaman sebelumnya</span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="bg-pink-50 text-pink-600 border-pink-200 hover:bg-pink-100 px-4 py-2 text-base"
              >
                1
              </Button>
              <Button variant="outline" size="sm" className="border-gray-300 hover:bg-gray-50 px-4 py-2 text-base">
                2
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 border-gray-300 hover:bg-gray-50 transition-all duration-300 hover:scale-105"
              >
                <ChevronRight className="h-5 w-5" />
                <span className="sr-only">Halaman berikutnya</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
