import ProductCard from "@/components/product-card"
import main1 from "@/assets/main1.jpg";
import main2 from "@/assets/main2.jpg";
import main3 from "@/assets/main3.jpg";
import main4 from "@/assets/main4.jpg";
import main5 from "@/assets/main5.jpg";
import main7 from "@/assets/main7.jpg";
import main8 from "@/assets/main8.jpg";
import main9 from "@/assets/main9.jpg";

// Sample product data
const products = [
  {
    id: 1,
    title: "Hoodie Urban Vibes",
    price: 399000,
    description: "Nyaman, hangat, dan trendi—dibuat untuk semua pencinta fashion.",
    image: main2,
    rating: 5,
    reviewCount: 27,
  },
  {
    id: 2,
    title: "Kaos Street Style",
    price: 249000,
    description: "Grafis yang berani dan katun premium untuk tampilan sehari-hari Anda.",
    image: main1,
    rating: 4,
    reviewCount: 18,
  },
  {
    id: 3,
    title: "Celana Cargo Flow",
    price: 499000,
    description: "Kantong fungsional dengan potongan santai untuk gaya dan kenyamanan maksimal.",
    image: main3,
    rating: 5,
    reviewCount: 32,
  },
  {
    id: 4,
    title: "Sneakers Wave Rider",
    price: 799000,
    description: "Sol empuk dengan desain yang siap untuk jalanan, nyaman sepanjang hari.",
    image: main4,
    rating: 4,
    reviewCount: 15,
  },
  {
    id: 5,
    title: "Beanie Vibe Check",
    price: 199000,
    description: "Tetap hangat dan stylish dengan aksesori penting ini.",
    image: main5,
    rating: 5,
    reviewCount: 23,
  },
  {
    id: 7,
    title: "Kemeja Formal Slim",
    price: 450000,
    description: "Tahan cuaca dengan warna gradien yang menarik perhatian.",
    image: main7,
    rating: 4,
    reviewCount: 12,
  },
  {
    id: 8,
    title: "Celana Jeans Vintage",
    price: 550000,
    description: "Tahan cuaca dengan warna gradien yang menarik perhatian.",
    image: main8,
    rating: 4,
    reviewCount: 12,
  },
  {
    id: 9,
    title: "Topi Baseball Classic",
    price: 150000,
    description: "Tahan cuaca dengan warna gradien yang menarik perhatian.",
    image: main9,
    rating: 4,
    reviewCount: 12,
  },
]

// Filter categories
const categories = [
  { id: "all", name: "Semua" },
  { id: "tops", name: "Atasan" },
  { id: "bottoms", name: "Bawahan" },
  { id: "footwear", name: "Alas Kaki" },
  { id: "accessories", name: "Aksesoris" },
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8 sm:mb-12 animate-fade-in">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-2 sm:mb-3">
            Katalog Produk
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl leading-relaxed">
            Temukan gaya terbaru yang mendefinisikan tren
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 sm:mb-10 lg:mb-12 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md">
            <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800">Filter Kategori</h2>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {categories.map((category, index) => (
                <button
                  key={category.id}
                  className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 hover:scale-105 ${
                    index === 0
                      ? "bg-pink-600 text-white hover:bg-pink-700 shadow-md"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="animate-slide-up opacity-0"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "forwards",
              }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div
          className="mt-10 sm:mt-12 lg:mt-16 flex justify-center animate-slide-up"
          style={{ animationDelay: "0.6s" }}
        >
          <button className="bg-white border-2 border-pink-600 text-pink-600 hover:bg-pink-50 px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center space-x-2">
            <span>Muat Lebih Banyak</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 animate-bounce"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
