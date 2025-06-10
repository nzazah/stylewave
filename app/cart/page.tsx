"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Minus, Plus, X, CreditCard, ArrowLeft } from "lucide-react"
import main2 from "@/assets/main2.jpg";
import main1 from "@/assets/main1.jpg";
import main3 from "@/assets/main3.jpg";

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
    return <div className="py-12 container mx-auto px-4">Memuat keranjang...</div>
  }

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Keranjang Belanja Anda</h1>

        {items.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Keranjang Anda kosong</h2>
            <p className="mb-6 text-gray-500">Sepertinya Anda belum menambahkan item apa pun ke keranjang Anda.</p>
            <Link href="/products" className="filled-button">
              Mulai Belanja
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-4 border-b">
                  <h2 className="text-xl font-semibold">Item Keranjang ({items.length})</h2>
                </div>

                <div className="divide-y">
                  {items.map((item) => (
                    <div key={item.id} className="p-4 flex flex-col sm:flex-row">
                      <div className="relative h-28 w-28 flex-shrink-0 mb-4 sm:mb-0 overflow-hidden rounded-md">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-110"
                        />
                      </div>

                      <div className="flex-1 sm:ml-6">
                        <div className="flex justify-between">
                          <h3 className="font-semibold">{item.title}</h3>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-gray-400 hover:text-red-600 transition-colors"
                          >
                            <X size={18} />
                          </button>
                        </div>

                        <div className="text-gray-500 text-sm mt-1">
                          {item.size && item.color && (
                            <>
                              Ukuran: {item.size} | Warna: {item.color}
                            </>
                          )}
                        </div>

                        <div className="mt-4 flex justify-between items-center">
                          <div className="flex items-center border rounded-md">
                            <button
                              onClick={() => decrementQuantity(item.id)}
                              className="px-3 py-1 hover:bg-gray-100 transition-colors"
                              disabled={item.quantity <= 1}
                            >
                              <Minus size={16} />
                            </button>
                            <span className="px-3">{item.quantity}</span>
                            <button
                              onClick={() => incrementQuantity(item.id)}
                              className="px-3 py-1 hover:bg-gray-100 transition-colors"
                            >
                              <Plus size={16} />
                            </button>
                          </div>

                          <div className="font-semibold text-lg">{formatPrice(item.price * item.quantity)}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 border-t">
                  <Link
                    href="/products"
                    className="text-pink-600 hover:text-pink-700 inline-flex items-center transition-colors"
                  >
                    <ArrowLeft size={16} className="mr-2" /> Lanjutkan Belanja
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-4 border-b">
                  <h2 className="text-xl font-semibold">Ringkasan Pesanan</h2>
                </div>

                <div className="p-4 space-y-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Pengiriman</span>
                    <span>{formatPrice(shipping)}</span>
                  </div>

                  <div className="pt-4 border-t flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span>{formatPrice(total)}</span>
                  </div>

                  <Link
                    href="/payment"
                    className="filled-button w-full flex items-center justify-center mt-6 transition-transform hover:scale-105"
                  >
                    <CreditCard size={18} className="mr-2" /> Checkout
                  </Link>
                </div>

                <div className="p-4 bg-gray-50">
                  <h3 className="font-semibold mb-2">Kami Menerima</h3>
                  <div className="flex space-x-2">
                    <div className="bg-gray-200 h-8 w-12 rounded"></div>
                    <div className="bg-gray-200 h-8 w-12 rounded"></div>
                    <div className="bg-gray-200 h-8 w-12 rounded"></div>
                    <div className="bg-gray-200 h-8 w-12 rounded"></div>
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
