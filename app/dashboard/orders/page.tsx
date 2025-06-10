"use client"

import { useState } from "react"
import { Search, Filter, MoreHorizontal, ChevronLeft, ChevronRight, Eye, Download, Calendar, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

// Sample order data
const orders = [
  {
    id: "ORD12345678",
    customer: "Budi Santoso",
    email: "budi.santoso@example.com",
    date: "15 Mei 2025",
    total: 1411000,
    status: "Selesai",
    items: 3,
    payment: "Kartu Kredit",
  },
  {
    id: "ORD12345679",
    customer: "Siti Rahayu",
    email: "siti.rahayu@example.com",
    date: "10 Mei 2025",
    total: 748000,
    status: "Dalam Pengiriman",
    items: 2,
    payment: "Transfer Bank",
  },
  {
    id: "ORD12345680",
    customer: "Ahmad Hidayat",
    email: "ahmad.hidayat@example.com",
    date: "8 Mei 2025",
    total: 899000,
    status: "Diproses",
    items: 1,
    payment: "E-Wallet",
  },
  {
    id: "ORD12345681",
    customer: "Dewi Lestari",
    email: "dewi.lestari@example.com",
    date: "5 Mei 2025",
    total: 1250000,
    status: "Selesai",
    items: 4,
    payment: "Kartu Kredit",
  },
  {
    id: "ORD12345682",
    customer: "Eko Prasetyo",
    email: "eko.prasetyo@example.com",
    date: "2 Mei 2025",
    total: 450000,
    status: "Dibatalkan",
    items: 1,
    payment: "Transfer Bank",
  },
  {
    id: "ORD12345683",
    customer: "Rina Wijaya",
    email: "rina.wijaya@example.com",
    date: "30 April 2025",
    total: 675000,
    status: "Selesai",
    items: 2,
    payment: "E-Wallet",
  },
  {
    id: "ORD12345684",
    customer: "Doni Kusuma",
    email: "doni.kusuma@example.com",
    date: "28 April 2025",
    total: 1500000,
    status: "Selesai",
    items: 3,
    payment: "Kartu Kredit",
  },
  {
    id: "ORD12345685",
    customer: "Maya Sari",
    email: "maya.sari@example.com",
    date: "25 April 2025",
    total: 950000,
    status: "Selesai",
    items: 2,
    payment: "Transfer Bank",
  },
  {
    id: "ORD12345686",
    customer: "Rudi Hartono",
    email: "rudi.hartono@example.com",
    date: "22 April 2025",
    total: 325000,
    status: "Dibatalkan",
    items: 1,
    payment: "E-Wallet",
  },
  {
    id: "ORD12345687",
    customer: "Lina Susanti",
    email: "lina.susanti@example.com",
    date: "20 April 2025",
    total: 1350000,
    status: "Selesai",
    items: 3,
    payment: "Kartu Kredit",
  },
]

export default function OrdersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null)

  // Format price to IDR
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  // Filter orders based on search query and status
  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.email.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = selectedStatus ? order.status === selectedStatus : true
    return matchesSearch && matchesStatus
  })

  // Get status badge styling
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Selesai":
        return "bg-green-100 text-green-800 hover:bg-green-200"
      case "Dalam Pengiriman":
        return "bg-blue-100 text-blue-800 hover:bg-blue-200"
      case "Diproses":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
      case "Dibatalkan":
        return "bg-red-100 text-red-800 hover:bg-red-200"
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-200"
    }
  }

  return (
    <div className="h-full flex flex-col p-6 overflow-auto animate-fade-in">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 gap-4 animate-slide-up">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Manajemen Pesanan</h1>
          <p className="text-base text-gray-600 mt-1">Kelola dan pantau semua pesanan pelanggan</p>
        </div>
        <Button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 text-base font-medium rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
          <Download className="mr-2 h-5 w-5" /> Ekspor Data
        </Button>
      </div>

      {/* Content Card - Full height utilization */}
      <div
        className="bg-white rounded-xl shadow-lg overflow-hidden flex-1 flex flex-col animate-slide-up"
        style={{ animationDelay: "0.2s" }}
      >
        {/* Filters */}
        <div className="p-6 border-b border-gray-100 flex-shrink-0">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="search"
                placeholder="Cari berdasarkan ID pesanan, nama pelanggan, atau email..."
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
                    onClick={() => setSelectedStatus("Diproses")}
                    className="text-base hover:bg-pink-50 hover:text-pink-600"
                  >
                    Diproses
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => setSelectedStatus("Dalam Pengiriman")}
                    className="text-base hover:bg-pink-50 hover:text-pink-600"
                  >
                    Dalam Pengiriman
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => setSelectedStatus("Selesai")}
                    className="text-base hover:bg-pink-50 hover:text-pink-600"
                  >
                    Selesai
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => setSelectedStatus("Dibatalkan")}
                    className="text-base hover:bg-pink-50 hover:text-pink-600"
                  >
                    Dibatalkan
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
                  <th className="p-4 font-semibold text-base text-gray-700">ID Pesanan</th>
                  <th className="p-4 font-semibold text-base text-gray-700">Pelanggan</th>
                  <th className="p-4 font-semibold text-base text-gray-700">Tanggal</th>
                  <th className="p-4 font-semibold text-base text-gray-700">Total</th>
                  <th className="p-4 font-semibold text-base text-gray-700">Status</th>
                  <th className="p-4 font-semibold text-base text-gray-700">Pembayaran</th>
                  <th className="p-4 font-semibold text-base text-gray-700 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredOrders.map((order, index) => (
                  <tr
                    key={order.id}
                    className="hover:bg-gray-50 transition-all duration-300 group animate-slide-up opacity-0"
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animationFillMode: "forwards",
                    }}
                  >
                    <td className="p-4">
                      <div className="text-base font-semibold text-gray-900 group-hover:text-pink-600 transition-colors duration-300">
                        {order.id}
                      </div>
                      <div className="text-sm text-gray-500 mt-1">{order.items} item</div>
                    </td>
                    <td className="p-4">
                      <div className="text-base font-medium text-gray-900">{order.customer}</div>
                      <div className="flex items-center text-sm text-gray-600 mt-1">
                        <Mail className="h-3 w-3 mr-1" />
                        <span className="truncate">{order.email}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center text-base text-gray-700">
                        <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                        {order.date}
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="text-base font-bold text-gray-900">{formatPrice(order.total)}</div>
                    </td>
                    <td className="p-4">
                      <Badge
                        className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ${getStatusBadge(
                          order.status,
                        )}`}
                      >
                        {order.status}
                      </Badge>
                    </td>
                    <td className="p-4 text-base text-gray-700">{order.payment}</td>
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
                            <Eye className="mr-2 h-4 w-4" /> Lihat Detail
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-base hover:bg-pink-50 hover:text-pink-600">
                            <Download className="mr-2 h-4 w-4" /> Unduh Invoice
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
              Menampilkan {filteredOrders.length} dari {orders.length} pesanan
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
