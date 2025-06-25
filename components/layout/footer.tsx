import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Footer({ className }: { className?: string }) {
  return (
    <footer className={cn("bg-gray-900 text-white", className)}>
      <div className="container mx-auto px-4 py-8 md:py-10">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 md:gap-8">
          <div>
            <h3 className="mb-3 text-lg font-bold">
              Style<span className="text-pink-500">Wave</span>
            </h3>
            <p className="mb-4 text-sm text-gray-400 leading-relaxed">
              StyleWave adalah destinasi fashion terkemuka yang menawarkan koleksi pakaian dan aksesoris terbaru dengan
              kualitas terbaik.
            </p>
            <div className="flex space-x-3">
              <Link href="#" className="text-gray-400 hover:text-pink-500 transition-colors duration-200">
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-pink-500 transition-colors duration-200">
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-pink-500 transition-colors duration-200">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          <div>
            <h4 className="mb-3 text-base font-semibold">Tautan Cepat</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-gray-400 hover:text-pink-500 transition-colors duration-200">
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-sm text-gray-400 hover:text-pink-500 transition-colors duration-200"
                >
                  Katalog Produk
                </Link>
              </li>
              <li>
                <Link
                  href="/articles"
                  className="text-sm text-gray-400 hover:text-pink-500 transition-colors duration-200"
                >
                  Artikel
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-400 hover:text-pink-500 transition-colors duration-200"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-400 hover:text-pink-500 transition-colors duration-200"
                >
                  Kontak
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-base font-semibold">Kategori</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products?category=pria"
                  className="text-sm text-gray-400 hover:text-pink-500 transition-colors duration-200"
                >
                  Pakaian Pria
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=wanita"
                  className="text-sm text-gray-400 hover:text-pink-500 transition-colors duration-200"
                >
                  Pakaian Wanita
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=anak"
                  className="text-sm text-gray-400 hover:text-pink-500 transition-colors duration-200"
                >
                  Pakaian Anak
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=aksesoris"
                  className="text-sm text-gray-400 hover:text-pink-500 transition-colors duration-200"
                >
                  Aksesoris
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=sepatu"
                  className="text-sm text-gray-400 hover:text-pink-500 transition-colors duration-200"
                >
                  Sepatu
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-base font-semibold">Kontak</h4>
            <ul className="space-y-2.5">
              <li className="flex items-start">
                <MapPin className="mr-2 h-4 w-4 text-pink-500 shrink-0 mt-0.5" />
                <span className="text-sm text-gray-400 leading-relaxed">
                  Jl. Raya Miru no 19, Driyorejo - Gresik, Jawa Timur 61177, Indonesia
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-4 w-4 text-pink-500" />
                <span className="text-sm text-gray-400">+62 895 3350 12442</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-4 w-4 text-pink-500" />
                <span className="text-sm text-gray-400">info@stylewave.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-6">
          <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
            <p className="text-center text-xs text-gray-400">
              &copy; {new Date().getFullYear()} StyleWave. Hak Cipta Dilindungi.
            </p>
            <div className="flex gap-4 text-xs text-gray-400">
              <Link href="/terms" className="hover:text-pink-500 transition-colors duration-200">
                Syarat & Ketentuan
              </Link>
              <Link href="/privacy" className="hover:text-pink-500 transition-colors duration-200">
                Kebijakan Privasi
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
