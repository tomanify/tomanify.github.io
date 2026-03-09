# Tomanify Persian Docs (GitHub Pages)

این ریپازیتوری وب‌سایت مستندات فارسی افزونه **Tomanify** را میزبانی می‌کند و روی **GitHub Pages** منتشر می‌شود:

* وب‌سایت: https://tomanify.github.io/
* افزونه در WordPress.org: https://wordpress.org/plugins/tomanify/

هدف این سایت، ارائه‌ی **مستندات فارسی**، **RTL**، **چندصفحه‌ای** و **SEO-first** برای افزونه Tomanify است؛ به‌طوری که هم برای کاربران واقعی قدم‌به‌قدم قابل استفاده باشد و هم برای کوئری‌های فارسی مرتبط با ووکامرس/نرخ ارز/تومان-ریال رتبه بگیرد.

---

## ویژگی‌های کلیدی سایت

* تک‌زبانه فارسی (fa-IR) و راست‌به‌چپ (RTL)
* URLهای تمیز و دایرکتوری‌استایل (هر صفحه یک پوشه با `index.html`)
* طراحی ریسپانسیو برای موبایل/دسکتاپ
* هدر Glassy/Sticky با CTA اصلی «Download from WP.org»
* منوی دسکتاپ + منوی کشویی موبایل (Drawer)
* صفحات Docs با چیدمان دو ستونه (Sidebar TOC + محتوای اصلی)
* بلاک‌های محتوایی کارت‌محور، نوت‌ها، کدبلاک، FAQ آکاردئونی (در صفحات لازم)
* متادیتای کامل SEO در هر صفحه (title/description/keywords/OG/Twitter/canonical)
* Structured Data (JSON-LD) در همه صفحات مطابق نوع محتوا (Home/HowTo/FAQ/Article/CollectionPage)

---

## ساختار پوشه‌ها و URLها)

```
/index.html                          → صفحه اصلی (Landing)
/docs/index.html                     → صفحه فهرست Docs
/docs/quick-start/index.html         → شروع سریع
/docs/install/index.html             → نصب
/docs/sources/index.html             → منابع نرخ
/docs/products/index.html            → محصولات خارجی
/docs/shortcode/index.html           → شورتکد
/docs/troubleshooting/index.html     → رفع اشکال
/docs/faq/index.html                 → سوالات پرتکرار
/docs/free-api/index.html            → API رایگان نرخ ارز
/404.html                            → صفحه 404

/assets/style.css                    → استایل سراسری
/assets/site.js                      → JS حداقلی (منوی موبایل و تعاملات کوچک)
/assets/og.webp                      → تصویر OpenGraph (1200×630)
/assets/favicon-16x16.png
/assets/favicon-32x32.png
/assets/fonts/                       → فونت‌های لوکال (woff2)
/assets/img/                         → تصاویر آموزشی (بنر، آیکن، اسکرین‌شات‌ها)

sitemap.xml
robots.txt

---

### انواع Structured Data

* Home: `Article` یا `WebPage`
* Docs index: `CollectionPage`
* Quick Start: `HowTo` (با stepها)
* FAQ / Troubleshooting: `FAQPage`
* سایر صفحات Docs: `Article`

---

## مشارکت (Contributing)

اگر می‌خواهید در این پروژه مشارکت داشته باشید به من پیام دهید.
---

## لایسنس

* نام و دارایی‌های برند Tomanify متعلق به پروژه Tomanify است.
