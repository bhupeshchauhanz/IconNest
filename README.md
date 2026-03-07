# IconNest — Premium Icon Library 🪺

> A curated, browser-based icon gallery featuring **2,900+ premium icons** across four collections. Browse, search, preview, and download individual icons or entire style packs — all in one place.

---

## ✨ Live Preview

Open `index.html` directly in your browser.

For the best experience (required for bulk ZIP downloads to work), open it via **VS Code Live Server** instead of double-clicking the file.

---

## 📦 Collections

| Collection | Count | Formats | Styles |
|---|---|---|---|
| **Iconly** | 140+ UI icons | SVG | Curved · Regular · Sharp × Light · Outline · Bold · Broken · Bulk · Two-tone |
| **Glassy Icons** | 51 icons | SVG | Glass / frosted-glass aesthetic |
| **3D Shape Icons** | 61 shapes × 2 angles | PNG (700–1000 px) | 6 Palette Color · Clay · Dark Material |
| **Weather Icons** | 40+ conditions | SVG & PNG | Animated SVG · Static SVG · 3D PNG |

**Total: 2,900+ icons — 2,500+ SVG vectors**

---

## 🗂️ Project Structure

```
ICONS/
├── index.html          # Main single-page app
├── style.css           # All styling (~43 KB)
├── app.js              # All JavaScript logic (~46 KB)
├── favicon.svg         # Site favicon
├── _data/              # Icon name lists (txt files)
│   ├── icons_list.txt
│   ├── weather_animated.txt
│   ├── weather_png.txt
│   └── weather_static.txt
└── assets/
    ├── Iconly/                          # SVG UI icons
    │   ├── Curved/
    │   │   ├── Light/
    │   │   ├── Outline/
    │   │   ├── Bold/
    │   │   ├── Broken/
    │   │   ├── Bulk/
    │   │   └── Two-tone/
    │   ├── Regular/  (same sub-structure)
    │   └── Sharp/    (same sub-structure)
    ├── Glassy Icons/                    # Glass-style SVGs
    ├── Iconly Pro, 3D shape icons/      # 3D PNGs
    │   ├── Shapes 6 Palette color/
    │   ├── Shapes Clay/
    │   └── Shapes Dark material/
    ├── Weather icon/                    # Weather icons
    │   ├── animated_icons/
    │   ├── static_icons/
    │   └── icons/                      # 3D PNG weather
    └── zips/                           # Pre-built ZIP packs (23 files)
        ├── Iconly-Curved-Light.zip
        ├── Iconly-Regular-Bold.zip
        ├── Shapes-6-Palette.zip
        ├── Glassy-Icons.zip
        ├── Weather-Icons.zip
        └── …(23 total)
```

---

## 🚀 Features

### 🔍 Search
- **Universal search bar** in the hero section — searches all four collections simultaneously
- **Per-section search** inputs for focused filtering within a single collection
- Live results with empty-state feedback

### 📄 Pagination
- Icons load in pages of **20** by default
- **"Load More"** button progressively reveals the next page

### 🎛️ Style Switcher
- **Iconly:** Switch curvature (Curved / Regular / Sharp) and weight (Light / Outline / Bold / Broken / Bulk / Two-tone) independently
- **3D Shapes:** Switch rendering style (Palette / Clay / Dark) and view angle (Angle 1 / Angle 2 / Both)
- **Weather:** Switch between Animated SVG, Static SVG, and 3D PNG

### ⬇️ Downloads
| Action | How |
|---|---|
| **Single icon** | Click the ↓ button on any card; downloads via XHR → Fetch → direct link fallback |
| **Bulk style pack** | Click "Download Style" / "Download All" to get the matching pre-built ZIP |

> **Note:** Single-file downloads work best when opened via **VS Code Live Server**. On the `file://` protocol, SVG files may open in a browser tab instead of downloading.

### 🔎 Lightbox
- Click any **3D Shape** card to open a full-size preview panel
- Switch between **Angle 1** and **Angle 2** thumbnails inside the lightbox
- Download the selected angle directly from the panel

### 🎨 UI Details
- Animated 3D-tilt hover effect on icon cards (via vanilla JS perspective transforms)
- Floating hero cards with looping CSS animations
- Sticky navbar with scroll-based glass styling
- Toast notifications for all download actions
- Scroll-to-top button

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 (single `index.html`) |
| Styles | Vanilla CSS (`style.css`) |
| Logic | Vanilla JavaScript ES6+ (`app.js`) |
| ZIP generation | [JSZip 3.10](https://stuk.github.io/jszip/) (CDN) |

No build tools, no frameworks, no dependencies beyond JSZip.

---

## 🧩 How It Works

`app.js` manages four independent grids. All icon metadata is stored as JavaScript arrays hard-coded in the file:

- `SHAPES[]` — 61 shape objects, each with filename keys for all 3 styles × 2 angles
- `WEATHER_ICONS[]` — Weather condition objects with id, name, and tag
- `GLASSY_ICONS[]` — 51 glassy icon objects with filename references
- `ICONLY_COMMON[]` — Flat array of 140+ icon names (reused across curvature/style combos)

On user interaction (tab switch, search input, load-more), the relevant render function re-builds the grid's `innerHTML` from the filtered/paginated slice of its data array.

### Download Strategy

```
Single file request
  └─► XHR (blob) ──success──► saveBlob()
          │
          └─► fetch (blob) ──success──► saveBlob()
                  │
                  └─► direct <a> link fallback
```

Bulk downloads link directly to pre-built ZIPs in `assets/zips/`.

---

## 🖥️ Running Locally

This is a **pure static site** — no build step, no server required.

| Method | Notes |
|---|---|
| Double-click `index.html` | Works for browsing; single-file downloads may be limited on `file://` |
| VS Code **Live Server** | Recommended — resolves all download & CORS issues |

---

## 📁 Pre-built ZIP Packs

All 23 ZIPs live in `assets/zips/`:

**Iconly** (18 ZIPs — one per curvature × style combination):  
`Iconly-{Curved|Regular|Sharp}-{Light|Outline|Bold|Broken|Bulk|Two-tone}.zip`

**3D Shapes** (3 ZIPs):  
`Shapes-6-Palette.zip` · `Shapes-Clay.zip` · `Shapes-Dark-Material.zip`

**Other** (2 ZIPs):  
`Glassy-Icons.zip` · `Weather-Icons.zip`

---

## 🔗 Credits & Contact

| | |
|---|---|
| **Author** | Bhupesh Chauhan |
| **LinkedIn** | [bhupeshchauhanz](https://www.linkedin.com/in/bhupeshchauhanz) |
| **GitHub** | [bhupeshchauhanz](https://github.com/bhupeshchauhanz) |
| **Support** | [buymeacoffee.com/bhupeshchauhanz](https://buymeacoffee.com/bhupeshchauhanz) |
| **Email** | hello@iconnest.dev |

---

© 2026 IconNest. Built with ❤️ for the community.
