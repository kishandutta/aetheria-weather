# 🌌 Aetheria Weather

[![Live Demo](https://img.shields.io/badge/Live-Demo-emerald?style=for-the-badge&logo=google-chrome&logoColor=white)](http://localhost:8080)
[![License: MIT](https://img.shields.io/badge/License-MIT-teal.svg?style=for-the-badge)](LICENSE)
[![Vanilla JS](https://img.shields.io/badge/Vanilla_JS-ES6+-yellow?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-CDN-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Open-Meteo](https://img.shields.io/badge/Data-Open--Meteo_API-blue?style=for-the-badge)](https://open-meteo.com/)

**Aetheria Weather** is an ultra-aesthetic, responsive, nature-centric real-time weather web application. It combines high-definition natural landscape photography, dynamic day/night atmospheric transitions, and crystal glassmorphism with comprehensive meteorological data.

---

## ✨ Key Features

### 🌄 1. Dynamic Day & Night Scenery
- **Astronomical Precision**: Automatically computes daytime vs. nighttime using live solar angles, local sunrise/sunset benchmarks, and WMO weather codes.
- **Atmospheric Transitions**:
  - **Day**: Sunlit alpine valleys, highland ridges, misty evergreen forests, and rain cascades.
  - **Night**: Dark silhouettes of pine forests and mountains under starry celestial night skies.
- **Dual-Layer Fluid Fade**: Ken-Burns zoom and cross-fade animations eliminate harsh jumps when switching locations or weather states.

### 🎙️ 2. On-Demand Voice Weather Narration (Web Speech API)
- **Interactive Audio Dispatch**: Tap the floating corner microphone button for a natural speech synthesis of local conditions, temperature, humidity, and wind speeds.
- **User-Initiated Only**: Strictly avoids annoying auto-play on load.
- **Visual Feedback**: Features a pulsing emerald aura while speaking and instant tap-to-stop capability.

### 🔍 3. Top-Corner Global Location Search
- **Worldwide Reach**: Search any city, municipality, village, or geographical landmark globally.
- **Debounced Autocomplete**: Real-time 280ms debounced queries powered by Open-Meteo Geocoding.
- **Automatic Geolocation**: Dual-mode detection (GPS `navigator.geolocation` with seamless IP-based fallback) resolves local coordinates on load without manual entry.
- **History Drawer**: Stores recent searches in `localStorage` for one-tap retrieval.

### ⏱️ 4. Synchronized 24-Hour Horizon & 7-Day Forecast
- **Strict Chronological Progression**: Automatically cleans out past hours. Starts immediately with `Now / [Current Hour]` followed strictly by future consecutive hours (`12 AM`, `1 AM`, `2 AM`, etc.).
- **7-Day Ephemeris**: Daily cards with temperature range gradient bars and nature-styled condition icons.

### 💎 5. Precision Glassmorphic Metrics
- **Temperature & Feels-Like**: Instant toggle between `°C` and `°F`.
- **Windflow Compass**: Real-time rotating needle tracking meteorological breeze headings.
- **Nighttime UV Zeroing**: Strictly enforces `0` and `"0 None"` during night hours, and realistic solar risk ratings during daylight.
- **Air Quality Index (AQI)**: Live European/US particulate ratings with color-coded status badges (`Good`, `Fair`, `Moderate`, `Poor`).
- **Surface Barometer & Solar Times**: Atmospheric pressure in `hPa` and exact local Sunrise & Sunset times.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **HTML5** | Semantic structure, accessible layout, responsive viewport configurations. |
| **Tailwind CSS (CDN)** | Utility-first styling, frosted glass filters (`backdrop-blur-xl`), and dark mode palette. |
| **Vanilla JavaScript (ES6+)** | Asynchronous APIs, SpeechSynthesis, Geolocation, DOM state management. |
| **Open-Meteo Weather API** | Global, free, high-resolution hourly and 7-day meteorological forecasts. |
| **Open-Meteo Geocoding** | Rapid worldwide coordinate lookup and reverse geocoding. |
| **BigDataCloud Reverse Geocoding** | Instant IP-to-locality resolver for effortless initial loads. |
| **Lucide Icons** | Minimalist, vector-crisp atmospheric weather icons. |
| **Unsplash Photography** | Curated high-resolution natural landscape photography. |

---

## 🚀 Getting Started

### Prerequisites
You only need a modern web browser (Google Chrome, Mozilla Firefox, Microsoft Edge, or Safari). No package managers or build steps required.

### Local Installation & Execution

1. **Clone the repository**:
   ```bash
   git clone https://github.com/kishandutta/aetheria-weather.git
   cd aetheria-weather
   ```

2. **Run with any static local server**:

   *Using Python 3:*
   ```bash
   python -m http.server 8080
   ```

   *Using Node.js (`npx`):*
   ```bash
   npx serve .
   ```

   *Or simply double-click `index.html` to open it directly in your browser.*

3. **Open in Browser**:
   Navigate to `http://localhost:8080` (or the port displayed in your terminal).

---

## 📂 Project Structure

```text
aetheria-weather/
├── index.html       # Semantic layout, glassmorphic panels, and CDN linkages
├── style.css        # Ken-Burns drift animations, scrollbar styling, pulse glow
├── app.js           # Modular ES6+ state controller, APIs, speech synthesis
└── README.md        # Documentation and setup guide
```

---

## 📄 License
This project is licensed under the [MIT License](LICENSE).
