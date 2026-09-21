const articles = [
  {
    id: 1,
    title: "IPSAL Sukses Gelar Kegiatan Menyambut HUT RI Ke-81",
    badge: "BERITA DESA",
    date: "02 Sep 2026",
    views: 72,
    imageSource: "../assets/images/ipsal.png",
    isIpsal: true,
    content: `
      <p><b>MELUNG, BANYUMAS</b> – Ikatan Pemuda Sarana Olahraga dan Seni (IPSAL) Desa Melung sukses mengoperasikan rangkaian kegiatan kemasyarakatan dalam rangka memeriahkan Hari Ulang Tahun (HUT) Kemerdekaan Republik Indonesia ke-81.</p>
      <p>Rangkaian acara yang diisi dengan berbagai perlombaan antar-RT, jalan sehat warga, pertunjukan seni daerah, serta tasyakuran doa bersama dihadiri oleh ratusan warga dari pelbagai tingkatan umur dengan antusiasme yang tinggi.</p>
      <p>Kepala Desa Melung mengapresiasi tinggi peran aktif generasi muda IPSAL yang konsisten menjaga semangat gotong royong dan kekompakan warga masyarakat Desa Melung.</p>
    `
  },
  {
    id: 2,
    title: "Ini kata Menkeu Baru Soal Nasib Kanal Aduan \"Lapor Pak Purbaya\"",
    badge: "BERITA DESA",
    date: "20 Sep 2026",
    views: 62,
    imageSource: "../assets/images/pak-pur.png",
    content: `<p>Usai Purbaya Yudhi Sadewa diberhentikan dari jabatannya dan digantikan oleh Suahasil Nazara, publik mulai mempertanyakan nasib kanal aduan “Lapor Pak Purbaya” yang selama ini menjadi wadah masyarakat menyampaikan keluhan dan persoalan terkait bea cukai dan pajak. Menteri Keuangan Suahasil Nazara merespons dan mengatakan kanal pengaduan di lingkungan Kementerian Keuangan (Kemenkeu) tetap dibuka bagi masyarakat, termasuk untuk laporan terkait perpajakan serta kepabeanan dan cukai. "Masih bisa lapor gak Pak ke kementerian keuangan? Bisa," 
    ujar Suahasil dalam konferensi pers APBN KiTa di kantor Kementerian Keuangan, Jakarta Pusat, Jumat (18/9/2026).</p>`
  },
  {
    id: 3,
    title: "Jelang 2 Tahun Menjabat, Prabowo Percya Diri Banyak yang Sudah Dicapai",
    badge: "BERITA DESA",
    date: "21 Sep 2026",
    views: 188,
    imageSource: "../assets/images/wowo-pidato.png",
    content: `<p>Presiden RI Prabowo Subianto mengaku semakin percaya diri menghadap rakyat Indonesia dalam berbagai kegiatan menjelang genap dua tahun pemerintahannya. 

Prabowo mengatakan, rasa percaya diri itu muncul karena pemerintahannya telah menunjukkan sejumlah capaian yang dinilai nyata bagi bangsa dan rakyat Indonesia. 

“Saya sekarang berdiri di depan rakyat Indonesia saya sekarang tambah percaya diri. Kenapa saya percaya diri? Karena belum 2 tahun saya menjalankan mandat dari rakyat, belum 2 tahun, kurang berapa minggu lagi ya? Saya kira kurang, kurang sebulan lagi persis 2 tahun. Saya percaya diri karena sekarang kita buktikan kita bukan pemimpin yang omon-omon saja!" 
ujar Prabowo saat berpidato dalam acara Resepsi Kesyukuran 100 Tahun Pondok Modern Darussalam Gontor, Ponorogo, Jawa Timur, Sabtu (19/9/2026).</p>`
  },
  {
    id: 4,
    title: "Wujudkan Transparansi, Pemdes Melung Rilis Panduan SOP Pelayanan Publik",
    badge: "BERITA DESA",
    date: "07 Jul 2026",
    views: 129,
    imageSource: "../assets/images/ipsal.png",
    content: `<p>Panduan Standar Operasional Prosedur (SOP) diterbitkan untuk menjamin kepastian alur dan waktu pelayanan kepada masyarakat.</p>`
  },
  {
    id: 5,
    title: "Wujudkan Transparansi, Website Desa Melung Sediakan Menu Khusus 'Desa Anti Korupsi'",
    badge: "BERITA DESA",
    date: "07 Jul 2026",
    views: 122,
    imageSource: "../assets/images/ipsal.png",
    content: `<p>Website desa kini memuat fitur khusus Desa Anti Korupsi sebagai bentuk komitmen keterbukaan tata kelola keuangan desa.</p>`
  },
  {
    id: 6,
    title: "Pemerintah Desa Melung Rilis Standar Pelayanan Bidang Pendidikan",
    badge: "BERITA DESA",
    date: "07 Jul 2026",
    views: 106,
    imageSource: "../assets/images/ipsal.png",
    content: `<p>Standar pelayanan bidang pendidikan hadir untuk memberikan kejelasan prosedur layanan administrasi sekolah dan beasiswa warga.</p>`
  }
];

// --- 1. RENDERING KARTU BERITA ---
const newsGrid = document.getElementById("newsGrid");

function renderCards(data) {
  if (!newsGrid) return;
  newsGrid.innerHTML = "";

  data.forEach((item) => {
    const card = document.createElement("article");
    card.className = "news-card";
    card.setAttribute("onclick", `openNewsModal(${item.id})`);
    
    card.innerHTML = `
      <div class="card-image-wrap">
        <span class="card-badge">${item.badge}</span>
        <img 
          id="img-card-${item.id}"
          src="${item.imageSource}" 
          alt="${item.title}" 
          class="card-thumb" 
          loading="lazy"
        />
      </div>
      <div class="card-content">
        <h4 class="card-title" title="${item.title}">${item.title}</h4>
        <div class="card-footer">
          <div class="meta-stats">
            <span class="date-text"><i class="far fa-calendar-alt"></i> ${item.date}</span>
            <span class="views-text"><i class="far fa-eye"></i> ${item.views}</span>
          </div>
          <button class="btn-baca" type="button" onclick="event.stopPropagation(); openNewsModal(${item.id});">
            Baca &rarr;
          </button>
        </div>
      </div>
    `;
    newsGrid.appendChild(card);
  });
}

// --- 2. POP-UP MODAL PRESI TEPAT DI TENGAH ---
function openNewsModal(articleId) {
  const article = articles.find(a => a.id === articleId);
  if (!article) return;

  let modalBackdrop = document.getElementById('articleModal');
  if (!modalBackdrop) {
    modalBackdrop = document.createElement('div');
    modalBackdrop.id = 'articleModal';
    modalBackdrop.className = 'article-modal-backdrop';
    document.body.appendChild(modalBackdrop);
  }

  let mediaHeaderHTML = '';
  if (article.isIpsal) {
    mediaHeaderHTML = `
      <div class="ipsal-gallery-collage">
        <div class="collage-item pos-lomba">
          <span class="collage-label">Lomba-Lomba</span>
        </div>
        <div class="collage-item pos-hadiah">
          <span class="collage-label">Hadiah Lomba</span>
        </div>
        <div class="collage-item pos-tasyakuran">
          <span class="collage-label">Tasyakuran</span>
        </div>
        <img src="${article.imageSource}" alt="${article.title}" class="ipsal-main-collage-img">
      </div>
    `;
  } else {
    mediaHeaderHTML = `
      <div class="modal-banner-wrap">
        <img src="${article.imageSource}" alt="${article.title}" class="modal-article-img">
      </div>
    `;
  }

  modalBackdrop.innerHTML = `
    <div class="article-modal-container">
      <button class="modal-close-btn" onclick="closeNewsModal()">&times;</button>
      
      <span class="modal-article-badge">${article.badge}</span>
      <h3 class="modal-article-title">${article.title}</h3>
      <div class="modal-meta-row">
        <span><i class="far fa-calendar-alt mr-1"></i> ${article.date}</span>
        <span><i class="far fa-eye mr-1"></i> ${article.views} Dilihat</span>
        <span><i class="far fa-user mr-1"></i> Admin Desa</span>
      </div>

      ${mediaHeaderHTML}

      <div class="modal-article-body">
        ${article.content}
      </div>
    </div>
  `;

  setTimeout(() => {
    modalBackdrop.classList.add('is-open');
    document.body.classList.add('modal-open'); // Kunci scroll layar belakang
  }, 10);

  modalBackdrop.addEventListener('click', function(e) {
    if (e.target === modalBackdrop) closeNewsModal();
  });
}

function closeNewsModal() {
  const modalBackdrop = document.getElementById('articleModal');
  if (modalBackdrop) {
    modalBackdrop.classList.remove('is-open');
    document.body.classList.remove('modal-open'); // Membuka kunci scroll
  }
}

// --- 3. JAM REALTIME ---
function updateClock() {
  const clockElement = document.getElementById("currentDateTime") || document.getElementById("realtime-clock");
  if (!clockElement) return;

  const now = new Date();
  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const months = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];

  const dayName = days[now.getDay()];
  const date = String(now.getDate()).padStart(2, '0');
  const monthName = months[now.getMonth()];
  const year = now.getFullYear();
  const time = now.toTimeString().split(' ')[0];

  clockElement.textContent = `${dayName}, ${date} ${monthName} ${year} • ${time} WIB`;
}

// --- 4. PEMBATASAN NAVIGASI LINK (NON-AKTIFKAN SELAIN SEJARAH & BERITA) ---
function initDisabledNavigation() {
  const navLinks = document.querySelectorAll(".main-menu a, .dropdown-popup a");

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");

    const isSejarah = href && href.includes("sejarah-desa");
    const isBerita = href && href.includes("berita-desa");

    // Jika bukan link ke Sejarah atau Berita Desa, tahan aksi kliknya
    if (!isSejarah && !isBerita) {
      link.addEventListener("click", function (e) {
        e.preventDefault(); // Mencegah routing/pindah halaman
      });
    }
  });
}

// --- 5. INITIALIZATION & EVENT LISTENERS ---
document.addEventListener('DOMContentLoaded', () => {
  renderCards(articles);
  updateClock();
  setInterval(updateClock, 1000);
  initDisabledNavigation();

  // Menutup modal saat menekan tombol ESC
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" || e.key === "Esc") {
      closeNewsModal();
    }
  });

  // Kontrol Navigasi Dropdown Hover
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

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.main-menu')) {
      dropdownItems.forEach((item) => item.classList.remove('is-open'));
    }
  });

  // Back to Top Button
  const backToTopBtn = document.getElementById("backToTop") || document.querySelector(".scroll-top");
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      backToTopBtn.style.display = window.scrollY > 300 ? 'inline-flex' : 'none';
    });

    backToTopBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});