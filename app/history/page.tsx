"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, ChevronRight, Package, Truck, CheckCircle } from "lucide-react"

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
        image: "/placeholder.svg?height=80&width=80",
      },
      {
        id: 2,
        title: "Kaos Street Style",
        price: 249000,
        quantity: 2,
        image: "/placeholder.svg?height=80&width=80",
      },
      {
        id: 3,
        title: "Celana Cargo Flow",
        price: 499000,
        quantity: 1,
        image: "/placeholder.svg?height=80&width=80",
      },
    ],
    tracking: [
      {
        date: "15 Mei 2025",
        time: "14:30",
        status: "Pesanan diterima",
        description: "Paket telah diterima oleh pelanggan",
        icon: CheckCircle,
      },
      {
        date: "14 Mei 2025",
        time: "09:15",
        status: "Dalam pengiriman",
        description: "Paket sedang dalam perjalanan ke alamat Anda",
        icon: Truck,
      },
      {
        date: "13 Mei 2025",
        time: "16:45",
        status: "Pesanan dikirim",
        description: "Paket telah dikirim dari gudang kami",
        icon: Package,
      },
    ],
  },
  {
    id: "ORD12345679",
    date: "10 Mei 2025",
    total: 748000,
    status: "Dalam Pengiriman",
    items: [
      {
        id: 4,
        title: "Sneakers Wave Rider",
        price: 799000,
        quantity: 1,
        image: "/placeholder.svg?height=80&width=80",
      },
      {
        id: 5,
        title: "Beanie Vibe Check",
        price: 199000,
        quantity: 1,
        image: "/placeholder.svg?height=80&width=80",
      },
    ],
    tracking: [
      {
        date: "11 Mei 2025",
        time: "10:30",
        status: "Dalam pengiriman",
        description: "Paket sedang dalam perjalanan ke alamat Anda",
        icon: Truck,
      },
      {
        date: "10 Mei 2025",
        time: "16:45",
        status: "Pesanan dikirim",
        description: "Paket telah dikirim dari gudang kami",
        icon: Package,
      },
    ],
  },
]

export default function HistoryPage() {
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null)

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

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Riwayat Pesanan</h1>

        {orders.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Belum ada pesanan</h2>
            <p className="mb-6 text-gray-500">Anda belum melakukan pembelian apa pun.</p>
            <Link href="/products" className="filled-button">
              Mulai Belanja
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <div key={order.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div
                  className="p-4 border-b flex justify-between items-center cursor-pointer"
                  onClick={() => toggleOrderDetails(order.id)}
                >
                  <div>
                    <div className="flex items-center">
                      <h2 className="text-lg font-semibold">{order.id}</h2>
                      <span
                        className={`ml-3 px-2 py-1 text-xs font-medium rounded-full ${
                          order.status === "Selesai" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm">{order.date}</p>
                  </div>
                  <div className="flex items-center">
                    <span className="font-semibold mr-4">{formatPrice(order.total)}</span>
                    {expandedOrder === order.id ? (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronRight className="h-5 w-5 text-gray-500" />
                    )}
                  </div>
                </div>

                {expandedOrder === order.id && (
                  <div className="p-4">
                    <div className="mb-6">
                      <h3 className="font-semibold mb-3">Item Pesanan</h3>
                      <div className="space-y-4">
                        {order.items.map((item) => (
                          <div key={item.id} className="flex items-center">
                            <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                              <Image
                                src={item.image || "/placeholder.svg"}
                                alt={item.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="ml-4 flex-1">
                              <h4 className="font-medium">{item.title}</h4>
                              <p className="text-gray-500 text-sm">
                                {formatPrice(item.price)} x {item.quantity}
                              </p>
                            </div>
                            <div className="font-semibold">{formatPrice(item.price * item.quantity)}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3">Status Pengiriman</h3>
                      <div className="space-y-4">
                        {order.tracking.map((track, index) => (
                          <div key={index} className="flex">
                            <div className="mr-4">
                              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-100">
                                <track.icon className="h-5 w-5 text-pink-600" />
                              </div>
                              {index < order.tracking.length - 1 && (
                                <div className="ml-5 h-full w-0.5 bg-gray-200"></div>
                              )}
                            </div>
                            <div className="pb-6">
                              <div className="flex items-center">
                                <h4 className="font-medium">{track.status}</h4>
                                <span className="ml-2 text-gray-500 text-sm">
                                  {track.date}, {track.time}
                                </span>
                              </div>
                              <p className="text-gray-600">{track.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 flex justify-end space-x-4">
                      <Link
                        href={`/invoice/${order.id}`}
                        className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                      >
                        Lihat Invoice
                      </Link>
                      <button className="filled-button">Beli Lagi</button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
