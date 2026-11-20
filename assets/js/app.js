// ============================================================
//  app.js — منطق مشترک: سربرگ، فوتر، آیکن‌ها، جستجو، منو
//  Shared header/footer injection, icons, search, mobile menu.
// ============================================================

(function () {
  const store = window.ArghavanStore;
  const cfg = window.SHOP_CONFIG;

  // --- آیکن‌های SVG ---
  const ICONS = {
    cart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>',
    heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
    heartFilled: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
    trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',
    box: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>',
    telegram: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.94 4.6 18.9 19.05c-.23 1.01-.83 1.26-1.68.79l-4.64-3.42-2.24 2.16c-.25.25-.46.46-.94.46l.33-4.73 8.63-7.8c.37-.33-.08-.52-.58-.19L7.43 13.4l-4.6-1.44c-1-.31-1.02-1 .21-1.48l17.98-6.93c.83-.31 1.56.19 1.29 1.45z"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35z M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.47 1.34 4.98L2 22l5.18-1.36a9.94 9.94 0 0 0 4.86 1.24h.01c5.5 0 9.96-4.46 9.96-9.96 0-2.66-1.04-5.16-2.92-7.04A9.9 9.9 0 0 0 12.04 2z"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
    gift: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>',
    sparkle: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.5 5.5L19 9l-5.5 1.5L12 16l-1.5-5.5L5 9l5.5-1.5z"/></svg>',
    chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
    copy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
  };
  window.ICONS = ICONS;

  // --- آیتم‌های منو ---
  const NAV = [
    { href: "index.html", label: "خانه" },
    { href: "shop.html", label: "محصولات" },
    { href: "about.html", label: "درباره ما" },
    { href: "contact.html", label: "تماس" },
    { href: "faq.html", label: "سوالات متداول" },
  ];

  // --- لوگوی برند ---
  const BRAND_MARK = `<svg class="brand-mark" viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <circle cx="20" cy="20" r="19" fill="#43243E"/>
    <path d="M20 9c2.5 4 5 6.5 9 8-4 1.5-6.5 4-9 8-2.5-4-5-6.5-9-8 4-1.5 6.5-4 9-8z" fill="#F6EDF5"/>
  </svg>`;

  function currentPage() {
    const path = location.pathname.split("/").pop() || "index.html";
    return path;
  }

  // --- تزریق سربرگ ---
  function renderHeader() {
    const header = document.createElement("header");
    header.className = "site-header";
    const page = currentPage();

    const navLinks = NAV.map(
      (n) => `<a href="${n.href}" class="${page === n.href ? "active" : ""}">${n.label}</a>`
    ).join("");

    header.innerHTML = `
      <div class="container header-inner">
        <a href="index.html" class="brand" aria-label="${cfg.brandName}">
          ${BRAND_MARK}
          <span>${cfg.brandName}</span>
        </a>
        <nav class="nav" aria-label="ناوبری اصلی">${navLinks}</nav>
        <div class="header-tools">
          <div class="header-search" id="header-search">
            <input type="search" id="header-search-input" placeholder="جستجوی محصول..." aria-label="جستجو" />
          </div>
          <button class="icon-btn" id="search-toggle" aria-label="جستجو">${ICONS.search}</button>
          <a href="wishlist.html" class="icon-btn" aria-label="علاقه‌مندی‌ها">
            ${ICONS.heart}
            <span class="badge hidden" id="wish-badge">۰</span>
          </a>
          <a href="cart.html" class="icon-btn" aria-label="سبد خرید">
            ${ICONS.cart}
            <span class="badge hidden" id="cart-badge">۰</span>
          </a>
          <button class="icon-btn menu-toggle" id="menu-toggle" aria-label="منو" aria-expanded="false">${ICONS.menu}</button>
        </div>
      </div>`;

    const menu = document.createElement("div");
    menu.className = "mobile-menu";
    menu.id = "mobile-menu";
    menu.innerHTML = `
      <div class="mobile-menu-backdrop" data-close-menu></div>
      <div class="mobile-menu-panel" role="dialog" aria-label="منو">
        <button class="icon-btn close-btn" id="menu-close" aria-label="بستن منو">${ICONS.close}</button>
        <a href="index.html">خانه</a>
        ${NAV.map((n) => `<a href="${n.href}" class="${page === n.href ? "active" : ""}">${n.label}</a>`).join("")}
        <a href="wishlist.html">علاقه‌مندی‌ها</a>
        <a href="cart.html">سبد خرید</a>
      </div>`;

    const mount = document.getElementById("header-mount");
    if (mount) {
      mount.replaceWith(header);
    } else {
      document.body.prepend(header);
    }
    document.body.appendChild(menu);

    // update badges
    updateBadges();

    // search toggle
    const searchWrap = document.getElementById("header-search");
    const searchToggle = document.getElementById("search-toggle");
    const searchInput = document.getElementById("header-search-input");
    searchToggle.addEventListener("click", () => {
      searchWrap.classList.toggle("open");
      if (searchWrap.classList.contains("open")) searchInput.focus();
    });
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && searchInput.value.trim()) {
        location.href = "shop.html?q=" + encodeURIComponent(searchInput.value.trim());
      }
    });

    // mobile menu
    const menuToggle = document.getElementById("menu-toggle");
    const menuClose = document.getElementById("menu-close");
    menuToggle.addEventListener("click", () => {
      menu.classList.add("open");
      menuToggle.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
    });
    function closeMenu() {
      menu.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }
    menuClose.addEventListener("click", closeMenu);
    menu.querySelector("[data-close-menu]").addEventListener("click", closeMenu);
    menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMenu));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeMenu(); });
  }

  function toFaBadge(n) {
    return store.toFaNum(String(n));
  }

  function updateBadges() {
    const cartBadge = document.getElementById("cart-badge");
    const wishBadge = document.getElementById("wish-badge");
    const cc = store.cartCount();
    const wc = store.wishlistCount();
    if (cartBadge) {
      if (cc > 0) { cartBadge.textContent = toFaBadge(cc); cartBadge.classList.remove("hidden"); }
      else cartBadge.classList.add("hidden");
    }
    if (wishBadge) {
      if (wc > 0) { wishBadge.textContent = toFaBadge(wc); wishBadge.classList.remove("hidden"); }
      else wishBadge.classList.add("hidden");
    }
  }

  // --- تزریق فوتر ---
  function renderFooter() {
    const footer = document.createElement("footer");
    footer.className = "site-footer";

    const socialLinks = [];
    if (cfg.social.instagram) socialLinks.push(`<a href="${cfg.social.instagram}" target="_blank" rel="noopener" aria-label="اینستاگرام">${ICONS.instagram}</a>`);
    if (cfg.social.facebook) socialLinks.push(`<a href="${cfg.social.facebook}" target="_blank" rel="noopener" aria-label="فیسبوک">${ICONS.facebook}</a>`);
    if (cfg.social.telegram) socialLinks.push(`<a href="${cfg.social.telegram}" target="_blank" rel="noopener" aria-label="تلگرام">${ICONS.telegram}</a>`);

    const navCol = NAV.map((n) => `<li><a href="${n.href}">${n.label}</a></li>`).join("");
    const hoursHtml = cfg.hours.map((h) => `<li>${h.day}: ${h.time}</li>`).join("");

    footer.innerHTML = `
      <div class="container">
        <div class="footer-grid">
          <div>
            <div class="footer-brand">${BRAND_MARK}<span>${cfg.brandName}</span></div>
            <p>${cfg.brandTagline}</p>
            ${socialLinks.length ? `<div class="social-row">${socialLinks.join("")}</div>` : ""}
          </div>
          <div>
            <h4>صفحات</h4>
            <ul>
              ${navCol}
              <li><a href="wishlist.html">علاقه‌مندی‌ها</a></li>
              <li><a href="cart.html">سبد خرید</a></li>
            </ul>
          </div>
          <div>
            <h4>تماس</h4>
            <ul>
              <li><span class="ltr">${cfg.phone}</span></li>
              <li><span class="ltr">${cfg.email}</span></li>
              <li>${cfg.address}</li>
            </ul>
          </div>
          <div>
            <h4>ساعات کاری</h4>
            <ul>${hoursHtml}</ul>
          </div>
        </div>
        <div class="footer-bottom">
          © ${store.toFaNum("1404")} ${cfg.brandName} — همه‌ی حقوق محفوظ است.
        </div>
      </div>`;

    const mount = document.getElementById("footer-mount");
    if (mount) mount.replaceWith(footer);
    else document.body.appendChild(footer);
  }

  // --- کارت محصول (تولید HTML) ---
  function productCardHTML(p) {
    const wished = store.isWished(p.id);
    const out = p.stock <= 0;
    const discount = p.previousPrice && p.previousPrice > p.price;
    let discountPct = "";
    if (discount) {
      const pct = Math.round((1 - p.price / p.previousPrice) * 100);
      discountPct = `<span class="discount-flag">${store.toFaNum(pct)}٪ تخفیف</span>`;
    }
    const stockHtml = out
      ? `<span class="stock out">ناموجود</span>`
      : `<span class="stock in">موجود</span>`;
    const priceHtml = discount
      ? `<span class="price">${store.formatPrice(p.price)}</span><span class="prev-price">${store.formatPrice(p.previousPrice)}</span>`
      : `<span class="price">${store.formatPrice(p.price)}</span>`;
    const addBtn = out
      ? `<button class="btn btn-ghost btn-block btn-sm" disabled>ناموجود</button>`
      : `<button class="btn btn-primary btn-block btn-sm" data-quick-add="${p.id}">افزودن به سبد</button>`;

    return `
      <article class="product-card" data-reveal>
        <a href="product.html?id=${p.id}" class="img-wrap" aria-label="${p.name}">
          ${discountPct}
          <img src="assets/images/products/${p.images[0]}" alt="${p.alt}" loading="lazy" width="400" height="400" />
        </a>
        <button class="wish-btn ${wished ? "active" : ""}" data-wish="${p.id}" aria-label="افزودن به علاقه‌مندی" aria-pressed="${wished}">
          ${wished ? ICONS.heartFilled : ICONS.heart}
        </button>
        <div class="body">
          <span class="cat-tag">${p.category}</span>
          <a href="product.html?id=${p.id}" class="name">${p.name}</a>
          ${stockHtml}
          <div class="price-row">${priceHtml}</div>
          ${addBtn}
        </div>
      </article>`;
  }
  window.productCardHTML = productCardHTML;

  // --- اتصال رویدادها برای کارت‌ها (delegation) ---
  function bindCardEvents(scope) {
    scope.addEventListener("click", (e) => {
      const wishBtn = e.target.closest("[data-wish]");
      if (wishBtn) {
        e.preventDefault();
        const id = wishBtn.getAttribute("data-wish");
        const added = store.toggleWishlist(id);
        const active = store.isWished(id);
        wishBtn.classList.toggle("active", active);
        wishBtn.setAttribute("aria-pressed", active);
        wishBtn.innerHTML = active ? ICONS.heartFilled : ICONS.heart;
        store.toast(added ? "به علاقه‌مندی‌ها اضافه شد" : "از علاقه‌مندی‌ها حذف شد");
        updateBadges();
        return;
      }
      const addBtn = e.target.closest("[data-quick-add]");
      if (addBtn) {
        e.preventDefault();
        const id = addBtn.getAttribute("data-quick-add");
        const ok = store.addToCart(id, "", 1);
        if (ok) {
          store.toast("به سبد خرید اضافه شد");
          updateBadges();
        } else {
          store.toast("این محصول ناموجود است");
        }
        return;
      }
    });
  }
  window.bindCardEvents = bindCardEvents;

  // --- راه‌اندازی ---
  function init() {
    renderHeader();
    renderFooter();
    store.revealOnScroll();
    bindCardEvents(document);
    document.addEventListener("arghavan:cart-change", updateBadges);
    document.addEventListener("arghavan:wishlist-change", updateBadges);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
