"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { User, Package, Heart, CreditCard, LogOut, Edit, Camera, Save, ShoppingBag } from "lucide-react"

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState("profile")
  const [isEditing, setIsEditing] = useState(false)
  const [profileData, setProfileData] = useState({
    name: "Nur Azizah Fitria",
    email: "zazahlibrary@gmail.com",
    phone: "+62 895 3350 12442",
    address: "Jl. Merdeka No. 123, Jakarta Selatan, 12345",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setProfileData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSave = () => {
    // In a real app, this would save to a database
    setIsEditing(false)
  }

  // Sample orders data
  const orders = [
    {
      id: "ORD12345678",
      date: "15 Mei 2025",
      total: 1411000,
      status: "Selesai",
      items: 3,
    },
    {
      id: "ORD12345679",
      date: "10 Mei 2025",
      total: 748000,
      status: "Dalam Pengiriman",
      items: 2,
    },
  ]

  // Sample wishlist data
  const wishlist = [
    {
      id: 1,
      title: "Jaket Sunset Fade",
      price: 899000,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      title: "Sneakers Wave Rider",
      price: 799000,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      title: "Beanie Vibe Check",
      price: 199000,
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  // Format price to IDR
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  const menuItems = [
    { id: "profile", label: "Profil", icon: User },
    { id: "orders", label: "Pesanan", icon: Package },
    { id: "wishlist", label: "Wishlist", icon: Heart },
    { id: "payment", label: "Pembayaran", icon: CreditCard },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-12 animate-fade-in">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">Akun Saya</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 animate-slide-left">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden sticky top-8">
              <div className="p-6 sm:p-8 text-center border-b border-gray-100">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 group">
                  <div className="rounded-full overflow-hidden bg-gray-200 w-full h-full transition-transform duration-300 group-hover:scale-105">
                    <Image src="/placeholder.svg?height=200&width=200" alt="Profile" fill className="object-cover" />
                  </div>
                  <button className="absolute bottom-0 right-0 bg-pink-600 text-white p-1.5 sm:p-2 rounded-full hover:bg-pink-700 transition-all duration-300 hover:scale-110 shadow-lg">
                    <Camera size={14} className="sm:w-4 sm:h-4" />
                  </button>
                </div>
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">{profileData.name}</h2>
                <p className="text-sm sm:text-base text-gray-600">{profileData.email}</p>
              </div>

              <div className="p-4 sm:p-6">
                <div className="flex flex-col space-y-1">
                  {menuItems.map((item, index) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`flex items-center justify-start px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg transition-all duration-300 text-sm sm:text-base font-medium animate-slide-up opacity-0 ${
                        activeTab === item.id
                          ? "bg-pink-50 text-pink-600 shadow-sm"
                          : "hover:bg-gray-50 text-gray-700 hover:text-gray-900"
                      }`}
                      style={{
                        animationDelay: `${index * 100}ms`,
                        animationFillMode: "forwards",
                      }}
                    >
                      <item.icon className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                      {item.label}
                    </button>
                  ))}
                </div>

                <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-100">
                  <button className="flex items-center text-gray-600 hover:text-pink-600 transition-all duration-300 w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg hover:bg-gray-50 text-sm sm:text-base font-medium">
                    <LogOut className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                    Keluar
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 animate-slide-right">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <TabsContent value="profile" className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 sm:mb-8 gap-4">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">Informasi Profil</h2>
                    {!isEditing ? (
                      <button
                        onClick={() => setIsEditing(true)}
                        className="flex items-center text-pink-600 hover:text-pink-700 transition-all duration-300 hover:scale-105 text-sm sm:text-base font-medium"
                      >
                        <Edit className="mr-1.5 h-4 w-4" />
                        Edit
                      </button>
                    ) : (
                      <button
                        onClick={handleSave}
                        className="flex items-center text-green-600 hover:text-green-700 transition-all duration-300 hover:scale-105 text-sm sm:text-base font-medium"
                      >
                        <Save className="mr-1.5 h-4 w-4" />
                        Simpan
                      </button>
                    )}
                  </div>

                  <div className="space-y-6 sm:space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                          Nama Lengkap
                        </label>
                        {isEditing ? (
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={profileData.name}
                            onChange={handleChange}
                            className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-300 text-sm sm:text-base"
                          />
                        ) : (
                          <p className="text-sm sm:text-base text-gray-900 py-2.5">{profileData.name}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                          Email
                        </label>
                        {isEditing ? (
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={profileData.email}
                            onChange={handleChange}
                            className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-300 text-sm sm:text-base"
                          />
                        ) : (
                          <p className="text-sm sm:text-base text-gray-900 py-2.5">{profileData.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                          Nomor Telepon
                        </label>
                        {isEditing ? (
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={profileData.phone}
                            onChange={handleChange}
                            className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-300 text-sm sm:text-base"
                          />
                        ) : (
                          <p className="text-sm sm:text-base text-gray-900 py-2.5">{profileData.phone}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="address" className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                          Alamat
                        </label>
                        {isEditing ? (
                          <input
                            type="text"
                            id="address"
                            name="address"
                            value={profileData.address}
                            onChange={handleChange}
                            className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-300 text-sm sm:text-base"
                          />
                        ) : (
                          <p className="text-sm sm:text-base text-gray-900 py-2.5">{profileData.address}</p>
                        )}
                      </div>
                    </div>

                    {isEditing && (
                      <div className="pt-4">
                        <button
                          onClick={handleSave}
                          className="bg-pink-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-medium text-sm sm:text-base hover:bg-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                          Simpan Perubahan
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-100">
                    <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-gray-900">Ubah Password</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label
                          htmlFor="current-password"
                          className="block text-sm sm:text-base font-medium text-gray-700 mb-2"
                        >
                          Password Saat Ini
                        </label>
                        <input
                          type="password"
                          id="current-password"
                          className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-300 text-sm sm:text-base"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="new-password"
                          className="block text-sm sm:text-base font-medium text-gray-700 mb-2"
                        >
                          Password Baru
                        </label>
                        <input
                          type="password"
                          id="new-password"
                          className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-300 text-sm sm:text-base"
                        />
                      </div>
                    </div>
                    <div className="mt-4 sm:mt-6">
                      <button className="bg-pink-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-medium text-sm sm:text-base hover:bg-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                        Perbarui Password
                      </button>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="orders" className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 sm:mb-8 gap-4">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">Riwayat Pesanan</h2>
                    <Link
                      href="/history"
                      className="text-pink-600 hover:text-pink-700 transition-all duration-300 text-sm sm:text-base font-medium hover:scale-105"
                    >
                      Lihat Semua
                    </Link>
                  </div>

                  {orders.length === 0 ? (
                    <div className="text-center py-12 sm:py-16">
                      <ShoppingBag className="h-12 w-12 sm:h-16 sm:w-16 text-gray-300 mx-auto mb-4" />
                      <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">Belum ada pesanan</h3>
                      <p className="text-sm sm:text-base text-gray-500 mb-6">Anda belum melakukan pembelian apa pun.</p>
                      <Link
                        href="/products"
                        className="inline-block bg-pink-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-medium text-sm sm:text-base hover:bg-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        Mulai Belanja
                      </Link>
                    </div>
                  ) : (
                    <div className="space-y-4 sm:space-y-6">
                      {orders.map((order, index) => (
                        <div
                          key={order.id}
                          className="border border-gray-200 rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up opacity-0"
                          style={{
                            animationDelay: `${index * 100}ms`,
                            animationFillMode: "forwards",
                          }}
                        >
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 sm:mb-4 gap-2">
                            <div>
                              <span className="font-semibold text-sm sm:text-base text-gray-900">{order.id}</span>
                              <span className="text-gray-500 text-xs sm:text-sm ml-2 sm:ml-3">({order.date})</span>
                            </div>
                            <span
                              className={`px-2.5 py-1 text-xs sm:text-sm font-medium rounded-full ${
                                order.status === "Selesai" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                              }`}
                            >
                              {order.status}
                            </span>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                            <div className="text-xs sm:text-sm text-gray-600">{order.items} item</div>
                            <div className="flex items-center gap-3 sm:gap-4">
                              <span className="font-semibold text-sm sm:text-base text-gray-900">
                                {formatPrice(order.total)}
                              </span>
                              <Link
                                href={`/history#${order.id}`}
                                className="text-pink-600 hover:text-pink-700 transition-all duration-300 text-xs sm:text-sm font-medium hover:scale-105"
                              >
                                Detail
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="wishlist" className="p-6 sm:p-8">
                  <h2 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-gray-900">Wishlist Saya</h2>

                  {wishlist.length === 0 ? (
                    <div className="text-center py-12 sm:py-16">
                      <Heart className="h-12 w-12 sm:h-16 sm:w-16 text-gray-300 mx-auto mb-4" />
                      <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">Wishlist Anda kosong</h3>
                      <p className="text-sm sm:text-base text-gray-500 mb-6">
                        Tambahkan produk favorit Anda ke wishlist.
                      </p>
                      <Link
                        href="/products"
                        className="inline-block bg-pink-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-medium text-sm sm:text-base hover:bg-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        Jelajahi Produk
                      </Link>
                    </div>
                  ) : (
                    <div className="space-y-4 sm:space-y-6">
                      {wishlist.map((item, index) => (
                        <div
                          key={item.id}
                          className="border border-gray-200 rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up opacity-0"
                          style={{
                            animationDelay: `${index * 100}ms`,
                            animationFillMode: "forwards",
                          }}
                        >
                          <div className="relative h-16 w-16 sm:h-20 sm:w-20 flex-shrink-0">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.title}
                              fill
                              className="object-cover rounded-lg"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <Link
                              href={`/products/${item.id}`}
                              className="font-semibold text-sm sm:text-base hover:text-pink-600 transition-colors duration-300 block mb-1"
                            >
                              {item.title}
                            </Link>
                            <div className="text-pink-600 font-medium text-sm sm:text-base">
                              {formatPrice(item.price)}
                            </div>
                          </div>
                          <div className="flex gap-2 sm:gap-3 w-full sm:w-auto">
                            <button className="flex-1 sm:flex-none bg-pink-600 text-white py-2 px-3 sm:py-2.5 sm:px-4 text-xs sm:text-sm font-medium rounded-lg hover:bg-pink-700 transition-all duration-300 hover:scale-105">
                              Tambah ke Keranjang
                            </button>
                            <button className="text-gray-400 hover:text-red-500 transition-colors duration-300 p-2">
                              <Heart className="h-4 w-4 sm:h-5 sm:w-5 fill-current" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="payment" className="p-6 sm:p-8">
                  <h2 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-gray-900">Metode Pembayaran</h2>

                  <div className="space-y-6 sm:space-y-8">
                    <div className="border border-gray-200 rounded-xl p-6 sm:p-8 animate-slide-up">
                      <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-gray-900">Kartu Tersimpan</h3>
                      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl p-6 sm:p-8 mb-4 sm:mb-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
                        <div className="flex justify-between items-start mb-6 sm:mb-8">
                          <div>
                            <p className="text-gray-300 text-xs sm:text-sm">Kartu Kredit</p>
                            <p className="font-medium mt-1 text-sm sm:text-base">Budi Santoso</p>
                          </div>
                          <div className="text-lg sm:text-xl font-bold">VISA</div>
                        </div>
                        <div className="text-base sm:text-lg tracking-wider mb-2">•••• •••• •••• 1234</div>
                        <div className="flex justify-between text-xs sm:text-sm">
                          <span>Berlaku hingga: 12/25</span>
                          <span>CVV: •••</span>
                        </div>
                      </div>

                      <button className="text-pink-600 hover:text-pink-700 transition-all duration-300 font-medium text-sm sm:text-base hover:scale-105">
                        + Tambah Kartu Baru
                      </button>
                    </div>

                    <div
                      className="border border-gray-200 rounded-xl p-6 sm:p-8 animate-slide-up"
                      style={{ animationDelay: "0.2s" }}
                    >
                      <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-gray-900">E-Wallet</h3>
                      <div className="space-y-3 sm:space-y-4">
                        <div className="flex items-center justify-between p-3 sm:p-4 border border-gray-200 rounded-lg hover:shadow-md transition-all duration-300">
                          <div className="flex items-center">
                            <div className="h-8 w-8 sm:h-10 sm:w-10 bg-gray-200 rounded flex items-center justify-center mr-3 sm:mr-4">
                              <span className="font-bold text-xs sm:text-sm">GP</span>
                            </div>
                            <div>
                              <p className="font-medium text-sm sm:text-base text-gray-900">GoPay</p>
                              <p className="text-xs sm:text-sm text-gray-500">Terhubung</p>
                            </div>
                          </div>
                          <button className="text-pink-600 hover:text-pink-700 transition-all duration-300 text-xs sm:text-sm font-medium hover:scale-105">
                            Kelola
                          </button>
                        </div>

                        <div className="flex items-center justify-between p-3 sm:p-4 border border-gray-200 rounded-lg hover:shadow-md transition-all duration-300">
                          <div className="flex items-center">
                            <div className="h-8 w-8 sm:h-10 sm:w-10 bg-gray-200 rounded flex items-center justify-center mr-3 sm:mr-4">
                              <span className="font-bold text-xs sm:text-sm">OV</span>
                            </div>
                            <div>
                              <p className="font-medium text-sm sm:text-base text-gray-900">OVO</p>
                              <p className="text-xs sm:text-sm text-gray-500">Tidak terhubung</p>
                            </div>
                          </div>
                          <button className="text-pink-600 hover:text-pink-700 transition-all duration-300 text-xs sm:text-sm font-medium hover:scale-105">
                            Hubungkan
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
