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

## ساختار پوشه‌ها و URLها (Clean URLs)

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

## توسعه و تغییرات آینده (Roadmap)

1. افزایش عمق محتوا در هر صفحه (اسکرین‌شات‌های بیشتر، مثال‌ها، Edge caseها)
2. افزودن Docs Search سمت کلاینت (بدون بک‌اند)
3. ساخت صفحات SEO جدید برای کوئری‌های فارسی (هرکدام در `/docs/<topic>/index.html`)
4. حفظ UI فعلی به عنوان baseline و بهبودها فقط در همین چارچوب انجام شوند (نه جایگزینی کامل)

---

## مشارکت (Contributing)

اگر می‌خواهید در این پروژه مشارکت داشته باشید به من پیام دهید.
---

## لایسنس

* نام و دارایی‌های برند Tomanify متعلق به پروژه Tomanify است.

## معماری جدید برای حذف تکرار هدر و فوتر

این نسخه برای GitHub Pages به ساختار **Jekyll-compatible** تبدیل شده تا تگ‌های ثابت `<head>` و اجزای تکراری هدر/فوتر فقط یک‌بار نگهداری شوند:

```text
/_layouts/default.html      → اسکلت اصلی تمام صفحات
/_includes/head.html        → پارامترهای ثابت head
/_includes/header.html      → هدر و ناوبری مشترک
/_includes/footer.html      → فوتر مشترک
/_includes/schema.html      → خروجی JSON-LD بر اساس متادیتای هر صفحه
```

هر صفحه فقط متادیتای متغیر خودش را در front matter نگه می‌دارد؛ مثل:
- title
- description
- keywords
- robots
- og_type
- schema_type
- breadcrumbs

### چرا فایل‌ها همچنان `index.html` مانده‌اند؟

برای **GitHub Pages** و حفظ **clean URL**‌ها، ساختار پوشه‌ای استانداردتر و سازگارتر است:

- `/docs/install/index.html` → آدرس نهایی: `/docs/install/`
- `/docs/sources/index.html` → آدرس نهایی: `/docs/sources/`

تغییر همه فایل‌ها به `install.html` یا `sources.html` باعث از بین رفتن همین URLهای تمیز می‌شود، بنابراین ساختار `folder/index.html` عمداً حفظ شده است.

