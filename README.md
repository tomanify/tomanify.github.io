# Tebaro Persian Docs (formerly Tomanify)

این repository منبع GitHub Pages مستندات فارسی **Tebaro** است. برای حفظ SEO، بک‌لینک‌ها و مسیر ارتقای کاربران قدیمی، آدرس canonical سایت و repository فعلاً همان هویت فنی قدیمی را نگه می‌دارد:

- Documentation: https://tomanify.github.io/
- WordPress.org plugin slug: https://wordpress.org/plugins/tomanify/
- Documentation repository: https://github.com/tomanify/tomanify.github.io
- Public coefficient repository: https://github.com/tebaro-wp/coefficient-index
- Final coefficient file: `coefficient.json`
- Raw coefficient URL: https://raw.githubusercontent.com/tebaro-wp/coefficient-index/main/coefficient.json

## Brand / compatibility

نام عمومی پروژه **Tebaro** است و در دوره انتقال با عبارت **Tebaro — formerly Tomanify** معرفی می‌شود. شناسه فنی `tomanify` در slug، folder، textdomain، option names و `[tomanify_rates]` برای سازگاری حفظ می‌شود.

## Public data policy

Tebaro هیچ فایل عمومی شامل نرخ‌های per-currency یا provider catalogue منتشر نمی‌کند. companion feed فقط یک coefficient بدون واحد و metadata محدود منتشر می‌کند:

```json
{
  "schema_version": 1,
  "coefficient": 1.525058,
  "generated_at": "2026-10-07T00:00:00Z",
  "valid_until": "2026-10-08T00:00:00Z",
  "method": "median_of_currency_ratios_v1",
  "sample_count": 5,
  "status": "ok"
}
```

## Site architecture

Native GitHub Pages/Jekyll shared templates:

```text
_config.yml
_layouts/default.html
_includes/head.html
_includes/header.html
_includes/footer.html
_includes/schema.html
```

All historical public routes are intentionally preserved to protect existing SEO/backlinks while their content has been rewritten for the Tebaro architecture.
