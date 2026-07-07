# Kruthick M | Professional Portfolio Website

A premium, recruiter-focused developer portfolio website built using modern frontend technologies. Redesigned to reflect the minimalism, typography, and visual balance of modern AI product and SaaS sites (inspired by Stripe, OpenAI, Linear, and Vercel).

---

## 🚀 Live Demos & Deployment
This website is optimized for one-click deployment on **Vercel** or **GitHub Pages**. It includes client-side fallback routes (`vercel.json`) to prevent router redirection errors.

* **Development Server**: `http://localhost:5173/`
* **Vite Production Bundler**: Outputs optimized static assets to `/dist`

---

## 🛠️ Technology Stack
* **Framework**: React 18+ (with Vite for fast compilation & HMR)
* **Styling**: Tailwind CSS
* **Animations**: Framer Motion
* **Iconography**: Lucide React
* **Typography**: Google Fonts (Sora for headings, Inter for body copy, JetBrains Mono for code blocks)
* **SEO**: Structured JSON-LD Person Schema, Meta Open Graph (OG), and Twitter Cards

---

## ✨ Features
* **Typing Animation**: An animated typewriter cycling through roles (Full Stack Developer, Java & Spring Boot Developer, AI Product Builder).
* **Circular Portfolio Frame**: A clean 1.5px gradient-bordered frame for the professional photo with subtle shadow and zero orbital gaming glows.
* **Academic Projects**: Detailed list of systems (*Attendance Management System* and *Medifind*) with expanding architecture summaries.
* **Experience & Certifications timeline**: Professional layout tracking Crescent Info Tech internships and cloud foundations certifications.
* **Integrated PDF Resume**: Downloadable and viewable PDF links mapped to the user's real resume asset.
* **Error Boundaries**: Client-side error boundaries with premium custom fallback displays.
* **Performance Optimizations**: Asset caching, CSS minify checks, and PWA capabilities.

---

## 📁 Directory Structure
```text
PortPolio/
├── public/                 # Static assets (Favicons, PDF resume, PWAs)
│   ├── favicon.svg         # Monogram SVG icon
│   ├── manifest.json       # Web app manifest
│   ├── sitemap.xml         # SEO sitemap
│   └── robots.txt          # Crawler definitions
├── src/
│   ├── components/         # Reusable React UI sections
│   │   ├── Navbar.jsx      # Transparency-scrolling sticky navbar
│   │   ├── Hero.jsx        # Redesigned floating-card hero layout
│   │   ├── About.jsx       # Biography and academic CGPA cards
│   │   ├── Skills.jsx      # Categorized skill nodes with embedded tags
│   │   ├── Projects.jsx    # Expandable detail sheets with SVG drawings
│   │   ├── Experience.jsx  # Internship chronological timeline
│   │   ├── Certifications.jsx # Certificate credentials cards
│   │   ├── Resume.jsx      # CV preview sheets
│   │   ├── Contact.jsx     # Social card grids and validated form
│   │   └── ErrorBoundary.jsx # Friendly crash recovery interface
│   ├── App.jsx             # Main router spy container
│   ├── main.jsx            # DOM mounting entrypoint
│   └── index.css           # Custom scrollbars and styling rules
├── tailwind.config.js      # Tailwind configurations (Sora, JetBrains Mono font mapping)
├── vercel.json             # Vercel routing rules & cache configs
└── package.json            # Scripts & dependencies
```

---

## 📦 Getting Started

### 1. Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed.

### 2. Installation
Clone the repository and install dependencies:
```bash
npm install
```

### 3. Running Dev Server
Launch Vite's development environment with hot reloading:
```bash
npm run dev
```

### 4. Compiling for Production
Build and optimize static assets:
```bash
npm run build
```
You can review the local compilation output using:
```bash
npm run preview
```

---

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
