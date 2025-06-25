"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, CreditCard, CheckCircle, Lock, Shield } from "lucide-react"

export default function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState("creditCard")
  const [isProcessing, setIsProcessing] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      setIsComplete(true)
    }, 2000)
  }

  if (isComplete) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 text-center">
            <div className="flex justify-center mb-6">
              <CheckCircle className="h-16 w-16 sm:h-20 sm:w-20 text-green-500" />
            </div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Pembayaran Berhasil!</h1>
            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Terima kasih atas pembelian Anda. Pesanan Anda telah diproses dengan sukses.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8">
              <p className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Pesanan #12345678</p>
              <p className="text-sm text-gray-600">Email konfirmasi telah dikirim ke alamat email Anda.</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Link
                href="/history"
                className="bg-pink-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-pink-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Lihat Riwayat Pesanan
              </Link>
              <Link
                href="/"
                className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                Kembali ke Beranda
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-8 lg:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
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
              <Link href="/cart" className="hover:text-pink-600 transition-colors">
                Keranjang
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-900">Checkout</li>
          </ol>
        </nav>

        {/* Back to Cart */}
        <div className="mb-6 sm:mb-8">
          <Link
            href="/cart"
            className="inline-flex items-center text-gray-600 hover:text-pink-600 text-sm font-medium transition-colors"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Kembali ke Keranjang
          </Link>
        </div>

        {/* Page Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Checkout</h1>
          <p className="text-sm text-gray-600">Lengkapi informasi untuk menyelesaikan pesanan Anda</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Shipping Information */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-4 sm:p-6 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Informasi Pengiriman</h2>
              </div>

              <div className="p-4 sm:p-6">
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-sm"
                      placeholder="email@anda.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Depan
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Belakang
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-sm"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                      Alamat Lengkap
                    </label>
                    <input
                      type="text"
                      id="address"
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-sm"
                      placeholder="Jalan, nomor rumah, RT/RW"
                    />
                  </div>

                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                      Kota
                    </label>
                    <input
                      type="text"
                      id="city"
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-2">
                      Kode Pos
                    </label>
                    <input
                      type="text"
                      id="postalCode"
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="province" className="block text-sm font-medium text-gray-700 mb-2">
                      Provinsi
                    </label>
                    <select
                      id="province"
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-sm"
                    >
                      <option value="">Pilih provinsi</option>
                      <option value="jkt">DKI Jakarta</option>
                      <option value="jbr">Jawa Barat</option>
                      <option value="jtg">Jawa Tengah</option>
                      <option value="jtm">Jawa Timur</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Nomor Telepon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-sm"
                      placeholder="+62 812 3456 7890"
                    />
                  </div>
                </form>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-4 sm:p-6 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Metode Pembayaran</h2>
              </div>

              <div className="p-4 sm:p-6">
                {/* Credit Card */}
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <input
                      type="radio"
                      id="creditCard"
                      value="creditCard"
                      checked={paymentMethod === "creditCard"}
                      onChange={() => setPaymentMethod("creditCard")}
                      className="mr-3 text-pink-600 focus:ring-pink-500"
                    />
                    <label htmlFor="creditCard" className="flex items-center text-sm font-medium text-gray-900">
                      <CreditCard className="w-4 h-4 mr-2" />
                      Kartu Kredit / Debit
                    </label>
                  </div>

                  {paymentMethod === "creditCard" && (
                    <div className="pl-7 space-y-4 bg-gray-50 p-4 rounded-lg">
                      <div>
                        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-2">
                          Nomor Kartu
                        </label>
                        <input
                          type="text"
                          id="cardNumber"
                          className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-sm"
                          placeholder="1234 5678 9012 3456"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-2">
                            Tanggal Kadaluarsa
                          </label>
                          <input
                            type="text"
                            id="expiry"
                            className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-sm"
                            placeholder="MM/YY"
                          />
                        </div>
                        <div>
                          <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-2">
                            CVV
                          </label>
                          <input
                            type="text"
                            id="cvv"
                            className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-sm"
                            placeholder="123"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="nameOnCard" className="block text-sm font-medium text-gray-700 mb-2">
                          Nama pada Kartu
                        </label>
                        <input
                          type="text"
                          id="nameOnCard"
                          className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-sm"
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Bank Transfer */}
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <input
                      type="radio"
                      id="bankTransfer"
                      value="bankTransfer"
                      checked={paymentMethod === "bankTransfer"}
                      onChange={() => setPaymentMethod("bankTransfer")}
                      className="mr-3 text-pink-600 focus:ring-pink-500"
                    />
                    <label htmlFor="bankTransfer" className="text-sm font-medium text-gray-900">
                      Transfer Bank
                    </label>
                  </div>

                  {paymentMethod === "bankTransfer" && (
                    <div className="pl-7 space-y-4">
                      <p className="text-sm text-gray-600">Silakan transfer ke salah satu rekening bank berikut:</p>
                      <div className="space-y-3">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p className="text-sm font-semibold text-gray-900">Bank Central Asia (BCA)</p>
                          <p className="text-sm text-gray-700">Nomor Rekening: 1234567890</p>
                          <p className="text-sm text-gray-700">Atas Nama: PT StyleWave Indonesia</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p className="text-sm font-semibold text-gray-900">Bank Mandiri</p>
                          <p className="text-sm text-gray-700">Nomor Rekening: 0987654321</p>
                          <p className="text-sm text-gray-700">Atas Nama: PT StyleWave Indonesia</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* E-Wallet */}
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <input
                      type="radio"
                      id="eWallet"
                      value="eWallet"
                      checked={paymentMethod === "eWallet"}
                      onChange={() => setPaymentMethod("eWallet")}
                      className="mr-3 text-pink-600 focus:ring-pink-500"
                    />
                    <label htmlFor="eWallet" className="text-sm font-medium text-gray-900">
                      E-Wallet
                    </label>
                  </div>

                  {paymentMethod === "eWallet" && (
                    <div className="pl-7">
                      <div className="grid grid-cols-3 gap-3">
                        <button className="border border-gray-300 rounded-lg p-3 hover:border-pink-600 transition-colors text-center">
                          <div className="h-8 bg-gray-200 rounded flex items-center justify-center text-xs font-medium">
                            GoPay
                          </div>
                        </button>
                        <button className="border border-gray-300 rounded-lg p-3 hover:border-pink-600 transition-colors text-center">
                          <div className="h-8 bg-gray-200 rounded flex items-center justify-center text-xs font-medium">
                            OVO
                          </div>
                        </button>
                        <button className="border border-gray-300 rounded-lg p-3 hover:border-pink-600 transition-colors text-center">
                          <div className="h-8 bg-gray-200 rounded flex items-center justify-center text-xs font-medium">
                            DANA
                          </div>
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Security Info */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start">
                  <Shield className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-blue-900 mb-1">Pembayaran Aman</h4>
                    <p className="text-sm text-blue-700">
                      Semua transaksi dilindungi dengan enkripsi SSL 256-bit dan sistem keamanan berlapis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden sticky top-4">
              <div className="p-4 sm:p-6 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Ringkasan Pesanan</h2>
              </div>

              <div className="p-4 sm:p-6">
                {/* Order Items */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-700">Hoodie Urban Vibes (1)</span>
                    <span className="text-sm font-medium text-gray-900">Rp 399.000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-700">Kaos Street Style (2)</span>
                    <span className="text-sm font-medium text-gray-900">Rp 498.000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-700">Celana Cargo Flow (1)</span>
                    <span className="text-sm font-medium text-gray-900">Rp 499.000</span>
                  </div>
                </div>

                {/* Summary */}
                <div className="border-t border-gray-200 pt-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-700">Subtotal</span>
                    <span className="text-sm font-medium text-gray-900">Rp 1.396.000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-700">Pengiriman</span>
                    <span className="text-sm font-medium text-gray-900">Rp 15.000</span>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                    <span className="text-base font-semibold text-gray-900">Total</span>
                    <span className="text-lg font-bold text-pink-600">Rp 1.411.000</span>
                  </div>
                </div>

                {/* Payment Button */}
                <button
                  type="submit"
                  onClick={handleSubmit}
                  disabled={isProcessing}
                  className={`w-full bg-pink-600 text-white py-3 rounded-lg text-sm font-medium hover:bg-pink-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center mt-6 ${
                    isProcessing ? "opacity-75 cursor-not-allowed" : ""
                  }`}
                >
                  {isProcessing ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Memproses...
                    </>
                  ) : (
                    <>
                      <Lock className="w-4 h-4 mr-2" />
                      Bayar Sekarang
                    </>
                  )}
                </button>

                {/* Security Badge */}
                <div className="text-center text-xs text-gray-500 mt-4 flex items-center justify-center">
                  <Lock className="w-3 h-3 mr-1" />
                  Pembayaran aman dan terenkripsi
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
