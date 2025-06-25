"use client"

import { useState } from "react"
import {
  Search,
  Filter,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  Eye,
  Download,
  Calendar,
  Mail,
  Trash2,
  AlertTriangle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
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

// Sample order data
const initialOrders = [
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
  const [orders, setOrders] = useState(initialOrders)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null)
  const [deleteOrderId, setDeleteOrderId] = useState<string | null>(null)
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

  // Handle delete order
  const handleDeleteOrder = (orderId: string) => {
    setDeleteOrderId(orderId)
    setIsDeleteDialogOpen(true)
  }

  const confirmDeleteOrder = () => {
    if (deleteOrderId) {
      setOrders(orders.filter((order) => order.id !== deleteOrderId))
      setDeleteOrderId(null)
      setIsDeleteDialogOpen(false)
    }
  }

  const cancelDeleteOrder = () => {
    setDeleteOrderId(null)
    setIsDeleteDialogOpen(false)
  }

  return (
    <div className="h-full flex flex-col p-4 sm:p-6 overflow-auto animate-fade-in">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 sm:mb-8 gap-4 animate-slide-up">
        <div>
          <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">Manajemen Pesanan</h1>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">Kelola dan pantau semua pesanan pelanggan</p>
        </div>
        <Button className="bg-pink-600 hover:bg-pink-700 text-white px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
          <Download className="mr-2 h-3 w-3 sm:h-4 w-4" /> Ekspor Data
        </Button>
      </div>

      {/* Content Card - Full height utilization */}
      <div
        className="bg-white rounded-xl shadow-lg overflow-hidden flex-1 flex flex-col animate-slide-up"
        style={{ animationDelay: "0.2s" }}
      >
        {/* Filters */}
        <div className="p-4 sm:p-6 border-b border-gray-100 flex-shrink-0">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-3 w-3 sm:h-4 w-4 text-gray-400" />
              <Input
                type="search"
                placeholder="Cari berdasarkan ID pesanan, nama pelanggan, atau email..."
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
                    <Filter className="h-3 w-3 sm:h-4 w-4" /> Status
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48">
                  <DropdownMenuItem
                    onClick={() => setSelectedStatus(null)}
                    className="text-xs sm:text-sm hover:bg-pink-50 hover:text-pink-600"
                  >
                    Semua Status
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => setSelectedStatus("Diproses")}
                    className="text-xs sm:text-sm hover:bg-pink-50 hover:text-pink-600"
                  >
                    Diproses
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => setSelectedStatus("Dalam Pengiriman")}
                    className="text-xs sm:text-sm hover:bg-pink-50 hover:text-pink-600"
                  >
                    Dalam Pengiriman
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => setSelectedStatus("Selesai")}
                    className="text-xs sm:text-sm hover:bg-pink-50 hover:text-pink-600"
                  >
                    Selesai
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => setSelectedStatus("Dibatalkan")}
                    className="text-xs sm:text-sm hover:bg-pink-50 hover:text-pink-600"
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
                  <th className="p-2 sm:p-4 font-semibold text-xs sm:text-sm lg:text-base text-gray-700">ID Pesanan</th>
                  <th className="p-2 sm:p-4 font-semibold text-xs sm:text-sm lg:text-base text-gray-700">Pelanggan</th>
                  <th className="p-2 sm:p-4 font-semibold text-xs sm:text-sm lg:text-base text-gray-700 hidden sm:table-cell">
                    Tanggal
                  </th>
                  <th className="p-2 sm:p-4 font-semibold text-xs sm:text-sm lg:text-base text-gray-700">Total</th>
                  <th className="p-2 sm:p-4 font-semibold text-xs sm:text-sm lg:text-base text-gray-700">Status</th>
                  <th className="p-2 sm:p-4 font-semibold text-xs sm:text-sm lg:text-base text-gray-700 hidden lg:table-cell">
                    Pembayaran
                  </th>
                  <th className="p-2 sm:p-4 font-semibold text-xs sm:text-sm lg:text-base text-gray-700 text-right">
                    Aksi
                  </th>
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
                    <td className="p-2 sm:p-4">
                      <div className="text-xs sm:text-sm lg:text-base font-semibold text-gray-900 group-hover:text-pink-600 transition-colors duration-300">
                        {order.id}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">{order.items} item</div>
                    </td>
                    <td className="p-2 sm:p-4">
                      <div className="text-xs sm:text-sm lg:text-base font-medium text-gray-900 min-w-0">
                        <div className="truncate">{order.customer}</div>
                      </div>
                      <div className="flex items-center text-xs text-gray-600 mt-1 min-w-0">
                        <Mail className="h-2 w-2 sm:h-3 w-3 mr-1 flex-shrink-0" />
                        <span className="truncate">{order.email}</span>
                      </div>
                    </td>
                    <td className="p-2 sm:p-4 hidden sm:table-cell">
                      <div className="flex items-center text-xs sm:text-sm lg:text-base text-gray-700">
                        <Calendar className="h-3 w-3 sm:h-4 w-4 mr-2 text-gray-400 flex-shrink-0" />
                        <span className="whitespace-nowrap">{order.date}</span>
                      </div>
                    </td>
                    <td className="p-2 sm:p-4">
                      <div className="text-xs sm:text-sm lg:text-base font-bold text-gray-900 whitespace-nowrap">
                        {formatPrice(order.total)}
                      </div>
                    </td>
                    <td className="p-2 sm:p-4">
                      <Badge
                        className={`px-2 sm:px-3 py-1 sm:py-1.5 text-xs font-medium rounded-full transition-all duration-300 ${getStatusBadge(
                          order.status,
                        )}`}
                      >
                        {order.status}
                      </Badge>
                    </td>
                    <td className="p-2 sm:p-4 text-xs sm:text-sm lg:text-base text-gray-700 hidden lg:table-cell">
                      {order.payment}
                    </td>
                    <td className="p-2 sm:p-4 text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 sm:h-10 w-10 hover:bg-gray-100 transition-all duration-300 hover:scale-110"
                          >
                            <MoreHorizontal className="h-3 w-3 sm:h-4 w-4" />
                            <span className="sr-only">Aksi</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-48">
                          <DropdownMenuItem className="text-xs sm:text-sm hover:bg-pink-50 hover:text-pink-600">
                            <Eye className="mr-2 h-3 w-3 sm:h-4 w-4" /> Lihat Detail
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-xs sm:text-sm hover:bg-pink-50 hover:text-pink-600">
                            <Download className="mr-2 h-3 w-3 sm:h-4 w-4" /> Unduh Invoice
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem
                            className="text-xs sm:text-sm text-red-600 hover:bg-red-50 hover:text-red-700"
                            onClick={() => handleDeleteOrder(order.id)}
                          >
                            <Trash2 className="mr-2 h-3 w-3 sm:h-4 w-4" /> Hapus Pesanan
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
              Menampilkan {filteredOrders.length} dari {orders.length} pesanan
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
              <AlertTriangle className="h-4 w-4 sm:h-5 w-5 text-red-500" />
              Konfirmasi Hapus Pesanan
            </AlertDialogTitle>
            <AlertDialogDescription className="text-xs sm:text-sm">
              Apakah Anda yakin ingin menghapus pesanan <strong>{deleteOrderId}</strong>? Tindakan ini tidak dapat
              dibatalkan dan akan menghapus semua data pesanan secara permanen.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex-col sm:flex-row gap-2">
            <AlertDialogCancel onClick={cancelDeleteOrder} className="text-xs sm:text-sm">
              Batal
            </AlertDialogCancel>
            <AlertDialogAction onClick={confirmDeleteOrder} className="bg-red-600 hover:bg-red-700 text-xs sm:text-sm">
              <Trash2 className="mr-2 h-3 w-3 sm:h-4 w-4" />
              Hapus Pesanan
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
