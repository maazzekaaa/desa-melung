// Jam Real-time
function updateRealtimeClock() {
  const clockElement = document.getElementById('realtime-clock') || document.getElementById('currentDateTime');
  if (!clockElement) return;

  const now = new Date();
  const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];

  const dayName = days[now.getDay()];
  const dateNum = String(now.getDate()).padStart(2, '0');
  const monthName = months[now.getMonth()];
  const yearNum = now.getFullYear();

  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  clockElement.textContent = `${dayName}, ${dateNum} ${monthName} ${yearNum} • ${hours}:${minutes}:${seconds} WIB`;
}

// Fungsi Pembatasan Navigasi Link (Non-aktifkan selain Sejarah & Berita)
function initDisabledNavigation() {
  const navLinks = document.querySelectorAll(".main-menu a, .dropdown-popup a");

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");

    const isSejarah = href && href.includes("sejarah-desa");
    const isBerita = href && href.includes("berita-desa");

    // Jika bukan link ke Sejarah atau Berita Desa, cegah fungsi pindah halaman
    if (!isSejarah && !isBerita) {
      link.addEventListener("click", function (e) {
        e.preventDefault(); // Mencegah routing
      });
    }
  });
}

// Fungsi Pembuka & Penutup Pop-Up Modal (Ditengah Layar & Lock Scroll)
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add("is-open");
    document.body.classList.add("modal-open"); // Kunci scroll layar belakang
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove("is-open");
    document.body.classList.remove("modal-open"); // Buka kunci scroll
  }
}

function closeAllModals() {
  const openModals = document.querySelectorAll(".article-modal-backdrop.is-open");
  openModals.forEach((modal) => {
    modal.classList.remove("is-open");
  });
  document.body.classList.remove("modal-open");
}

// Logika Utama Halaman
document.addEventListener('DOMContentLoaded', () => {
  updateRealtimeClock();
  setInterval(updateRealtimeClock, 1000);
  initDisabledNavigation();

  // Menutup Modal saat Menekan Tombol ESC
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" || e.key === "Esc") {
      closeAllModals();
    }
  });

  // Menutup Modal saat Klik di Luar Kontainer (Backdrop Area)
  const backdrops = document.querySelectorAll(".article-modal-backdrop");
  backdrops.forEach((backdrop) => {
    backdrop.addEventListener("click", function (e) {
      if (e.target === this) {
        closeAllModals();
      }
    });
  });

  // Navigasi Dropdown Hover & Click Handler
  const dropdownItems = document.querySelectorAll('.nav-dropdown-item');

  dropdownItems.forEach((item) => {
    item.addEventListener('mouseenter', () => {
      dropdownItems.forEach((other) => {
        if (other !== item) other.classList.remove('is-open');
      });
      item.classList.add('is-open');
    });

    item.addEventListener('mouseleave', () => {
      item.classList.remove('is-open');
    });

    const toggleBtn = item.querySelector('.nav-static-item');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', (e) => {
        if (window.innerWidth <= 991) {
          e.preventDefault();
          e.stopPropagation();
          const isOpen = item.classList.contains('is-open');
          dropdownItems.forEach((other) => other.classList.remove('is-open'));
          if (!isOpen) item.classList.add('is-open');
        }
      });
    }
  });

  // Tutup dropdown jika klik di luar navbar
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.main-menu')) {
      dropdownItems.forEach((item) => item.classList.remove('is-open'));
    }
  });

  // Validasi Input Nama & Telepon Komentar
  const inputNama = document.getElementById('input-nama');
  const inputTelepon = document.getElementById('input-telepon');

  if (inputNama) {
    inputNama.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
    });
  }

  if (inputTelepon) {
    inputTelepon.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/[^0-9]/g, '');
    });
  }

  // Tombol Scroll ke Atas
  const scrollTopBtn = document.querySelector('.scroll-top') || document.getElementById('backToTop');
  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      scrollTopBtn.style.display = window.scrollY > 300 ? 'inline-flex' : 'none';
    });

    scrollTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});