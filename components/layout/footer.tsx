import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Footer({ className }: { className?: string }) {
  return (
    <footer className={cn("bg-gray-900 text-white", className)}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-xl font-bold">
              Style<span className="text-pink-500">Wave</span>
            </h3>
            <p className="mb-4 text-gray-400">
              StyleWave adalah destinasi fashion terkemuka yang menawarkan koleksi pakaian dan aksesoris terbaru dengan
              kualitas terbaik.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-semibold">Tautan Cepat</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-pink-500 transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-pink-500 transition-colors">
                  Katalog Produk
                </Link>
              </li>
              <li>
                <Link href="/articles" className="text-gray-400 hover:text-pink-500 transition-colors">
                  Artikel
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-pink-500 transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-pink-500 transition-colors">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-semibold">Kategori</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products?category=pria" className="text-gray-400 hover:text-pink-500 transition-colors">
                  Pakaian Pria
                </Link>
              </li>
              <li>
                <Link href="/products?category=wanita" className="text-gray-400 hover:text-pink-500 transition-colors">
                  Pakaian Wanita
                </Link>
              </li>
              <li>
                <Link href="/products?category=anak" className="text-gray-400 hover:text-pink-500 transition-colors">
                  Pakaian Anak
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=aksesoris"
                  className="text-gray-400 hover:text-pink-500 transition-colors"
                >
                  Aksesoris
                </Link>
              </li>
              <li>
                <Link href="/products?category=sepatu" className="text-gray-400 hover:text-pink-500 transition-colors">
                  Sepatu
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-semibold">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-pink-500 shrink-0" />
                <span className="text-gray-400">Jl. Fashion Boulevard No. 123, Jakarta Selatan, Indonesia</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-pink-500" />
                <span className="text-gray-400">+62 812 3456 7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-pink-500" />
                <span className="text-gray-400">info@stylewave.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-gray-400">
              &copy; {new Date().getFullYear()} StyleWave. Hak Cipta Dilindungi.
            </p>
            <div className="flex gap-4 text-sm text-gray-400">
              <Link href="/terms" className="hover:text-pink-500 transition-colors">
                Syarat & Ketentuan
              </Link>
              <Link href="/privacy" className="hover:text-pink-500 transition-colors">
                Kebijakan Privasi
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
