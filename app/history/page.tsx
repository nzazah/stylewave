"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, ChevronRight, Package, Truck, CheckCircle, ArrowLeft, Download, RotateCcw } from "lucide-react"
import main2 from "@/assets/main2.jpg"
import main1 from "@/assets/main1.jpg"
import main3 from "@/assets/main3.jpg"
import main4 from "@/assets/main4.jpg"
import main5 from "@/assets/main5.jpg"

// Sample order history data
const orders = [
  {
    id: "ORD12345678",
    date: "15 Mei 2025",
    total: 1411000,
    status: "Selesai",
    items: [
      {
        id: 1,
        title: "Hoodie Urban Vibes",
        price: 399000,
        quantity: 1,
        image: main2,
      },
      {
        id: 2,
        title: "Kaos Street Style",
        price: 249000,
        quantity: 2,
        image: main1,
      },
      {
        id: 3,
        title: "Celana Cargo Flow",
        price: 499000,
        quantity: 1,
        image: main3,
      },
    ],
    tracking: [
      {
        date: "15 Mei 2025",
        time: "14:30",
        status: "Pesanan diterima",
        description: "Paket telah diterima oleh pelanggan",
        icon: CheckCircle,
        completed: true,
      },
      {
        date: "14 Mei 2025",
        time: "09:15",
        status: "Dalam pengiriman",
        description: "Paket sedang dalam perjalanan ke alamat Anda",
        icon: Truck,
        completed: true,
      },
      {
        date: "13 Mei 2025",
        time: "16:45",
        status: "Pesanan dikirim",
        description: "Paket telah dikirim dari gudang kami",
        icon: Package,
        completed: true,
      },
    ],
  },
  {
    id: "ORD12345679",
    date: "10 Mei 2025",
    total: 998000,
    status: "Dalam Pengiriman",
    items: [
      {
        id: 4,
        title: "Sneakers Wave Rider",
        price: 799000,
        quantity: 1,
        image: main4,
      },
      {
        id: 5,
        title: "Beanie Vibe Check",
        price: 199000,
        quantity: 1,
        image: main5,
      },
    ],
    tracking: [
      {
        date: "11 Mei 2025",
        time: "10:30",
        status: "Dalam pengiriman",
        description: "Paket sedang dalam perjalanan ke alamat Anda",
        icon: Truck,
        completed: false,
      },
      {
        date: "10 Mei 2025",
        time: "16:45",
        status: "Pesanan dikirim",
        description: "Paket telah dikirim dari gudang kami",
        icon: Package,
        completed: true,
      },
    ],
  },
]

export default function OrderHistoryPage() {
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null)
  const [filterStatus, setFilterStatus] = useState<string>("all")

  const toggleOrderDetails = (orderId: string) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId)
  }

  // Format price to IDR
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Selesai":
        return "bg-green-100 text-green-800"
      case "Dalam Pengiriman":
        return "bg-blue-100 text-blue-800"
      case "Diproses":
        return "bg-yellow-100 text-yellow-800"
      case "Dibatalkan":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const filteredOrders = filterStatus === "all" ? orders : orders.filter((order) => order.status === filterStatus)

  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-8 lg:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-4 sm:mb-6 text-sm">
          <ol className="flex items-center space-x-2 text-gray-500">
            <li>
              <Link href="/" className="hover:text-pink-600 transition-colors">
                Beranda
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/account" className="hover:text-pink-600 transition-colors">
                Akun
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-900">Riwayat Pesanan</li>
          </ol>
        </nav>

        {/* Page Header */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Riwayat Pesanan</h1>
              <p className="text-sm text-gray-600">
                {orders.length > 0 ? `${orders.length} pesanan ditemukan` : "Belum ada pesanan"}
              </p>
            </div>
            <Link
              href="/account"
              className="inline-flex items-center text-gray-600 hover:text-pink-600 text-sm font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Kembali ke Akun
            </Link>
          </div>
        </div>

        {/* Filter */}
        <div className="mb-6 sm:mb-8">
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
            <h3 className="text-base font-semibold text-gray-900 mb-3">Filter Status</h3>
            <div className="flex flex-wrap gap-2">
              {["all", "Selesai", "Dalam Pengiriman", "Diproses", "Dibatalkan"].map((status) => (
                <button
                  key={status}
                  onClick={() => setFilterStatus(status)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    filterStatus === status
                      ? "bg-pink-600 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"
                  }`}
                >
                  {status === "all" ? "Semua" : status}
                </button>
              ))}
            </div>
          </div>
        </div>

        {filteredOrders.length === 0 ? (
          <div className="text-center py-12 sm:py-16 bg-white rounded-xl shadow-lg">
            <div className="max-w-md mx-auto">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Package className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400" />
              </div>
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                {filterStatus === "all" ? "Belum ada pesanan" : `Tidak ada pesanan dengan status "${filterStatus}"`}
              </h2>
              <p className="text-sm text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                {filterStatus === "all"
                  ? "Anda belum melakukan pembelian apa pun. Mari mulai berbelanja!"
                  : "Coba ubah filter atau lihat semua pesanan."}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/products"
                  className="bg-pink-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-pink-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Mulai Belanja
                </Link>
                {filterStatus !== "all" && (
                  <button
                    onClick={() => setFilterStatus("all")}
                    className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
                  >
                    Lihat Semua Pesanan
                  </button>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4 sm:space-y-6">
            {filteredOrders.map((order, index) => (
              <div
                key={order.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl animate-slide-up opacity-0"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: "forwards",
                }}
              >
                {/* Order Header */}
                <div
                  className="p-4 sm:p-6 border-b border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => toggleOrderDetails(order.id)}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                        <h2 className="text-base sm:text-lg font-semibold text-gray-900">{order.id}</h2>
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(order.status)}`}
                        >
                          {order.status}
                        </span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-600">
                        <span>{order.date}</span>
                        <span className="hidden sm:inline">•</span>
                        <span>{order.items.length} item</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between sm:justify-end gap-4">
                      <span className="text-base sm:text-lg font-bold text-pink-600">{formatPrice(order.total)}</span>
                      {expandedOrder === order.id ? (
                        <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 transition-transform duration-300" />
                      ) : (
                        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 transition-transform duration-300" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Order Details */}
                {expandedOrder === order.id && (
                  <div className="p-4 sm:p-6 space-y-6">
                    {/* Order Items */}
                    <div>
                      <h3 className="text-base font-semibold text-gray-900 mb-4">Item Pesanan</h3>
                      <div className="space-y-4">
                        {order.items.map((item) => (
                          <div key={item.id} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                            <div className="relative h-12 w-12 sm:h-16 sm:w-16 flex-shrink-0 overflow-hidden rounded-lg">
                              <Image
                                src={item.image || "/placeholder.svg"}
                                alt={item.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm sm:text-base font-medium text-gray-900 truncate">{item.title}</h4>
                              <p className="text-sm text-gray-600">
                                {formatPrice(item.price)} × {item.quantity}
                              </p>
                            </div>
                            <div className="text-sm sm:text-base font-semibold text-gray-900">
                              {formatPrice(item.price * item.quantity)}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Shipping Tracking */}
                    <div>
                      <h3 className="text-base font-semibold text-gray-900 mb-4">Status Pengiriman</h3>
                      <div className="space-y-4">
                        {order.tracking.map((track, trackIndex) => (
                          <div key={trackIndex} className="flex gap-4">
                            <div className="flex flex-col items-center">
                              <div
                                className={`flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full ${
                                  track.completed ? "bg-pink-100" : "bg-gray-100"
                                }`}
                              >
                                <track.icon
                                  className={`h-4 w-4 sm:h-5 sm:w-5 ${
                                    track.completed ? "text-pink-600" : "text-gray-400"
                                  }`}
                                />
                              </div>
                              {trackIndex < order.tracking.length - 1 && (
                                <div className="w-0.5 h-8 bg-gray-200 mt-2"></div>
                              )}
                            </div>
                            <div className="flex-1 pb-4">
                              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-1">
                                <h4 className="text-sm sm:text-base font-medium text-gray-900">{track.status}</h4>
                                <span className="text-xs sm:text-sm text-gray-500">
                                  {track.date}, {track.time}
                                </span>
                              </div>
                              <p className="text-sm text-gray-600 leading-relaxed">{track.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 border-t border-gray-200">
                      <Link
                        href={`/invoice/${order.id}`}
                        className="flex items-center justify-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Lihat Invoice
                      </Link>
                      <button className="flex items-center justify-center bg-pink-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-pink-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                        <RotateCcw className="w-4 h-4 mr-2" />
                        Beli Lagi
                      </button>
                      {order.status === "Dalam Pengiriman" && (
                        <Link
                          href={`/tracking/${order.id}`}
                          className="flex items-center justify-center border border-pink-600 text-pink-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-pink-50 transition-colors"
                        >
                          <Truck className="w-4 h-4 mr-2" />
                          Lacak Paket
                        </Link>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Load More */}
        {filteredOrders.length > 0 && (
          <div className="text-center mt-8 sm:mt-12">
            <button className="bg-white border-2 border-pink-600 text-pink-600 hover:bg-pink-50 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg">
              Muat Lebih Banyak
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
