# Shree Balaji Infra - Website

A modern, fast, and fully self-contained website replica for **Shree Balaji Infra** (Pune, Maharashtra), built entirely using clean **HTML5, CSS3, and Vanilla JavaScript**.

Original reference: [https://www.shreebalajiinfra3.co.in/](https://www.shreebalajiinfra3.co.in/)

---

## 🌟 Key Features

- **100% Pure HTML, CSS, and JavaScript**: Zero backend framework dependencies (no PHP, Python, or Ruby required to serve or view).
- **Fully Offline & Self-Contained**:
  - All 300+ product photos, banners, logos, and UI icons are downloaded and hosted locally in `assets/images/`.
  - Font Awesome 4.7 webfonts are bundled locally in `assets/fonts/`.
  - Company product brochure PDF is bundled locally in `assets/docs/`.
  - All 73 pages (Home, About Us, Categories, Individual Products, Quality Certificates, Testimonials, Contact Us, Sitemap, Product Enquiry Modal) are linked with zero broken links.
- **Interactive Multi-Level Mega Navigation**:
  - Responsive dropdowns for all product lines (Roofing Sheets, Curved Sheets, Rib Profiles, PUF Panels, Purlins, Ventilators, Accessories).
  - Animated mobile hamburger drawer toggle for phones and tablets.
- **Dynamic Enquiry Modal & Forms**:
  - Clicking **"Enquiry Now"** or **"Send Enquiry"** on any product opens an interactive quote modal prefilled with that product's name, image, price, and MOQ.
  - Client-side form validation (Full Name, 10-digit mobile number, Email, Quantity, Measurement Unit).
  - Instant submission confirmation and feedback without page reload.
  - Works both in an embedded Fancybox popup and in standalone iframe (`enquiry-form-10019.html`).
- **Interactive Live Search**:
  - Auto-suggest search dropdown with instant product filtering.
  - Direct navigation to relevant product pages upon submitting.
- **Customer Engagement Widgets**:
  - Floating WhatsApp Chat button linking directly to Shree Balaji Infra sales (+91 9511113666).
  - Click-to-call phone buttons (+91 9921693666).
  - Smooth Scroll-to-Top button.
  - Interactive tabbed browsing on product categories.
  - Image lightbox popups for product photos and quality certificates.

---

## 📂 Project Structure

```
Shree_Balaji_Infra/
│
├── index.html                                 # Main homepage
├── about-us.html                               # Company background, founder, certifications
├── products.html                               # Complete product catalog
├── certificates.html                           # ISO & quality compliance certificates
├── testimonials.html                           # Client feedback & testimonials
├── contact-us.html                             # Address, map, email, and contact form
├── sitemap.html                                # Full website sitemap
├── enquiry-form-10019.html                     # Dynamic product quote popup
├── thanks.html                                 # Submission confirmation page
│
├── roofing-sheets.html                         # Category: Roofing Sheets
├── curved-roofing-sheets.html                  # Category: Curved Roofing Sheets
├── rib-profile-sheets.html                     # Category: Rib Profile Sheets
├── puf-wall-panels.html                        # Category: PUF Wall Panels
├── roofing-accessories.html                    # Category: Roofing Accessories
├── color-coated-coils.html                     # Category: Coils & Raw Materials
│
├── [40+ Individual Product Pages]             # Detailed product specification pages
│
├── assets/
│   ├── css/
│   │   ├── catalog_new.css                    # Main design layout & typography
│   │   ├── catalog.css                        # Color schemes, grids, and components
│   │   ├── custom.css                         # Company-specific style tweaks
│   │   ├── font-awesome.min.css               # Font Awesome 4.7 icons
│   │   └── site.css                           # Modals, toasts, floating buttons & enhancements
│   │
│   ├── js/
│   │   ├── catalog_common_new.js              # Core jQuery, tabs, lightbox
│   │   ├── catalog_new.js                     # Mega-menu, mobile drawer, sliders
│   │   ├── jquery.ui.totop.js                 # Back-to-top scroll animation
│   │   └── site.js                            # Quote modal, search auto-suggest, form handling
│   │
│   ├── images/                                # 300+ local optimized images (logo, products, banners)
│   ├── fonts/                                 # FontAwesome webfonts (woff2, woff, ttf)
│   └── docs/                                  # Downloadable company brochure (PDF)
│
├── server.js                                  # Lightweight, zero-dependency Node static server
└── README.md                                  # Documentation
```

---

## 🚀 How to Run Locally

### Option 1: Direct File Opening
Double-click `index.html` in Windows Explorer or open it directly in any browser (Chrome, Edge, Firefox, Safari).

### Option 2: Using the Included Node Server
Run the built-in HTTP server:
```powershell
node server.js
```
Then visit:
```
http://127.0.0.1:8080/
```

### Option 3: Using Any Static Web Server
You can also use Python or any standard web server:
```powershell
# Python 3
python -m http.server 8080

# Or npx serve
npx serve .
```

---

## 🏢 Company Profile Details Included

- **Entity**: Shree Balaji Infra
- **Founder**: Mr. Vijay Madhukar Shinde (Established in 2004)
- **Certifications**: ISO 9001:2005 / ISO 9001:2015
- **GST No**: `27BXIPS1368B1ZE`
- **Location**: Old Palkhi Marga, Uruli Devachi, Pune, Maharashtra - 412308
- **Contact Numbers**: `+91-9921693666` / `+91-8037248672`
- **WhatsApp**: `+91-9511113666`
- **Email**: `sales@sbe3666.com`

