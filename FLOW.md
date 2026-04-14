# 🗺️ VISUAL FLOW DIAGRAM - PPDB Online System

## Application Flow & Navigation

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         PPDB ONLINE APPLICATION                         │
│                    (Single Page Application - SPA)                       │
├─────────────────────────────────────────────────────────────────────────┤

                    ◆────────────────────────────◆
                    │  PAGE TABS (Bottom Fixed)  │
                    │ [Beranda] [Login] [...]    │
                    ◆────────────────────────────◆
                              │
                              └──────────────────────────┬──────────────────┐
                                                         │                  │
                          ┌─────────────────────────────┴────────┐
                          │  showPage() JavaScript Function      │
                          │  Switches pages dynamically          │
                          └─────────────────────────────────────┘
```

---

## 📄 PAGE STRUCTURE

```
PAGE 1: LANDING PAGE (page-landing)
├─────────────────────────────────────────────────────────
│
├── NAVBAR
│   ├── Logo "PPDB Online"
│   ├── Nav Links [Beranda, Jalur Masuk, Jadwal, Info, Bantuan]
│   └── Actions [Masuk, Daftar Sekarang]
│
├── HERO SECTION
│   ├── Left Side
│   │   ├── Badge "Pendaftaran Dibuka"
│   │   ├── Heading "Penerimaan Peserta Didik Baru SMA"
│   │   ├── Description
│   │   ├── CTA Buttons [Mulai Mendaftar, Panduan]
│   │   └── Stats [12,480 Pendaftar, 48 Sekolah, 8,640 Kuota]
│   │
│   └── Right Side
│       └── Dashboard Card
│           ├── Chart visualization
│           └── Mini stats (Zonasi, Prestasi, Afirmasi)
│
├── CONTENT SECTION: JALUR PENDAFTARAN
│   ├── Section Header
│   └── 4-Column Grid
│       ├── Card 1: Jalur Zonasi (📍)
│       ├── Card 2: Jalur Prestasi (🏆)
│       ├── Card 3: Jalur Afirmasi (🤝)
│       └── Card 4: Perpindahan Tugas (🔄)
│
├── TIMELINE SECTION
│   ├── Section Header "Jadwal Pendaftaran"
│   └── Vertical Timeline (5 items)
│       ├── Item 1: Pendaftaran Online (1-7 Juni 2026)
│       ├── Item 2: Verifikasi Dokumen (8-12 Juni 2026)
│       ├── Item 3: Seleksi & Pemeringkatan (13-14 Juni 2026)
│       ├── Item 4: Pengumuman Hasil (15 Juni 2026)
│       └── Item 5: Daftar Ulang (16-20 Juni 2026)
│
└── FOOTER
    ├── Footer Grid (4 columns)
    │   ├── Brand Info
    │   ├── Menu: Informasi
    │   ├── Menu: Panduan
    │   └── Menu: Kontak
    └── Footer Bottom (Copyright)
```

```
PAGE 2: LOGIN PAGE (page-login)
├─────────────────────────────────────────────────────────
│
├── LEFT SIDE (Info & Features)
│   ├── Heading "Selamat Datang di PPDB Online"
│   ├── Description Text
│   └── Feature List
│       ├── 🔒 Data terenkripsi
│       ├── 📱 Notifikasi real-time
│       └── ⚡ Pantau status kapan saja
│
└── RIGHT SIDE (Form)
    ├── Heading "Masuk ke Akun"
    ├── Form Fields
    │   ├── Email/Phone input
    │   ├── Password input
    │   ├── Remember me checkbox
    │   └── Forgot password link
    ├── Login Button
    ├── Divider "atau"
    ├── Google Login Button
    └── Sign up link
```

```
PAGE 3: REGISTRATION/FORM PAGE (page-register)
├─────────────────────────────────────────────────────────
│
├── NAVBAR
│   └── (Same as landing page)
│
├── FORM PAGE HEADER
│   ├── Title "Formulir Pendaftaran PPDB"
│   └── Subtitle "Tahun Ajaran 2026/2027"
│
├── PROGRESS INDICATOR
│   ├── Progress bar (5 steps)
│   └── Step labels
│       ├── ✓ Akun (done)
│       ├── ✓ Data Pribadi (done)
│       ├── → Orang Tua (current)
│       ├── □ Dokumen
│       └── □ Konfirmasi
│
├── FORM CARDS (Multi-step form)
│   │
│   ├── Card 1: Jalur Pendaftaran Info
│   │   ├── Icon + Jalur info (Zonasi)
│   │   └── Status badge
│   │
│   ├── Card 2: Data Ayah
│   │   ├── Nama Lengkap Ayah
│   │   ├── NIK Ayah
│   │   ├── Pekerjaan (dropdown)
│   │   ├── Penghasilan per Bulan (dropdown)
│   │   └── Nomor HP Ayah
│   │
│   ├── Card 3: Data Ibu
│   │   ├── Nama Lengkap Ibu
│   │   ├── NIK Ibu
│   │   ├── Pekerjaan (dropdown)
│   │   ├── Penghasilan per Bulan (dropdown)
│   │   └── Nomor HP Ibu
│   │
│   └── Card 4: Alamat Orang Tua
│       ├── Alamat Lengkap (textarea)
│       ├── Kota/Kabupaten (input)
│       ├── Provinsi (input)
│       └── Kode Pos (input)
│
└── FORM ACTIONS
    ├── [← Sebelumnya] (back button)
    └── [Selanjutnya: Upload Dokumen →] (next button)
```

```
PAGE 4: DASHBOARD/ADMIN PAGE (page-dashboard)
├─────────────────────────────────────────────────────────
│
├── SIDEBAR (Left, 240px width)
│   ├── Logo
│   ├── Menu Section: UTAMA
│   │   ├── 📊 Dashboard (active)
│   │   ├── 📋 Pendaftar (247 items)
│   │   ├── ✅ Verifikasi (38 items)
│   │   ├── 🏆 Seleksi
│   │   └── 📢 Pengumuman
│   ├── Menu Section: KELOLA
│   │   ├── 🏫 Data Sekolah
│   │   ├── 👥 Pengguna
│   │   ├── 📈 Laporan
│   │   └── ⚙️ Pengaturan
│   └── User Info
│       ├── Avatar [AS]
│       ├── Name: Admin Sekolah
│       └── Role: SMA Negeri 1 Pontianak
│
└── MAIN CONTENT (Flex: 1fr)
    ├── HEADER
    │   ├── Breadcrumb [Dashboard / Overview]
    │   ├── Title "Dashboard PPDB"
    │   └── Action Buttons [📥 Ekspor Data, + Tambah Pendaftar]
    │
    ├── STAT CARDS (4 columns grid)
    │   ├── Card 1: Total Pendaftar (1,247)
    │   ├── Card 2: Terverifikasi (892)
    │   ├── Card 3: Menunggu Verifikasi (247)
    │   └── Card 4: Kuota Terisi (68%)
    │
    ├── QUOTA BY JALUR (4 columns grid)
    │   ├── Zonasi: 78% (125 / 160)
    │   ├── Prestasi: 62% (60 / 96)
    │   ├── Afirmasi: 54% (26 / 48)
    │   └── Pindah Tugas: 31% (5 / 16)
    │
    └── DATA TABLE
        ├── Panel Header
        │   ├── Title "Daftar Pendaftar Terbaru"
        │   ├── Search Box
        │   └── Filter Dropdown
        ├── Table Header
        │   ├── Pendaftar | NISN | Asal Sekolah | Jalur | Status | Tanggal | Action
        └── Table Rows (5 sample rows)
            ├── Rizky Akbar Pratama (Zonasi - Terverifikasi)
            ├── Nadia Fitria Sari (Prestasi - Terverifikasi)
            ├── Budi Wicaksono (Afirmasi - Menunggu)
            ├── Dewi Anggraini (Zonasi - Menunggu)
            └── Muhammad Rafli (Zonasi - Revisi Dokumen)
        ├── Pagination Footer
        └── Item count (Menampilkan 1-5 dari 247)
```

```
PAGE 5: RESULT/ANNOUNCEMENT PAGE (page-result)
├─────────────────────────────────────────────────────────
│
├── NAVBAR
│   └── (Same as landing page)
│
├── PAGE HEADER
│   ├── Title "Hasil Seleksi PPDB"
│   └── Subtitle "Tahun Ajaran 2026/2027"
│
├── SEARCH SECTION
│   ├── Label "Masukkan Nomor Pendaftaran atau NISN"
│   ├── Input Field [PPDB-2026-00847]
│   └── [Search] Button
│
├── RESULT CARD
│   ├── TOP SECTION (gradient background)
│   │   ├── Icon 🎉
│   │   ├── Status "DITERIMA" (green text)
│   │   ├── School Name "SMA Negeri 1 Pontianak"
│   │   └── Metadata "Jalur Zonasi • Pilihan ke-1"
│   │
│   ├── DETAILS SECTION
│   │   ├── Nama Lengkap: Rizky Akbar Pratama
│   │   ├── NISN: 0087654321
│   │   ├── Asal Sekolah: SMPN 1 Pontianak
│   │   ├── Skor Seleksi: 92.45 ✓
│   │   ├── Peringkat: #12 dari 160
│   │   ├── Jarak Domisili: 1.2 km
│   │   └── Batas Daftar Ulang: 20 Juni 2026 ⚠️
│   │
│   └── ACTION BUTTONS (full width)
│       ├── [📄 Cetak Surat Penerimaan]
│       └── [✅ Daftar Ulang]
│
└── INFO BOX
    └── "Penting: Segera lakukan daftar ulang sebelum batas waktu..."
```

---

## 🔄 User Flow Diagram

```
START
  ▼
┌─────────────────────────────────────┐
│  Landing Page (page-landing)        │  ◄─── User mulai dari sini
│  - Baca informasi                   │
│  - Lihat jalur & timeline           │
└────────┬────────────────────────────┘
         │ Click (Mulai Daftar / Daftar Sekarang)
         ▼
┌─────────────────────────────────────┐
│  Login Page (page-login)            │
│  - Masuk dengan email/phone + pwd   │
│  - Atau daftar akun baru            │
└────────┬────────────────────────────┘
         │ Login sukses / Klik Daftar Sekarang
         ▼
┌─────────────────────────────────────┐
│  Registration Page (page-register)  │
│  Progress: Step 1→5                 │
│  - Step 1: Akun ✓                   │
│  - Step 2: Data Pribadi ✓           │
│  - Step 3: Data Orang Tua ◄─ USER HERE
│  - Step 4: Upload Dokumen           │
│  - Step 5: Konfirmasi               │
└────────┬────────────────────────────┘
         │ Selesaikan semua step
         ▼
┌─────────────────────────────────────┐
│  Dashboard (page-dashboard)         │  ◄─── Admin area
│  - Lihat statistik pendaftar        │
│  - Verifikasi dokumen               │
│  - Seleksi peserta                  │
└────────┬────────────────────────────┘
         │ Pengumuman hasil dibuka
         ▼
┌─────────────────────────────────────┐
│  Result Page (page-result)          │
│  - Cari nomor pendaftaran/NISN      │
│  - Lihat hasil seleksi              │
│  - Cetak surat / Daftar ulang       │
└─────────────────────────────────────┘
```

---

## 🎯 CSS Architecture

```
CSS File Structure (in style tag):

1. GLOBAL
   ├── Reset (* { margin: 0; ... })
   ├── Variables (:root { --navy: ... })
   └── Base (html, body)

2. COMPONENTS
   ├── Navigation (.nav)
   ├── Buttons (.btn)
   ├── Forms (.form-*)
   ├── Cards (.jalur-card, .stat-card)
   └── Tables (table, th, td)

3. LAYOUTS
   ├── Hero (.hero)
   ├── Dashboard (.dashboard, .sidebar)
   ├── Forms (.form-page, .form-card)
   └── Footer (.footer)

4. UTILITIES
   ├── Responsive (@media)
   ├── Animations (@keyframes)
   └── Helpers (.page, .active)
```

---

## 📊 Responsive Behavior

```
DESKTOP (1200px+)           TABLET (768px-1024px)      MOBILE (<768px)
┌──────────────────┐       ┌──────────────────┐       ┌──────────────────┐
│  NAVBAR          │       │  NAVBAR          │       │  NAVBAR          │
├──────────────────┤       ├──────────────────┤       ├──────────────────┤
│ HERO             │       │ HERO             │       │ HERO             │
│ 50% | 50%        │       │ 100%             │       │ 100%             │
└──────────────────┘       └──────────────────┘       └──────────────────┘

CARDS: 4 cols        CARDS: 2 cols         CARDS: 1 col
FORM: 2 cols         FORM: 1 col           FORM: 1 col
TABLE: Full width    TABLE: Scrollable     TABLE: Scrollable

SIDEBAR: Visible     SIDEBAR: Hidden       SIDEBAR: Hidden
```

---

<div align="center">

**Gambar Flow ini menunjukkan alur aplikasi dan struktur yang sudah diperbaiki! 🎉**

Gunakan dokumen ini sebagai referensi cepat saat mengembangkan atau memodifikasi aplikasi.

</div>
