"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, Package, Users, FileText, Settings, LogOut, ShoppingBag, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  // Check if we're on mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024)
      if (window.innerWidth < 1024) {
        setSidebarOpen(false)
      } else {
        setSidebarOpen(true)
      }
    }

    // Initial check
    checkIfMobile()

    // Add event listener
    window.addEventListener("resize", checkIfMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(path + "/")
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-1">
        {/* Sidebar with larger fonts */}
        <aside
          className={`fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-gray-200 transition-transform duration-300 transform ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:relative lg:translate-x-0`}
        >
          <div className="flex flex-col h-full">
            {/* Sidebar Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <Link href="/" className="flex items-center">
                <span className="font-bold text-2xl">
                  Style<span className="text-pink-600">Wave</span>
                </span>
              </Link>
              <span className="text-sm bg-pink-100 text-pink-800 px-3 py-1 rounded-full font-medium">Admin</span>
              <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setSidebarOpen(false)}>
                <X className="h-6 w-6" />
                <span className="sr-only">Close sidebar</span>
              </Button>
            </div>

            {/* Sidebar Content */}
            <div className="flex-1 overflow-y-auto py-6">
              <nav className="px-4 space-y-2">
                <Link
                  href="/dashboard"
                  className={`flex items-center px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                    isActive("/dashboard") &&
                    !isActive("/dashboard/orders") &&
                    !isActive("/dashboard/products") &&
                    !isActive("/dashboard/customers") &&
                    !isActive("/dashboard/articles") &&
                    !isActive("/dashboard/settings")
                      ? "bg-pink-50 text-pink-600 shadow-sm"
                      : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <BarChart3 className="mr-3 h-5 w-5 flex-shrink-0" />
                  Ikhtisar
                </Link>

                <Link
                  href="/dashboard/orders"
                  className={`flex items-center px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                    isActive("/dashboard/orders")
                      ? "bg-pink-50 text-pink-600 shadow-sm"
                      : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <ShoppingBag className="mr-3 h-5 w-5 flex-shrink-0" />
                  Pesanan
                </Link>

                <Link
                  href="/dashboard/products"
                  className={`flex items-center px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                    isActive("/dashboard/products")
                      ? "bg-pink-50 text-pink-600 shadow-sm"
                      : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <Package className="mr-3 h-5 w-5 flex-shrink-0" />
                  Produk
                </Link>

                <Link
                  href="/dashboard/customers"
                  className={`flex items-center px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                    isActive("/dashboard/customers")
                      ? "bg-pink-50 text-pink-600 shadow-sm"
                      : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <Users className="mr-3 h-5 w-5 flex-shrink-0" />
                  Pelanggan
                </Link>

                <Link
                  href="/dashboard/articles"
                  className={`flex items-center px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                    isActive("/dashboard/articles")
                      ? "bg-pink-50 text-pink-600 shadow-sm"
                      : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <FileText className="mr-3 h-5 w-5 flex-shrink-0" />
                  Artikel
                </Link>

                <Link
                  href="/dashboard/settings"
                  className={`flex items-center px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                    isActive("/dashboard/settings")
                      ? "bg-pink-50 text-pink-600 shadow-sm"
                      : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <Settings className="mr-3 h-5 w-5 flex-shrink-0" />
                  Pengaturan
                </Link>
              </nav>
            </div>

            {/* Sidebar Footer */}
            <div className="p-6 border-t border-gray-200">
              <Link
                href="/"
                className="flex items-center px-4 py-3 text-base font-medium text-gray-700 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-all duration-200"
              >
                <LogOut className="mr-3 h-5 w-5 flex-shrink-0" />
                Kembali ke Toko
              </Link>
            </div>
          </div>
        </aside>

        {/* Main Content - Full width utilization */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Top Bar */}
          <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
            <div className="px-6 py-4 flex items-center justify-between">
              <Button
                variant="ghost"
                size="icon"
                className={isMobile ? "block" : "hidden"}
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open sidebar</span>
              </Button>

              <div className="flex-1 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-900">
                  {pathname === "/dashboard" && "Dashboard"}
                  {pathname === "/dashboard/orders" && "Pesanan"}
                  {pathname === "/dashboard/products" && "Produk"}
                  {pathname === "/dashboard/customers" && "Pelanggan"}
                  {pathname === "/dashboard/articles" && "Artikel"}
                  {pathname === "/dashboard/settings" && "Pengaturan"}
                </h1>
              </div>
            </div>
          </header>

          {/* Page Content - Maximized space */}
          <main className="flex-1 bg-gray-50 overflow-hidden">{children}</main>
        </div>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && isMobile && (
        <div
          className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75 transition-opacity lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  )
}
