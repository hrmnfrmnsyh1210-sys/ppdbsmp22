# Struktur Halaman PPDB Online - Dokumentasi

## 📋 Ringkasan

File `index.html` telah direstruktur untuk memiliki organisasi yang lebih jelas dengan pemisahan concern yang baik. Seluruh konten diorganisir dalam bagian-bagian logis yang mudah dipahami dan dikelola.

---

## 🏗️ STRUKTUR FILE

### 1. **BAGIAN HEAD** (`<head>`)

- Meta tags dan viewport configuration
- Font imports dari Google Fonts
- **CSS Organization** (dipecah menjadi beberapa bagian):

#### A. Global Styles & Typography

- Reset CSS (`*, *::before, *::after`)
- CSS Variables (`:root`)
- HTML & Body base styles

#### B. Navigation Bar

- `.nav` - Navbar principal
- `.nav-logo` - Logo dan branding
- `.nav-links` - Navigation links
- `.nav-actions` - Tombol aksi di navbar

#### C. Buttons & CTAs

- `.btn` - Base button styles
- `.btn-primary`, `.btn-ghost`, `.btn-white`, dll - Button variants
- `.btn-lg`, `.btn-sm`, `.btn-block` - Button sizing

#### D. Page Layout & Navigation

- `.page` - Container untuk setiap halaman
- `.page.active` - State halaman yang aktif
- `.page-tabs` - Tab navigasi floating di bawah

#### E. Hero Section

- `.hero` - Container hero utama
- `.hero-content` - Konten hero
- `.hero-card` - Card dashboard mockup
- `.hero-stats` - Statistik hero
- Animasi dan efek visual

#### F. Content Sections & Cards

- `.section` - Container section umum
- `.jalur-grid` - Grid untuk jalur pendaftaran
- `.jalur-card` - Card jalur masuk

#### G. Timeline Section

- `.timeline-section` - Background section timeline
- `.timeline` - Container timeline
- `.tl-item` - Item dalam timeline
- `.tl-dot`, `.tl-title`, `.tl-date` - Elemen timeline

#### H. Login Page

- `.login-page` - Layout 2 kolom login
- `.login-left` - Bagian kiri (terang/info)
- `.login-right` - Bagian kanan (form)
- `.login-features` - Fitur-fitur keamanan
- Form input styles

#### I. Registration/Form Page

- `.form-page` - Page container
- `.form-container` - Max-width wrapper
- `.form-progress` - Progress bar
- `.form-card` - Kartu form
- `.form-*` - Form elements (input, label, dll)
- `.upload-area` - File upload area
- `.file-item` - Item file yang diupload

#### J. Dashboard/Admin Page

- `.dashboard` - Layout sidebar + main
- `.sidebar` - Sidebar navigasi
- `.main-content` - Konten utama
- `.stat-cards` - Kartu statistik
- `.data-panel` - Data table panel
- Table styles

#### K. Result Page / Pengumuman

- `.result-page` - Page container
- `.result-container` - Max-width wrapper
- `.result-card` - Kartu hasil unggulan
- `.result-details` - Detail informasi hasil
- `.result-actions` - Tombol aksi hasil

#### L. Footer

- `.footer` - Container footer
- `.footer-grid` - Grid konten footer
- `.footer-col` - Kolom footer
- `.footer-bottom` - Copyright info

#### M. Responsive Design

- `@media (max-width: 1024px)` - Tablet
- `@media (max-width: 768px)` - Mobile

#### N. Animations

- `@keyframes fadeInUp` - Semua animasi
- `.animate-in`, `.delay-*` - Delay animation classes

#### O. Page Navigation Tabs

- `.page-tabs` - Fixed tabs menu
- `.page-tab` - Individual tab button

---

### 2. **BAGIAN BODY** (`<body>`)

#### Struktur Halaman:

Setiap halaman diimplementasikan sebagai `<div class="page" id="page-{name}">`

```
body/
├── PAGE TABS (Floating Menu)
├── PAGE 1: Landing Page (page-landing)
│   ├── Navbar
│   ├── Hero Section
│   ├── Jalur Masuk Section
│   ├── Timeline Section
│   └── Footer
│
├── PAGE 2: Login (page-login)
│   ├── 2-Column Layout
│   ├── Login Form
│   └── Feature List
│
├── PAGE 3: Registration (page-register)
│   ├── Navbar
│   ├── Form Progress
│   ├── Data Input Cards
│   │   ├── Jalur Info
│   │   ├── Data Ayah
│   │   ├── Data Ibu
│   │   └── Alamat Orang Tua
│   └── Form Actions
│
├── PAGE 4: Dashboard (page-dashboard)
│   ├── Sidebar Menu
│   ├── Main Content
│   ├── Stats Cards
│   ├── Quota Progress
│   └── Data Table
│
└── PAGE 5: Result (page-result)
    ├── Navbar
    ├── Search Box
    ├── Result Card
    ├── Detail Informasi
    └── Action Buttons
```

---

### 3. **JAVASCRIPT SECTION**

```javascript
// Function: showPage(name)
// - Menyembunyikan semua halaman (.page)
// - Menyembunyikan semua tab (.page-tab)
// - Menampilkan halaman yang dipilih
// - Mengaktifkan tab yang diklik
// - Scroll ke atas halaman
```

---

## 🎯 FITUR-FITUR UTAMA

### ✅ Pemisahan Concern yang Jelas

- CSS diorganisir berdasarkan komponen dan section
- Setiap bagian CSS memiliki header komentar yang jelas
- HTML terstruktur dengan page container yang terpisah
- JavaScript terpisah di akhir file

### ✅ Mudah Dipelihara

- Komentar header untuk setiap bagian CSS
- Naming convention yang konsisten
- Struktur logis yang mudah diikuti

### ✅ Responsive Design

- Mobile-first approach
- Breakpoints: 1024px (tablet) dan 768px (mobile)
- Flexible grid layouts

### ✅ Component-Based Styling

- Reusable CSS classes
- CSS Variables untuk colors dan spacing
- Konsisten dalam styling

---

## 📱 HALAMAN-HALAMAN

### **Halaman 1: Landing Page** (page-landing)

- Hero section dengan statistics
- Informasi 4 jalur masuk
- Timeline pendaftaran
- Footer dengan links

### **Halaman 2: Login** (page-login)

- Split layout (info + form)
- Email/phone & password input
- Remember me & forgot password options
- Google login alternative

### **Halaman 3: Pendaftaran** (page-register)

- Progress bar (5 steps)
- Card-based form
- Parent information input
- Multi-step form structure

### **Halaman 4: Dashboard Admin** (page-dashboard)

- Sidebar navigation
- Stat cards
- Quota progress bars
- Applicant data table dengan pagination

### **Halaman 5: Pengumuman Hasil** (page-result)

- Search box untuk nomor pendaftaran
- Result card dengan status diterima
- Detailed information rows
- Action buttons (print & daftar ulang)

---

## 🎨 PALET WARNA

Semua warna didefinisikan sebagai CSS Variables di `:root`:

- **Navy**: `#0f1b2d` (dark background)
- **Blue**: `#2e86de` (primary)
- **Cyan**: `#00cec9` (accent)
- **Gold**: `#f6b93b` (warning/secondary)
- **Green**: `#00b894` (success)
- **Red**: `#e74c3c` (danger/error)
- **Purple**: `#6c5ce7` (tertiary)
- **Gray**: Varied scales (#e9ecef - #343a40)
- **White**: `#ffffff` / `#f8f9fa`

---

## 🔤 TYPOGRAFI

- **Display Font**: DM Serif Display (serif, elegant)
- **Body Font**: Plus Jakarta Sans (sans-serif, modern)
- Consistent font sizes dan weights di seluruh file

---

## 🎬 ANIMASI

- **fadeInUp**: Fade in dengan slide up (0.6s)
- **pulse**: Pulsing dot animation (2s)
- **Delay classes**: `.delay-1` hingga `.delay-4` untuk staggered animations

---

## ✨ BEST PRACTICES YANG DITERAPKAN

1. **Semantic HTML**: Struktur yang bermakna
2. **CSS Organization**: Grouped by component/section
3. **DRY Principle**: Reusable classes dan variables
4. **Responsive First**: Mobile-friendly design
5. **Performance**: Optimized selectors
6. **Accessibility**: Proper contrast ratios
7. **Maintainability**: Clear comments dan naming

---

## 📝 CARA MENGGUNAKAN

### Menampilkan Halaman Berbeda:

```javascript
showPage("landing"); // Tampilkan landing page
showPage("login"); // Tampilkan login page
showPage("register"); // Tampilkan registration page
showPage("dashboard"); // Tampilkan dashboard
showPage("result"); // Tampilkan result page
```

### Menambah Halaman Baru:

1. Tambahkan tab di `.page-tabs`
2. Buat `<div class="page" id="page-{nama}">` baru
3. Style dengan CSS yang sesuai
4. Tambah link di tombol page-tab

### Memodifikasi Styling:

1. Temukan bagian CSS yang sesuai dengan header komentar
2. Modify class yang relevan
3. Gunakan CSS Variables untuk konsistensi warna

---

## 🔗 Referensi Cepat

| Elemen | Class                  | Fungsi                            |
| ------ | ---------------------- | --------------------------------- |
| Navbar | `.nav`                 | Header navigasi utama             |
| Hero   | `.hero`                | Section pembuka yang eye-catching |
| Card   | `.jalur-card`          | Kartu untuk jalur masuk           |
| Button | `.btn`, `.btn-primary` | Button dengan variants            |
| Form   | `.form-card`           | Container form input              |
| Table  | `.data-panel`          | Data table dengan header          |
| Footer | `.footer`              | Footer section                    |

---

## 💡 Catatan

- File HTML ini adalah **single-page application** yang memindahkan konten dengan JavaScript
- Semua styling inline pada elemen khusus digunakan untuk custom styling yang unik
- Responsive breakpoints disesuaikan untuk pengalaman optimal di berbagai device
- CSS Variables memudahkan perubahan tema global

<div align="center">

**Struktur File Telah Dioptimalkan untuk Kejelasan dan Maintainability! ✅**

</div>
