"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Globe, Bell, Lock, CreditCard, Save } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"

export default function SettingsPage() {
  const [loading, setLoading] = useState(false)

  const handleSave = async () => {
    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setLoading(false)
    toast.success("Pengaturan berhasil disimpan!")
  }

  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="text-xl font-semibold text-gray-900">Pengaturan</h1>
        <p className="text-sm text-muted-foreground mt-1">Kelola pengaturan dan preferensi toko Anda</p>
      </div>

      <Tabs defaultValue="general" className="w-full space-y-4">
        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <TabsTrigger
            value="general"
            className="flex items-center gap-2 text-sm data-[state=active]:text-pink-600 transition-all duration-300"
          >
            <Globe className="h-4 w-4" />
            Umum
          </TabsTrigger>
          <TabsTrigger
            value="notifications"
            className="flex items-center gap-2 text-sm data-[state=active]:text-pink-600 transition-all duration-300"
          >
            <Bell className="h-4 w-4" />
            Notifikasi
          </TabsTrigger>
          <TabsTrigger
            value="security"
            className="flex items-center gap-2 text-sm data-[state=active]:text-pink-600 transition-all duration-300"
          >
            <Lock className="h-4 w-4" />
            Keamanan
          </TabsTrigger>
          <TabsTrigger
            value="billing"
            className="flex items-center gap-2 text-sm data-[state=active]:text-pink-600 transition-all duration-300"
          >
            <CreditCard className="h-4 w-4" />
            Billing
          </TabsTrigger>
        </TabsList>
        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Informasi Toko</CardTitle>
              <CardDescription className="text-sm text-muted-foreground">
                Perbarui informasi dasar tentang toko Anda
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="storeName" className="text-sm font-medium">
                    Nama Toko
                  </Label>
                  <Input type="text" id="storeName" defaultValue="Toko Serba Ada" className="text-sm py-2" />
                </div>
                <div>
                  <Label htmlFor="storeEmail" className="text-sm font-medium">
                    Email Toko
                  </Label>
                  <Input type="email" id="storeEmail" defaultValue="toko@example.com" className="text-sm" />
                </div>
              </div>
              <div>
                <Label htmlFor="storeDescription" className="text-sm font-medium">
                  Deskripsi Toko
                </Label>
                <Input
                  type="text"
                  id="storeDescription"
                  defaultValue="Menjual berbagai macam produk kebutuhan sehari-hari"
                  className="text-sm"
                />
              </div>
              <div>
                <Label htmlFor="storeCategory" className="text-sm font-medium">
                  Kategori Toko
                </Label>
                <Select>
                  <SelectTrigger className="text-sm">
                    <SelectValue placeholder="Pilih kategori" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fashion">Fashion</SelectItem>
                    <SelectItem value="electronics">Elektronik</SelectItem>
                    <SelectItem value="food">Makanan & Minuman</SelectItem>
                    <SelectItem value="furniture">Furniture</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Lokasi Toko</CardTitle>
              <CardDescription className="text-sm text-muted-foreground">
                Atur lokasi toko Anda untuk pengiriman dan lainnya
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div>
                <Label htmlFor="storeAddress" className="text-sm font-medium">
                  Alamat Toko
                </Label>
                <Input type="text" id="storeAddress" defaultValue="Jl. Pahlawan No. 10" className="text-sm" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="storeCity" className="text-sm font-medium">
                    Kota
                  </Label>
                  <Input type="text" id="storeCity" defaultValue="Surabaya" className="text-sm" />
                </div>
                <div>
                  <Label htmlFor="storeProvince" className="text-sm font-medium">
                    Provinsi
                  </Label>
                  <Input type="text" id="storeProvince" defaultValue="Jawa Timur" className="text-sm" />
                </div>
                <div>
                  <Label htmlFor="storePostalCode" className="text-sm font-medium">
                    Kode Pos
                  </Label>
                  <Input type="text" id="storePostalCode" defaultValue="60111" className="text-sm" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Preferensi Notifikasi</CardTitle>
              <CardDescription className="text-sm text-muted-foreground">
                Atur jenis notifikasi yang ingin Anda terima
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="space-y-1">
                  <h3 className="text-sm font-medium">Notifikasi Email</h3>
                  <p className="text-xs text-muted-foreground">Kirimkan saya email tentang pembaruan dan promosi</p>
                </div>
                <Switch id="email-notifications" className="data-[state=checked]:bg-pink-600" />
              </div>
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="space-y-1">
                  <h3 className="text-sm font-medium">Notifikasi SMS</h3>
                  <p className="text-xs text-muted-foreground">Kirimkan saya SMS tentang pesanan dan pengiriman</p>
                </div>
                <Switch id="sms-notifications" className="data-[state=checked]:bg-pink-600" />
              </div>
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="space-y-1">
                  <h3 className="text-sm font-medium">Notifikasi Push</h3>
                  <p className="text-xs text-muted-foreground">Kirimkan saya notifikasi push tentang aktivitas toko</p>
                </div>
                <Switch id="push-notifications" className="data-[state=checked]:bg-pink-600" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Keamanan Akun</CardTitle>
              <CardDescription className="text-sm text-muted-foreground">
                Perbarui kata sandi dan atur autentikasi dua faktor
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div>
                <Label htmlFor="currentPassword" className="text-sm font-medium">
                  Kata Sandi Saat Ini
                </Label>
                <Input type="password" id="currentPassword" className="text-sm" />
              </div>
              <div>
                <Label htmlFor="newPassword" className="text-sm font-medium">
                  Kata Sandi Baru
                </Label>
                <Input type="password" id="newPassword" className="text-sm" />
              </div>
              <div>
                <Label htmlFor="confirmPassword" className="text-sm font-medium">
                  Konfirmasi Kata Sandi Baru
                </Label>
                <Input type="password" id="confirmPassword" className="text-sm" />
              </div>
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="space-y-1">
                  <h3 className="text-sm font-medium">Autentikasi Dua Faktor</h3>
                  <p className="text-xs text-muted-foreground">Aktifkan autentikasi dua faktor untuk keamanan ekstra</p>
                </div>
                <Switch id="two-factor-auth" className="data-[state=checked]:bg-pink-600" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="billing" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Informasi Billing</CardTitle>
              <CardDescription className="text-sm text-muted-foreground">
                Perbarui informasi kartu kredit dan alamat billing Anda
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div>
                <Label htmlFor="cardNumber" className="text-sm font-medium">
                  Nomor Kartu Kredit
                </Label>
                <Input type="text" id="cardNumber" className="text-sm" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="expiryDate" className="text-sm font-medium">
                    Tanggal Kadaluarsa
                  </Label>
                  <Input type="text" id="expiryDate" placeholder="MM/YY" className="text-sm" />
                </div>
                <div>
                  <Label htmlFor="cvv" className="text-sm font-medium">
                    CVV
                  </Label>
                  <Input type="text" id="cvv" className="text-sm" />
                </div>
              </div>
              <div>
                <Label htmlFor="billingAddress" className="text-sm font-medium">
                  Alamat Billing
                </Label>
                <Input type="text" id="billingAddress" className="text-sm" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-6 flex justify-end gap-2">
        <button className="text-sm font-medium px-4 py-2 transition-all duration-300 hover:bg-gray-50">Batal</button>
        <button
          className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2"
          onClick={handleSave}
          disabled={loading}
        >
          {loading ? (
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
          ) : (
            <>
              <Save className="h-4 w-4" />
              Simpan
            </>
          )}
        </button>
      </div>
    </div>
  )
}
