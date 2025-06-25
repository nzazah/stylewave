"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Star, ShoppingCart, Heart, Check } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import main1 from "@/assets/main1.jpg"
import main2 from "@/assets/main2.jpg"
import main3 from "@/assets/main3.jpg"
import main4 from "@/assets/main4.jpg"
import main5 from "@/assets/main5.jpg"
import main7 from "@/assets/main7.jpg"
import main8 from "@/assets/main8.jpg"
import main9 from "@/assets/main9.jpg"

// Complete product data - in a real app, this would come from a database
const getProductById = (id: string) => {
  const products = [
    {
      id: 1,
      title: "Hoodie Urban Vibes",
      price: 399000,
      originalPrice: 499000,
      description:
        "Nyaman, hangat, dan trendi—dibuat untuk semua pencinta fashion. Hoodie premium ini memiliki potongan santai dengan bahu yang turun dan kantong depan, sempurna untuk dipadupadankan atau sebagai item pernyataan. Terbuat dari bahan cotton fleece berkualitas tinggi yang memberikan kehangatan optimal.",
      image: main2,
      rating: 5,
      reviewCount: 27,
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Hitam", "Abu-abu", "Biru Navy", "Maroon"],
      category: "Atasan",
      isOnSale: true,
    },
    {
      id: 2,
      title: "Kaos Street Style",
      price: 249000,
      description:
        "Grafis yang berani dan katun premium untuk tampilan sehari-hari Anda. Kaos ini dirancang dengan potongan yang sedikit oversized dan menampilkan cetakan grafis khas kami yang menonjol di keramaian. Bahan 100% cotton combed yang lembut dan breathable.",
      image: main1,
      rating: 4,
      reviewCount: 18,
      sizes: ["S", "M", "L", "XL"],
      colors: ["Putih", "Hitam", "Pink", "Abu-abu"],
      category: "Atasan",
      isNew: true,
    },
    {
      id: 3,
      title: "Celana Cargo Flow",
      price: 499000,
      description:
        "Kantong fungsional dengan potongan santai untuk gaya dan kenyamanan maksimal. Celana cargo dengan desain modern yang menggabungkan utilitas dan style. Dilengkapi dengan multiple pockets dan adjustable waist untuk kenyamanan sepanjang hari.",
      image: main3,
      rating: 5,
      reviewCount: 32,
      sizes: ["28", "30", "32", "34", "36"],
      colors: ["Khaki", "Hitam", "Olive", "Abu-abu"],
      category: "Bawahan",
    },
    {
      id: 4,
      title: "Sneakers Wave Rider",
      price: 799000,
      description:
        "Sol empuk dengan desain yang siap untuk jalanan, nyaman sepanjang hari. Sneakers premium dengan teknologi cushioning terdepan dan upper material berkualitas tinggi. Perfect untuk aktivitas sehari-hari maupun olahraga ringan.",
      image: main4,
      rating: 4,
      reviewCount: 15,
      sizes: ["39", "40", "41", "42", "43", "44"],
      colors: ["Putih", "Hitam", "Navy", "Abu-abu"],
      category: "Alas Kaki",
    },
    {
      id: 5,
      title: "Beanie Vibe Check",
      price: 199000,
      description:
        "Tetap hangat dan stylish dengan aksesori penting ini. Beanie knit premium dengan fit yang comfortable dan design minimalis yang cocok untuk berbagai outfit. Terbuat dari wool blend yang soft dan warm.",
      image: main5,
      rating: 5,
      reviewCount: 23,
      sizes: ["One Size"],
      colors: ["Hitam", "Abu-abu", "Navy", "Cream", "Burgundy"],
      category: "Aksesoris",
    },
    {
      id: 7,
      title: "Kemeja Formal Slim",
      price: 450000,
      description:
        "Kemeja formal dengan potongan slim fit yang memberikan tampilan profesional dan modern. Terbuat dari bahan cotton premium dengan finishing yang rapi. Cocok untuk acara formal maupun casual smart.",
      image: main7,
      rating: 4,
      reviewCount: 12,
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Putih", "Biru Muda", "Abu-abu", "Navy"],
      category: "Atasan",
    },
    {
      id: 8,
      title: "Celana Jeans Vintage",
      price: 550000,
      description:
        "Celana jeans dengan wash vintage yang memberikan karakter unik. Potongan regular fit dengan detail distressed yang subtle. Terbuat dari denim berkualitas tinggi yang durable dan comfortable.",
      image: main8,
      rating: 4,
      reviewCount: 12,
      sizes: ["28", "30", "32", "34", "36", "38"],
      colors: ["Light Blue", "Dark Blue", "Black Wash"],
      category: "Bawahan",
    },
    {
      id: 9,
      title: "Topi Baseball Classic",
      price: 150000,
      description:
        "Topi baseball klasik dengan design timeless yang cocok untuk berbagai aktivitas. Dilengkapi dengan adjustable strap dan bahan yang breathable. Perfect accessory untuk melengkapi street style Anda.",
      image: main9,
      rating: 4,
      reviewCount: 12,
      sizes: ["One Size"],
      colors: ["Hitam", "Navy", "Putih", "Khaki"],
      category: "Aksesoris",
    },
  ]

  return products.find((p) => p.id.toString() === id) || products[0]
}

// Get related products based on category
const getRelatedProducts = (currentProductId: number, category: string) => {
  const allProducts = [
    { id: 1, title: "Hoodie Urban Vibes", image: main2, price: 399000, category: "Atasan" },
    { id: 2, title: "Kaos Street Style", image: main1, price: 249000, category: "Atasan" },
    { id: 3, title: "Celana Cargo Flow", image: main3, price: 499000, category: "Bawahan" },
    { id: 4, title: "Sneakers Wave Rider", image: main4, price: 799000, category: "Alas Kaki" },
    { id: 5, title: "Beanie Vibe Check", image: main5, price: 199000, category: "Aksesoris" },
    { id: 7, title: "Kemeja Formal Slim", image: main7, price: 450000, category: "Atasan" },
    { id: 8, title: "Celana Jeans Vintage", image: main8, price: 550000, category: "Bawahan" },
    { id: 9, title: "Topi Baseball Classic", image: main9, price: 150000, category: "Aksesoris" },
  ]

  return allProducts.filter((p) => p.id !== currentProductId && p.category === category).slice(0, 4)
}

export default function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { toast } = useToast()
  const [resolvedParams, setResolvedParams] = useState<{ id: string } | null>(null)
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [selectedColor, setSelectedColor] = useState<string | null>(null)
  const [isAdding, setIsAdding] = useState(false)

  // Handle async params
  useState(() => {
    params.then(setResolvedParams)
  })

  if (!resolvedParams) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-pink-600 mx-auto mb-4"></div>
          <p className="text-sm text-gray-600">Memuat produk...</p>
        </div>
      </div>
    )
  }

  const product = getProductById(resolvedParams.id)
  const relatedProducts = getRelatedProducts(product.id, product.category)

  // Format price to IDR
  const formattedPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(product.price)

  const formattedOriginalPrice = product.originalPrice
    ? new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(product.originalPrice)
    : null

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast({
        title: "Pilih opsi",
        description: "Anda perlu memilih ukuran dan warna sebelum menambahkan ke keranjang",
        variant: "destructive",
      })
      return
    }

    setIsAdding(true)

    // Show success toast
    toast({
      title: "Ditambahkan ke keranjang!",
      description: `${product.title} telah ditambahkan ke keranjang Anda.`,
    })

    // Reset adding state after animation
    setTimeout(() => {
      setIsAdding(false)
    }, 1000)
  }

  return (
    <div className="py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6 text-xs sm:text-sm">
          <ol className="flex items-center space-x-2 text-gray-500">
            <li>
              <Link href="/" className="hover:text-pink-600">
                Beranda
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/products" className="hover:text-pink-600">
                Produk
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-900">{product.title}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Product Image */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-lg overflow-hidden group">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Badges */}
            {(product.isOnSale || product.isNew) && (
              <div className="absolute top-4 left-4">
                {product.isOnSale && (
                  <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium mr-2">Sale</span>
                )}
                {product.isNew && (
                  <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">Baru</span>
                )}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="product-details">
            <div className="mb-2">
              <span className="text-xs sm:text-sm text-pink-600 font-medium">{product.category}</span>
            </div>

            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">{product.title}</h1>

            <div className="flex items-center mb-4">
              <div className="flex mr-2">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < product.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
              </div>
              <span className="text-xs sm:text-sm text-gray-600">
                {product.rating}/5 ({product.reviewCount} ulasan)
              </span>
            </div>

            <div className="price mb-6">
              <span className="text-lg sm:text-xl lg:text-2xl font-bold text-pink-600">{formattedPrice}</span>
              {formattedOriginalPrice && (
                <span className="text-sm sm:text-base text-gray-500 line-through ml-2">{formattedOriginalPrice}</span>
              )}
            </div>

            <p className="text-sm sm:text-base text-gray-700 mb-6 leading-relaxed">{product.description}</p>

            <div className="mb-6">
              <h3 className="text-base sm:text-lg font-semibold mb-3">Ukuran</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className={`w-10 h-10 sm:w-12 sm:h-12 border rounded-md flex items-center justify-center text-sm font-medium transition-all duration-200 ${
                      selectedSize === size
                        ? "border-pink-600 bg-pink-50 text-pink-600"
                        : "border-gray-300 hover:border-pink-600"
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-base sm:text-lg font-semibold mb-3">Warna</h3>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    className={`px-3 py-2 sm:px-4 sm:py-2 border rounded-md text-xs sm:text-sm font-medium transition-all duration-200 ${
                      selectedColor === color
                        ? "border-pink-600 bg-pink-50 text-pink-600"
                        : "border-gray-300 hover:border-pink-600"
                    }`}
                    onClick={() => setSelectedColor(color)}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                className={`flex-1 flex items-center justify-center px-6 py-3 rounded-lg font-medium text-sm sm:text-base transition-all duration-300 ${
                  isAdding
                    ? "bg-green-600 hover:bg-green-700 text-white"
                    : "bg-pink-600 hover:bg-pink-700 text-white hover:scale-105"
                }`}
                onClick={handleAddToCart}
                disabled={isAdding}
              >
                {isAdding ? (
                  <>
                    <Check className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> Ditambahkan!
                  </>
                ) : (
                  <>
                    <ShoppingCart className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> Tambah ke Keranjang
                  </>
                )}
              </button>
              <button className="border border-gray-300 p-3 rounded-lg hover:border-pink-600 transition-colors hover:bg-pink-50">
                <Heart className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-12 sm:mt-16">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-6 sm:mb-8">
              Produk Serupa dalam Kategori {product.category}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/products/${relatedProduct.id}`}
                  className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-48 sm:h-64 overflow-hidden">
                    <Image
                      src={relatedProduct.image || "/placeholder.svg"}
                      alt={relatedProduct.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-3 sm:p-4">
                    <h3 className="text-xs sm:text-sm font-semibold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors line-clamp-2">
                      {relatedProduct.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-bold text-pink-600">
                      {new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                        minimumFractionDigits: 0,
                      }).format(relatedProduct.price)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
