"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Save, Globe, Bell, Lock, CreditCard, Check } from "lucide-react"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("general")
  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "success" | null>(null)

  const handleSave = () => {
    setSaveStatus("saving")
    setTimeout(() => {
      setSaveStatus("success")
      setTimeout(() => setSaveStatus("idle"), 2000)
    }, 1000)
  }

  return (
    <div className="p-6 lg:p-8 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 lg:mb-8 animate-slide-up">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Pengaturan</h1>
          <p className="text-base text-gray-600 mt-1">Kelola pengaturan dan preferensi toko Anda</p>
        </div>
      </div>

      <Tabs
        defaultValue="general"
        value={activeTab}
        onValueChange={setActiveTab}
        className="space-y-6 lg:space-y-8 animate-slide-up"
        style={{ animationDelay: "100ms" }}
      >
        <div className="bg-white p-1 rounded-lg shadow-sm border border-gray-200">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:w-auto">
            <TabsTrigger
              value="general"
              className="flex items-center gap-2 py-3 text-base data-[state=active]:text-pink-600 data-[state=active]:shadow-sm transition-all duration-300"
            >
              <Globe className="h-5 w-5" /> Umum
            </TabsTrigger>
            <TabsTrigger
              value="notifications"
              className="flex items-center gap-2 py-3 text-base data-[state=active]:text-pink-600 data-[state=active]:shadow-sm transition-all duration-300"
            >
              <Bell className="h-5 w-5" /> Notifikasi
            </TabsTrigger>
            <TabsTrigger
              value="security"
              className="flex items-center gap-2 py-3 text-base data-[state=active]:text-pink-600 data-[state=active]:shadow-sm transition-all duration-300"
            >
              <Lock className="h-5 w-5" /> Keamanan
            </TabsTrigger>
            <TabsTrigger
              value="billing"
              className="flex items-center gap-2 py-3 text-base data-[state=active]:text-pink-600 data-[state=active]:shadow-sm transition-all duration-300"
            >
              <CreditCard className="h-5 w-5" /> Pembayaran
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent
          value="general"
          className="animate-slide-up opacity-0"
          style={{ animationFillMode: "forwards", animationDelay: "200ms" }}
        >
          <Card className="shadow-md hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl lg:text-2xl">Pengaturan Umum</CardTitle>
              <CardDescription className="text-base text-gray-600">
                Kelola pengaturan umum toko online Anda.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-5">
                <h3 className="text-lg font-semibold text-gray-900">Informasi Toko</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2.5">
                    <Label htmlFor="store-name" className="text-base font-medium">
                      Nama Toko
                    </Label>
                    <Input id="store-name" defaultValue="StyleWave" className="text-base py-2.5" />
                  </div>
                  <div className="space-y-2.5">
                    <Label htmlFor="store-email" className="text-base font-medium">
                      Email Toko
                    </Label>
                    <Input id="store-email" defaultValue="info@stylewave.com" className="text-base py-2.5" />
                  </div>
                  <div className="space-y-2.5">
                    <Label htmlFor="store-phone" className="text-base font-medium">
                      Nomor Telepon
                    </Label>
                    <Input id="store-phone" defaultValue="+62 812 3456 7890" className="text-base py-2.5" />
                  </div>
                  <div className="space-y-2.5">
                    <Label htmlFor="store-address" className="text-base font-medium">
                      Alamat
                    </Label>
                    <Input
                      id="store-address"
                      defaultValue="Jl. Fashion Boulevard No. 123, Jakarta Selatan"
                      className="text-base py-2.5"
                    />
                  </div>
                </div>
              </div>

              <Separator className="my-2" />

              <div className="space-y-5">
                <h3 className="text-lg font-semibold text-gray-900">Pengaturan Tampilan</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                    <div>
                      <Label htmlFor="dark-mode" className="text-base font-medium">
                        Mode Gelap
                      </Label>
                      <p className="text-sm text-gray-600 mt-1">Aktifkan mode gelap untuk tampilan admin</p>
                    </div>
                    <Switch id="dark-mode" className="scale-110 data-[state=checked]:bg-pink-600" />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                    <div>
                      <Label htmlFor="compact-view" className="text-base font-medium">
                        Tampilan Kompak
                      </Label>
                      <p className="text-sm text-gray-600 mt-1">Tampilkan lebih banyak konten dalam satu layar</p>
                    </div>
                    <Switch id="compact-view" className="scale-110 data-[state=checked]:bg-pink-600" />
                  </div>
                </div>
              </div>

              <Separator className="my-2" />

              <div className="space-y-5">
                <h3 className="text-lg font-semibold text-gray-900">Pengaturan Regional</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2.5">
                    <Label htmlFor="language" className="text-base font-medium">
                      Bahasa
                    </Label>
                    <select
                      id="language"
                      className="w-full px-3 py-2.5 text-base border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-300"
                    >
                      <option value="id">Bahasa Indonesia</option>
                      <option value="en">English</option>
                    </select>
                  </div>
                  <div className="space-y-2.5">
                    <Label htmlFor="timezone" className="text-base font-medium">
                      Zona Waktu
                    </Label>
                    <select
                      id="timezone"
                      className="w-full px-3 py-2.5 text-base border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-300"
                    >
                      <option value="Asia/Jakarta">Asia/Jakarta (GMT+7)</option>
                      <option value="Asia/Makassar">Asia/Makassar (GMT+8)</option>
                      <option value="Asia/Jayapura">Asia/Jayapura (GMT+9)</option>
                    </select>
                  </div>
                  <div className="space-y-2.5">
                    <Label htmlFor="currency" className="text-base font-medium">
                      Mata Uang
                    </Label>
                    <select
                      id="currency"
                      className="w-full px-3 py-2.5 text-base border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-300"
                    >
                      <option value="IDR">Rupiah Indonesia (IDR)</option>
                      <option value="USD">US Dollar (USD)</option>
                    </select>
                  </div>
                  <div className="space-y-2.5">
                    <Label htmlFor="date-format" className="text-base font-medium">
                      Format Tanggal
                    </Label>
                    <select
                      id="date-format"
                      className="w-full px-3 py-2.5 text-base border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-300"
                    >
                      <option value="dd/mm/yyyy">DD/MM/YYYY</option>
                      <option value="mm/dd/yyyy">MM/DD/YYYY</option>
                      <option value="yyyy-mm-dd">YYYY-MM-DD</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <Button
                  className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 text-base font-medium rounded-lg transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg flex items-center gap-2"
                  onClick={handleSave}
                  disabled={saveStatus === "saving"}
                >
                  {saveStatus === "saving" ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Menyimpan...</span>
                    </>
                  ) : saveStatus === "success" ? (
                    <>
                      <Check className="h-5 w-5" />
                      <span>Tersimpan</span>
                    </>
                  ) : (
                    <>
                      <Save className="h-5 w-5" />
                      <span>Simpan Perubahan</span>
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent
          value="notifications"
          className="animate-slide-up opacity-0"
          style={{ animationFillMode: "forwards", animationDelay: "200ms" }}
        >
          <Card className="shadow-md hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl lg:text-2xl">Pengaturan Notifikasi</CardTitle>
              <CardDescription className="text-base text-gray-600">Kelola preferensi notifikasi Anda.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-5">
                <h3 className="text-lg font-semibold text-gray-900">Notifikasi Email</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                    <div>
                      <Label htmlFor="email-orders" className="text-base font-medium">
                        Pesanan Baru
                      </Label>
                      <p className="text-sm text-gray-600 mt-1">Dapatkan notifikasi saat ada pesanan baru</p>
                    </div>
                    <Switch id="email-orders" defaultChecked className="scale-110 data-[state=checked]:bg-pink-600" />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                    <div>
                      <Label htmlFor="email-customers" className="text-base font-medium">
                        Pelanggan Baru
                      </Label>
                      <p className="text-sm text-gray-600 mt-1">
                        Dapatkan notifikasi saat ada pelanggan baru mendaftar
                      </p>
                    </div>
                    <Switch
                      id="email-customers"
                      defaultChecked
                      className="scale-110 data-[state=checked]:bg-pink-600"
                    />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                    <div>
                      <Label htmlFor="email-reviews" className="text-base font-medium">
                        Ulasan Produk
                      </Label>
                      <p className="text-sm text-gray-600 mt-1">Dapatkan notifikasi saat ada ulasan produk baru</p>
                    </div>
                    <Switch id="email-reviews" defaultChecked className="scale-110 data-[state=checked]:bg-pink-600" />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                    <div>
                      <Label htmlFor="email-stock" className="text-base font-medium">
                        Stok Menipis
                      </Label>
                      <p className="text-sm text-gray-600 mt-1">Dapatkan notifikasi saat stok produk menipis</p>
                    </div>
                    <Switch id="email-stock" defaultChecked className="scale-110 data-[state=checked]:bg-pink-600" />
                  </div>
                </div>
              </div>

              <Separator className="my-2" />

              <div className="space-y-5">
                <h3 className="text-lg font-semibold text-gray-900">Notifikasi Browser</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                    <div>
                      <Label htmlFor="browser-orders" className="text-base font-medium">
                        Pesanan Baru
                      </Label>
                      <p className="text-sm text-gray-600 mt-1">Tampilkan notifikasi browser saat ada pesanan baru</p>
                    </div>
                    <Switch id="browser-orders" defaultChecked className="scale-110 data-[state=checked]:bg-pink-600" />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                    <div>
                      <Label htmlFor="browser-messages" className="text-base font-medium">
                        Pesan Baru
                      </Label>
                      <p className="text-sm text-gray-600 mt-1">Tampilkan notifikasi browser saat ada pesan baru</p>
                    </div>
                    <Switch
                      id="browser-messages"
                      defaultChecked
                      className="scale-110 data-[state=checked]:bg-pink-600"
                    />
                  </div>
                </div>
              </div>

              <Separator className="my-2" />

              <div className="space-y-5">
                <h3 className="text-lg font-semibold text-gray-900">Ringkasan</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                    <div>
                      <Label htmlFor="summary-daily" className="text-base font-medium">
                        Ringkasan Harian
                      </Label>
                      <p className="text-sm text-gray-600 mt-1">Terima email ringkasan harian aktivitas toko</p>
                    </div>
                    <Switch id="summary-daily" className="scale-110 data-[state=checked]:bg-pink-600" />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                    <div>
                      <Label htmlFor="summary-weekly" className="text-base font-medium">
                        Ringkasan Mingguan
                      </Label>
                      <p className="text-sm text-gray-600 mt-1">Terima email ringkasan mingguan aktivitas toko</p>
                    </div>
                    <Switch id="summary-weekly" defaultChecked className="scale-110 data-[state=checked]:bg-pink-600" />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                    <div>
                      <Label htmlFor="summary-monthly" className="text-base font-medium">
                        Ringkasan Bulanan
                      </Label>
                      <p className="text-sm text-gray-600 mt-1">Terima email ringkasan bulanan aktivitas toko</p>
                    </div>
                    <Switch
                      id="summary-monthly"
                      defaultChecked
                      className="scale-110 data-[state=checked]:bg-pink-600"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <Button
                  className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 text-base font-medium rounded-lg transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg flex items-center gap-2"
                  onClick={handleSave}
                  disabled={saveStatus === "saving"}
                >
                  {saveStatus === "saving" ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Menyimpan...</span>
                    </>
                  ) : saveStatus === "success" ? (
                    <>
                      <Check className="h-5 w-5" />
                      <span>Tersimpan</span>
                    </>
                  ) : (
                    <>
                      <Save className="h-5 w-5" />
                      <span>Simpan Perubahan</span>
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent
          value="security"
          className="animate-slide-up opacity-0"
          style={{ animationFillMode: "forwards", animationDelay: "200ms" }}
        >
          <Card className="shadow-md hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl lg:text-2xl">Pengaturan Keamanan</CardTitle>
              <CardDescription className="text-base text-gray-600">
                Kelola pengaturan keamanan akun Anda.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-5">
                <h3 className="text-lg font-semibold text-gray-900">Ubah Password</h3>
                <div className="grid grid-cols-1 gap-5">
                  <div className="space-y-2.5">
                    <Label htmlFor="current-password" className="text-base font-medium">
                      Password Saat Ini
                    </Label>
                    <Input id="current-password" type="password" className="text-base py-2.5" />
                  </div>
                  <div className="space-y-2.5">
                    <Label htmlFor="new-password" className="text-base font-medium">
                      Password Baru
                    </Label>
                    <Input id="new-password" type="password" className="text-base py-2.5" />
                  </div>
                  <div className="space-y-2.5">
                    <Label htmlFor="confirm-password" className="text-base font-medium">
                      Konfirmasi Password Baru
                    </Label>
                    <Input id="confirm-password" type="password" className="text-base py-2.5" />
                  </div>
                </div>
                <Button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 text-base font-medium rounded-lg transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg">
                  Perbarui Password
                </Button>
              </div>

              <Separator className="my-2" />

              <div className="space-y-5">
                <h3 className="text-lg font-semibold text-gray-900">Autentikasi Dua Faktor</h3>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                  <div>
                    <p className="text-base font-medium">Autentikasi Dua Faktor</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Tingkatkan keamanan akun Anda dengan autentikasi dua faktor
                    </p>
                  </div>
                  <Switch id="two-factor" className="scale-110 data-[state=checked]:bg-pink-600" />
                </div>
                <Button
                  variant="outline"
                  className="text-base font-medium py-2.5 transition-all duration-300 hover:bg-gray-50 hover:scale-105"
                >
                  Konfigurasi Autentikasi Dua Faktor
                </Button>
              </div>

              <Separator className="my-2" />

              <div className="space-y-5">
                <h3 className="text-lg font-semibold text-gray-900">Sesi Aktif</h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-5 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-md">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-base font-medium">Chrome di Windows</p>
                        <p className="text-sm text-gray-600 mt-1">Jakarta, Indonesia • Saat ini</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-gray-500 hover:text-gray-700 hover:bg-gray-200 transition-all duration-300"
                      >
                        Ini Saya
                      </Button>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-5 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-md">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-base font-medium">Safari di iPhone</p>
                        <p className="text-sm text-gray-600 mt-1">Jakarta, Indonesia • 2 jam yang lalu</p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-red-600 border-red-600 hover:bg-red-50 transition-all duration-300 hover:scale-105"
                      >
                        Akhiri Sesi
                      </Button>
                    </div>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="text-red-600 border-red-600 hover:bg-red-50 text-base font-medium py-2.5 transition-all duration-300 hover:scale-105"
                >
                  Akhiri Semua Sesi Lain
                </Button>
              </div>

              <Separator className="my-2" />

              <div className="space-y-5">
                <h3 className="text-lg font-semibold text-gray-900">Riwayat Login</h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-5 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-md">
                    <p className="text-base font-medium">Login Berhasil</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Chrome di Windows • Jakarta, Indonesia • Hari ini, 14:30
                    </p>
                  </div>
                  <div className="bg-gray-50 p-5 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-md">
                    <p className="text-base font-medium">Login Berhasil</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Safari di iPhone • Jakarta, Indonesia • Hari ini, 10:15
                    </p>
                  </div>
                  <div className="bg-gray-50 p-5 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-md">
                    <p className="text-base font-medium">Login Berhasil</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Chrome di Windows • Jakarta, Indonesia • Kemarin, 18:45
                    </p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="text-base font-medium py-2.5 transition-all duration-300 hover:bg-gray-50 hover:scale-105"
                >
                  Lihat Semua Aktivitas
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent
          value="billing"
          className="animate-slide-up opacity-0"
          style={{ animationFillMode: "forwards", animationDelay: "200ms" }}
        >
          <Card className="shadow-md hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl lg:text-2xl">Pengaturan Pembayaran</CardTitle>
              <CardDescription className="text-base text-gray-600">
                Kelola metode pembayaran dan pengaturan penagihan.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-5">
                <h3 className="text-lg font-semibold text-gray-900">Metode Pembayaran</h3>
                <div className="space-y-5">
                  <div className="flex items-center justify-between p-5 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-md transition-all duration-300">
                    <div className="flex items-center">
                      <div className="h-12 w-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-md flex items-center justify-center mr-4 text-white font-bold text-lg">
                        VISA
                      </div>
                      <div>
                        <p className="text-base font-medium">•••• •••• •••• 1234</p>
                        <p className="text-sm text-gray-600 mt-1">Berakhir 12/25</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-base py-2 px-4 hover:bg-gray-50 transition-all duration-300 hover:scale-105"
                      >
                        Edit
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-red-600 border-red-600 hover:bg-red-50 text-base py-2 px-4 transition-all duration-300 hover:scale-105"
                      >
                        Hapus
                      </Button>
                    </div>
                  </div>
                  <Button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 text-base font-medium rounded-lg transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg">
                    Tambah Metode Pembayaran
                  </Button>
                </div>
              </div>

              <Separator className="my-2" />

              <div className="space-y-5">
                <h3 className="text-lg font-semibold text-gray-900">Informasi Penagihan</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2.5">
                    <Label htmlFor="billing-name" className="text-base font-medium">
                      Nama
                    </Label>
                    <Input id="billing-name" defaultValue="PT StyleWave Indonesia" className="text-base py-2.5" />
                  </div>
                  <div className="space-y-2.5">
                    <Label htmlFor="billing-email" className="text-base font-medium">
                      Email
                    </Label>
                    <Input id="billing-email" defaultValue="billing@stylewave.com" className="text-base py-2.5" />
                  </div>
                  <div className="space-y-2.5">
                    <Label htmlFor="billing-address" className="text-base font-medium">
                      Alamat
                    </Label>
                    <Input
                      id="billing-address"
                      defaultValue="Jl. Fashion Boulevard No. 123"
                      className="text-base py-2.5"
                    />
                  </div>
                  <div className="space-y-2.5">
                    <Label htmlFor="billing-city" className="text-base font-medium">
                      Kota
                    </Label>
                    <Input id="billing-city" defaultValue="Jakarta Selatan" className="text-base py-2.5" />
                  </div>
                  <div className="space-y-2.5">
                    <Label htmlFor="billing-postal" className="text-base font-medium">
                      Kode Pos
                    </Label>
                    <Input id="billing-postal" defaultValue="12345" className="text-base py-2.5" />
                  </div>
                  <div className="space-y-2.5">
                    <Label htmlFor="billing-country" className="text-base font-medium">
                      Negara
                    </Label>
                    <select
                      id="billing-country"
                      className="w-full px-3 py-2.5 text-base border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-300"
                    >
                      <option value="ID">Indonesia</option>
                      <option value="SG">Singapura</option>
                      <option value="MY">Malaysia</option>
                    </select>
                  </div>
                  <div className="space-y-2.5">
                    <Label htmlFor="billing-tax" className="text-base font-medium">
                      NPWP
                    </Label>
                    <Input id="billing-tax" defaultValue="01.234.567.8-123.000" className="text-base py-2.5" />
                  </div>
                </div>
                <Button
                  className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 text-base font-medium rounded-lg transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg flex items-center gap-2 mt-4"
                  onClick={handleSave}
                  disabled={saveStatus === "saving"}
                >
                  {saveStatus === "saving" ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Menyimpan...</span>
                    </>
                  ) : saveStatus === "success" ? (
                    <>
                      <Check className="h-5 w-5" />
                      <span>Tersimpan</span>
                    </>
                  ) : (
                    <>
                      <Save className="h-5 w-5" />
                      <span>Simpan Perubahan</span>
                    </>
                  )}
                </Button>
              </div>

              <Separator className="my-2" />

              <div className="space-y-5">
                <h3 className="text-lg font-semibold text-gray-900">Riwayat Pembayaran</h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-5 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-md">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                      <div>
                        <p className="text-base font-medium">Paket Premium</p>
                        <p className="text-sm text-gray-600 mt-1">15 Mei 2025 • Rp 1.500.000</p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-base py-2 px-4 hover:bg-gray-50 transition-all duration-300 hover:scale-105 whitespace-nowrap"
                      >
                        Unduh Invoice
                      </Button>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-5 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-md">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                      <div>
                        <p className="text-base font-medium">Paket Premium</p>
                        <p className="text-sm text-gray-600 mt-1">15 April 2025 • Rp 1.500.000</p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-base py-2 px-4 hover:bg-gray-50 transition-all duration-300 hover:scale-105 whitespace-nowrap"
                      >
                        Unduh Invoice
                      </Button>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-5 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-md">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                      <div>
                        <p className="text-base font-medium">Paket Premium</p>
                        <p className="text-sm text-gray-600 mt-1">15 Maret 2025 • Rp 1.500.000</p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-base py-2 px-4 hover:bg-gray-50 transition-all duration-300 hover:scale-105 whitespace-nowrap"
                      >
                        Unduh Invoice
                      </Button>
                    </div>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="text-base font-medium py-2.5 transition-all duration-300 hover:bg-gray-50 hover:scale-105"
                >
                  Lihat Semua Pembayaran
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
