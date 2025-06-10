"use client"

import { useState } from "react"
import {
  Users,
  FileText,
  ShoppingBag,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  BarChart3,
  DollarSign,
  Calendar,
  Search,
  ChevronDown,
  Plus,
  AlertCircle,
  CheckCircle,
  Clock,
  Eye,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Sample dashboard data
const recentOrders = [
  {
    id: "ORD12345678",
    customer: "Budi Santoso",
    date: "15 Mei 2025",
    total: 1411000,
    status: "Selesai",
  },
  {
    id: "ORD12345679",
    customer: "Siti Rahayu",
    date: "10 Mei 2025",
    total: 748000,
    status: "Dalam Pengiriman",
  },
  {
    id: "ORD12345680",
    customer: "Ahmad Hidayat",
    date: "8 Mei 2025",
    total: 899000,
    status: "Diproses",
  },
]

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  // Format price to IDR
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div className="h-full flex flex-col p-6 overflow-auto animate-fade-in">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 gap-4 animate-slide-up">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-base text-gray-600 mt-1">Selamat datang kembali, Admin</p>
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="search"
              placeholder="Cari..."
              className="w-full sm:w-[220px] pl-9 py-2.5 text-base border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-300"
            />
          </div>
          <Button
            variant="outline"
            className="gap-2 px-4 py-2.5 text-base border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105"
          >
            <Calendar className="h-4 w-4" /> Mei 2025 <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {[
          {
            title: "Total Pendapatan",
            value: "Rp 45.231.000",
            change: "+20.1%",
            changeType: "positive",
            icon: DollarSign,
            borderColor: "border-l-green-500",
            delay: "0ms",
          },
          {
            title: "Pesanan Baru",
            value: "+573",
            change: "+12.2%",
            changeType: "positive",
            icon: ShoppingBag,
            borderColor: "border-l-blue-500",
            delay: "100ms",
          },
          {
            title: "Pelanggan Baru",
            value: "+249",
            change: "+18.4%",
            changeType: "positive",
            icon: Users,
            borderColor: "border-l-purple-500",
            delay: "200ms",
          },
          {
            title: "Tingkat Konversi",
            value: "3.2%",
            change: "-0.5%",
            changeType: "negative",
            icon: TrendingUp,
            borderColor: "border-l-amber-500",
            delay: "300ms",
          },
        ].map((stat, index) => (
          <Card
            key={index}
            className={`${stat.borderColor} border-l-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up opacity-0`}
            style={{
              animationDelay: stat.delay,
              animationFillMode: "forwards",
            }}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <CardTitle className="text-base font-semibold text-gray-700">{stat.title}</CardTitle>
              <stat.icon className="h-5 w-5 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="flex items-center">
                <span
                  className={`text-sm font-medium flex items-center ${
                    stat.changeType === "positive" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {stat.changeType === "positive" ? (
                    <ArrowUpRight className="h-4 w-4 mr-1" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4 mr-1" />
                  )}
                  {stat.change}
                </span>
                <span className="text-sm text-gray-500 ml-2">dari bulan lalu</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tabs Section */}
      <div
        className="flex-1 animate-slide-up opacity-0"
        style={{
          animationDelay: "400ms",
          animationFillMode: "forwards",
        }}
      >
        <Tabs defaultValue="overview" className="space-y-6 h-full flex flex-col">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="overview" className="text-base font-medium">
              Ikhtisar
            </TabsTrigger>
            <TabsTrigger value="analytics" className="text-base font-medium">
              Analitik
            </TabsTrigger>
            <TabsTrigger value="reports" className="text-base font-medium">
              Laporan
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6 flex-1">
            {/* Charts Section */}
            <div className="grid gap-6 lg:grid-cols-7">
              <Card className="lg:col-span-4 hover:shadow-lg transition-all duration-300">
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle className="text-xl font-bold text-gray-900">Penjualan Bulanan</CardTitle>
                    <CardDescription className="text-base text-gray-600 mt-1">
                      Tren penjualan selama 6 bulan terakhir
                    </CardDescription>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-base hover:bg-gray-50 transition-all duration-300 hover:scale-105"
                  >
                    Lihat Detail
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center bg-gray-50 rounded-lg border-2 border-dashed border-gray-200 hover:border-gray-300 transition-colors duration-300">
                    <div className="text-center">
                      <BarChart3 className="h-16 w-16 text-gray-400 mx-auto mb-3" />
                      <p className="text-base text-gray-500">Grafik penjualan akan ditampilkan di sini</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="lg:col-span-3 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">Produk Terlaris</CardTitle>
                  <CardDescription className="text-base text-gray-600">
                    Top 5 produk berdasarkan penjualan
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {[
                      { name: "Hoodie Urban Vibes", sales: 124, percentage: 28 },
                      { name: "Kaos Street Style", sales: 98, percentage: 22 },
                      { name: "Celana Cargo Flow", sales: 82, percentage: 18 },
                      { name: "Sneakers Wave Rider", sales: 65, percentage: 15 },
                      { name: "Jaket Sunset Fade", sales: 42, percentage: 9 },
                    ].map((product, i) => (
                      <div
                        key={i}
                        className="flex items-center group hover:bg-gray-50 p-2 rounded-lg transition-all duration-300"
                      >
                        <div className="w-8 text-base font-semibold text-gray-700">{i + 1}.</div>
                        <div className="flex-1 ml-3">
                          <div className="text-base font-semibold text-gray-900 group-hover:text-pink-600 transition-colors duration-300">
                            {product.name}
                          </div>
                          <div className="w-full h-2.5 bg-gray-200 rounded-full mt-2">
                            <div
                              className="h-2.5 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full transition-all duration-500 ease-out"
                              style={{ width: `${product.percentage}%` }}
                            ></div>
                          </div>
                        </div>
                        <div className="ml-4 text-right">
                          <div className="text-base font-bold text-gray-900">{product.sales}</div>
                          <div className="text-sm text-gray-500">terjual</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full text-base hover:bg-gray-50 transition-all duration-300 hover:scale-105"
                  >
                    <Eye className="mr-2 h-4 w-4" /> Lihat Semua Produk
                  </Button>
                </CardFooter>
              </Card>
            </div>

            {/* Bottom Cards Section */}
            <div className="grid gap-6 lg:grid-cols-3">
              {/* Recent Orders */}
              <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">Pesanan Terbaru</CardTitle>
                  <CardDescription className="text-base text-gray-600">Pesanan yang baru masuk</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentOrders.map((order, index) => (
                      <div
                        key={order.id}
                        className="flex items-center justify-between border-b border-gray-100 pb-4 last:border-0 last:pb-0 hover:bg-gray-50 p-2 rounded-lg transition-all duration-300"
                      >
                        <div>
                          <div className="text-base font-semibold text-gray-900">{order.id}</div>
                          <div className="text-sm text-gray-600">{order.customer}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-base font-bold text-gray-900">{formatPrice(order.total)}</div>
                          <Badge
                            variant={
                              order.status === "Selesai"
                                ? "default"
                                : order.status === "Dalam Pengiriman"
                                  ? "secondary"
                                  : "outline"
                            }
                            className="mt-1 text-sm"
                          >
                            {order.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full text-base hover:bg-gray-50 transition-all duration-300 hover:scale-105"
                  >
                    <ShoppingBag className="mr-2 h-4 w-4" /> Lihat Semua Pesanan
                  </Button>
                </CardFooter>
              </Card>

              {/* Recent Activities */}
              <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">Aktivitas Terbaru</CardTitle>
                  <CardDescription className="text-base text-gray-600">Aktivitas sistem terbaru</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        action: "Pesanan baru dibuat",
                        detail: "ORD12345678 oleh Budi Santoso",
                        time: "10 menit yang lalu",
                        icon: <ShoppingBag className="h-4 w-4" />,
                        color: "bg-blue-100 text-blue-600",
                      },
                      {
                        action: "Produk ditambahkan",
                        detail: "Kemeja Formal Slim oleh Admin",
                        time: "1 jam yang lalu",
                        icon: <Plus className="h-4 w-4" />,
                        color: "bg-green-100 text-green-600",
                      },
                      {
                        action: "Stok menipis",
                        detail: "Sneakers Wave Rider (3 tersisa)",
                        time: "3 jam yang lalu",
                        icon: <AlertCircle className="h-4 w-4" />,
                        color: "bg-amber-100 text-amber-600",
                      },
                      {
                        action: "Pesanan selesai",
                        detail: "ORD12345675 oleh Maya Sari",
                        time: "5 jam yang lalu",
                        icon: <CheckCircle className="h-4 w-4" />,
                        color: "bg-green-100 text-green-600",
                      },
                    ].map((activity, i) => (
                      <div
                        key={i}
                        className="flex items-start hover:bg-gray-50 p-2 rounded-lg transition-all duration-300 group"
                      >
                        <div
                          className={`${activity.color} p-2 rounded-full mr-3 mt-0.5 group-hover:scale-110 transition-transform duration-300`}
                        >
                          {activity.icon}
                        </div>
                        <div className="flex-1">
                          <div className="text-base font-semibold text-gray-900">{activity.action}</div>
                          <div className="text-sm text-gray-600">{activity.detail}</div>
                          <div className="text-sm text-gray-500 mt-1 flex items-center">
                            <Clock className="h-3 w-3 mr-1" /> {activity.time}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full text-base hover:bg-gray-50 transition-all duration-300 hover:scale-105"
                  >
                    Lihat Semua Aktivitas
                  </Button>
                </CardFooter>
              </Card>

              {/* Top Customers */}
              <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">Pelanggan Aktif</CardTitle>
                  <CardDescription className="text-base text-gray-600">
                    Pelanggan dengan transaksi terbanyak
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: "Budi Santoso", email: "budi.s@example.com", orders: 12, spent: "Rp 5.250.000" },
                      { name: "Siti Rahayu", email: "siti.r@example.com", orders: 8, spent: "Rp 3.750.000" },
                      { name: "Ahmad Hidayat", email: "ahmad.h@example.com", orders: 7, spent: "Rp 3.200.000" },
                      { name: "Dewi Lestari", email: "dewi.l@example.com", orders: 6, spent: "Rp 2.800.000" },
                    ].map((customer, i) => (
                      <div
                        key={i}
                        className="flex items-center hover:bg-gray-50 p-2 rounded-lg transition-all duration-300 group"
                      >
                        <Avatar className="h-10 w-10 mr-3 group-hover:scale-110 transition-transform duration-300">
                          <AvatarImage src={`/placeholder.svg?height=40&width=40&text=${customer.name.charAt(0)}`} />
                          <AvatarFallback className="bg-pink-100 text-pink-600 font-semibold">
                            {customer.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="text-base font-semibold text-gray-900 group-hover:text-pink-600 transition-colors duration-300">
                            {customer.name}
                          </div>
                          <div className="text-sm text-gray-600">{customer.email}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-base font-bold text-gray-900">{customer.orders} pesanan</div>
                          <div className="text-sm text-gray-600">{customer.spent}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full text-base hover:bg-gray-50 transition-all duration-300 hover:scale-105"
                  >
                    <Users className="mr-2 h-4 w-4" /> Lihat Semua Pelanggan
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="flex-1">
            <Card className="h-full hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">Analitik</CardTitle>
                <CardDescription className="text-base text-gray-600">
                  Lihat data analitik lengkap untuk bisnis Anda.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex items-center justify-center bg-gray-50 rounded-lg border-2 border-dashed border-gray-200">
                <div className="text-center">
                  <BarChart3 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-base text-gray-500">Data analitik akan ditampilkan di sini</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="flex-1">
            <Card className="h-full hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">Laporan</CardTitle>
                <CardDescription className="text-base text-gray-600">
                  Buat dan unduh laporan untuk bisnis Anda.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex items-center justify-center bg-gray-50 rounded-lg border-2 border-dashed border-gray-200">
                <div className="text-center">
                  <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-base text-gray-500">Laporan akan ditampilkan di sini</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
