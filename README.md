# Tomanify Persian Docs (GitHub Pages)

این ریپازیتوری وب‌سایت مستندات فارسی افزونه **Tomanify** را روی GitHub Pages منتشر می‌کند:

* وب‌سایت: https://tomanify.github.io/
* افزونه در WordPress.org: https://wordpress.org/plugins/tomanify/

هدف سایت، ارائه‌ی مستندات فارسی، RTL، چندصفحه‌ای و SEO-first برای افزونه Tomanify است؛ با تمرکز روی ووکامرس، نرخ ارز، تبدیل تومان/ریال، محصولات خارجی و بروزرسانی خودکار قیمت‌ها.

---

## معماری فعلی

سایت از پردازش native Jekyll در GitHub Pages استفاده می‌کند تا head/header/footer/schema در همه صفحات تکرار نشوند.

فایل‌های مرکزی:

```text
_config.yml
_layouts/default.html
_includes/head.html
_includes/header.html
_includes/footer.html
_includes/schema.html
```

---

## مسیرهای عمومی فعلی

```text
/
/docs/
/docs/about/
/docs/advanced/
/docs/automation/
/docs/automatic-pricing/
/docs/auto-price-update/
/docs/backup/
/docs/cache-purge/
/docs/faq/
/docs/features/
/docs/free-api/
/docs/install/
/docs/language-switch/
/docs/products/
/docs/quick-start/
/docs/reset-uninstall/
/docs/security/
/docs/shortcode/
/docs/sources/
/docs/troubleshooting/
/404.html
```

همه مسیرهای مستندات با ساختار `folder/index.html` نگهداری می‌شوند تا URLهای تمیز مثل `/docs/install/` بدون rewrite اختصاصی کار کنند.

---

## فایل‌های استاتیک

```text
/assets/style.css
/assets/site.js
/assets/og.webp
/assets/favicon-16x16.png
/assets/favicon-32x32.png
/assets/favicon-192x192.png
/assets/favicon-512x512.png
/assets/favicon.ico
/assets/apple-touch-icon.png
/assets/fonts/
/assets/img/
/site.webmanifest
/sitemap.xml
/robots.txt
/google269621f053186e5f.html
```

---

## Structured Data

همه صفحات از `_includes/schema.html` استفاده می‌کنند. Schema اصلی شامل `WebSite`، `Organization`، `Person`، `ImageObject`، `WebPage` و `BreadcrumbList` است. بسته به نوع صفحه، `Article`، `CollectionPage`، `HowTo`، `FAQPage`، `SoftwareApplication` یا `ItemList` هم اضافه می‌شود.

---