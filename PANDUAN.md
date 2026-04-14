# 📋 PANDUAN NAVIGASI STRUKTUR PPDB ONLINE

## 🚀 Quick Start

### Untuk Melihat Halaman Tertentu:

Klik tab di bawah halaman, atau panggil function:

```javascript
showPage("landing"); // Beranda
showPage("login"); // Login
showPage("register"); // Pendaftaran
showPage("dashboard"); // Dashboard Admin
showPage("result"); // Pengumuman Hasil
```

---

## 📑 Struktur CSS dalam File

Semua CSS diorganisir dengan header section yang jelas seperti ini:

```css
/* ══════════════════════════════════════════════════════════════ */
/* ██ NAMA SECTION ██ */
/* ══════════════════════════════════════════════════════════════ */
```

### Daftar Lengkap Section CSS (dalam urutan):

1. **GLOBAL STYLES & TYPOGRAPHY** (Line ~1-70)
   - CSS Variables
   - Reset styles
   - Base HTML/Body styles

2. **NAVIGATION** (Line ~70-150)
   - Navbar & logo
   - Nav links
   - Nav actions

3. **BUTTONS & CTAs** (Line ~150-240)
   - Base button
   - Button variants (primary, ghost, white, outline, success, danger)
   - Button sizes (lg, sm, block)

4. **PAGE LAYOUT & NAVIGATION** (Line ~240-280)
   - Page visibility
   - Page switching

5. **HERO SECTION** (Line ~280-500)
   - Hero container
   - Hero content
   - Hero card (dashboard mockup)
   - Hero stats
   - Animations

6. **CONTENT SECTIONS & CARDS** (Line ~500-700)
   - General section styles
   - Jalur cards
   - Card styling

7. **TIMELINE SECTION** (Line ~700-850)
   - Timeline container
   - Timeline items
   - Timeline dots
   - Timeline styling

8. **LOGIN PAGE** (Line ~850-1050)
   - Login layout
   - Left side (info)
   - Right side (form)
   - Features list
   - Form styles

9. **REGISTRATION/FORM PAGE** (Line ~1050-1250)
   - Form page layout
   - Form progress
   - Form cards
   - Upload area
   - File items

10. **DASHBOARD/ADMIN PAGE** (Line ~1250-1500)
    - Dashboard layout
    - Sidebar styling
    - Main content area
    - Stat cards
    - Data panel & table

11. **RESULT PAGE / PENGUMUMAN** (Line ~1500-1650)
    - Result page layout
    - Result card
    - Details section
    - Actions

12. **FOOTER** (Line ~1650-1750)
    - Footer styling
    - Footer grid
    - Footer links
    - Footer bottom

13. **RESPONSIVE DESIGN** (Line ~1750-1850)
    - Media queries 1024px
    - Media queries 768px

14. **ANIMATIONS** (Line ~1850-1950)
    - Keyframes
    - Animation utilities
    - Delay classes

15. **PAGE NAVIGATION TABS** (Line ~1950-2000)
    - Bottom floating tabs styling

---

## 🗂️ Struktur HTML dalam File

### Konten dalam `<body>`:

```
<body>
  ├── PAGE TABS (Floating menu di bawah)
  │
  ├── <div id="page-landing" class="page active">
  │   ├── <nav class="nav">
  │   ├── <section class="hero">
  │   ├── <section class="section"> (Jalur Masuk)
  │   ├── <section class="timeline-section"> (Jadwal)
  │   └── <footer class="footer">
  │
  ├── <div id="page-login" class="page">
  │   └── <div class="login-page">
  │       ├── <div class="login-left"> (Info)
  │       └── <div class="login-right"> (Form)
  │
  ├── <div id="page-register" class="page">
  │   ├── <nav class="nav">
  │   └── <div class="form-page">
  │       ├── Progress bar
  │       ├── Form steps
  │       └── Form cards
  │
  ├── <div id="page-dashboard" class="page">
  │   └── <div class="dashboard">
  │       ├── <aside class="sidebar">
  │       └── <main class="main-content">
  │
  ├── <div id="page-result" class="page">
  │   ├── <nav class="nav">
  │   └── <div class="result-page">
  │       ├── Search box
  │       ├── Result card
  │       └── Result details
  │
  └── <script>
      function showPage(name) { ... }
      </script>
</body>
```

---

## 🎯 Cara Menemukan Styling Tertentu

### Jika ingin mengubah:

| Elemen       | Cari CSS Class         | Lokasi Section       |
| ------------ | ---------------------- | -------------------- |
| Warna tombol | `.btn-primary`         | BUTTONS & CTAs       |
| Navbar       | `.nav`                 | NAVIGATION           |
| Card jalur   | `.jalur-card`          | CONTENT SECTIONS     |
| Form input   | `.form-input`          | LOGIN PAGE           |
| Progress bar | `.form-progress`       | REGISTRATION/FORM    |
| Sidebar      | `.sidebar`             | DASHBOARD/ADMIN      |
| Tabel        | `.data-panel`, `table` | DASHBOARD/ADMIN      |
| Footer       | `.footer`              | FOOTER               |
| Efek hover   | `.page-tab:hover`      | PAGE NAVIGATION TABS |

### Tips Pencarian:

1. Buka file dengan Ctrl+F
2. Cari nama class yang ingin dimodifikasi
3. Scroll ke section yang sesuai
4. Ubah styling yang diinginkan

---

## 🎨 Mengubah Warna Global

Semua warna tersimpan di CSS Variables. Ubah di section **GLOBAL STYLES**:

```css
:root {
  --navy: #0f1b2d; /* Dark background */
  --blue: #2e86de; /* Primary color */
  --cyan: #00cec9; /* Accent color */
  --gold: #f6b93b; /* Warning/Secondary */
  --green: #00b894; /* Success */
  --red: #e74c3c; /* Danger */
  /* ... dst */
}
```

Setiap class akan otomatis mengikuti perubahan karena menggunakan `var(--warna)`.

---

## 📱 Responsive Breakpoints

### Desktop (1024px+)

- 2 kolom layouts
- Hero card visible
- Full navigation

### Tablet (768px - 1024px)

- 2 kolom menjadi 1 kolom
- Hero card hidden
- Nav links tetap visible

### Mobile (< 768px)

- Semua layout collapsed
- Nav links hidden
- Form fields single column
- Sidebar hidden

---

## ✅ Checklist Perbaikan yang Sudah Dilakukan

- ✅ CSS diorganisir dengan section header yang jelas
- ✅ HTML diberi komentar section yang konsisten
- ✅ JavaScript diberi dokumentasi dan formatting
- ✅ Setiap bagian terpisah dengan visual divider
- ✅ Alur halaman jelas dengan page switching
- ✅ Naming convention konsisten
- ✅ Struktur logis dari global ke specific
- ✅ Comments yang descriptive untuk setiap section

---

## 💡 Contoh Modifikasi Umum

### Mengubah Warna Tombol Primary:

```css
/* Cari di BUTTONS & CTAs */
.btn-primary {
  background: linear-gradient(135deg, var(--blue), var(--blue-bright));
  /* Ubah warna di sini */
}
```

### Menambah Form Field:

```html
<!-- Cari di PAGE 3: REGISTRATION -->
<div class="form-card">
  <div class="form-group">
    <label class="form-label">Label Baru</label>
    <input type="text" class="form-input" placeholder="..." />
  </div>
</div>
```

### Mengubah Text pada Halaman:

1. Cari ID halaman di section HTML
2. Edit text langsung dalam HTML
3. Styling sudah ter-apply otomatis

---

## 🔗 Rekomendasi

1. **Simpan backup** sebelum melakukan perubahan besar
2. **Gunakan Ctrl+F** untuk menemukan element
3. **Test responsiveness** dengan Developer Tools (F12)
4. **Backup CSS Variables** jika ingin tema alternatif
5. **Dokumentasikan** perubahan yang dilakukan

---

<div align="center">

**Struktur File Telah Diperbaiki untuk Kemudahan Navigasi! 🎉**

Jika butuh bantuan lebih lanjut, lihat STRUKTUR.md untuk dokumentasi lengkap.

</div>
