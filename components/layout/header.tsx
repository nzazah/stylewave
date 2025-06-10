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
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 animate-slide-down">
      <div className="container flex h-16 lg:h-18 items-center">
        {/* Mobile Menu */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:bg-pink-50 hover:text-pink-600 transition-all duration-300 hover:scale-110"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px] animate-slide-right">
            <div className="flex items-center justify-between mb-8">
              <Link href="/" className="flex items-center gap-2 group" onClick={() => setIsMobileMenuOpen(false)}>
                <span className="font-bold text-xl group-hover:scale-105 transition-transform duration-300">
                  Style<span className="text-pink-600">Wave</span>
                </span>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:bg-pink-50 hover:text-pink-600 transition-all duration-300"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            <nav className="flex flex-col gap-2">
              {navigationItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-lg font-medium py-3 px-4 rounded-lg transition-all duration-300 hover:bg-pink-50 hover:text-pink-600 hover:translate-x-2 animate-slide-up opacity-0",
                    isActive(item.href) ? "text-pink-600 bg-pink-50" : "text-foreground",
                  )}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: "forwards",
                  }}
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
            <span className="font-bold text-xl md:text-2xl lg:text-3xl group-hover:scale-105 transition-all duration-300">
              Style<span className="text-pink-600 group-hover:text-pink-700">Wave</span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="mx-6 lg:mx-8 hidden md:flex md:items-center md:gap-6 lg:gap-8 xl:gap-10">
          {navigationItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-base lg:text-lg font-medium transition-all duration-300 hover:text-pink-600 hover:scale-105 relative group py-2 animate-slide-up opacity-0",
                isActive(item.href) ? "text-pink-600" : "text-foreground",
              )}
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "forwards",
              }}
            >
              {item.label}
              <span
                className={cn(
                  "absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-300 group-hover:w-full",
                  isActive(item.href) ? "w-full" : "",
                )}
              />
            </Link>
          ))}
        </nav>

        {/* Right Side Actions */}
        <div className="ml-auto flex items-center gap-2 lg:gap-3">
          {/* Search */}
          <div
            className={cn(
              "relative transition-all duration-300 ease-in-out",
              isSearchOpen ? "block animate-slide-left" : "hidden md:block",
            )}
          >
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 lg:h-5 lg:w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Cari produk..."
              className={cn(
                "pl-9 lg:pl-10 text-base transition-all duration-300 focus:ring-2 focus:ring-pink-500 focus:border-pink-500",
                isSearchOpen ? "w-[250px] sm:w-[300px]" : "w-[200px] lg:w-[280px] xl:w-[320px]",
              )}
            />
          </div>

          {/* Mobile Search Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:bg-pink-50 hover:text-pink-600 transition-all duration-300 hover:scale-110"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <Search className="h-5 w-5" />
            <span className="sr-only">Toggle search</span>
          </Button>

          {/* Cart */}
          <Link href="/cart" className="group">
            <Button
              variant="ghost"
              size="icon"
              className="relative hover:bg-pink-50 hover:text-pink-600 transition-all duration-300 hover:scale-110"
            >
              <ShoppingBag className="h-5 w-5 lg:h-6 lg:w-6 group-hover:scale-110 transition-transform duration-300" />
              <span className="absolute -top-1 -right-1 flex h-5 w-5 lg:h-6 lg:w-6 items-center justify-center rounded-full bg-pink-600 text-xs lg:text-sm font-medium text-white animate-pulse group-hover:animate-bounce group-hover:bg-pink-700 transition-colors duration-300">
                3
              </span>
              <span className="sr-only">Keranjang</span>
            </Button>
          </Link>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-pink-50 hover:text-pink-600 transition-all duration-300 hover:scale-110"
              >
                <User className="h-5 w-5 lg:h-6 lg:w-6" />
                <span className="sr-only">Akun</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 animate-slide-up shadow-lg border border-gray-200">
              <DropdownMenuItem asChild>
                <Link
                  href="/account"
                  className="w-full text-base font-medium py-3 px-4 hover:bg-pink-50 hover:text-pink-600 transition-all duration-300 cursor-pointer"
                >
                  Akun Saya
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="/dashboard"
                  className="w-full text-base font-medium py-3 px-4 hover:bg-pink-50 hover:text-pink-600 transition-all duration-300 cursor-pointer"
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
