"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Star, ShoppingCart, Heart, Check } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

// Sample product data - in a real app, this would come from a database
const getProductById = (id: string) => {
  const products = [
    {
      id: 1,
      title: "Hoodie Urban Vibes",
      price: 399000,
      description:
        "Nyaman, hangat, dan trendi—dibuat untuk semua pencinta fashion. Hoodie premium ini memiliki potongan santai dengan bahu yang turun dan kantong depan, sempurna untuk dipadupadankan atau sebagai item pernyataan.",
      image: "/placeholder.svg?height=600&width=600",
      rating: 5,
      reviewCount: 27,
      sizes: ["S", "M", "L", "XL"],
      colors: ["Hitam", "Abu-abu", "Biru Navy"],
    },
    {
      id: 2,
      title: "Kaos Street Style",
      price: 249000,
      description:
        "Grafis yang berani dan katun premium untuk tampilan sehari-hari Anda. Kaos ini dirancang dengan potongan yang sedikit oversized dan menampilkan cetakan grafis khas kami yang menonjol di keramaian.",
      image: "/placeholder.svg?height=600&width=600",
      rating: 4,
      reviewCount: 18,
      sizes: ["S", "M", "L", "XL"],
      colors: ["Putih", "Hitam", "Pink"],
    },
  ]

  return products.find((p) => p.id.toString() === id) || products[0]
}

export default function ProductDetail({ params }: { params: { id: string } }) {
  const product = getProductById(params.id)
  const { toast } = useToast()

  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [selectedColor, setSelectedColor] = useState<string | null>(null)
  const [isAdding, setIsAdding] = useState(false)

  // Format price to IDR
  const formattedPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(product.price)

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
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="relative h-[500px] rounded-lg overflow-hidden group">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Product Details */}
          <div className="product-details">
            <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
            <div className="flex items-center mb-4">
              <div className="flex mr-2">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={`${i < product.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
              </div>
              <span className="text-sm text-gray-600">({product.reviewCount} ulasan)</span>
            </div>

            <div className="price mb-6">
              <span className="text-2xl font-bold text-pink-600">{formattedPrice}</span>
            </div>

            <p className="text-gray-700 mb-6">{product.description}</p>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Ukuran</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className={`w-12 h-12 border rounded-md flex items-center justify-center transition-all duration-200 ${
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
              <h3 className="text-lg font-semibold mb-2">Warna</h3>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    className={`px-4 py-2 border rounded-md transition-all duration-200 ${
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

            <div className="flex gap-4">
              <button
                className={`filled-button flex items-center ${isAdding ? "bg-green-600 hover:bg-green-700" : ""}`}
                onClick={handleAddToCart}
                disabled={isAdding}
              >
                {isAdding ? (
                  <>
                    <Check className="mr-2 h-5 w-5" /> Ditambahkan!
                  </>
                ) : (
                  <>
                    <ShoppingCart className="mr-2 h-5 w-5" /> Tambah ke Keranjang
                  </>
                )}
              </button>
              <button className="border border-gray-300 p-3 rounded-md hover:border-pink-600 transition-colors hover:bg-pink-50">
                <Heart className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Anda Mungkin Juga Suka</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Placeholders for related products */}
            {[1, 2, 3, 4].map((id) => (
              <div
                key={id}
                className="bg-gray-100 rounded-lg h-64 flex items-center justify-center transition-all duration-300 hover:bg-gray-200 hover:-translate-y-1"
              >
                <Link href={`/products/${id}`} className="text-gray-500 hover:text-pink-600">
                  Produk Terkait {id}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
