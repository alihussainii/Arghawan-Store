// ============================================================
//  store.js — مدیریت سبد خرید و علاقه‌مندی‌ها
//  Cart & wishlist store using localStorage.
//  Personal checkout details are NOT persisted here.
// ============================================================

(function () {
  const CART_KEY = "arghavan_cart_v1";
  const WISH_KEY = "arghavan_wishlist_v1";

  function read(key) {
    try {
      return JSON.parse(localStorage.getItem(key)) || [];
    } catch (e) {
      return [];
    }
  }
  function write(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {}
  }

  // سبد خرید — هر آیتم: { id, variant (string), qty }
  function getCart() {
    return read(CART_KEY);
  }
  function setCart(cart) {
    write(CART_KEY, cart);
    document.dispatchEvent(new CustomEvent("arghavan:cart-change"));
  }

  function variantKey(productId, variant) {
    // variant is a stable string like "رنگ: قهوه‌ای" or "" if no variants
    return productId + "||" + (variant || "");
  }

  function addToCart(productId, variant, qty) {
    const product = getProductById(productId);
    if (!product || product.stock <= 0) return false;
    const v = variant || "";
    const cart = getCart();
    const key = variantKey(productId, v);
    const existing = cart.find((c) => variantKey(c.id, c.variant) === key);
    const currentQty = existing ? existing.qty : 0;
    if (currentQty + qty > product.stock) {
      qty = product.stock - currentQty;
    }
    if (qty <= 0) return false;
    if (existing) {
      existing.qty += qty;
    } else {
      cart.push({ id: productId, variant: v, qty: qty });
    }
    setCart(cart);
    return true;
  }

  function updateQty(productId, variant, qty) {
    const cart = getCart();
    const key = variantKey(productId, variant);
    const item = cart.find((c) => variantKey(c.id, c.variant) === key);
    if (!item) return;
    const product = getProductById(productId);
    if (product && qty > product.stock) qty = product.stock;
    if (qty <= 0) {
      removeFromCart(productId, variant);
      return;
    }
    item.qty = qty;
    setCart(cart);
  }

  function removeFromCart(productId, variant) {
    const cart = getCart();
    const key = variantKey(productId, variant);
    const next = cart.filter((c) => variantKey(c.id, c.variant) !== key);
    setCart(next);
  }

  function clearCart() {
    setCart([]);
  }

  function cartCount() {
    return getCart().reduce((sum, item) => sum + item.qty, 0);
  }

  function cartSubtotal() {
    let total = 0;
    getCart().forEach((item) => {
      const p = getProductById(item.id);
      if (p) total += p.price * item.qty;
    });
    return total;
  }

  // علاقه‌مندی‌ها — آرایه‌ی شناسه‌های محصول
  function getWishlist() {
    return read(WISH_KEY);
  }
  function setWishlist(list) {
    write(WISH_KEY, list);
    document.dispatchEvent(new CustomEvent("arghavan:wishlist-change"));
  }
  function isWished(productId) {
    return getWishlist().indexOf(productId) !== -1;
  }
  function toggleWishlist(productId) {
    const list = getWishlist();
    const idx = list.indexOf(productId);
    if (idx === -1) list.push(productId);
    else list.splice(idx, 1);
    setWishlist(list);
    return idx === -1; // true if added
  }
  function removeFromWishlist(productId) {
    const list = getWishlist().filter((id) => id !== productId);
    setWishlist(list);
  }
  function wishlistCount() {
    return getWishlist().length;
  }

  // --- ابزارهای کمکی ---
  function getProductById(id) {
    if (typeof PRODUCTS === "undefined") return null;
    return PRODUCTS.find((p) => p.id === id) || null;
  }

  // تبدیل عدد به نمونه‌های دری با جداکننده هزار
  function toFaNum(n) {
    const faDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    return String(n).replace(/\d/g, (d) => faDigits[d]);
  }
  function formatPrice(n) {
    const withSep = Number(n).toLocaleString("en-US");
    return toFaNum(withSep) + " " + (window.SHOP_CONFIG ? window.SHOP_CONFIG.currencyLabel : "افغانی");
  }

  // toast اعلان کوتاه
  function toast(message) {
    let container = document.getElementById("toast-container");
    if (!container) {
      container = document.createElement("div");
      container.id = "toast-container";
      container.className = "toast-container";
      container.setAttribute("role", "status");
      container.setAttribute("aria-live", "polite");
      document.body.appendChild(container);
    }
    const el = document.createElement("div");
    el.className = "toast";
    el.textContent = message;
    container.appendChild(el);
    requestAnimationFrame(() => el.classList.add("show"));
    setTimeout(() => {
      el.classList.remove("show");
      setTimeout(() => el.remove(), 300);
    }, 2600);
  }

  // نمایش همیشگی متن اگر IntersectionObserver در دسترس نباشد
  function revealOnScroll() {
    const els = document.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in-view"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
  }

  // expose
  window.ArghavanStore = {
    getCart,
    addToCart,
    updateQty,
    removeFromCart,
    clearCart,
    cartCount,
    cartSubtotal,
    getWishlist,
    isWished,
    toggleWishlist,
    removeFromWishlist,
    wishlistCount,
    getProductById,
    formatPrice,
    toFaNum,
    toast,
    revealOnScroll,
  };
})();
