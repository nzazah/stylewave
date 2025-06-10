"use client"

import { useState } from "react"
import { Search, Filter, MoreHorizontal, ChevronLeft, ChevronRight, Mail, User, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Sample customer data
const customers = [
  {
    id: 1,
    name: "Budi Santoso",
    email: "budi.santoso@example.com",
    phone: "+62 812 3456 7890",
    location: "Jakarta",
    orders: 5,
    totalSpent: 2500000,
    status: "Aktif",
    lastOrder: "15 Mei 2025",
  },
  {
    id: 2,
    name: "Siti Rahayu",
    email: "siti.rahayu@example.com",
    phone: "+62 813 9876 5432",
    location: "Bandung",
    orders: 3,
    totalSpent: 1250000,
    status: "Aktif",
    lastOrder: "10 Mei 2025",
  },
  {
    id: 3,
    name: "Ahmad Hidayat",
    email: "ahmad.hidayat@example.com",
    phone: "+62 857 1234 5678",
    location: "Surabaya",
    orders: 2,
    totalSpent: 899000,
    status: "Aktif",
    lastOrder: "8 Mei 2025",
  },
  {
    id: 4,
    name: "Dewi Lestari",
    email: "dewi.lestari@example.com",
    phone: "+62 878 8765 4321",
    location: "Yogyakarta",
    orders: 4,
    totalSpent: 1750000,
    status: "Aktif",
    lastOrder: "5 Mei 2025",
  },
  {
    id: 5,
    name: "Eko Prasetyo",
    email: "eko.prasetyo@example.com",
    phone: "+62 819 2345 6789",
    location: "Semarang",
    orders: 1,
    totalSpent: 450000,
    status: "Aktif",
    lastOrder: "2 Mei 2025",
  },
  {
    id: 6,
    name: "Rina Wijaya",
    email: "rina.wijaya@example.com",
    phone: "+62 838 7654 3210",
    location: "Medan",
    orders: 0,
    totalSpent: 0,
    status: "Tidak Aktif",
    lastOrder: "-",
  },
  {
    id: 7,
    name: "Doni Kusuma",
    email: "doni.kusuma@example.com",
    phone: "+62 896 1234 5678",
    location: "Makassar",
    orders: 6,
    totalSpent: 3200000,
    status: "Aktif",
    lastOrder: "18 Mei 2025",
  },
  {
    id: 8,
    name: "Maya Sari",
    email: "maya.sari@example.com",
    phone: "+62 877 8765 4321",
    location: "Denpasar",
    orders: 2,
    totalSpent: 950000,
    status: "Aktif",
    lastOrder: "12 Mei 2025",
  },
  {
    id: 9,
    name: "Rudi Hartono",
    email: "rudi.hartono@example.com",
    phone: "+62 856 2345 6789",
    location: "Palembang",
    orders: 0,
    totalSpent: 0,
    status: "Tidak Aktif",
    lastOrder: "-",
  },
  {
    id: 10,
    name: "Lina Susanti",
    email: "lina.susanti@example.com",
    phone: "+62 815 8765 4321",
    location: "Jakarta",
    orders: 3,
    totalSpent: 1350000,
    status: "Aktif",
    lastOrder: "7 Mei 2025",
  },
]

export default function CustomersPage() {
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

  // Filter customers based on search query and status
  const filteredCustomers = customers.filter((customer) => {
    const matchesSearch =
      customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = selectedStatus ? customer.status === selectedStatus : true
    return matchesSearch && matchesStatus
  })

  return (
    <div className="h-full flex flex-col p-6 overflow-auto animate-fade-in">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 gap-4 animate-slide-up">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Manajemen Pelanggan</h1>
          <p className="text-base text-gray-600 mt-1">Kelola data dan informasi pelanggan Anda</p>
        </div>
        <Button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 text-base font-medium rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
          <Mail className="mr-2 h-5 w-5" /> Kirim Email Massal
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
                placeholder="Cari pelanggan berdasarkan nama atau email..."
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
                    onClick={() => setSelectedStatus("Aktif")}
                    className="text-base hover:bg-pink-50 hover:text-pink-600"
                  >
                    Aktif
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => setSelectedStatus("Tidak Aktif")}
                    className="text-base hover:bg-pink-50 hover:text-pink-600"
                  >
                    Tidak Aktif
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
                  <th className="p-4 font-semibold text-base text-gray-700">Pelanggan</th>
                  <th className="p-4 font-semibold text-base text-gray-700">Lokasi</th>
                  <th className="p-4 font-semibold text-base text-gray-700">Pesanan</th>
                  <th className="p-4 font-semibold text-base text-gray-700">Total Belanja</th>
                  <th className="p-4 font-semibold text-base text-gray-700">Status</th>
                  <th className="p-4 font-semibold text-base text-gray-700">Pesanan Terakhir</th>
                  <th className="p-4 font-semibold text-base text-gray-700 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredCustomers.map((customer, index) => (
                  <tr
                    key={customer.id}
                    className="hover:bg-gray-50 transition-all duration-300 group animate-slide-up opacity-0"
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animationFillMode: "forwards",
                    }}
                  >
                    <td className="p-4">
                      <div className="flex items-center">
                        <Avatar className="h-12 w-12 mr-4 group-hover:scale-110 transition-transform duration-300">
                          <AvatarImage src={`/placeholder.svg?height=48&width=48&text=${customer.name.charAt(0)}`} />
                          <AvatarFallback className="bg-pink-100 text-pink-600 font-semibold text-base">
                            {customer.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="min-w-0 flex-1">
                          <p className="text-base font-semibold text-gray-900 group-hover:text-pink-600 transition-colors duration-300">
                            {customer.name}
                          </p>
                          <div className="flex items-center text-sm text-gray-600 mt-1">
                            <Mail className="h-3 w-3 mr-1" />
                            <span className="truncate">{customer.email}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600 mt-1">
                            <Phone className="h-3 w-3 mr-1" />
                            <span>{customer.phone}</span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center text-base text-gray-700">
                        <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                        {customer.location}
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="text-base font-semibold text-gray-900">{customer.orders}</div>
                      <div className="text-sm text-gray-500">pesanan</div>
                    </td>
                    <td className="p-4">
                      <div className="text-base font-bold text-gray-900">{formatPrice(customer.totalSpent)}</div>
                    </td>
                    <td className="p-4">
                      <span
                        className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ${
                          customer.status === "Aktif"
                            ? "bg-green-100 text-green-800 hover:bg-green-200"
                            : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                        }`}
                      >
                        {customer.status}
                      </span>
                    </td>
                    <td className="p-4 text-base text-gray-700">{customer.lastOrder}</td>
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
                            <User className="mr-2 h-4 w-4" /> Lihat Profil
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-base hover:bg-pink-50 hover:text-pink-600">
                            <Mail className="mr-2 h-4 w-4" /> Kirim Email
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
              Menampilkan {filteredCustomers.length} dari {customers.length} pelanggan
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
