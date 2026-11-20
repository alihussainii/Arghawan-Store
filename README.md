# فروشگاه آنلاین ارغوان — قالب فروشگاه ایستا

A complete, polished, responsive e-commerce storefront demo for a small Afghan business, built with **plain HTML5, CSS3, and vanilla JavaScript** — no frameworks, no build step, no backend.

Nova Creatives can copy this folder, edit a few settings files, and send it to a prospective customer as a working storefront demo.

---

## ساختار پروژه / Project structure

```
index.html          صفحه‌ی اصلی (هیرو، دسته‌ها، محصولات منتخب)
shop.html           فروشگاه با فیلتر، جستجو و مرتب‌سازی
product.html        جزئیات محصول (گالری، واریانت، افزودن به سبد)
wishlist.html       علاقه‌مندی‌ها
cart.html           سبد خرید + انتخاب منطقه‌ی تحویل
checkout.html       تکمیل سفارش + ارسال واتساپ
about.html          درباره ما
contact.html        تماس
faq.html            سوالات متداول و سیاست‌ها

assets/css/styles.css    استایل اصلی (RTL، ریسپانسیو، انیمیشن)
assets/js/config.js      تنظیمات فروشگاه (برند، تماس، تحویل، شبکه‌ها)
assets/js/products.js    کاتالوگ محصولات نمونه
assets/js/store.js       سبد خرید و علاقه‌مندی‌ها (localStorage)
assets/js/app.js         سربرگ، فوتر، آیکن‌ها، جستجو، منوی موبایل
assets/images/           تصاویر محصولات (SVG)، دسته‌ها، برند
README.md                این فایل
```

---

## شروع سریع / Quick start

این یک سایت ایستا است. هیچ build لازم نیست.

- **لوکال:** پوشه را روی یک سرور ایستای ساده اجرا کنید (مثلاً `npx serve` یا Live Server در VS Code).
- **GitHub Pages:** همه فایل‌ها را به یک ریپو بفرستید و GitHub Pages را فعال کنید. چون همه مسیرها نسبی هستند، در زیرمسیر پروژه هم کار می‌کند.
- هر میزبانی ایستا (Netlify, Vercel, Cloudflare Pages) هم کار می‌کند.

---

## شخصی‌سازی / Customization

### ۱. تغییر برند و اطلاعات تماس

فایل `assets/js/config.js` را ویرایش کنید:

- `brandName` — نام فروشگاه
- `phone`, `whatsapp`, `email`, `address` — اطلاعات تماس
- `hours` — ساعات کاری
- `social` — لینک شبکه‌های اجتماعی (برای مخفی کردن، مقدار را خالی `""` بگذارید)
- `deliveryZones` — مناطق تحویل و هزینه‌ها
- `freeShippingThreshold` — آستانه‌ی ارسال رایگان (۰ = غیرفعال)

### ۲. افزودن و ویرایش محصولات

فایل `assets/js/products.js` را ویرایش کنید. هر محصول این فیلدها را دارد:

```js
{
  id: "شناسه‌ی یکتا",
  name: "نام محصول",
  category: "زیورآلات | کیف و اکسسوری | لوازم خانه | بسته‌های هدیه",
  price: 1250,            // به افغانی
  previousPrice: 1500,    // اختیاری — قیمت قبل، برای نمایش تخفیف
  stock: 8,               // 0 = ناموجود
  featured: true,         // نمایش در صفحه‌ی اصلی
  isNew: true,            // نمایش در تازه‌ها
  images: ["img1.svg", "img2.svg"],  // در assets/images/products/
  alt: "متن جایگزین تصویر",
  short: "توضیح کوتاه",
  full: "توضیح کامل",
  variants: [             // اختیاری
    { name: "رنگ", options: ["قرمز", "آبی"] }
  ],
}
```

تصاویر محصول را در پوشه‌ی `assets/images/products/` قرار دهید. می‌توانید از SVG یا هر فرمت دیگری (JPG/PNG) استفاده کنید.

### ۳. تنظیم واتساپ

در `assets/js/config.js` مقدار `whatsapp` را با کد کشور وارد کنید، مثلاً `+93 70 123 4567`. وقتی خریدار روی «ارسال سفارش از طریق واتساپ» کلیک می‌کند، پیام آماده‌شده باز می‌شود.

اگر `whatsapp` خالی باشد، صفحه‌ی پرداخت به‌جای دکمه‌ی واتساپ، متن سفارش را با یک دکمه‌ی «کپی» نشان می‌دهد.

### ۴. تغییر هزینه‌های تحویل

در `assets/js/config.js` آرایه‌ی `deliveryZones` را ویرایش کنید. هر منطقه دارای `id`, `name`, `fee` (به افغانی) و `eta` (زمان تحویل) است.

### ۵. تغییر رنگ‌ها و فونت

متغیرهای رنگ در بالای `assets/css/styles.css` (بخش `:root`) قرار دارند. فونت Vazirmatn از CDN بارگذاری می‌شود.

---

## ویژگی‌ها / Features

- تمام متن‌ها به دری افغانستانی، RTL کامل
- اعداد و قیمت‌ها به نمونه‌های دری (۱٬۲۵۰ افغانی)
- سبد خرید و علاقه‌مندی‌ها در localStorage (باقی می‌مانند بعد از reload)
- جستجو، فیلتر (دسته، قیمت، موجودی) و مرتب‌سازی در فروشگاه
- جزئیات محصول با گالری، واریانت‌ها و محصولات مرتبط
- پرداخت هنگام تحویل + ارسال سفارش از طریق واتساپ
- انیمیشن‌های ظریف، افکت hover، و احترام به `prefers-reduced-motion`
- ریسپانسیو از موبایل تا دسکتاپ، بدون اسکرول افقی

---

## نکته

این یک قالب نمونه است. قبل از راه‌اندازی واقعی، محصولات، قیمت‌ها، اطلاعات تماس و مناطق تحویل را با اطلاعات واقعی فروشگاه جایگزین کنید.
