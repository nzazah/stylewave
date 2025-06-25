"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Search, ShoppingBag, User, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Simulasi jumlah item di cart - bisa diganti dengan state management yang sebenarnya
  const cartItemCount = 3

  const isActive = (path: string) => {
    return pathname === path
  }

  const navigationItems = [
    { href: "/", label: "Beranda" },
    { href: "/products", label: "Katalog Produk" },
    { href: "/articles", label: "Artikel" },
    { href: "/about", label: "Tentang Kami" },
    { href: "/contact", label: "Kontak" },
  ]

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 md:h-16 items-center">
        {/* Mobile Menu */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:bg-pink-50 hover:text-pink-600 transition-colors duration-200"
            >
              <Menu className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[280px] sm:w-[320px]">
            <div className="flex items-center justify-between mb-6">
              <Link href="/" className="flex items-center gap-2 group" onClick={() => setIsMobileMenuOpen(false)}>
                <span className="font-bold text-base transition-transform duration-200 group-hover:scale-105">
                  Style<span className="text-pink-600">Wave</span>
                </span>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:bg-pink-50 hover:text-pink-600 transition-colors duration-200"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <nav className="flex flex-col gap-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-sm font-medium py-2.5 px-3 rounded-md transition-all duration-200 hover:bg-pink-50 hover:text-pink-600",
                    isActive(item.href) ? "text-pink-600 bg-pink-50" : "text-foreground",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-bold text-base md:text-lg transition-all duration-200 group-hover:scale-105">
              Style<span className="text-pink-600 group-hover:text-pink-700 transition-colors duration-200">Wave</span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="mx-4 md:mx-6 lg:mx-8 hidden md:flex md:items-center md:gap-4 lg:gap-6 xl:gap-8">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-all duration-200 hover:text-pink-600 relative group py-2",
                isActive(item.href) ? "text-pink-600" : "text-foreground",
              )}
            >
              {item.label}
              <span
                className={cn(
                  "absolute bottom-0 left-0 h-0.5 bg-pink-600 transition-all duration-200",
                  isActive(item.href) ? "w-full" : "w-0 group-hover:w-full",
                )}
              />
            </Link>
          ))}
        </nav>

        {/* Right Side Actions */}
        <div className="ml-auto flex items-center gap-1 md:gap-2">
          {/* Search */}
          <div
            className={cn(
              "relative transition-all duration-300 ease-in-out",
              isSearchOpen ? "block" : "hidden md:block",
            )}
          >
            <Search className="absolute left-2.5 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Cari produk..."
              className={cn(
                "pl-8 text-sm h-9 transition-all duration-300 focus:ring-2 focus:ring-pink-500 focus:border-pink-500",
                isSearchOpen ? "w-[200px] sm:w-[240px]" : "w-[160px] lg:w-[200px] xl:w-[240px]",
              )}
            />
          </div>

          {/* Mobile Search Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:bg-pink-50 hover:text-pink-600 transition-colors duration-200 h-9 w-9"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <Search className="h-4 w-4" />
            <span className="sr-only">Toggle search</span>
          </Button>

          {/* Cart */}
          <Link href="/cart" className="group">
            <Button
              variant="ghost"
              size="icon"
              className="relative hover:bg-pink-50 hover:text-pink-600 transition-colors duration-200 h-9 w-9"
            >
              <ShoppingBag className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-pink-600 text-xs font-medium text-white transition-all duration-200 group-hover:bg-pink-700 group-hover:scale-110">
                  {cartItemCount > 9 ? "9+" : cartItemCount}
                </span>
              )}
              <span className="sr-only">Keranjang ({cartItemCount} item)</span>
            </Button>
          </Link>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-pink-50 hover:text-pink-600 transition-colors duration-200 h-9 w-9"
              >
                <User className="h-4 w-4" />
                <span className="sr-only">Akun</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40 shadow-lg border border-gray-200">
              <DropdownMenuItem asChild>
                <Link
                  href="/account"
                  className="w-full text-sm font-medium py-2 px-3 hover:bg-pink-50 hover:text-pink-600 transition-colors duration-200 cursor-pointer"
                >
                  Akun Saya
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="/dashboard"
                  className="w-full text-sm font-medium py-2 px-3 hover:bg-pink-50 hover:text-pink-600 transition-colors duration-200 cursor-pointer"
                >
                  Dashboard Admin
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
