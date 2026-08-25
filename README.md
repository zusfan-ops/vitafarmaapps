<div align="center">

<img src="assets/images/logo.png" alt="Vita Farma Logo" width="96" style="border-radius: 20px;" />

# Vita Farma — Ekosistem Digital Apotek

**💊 SMART PHARMACY & POS SYSTEM 🩺**

<p>
  <img alt="Laravel" src="https://img.shields.io/badge/Laravel-13-FF2D20?logo=laravel&logoColor=white" />
  <img alt="PHP" src="https://img.shields.io/badge/PHP-8.3+-777BB4?logo=php&logoColor=white" />
  <img alt="MySQL" src="https://img.shields.io/badge/MySQL-8.4-4479A1?logo=mysql&logoColor=white" />
  <img alt="Flutter" src="https://img.shields.io/badge/Flutter-3.44-02569B?logo=flutter&logoColor=white" />
  <img alt="PWA" src="https://img.shields.io/badge/PWA-installable-5A0FC8?logo=pwa&logoColor=white" />
</p>

🌐 **Landing page resmi** untuk memperkenalkan ekosistem aplikasi **Apotek Vita Farma** — dari etalase digital pelanggan sampai meja kasir, gudang, dan analisis persediaan berbasis metodologi WHO.

</div>

---

## 📖 Daftar Isi

- [Apa itu Vita Farma?](#-apa-itu-vita-farma)
- [Mengapa Ekosistem Ini Penting?](#-mengapa-ekosistem-ini-penting)
- [✨ Fitur Utama](#-fitur-utama)
  - [🛍️ Customer PWA](#%EF%B8%8F-customer-pwa)
  - [📱 Aplikasi Pelanggan Flutter](#-aplikasi-pelanggan-flutter)
  - [🖥️ Backend Staff Desktop](#%EF%B8%8F-backend-staff-desktop)
  - [🚀 Backend Staff Mobile](#-backend-staff-mobile)
  - [📊 Analisis ABC‑VEN](#-analisis-abcven)
  - [🩺 Layanan Kesehatan](#-layanan-kesehatan)
- [🌐 Satu Data, Banyak Kanal](#-satu-data-banyak-kanal)
- [🛠️ Teknologi](#%EF%B8%8F-teknologi)
- [🚀 Menjalankan Landing Page](#-menjalankan-landing-page)
- [🎮 Akun Demo](#-akun-demo)
- [📁 Struktur Folder](#-struktur-folder)
- [📄 Lisensi](#-lisensi)

---

## 💡 Apa itu Vita Farma?

**Vita Farma** adalah sistem digital **end-to-end** untuk **Apotek Vita Farma** yang berlokasi di:

> 📍 **Jl. Bung Karno No.78, Mataram, Nusa Tenggara Barat, Indonesia**

Ekosistem ini dirancang untuk menyatukan dua dunia yang selama ini sering berjalan terpisah:

1. **Etalase digital & layanan kesehatan** untuk pelanggan.
2. **Operasional internal apotek** untuk owner, apoteker, kasir, gudang, kurir, dan staf lapangan.

Semua aplikasi — baik PWA maupun aplikasi native Flutter — terhubung ke **satu database** dan **satu backend Laravel**, sehingga data stok, harga, pesanan, dan status resep selalu sinkron secara real-time.

---

## 🎯 Mengapa Ekosistem Ini Penting?

| Masalah Sebelumnya | Solusi Vita Farma |
|---|---|
| Pelanggan harus datang ke apotek hanya untuk menebus resep | Upload resep dokter langsung dari HP, status bisa dilacak |
| Pencatatan stok manual, sering stockout obat vital | Kartu stok otomatis + analisis ABC‑VEN berbasis WHO |
| Obat kadaluarsa terlambat ditarik | Notifikasi ED & laporan obat mendekati kadaluarsa |
| Rekap kas shift sering selisih | POS terintegrasi dengan buka/tutup shift otomatis |
| Tidak ada visibilitas data untuk owner | Dashboard & laporan lengkap: penjualan, laba rugi, kas, stok |

> 🧭 **Visi kami**: menjadikan Vita Farma sebagai apotek retail yang beroperasi secara digital penuh, tetap patuh regulasi kefarmasian, dan mengutamakan keselamatan pasien.

---

## ✨ Fitur Utama

### 🛍️ Customer PWA
Aplikasi web progresif mobile-first untuk pelanggan:

- **Katalog lengkap** — obat, vitamin, alat kesehatan, perawatan, ibu & bayi, suplemen.
- **Pencarian & filter** kategori, harga, promo.
- **Keranjang & checkout** real-time ke database.
- **Upload resep dokter** dengan riwayat status verifikasi.
- **Chat langsung** dengan dokter atau apoteker.
- **Riwayat pesanan & profil** dengan statistik belanja nyata.
- **Installable PWA** — bisa dipasang ke layar utama Android & iOS.

### 📱 Aplikasi Pelanggan Flutter
Versi native Android/iOS dengan pengalaman sama persis seperti PWA:

- Autentikasi **Laravel Sanctum** Bearer Token via `flutter_secure_storage`.
- Katalog, keranjang, checkout, kirim resep, layanan kesehatan, chat, dan profil.
- Menggunakan endpoint REST yang sama dengan Customer PWA — tidak ada backend ganda.

### 🖥️ Backend Staff Desktop
Panel admin *density-first* untuk kerja sehari-hari di apotek:

- **Dashboard** ringkasan penjualan & shift.
- **POS/Kasir** dengan shift, kartu stok otomatis, dan cetak struk.
- **Data Obat, Kartu Stok, Stok Opname**.
- **Purchasing** — PO → approval → penerimaan barang.
- **Analisis ABC‑VEN** otomatis dari data penjualan.
- **Laporan** — penjualan, laba rugi, kas/rekap shift, stok, obat expired.
- **Pesanan Online & Verifikasi Resep**.
- **CMS Frontpage** untuk kelola banner & produk tampil.
- **Staff & Role, Master Data, Pengaturan, Notifikasi**.

### 🚀 Backend Staff Mobile
Companion PWA untuk staf lapangan:

- Dashboard + buka/tutup shift.
- Kasir cepat.
- Cek stok instan.
- Notifikasi operasional.
- Profil & pengaturan.

### 📊 Analisis ABC‑VEN
Implementasi metodologi **WHO** untuk pengendalian persediaan:

- **ABC** — berdasarkan nilai pemakaian (kumulatif 70/90%).
- **VEN** — berdasarkan kekritisan klinis (Vital / Essential / Non‑essential).
- **Matriks gabungan** menghasilkan kategori prioritas **I / II / III**.
- Dasar keputusan safety stock, approval PO cepat, dan pencegahan stockout obat vital.

### 🩺 Layanan Kesehatan
Layanan medis tambahan yang tersedia di Customer PWA & Flutter Pelanggan:

- 🚑 **Panggil Dokter**
- 🚑 **Ambulans 24/7**
- 🧪 **Cek Lab Mobile**
- 💬 **Konsultasi Online**
- 🚨 **Tombol darurat** untuk bantuan cepat

---

## 🌐 Satu Data, Banyak Kanal

Semua kanal aplikasi di bawah ini membaca dan menulis ke **satu backend Laravel** dan **satu database MySQL**:

```text
┌─────────────────────┐
│   Laravel Backend   │
│   (satu database)   │
└──────────┬──────────┘
           │
    ┌──────┴──────┐
    │             │
┌───▼────┐   ┌────▼────┐
│Customer│   │  Staff  │
│  PWA   │   │ Desktop │
└────────┘   └─────────┘
┌────────┐   ┌─────────┐
│Flutter │   │Flutter  │
│Pelanggan│  │  Staff  │
└────────┘   └─────────┘
```

Keuntungannya:

- ✅ Stok berkurang otomatis saat ada penjualan di POS.
- ✅ Status pesanan online tersinkron ke halaman Pesanan pelanggan.
- ✅ Perubahan harga/banner di CMS langsung muncul di PWA.
- ✅ Tidak ada data dobel atau konflik antar aplikasi.

---

## 🛠️ Teknologi

| Lapisan | Teknologi |
|---|---|
| **Backend** | Laravel 13, PHP 8.3+ |
| **Database** | MySQL 8.4 |
| **Customer Web** | PWA (HTML, CSS, JS vanilla) + Blade |
| **Customer Mobile** | Flutter 3.44, Dart 3.12, Riverpod |
| **Staff Mobile** | Flutter 3.44, Dart 3.12, Riverpod |
| **Auth** | Session (PWA) + Laravel Sanctum Bearer Token (Flutter) |
| **HTTP Client** | `fetch` (PWA), `dio` (Flutter) |
| **State Management** | Vanilla JS / Riverpod |
| **Font** | Inter (Google Fonts) |

---

## 🚀 Menjalankan Landing Page

Landing page ini adalah situs statis murni (HTML + CSS + JS). Cara menjalankannya:

### 1. Langsung buka file
Buka `index.html` di browser favorit Anda:

```text
C:\laragon\www\vitafarmaapps\index.html
```

### 2. Via Laragon / server lokal
Jika menggunakan Laragon, cukup akses melalui auto-vhost:

```text
http://vitafarmaapps.test
```

Atau jalankan server PHP sederhana:

```bash
php -S localhost:8080
```

Kemudian buka `http://localhost:8080`.

### 3. Deploy ke hosting statis
Karena tidak memerlukan backend, landing page ini bisa langsung di-deploy ke:

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages
- Apache/Nginx shared hosting

---

## 🎮 Akun Demo

> ⚠️ Kredensial demo **hanya untuk lingkungan lokal/uji**. Wajib diganti sebelum produksi.

**Password semua akun demo:** `password`

| Peran | Email | Area |
|---|---|---|
| Pelanggan | `rina@vitafarma.test` | Customer PWA / Flutter Pelanggan |
| Owner | `owner@vitafarma.test` | Staff Desktop / Staff Mobile |
| Apoteker | `apoteker@vitafarma.test` | Staff Desktop |
| Kasir | `kasir@vitafarma.test` | POS / Staff Mobile |
| Staff Gudang | `gudang@vitafarma.test` | Inventory / Staff Mobile |
| Kurir | `kurir@vitafarma.test` | Pengiriman / Staff Mobile |

---

## 📁 Struktur Folder

```text
vitafarmaapps/
├── index.html              # Halaman landing page utama
├── README.md               # Dokumentasi ini
├── assets/
│   ├── css/
│   │   └── style.css       # Styling & design tokens Vita Farma
│   ├── js/
│   │   └── main.js         # Interaktivitas (menu, reveal, counter)
│   └── images/
│       └── logo.png        # Logo Apotek Vita Farma
└── .gitattributes
```

---

## 📄 Lisensi

Perangkat lunak **proprietary/internal** milik **Apotek Vita Farma**, Mataram, NTB.

Penggunaan, distribusi, atau modifikasi di luar organisasi memerlukan izin tertulis.
Komponen pihak ketiga (Laravel, Flutter, Inter, dll.) tetap mengikuti lisensi masing-masing.

---

<div align="center">

**💚 Vita Farma — Sehat Lebih Dekat, Layanan Lebih Cepat**

<sub>Mataram, Nusa Tenggara Barat · Indonesia</sub>

</div>
