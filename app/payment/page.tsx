"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, CreditCard, CheckCircle } from "lucide-react"

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
      <div className="py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <div className="flex justify-center mb-6">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            <h1 className="text-3xl font-bold mb-4">Pembayaran Berhasil!</h1>
            <p className="text-gray-600 mb-8">
              Terima kasih atas pembelian Anda. Pesanan Anda telah diproses dengan sukses.
            </p>
            <p className="mb-2 font-semibold">Pesanan #12345678</p>
            <p className="text-gray-600 mb-8">Email konfirmasi telah dikirim ke alamat email Anda.</p>
            <div className="flex justify-center space-x-4">
              <Link href="/history" className="filled-button">
                Lihat Riwayat Pesanan
              </Link>
              <Link href="/" className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                Kembali ke Beranda
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <Link href="/cart" className="inline-flex items-center text-gray-600 hover:text-gray-900">
            <ChevronLeft size={16} className="mr-1" /> Kembali ke Keranjang
          </Link>
        </div>

        <h1 className="text-3xl font-bold mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
              <div className="p-4 border-b">
                <h2 className="text-xl font-semibold">Informasi Pengiriman</h2>
              </div>

              <div className="p-4">
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md"
                      placeholder="email@anda.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      Nama Depan
                    </label>
                    <input type="text" id="firstName" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Nama Belakang
                    </label>
                    <input type="text" id="lastName" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                      Alamat
                    </label>
                    <input type="text" id="address" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
                  </div>

                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                      Kota
                    </label>
                    <input type="text" id="city" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
                  </div>

                  <div>
                    <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-1">
                      Kode Pos
                    </label>
                    <input type="text" id="postalCode" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
                  </div>

                  <div>
                    <label htmlFor="province" className="block text-sm font-medium text-gray-700 mb-1">
                      Provinsi
                    </label>
                    <select id="province" className="w-full px-4 py-2 border border-gray-300 rounded-md">
                      <option value="">Pilih provinsi</option>
                      <option value="jkt">DKI Jakarta</option>
                      <option value="jbr">Jawa Barat</option>
                      <option value="jtg">Jawa Tengah</option>
                      <option value="jtm">Jawa Timur</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Telepon
                    </label>
                    <input type="tel" id="phone" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
                  </div>
                </form>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-4 border-b">
                <h2 className="text-xl font-semibold">Metode Pembayaran</h2>
              </div>

              <div className="p-4">
                <div className="mb-4">
                  <div className="flex items-center mb-4">
                    <input
                      type="radio"
                      id="creditCard"
                      value="creditCard"
                      checked={paymentMethod === "creditCard"}
                      onChange={() => setPaymentMethod("creditCard")}
                      className="mr-2"
                    />
                    <label htmlFor="creditCard" className="flex items-center">
                      <CreditCard size={20} className="mr-2" /> Kartu Kredit / Debit
                    </label>
                  </div>

                  {paymentMethod === "creditCard" && (
                    <form onSubmit={handleSubmit} className="pl-6 space-y-4">
                      <div>
                        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                          Nomor Kartu
                        </label>
                        <input
                          type="text"
                          id="cardNumber"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md"
                          placeholder="1234 5678 9012 3456"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-1">
                            Tanggal Kadaluarsa
                          </label>
                          <input
                            type="text"
                            id="expiry"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md"
                            placeholder="MM/YY"
                          />
                        </div>
                        <div>
                          <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                            CVV
                          </label>
                          <input
                            type="text"
                            id="cvv"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md"
                            placeholder="123"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="nameOnCard" className="block text-sm font-medium text-gray-700 mb-1">
                          Nama pada Kartu
                        </label>
                        <input
                          type="text"
                          id="nameOnCard"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md"
                        />
                      </div>
                    </form>
                  )}
                </div>

                <div className="flex items-center mb-4">
                  <input
                    type="radio"
                    id="bankTransfer"
                    value="bankTransfer"
                    checked={paymentMethod === "bankTransfer"}
                    onChange={() => setPaymentMethod("bankTransfer")}
                    className="mr-2"
                  />
                  <label htmlFor="bankTransfer">Transfer Bank</label>
                </div>

                {paymentMethod === "bankTransfer" && (
                  <div className="pl-6 space-y-4">
                    <p className="text-gray-600">Silakan transfer ke salah satu rekening bank berikut:</p>
                    <div className="bg-gray-50 p-4 rounded-md">
                      <p className="font-semibold">Bank Central Asia (BCA)</p>
                      <p>Nomor Rekening: 1234567890</p>
                      <p>Atas Nama: PT StyleWave Indonesia</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-md">
                      <p className="font-semibold">Bank Mandiri</p>
                      <p>Nomor Rekening: 0987654321</p>
                      <p>Atas Nama: PT StyleWave Indonesia</p>
                    </div>
                  </div>
                )}

                <div className="flex items-center mb-4">
                  <input
                    type="radio"
                    id="eWallet"
                    value="eWallet"
                    checked={paymentMethod === "eWallet"}
                    onChange={() => setPaymentMethod("eWallet")}
                    className="mr-2"
                  />
                  <label htmlFor="eWallet">E-Wallet</label>
                </div>

                {paymentMethod === "eWallet" && (
                  <div className="pl-6 space-y-4">
                    <div className="flex space-x-4">
                      <button className="border border-gray-300 rounded-md p-3 hover:border-pink-600 transition-colors">
                        <div className="h-8 w-16 bg-gray-200 rounded flex items-center justify-center">GoPay</div>
                      </button>
                      <button className="border border-gray-300 rounded-md p-3 hover:border-pink-600 transition-colors">
                        <div className="h-8 w-16 bg-gray-200 rounded flex items-center justify-center">OVO</div>
                      </button>
                      <button className="border border-gray-300 rounded-md p-3 hover:border-pink-600 transition-colors">
                        <div className="h-8 w-16 bg-gray-200 rounded flex items-center justify-center">DANA</div>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden sticky top-20">
              <div className="p-4 border-b">
                <h2 className="text-xl font-semibold">Ringkasan Pesanan</h2>
              </div>

              <div className="p-4">
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span>Hoodie Urban Vibes (1)</span>
                    <span>Rp 399.000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Kaos Street Style (2)</span>
                    <span>Rp 498.000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Celana Cargo Flow (1)</span>
                    <span>Rp 499.000</span>
                  </div>
                </div>

                <div className="border-t pt-4 space-y-3">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>Rp 1.396.000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Pengiriman</span>
                    <span>Rp 15.000</span>
                  </div>
                  <div className="flex justify-between font-semibold text-lg pt-3 border-t">
                    <span>Total</span>
                    <span>Rp 1.411.000</span>
                  </div>
                </div>

                <button
                  type="submit"
                  onClick={handleSubmit}
                  disabled={isProcessing}
                  className={`filled-button w-full mt-6 flex items-center justify-center transition-transform hover:scale-105 ${
                    isProcessing ? "opacity-75 cursor-not-allowed" : ""
                  }`}
                >
                  {isProcessing ? "Memproses..." : "Bayar Sekarang"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
