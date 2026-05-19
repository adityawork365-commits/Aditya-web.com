# 🌐 Aditya.dev | Portfolio & AI Engineer Showcase

Welcome to the repository of my personal portfolio website. This production-ready web application serves as a comprehensive showcase of my skills, industry experience, certifications, and engineered projects as a **Full Stack AI Developer**.

The site is built with a highly optimized, type-safe frontend architecture designed for instant rendering and seamless user navigation.

---

## 🛠️ Core Tech Stack & Architecture

### **Frontend & Core Routing**
- **Framework:** React.js (bundled with **Vite** for blazing fast performance)
- **Language:** TypeScript (Strictly typed architecture)
- **Routing Engine:** `@tanstack/react-router` (Type-safe, file-based routing)
- **State Management:** `@tanstack/react-query` (Optimized data fetching & caching)
- **Styling:** Tailwind CSS & Shadcn UI components

### **Backend, Database & Deployment**
- **Backend-as-a-Service:** Supabase (Handles authentication, edge functions, and backend logic)
- **Database:** PostgreSQL (via Supabase)
- **Hosting/Infrastructure:** Cloudflare Workers/Pages (Configured via `wrangler.jsonc`)

---

## 🧠 Technical Skill Set

| Category | Technologies / Tools |
| :--- | :--- |
| **Frontend** | HTML5, CSS3, JavaScript (ES6+), React.js, Tailwind CSS, Shadcn UI |
| **Backend & APIs** | Node.js, Express.js, Python, Flask, RESTful APIs |
| **Databases** | MongoDB, PostgreSQL (Supabase) |
| **AI & Automation** | Prompt Engineering, RAG Systems, LLM Basics, LangChain, LangGraph, LangSmith, LangFlow, YOLOv8, OpenCV, NLP, Sentence Transformers, n8n Workflow Automation |
| **Developer Tools** | Git, GitHub, VS Code, Postman, Bun/NPM |

---

## 💼 Work Experience

### 🔹 **AI Developer Intern** (6 Months)
**Blue Planet Infosolutions (India) Private Limited**
- Implemented core workflow automation sequences using tools like n8n.
- Developed backend API integrations and set up robust Alert API tracking systems.
- Executed AI-assisted development paradigms and modern AI framework implementations.

### 🔹 **Web Development Intern** (3 Months)
**UpToSkill**
- Built responsive UI components using core frontend web technologies.
- Managed modern web project layouts and assisted in dynamic client-side interface implementations.

---

## 🚀 Featured AI & Web Projects

### 1. **Resume Hub — AI-Powered Resume Screening System**
An intelligent recruitment platform that ranks candidates dynamically using semantic matching.
- **Features:** Sentence-BERT semantic similarity ranking, OCR document parsing (PDF, DOCX, Images), CSV export, candidate skill extraction, and explainable AI scoring dashboard.
- **Stack:** Python, Flask, React.js, Sentence Transformers, NLP, OCR APIs.

### 2. **Eco-Sort AI — Real-Time Intelligent Waste Classifier**
A computer vision application that processes live video streams to automate waste disposal classification.
- **Features:** Real-time object detection, automated waste categorization, instant disposal/hazard guidance, and multi-camera hardware support.
- **Stack:** Python, YOLOv8, OpenCV, Streamlit.

---

## 🎓 Education & Credentials

### **Education**
- **Degree:** Bachelor of Computer Applications (BCA)
- **Institution:** Jagran Lakecity University (2023 – 2026)
- **Academic Standing:** CGPA: 7.1

### **Certifications**
- 🏆 **Claude Code in Action** — Anthropic
- 🏆 **Gen AI Engineering Mastermind** — Outskill
- 🏆 **Frontend Development** — OneRoadmap
- 🏆 **Cisco Networking Basics** — Coursera
- 🏆 **Knowledge Management** — NPTEL
- 🏆 **IT for Business Success** — HP LIFE

---

## 📁 Repository Structure

```text
├── .interface/        # Component schemas, UI configurations, and design tokens
├── public/            # Static assets (Resume PDF, vectors, portfolio images)
├── src/
│   ├── assets/        # Global stylesheets and branding vector elements
│   ├── components/    # Reusable modular UI building blocks (Shadcn/Custom)
│   ├── routes/        # App routing hierarchy mapped by TanStack Router
│   ├── router.tsx     # Core TanStack routing configuration file
│   └── server.ts      # Local Node/Express server runtime script
├── supabase/          # Database migrations, configurations, and edge schemas
├── package.json       # Project scripts, engines, and production dependencies
└── wrangler.jsonc     # Cloudflare deployment settings