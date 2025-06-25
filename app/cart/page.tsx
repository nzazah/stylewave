"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Minus, Plus, X, CreditCard, ArrowLeft } from "lucide-react"
import main2 from "@/assets/main2.jpg"
import main1 from "@/assets/main1.jpg"
import main3 from "@/assets/main3.jpg"

// Sample cart items
const cartItems = [
  {
    id: 1,
    title: "Hoodie Urban Vibes",
    price: 399000,
    image: main2,
    quantity: 1,
    size: "L",
    color: "Hitam",
  },
  {
    id: 2,
    title: "Kaos Street Style",
    price: 249000,
    image: main1,
    quantity: 2,
    size: "M",
    color: "Putih",
  },
  {
    id: 3,
    title: "Celana Cargo Flow",
    price: 499000,
    image: main3,
    quantity: 1,
    size: "M",
    color: "Hitam",
  },
]

export default function CartPage() {
  const [items, setItems] = useState(cartItems)
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const incrementQuantity = (id: number) => {
    setItems(items.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item)))
  }

  const decrementQuantity = (id: number) => {
    setItems(
      items.map((item) => (item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item)),
    )
  }

  const removeItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id))
  }

  const calculateSubtotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const subtotal = calculateSubtotal()
  const shipping = 15000
  const total = subtotal + shipping

  // Format price to IDR
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  if (!mounted) {
    return (
      <div className="py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-pink-600 mx-auto mb-4"></div>
            <p className="text-sm text-gray-600">Memuat keranjang...</p>
          </div>
        </div>
      </div>
    )
  }

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
            <li className="text-gray-900">Keranjang Belanja</li>
          </ol>
        </nav>

        {/* Page Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Keranjang Belanja</h1>
          <p className="text-sm text-gray-600">
            {items.length > 0 ? `${items.length} item dalam keranjang Anda` : "Keranjang Anda kosong"}
          </p>
        </div>

        {items.length === 0 ? (
          <div className="text-center py-12 sm:py-16 bg-white rounded-xl shadow-lg">
            <div className="max-w-md mx-auto">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg
                  className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </div>
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Keranjang Anda Kosong</h2>
              <p className="text-sm text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Sepertinya Anda belum menambahkan item apa pun ke keranjang Anda. Mari mulai berbelanja!
              </p>
              <Link
                href="/products"
                className="inline-flex items-center bg-pink-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-pink-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Mulai Belanja
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-4 sm:p-6 border-b border-gray-200">
                  <h2 className="text-lg font-semibold text-gray-900">Item Keranjang ({items.length})</h2>
                </div>

                <div className="divide-y divide-gray-200">
                  {items.map((item) => (
                    <div key={item.id} className="p-4 sm:p-6">
                      <div className="flex flex-col sm:flex-row gap-4">
                        {/* Product Image */}
                        <div className="relative h-20 w-20 sm:h-24 sm:w-24 flex-shrink-0 overflow-hidden rounded-lg group">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>

                        {/* Product Details */}
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-base font-semibold text-gray-900 truncate pr-4">{item.title}</h3>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-gray-400 hover:text-red-600 transition-colors duration-300 p-1"
                              aria-label="Hapus item"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>

                          {/* Product Options */}
                          <div className="text-sm text-gray-600 mb-3">
                            {item.size && item.color && (
                              <div className="flex flex-wrap gap-4">
                                <span>
                                  Ukuran: <span className="font-medium">{item.size}</span>
                                </span>
                                <span>
                                  Warna: <span className="font-medium">{item.color}</span>
                                </span>
                              </div>
                            )}
                          </div>

                          {/* Price and Quantity */}
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                            {/* Quantity Controls */}
                            <div className="flex items-center">
                              <span className="text-sm text-gray-600 mr-3">Jumlah:</span>
                              <div className="flex items-center border border-gray-300 rounded-lg">
                                <button
                                  onClick={() => decrementQuantity(item.id)}
                                  className="p-2 hover:bg-gray-100 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                  disabled={item.quantity <= 1}
                                  aria-label="Kurangi jumlah"
                                >
                                  <Minus className="w-3 h-3" />
                                </button>
                                <span className="px-3 py-2 text-sm font-medium min-w-[3rem] text-center">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() => incrementQuantity(item.id)}
                                  className="p-2 hover:bg-gray-100 transition-colors duration-300"
                                  aria-label="Tambah jumlah"
                                >
                                  <Plus className="w-3 h-3" />
                                </button>
                              </div>
                            </div>

                            {/* Price */}
                            <div className="text-right">
                              <div className="text-base font-bold text-pink-600">
                                {formatPrice(item.price * item.quantity)}
                              </div>
                              {item.quantity > 1 && (
                                <div className="text-sm text-gray-500">
                                  {formatPrice(item.price)} × {item.quantity}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Continue Shopping */}
                <div className="p-4 sm:p-6 border-t border-gray-200 bg-gray-50">
                  <Link
                    href="/products"
                    className="text-pink-600 hover:text-pink-700 inline-flex items-center text-sm font-medium transition-colors duration-300"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Lanjutkan Belanja
                  </Link>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden sticky top-4">
                <div className="p-4 sm:p-6 border-b border-gray-200">
                  <h2 className="text-lg font-semibold text-gray-900">Ringkasan Pesanan</h2>
                </div>

                <div className="p-4 sm:p-6 space-y-4">
                  {/* Subtotal */}
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-700">Subtotal ({items.length} item)</span>
                    <span className="text-sm font-medium text-gray-900">{formatPrice(subtotal)}</span>
                  </div>

                  {/* Shipping */}
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-700">Pengiriman</span>
                    <span className="text-sm font-medium text-gray-900">{formatPrice(shipping)}</span>
                  </div>

                  {/* Shipping Info */}
                  <div className="text-xs text-gray-500 bg-blue-50 p-3 rounded-lg">
                    💡 <strong>Gratis ongkir</strong> untuk pembelian minimal Rp 300.000
                  </div>

                  {/* Total */}
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                      <span className="text-base font-semibold text-gray-900">Total</span>
                      <span className="text-lg font-bold text-pink-600">{formatPrice(total)}</span>
                    </div>
                  </div>

                  {/* Checkout Button */}
                  <Link
                    href="/payment"
                    className="w-full bg-pink-600 text-white py-3 rounded-lg text-sm font-medium hover:bg-pink-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center mt-6"
                  >
                    <CreditCard className="w-4 h-4 mr-2" />
                    Checkout Sekarang
                  </Link>

                  {/* Security Info */}
                  <div className="text-center text-xs text-gray-500 mt-4">🔒 Pembayaran aman dan terenkripsi</div>
                </div>

                {/* Payment Methods */}
                <div className="p-4 sm:p-6 bg-gray-50 border-t border-gray-200">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">Kami Menerima</h3>
                  <div className="grid grid-cols-4 gap-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="bg-white border border-gray-200 rounded-lg h-8 flex items-center justify-center"
                      >
                        <div className="w-6 h-4 bg-gray-300 rounded"></div>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Kartu Kredit, Transfer Bank, E-Wallet, dan lainnya</p>
                </div>
              </div>

              {/* Promo Code */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mt-6">
                <div className="p-4 sm:p-6">
                  <h3 className="text-base font-semibold text-gray-900 mb-3">Kode Promo</h3>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Masukkan kode promo"
                      className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                    />
                    <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                      Terapkan
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
