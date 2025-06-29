"use client"

import { useState } from "react"
import Image from "next/image"
import {
  Package,
  Plus,
  Search,
  Filter,
  Edit,
  Trash2,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  AlertTriangle,
  AlertCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import main1 from "@/assets/main1.jpg"
import main2 from "@/assets/main2.jpg"
import main3 from "@/assets/main3.jpg"
import main4 from "@/assets/main4.jpg"
import main5 from "@/assets/main5.jpg"
import main6 from "@/assets/main6.jpg"
import main7 from "@/assets/main7.jpg"
import main8 from "@/assets/main8.jpg"
import main9 from "@/assets/main9.jpg"
import main10 from "@/assets/main10.jpg"

// Sample product data
const initialProducts = [
  {
    id: 1,
    title: "Hoodie Urban Vibes",
    price: 399000,
    category: "Atasan",
    stock: 45,
    status: "Aktif",
    image: main2,
  },
  {
    id: 2,
    title: "Kaos Street Style",
    price: 249000,
    category: "Atasan",
    stock: 78,
    status: "Aktif",
    image: main1,
  },
  {
    id: 3,
    title: "Celana Cargo Flow",
    price: 499000,
    category: "Bawahan",
    stock: 32,
    status: "Aktif",
    image: main3,
  },
  {
    id: 4,
    title: "Sneakers Wave Rider",
    price: 799000,
    category: "Alas Kaki",
    stock: 15,
    status: "Aktif",
    image: main4,
  },
  {
    id: 5,
    title: "Beanie Vibe Check",
    price: 199000,
    category: "Aksesoris",
    stock: 60,
    status: "Aktif",
    image: main5,
  },
  {
    id: 6,
    title: "Jaket Sunset Fade",
    price: 899000,
    category: "Atasan",
    stock: 0,
    status: "Habis",
    image: main6,
  },
  {
    id: 7,
    title: "Kemeja Formal Slim",
    price: 450000,
    category: "Atasan",
    stock: 25,
    status: "Aktif",
    image: main7,
  },
  {
    id: 8,
    title: "Celana Jeans Vintage",
    price: 550000,
    category: "Bawahan",
    stock: 18,
    status: "Aktif",
    image: main8,
  },
  {
    id: 9,
    title: "Topi Baseball Classic",
    price: 150000,
    category: "Aksesoris",
    stock: 40,
    status: "Aktif",
    image: main9,
  },
  {
    id: 10,
    title: "Sandal Comfort Plus",
    price: 299000,
    category: "Alas Kaki",
    stock: 0,
    status: "Habis",
    image: main10,
  },
]

export default function ProductsPage() {
  const [products, setProducts] = useState(initialProducts)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [deleteProductId, setDeleteProductId] = useState<number | null>(null)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)

  // Format price to IDR
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  // Filter products based on search query and category
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true
    return matchesSearch && matchesCategory
  })

  // Get unique categories
  const categories = Array.from(new Set(products.map((product) => product.category)))

  // Get stats
  const totalProducts = products.length
  const activeProducts = products.filter((p) => p.status === "Aktif").length
  const outOfStockProducts = products.filter((p) => p.stock === 0).length

  // Get status badge styling
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Aktif":
        return "bg-green-100 text-green-800 hover:bg-green-200"
      case "Habis":
        return "bg-red-100 text-red-800 hover:bg-red-200"
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-200"
    }
  }

  // Handle delete product
  const handleDeleteProduct = (productId: number) => {
    setDeleteProductId(productId)
    setIsDeleteDialogOpen(true)
  }

  // Confirm delete product
  const confirmDeleteProduct = () => {
    if (deleteProductId) {
      setProducts(products.filter((product) => product.id !== deleteProductId))
      setDeleteProductId(null)
      setIsDeleteDialogOpen(false)
    }
  }

  // Cancel delete product
  const cancelDeleteProduct = () => {
    setDeleteProductId(null)
    setIsDeleteDialogOpen(false)
  }

  // Get product to delete
  const productToDelete = products.find((product) => product.id === deleteProductId)

  return (
    <div className="h-full flex flex-col p-4 sm:p-6 overflow-auto animate-fade-in">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 sm:mb-8 gap-4 animate-slide-up">
        <div>
          <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">Manajemen Produk</h1>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">Kelola dan pantau semua produk toko Anda</p>
        </div>
        <Button className="bg-pink-600 hover:bg-pink-700 text-white px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
          <Plus className="mr-2 h-3 w-3 sm:h-4 w-4" /> Tambah Produk
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 sm:gap-6 grid-cols-2 lg:grid-cols-3 mb-6 sm:mb-8">
        {[
          {
            title: "Total Produk",
            value: totalProducts,
            icon: Package,
            color: "blue",
            delay: "0ms",
          },
          {
            title: "Produk Aktif",
            value: activeProducts,
            icon: TrendingUp,
            color: "green",
            delay: "100ms",
          },
          {
            title: "Stok Habis",
            value: outOfStockProducts,
            icon: AlertTriangle,
            color: "red",
            delay: "200ms",
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
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs sm:text-sm font-medium text-gray-600 mb-2">{stat.title}</p>
                  <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div
                  className={`h-10 w-10 sm:h-12 w-12 lg:h-14 w-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                    stat.color === "blue"
                      ? "bg-blue-100 text-blue-600"
                      : stat.color === "green"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                  }`}
                >
                  <stat.icon className="h-5 w-5 sm:h-6 w-6 lg:h-7 w-7" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Content Card - Full height utilization */}
      <div
        className="bg-white rounded-xl shadow-lg overflow-hidden flex-1 flex flex-col animate-slide-up"
        style={{ animationDelay: "0.3s" }}
      >
        {/* Card Header */}
        <div className="p-4 sm:p-6 border-b border-gray-100 flex-shrink-0">
          <div className="mb-4">
            <h2 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900">Daftar Produk</h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">Kelola semua produk toko Anda</p>
          </div>

          {/* Filters */}
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-3 w-3 sm:h-4 w-4 text-gray-400" />
              <Input
                type="search"
                placeholder="Cari produk berdasarkan nama..."
                className="pl-8 sm:pl-10 pr-4 py-2 sm:py-3 text-xs sm:text-sm border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-3">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="gap-2 px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105"
                  >
                    <Filter className="h-3 w-3 sm:h-4 w-4" /> Kategori
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48">
                  <DropdownMenuItem
                    onClick={() => setSelectedCategory(null)}
                    className="text-xs sm:text-sm hover:bg-pink-50 hover:text-pink-600"
                  >
                    Semua Kategori
                  </DropdownMenuItem>
                  {categories.map((category) => (
                    <DropdownMenuItem
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className="text-xs sm:text-sm hover:bg-pink-50 hover:text-pink-600"
                    >
                      {category}
                    </DropdownMenuItem>
                  ))}
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
                  <th className="p-2 sm:p-4 font-semibold text-xs sm:text-sm lg:text-base text-gray-700">Produk</th>
                  <th className="p-2 sm:p-4 font-semibold text-xs sm:text-sm lg:text-base text-gray-700 hidden sm:table-cell">
                    Kategori
                  </th>
                  <th className="p-2 sm:p-4 font-semibold text-xs sm:text-sm lg:text-base text-gray-700">Harga</th>
                  <th className="p-2 sm:p-4 font-semibold text-xs sm:text-sm lg:text-base text-gray-700 hidden lg:table-cell">
                    Stok
                  </th>
                  <th className="p-2 sm:p-4 font-semibold text-xs sm:text-sm lg:text-base text-gray-700">Status</th>
                  <th className="p-2 sm:p-4 font-semibold text-xs sm:text-sm lg:text-base text-gray-700 text-right">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredProducts.map((product, index) => (
                  <tr
                    key={product.id}
                    className="hover:bg-gray-50 transition-all duration-300 group animate-slide-up opacity-0"
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animationFillMode: "forwards",
                    }}
                  >
                    <td className="p-2 sm:p-4">
                      <div className="flex items-center">
                        <div className="relative h-10 w-10 sm:h-12 w-12 lg:h-14 w-14 flex-shrink-0 group">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.title}
                            fill
                            className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <div className="ml-3 sm:ml-4 min-w-0 flex-1">
                          <p className="text-xs sm:text-sm lg:text-base font-semibold text-gray-900 group-hover:text-pink-600 transition-colors duration-300 truncate">
                            {product.title}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">ID: {product.id}</p>
                          <div className="sm:hidden mt-1">
                            <Badge
                              variant="secondary"
                              className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800"
                            >
                              {product.category}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="p-2 sm:p-4 hidden sm:table-cell">
                      <Badge
                        variant="secondary"
                        className="px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors duration-300"
                      >
                        {product.category}
                      </Badge>
                    </td>
                    <td className="p-2 sm:p-4">
                      <div className="text-xs sm:text-sm lg:text-base font-bold text-gray-900">
                        {formatPrice(product.price)}
                      </div>
                    </td>
                    <td className="p-2 sm:p-4 hidden lg:table-cell">
                      <div
                        className={`text-xs sm:text-sm lg:text-base font-semibold ${
                          product.stock === 0
                            ? "text-red-600"
                            : product.stock <= 20
                              ? "text-yellow-600"
                              : "text-gray-900"
                        }`}
                      >
                        {product.stock}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {product.stock === 0 ? "Habis" : product.stock <= 20 ? "Stok rendah" : "Tersedia"}
                      </div>
                    </td>
                    <td className="p-2 sm:p-4">
                      <Badge
                        className={`px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm font-medium rounded-full transition-all duration-300 ${getStatusBadge(
                          product.status,
                        )}`}
                      >
                        {product.status}
                      </Badge>
                      <div className="lg:hidden mt-1">
                        <div
                          className={`text-xs font-semibold ${
                            product.stock === 0
                              ? "text-red-600"
                              : product.stock <= 20
                                ? "text-yellow-600"
                                : "text-gray-900"
                          }`}
                        >
                          Stok: {product.stock}
                        </div>
                      </div>
                    </td>
                    <td className="p-2 sm:p-4 text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 sm:h-10 w-10 hover:bg-gray-100 transition-all duration-300 hover:scale-110"
                          >
                            <MoreHorizontal className="h-4 w-4 sm:h-5 w-5" />
                            <span className="sr-only">Aksi</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-48">
                          <DropdownMenuItem className="text-xs sm:text-sm hover:bg-pink-50 hover:text-pink-600">
                            <Edit className="mr-2 h-3 w-3 sm:h-4 w-4" /> Edit Produk
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            className="text-xs sm:text-sm text-red-600 hover:bg-red-50"
                            onClick={() => handleDeleteProduct(product.id)}
                          >
                            <Trash2 className="mr-2 h-3 w-3 sm:h-4 w-4" /> Hapus Produk
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
          <div className="p-4 sm:p-6 border-t border-gray-100 bg-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 flex-shrink-0">
            <div className="text-xs sm:text-sm text-gray-500">
              Menampilkan {filteredProducts.length} dari {products.length} produk
            </div>
            <div className="flex items-center justify-center sm:justify-end space-x-2">
              <Button
                variant="outline"
                size="icon"
                disabled
                className="h-8 w-8 sm:h-10 w-10 border-gray-300 hover:bg-gray-50"
              >
                <ChevronLeft className="h-3 w-3 sm:h-4 w-4" />
                <span className="sr-only">Halaman sebelumnya</span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="bg-pink-50 text-pink-600 border-pink-200 hover:bg-pink-100 px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm"
              >
                1
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-gray-300 hover:bg-gray-50 px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm"
              >
                2
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 sm:h-10 w-10 border-gray-300 hover:bg-gray-50 transition-all duration-300 hover:scale-105"
              >
                <ChevronRight className="h-3 w-3 sm:h-4 w-4" />
                <span className="sr-only">Halaman berikutnya</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent className="sm:max-w-md">
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2 text-base sm:text-lg">
              <AlertCircle className="h-5 w-5 text-red-600" />
              Konfirmasi Hapus Produk
            </AlertDialogTitle>
            <AlertDialogDescription className="text-xs sm:text-sm">
              Apakah Anda yakin ingin menghapus produk ini? Tindakan ini tidak dapat dibatalkan.
              {productToDelete && (
                <div className="mt-3 p-3 bg-gray-50 rounded-lg border">
                  <div className="flex items-center gap-3">
                    <div className="relative h-10 w-10 flex-shrink-0">
                      <Image
                        src={productToDelete.image || "/placeholder.svg"}
                        alt={productToDelete.title}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs sm:text-sm font-semibold text-gray-900 truncate">{productToDelete.title}</p>
                      <p className="text-xs text-gray-500">ID: {productToDelete.id}</p>
                      {productToDelete.stock > 0 && (
                        <p className="text-xs text-amber-600 font-medium">
                          ⚠️ Produk masih memiliki stok: {productToDelete.stock}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex-col sm:flex-row gap-2">
            <AlertDialogCancel onClick={cancelDeleteProduct} className="text-xs sm:text-sm">
              Batal
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmDeleteProduct}
              className="bg-red-600 hover:bg-red-700 text-xs sm:text-sm"
            >
              Ya, Hapus Produk
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
