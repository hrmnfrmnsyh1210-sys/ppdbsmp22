/**
 * PPDB SMP Negeri 22 Kota Pontianak – Interactivity Engine
 * ==========================================================
 * Alur: Beranda → Login → Pendaftaran (5 Step) → Dashboard Admin → Pengumuman
 */

"use strict";

// ─────────────────────────────────────────────
// STATE
// ─────────────────────────────────────────────
let currentStep = 1;
let currentLoginRole = "peserta";
let currentDashTab = "overview";
let announceClosed = false;
let countdownInterval = null;
const TOTAL_STEPS = 5;
const DEADLINE = new Date("2026-06-01T00:00:00");

const stepLabels = ["Akun", "Data Siswa", "Orang Tua", "Dokumen", "Konfirmasi"];
const stepNextLabels = ["Data Siswa", "Orang Tua", "Dokumen", "Konfirmasi", ""];

// ─────────────────────────────────────────────
// PAGE NAVIGATION
// ─────────────────────────────────────────────
const PAGE_MAP = {
  landing: "index.html",
  login: "login.html",
  register: "register.html",
  dashboard: "dashboard.html",
  result: "result.html",
};

function showPage(name) {
  if (PAGE_MAP[name]) {
    window.location.href = PAGE_MAP[name];
  }
}

// ─────────────────────────────────────────────
// TOAST NOTIFICATION SYSTEM
// ─────────────────────────────────────────────
function showToast(message, type = "info", duration = 3500) {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const icons = { success: "✅", error: "❌", warning: "⚠️", info: "ℹ️" };
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span class="toast-icon">${icons[type] || "ℹ️"}</span>
    <span class="toast-msg">${message}</span>
    <button class="toast-close" onclick="dismissToast(this.parentElement)">×</button>
  `;
  container.appendChild(toast);

  setTimeout(() => dismissToast(toast), duration);
}

function dismissToast(toast) {
  if (!toast || toast.classList.contains("hide")) return;
  toast.classList.add("hide");
  setTimeout(() => toast.remove(), 300);
}

// ─────────────────────────────────────────────
// MODAL SYSTEM
// ─────────────────────────────────────────────
let _modalCallback = null;

function showModal({
  icon = "❓",
  title,
  body,
  confirmText = "Ya, Lanjutkan",
  cancelText = "Batal",
  confirmClass = "btn-primary",
  onConfirm = null,
}) {
  document.getElementById("modal-icon").textContent = icon;
  document.getElementById("modal-title").textContent = title;
  document.getElementById("modal-body").innerHTML = body;

  const confirmBtn = document.getElementById("modal-confirm");
  confirmBtn.textContent = confirmText;
  confirmBtn.className = `btn btn-lg ${confirmClass}`;

  const cancelBtn = document.getElementById("modal-cancel");
  if (cancelText) {
    cancelBtn.textContent = cancelText;
    cancelBtn.style.display = "";
  } else {
    cancelBtn.style.display = "none";
  }

  _modalCallback = onConfirm;
  document.getElementById("modal-overlay").classList.add("show");
}

function closeModal() {
  document.getElementById("modal-overlay").classList.remove("show");
  _modalCallback = null;
}

function confirmModal() {
  closeModal();
  if (typeof _modalCallback === "function") _modalCallback();
}

// ─────────────────────────────────────────────
// ANNOUNCEMENT BAR
// ─────────────────────────────────────────────
function closeAnnouncement() {
  const bar = document.getElementById("announcement-bar");
  if (bar) {
    bar.style.display = "none";
    announceClosed = true;
  }
  clearInterval(countdownInterval);
}

function startCountdown() {
  const el = document.getElementById("countdown-timer");
  if (!el) return;
  const update = () => {
    const now = new Date();
    const diff = DEADLINE - now;
    if (diff <= 0) {
      el.textContent = "HARI INI!";
      return;
    }
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    el.textContent = `${d}h ${h}j ${m}m`;
  };
  update();
  countdownInterval = setInterval(update, 60000);
}

// ─────────────────────────────────────────────
// LOGIN TAB
// ─────────────────────────────────────────────
function switchLoginTab(role) {
  currentLoginRole = role;
  document.querySelectorAll(".login-tab").forEach((t) => {
    t.classList.toggle("active", t.dataset.role === role);
  });
  const p = document.getElementById("login-fields-peserta");
  const a = document.getElementById("login-fields-admin");
  if (p) p.style.display = role === "peserta" ? "block" : "none";
  if (a) a.style.display = role === "admin" ? "block" : "none";
}

function doLogin() {
  const btn = document.getElementById("btn-login-peserta");
  setLoading(btn, true, "Memverifikasi...");
  setTimeout(() => {
    setLoading(btn, false, "Masuk sebagai Peserta");
    showPage("register");
    showToast(
      "Selamat datang! Silakan lengkapi formulir pendaftaran.",
      "success",
    );
  }, 1400);
}

function doLoginAdmin() {
  const btn = document.getElementById("btn-login-admin");
  setLoading(btn, true, "Memverifikasi OTP...");
  setTimeout(() => {
    setLoading(btn, false, "Masuk sebagai Admin");
    showPage("dashboard");
    showToast("Selamat datang, Admin! Dashboard siap digunakan.", "success");
  }, 1600);
}

// ─────────────────────────────────────────────
// MULTI-STEP FORM
// ─────────────────────────────────────────────
function updateFormProgress() {
  const indicators = document.querySelectorAll(".form-step-indicator");
  const labels = document.querySelectorAll(".form-step-label");
  const nextBtn = document.getElementById("btn-next");
  const prevBtn = document.getElementById("btn-prev");
  const stepBadge = document.getElementById("form-step-badge");

  // Progress bars
  indicators.forEach((el, i) => {
    el.classList.remove("done", "current");
    if (i + 1 < currentStep) el.classList.add("done");
    if (i + 1 === currentStep) el.classList.add("current");
  });

  // Labels
  labels.forEach((el, i) => {
    el.classList.remove("active", "done");
    el.textContent = i + 1 < currentStep ? `✓ ${stepLabels[i]}` : stepLabels[i];
    if (i + 1 < currentStep) el.classList.add("done");
    if (i + 1 === currentStep) el.classList.add("active");
  });

  if (stepBadge)
    stepBadge.textContent = `Step ${currentStep} dari ${TOTAL_STEPS}`;

  // Show/hide step sections
  document.querySelectorAll(".form-step-section").forEach((sec) => {
    const step = parseInt(sec.dataset.step, 10);
    sec.classList.toggle("active", step === currentStep);
  });

  // Prev button
  if (prevBtn)
    prevBtn.style.visibility = currentStep > 1 ? "visible" : "hidden";

  // Next button
  if (nextBtn) {
    if (currentStep === TOTAL_STEPS) {
      nextBtn.innerHTML = "✅ Kirim Pendaftaran";
      nextBtn.className = "btn btn-success btn-lg";
    } else {
      nextBtn.innerHTML = `Selanjutnya: ${stepNextLabels[currentStep - 1]} →`;
      nextBtn.className = "btn btn-primary btn-lg";
    }
    nextBtn.id = "btn-next";
  }

  // Scroll form container into view
  const container = document.querySelector(".form-container");
  if (container)
    container.scrollIntoView({ behavior: "smooth", block: "start" });
}

function nextStep() {
  if (currentStep < TOTAL_STEPS) {
    currentStep++;
    updateFormProgress();
  } else {
    submitForm();
  }
}

function prevStep() {
  if (currentStep > 1) {
    currentStep--;
    updateFormProgress();
  }
}

function submitForm() {
  showModal({
    icon: "📝",
    title: "Konfirmasi Pengiriman",
    body: "<p>Pastikan semua data yang Anda isi sudah <strong>benar dan lengkap</strong>. Pendaftaran yang sudah dikirim <em>tidak dapat diubah</em>.</p>",
    confirmText: "Kirim Pendaftaran",
    cancelText: "Periksa Kembali",
    confirmClass: "btn-success",
    onConfirm: () => {
      const btn = document.getElementById("btn-next");
      if (btn) setLoading(btn, true, "Mengirim...");
      setTimeout(() => {
        showPage("result");
        showToast(
          "🎉 Pendaftaran berhasil dikirim! No. PPDB-2026-00847",
          "success",
          5000,
        );
      }, 1800);
    },
  });
}

// ─────────────────────────────────────────────
// PASSWORD STRENGTH
// ─────────────────────────────────────────────
function checkPassword(input) {
  const val = input.value;
  const bar = document.getElementById("password-strength-bar");
  if (!bar) return;
  bar.className = "password-strength-bar";
  if (val.length === 0) {
    bar.style.width = "0%";
    return;
  }
  if (val.length < 6) bar.classList.add("weak");
  else if (val.length < 10 || !/[A-Z]/.test(val) || !/[0-9]/.test(val))
    bar.classList.add("medium");
  else bar.classList.add("strong");
}

// ─────────────────────────────────────────────
// JALUR RADIO SELECT
// ─────────────────────────────────────────────
function selectJalur(el) {
  document
    .querySelectorAll(".jalur-radio")
    .forEach((r) => r.classList.remove("selected"));
  el.classList.add("selected");
  el.querySelector('input[type="radio"]').checked = true;

  // Tampilkan/sembunyikan field kondisional
  const value = el.querySelector("input").value;
  const prestasiField = document.getElementById("field-prestasi");
  const afirmasiField = document.getElementById("field-afirmasi");
  const pindahField = document.getElementById("field-pindah");
  if (prestasiField)
    prestasiField.style.display = value === "prestasi" ? "block" : "none";
  if (afirmasiField)
    afirmasiField.style.display = value === "afirmasi" ? "block" : "none";
  if (pindahField)
    pindahField.style.display = value === "pindah" ? "block" : "none";
}

// ─────────────────────────────────────────────
// UPLOAD SIMULASI
// ─────────────────────────────────────────────
function triggerUpload(areaId, docName) {
  const area = document.getElementById(areaId);
  if (!area) return;

  // Remove existing
  const existing = area.querySelector(".file-item");
  if (existing) existing.remove();
  area.classList.add("uploaded");

  // Random file size
  const sizes = ["142 KB", "245 KB", "318 KB", "189 KB", "267 KB"];
  const size = sizes[Math.floor(Math.random() * sizes.length)];

  const item = document.createElement("div");
  item.className = "file-item";
  item.innerHTML = `
    <span class="file-item-icon">📄</span>
    <div class="file-item-info">
      <div class="file-item-name">${docName}.pdf</div>
      <div class="file-item-size">${size} · PDF · ✅ Siap diunggah</div>
    </div>
    <button class="file-item-remove" onclick="removeUpload('${areaId}', this)" title="Hapus">✕</button>
  `;
  area.appendChild(item);
  showToast(`${docName} berhasil dipilih`, "success", 2000);
}

function removeUpload(areaId, btn) {
  const area = document.getElementById(areaId);
  if (area) {
    area.classList.remove("uploaded");
  }
  btn.closest(".file-item").remove();
}

// ─────────────────────────────────────────────
// CEK HASIL SELEKSI
// ─────────────────────────────────────────────
function cekHasil() {
  const input = document.getElementById("input-no-pendaftaran");
  const card = document.getElementById("result-card");
  const loading = document.getElementById("result-loading");
  if (!input || !card) return;

  const value = input.value.trim();
  if (!value) {
    input.classList.add("error");
    input.focus();
    showToast(
      "Masukkan nomor pendaftaran atau NISN terlebih dahulu",
      "warning",
    );
    setTimeout(() => input.classList.remove("error"), 2000);
    return;
  }

  // Hide previous result
  card.classList.remove("show");
  if (loading) loading.classList.add("show");

  setTimeout(() => {
    if (loading) loading.classList.remove("show");
    card.classList.add("show");
    card.scrollIntoView({ behavior: "smooth", block: "start" });
    showToast("Data ditemukan! Silakan cek hasil seleksi.", "success");
  }, 1800);
}

// ─────────────────────────────────────────────
// PRINT SURAT
// ─────────────────────────────────────────────
function cetakSurat() {
  showToast("Membuka jendela cetak...", "info", 2000);
  setTimeout(() => window.print(), 600);
}

// ─────────────────────────────────────────────
// DASHBOARD SIDEBAR NAVIGATION
// ─────────────────────────────────────────────
function switchDashTab(tab) {
  currentDashTab = tab;

  // Update sidebar links
  document.querySelectorAll(".sidebar-link[data-tab]").forEach((link) => {
    link.classList.toggle("active", link.dataset.tab === tab);
  });

  // Show/hide dash sections
  document.querySelectorAll(".dash-section").forEach((sec) => {
    sec.classList.toggle("active", sec.dataset.section === tab);
  });

  // Update breadcrumb & title
  const titles = {
    overview: "Dashboard",
    pendaftar: "Data Pendaftar",
    verifikasi: "Verifikasi Dokumen",
    pengumuman: "Kelola Pengumuman",
    laporan: "Laporan & Statistik",
    pengaturan: "Pengaturan Sistem",
  };
  const el = document.getElementById("dash-title");
  const bc = document.getElementById("dash-breadcrumb-current");
  if (el) el.textContent = titles[tab] || tab;
  if (bc) bc.textContent = titles[tab] || tab;
}

// Dashboard approve/reject actions
function approveRow(btn) {
  const row = btn.closest("tr");
  const badge = row.querySelector(".status-badge");
  if (badge) {
    badge.className = "status-badge verified";
    badge.innerHTML = '<span class="status-dot"></span>Terverifikasi';
  }
  btn.closest(".verify-actions").innerHTML =
    '<span style="font-size:12px;color:var(--green)">✓ Disetujui</span>';
  showToast("Dokumen berhasil diverifikasi", "success");
}

function rejectRow(btn) {
  const row = btn.closest("tr");
  const badge = row.querySelector(".status-badge");
  if (badge) {
    badge.className = "status-badge rejected";
    badge.innerHTML = '<span class="status-dot"></span>Revisi Dokumen';
  }
  btn.closest(".verify-actions").innerHTML =
    '<span style="font-size:12px;color:var(--red)">✗ Ditolak</span>';
  showToast("Permintaan revisi dokumen dikirim ke peserta", "warning");
}

// ─────────────────────────────────────────────
// FAQ ACCORDION
// ─────────────────────────────────────────────
function toggleFaq(el) {
  const item = el.closest(".faq-item");
  const isOpen = item.classList.contains("open");

  // Tutup semua
  document
    .querySelectorAll(".faq-item")
    .forEach((i) => i.classList.remove("open"));

  // Buka yang dipilih (jika belum open)
  if (!isOpen) item.classList.add("open");
}

// ─────────────────────────────────────────────
// ANNOUNCE TYPE SELECT (Dashboard)
// ─────────────────────────────────────────────
function selectAnnounceType(el) {
  document
    .querySelectorAll(".announce-type")
    .forEach((t) => t.classList.remove("active"));
  el.classList.add("active");
}

// ─────────────────────────────────────────────
// PUBLISH PENGUMUMAN (Dashboard)
// ─────────────────────────────────────────────
function publishAnnouncement() {
  showModal({
    icon: "📢",
    title: "Publikasi Pengumuman",
    body: "<p>Pengumuman akan langsung <strong>terkirim ke email &amp; WhatsApp</strong> seluruh peserta yang terdaftar. Proses ini tidak dapat dibatalkan.</p>",
    confirmText: "Publikasikan Sekarang",
    cancelText: "Batalkan",
    confirmClass: "btn-primary",
    onConfirm: () => {
      showToast(
        "Pengumuman berhasil dipublikasikan ke 1.247 peserta!",
        "success",
        4000,
      );
    },
  });
}

// ─────────────────────────────────────────────
// EXPORT DATA (Dashboard)
// ─────────────────────────────────────────────
function exportData() {
  showToast("Mengunduh data… file akan tersimpan otomatis", "info", 3000);
}

// ─────────────────────────────────────────────
// LOADING STATE HELPER
// ─────────────────────────────────────────────
function setLoading(btn, loading, loadingText) {
  if (!btn) return;
  if (loading) {
    btn.dataset.originalText = btn.innerHTML;
    btn.innerHTML = `<span class="spinner"></span> ${loadingText}`;
    btn.classList.add("btn-loading");
  } else {
    btn.innerHTML = btn.dataset.originalText || loadingText;
    btn.classList.remove("btn-loading");
  }
}

// ─────────────────────────────────────────────
// SELECTION & ADMISSION DECISION MANAGEMENT
// ─────────────────────────────────────────────
function approveSelection(btn) {
  const row = btn.closest("tr");
  if (!row) return;

  // Update status badge
  const statusCell = row.querySelector("td:nth-child(5)");
  if (statusCell) {
    statusCell.innerHTML =
      '<span class="status-badge verified"><span class="status-dot"></span>DITERIMA</span>';
  }

  // Disable action buttons
  const actionCell = row.querySelector("td:last-child");
  if (actionCell) {
    actionCell.innerHTML =
      '<div style="display:flex;gap:4px"><button class="btn btn-secondary btn-xs" onclick="undoDecision(this)">↶ Batal</button></div>';
  }

  // Clear notes field
  const notesCell = row.querySelector("td:nth-child(6)");
  if (notesCell) {
    const input = notesCell.querySelector("input");
    if (input) input.value = "—";
  }

  // Highlight row
  row.style.background = "var(--green-light)";

  showToast(
    "✅ Siswa " +
      row.querySelector(".user-cell-name").textContent +
      " berhasil diterima",
    "success",
    3000,
  );
}

function rejectSelection(btn) {
  const row = btn.closest("tr");
  if (!row) return;

  const studentName = row.querySelector(".user-cell-name").textContent;

  showModal({
    icon: "⚠️",
    title: "Penolakan Siswa",
    body: `<p>Anda akan menolak <strong>${studentName}</strong></p><p style="margin-top:12px"><label class="form-label">Alasan Penolakan</label><input type="text" class="form-input" id="reason-input" placeholder="Misal: Peringkat melebihi kuota zonasi" style="width:100%;padding:10px"/></p>`,
    confirmText: "Konfirmasi Penolakan",
    cancelText: "Batal",
    confirmClass: "btn-danger",
    onConfirm: () => {
      const reason = document.getElementById("reason-input")?.value || "-";

      // Update status badge
      const statusCell = row.querySelector("td:nth-child(5)");
      if (statusCell) {
        statusCell.innerHTML =
          '<span class="status-badge rejected"><span class="status-dot"></span>DITOLAK</span>';
      }

      // Update notes
      const notesCell = row.querySelector("td:nth-child(6)");
      if (notesCell) {
        notesCell.innerHTML = `<span style="font-size:12px">${reason}</span>`;
      }

      // Disable action buttons
      const actionCell = row.querySelector("td:last-child");
      if (actionCell) {
        actionCell.innerHTML =
          '<div style="display:flex;gap:4px"><button class="btn btn-secondary btn-xs" onclick="undoDecision(this)">↶ Batal</button></div>';
      }

      // Highlight row
      row.style.background = "var(--red-light)";

      showToast("❌ Siswa " + studentName + " ditolak", "warning", 3000);
    },
  });
}

function undoDecision(btn) {
  const row = btn.closest("tr");
  if (!row) return;

  // Reset status badge
  const statusCell = row.querySelector("td:nth-child(5)");
  if (statusCell) {
    statusCell.innerHTML =
      '<span style="font-size:12px;padding:4px 8px;background:var(--gray-100);border-radius:4px;color:var(--gray-500)">Menunggu</span>';
  }

  // Clear notes
  const notesCell = row.querySelector("td:nth-child(6)");
  if (notesCell) {
    const input = notesCell.querySelector("input");
    if (input) {
      input.value = "";
      input.disabled = true;
      input.placeholder = "Alasan...";
    } else {
      notesCell.innerHTML =
        '<input type="text" class="form-input" placeholder="Alasan..." style="font-size:12px;padding:6px 10px;max-width:140px" disabled/>';
    }
  }

  // Enable action buttons
  const actionCell = row.querySelector("td:last-child");
  if (actionCell) {
    actionCell.innerHTML =
      '<div class="verify-actions"><button class="btn btn-success btn-xs" onclick="approveSelection(this)">✓ Terima</button><button class="btn btn-danger btn-xs" onclick="rejectSelection(this)">✗ Tolak</button></div>';
  }

  // Remove highlight
  row.style.background = "";

  showToast("Keputusan dibatalkan", "info", 2500);
}

// ─────────────────────────────────────────────
// ANIMATED COUNTERS (Landing hero stats)
// ─────────────────────────────────────────────
function animateCounter(el, target, duration = 1600) {
  const start = performance.now();
  const startVal = 0;
  const format = (n) =>
    n >= 1000 ? (n / 1000).toFixed(1) + " rb" : n.toString();

  const step = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    const current = Math.round(startVal + (target - startVal) * eased);
    el.textContent = format(current);
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = format(target);
  };
  requestAnimationFrame(step);
}

function initCounters() {
  const counters = document.querySelectorAll("[data-counter]");
  if (!counters.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
          entry.target.dataset.animated = "true";
          animateCounter(
            entry.target,
            parseInt(entry.target.dataset.counter, 10),
          );
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 },
  );

  counters.forEach((el) => observer.observe(el));
}

// ─────────────────────────────────────────────
// TABEL SEARCH FILTER (Dashboard)
// ─────────────────────────────────────────────
function filterTable(inputEl, tableId) {
  const query = inputEl.value.toLowerCase();
  const rows = document.querySelectorAll(`#${tableId} tbody tr`);
  rows.forEach((row) => {
    row.style.display = row.textContent.toLowerCase().includes(query)
      ? ""
      : "none";
  });
}

// ─────────────────────────────────────────────
// JALUR CARD CTA (Landing)
// ─────────────────────────────────────────────
function pilihJalur(jalur) {
  showToast(
    `Jalur ${jalur} dipilih. Melanjutkan ke pendaftaran...`,
    "info",
    2000,
  );
  setTimeout(() => {
    showPage("register");
  }, 1000);
}

// ─────────────────────────────────────────────
// INIT
// ─────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  // Form progress init (register.html)
  updateFormProgress();

  // Login tab init
  switchLoginTab("peserta");

  // Dashboard tab init
  switchDashTab("overview");

  // Countdown
  startCountdown();

  // Animated counters
  initCounters();

  // Close modal on overlay click
  const overlay = document.getElementById("modal-overlay");
  if (overlay)
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeModal();
    });

  // Enter key on search
  const searchInput = document.getElementById("input-no-pendaftaran");
  if (searchInput)
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") cekHasil();
    });

  // ── Scroll-spy: aktifkan link navbar sesuai posisi scroll ──
  const navSections = [
    { id: "beranda", href: "#beranda" },
    { id: "jalur", href: "#jalur" },
    { id: "persyaratan", href: "#persyaratan" },
    { id: "faq", href: "#faq" },
    { id: "jadwal", href: "#jadwal" },
  ];
  const navLinks = document.querySelectorAll(".nav-links a");
  if (navLinks.length) {
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY + 100;
      let current = "beranda";
      navSections.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) current = id;
      });
      navLinks.forEach((link) => {
        link.classList.toggle(
          "active",
          link.getAttribute("href") === "#" + current,
        );
      });
    }, { passive: true });
  }
});
