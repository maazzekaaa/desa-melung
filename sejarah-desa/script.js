// Jam Real-time
function updateRealtimeClock() {
  const clockElement = document.getElementById('realtime-clock');
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

// Logika Navigasi & Form
document.addEventListener('DOMContentLoaded', () => {
  updateRealtimeClock();
  setInterval(updateRealtimeClock, 1000);

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
  const scrollTopBtn = document.querySelector('.scroll-top');
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