import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Users, Target, Award } from "lucide-react"
import own1 from "@/assets/own1.jpg"
import own2 from "@/assets/own2.jpg"
import own3 from "@/assets/own3.jpg"
import own4 from "@/assets/own4.jpg"
import logo from "@/assets/logo.jpg"

export default function AboutPage() {
  const values = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 sm:w-6 sm:h-6 text-pink-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
          />
        </svg>
      ),
      title: "Kreativitas",
      description:
        "Kami mendorong ekspresi kreatif dan inovasi dalam setiap aspek bisnis kami, dari desain produk hingga pengalaman pelanggan.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 sm:w-6 sm:h-6 text-pink-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      ),
      title: "Kualitas",
      description:
        "Kami berkomitmen untuk menyediakan produk berkualitas tinggi yang tahan lama dan memberikan nilai terbaik bagi pelanggan kami.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 sm:w-6 sm:h-6 text-pink-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
          />
        </svg>
      ),
      title: "Keberlanjutan",
      description:
        "Kami peduli terhadap dampak lingkungan dan berusaha untuk mengadopsi praktik bisnis yang berkelanjutan di seluruh rantai pasokan kami.",
    },
  ]

  const teamMembers = [
    {
      name: "Shendy Bayu Putra",
      position: "CEO & Founder",
      image: own2,
      description: "Visioner di balik StyleWave dengan pengalaman 8+ tahun di industri fashion",
    },
    {
      name: "Nur Azizah Fitria",
      position: "Creative Director",
      image: own1,
      description: "Memimpin tim kreatif dengan keahlian dalam trend forecasting dan brand development",
    },
    {
      name: "Iqbaal Ramadhan",
      position: "Head of Marketing",
      image: own3,
      description: "Spesialis digital marketing dengan track record membangun brand awareness",
    },
    {
      name: "Maudy Ayunda",
      position: "Lead Designer",
      image: own4,
      description: "Desainer berbakat dengan passion untuk sustainable fashion dan inovasi",
    },
  ]

  const stats = [
    {
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6 text-pink-600" />,
      number: "50K+",
      label: "Pelanggan Setia",
    },
    {
      icon: <Target className="w-5 h-5 sm:w-6 sm:h-6 text-pink-600" />,
      number: "1000+",
      label: "Produk Berkualitas",
    },
    {
      icon: <Award className="w-5 h-5 sm:w-6 sm:h-6 text-pink-600" />,
      number: "5+",
      label: "Tahun Pengalaman",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-fade-in">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Tentang StyleWave</h1>
          <p className="text-xs sm:text-sm lg:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Kami adalah destinasi fashion terkemuka yang menghubungkan gaya, kualitas, dan keberlanjutan untuk generasi
            modern.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 lg:mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-4 sm:p-6 rounded-xl shadow-lg text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-slide-up opacity-0"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "forwards",
              }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-pink-100 rounded-full flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                {stat.icon}
              </div>
              <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
              <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Our Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center mb-8 sm:mb-12 lg:mb-16">
          <div className="animate-slide-left">
            <h2 className="text-base sm:text-lg lg:text-xl font-bold mb-3 sm:mb-4 text-gray-900">Cerita Kami</h2>
            <div className="space-y-3 sm:space-y-4">
              <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                StyleWave didirikan pada tahun 2020 oleh sekelompok desainer muda yang memiliki visi untuk mengubah cara
                orang Indonesia berbelanja fashion. Kami percaya bahwa fashion bukan hanya tentang pakaian, tetapi juga
                tentang ekspresi diri dan kepercayaan diri.
              </p>
              <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                Dimulai dari toko kecil di Gresik, StyleWave telah berkembang menjadi platform e-commerce fashion
                terkemuka dengan ribuan pelanggan setia di seluruh Indonesia. Kami terus berinovasi dan berkolaborasi
                dengan desainer lokal untuk menghadirkan koleksi yang unik dan berkualitas.
              </p>
              <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                Perjalanan kami baru dimulai, dan kami berkomitmen untuk terus menginspirasi dan memberdayakan pelanggan
                kami melalui fashion yang berarti.
              </p>
            </div>
          </div>
          <div className="relative h-48 sm:h-64 lg:h-80 rounded-xl overflow-hidden shadow-lg group animate-slide-right">
            <Image
              src={logo || "/placeholder.svg"}
              alt="Cerita StyleWave"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12 animate-slide-up">
            <h2 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Nilai-Nilai Kami</h2>
            <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto leading-relaxed">
              Prinsip-prinsip yang memandu setiap keputusan dan tindakan kami dalam membangun StyleWave
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group animate-slide-up opacity-0"
                style={{
                  animationDelay: `${index * 150}ms`,
                  animationFillMode: "forwards",
                }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-pink-100 rounded-full flex items-center justify-center mb-3 sm:mb-4 mx-auto group-hover:bg-pink-200 transition-colors duration-300">
                  {value.icon}
                </div>
                <h3 className="text-sm sm:text-base lg:text-lg font-bold mb-2 sm:mb-3 text-gray-900">{value.title}</h3>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Team */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12 animate-slide-up">
            <h2 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Tim Kami</h2>
            <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto leading-relaxed">
              Bertemu dengan orang-orang berbakat di balik kesuksesan StyleWave
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group animate-slide-up opacity-0"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: "forwards",
                }}
              >
                <div className="relative h-40 sm:h-48 lg:h-56 w-full overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-3 sm:p-4 lg:p-5">
                  <h3 className="text-sm sm:text-base font-bold mb-1 text-gray-900">{member.name}</h3>
                  <p className="text-xs sm:text-sm text-pink-600 font-medium mb-2">{member.position}</p>
                  <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12 lg:mb-16">
          <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg animate-slide-left">
            <h3 className="text-sm sm:text-base lg:text-lg font-bold mb-3 sm:mb-4 text-gray-900">Misi Kami</h3>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              Menyediakan fashion berkualitas tinggi yang terjangkau dan berkelanjutan, sambil memberdayakan individu
              untuk mengekspresikan kepribadian unik mereka melalui gaya personal yang autentik.
            </p>
          </div>
          <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg animate-slide-right">
            <h3 className="text-sm sm:text-base lg:text-lg font-bold mb-3 sm:mb-4 text-gray-900">Visi Kami</h3>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              Menjadi platform fashion terdepan di Indonesia yang dikenal karena inovasi, kualitas, dan komitmen
              terhadap keberlanjutan, serta menginspirasi generasi baru untuk berpakaian dengan percaya diri.
            </p>
          </div>
        </div>

        {/* Join Us CTA */}
        <div className="bg-gradient-to-r from-pink-600 to-pink-700 text-white rounded-xl p-6 sm:p-8 lg:p-12 text-center relative overflow-hidden animate-slide-up">
          <div className="relative z-10">
            <h2 className="text-base sm:text-lg lg:text-xl font-bold mb-3 sm:mb-4">
              Bergabunglah dengan Perjalanan Kami
            </h2>
            <p className="text-xs sm:text-sm lg:text-base mb-4 sm:mb-6 max-w-2xl mx-auto leading-relaxed opacity-90">
              Kami selalu mencari individu berbakat dan bersemangat untuk bergabung dengan tim kami. Jika Anda memiliki
              passion untuk fashion dan ingin membuat perbedaan, kami ingin mendengar dari Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-pink-600 px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-xs sm:text-sm font-medium hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Hubungi Kami <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center border-2 border-white text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-xs sm:text-sm font-medium hover:bg-white hover:text-pink-600 transform hover:scale-105 transition-all duration-300"
              >
                Lihat Produk Kami
              </Link>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-white/10 rounded-full -translate-y-10 translate-x-10 animate-pulse"></div>
          <div
            className="absolute bottom-0 left-0 w-16 h-16 sm:w-20 sm:h-20 bg-white/5 rounded-full translate-y-8 -translate-x-8 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
      </div>
    </div>
  )
}
