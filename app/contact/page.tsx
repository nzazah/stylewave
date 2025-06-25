"use client"

import type React from "react"
import { useState } from "react"
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Clock,
  MessageSquare,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Search,
  ThumbsUp,
  ThumbsDown,
  Star,
} from "lucide-react"

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [faqSearch, setFaqSearch] = useState("")
  const [selectedFaqCategory, setSelectedFaqCategory] = useState("all")

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

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Telepon",
      items: [
        { label: "Layanan Pelanggan:", value: "+62 895 3350 12442" },
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
        { label: "Kantor Pusat:", value: "Jl. Raya Miru no 19, Driyorejo" },
        { label: "", value: "Gresik, Jawa Timur 61177" },
        { label: "", value: "Indonesia" },
      ],
    },
  ]

  const quickActions = [
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Chat langsung dengan tim customer service kami",
      action: "Mulai Chat",
      available: true,
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: HelpCircle,
      title: "Pusat Bantuan",
      description: "Temukan jawaban untuk pertanyaan umum",
      action: "Lihat FAQ",
      available: true,
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Clock,
      title: "Jadwal Konsultasi",
      description: "Booking konsultasi personal dengan fashion advisor",
      action: "Book Sekarang",
      available: false,
      color: "bg-purple-100 text-purple-600",
    },
  ]

  const faqCategories = [
    { id: "all", name: "Semua", count: 8 },
    { id: "shipping", name: "Pengiriman", count: 3 },
    { id: "payment", name: "Pembayaran", count: 2 },
    { id: "returns", name: "Pengembalian", count: 2 },
    { id: "general", name: "Umum", count: 1 },
  ]

  const faqs = [
    {
      id: 1,
      category: "shipping",
      question: "Berapa lama waktu pengiriman?",
      answer:
        "Waktu pengiriman bervariasi tergantung lokasi Anda. Untuk Jakarta dan sekitarnya, pengiriman biasanya memakan waktu 1-2 hari kerja. Untuk kota-kota besar lainnya, 2-4 hari kerja, dan untuk daerah terpencil, 5-7 hari kerja.",
      helpful: 24,
      notHelpful: 2,
    },
    {
      id: 2,
      category: "shipping",
      question: "Apakah ada biaya pengiriman?",
      answer:
        "Kami menawarkan gratis ongkos kirim untuk pembelian minimal Rp 300.000. Untuk pembelian di bawah jumlah tersebut, biaya pengiriman akan dihitung berdasarkan lokasi dan berat paket.",
      helpful: 18,
      notHelpful: 1,
    },
    {
      id: 3,
      category: "shipping",
      question: "Bagaimana cara melacak pesanan saya?",
      answer:
        "Setelah pesanan Anda dikirim, Anda akan menerima nomor resi melalui email dan SMS. Anda dapat melacak pesanan melalui halaman 'Lacak Pesanan' di website kami atau langsung di website kurir.",
      helpful: 31,
      notHelpful: 0,
    },
    {
      id: 4,
      category: "returns",
      question: "Bagaimana cara melakukan pengembalian?",
      answer:
        "Anda dapat melakukan pengembalian dalam 14 hari setelah menerima pesanan. Kunjungi halaman Akun Anda, pilih pesanan yang ingin dikembalikan, dan ikuti petunjuk pengembalian. Biaya pengiriman untuk pengembalian ditanggung oleh pelanggan kecuali jika produk cacat.",
      helpful: 15,
      notHelpful: 3,
    },
    {
      id: 5,
      category: "returns",
      question: "Berapa lama proses refund?",
      answer:
        "Setelah produk yang dikembalikan diterima dan diverifikasi, proses refund akan dilakukan dalam 3-5 hari kerja. Dana akan dikembalikan ke metode pembayaran yang sama dengan yang Anda gunakan saat pembelian.",
      helpful: 22,
      notHelpful: 1,
    },
    {
      id: 6,
      category: "payment",
      question: "Metode pembayaran apa yang diterima?",
      answer:
        "Kami menerima berbagai metode pembayaran termasuk kartu kredit/debit, transfer bank, e-wallet (GoPay, OVO, DANA), dan pembayaran melalui minimarket (Indomaret, Alfamart).",
      helpful: 28,
      notHelpful: 0,
    },
    {
      id: 7,
      category: "payment",
      question: "Apakah pembayaran di StyleWave aman?",
      answer:
        "Ya, semua transaksi pembayaran di StyleWave menggunakan enkripsi SSL dan bekerja sama dengan payment gateway terpercaya. Data kartu kredit Anda tidak disimpan di server kami.",
      helpful: 35,
      notHelpful: 1,
    },
    {
      id: 8,
      category: "general",
      question: "Apakah ada garansi untuk produk?",
      answer:
        "Semua produk StyleWave dilindungi garansi kualitas. Jika Anda menemukan cacat produksi dalam 30 hari pertama, kami akan mengganti produk tanpa biaya tambahan.",
      helpful: 19,
      notHelpful: 2,
    },
  ]

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = selectedFaqCategory === "all" || faq.category === selectedFaqCategory
    const matchesSearch =
      faq.question.toLowerCase().includes(faqSearch.toLowerCase()) ||
      faq.answer.toLowerCase().includes(faqSearch.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-fade-in">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Hubungi Kami</h1>
          <p className="text-xs sm:text-sm lg:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Kami senang mendengar dari Anda. Hubungi kami untuk pertanyaan, saran, atau bantuan apa pun yang Anda
            butuhkan.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {quickActions.map((action, index) => (
            <div
              key={action.title}
              className="bg-white p-4 sm:p-6 rounded-xl shadow-lg text-center group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-slide-up opacity-0"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "forwards",
              }}
            >
              <div
                className={`w-10 h-10 sm:w-12 sm:h-12 ${action.color} rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <action.icon className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <h3 className="text-sm sm:text-base font-bold mb-2 text-gray-900">{action.title}</h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 leading-relaxed">{action.description}</p>
              <button
                className={`text-xs sm:text-sm font-medium px-3 py-2 sm:px-4 sm:py-2 rounded-lg transition-all duration-300 ${
                  action.available
                    ? "bg-pink-600 text-white hover:bg-pink-700 hover:scale-105"
                    : "bg-gray-200 text-gray-500 cursor-not-allowed"
                }`}
                disabled={!action.available}
              >
                {action.action}
              </button>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={info.title}
              className="bg-white p-4 sm:p-6 rounded-xl shadow-lg text-center group animate-slide-up opacity-0 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              style={{
                animationDelay: `${(index + 3) * 150}ms`,
                animationFillMode: "forwards",
              }}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-pink-200 transition-colors duration-300">
                <info.icon className="h-5 w-5 sm:h-6 sm:w-6 text-pink-600" />
              </div>
              <h3 className="text-sm sm:text-base lg:text-lg font-bold mb-2 sm:mb-3 text-gray-900">{info.title}</h3>
              <div className="space-y-1 sm:space-y-2">
                {info.items.map((item, itemIndex) => (
                  <div key={itemIndex}>
                    {item.label && <p className="text-xs sm:text-sm text-gray-600">{item.label}</p>}
                    <p className="text-xs sm:text-sm font-medium text-pink-600">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Location & Contact Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-8 sm:mb-12 lg:mb-16">
          {/* Location */}
          <div className="animate-slide-left">
            <h2 className="text-base sm:text-lg lg:text-xl font-bold mb-4 sm:mb-6 text-gray-900">Lokasi Kami</h2>
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg">
              <div className="aspect-video rounded-lg overflow-hidden mb-4 sm:mb-6">
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
                <h3 className="font-semibold text-sm sm:text-base mb-2 text-gray-900">StyleWave Headquarters</h3>
                <p className="text-xs sm:text-sm text-gray-700 mb-2 leading-relaxed">
                  Jl. Raya Miru no 19, Driyorejo - Gresik, Jawa Timur 61177, Indonesia
                </p>
                <p className="text-xs sm:text-sm text-gray-700 mb-4">
                  <span className="font-medium">Jam Operasional:</span> Senin - Jumat, 09:00 - 17:00 WIB
                </p>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <button className="bg-pink-600 text-white px-4 py-2 rounded-lg text-xs sm:text-sm font-medium hover:bg-pink-700 transition-colors flex items-center justify-center">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                    Petunjuk Arah
                  </button>
                  <button className="border border-pink-600 text-pink-600 px-4 py-2 rounded-lg text-xs sm:text-sm font-medium hover:bg-pink-50 transition-colors flex items-center justify-center">
                    <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                    Hubungi Kantor
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-right">
            <h2 className="text-base sm:text-lg lg:text-xl font-bold mb-4 sm:mb-6 text-gray-900">Kirim Pesan</h2>
            {formStatus === "success" ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 sm:p-8 text-center animate-slide-up">
                <CheckCircle className="h-12 w-12 sm:h-16 sm:w-16 text-green-500 mx-auto mb-3 sm:mb-4" />
                <h3 className="text-sm sm:text-base lg:text-lg font-bold mb-2 text-gray-900">Pesan Terkirim!</h3>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-4">
                  Terima kasih telah menghubungi kami. Tim kami akan segera merespons pesan Anda dalam 1x24 jam.
                </p>
                <button
                  onClick={() => setFormStatus("idle")}
                  className="text-xs sm:text-sm text-pink-600 hover:text-pink-700 font-medium transition-colors duration-300"
                >
                  Kirim Pesan Lain
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg space-y-4 sm:space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 px-3 py-2 sm:px-4 sm:py-3 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-xs sm:text-sm"
                      placeholder="Masukkan nama lengkap Anda"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 px-3 py-2 sm:px-4 sm:py-3 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-xs sm:text-sm"
                      placeholder="nama@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                    Subjek
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 px-3 py-2 sm:px-4 sm:py-3 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-xs sm:text-sm"
                  >
                    <option value="">Pilih subjek pesan</option>
                    <option value="customer-service">Layanan Pelanggan</option>
                    <option value="order-status">Status Pesanan</option>
                    <option value="returns">Pengembalian & Refund</option>
                    <option value="partnership">Kerjasama Bisnis</option>
                    <option value="feedback">Saran & Masukan</option>
                    <option value="other">Lainnya</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full border border-gray-300 px-3 py-2 sm:px-4 sm:py-3 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 resize-none text-xs sm:text-sm"
                    placeholder="Tulis pesan Anda di sini..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className={`w-full bg-pink-600 text-white py-2 sm:py-3 rounded-lg font-medium flex items-center justify-center hover:bg-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-xs sm:text-sm ${
                    formStatus === "submitting" ? "opacity-75 cursor-not-allowed" : ""
                  }`}
                >
                  {formStatus === "submitting" ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div> Mengirim...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-3 w-3 sm:h-4 sm:w-4" /> Kirim Pesan
                    </>
                  )}
                </button>
              </form>
            )}

            {/* Response Time Info */}
            <div className="bg-pink-50 border border-pink-200 p-4 sm:p-6 rounded-xl mt-6">
              <div className="flex items-start">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-pink-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Waktu Respons</h3>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    Tim customer service kami berkomitmen untuk merespons setiap pesan dalam waktu maksimal 1x24 jam
                    pada hari kerja. Untuk pertanyaan urgent, silakan hubungi nomor telepon kami.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section - Full Width */}
        <div className="animate-slide-up">
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <h2 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900">Pertanyaan yang Sering Diajukan</h2>
            <div className="flex items-center text-xs sm:text-sm text-gray-500">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1 text-yellow-500" />
              <span>Paling Membantu</span>
            </div>
          </div>

          {/* FAQ Controls */}
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg mb-6 sm:mb-8">
            {/* FAQ Search */}
            <div className="relative mb-4 sm:mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Cari pertanyaan..."
                value={faqSearch}
                onChange={(e) => setFaqSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-xs sm:text-sm"
              />
            </div>

            {/* FAQ Categories */}
            <div className="flex flex-wrap gap-2">
              {faqCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedFaqCategory(category.id)}
                  className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                    selectedFaqCategory === category.id
                      ? "bg-pink-600 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Items Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <div
                  key={faq.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl animate-slide-up opacity-0"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: "forwards",
                  }}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-4 sm:p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                  >
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900 pr-4">{faq.question}</h3>
                    {expandedFaq === faq.id ? (
                      <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-pink-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>

                  {expandedFaq === faq.id && (
                    <div className="px-4 pb-4 sm:px-6 sm:pb-6 border-t border-gray-100">
                      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-4">{faq.answer}</p>

                      {/* Helpful Rating */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <span className="text-xs text-gray-500">Apakah ini membantu?</span>
                          <div className="flex items-center space-x-2">
                            <button className="flex items-center space-x-1 text-xs text-gray-500 hover:text-green-600 transition-colors">
                              <ThumbsUp className="w-3 h-3" />
                              <span>{faq.helpful}</span>
                            </button>
                            <button className="flex items-center space-x-1 text-xs text-gray-500 hover:text-red-600 transition-colors">
                              <ThumbsDown className="w-3 h-3" />
                              <span>{faq.notHelpful}</span>
                            </button>
                          </div>
                        </div>
                        <span className="text-xs text-gray-400 capitalize bg-gray-100 px-2 py-1 rounded-full">
                          {faq.category}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-base text-gray-500 mb-2">Tidak ada pertanyaan yang ditemukan</p>
                <p className="text-sm text-gray-400">Coba ubah kata kunci pencarian atau kategori</p>
              </div>
            )}
          </div>

          {/* Contact for More Help */}
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl border border-pink-200 p-6 sm:p-8">
            <div className="text-center">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3">Tidak menemukan jawaban?</h3>
              <p className="text-sm text-gray-600 mb-6 max-w-2xl mx-auto">
                Tim customer service kami siap membantu Anda dengan pertanyaan apapun. Jangan ragu untuk menghubungi
                kami melalui berbagai channel yang tersedia.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md mx-auto">
                <button className="bg-pink-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-pink-700 transition-colors flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Chat Sekarang
                </button>
                <button className="border border-pink-600 text-pink-600 px-6 py-3 rounded-lg text-sm font-medium hover:bg-pink-50 transition-colors flex items-center justify-center">
                  <Mail className="w-4 h-4 mr-2" />
                  Kirim Email
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
