"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Tag, ArrowLeft, Share2, MessageCircle } from "lucide-react"
import art1 from "@/assets/art1.jpg"
import art2 from "@/assets/art2.jpg"
import art3 from "@/assets/art3.jpg"
import art4 from "@/assets/art4.jpg"
import art5 from "@/assets/art5.jpg"
import art6 from "@/assets/art6.jpg"

// Complete article data - synchronized with articles page
const getArticleById = (id: string) => {
  const articles = [
    {
      id: 1,
      title: "Tren Fashion Musim Panas 2025",
      content: `
        <p>Saat suhu meningkat, begitu juga kegembiraan untuk gaya musim panas yang segar. Musim ini semua tentang warna-warna berani, material berkelanjutan, dan potongan serbaguna yang bertransisi dengan mulus dari siang ke malam.</p>
        
        <h2>Palet Warna Cerah</h2>
        <p>Ucapkan selamat tinggal pada warna redup dan halo pada biru elektrik, oranye senja, dan hijau cerah. Color blocking kembali populer, dengan individu yang fashionable mencampurkan warna-warna tak terduga untuk ensemble yang menarik perhatian.</p>
        
        <p>Tampilan monokromatik dalam warna-warna berani juga sedang tren, menciptakan pernyataan visual yang kuat namun tetap mudah dipakai untuk kesempatan sehari-hari.</p>
        
        <h2>Material Berkelanjutan</h2>
        <p>Fashion ramah lingkungan terus mendapatkan momentum, dengan desainer merangkul material inovatif seperti plastik laut daur ulang, katun organik, dan alternatif kulit nabati.</p>
        
        <p>Konsumen semakin memprioritaskan transparansi dalam rantai pasokan, mencari brand yang selaras dengan nilai-nilai mereka dan menunjukkan komitmen nyata untuk mengurangi dampak lingkungan.</p>
        
        <h2>Siluet Santai</h2>
        <p>Tren kenyamanan era pandemi terus memengaruhi gaya musim panas, dengan potongan santai dan kain yang bernapas mendominasi koleksi. Bersiaplah untuk melihat celana kaki lebar, kemeja oversized, dan gaun mengalir yang menawarkan gaya dan kenyamanan.</p>
        
        <p>Namun, potongan santai ini diseimbangkan dengan aksesori terstruktur dan styling yang dipikirkan untuk menciptakan tampilan yang rapi yang cocok untuk pengaturan kasual dan lebih formal.</p>
        
        <h2>Aksesori Pernyataan</h2>
        <p>Aksesori mengambil panggung utama musim panas ini, dengan perhiasan chunky, kacamata hitam berani, dan tas pernyataan menjadi fokus dari banyak outfit. Potongan buatan tangan dengan detail unik sangat dicari, mencerminkan keinginan akan individualitas dan keahlian.</p>
        
        <h2>Kesimpulan</h2>
        <p>Lanskap fashion musim panas ini menawarkan sesuatu untuk semua orang, dengan tren yang menekankan ekspresi pribadi, kenyamanan, dan konsumsi sadar. Dengan memasukkan elemen-elemen ini ke dalam lemari pakaian Anda, Anda akan tetap stylish sambil mengekspresikan kepribadian unik Anda.</p>
      `,
      image: art1,
      author: "Jane Smith",
      date: "1 Mei 2025",
      category: "Tren Fashion",
      tags: ["Musim Panas", "Tren", "Fashion Berkelanjutan", "Tren Warna"],
      readTime: "5 menit",
    },
    {
      id: 2,
      title: "Fashion Berkelanjutan: Panduan Lengkap",
      content: `
        <p>Membangun lemari pakaian ramah lingkungan tidak berarti mengorbankan gaya. Dengan pendekatan yang tepat, Anda dapat menciptakan lemari pakaian berkelanjutan yang mencerminkan estetika pribadi Anda sambil meminimalkan dampak lingkungan.</p>
        
        <h2>Memahami Fashion Berkelanjutan</h2>
        <p>Fashion berkelanjutan mencakup praktik produksi etis, material ramah lingkungan, dan fokus pada umur panjang daripada sekali pakai. Ini tentang mempertimbangkan siklus hidup lengkap pakaian, dari produksi hingga pembuangan.</p>
        
        <p>Tujuannya adalah untuk mengurangi limbah, polusi, dan eksploitasi sambil menciptakan pakaian yang indah, fungsional yang tahan uji waktu.</p>
        
        <h2>Membangun Lemari Pakaian Kapsul</h2>
        <p>Salah satu cara paling efektif untuk mendekati fashion berkelanjutan adalah melalui konsep lemari pakaian kapsul—koleksi yang dikurasi dari potongan serbaguna yang dapat dicampur dan dicocokkan untuk berbagai outfit.</p>
        
        <p>Fokus pada kualitas daripada kuantitas, memilih item yang dibuat dengan baik dalam gaya klasik yang melampaui tren musiman. Pendekatan ini tidak hanya mengurangi konsumsi tetapi juga menyederhanakan keputusan outfit harian Anda.</p>
        
        <h2>Memilih Material Berkelanjutan</h2>
        <p>Saat menambahkan ke lemari pakaian Anda, prioritaskan pakaian yang terbuat dari material berkelanjutan seperti katun organik, hemp, linen, Tencel, dan kain daur ulang. Opsi ini memiliki jejak lingkungan yang jauh lebih rendah daripada alternatif konvensional.</p>
        
        <p>Berhati-hatilah terhadap greenwashing—cari sertifikasi kredibel seperti GOTS (Global Organic Textile Standard) atau Bluesign untuk memverifikasi klaim keberlanjutan.</p>
        
        <h2>Brand Etis yang Perlu Diketahui</h2>
        <p>Banyak brand memimpin jalan dalam fashion berkelanjutan, menawarkan opsi stylish yang tidak mengorbankan etika. Teliti rantai pasokan perusahaan, praktik tenaga kerja, dan inisiatif lingkungan sebelum melakukan pembelian.</p>
        
        <p>Mendukung brand ini mengirimkan pesan kuat ke industri tentang prioritas konsumen dan membantu mendorong perubahan yang lebih luas.</p>
        
        <h2>Memperpanjang Umur Pakaian</h2>
        <p>Perawatan yang tepat secara signifikan memperpanjang umur pakaian. Ikuti petunjuk perawatan, perbaiki item bila memungkinkan, dan pertimbangkan perubahan untuk menyegarkan potongan daripada menggantinya.</p>
        
        <p>Ketika Anda benar-benar selesai dengan suatu item, jelajahi opsi pembuangan yang bertanggung jawab seperti donasi, daur ulang tekstil, atau pertukaran pakaian.</p>
        
        <h2>Kesimpulan</h2>
        <p>Fashion berkelanjutan adalah perjalanan daripada tujuan. Dengan membuat pilihan yang bijaksana dan secara bertahap beralih ke praktik yang lebih etis, Anda dapat menciptakan lemari pakaian yang terlihat bagus, terasa bagus, dan berbuat baik untuk planet ini.</p>
      `,
      image: art2,
      author: "Mark Johnson",
      date: "25 April 2025",
      category: "Keberlanjutan",
      tags: ["Fashion Berkelanjutan", "Brand Etis", "Ramah Lingkungan", "Lemari Pakaian Kapsul"],
      readTime: "7 menit",
    },
    {
      id: 3,
      title: "Panduan Aksesori 101",
      content: `
        <p>Aksesori adalah kunci untuk mengubah outfit sederhana menjadi tampilan yang menawan. Dengan pemahaman yang tepat tentang cara memilih dan menata aksesori, Anda dapat meningkatkan gaya personal Anda secara signifikan.</p>
        
        <h2>Dasar-dasar Aksesori</h2>
        <p>Mulailah dengan membangun koleksi aksesori dasar yang dapat melengkapi berbagai outfit. Ini termasuk jam tangan klasik, kalung sederhana, anting-anting stud, dan tas serbaguna.</p>
        
        <p>Investasi dalam potongan berkualitas tinggi yang dapat bertahan lama dan cocok dengan berbagai gaya pakaian akan memberikan nilai terbaik untuk uang Anda.</p>
        
        <h2>Aturan Proporsi</h2>
        <p>Pahami bagaimana ukuran dan skala aksesori dapat memengaruhi keseluruhan tampilan Anda. Aksesori besar cocok untuk outfit minimalis, sementara aksesori kecil sempurna untuk melengkapi pakaian yang sudah ramai.</p>
        
        <p>Pertimbangkan bentuk tubuh Anda saat memilih aksesori. Kalung panjang dapat memanjangkan torso, sementara anting-anting besar dapat menyeimbangkan wajah yang kecil.</p>
        
        <h2>Mixing and Matching</h2>
        <p>Jangan takut untuk mencampur logam, tekstur, dan gaya yang berbeda. Kunci sukses adalah menemukan elemen yang menyatukan seluruh tampilan, seperti warna atau tema tertentu.</p>
        
        <p>Eksperimen dengan layering kalung atau menumpuk gelang untuk menciptakan tampilan yang lebih dinamis dan personal.</p>
        
        <h2>Aksesori untuk Setiap Kesempatan</h2>
        <p>Pelajari cara menyesuaikan aksesori dengan berbagai setting. Perhiasan halus dan tas terstruktur cocok untuk lingkungan profesional, sementara aksesori statement dapat menjadi pilihan untuk acara sosial.</p>
        
        <h2>Kesimpulan</h2>
        <p>Aksesori adalah cara termudah dan paling cost-effective untuk memperbarui lemari pakaian Anda. Dengan memahami dasar-dasar styling aksesori, Anda dapat menciptakan tampilan yang fresh dan personal setiap hari.</p>
      `,
      image: art3,
      author: "Sarah Lee",
      date: "20 April 2025",
      category: "Panduan Gaya",
      tags: ["Aksesori", "Styling", "Fashion Tips", "Personal Style"],
      readTime: "4 menit",
    },
    {
      id: 4,
      title: "Ikon Gaya Gen Z",
      content: `
        <p>Generasi Z telah mengubah lanskap fashion dengan pendekatan yang berani, inklusif, dan berkelanjutan terhadap gaya. Mari kita lihat bagaimana mereka membentuk tren fashion masa depan.</p>
        
        <h2>Karakteristik Gaya Gen Z</h2>
        <p>Gen Z dikenal karena pendekatan mereka yang eksperimental terhadap fashion, mencampur vintage dengan modern, high-end dengan thrift finds, dan selalu mengutamakan ekspresi diri.</p>
        
        <p>Mereka tidak terikat pada aturan fashion tradisional dan lebih memilih untuk menciptakan gaya personal yang unik dan autentik.</p>
        
        <h2>Pengaruh Media Sosial</h2>
        <p>Platform seperti TikTok dan Instagram telah menjadi runway virtual bagi Gen Z, di mana tren dapat muncul dan menyebar dengan kecepatan yang belum pernah ada sebelumnya.</p>
        
        <p>Micro-influencer dan content creator menjadi sumber inspirasi yang lebih relatable dibandingkan model tradisional atau selebriti.</p>
        
        <h2>Sustainability First</h2>
        <p>Generasi ini lebih sadar lingkungan daripada generasi sebelumnya, memilih brand yang sejalan dengan nilai-nilai mereka dan memprioritaskan kualitas daripada kuantitas.</p>
        
        <p>Thrifting, upcycling, dan fashion rental menjadi pilihan populer sebagai alternatif dari fast fashion.</p>
        
        <h2>Inklusivitas dan Representasi</h2>
        <p>Gen Z menuntut representasi yang lebih beragam dalam industri fashion, mendorong brand untuk lebih inklusif dalam hal ukuran, etnis, gender, dan kemampuan.</p>
        
        <h2>Kesimpulan</h2>
        <p>Gen Z tidak hanya mengonsumsi fashion, tetapi aktif membentuk masa depannya. Dengan nilai-nilai yang kuat tentang sustainability, inklusivitas, dan autentisitas, mereka mendorong industri untuk berevolusi ke arah yang lebih positif.</p>
      `,
      image: art4,
      author: "David Chen",
      date: "15 April 2025",
      category: "Budaya",
      tags: ["Gen Z", "Tren", "Media Sosial", "Budaya Fashion", "Sustainability"],
      readTime: "6 menit",
    },
    {
      id: 5,
      title: "Evolusi Streetwear",
      content: `
        <p>Dari akar subkultur hingga menjadi kekuatan dominan dalam fashion mainstream, streetwear telah mengalami transformasi yang luar biasa. Mari kita telusuri perjalanan menarik ini.</p>
        
        <h2>Asal Usul Streetwear</h2>
        <p>Streetwear lahir dari budaya skate, hip-hop, dan surf di California pada tahun 1980-an. Apa yang dimulai sebagai pakaian fungsional untuk aktivitas jalanan berkembang menjadi pernyataan fashion.</p>
        
        <p>Brand seperti Stüssy dan Supreme menjadi pelopor dalam menciptakan identitas visual yang kuat dan membangun komunitas loyal di sekitar produk mereka.</p>
        
        <h2>Kolaborasi Ikonik</h2>
        <p>Kolaborasi antara brand streetwear dengan luxury fashion house telah mengubah persepsi industri tentang apa yang dianggap "high fashion".</p>
        
        <p>Kerjasama seperti Louis Vuitton x Supreme dan Off-White x Nike membuktikan bahwa streetwear memiliki tempat di panggung fashion paling prestisius.</p>
        
        <h2>Pengaruh Teknologi</h2>
        <p>Media sosial dan e-commerce telah mempercepat penyebaran budaya streetwear secara global. Drop culture dan limited releases menciptakan sense of urgency dan exclusivity.</p>
        
        <p>Aplikasi seperti StockX dan GOAT telah menciptakan pasar resale yang mengubah sneakers dan streetwear menjadi investasi.</p>
        
        <h2>Masa Depan Streetwear</h2>
        <p>Dengan teknologi dan sustainability menjadi fokus utama, streetwear terus berevolusi untuk memenuhi kebutuhan generasi baru yang sadar teknologi dan lingkungan.</p>
        
        <p>Brand-brand baru mulai mengintegrasikan teknologi wearable dan material berkelanjutan dalam desain mereka.</p>
        
        <h2>Kesimpulan</h2>
        <p>Streetwear telah membuktikan bahwa fashion tidak harus berasal dari runway Paris atau Milan untuk menjadi influential. Dengan akar yang kuat dalam budaya jalanan dan kemampuan adaptasi yang tinggi, streetwear akan terus menjadi kekuatan penting dalam industri fashion.</p>
      `,
      image: art5,
      author: "Jane Smith",
      date: "10 April 2025",
      category: "Sejarah Fashion",
      tags: ["Streetwear", "Sejarah", "Budaya Urban", "Fashion Evolution", "Kolaborasi"],
      readTime: "8 menit",
    },
    {
      id: 6,
      title: "Masa Depan Fashion: Teknologi Bertemu Gaya",
      content: `
        <p>Industri fashion sedang mengalami revolusi teknologi yang akan mengubah cara kita berbelanja, memproduksi, dan mengonsumsi fashion. Mari kita jelajahi inovasi yang membentuk masa depan industri ini.</p>
        
        <h2>AI dalam Desain Fashion</h2>
        <p>Artificial Intelligence kini membantu desainer dalam menciptakan pola, memprediksi tren, dan bahkan merancang koleksi lengkap. Teknologi ini memungkinkan personalisasi yang belum pernah ada sebelumnya.</p>
        
        <p>AI dapat menganalisis data konsumen, tren media sosial, dan preferensi individual untuk menciptakan desain yang lebih targeted dan relevan.</p>
        
        <h2>Virtual Try-On dan AR</h2>
        <p>Teknologi augmented reality memungkinkan konsumen untuk "mencoba" pakaian secara virtual, mengurangi tingkat pengembalian dan meningkatkan kepuasan pelanggan.</p>
        
        <p>Virtual fitting rooms dan AR mirrors mulai menjadi standar di toko-toko retail, memberikan pengalaman berbelanja yang lebih interaktif dan personal.</p>
        
        <h2>Sustainable Manufacturing</h2>
        <p>Teknologi baru dalam manufaktur memungkinkan produksi yang lebih efisien dan ramah lingkungan, dari 3D printing hingga pewarnaan tanpa air.</p>
        
        <p>Biofabrication dan lab-grown materials seperti kulit dari jamur dan sutra dari bakteri mulai memasuki pasar mainstream.</p>
        
        <h2>Blockchain dan Transparansi</h2>
        <p>Teknologi blockchain memungkinkan pelacakan yang transparan dari rantai pasokan, memberikan konsumen informasi lengkap tentang asal-usul produk mereka.</p>
        
        <p>Smart contracts dapat memastikan bahwa pekerja mendapat upah yang adil dan kondisi kerja yang etis sepanjang rantai produksi.</p>
        
        <h2>Wearable Technology</h2>
        <p>Fashion dan teknologi semakin terintegrasi dengan smart fabrics yang dapat memantau kesehatan, mengatur suhu, atau bahkan mengubah warna sesuai mood.</p>
        
        <p>Dari smartwatch hingga pakaian yang dapat mengisi daya smartphone, batas antara fashion dan teknologi terus kabur.</p>
        
        <h2>Kesimpulan</h2>
        <p>Masa depan fashion akan didefinisikan oleh konvergensi teknologi, sustainability, dan personalisasi. Brand yang dapat mengadopsi inovasi ini sambil tetap mempertahankan kreativitas dan craftsmanship akan memimpin industri di era digital.</p>
      `,
      image: art6,
      author: "Alex Rivera",
      date: "5 Mei 2025",
      category: "Teknologi",
      tags: ["Teknologi", "AI", "Sustainability", "Innovation", "Future Fashion"],
      readTime: "10 menit",
    },
  ]

  return articles.find((a) => a.id.toString() === id) || articles[0]
}

// Get related articles based on category or recent articles
const getRelatedArticles = (currentId: number, category: string) => {
  const allArticles = [
    { id: 1, title: "Tren Fashion Musim Panas 2025", image: art1, category: "Tren Fashion", date: "1 Mei 2025" },
    {
      id: 2,
      title: "Fashion Berkelanjutan: Panduan Lengkap",
      image: art2,
      category: "Keberlanjutan",
      date: "25 April 2025",
    },
    { id: 3, title: "Panduan Aksesori 101", image: art3, category: "Panduan Gaya", date: "20 April 2025" },
    { id: 4, title: "Ikon Gaya Gen Z", image: art4, category: "Budaya", date: "15 April 2025" },
    { id: 5, title: "Evolusi Streetwear", image: art5, category: "Sejarah Fashion", date: "10 April 2025" },
    {
      id: 6,
      title: "Masa Depan Fashion: Teknologi Bertemu Gaya",
      image: art6,
      category: "Teknologi",
      date: "5 Mei 2025",
    },
  ]

  // First try to get articles from same category, then get most recent ones
  const sameCategory = allArticles.filter((a) => a.id !== currentId && a.category === category)
  const otherArticles = allArticles.filter((a) => a.id !== currentId && a.category !== category)

  const related = [...sameCategory, ...otherArticles].slice(0, 3)
  return related
}

export default function ArticleDetail({ params }: { params: Promise<{ id: string }> }) {
  const [resolvedParams, setResolvedParams] = useState<{ id: string } | null>(null)

  // Handle async params
  useState(() => {
    params.then(setResolvedParams)
  })

  if (!resolvedParams) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-pink-600 mx-auto mb-4"></div>
          <p className="text-sm text-gray-600">Memuat artikel...</p>
        </div>
      </div>
    )
  }

  const article = getArticleById(resolvedParams.id)
  const relatedArticles = getRelatedArticles(article.id, article.category)

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Breadcrumb */}
        <div className="mb-6 sm:mb-8">
          <Link
            href="/articles"
            className="inline-flex items-center text-xs sm:text-sm text-gray-600 hover:text-pink-600 transition-colors duration-300"
          >
            <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-1" /> Kembali ke Artikel
          </Link>
        </div>

        <article className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Hero Image */}
          <div className="relative h-[300px] sm:h-[400px] lg:h-[500px]">
            <Image
              src={article.image || "/placeholder.svg"}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-4 sm:p-6 lg:p-8 text-white">
                <div className="flex flex-wrap items-center text-xs sm:text-sm mb-3">
                  <span className="bg-pink-600 px-2 py-1 rounded text-xs font-medium">{article.category}</span>
                  <span className="mx-2">•</span>
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                  <span>{article.date}</span>
                  <span className="mx-2">•</span>
                  <span>{article.readTime} baca</span>
                </div>
                <h1 className="text-lg sm:text-xl lg:text-2xl font-bold leading-tight mb-3 sm:mb-4">{article.title}</h1>
                <div className="flex items-center">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-200 mr-3 overflow-hidden relative">
                    <Image src="/placeholder.svg?height=50&width=50" alt="Author" fill className="object-cover" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium">{article.author}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="p-4 sm:p-6 lg:p-8">
            <div
              className="prose prose-pink max-w-none prose-sm sm:prose-base prose-headings:text-gray-900 prose-headings:font-semibold prose-h2:text-base prose-h2:sm:text-lg prose-h2:lg:text-xl prose-p:text-xs prose-p:sm:text-sm prose-p:lg:text-base prose-p:leading-relaxed prose-p:mb-4"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Tags */}
            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
              <div className="flex flex-wrap items-center">
                <Tag className="w-4 h-4 mr-2 text-gray-500" />
                <span className="mr-2 text-xs sm:text-sm text-gray-500 font-medium">Tags:</span>
                {article.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs mr-2 mb-2 hover:bg-pink-100 hover:text-pink-800 transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Share Section */}
            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-sm sm:text-base font-semibold text-gray-900">Bagikan Artikel</h3>
                <div className="flex items-center space-x-3">
                  <button className="flex items-center text-xs sm:text-sm text-gray-600 hover:text-pink-600 transition-colors duration-300">
                    <Share2 className="w-4 h-4 mr-1" />
                    Bagikan
                  </button>
                  <button className="flex items-center text-xs sm:text-sm text-gray-600 hover:text-pink-600 transition-colors duration-300">
                    <MessageCircle className="w-4 h-4 mr-1" />
                    Komentar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Comments Section */}
        <div className="mt-6 sm:mt-8 bg-white rounded-xl shadow-lg p-4 sm:p-6">
          <h2 className="text-base sm:text-lg font-bold mb-4 text-gray-900">Bagikan Pendapat Anda</h2>
          <form>
            <div className="mb-4">
              <textarea
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-xs sm:text-sm resize-none"
                rows={4}
                placeholder="Tinggalkan komentar Anda tentang artikel ini..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-pink-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium text-xs sm:text-sm hover:bg-pink-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Kirim Komentar
            </button>
          </form>
        </div>

        {/* Related Articles */}
        <div className="mt-8 sm:mt-12">
          <h2 className="text-base sm:text-lg lg:text-xl font-bold mb-4 sm:mb-6 text-gray-900">Artikel Terkait</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {relatedArticles.map((relatedArticle) => (
              <div
                key={relatedArticle.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group"
              >
                <Link href={`/articles/${relatedArticle.id}`} className="block relative h-32 sm:h-40 overflow-hidden">
                  <Image
                    src={relatedArticle.image || "/placeholder.svg"}
                    alt={relatedArticle.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <div className="p-3 sm:p-4">
                  <h3 className="text-xs sm:text-sm font-bold hover:text-pink-600 transition-colors duration-300 line-clamp-2 mb-2 leading-tight">
                    <Link href={`/articles/${relatedArticle.id}`}>{relatedArticle.title}</Link>
                  </h3>
                  <div className="flex items-center text-xs text-gray-500">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>{relatedArticle.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Back to Articles */}
        <div className="mt-8 sm:mt-12 text-center">
          <Link
            href="/articles"
            className="inline-flex items-center bg-pink-600 text-white px-6 py-3 rounded-lg font-medium text-xs sm:text-sm hover:bg-pink-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Semua Artikel
          </Link>
        </div>
      </div>
    </div>
  )
}
