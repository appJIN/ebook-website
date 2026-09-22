/* ============================================
   JINBOOK — Main JavaScript
   Dynamic rendering, search, filter, modals,
   and ZiniPay integration
   ============================================ */

// ============================================
// 📚 BOOK DATA — সহজে আপডেট করুন
// ============================================
// নতুন বই যোগ করতে এই অ্যারেতে নতুন অবজেক্ট যোগ করুন।
// paymentLink: ZiniPay ড্যাশবোর্ড থেকে তৈরি করা পেমেন্ট লিংক বসান
// downloadFile: ই-বুক PDF ফাইলের পাথ (downloads/ ফোল্ডারে রাখুন)

const books = [
  {
    id: 1,
    title: "ওজন কমাবেন যেভাবে",
    author: "ডা. মো. জহিরুল ইসলাম",
    category: "স্বাস্থ্য",
    price: 299,
    oldPrice: null,
    cover: "images/book-ojon-komaben.png",
    badge: "popular",
    badgeText: "জনপ্রিয়",
    description: "বৈজ্ঞানিক পদ্ধতিতে ওজন কমানোর সম্পূর্ণ গাইড। সঠিক ডায়েট প্ল্যান, ব্যায়াম ও জীবনযাপনের মাধ্যমে স্বাস্থ্যকর উপায়ে ওজন নিয়ন্ত্রণ করুন।",
    intro: `
      <div class="book-intro">
        <div class="intro-section intro-headline">
          <p class="intro-quote">"ডায়েট করছি, ব্যায়াম করছি, তবুও ওজন কমে না?" — এবার আসল সমাধান হাতে!</p>
          <p>ওজন কমাতে চাইছেন কিন্তু সঠিক দিকনির্দেশনা পাচ্ছেন না?<br/>এই সহজ গাইডেই পাবেন স্বাস্থ্যকরভাবে ওজন কমানোর বাস্তব উপায়।</p>
        </div>

        <div class="intro-section">
          <span class="intro-icon">📌</span>
          <h3>সমস্যাটা কি আপনারও?</h3>
          <p>বাংলাদেশে খুব পরিচিত একটা কথা—<br/>👉 "কম খাচ্ছি তবুও মোটা হচ্ছি"</p>
          <p>আপনিও কি—</p>
          <ul>
            <li>ডায়েট করেও ওজন কমাতে পারছেন না?</li>
            <li>ভাত-রুটি বাদ দিয়েও ফল পাচ্ছেন না?</li>
            <li>ব্যায়াম শুরু করেও ধরে রাখতে পারছেন না?</li>
            <li>কোনটা খাবেন, কোনটা খাবেন না — বুঝতে পারছেন না?</li>
          </ul>
          <p>👉 তাহলে এই বইটি আপনার জন্যই।</p>
        </div>

        <div class="intro-section">
          <span class="intro-icon">❗</span>
          <h3>ভুল ধারণা ভেঙে ফেলুন</h3>
          <p>অনেকে মনে করেন—</p>
          <ul>
            <li>না খেলেই ওজন কমবে</li>
            <li>শুধু সালাদ খেলেই চলবে</li>
            <li>দামি সাপ্লিমেন্ট ছাড়া সম্ভব না</li>
          </ul>
          <p>👉 আসলে এগুলো সম্পূর্ণ সত্য নয়।</p>
        </div>

        <div class="intro-section">
          <span class="intro-icon">✅</span>
          <h3>আসল সত্যটা কী?</h3>
          <p>ওজন কমানো মানে না খেয়ে থাকা না।<br/>👉 এটা হলো—</p>
          <ul>
            <li>সঠিক খাবার বাছাই করা</li>
            <li>সঠিক সময়ে খাওয়া</li>
            <li>ধীরে ধীরে জীবনযাপনে পরিবর্তন আনা</li>
          </ul>
          <p>এবং এটা সম্ভব খুব সহজ কিছু নিয়ম মেনে 👇</p>
          <div class="intro-checklist">
            <span>✔️ সঠিক খাবার</span>
            <span>✔️ সঠিক পরিমাণ</span>
            <span>✔️ সঠিক সময়</span>
            <span>✔️ পর্যাপ্ত ঘুম</span>
            <span>✔️ নিয়মিত ব্যায়াম</span>
          </div>
        </div>

        <div class="intro-section">
          <span class="intro-icon">📘</span>
          <h3>এই ই-বুকে আপনি যা পাবেন</h3>
          <ul class="intro-features">
            <li>✔️ কেন ওজন কমে না — সহজ ব্যাখ্যা</li>
            <li>✔️ বাংলাদেশের সাধারণ খাবার দিয়ে ওজন কমানোর গাইড</li>
            <li>✔️ বাস্তবসম্মত ডায়েট প্ল্যান (ভাত, সবজি, মাছ, ডাল, ফল)</li>
            <li>✔️ প্রতিদিন কীভাবে খেলে ধীরে ধীরে ওজন কমবে</li>
            <li>✔️ শরীর সুস্থ ও ফিট রাখার পদ্ধতি</li>
          </ul>
        </div>

        <div class="intro-section">
          <span class="intro-icon">🇧🇩</span>
          <h3>বাংলাদেশি বাস্তবতায় তৈরি</h3>
          <p>এই বইতে—</p>
          <p>❌ কোনো বিদেশি খাবারের উপর নির্ভরতা নেই<br/>❌ কোনো অপ্রয়োজনীয় খরচ নেই</p>
          <p>👉 সবকিছুই আপনার ঘরের সাধারণ খাবার দিয়ে করা সম্ভব।</p>
        </div>

        <div class="intro-section intro-cta">
          <span class="intro-icon">🚀</span>
          <h3>এখনই শুরু করুন</h3>
          <p>আর দেরি না করে আজ থেকেই শুরু করুন<br/>👉 আপনার স্বাস্থ্যকর ওজন কমানোর যাত্রা</p>
        </div>
      </div>
    `,
    pages: "১২০+",
    language: "বাংলা",
    format: "PDF",
    paymentLink: "https://dash.zinipay.com/digital-products/product/11203b15-0fa6-404f-870c-c86f21b1745a",
    downloadFile: "downloads/book1.pdf"
  },
  {
    id: 2,
    title: "ওজন বাড়াবেন যেভাবে",
    author: "ডা. মো. জহিরুল ইসলাম",
    category: "স্বাস্থ্য",
    price: 199,
    oldPrice: null,
    cover: "images/book-ojon-baraben.png",
    badge: "popular",
    badgeText: "জনপ্রিয়",
    description: "সুস্থ ও নিরাপদ উপায়ে ওজন বাড়ার সম্পূর্ণ গাইড। পুষ্টিকর খাদ্য তালিকা, সঠিক ব্যায়াম ও জীবনযাপনের মাধ্যমে আদর্শ ওজন অর্জন করুন।",
    intro: `
      <div class="book-intro">
        <div class="intro-section intro-headline">
          <p class="intro-quote">"যত খাই, ততই শুকাই?" — এবার সমাধান হাতে!</p>
          <p>ওজন বাড়াতে পারছেন না?<br/>এই সহজ গাইডেই পাবেন স্বাস্থ্যকরভাবে ওজন বাড়ানোর বাস্তব উপায়।</p>
        </div>

        <div class="intro-section">
          <span class="intro-icon">📌</span>
          <h3>সমস্যাটা কি আপনারও?</h3>
          <p>বাংলাদেশে খুব পরিচিত একটা কথা—<br/>👉 "যত খাই, ততই শুকাই"</p>
          <p>আপনিও কি—</p>
          <ul>
            <li>ঠিকমতো খাওয়ার পরও ওজন বাড়াতে পারছেন না?</li>
            <li>একটু খেলেই পেট ভরে যায়?</li>
            <li>নিয়মিত খাওয়ার সময় পান না?</li>
            <li>মানসিক চাপ বা হজম সমস্যায় ভুগছেন?</li>
          </ul>
          <p>👉 তাহলে এই বইটি আপনার জন্যই।</p>
        </div>

        <div class="intro-section">
          <span class="intro-icon">❗</span>
          <h3>ভুল ধারণা ভেঙে ফেলুন</h3>
          <p>অনেকে মনে করেন—</p>
          <ul>
            <li>বেশি ভাত খেলেই ওজন বাড়ে</li>
            <li>জিমে গেলেই শরীর হয়ে যায়</li>
            <li>দামি সাপ্লিমেন্ট ছাড়া উপায় নেই</li>
          </ul>
          <p>👉 আসলে এগুলো সম্পূর্ণ সত্য নয়।</p>
        </div>

        <div class="intro-section">
          <span class="intro-icon">✅</span>
          <h3>আসল সত্যটা কী?</h3>
          <p>ওজন বাড়ানো মানে শুধু মোটা হওয়া না।<br/>👉 এটা হলো—</p>
          <ul>
            <li>শরীরকে শক্ত করা</li>
            <li>পুষ্টি ঠিক রাখা</li>
            <li>ধীরে ধীরে সুন্দর গঠন তৈরি করা</li>
          </ul>
          <p>এবং এটা সম্ভব খুব সহজ কিছু নিয়ম মেনে 👇</p>
          <div class="intro-checklist">
            <span>✔️ সঠিক খাবার</span>
            <span>✔️ সঠিক পরিমাণ</span>
            <span>✔️ সঠিক সময়</span>
            <span>✔️ পর্যাপ্ত ঘুম</span>
            <span>✔️ হালকা ব্যায়াম</span>
          </div>
        </div>

        <div class="intro-section">
          <span class="intro-icon">📘</span>
          <h3>এই ই-বুকে আপনি যা পাবেন</h3>
          <ul class="intro-features">
            <li>✔️ কেন অনেকের ওজন বাড়ে না — সহজ ব্যাখ্যা</li>
            <li>✔️ বাংলাদেশের সাধারণ খাবার দিয়ে ওজন বাড়ানোর গাইড</li>
            <li>✔️ বাস্তবসম্মত ডায়েট প্ল্যান (ভাত, ডাল, ডিম, মাছ, দুধ, কলা, বাদাম)</li>
            <li>✔️ প্রতিদিন কীভাবে খেলে ধীরে ধীরে ওজন বাড়বে</li>
            <li>✔️ শরীর শক্ত ও স্বাস্থ্যকর করার পদ্ধতি</li>
          </ul>
        </div>

        <div class="intro-section">
          <span class="intro-icon">🇧🇩</span>
          <h3>বাংলাদেশি বাস্তবতায় তৈরি</h3>
          <p>এই বইতে—</p>
          <p>❌ কোনো বিদেশি খাবারের উপর নির্ভরতা নেই<br/>❌ কোনো অপ্রয়োজনীয় খরচ নেই</p>
          <p>👉 সবকিছুই আপনার ঘরের সাধারণ খাবার দিয়ে করা সম্ভব।</p>
        </div>

        <div class="intro-section">
          <span class="intro-icon">🤲</span>
          <h3>একটি গুরুত্বপূর্ণ কথা</h3>
          <p>শরীর আল্লাহর দেওয়া একটি আমানত।<br/>তাই লক্ষ্য হওয়া উচিত—</p>
          <div class="intro-checklist">
            <span>✔️ সুস্থ থাকা</span>
            <span>✔️ শক্তিশালী হওয়া</span>
            <span>✔️ ভারসাম্যপূর্ণ জীবন যাপন</span>
          </div>
        </div>

        <div class="intro-section intro-cta">
          <span class="intro-icon">🚀</span>
          <h3>এখনই শুরু করুন</h3>
          <p>আর দেরি না করে আজ থেকেই শুরু করুন<br/>👉 আপনার স্বাস্থ্যকর ওজন বাড়ানোর যাত্রা</p>
        </div>
      </div>
    `,
    pages: "১১০+",
    language: "বাংলা",
    format: "PDF",
    paymentLink: "https://dash.zinipay.com/digital-products/product/e32ac619-d10e-4cd2-8aca-47c0b113f381",
    downloadFile: "downloads/book2.pdf"
  },
  {
    id: 3,
    title: "সহজ বাংলায় স্ট্যাটিস্টিকস",
    author: "ডা. মো. জহিরুল ইসলাম",
    category: "শিক্ষা",
    price: 199,
    oldPrice: null,
    cover: "images/book-biostat.png",
    badge: "new",
    badgeText: "নতুন",
    description: "বায়োস্ট্যাটিসটিক্সের জটিল বিষয়গুলো সহজ বাংলায় উপস্থাপন। গবেষণা, থিসিস ও একাডেমিক কাজে পরিসংখ্যানের ব্যবহার শিখুন সহজ ভাষায়।",
    intro: `
      <div class="book-intro">
        <div class="intro-section intro-headline">
          <p class="intro-quote">"স্ট্যাটিস্টিকস কঠিন?" — না, এবার সহজ বাংলায় শিখুন!</p>
          <p>থিসিস বা গবেষণায় পরিসংখ্যান নিয়ে ভয় পাচ্ছেন?<br/>এই সহজ গাইডেই পাবেন স্ট্যাটিস্টিকসের মূল বিষয়গুলো — একদম সরল ভাষায়।</p>
        </div>

        <div class="intro-section">
          <span class="intro-icon">📌</span>
          <h3>সমস্যাটা কি আপনারও?</h3>
          <p>বাংলাদেশে মেডিকেল ও স্বাস্থ্য গবেষণায় একটা বড় সমস্যা—<br/>👉 "স্ট্যাটিস্টিকস বুঝি না, ভয় লাগে"</p>
          <p>আপনিও কি—</p>
          <ul>
            <li>থিসিস লিখতে গিয়ে পরিসংখ্যানে আটকে যাচ্ছেন?</li>
            <li>p-value, mean, median, chi-square শুনলেই মাথা ঘুরে?</li>
            <li>SPSS বা ডেটা অ্যানালাইসিস কীভাবে করবেন বুঝতে পারছেন না?</li>
            <li>ইংরেজি টেক্সটবুক পড়ে হতাশ হয়ে গেছেন?</li>
          </ul>
          <p>👉 তাহলে এই বইটি আপনার জন্যই।</p>
        </div>

        <div class="intro-section">
          <span class="intro-icon">❗</span>
          <h3>ভুল ধারণা ভেঙে ফেলুন</h3>
          <p>অনেকে মনে করেন—</p>
          <ul>
            <li>স্ট্যাটিস্টিকস শুধু গণিতে ভালোদের জন্য</li>
            <li>বিদেশি বই ছাড়া শেখা সম্ভব না</li>
            <li>কোচিং বা ব্যয়বহুল কোর্স ছাড়া উপায় নেই</li>
          </ul>
          <p>👉 আসলে এগুলো সম্পূর্ণ সত্য নয়।</p>
        </div>

        <div class="intro-section">
          <span class="intro-icon">✅</span>
          <h3>আসল সত্যটা কী?</h3>
          <p>স্ট্যাটিস্টিকস আসলে কঠিন কিছু না।<br/>👉 এটা হলো—</p>
          <ul>
            <li>তথ্যকে সংখ্যায় প্রকাশ করা</li>
            <li>সিদ্ধান্ত নেওয়ার জন্য বিশ্লেষণ করা</li>
            <li>গবেষণাকে বিশ্বাসযোগ্য করে তোলা</li>
          </ul>
          <p>এবং এটা শেখা সম্ভব সহজ বাংলায় 👇</p>
          <div class="intro-checklist">
            <span>✔️ সহজ ভাষা</span>
            <span>✔️ বাস্তব উদাহরণ</span>
            <span>✔️ ধাপে ধাপে ব্যাখ্যা</span>
            <span>✔️ চিত্র ও টেবিল</span>
            <span>✔️ প্র্যাকটিক্যাল গাইড</span>
          </div>
        </div>

        <div class="intro-section">
          <span class="intro-icon">📘</span>
          <h3>এই ই-বুকে আপনি যা পাবেন</h3>
          <ul class="intro-features">
            <li>✔️ পরিসংখ্যানের মৌলিক ধারণা — সহজ বাংলায়</li>
            <li>✔️ Mean, Median, Mode, SD — উদাহরণসহ</li>
            <li>✔️ p-value, Confidence Interval কী ও কেন</li>
            <li>✔️ Chi-square, t-test, ANOVA — কখন কোনটা ব্যবহার করবেন</li>
            <li>✔️ থিসিস ও জার্নালে পরিসংখ্যান লেখার নিয়ম</li>
          </ul>
        </div>

        <div class="intro-section">
          <span class="intro-icon">🎓</span>
          <h3>কাদের জন্য এই বই?</h3>
          <p>এই বইটি বিশেষভাবে তৈরি—</p>
          <div class="intro-checklist">
            <span>✔️ মেডিকেল শিক্ষার্থী</span>
            <span>✔️ থিসিস গবেষক</span>
            <span>✔️ পাবলিক হেলথ প্রফেশনাল</span>
            <span>✔️ শিক্ষক ও একাডেমিক</span>
          </div>
        </div>

        <div class="intro-section intro-cta">
          <span class="intro-icon">🚀</span>
          <h3>এখনই শুরু করুন</h3>
          <p>আর দেরি না করে আজ থেকেই শুরু করুন<br/>👉 সহজ বাংলায় স্ট্যাটিস্টিকস আয়ত্ত করুন</p>
        </div>
      </div>
    `,
    pages: "১৫০+",
    language: "বাংলা",
    format: "PDF",
    paymentLink: "https://dash.zinipay.com/digital-products/product/33a749b2-9af7-40ff-b8a1-5efe9a6dec9d",
    downloadFile: "downloads/book3.pdf"
  }
];

// ============================================
// 🏗️ DOM ELEMENTS
// ============================================
const booksGrid = document.getElementById('booksGrid');
const searchInput = document.getElementById('searchInput');
const filterBar = document.getElementById('filterBar');
const noResults = document.getElementById('noResults');
const bookModal = document.getElementById('bookModal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');
const navbar = document.getElementById('navbar');
const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.getElementById('navLinks');
const contactForm = document.getElementById('contactForm');
const toast = document.getElementById('toast');

let activeFilter = 'সব';

// ============================================
// 📖 RENDER BOOKS
// ============================================
function renderBooks(booksToRender) {
  if (booksToRender.length === 0) {
    booksGrid.innerHTML = '';
    noResults.style.display = 'block';
    return;
  }

  noResults.style.display = 'none';

  booksGrid.innerHTML = booksToRender.map((book, index) => `
    <div class="book-card scroll-animate" data-id="${book.id}" style="animation-delay: ${index * 0.1}s">
      <div class="book-cover-wrapper">
        <img src="${book.cover}" alt="${book.title}" loading="lazy" />
        ${book.badge ? `<span class="book-badge badge-${book.badge}">${book.badgeText}</span>` : ''}
        <div class="book-overlay">
          <button class="btn btn-primary btn-sm" onclick="openModal(${book.id})">
            📖 বিস্তারিত দেখুন
          </button>
        </div>
      </div>
      <div class="book-info">
        <div class="book-category">${book.category}</div>
        <h3 class="book-title">${book.title}</h3>
        <p class="book-author">✍️ ${book.author}</p>
        <div class="book-price-row">
          <span class="book-price">
            ৳${book.price}
            <span class="currency"> টাকা</span>
            ${book.oldPrice ? `<span class="old-price">৳${book.oldPrice}</span>` : ''}
          </span>
          <button class="btn btn-buy btn-sm" onclick="buyBook(${book.id})" aria-label="${book.title} কিনুন">
            কিনুন
          </button>
        </div>
      </div>
    </div>
  `).join('');

  // Re-observe scroll animations for new elements
  observeScrollAnimations();
}

// ============================================
// 🔍 SEARCH & FILTER
// ============================================
function getFilteredBooks() {
  let filtered = [...books];

  // Category filter
  if (activeFilter !== 'সব') {
    filtered = filtered.filter(b => b.category === activeFilter);
  }

  // Search filter
  const query = searchInput.value.trim().toLowerCase();
  if (query) {
    filtered = filtered.filter(b =>
      b.title.toLowerCase().includes(query) ||
      b.author.toLowerCase().includes(query) ||
      b.category.toLowerCase().includes(query) ||
      b.description.toLowerCase().includes(query)
    );
  }

  return filtered;
}

function handleSearch() {
  renderBooks(getFilteredBooks());
}

function renderFilters() {
  const categories = ['সব', ...new Set(books.map(b => b.category))];

  filterBar.innerHTML = categories.map(cat => `
    <button class="filter-btn ${cat === activeFilter ? 'active' : ''}" onclick="setFilter('${cat}')">
      ${cat}
    </button>
  `).join('');
}

function setFilter(category) {
  activeFilter = category;
  renderFilters();
  renderBooks(getFilteredBooks());
}

// ============================================
// 📖 BOOK MODAL
// ============================================
function openModal(bookId) {
  const book = books.find(b => b.id === bookId);
  if (!book) return;

  const discount = book.oldPrice ? Math.round((1 - book.price / book.oldPrice) * 100) : 0;

  modalBody.innerHTML = `
    <div class="modal-cover">
      <img src="${book.cover}" alt="${book.title}" />
    </div>
    <div class="modal-details">
      <div class="book-category">${book.category}</div>
      <h2>${book.title}</h2>
      <p class="modal-author">✍️ ${book.author}</p>

      ${book.intro ? book.intro : `<p class="modal-description">${book.description}</p>`}

      <div class="modal-meta">
        <div class="meta-item">
          <span class="meta-label">পৃষ্ঠা সংখ্যা</span>
          <span class="meta-value">${book.pages}</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">ভাষা</span>
          <span class="meta-value">${book.language}</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">ফরম্যাট</span>
          <span class="meta-value">${book.format}</span>
        </div>
      </div>

      <div class="modal-price">
        ৳${book.price} <span class="currency">টাকা</span>
        ${book.oldPrice ? `<span class="old-price" style="font-size: 1rem; color: var(--text-muted); text-decoration: line-through; margin-left: 8px;">৳${book.oldPrice}</span>` : ''}
      </div>

      <div class="modal-actions">
        <button class="btn btn-buy" onclick="buyBook(${book.id})">
          💳 এখনই কিনুন
        </button>
        <button class="btn btn-outline" onclick="shareBook(${book.id})">
          📤 শেয়ার করুন
        </button>
      </div>
    </div>
  `;

  bookModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  bookModal.classList.remove('active');
  document.body.style.overflow = '';
}

// ============================================
// 💳 BUY BOOK — ZiniPay Integration
// ============================================
function buyBook(bookId) {
  const book = books.find(b => b.id === bookId);
  if (!book) return;

  if (book.paymentLink && book.paymentLink !== '#') {
    // ZiniPay পেমেন্ট লিংকে রিডাইরেক্ট
    // পেমেন্ট সফল হলে ZiniPay আপনাকে thankyou.html?book=ID পেজে রিডাইরেক্ট করবে
    // সেই পেজে অটো ডাউনলোড শুরু হবে
    window.open(book.paymentLink, '_blank');
  } else {
    // পেমেন্ট লিংক সেট না করা থাকলে
    showToast('⚠️ পেমেন্ট লিংক শীঘ্রই যুক্ত হবে। যোগাযোগ করুন।');
    // Demo: সরাসরি ধন্যবাদ পেজে নিয়ে যায় (টেস্টিংয়ের জন্য)
    // window.location.href = `thankyou.html?book=${book.id}`;
  }

  closeModal();
}

// ============================================
// 📤 SHARE BOOK
// ============================================
function shareBook(bookId) {
  const book = books.find(b => b.id === bookId);
  if (!book) return;

  const shareText = `📚 "${book.title}" - ${book.author}\n💰 মাত্র ৳${book.price} টাকা\n🔗 ${window.location.href}`;

  if (navigator.share) {
    navigator.share({
      title: book.title,
      text: shareText,
      url: window.location.href
    }).catch(() => {});
  } else {
    navigator.clipboard.writeText(shareText).then(() => {
      showToast('✅ লিংক কপি হয়েছে!');
    }).catch(() => {
      showToast('লিংক কপি করতে পারেনি');
    });
  }
}

// ============================================
// 🍞 TOAST NOTIFICATION
// ============================================
function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ============================================
// 🎯 SCROLL ANIMATIONS
// ============================================
function observeScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll('.scroll-animate').forEach(el => {
    observer.observe(el);
  });
}

// ============================================
// 📌 NAVBAR SCROLL EFFECT
// ============================================
function handleNavScroll() {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

// Active link highlighting
function updateActiveLink() {
  const sections = document.querySelectorAll('section[id]');
  const scrollPos = window.scrollY + 100;

  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');

    if (scrollPos >= top && scrollPos < top + height) {
      document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

// ============================================
// 📱 MOBILE MENU
// ============================================
function toggleMobileMenu() {
  mobileToggle.classList.toggle('active');
  navLinks.classList.toggle('mobile-open');
}

function closeMobileMenu() {
  mobileToggle.classList.remove('active');
  navLinks.classList.remove('mobile-open');
}

// ============================================
// 📝 CONTACT FORM
// ============================================
function handleContactSubmit(e) {
  e.preventDefault();

  const name = document.getElementById('contactName').value;
  const email = document.getElementById('contactEmail').value;
  const phone = document.getElementById('contactPhone').value;
  const message = document.getElementById('contactMessage').value;

  // WhatsApp message compose
  const whatsappText = encodeURIComponent(
    `📧 JINBOOK যোগাযোগ ফর্ম\n\n` +
    `👤 নাম: ${name}\n` +
    `📧 ইমেইল: ${email}\n` +
    `📞 ফোন: ${phone}\n` +
    `💬 বার্তা: ${message}`
  );

  // You can change this to your WhatsApp number
  // window.open(`https://wa.me/880XXXXXXXXXX?text=${whatsappText}`, '_blank');

  showToast('✅ আপনার বার্তা পাঠানো হয়েছে। ধন্যবাদ!');
  contactForm.reset();
}

// ============================================
// 🔗 SMOOTH SCROLL for anchor links
// ============================================
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      e.preventDefault();
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        closeMobileMenu();
      }
    });
  });
}

// ============================================
// 🚀 INITIALIZE
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  // Render filters and books
  renderFilters();
  renderBooks(books);

  // Search
  searchInput.addEventListener('input', handleSearch);

  // Scroll effects
  window.addEventListener('scroll', () => {
    handleNavScroll();
    updateActiveLink();
  });

  // Mobile menu
  mobileToggle.addEventListener('click', toggleMobileMenu);

  // Close mobile menu when clicking a link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // Modal close
  modalClose.addEventListener('click', closeModal);
  bookModal.addEventListener('click', (e) => {
    if (e.target === bookModal) closeModal();
  });

  // ESC to close modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // Contact form
  contactForm.addEventListener('submit', handleContactSubmit);

  // Smooth scroll
  setupSmoothScroll();

  // Initial scroll animations
  observeScrollAnimations();

  // Navbar initial state
  handleNavScroll();
});
