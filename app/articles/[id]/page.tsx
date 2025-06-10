import Link from "next/link"
import Image from "next/image"
import { Calendar, Tag, ArrowLeft } from "lucide-react"

// Sample article data - in a real app, this would come from a database
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
      image: "/placeholder.svg?height=600&width=1200",
      author: "Jane Smith",
      date: "1 Mei 2025",
      category: "Tren Fashion",
      tags: ["Musim Panas", "Tren", "Fashion Berkelanjutan", "Tren Warna"],
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
      image: "/placeholder.svg?height=600&width=1200",
      author: "Mark Johnson",
      date: "25 April 2025",
      category: "Keberlanjutan",
      tags: ["Fashion Berkelanjutan", "Brand Etis", "Ramah Lingkungan", "Lemari Pakaian Kapsul"],
    },
  ]

  return articles.find((a) => a.id.toString() === id) || articles[0]
}

export default function ArticleDetail({ params }: { params: { id: string } }) {
  const article = getArticleById(params.id)

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <Link
            href="/articles"
            className="inline-flex items-center text-gray-600 hover:text-pink-600 transition-colors"
          >
            <ArrowLeft size={16} className="mr-1" /> Kembali ke Artikel
          </Link>
        </div>

        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative h-[400px]">
            <Image
              src={article.image || "/placeholder.svg"}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-6 md:p-8 text-white">
                <div className="flex items-center text-sm mb-3">
                  <span className="bg-pink-600 px-2 py-1 rounded text-xs font-medium">{article.category}</span>
                  <span className="mx-2">•</span>
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{article.date}</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold">{article.title}</h1>
                <div className="flex items-center mt-4">
                  <div className="w-10 h-10 rounded-full bg-gray-200 mr-3 overflow-hidden relative">
                    <Image src="/placeholder.svg?height=50&width=50" alt="Author" fill className="object-cover" />
                  </div>
                  <span>{article.author}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <div className="prose prose-pink max-w-none" dangerouslySetInnerHTML={{ __html: article.content }}></div>

            <div className="mt-8 pt-6 border-t">
              <div className="flex flex-wrap items-center">
                <Tag className="w-5 h-5 mr-2 text-gray-500" />
                <span className="mr-2 text-gray-500">Tags:</span>
                {article.tags.map((tag, index) => (
                  <span key={index} className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm mr-2 mb-2">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>

        {/* Share and Comments Section */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Bagikan Pendapat Anda</h2>
          <form>
            <div className="mb-4">
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                rows={4}
                placeholder="Tinggalkan komentar..."
              ></textarea>
            </div>
            <button type="submit" className="filled-button transition-transform hover:scale-105">
              Kirim Komentar
            </button>
          </form>
        </div>

        {/* Related Articles */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Artikel Terkait</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((id) => (
              <div
                key={id}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <Link href={`/articles/${id}`} className="block relative h-40 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Related article"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </Link>
                <div className="p-4">
                  <h3 className="font-bold hover:text-pink-600 transition-colors">
                    <Link href={`/articles/${id}`}>Judul Artikel Terkait {id}</Link>
                  </h3>
                  <div className="flex items-center text-sm text-gray-500 mt-2">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{10 + id} April 2025</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
