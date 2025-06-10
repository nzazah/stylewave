"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus("submitting")
    setTimeout(() => {
      setFormStatus("success")
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    }, 1500)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Telepon",
      items: [
        { label: "Layanan Pelanggan:", value: "+62 812 3456 7890" },
        { label: "Kantor Pusat:", value: "+62 21 1234 5678" },
      ],
    },
    {
      icon: Mail,
      title: "Email",
      items: [
        { label: "Layanan Pelanggan:", value: "cs@stylewave.com" },
        { label: "Kerjasama Bisnis:", value: "partnership@stylewave.com" },
      ],
    },
    {
      icon: MapPin,
      title: "Alamat",
      items: [
        { label: "Kantor Pusat:", value: "Jl. Fashion Boulevard No. 123" },
        { label: "", value: "Jakarta Selatan, 12345" },
        { label: "", value: "Indonesia" },
      ],
    },
  ]

  const faqs = [
    {
      question: "Berapa lama waktu pengiriman?",
      answer:
        "Waktu pengiriman bervariasi tergantung lokasi Anda. Untuk Jakarta dan sekitarnya, pengiriman biasanya memakan waktu 1-2 hari kerja. Untuk kota-kota besar lainnya, 2-4 hari kerja, dan untuk daerah terpencil, 5-7 hari kerja.",
    },
    {
      question: "Bagaimana cara melakukan pengembalian?",
      answer:
        "Anda dapat melakukan pengembalian dalam 14 hari setelah menerima pesanan. Kunjungi halaman Akun Anda, pilih pesanan yang ingin dikembalikan, dan ikuti petunjuk pengembalian. Biaya pengiriman untuk pengembalian ditanggung oleh pelanggan kecuali jika produk cacat.",
    },
    {
      question: "Metode pembayaran apa yang diterima?",
      answer:
        "Kami menerima berbagai metode pembayaran termasuk kartu kredit/debit, transfer bank, e-wallet (GoPay, OVO, DANA), dan pembayaran melalui minimarket (Indomaret, Alfamart).",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Hubungi Kami</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Kami senang mendengar dari Anda. Hubungi kami untuk pertanyaan, saran, atau bantuan apa pun yang Anda butuhkan.</p>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={info.title}
              className="bg-white p-6 rounded-xl shadow-lg text-center group animate-slide-up opacity-0"
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: "forwards",
              }}
            >
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-pink-200 transition">
                <info.icon className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{info.title}</h3>
              <div className="space-y-2">
                {info.items.map((item, itemIndex) => (
                  <div key={itemIndex}>
                    {item.label && <p className="text-sm text-gray-600">{item.label}</p>}
                    <p className="text-base font-medium text-pink-600">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slide-left">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Kirim Pesan</h2>
            {formStatus === "success" ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center animate-slide-up">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-gray-900">Pesan Terkirim!</h3>
                <p className="text-gray-700">Terima kasih telah menghubungi kami. Tim kami akan segera merespons pesan Anda.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subjek</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  >
                    <option value="">Pilih subjek</option>
                    <option value="customer-service">Layanan Pelanggan</option>
                    <option value="order-status">Status Pesanan</option>
                    <option value="returns">Pengembalian & Refund</option>
                    <option value="partnership">Kerjasama Bisnis</option>
                    <option value="other">Lainnya</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Pesan</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className={`w-full bg-pink-600 text-white py-3 rounded-lg font-medium flex items-center justify-center hover:bg-pink-700 transition transform hover:scale-105 shadow-lg ${
                    formStatus === "submitting" ? "opacity-75 cursor-not-allowed" : ""
                  }`}
                >
                  {formStatus === "submitting" ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div> Mengirim...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" /> Kirim Pesan
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Location & FAQ */}
          <div className="space-y-12 animate-slide-right">
            {/* Map Section */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Lokasi Kami</h2>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="aspect-video rounded-lg overflow-hidden mb-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.9755552028796!2d112.55964657476139!3d-7.356636392652336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7806282f89ee29%3A0xf84519d061b8f705!2sJl.%20Raya%20Miru%20No.19%2C%20Dusun%20Kalangan%2C%20Karangandong%2C%20Kec.%20Driyorejo%2C%20Kabupaten%20Gresik%2C%20Jawa%20Timur%2061175!5e0!3m2!1sid!2sid!4v1749010254504!5m2!1sid!2sid"
                    width="100%"
                    height="100%"
                    className="border-0 w-full h-full"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">StyleWave Headquarters</h3>
                  <p className="text-gray-700 mb-2">Jl. Raya Miru no 19, Driyorejo - Gresik, Jawa Timur 61177, Indonesia</p>
                  <p className="text-gray-700"><span className="font-medium">Jam Operasional:</span> Senin - Jumat, 09:00 - 17:00 WIB</p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">FAQ</h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up opacity-0"
                    style={{
                      animationDelay: `${(index + 3) * 150}ms`,
                      animationFillMode: "forwards",
                    }}
                  >
                    <h3 className="text-lg font-semibold mb-3 text-gray-900">{faq.question}</h3>
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
