"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight, Download, Github, Linkedin, Instagram, ExternalLink, Menu, X } from "lucide-react";
import ThemeToggle from "../components/ThemeToggle";
import { GradientDots } from "../../components/ui/gradient-dots";

// ─── DATA — fill these in ─────────────────────────────────────────────────────

const PROFILE = {
  name: "Aarohi Bhanuj Chowdhary",
  title: "Full-Stack Engineer | ML + AI Systems",
  university: "Netaji Subhas University of Technology",
  bio: "Full-stack engineering student with production experience across ML pipelines, data-driven web platforms, and real-world client deployments, with a focus on reliability, performance, and end-to-end ownership.",
  email: "bhanujchowdhary@gmail.com",
  resumeUrl: "/Resume-Aarohi.pdf",
  heroImage: "/images/aigen.png",
  avatar: "/images/profile.jpg",
  socials: {
    github: "https://github.com/bhanujongit4/",
    linkedin: "https://www.linkedin.com/in/aarohi-bhanuj-chowdhary-43636420a",
    instagram: "https://www.instagram.com/bhanujchowdhary?igsh=Ynh6anEzMWpycm0=",
  },
};


const TECH_PROJECTS = [
  {
    id: 1,
    title: "IN$JAM - AI Stock Intelligence Terminal",
    tags: ["TypeScript", "FastAPI", "Docker"],
    description: "Production-grade stock intelligence terminal with ML-driven signal pipelines, 21 technical indicators, JWT auth, and Neon/Postgres-backed watchlists.",
    image: "/images/engineering/adisasterousstockapp.png",
    live: "https://adisasterousstockapp.vercel.app/",
    year: "2026",
    accent: "#8B5CF6",
  },
  {
    id: 2,
    title: "DebSoc NSIT Platform",
    tags: ["Next.js", "Supabase", "SEO"],
    description: "Built a high-conversion website and admin suite with Lighthouse 96 (Best Practices) and 95 (SEO), supporting lead generation and event operations.",
    image: "/images/engineering/debsoc.png",
    live: "https://debsocnsut.in",
    year: "2025",
    accent: "#10B981",
  },
  {
    id: 3,
    title: "Emberline",
    tags: ["RAG", "Pinecone", "Ollama"],
    description: "AI-driven RAG app for querying PDFs, analyzing GitHub repos, summarizing commit diffs, and validating code changes against stored engineering standards.",
    image: "/images/engineering/ragbutuseful.png",
    live: "https://ragbutuseful.vercel.app/",
    year: "2026",
    accent: "#F97316",
  },
];

const FREELANCE_PROJECTS = [
  {
    id: 1,
    title: "Good Morning India Holidays",
    client: "Good Morning India Holidays",
    tags: ["Client Work", "Design", "Deployment"],
    description: "Delivered a full-stack travel booking platform with an admin panel, inquiry pipeline, and SEO-optimized SSR pages for a Delhi-based tour operator.",
    deliverables: ["Booking platform", "Admin CMS", "SEO-ready SSR pages"],
    image: "/images/freelance/goodmorningindia.png",
    live: "https://www.goodmorningindiaholidays.com/",
    year: "2025",
    status: "Delivered",
    accent: "#F59E0B",
  },
  {
    id: 2,
    title: "Turning Point",
    client: "Turning Point",
    tags: ["Next.js", "Branding", "UI/UX"],
    description: "Architected the institute web platform using Next.js, improving Core Web Vitals by 20 percent via SSR, asset minification, and image optimization.",
    deliverables: ["SSR architecture", "Performance optimization", "Production deployment"],
    image: "/images/freelance/turningpoint.png",
    live: "https://turningpointeducation.in",
    year: "2026",
    status: "Delivered",
    accent: "#3B82F6",
  },
  {
    id: 3,
    title: "Vista Vision Productions",
    client: "Vista Vision Productions",
    tags: ["Client Work", "Branding", "Frontend"],
    description: "Client-facing web delivery focused on visual branding, clean UX structure, and deployment-ready implementation.",
    deliverables: ["Brand-aligned UI", "Responsive frontend", "Deployment setup"],
    image: "/images/freelance/vistavissions.png",
    live: "https://vistavisionproductions.vercel.app",
    year: "2026",
    status: "Ongoing",
    accent: "#10B981",
  },
];


// --- COMPONENT ---

export default function Portfolio() {
  const [tab, setTab] = useState<"tech" | "freelance">("freelance");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="pf-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

        :root {
          --yellow: #F59E0B;
          --yellow-bg: #FFFBEB;
          --yellow-border: rgba(245,158,11,0.2);
          --black: #0A0A0A;
          --gray-900: #111;
          --gray-700: #3D3D3D;
          --gray-500: #6B6B6B;
          --gray-300: #C4C4C4;
          --gray-100: #F2F2F2;
          --gray-50: #FAFAFA;
          --white: #FFFFFF;
          --border: rgba(0,0,0,0.08);
          --border-strong: rgba(0,0,0,0.13);
          --r: 10px;
          --r-sm: 7px;
        }

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .pf-root {
          font-family: 'DM Sans', sans-serif;
          background: var(--white);
          color: var(--black);
          -webkit-font-smoothing: antialiased;
          overflow-x: hidden;
        }

        /* NAV */
        .pf-nav {
          position: fixed; top: 0; left: 0; right: 0;
          z-index: 100;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 40px; height: 64px;
          transition: background .3s, box-shadow .3s;
        }
        .pf-nav.on {
          background: rgba(255,255,255,0.96);
          backdrop-filter: blur(12px);
          box-shadow: 0 1px 0 var(--border);
        }
        .pf-logo {
          font-family: 'Syne', sans-serif; font-weight: 800; font-size: 17px;
          letter-spacing: -.4px; color: var(--black); text-decoration: none;
          display: flex; align-items: center; gap: 7px;
        }
        .pf-logo-dot { width: 8px; height: 8px; background: #22c55e; border-radius: 50%; }
        .pf-nav-links { display: flex; gap: 28px; list-style: none; }
        .pf-nav-links span {
          font-size: 14px; color: var(--gray-700); cursor: pointer;
          transition: color .2s;
        }
        .pf-nav-links span:hover { color: var(--black); }
        .pf-nav-right { display: flex; align-items: center; gap: 10px; }
        .pf-theme-toggle button {
          border: 1.5px solid var(--border);
          transition: all .2s;
        }
        .pf-theme-toggle button:hover {
          transform: translateY(-1px);
          border-color: var(--border-strong);
        }
        .pf-btn {
          font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 500;
          padding: 8px 18px; border-radius: var(--r-sm); cursor: pointer;
          display: inline-flex; align-items: center; gap: 6px;
          text-decoration: none; border: none; transition: all .2s;
        }
        .pf-btn-dark { background: var(--black); color: var(--white); }
        .pf-btn-dark:hover { background: var(--gray-900); transform: translateY(-1px); box-shadow: 0 4px 14px rgba(0,0,0,.15); }
        .pf-btn-outline { background: transparent; color: var(--black); border: 1.5px solid var(--border-strong); }
        .pf-btn-outline:hover { border-color: var(--gray-300); transform: translateY(-1px); }
        .pf-btn-yellow { background: var(--yellow); color: var(--black); }
        .pf-btn-yellow:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(245,158,11,.3); }
        .pf-hamburger { display: none; background: none; border: none; cursor: pointer; padding: 4px; color: var(--gray-700); }

        /* MOBILE MENU */
        .pf-mobile-menu {
          position: fixed; inset: 0; background: white; z-index: 99;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          gap: 28px; animation: fadeIn .2s ease;
        }
        .pf-mobile-menu span {
          font-family: 'Syne', sans-serif; font-size: 26px; font-weight: 700;
          color: var(--black); cursor: pointer;
        }
        .pf-mobile-menu span:hover { color: var(--yellow); }
        .pf-close-btn {
          position: absolute; top: 18px; right: 20px;
          background: none; border: none; cursor: pointer; color: var(--gray-700);
        }

        /* HERO */
        .pf-hero {
          min-height: 100vh; padding: 130px 40px 80px;
          display: flex; align-items: center; justify-content: center;
          position: relative; overflow: hidden;
        }
        .pf-hero-bg {
          position: absolute; inset: 0;
          /* ↓ drop in your bg image here */
          /* background-image: url('/your-hero-bg.jpg'); background-size: cover; background-position: center; */
          background:
            radial-gradient(ellipse 1120px 760px at 50% -120px, rgba(245,158,11,.20) 0%, transparent 82%),
            var(--white);
        }
        .pf-hero-layout {
          width: min(1280px, 100%);
          display: grid;
          grid-template-columns: minmax(280px, 1fr) minmax(360px, 520px) minmax(240px, 1fr);
          align-items: start;
          gap: 36px;
          position: relative;
          z-index: 1;
        }
        .pf-hero-left {
          grid-column: 1;
          text-align: left;
          max-width: 460px;
          justify-self: start;
          padding-top: 46px;
        }
        .pf-hero-center {
          grid-column: 2;
          text-align: center;
          justify-self: center;
        }
        .pf-hero-right {
          grid-column: 3;
          display: flex;
          justify-content: flex-start;
          justify-self: end;
          width: 100%;
          max-width: 320px;
          padding-top: 46px;
        }
        .pf-hero-image-wrap {
          width: min(500px, 100%);
          aspect-ratio: 1 / 1;
          justify-self: center;
          border-radius: 0;
          overflow: visible;
          border: none;
          outline: none;
          box-shadow: none;
          background: transparent;
        }
        .pf-hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: drop-shadow(0 22px 36px rgba(0,0,0,.16));
        }
        .pf-hero-email {
          font-family: 'Syne', sans-serif;
          font-size: clamp(18px, 2.2vw, 28px);
          font-weight: 700;
          letter-spacing: -0.3px;
          line-height: 1.15;
          color: var(--black);
          margin-bottom: 16px;
        }
        .pf-hero-name {
          font-family: 'Syne', sans-serif;
          font-size: clamp(40px, 5.8vw, 82px);
          font-weight: 800; letter-spacing: -3px; line-height: 1;
          color: var(--black); margin-top: 16px; margin-bottom: 0; position: relative;
        }
        .pf-hero-name-highlight {
          color: var(--black);
          background: transparent;
          padding: 0;
          border-radius: 0;
        }
        .pf-hero-title {
          font-family: 'Syne', sans-serif; font-size: clamp(15px, 1.5vw, 19px);
          font-weight: 700; letter-spacing: .05em; text-transform: uppercase;
          color: var(--black); margin-bottom: 20px; position: relative;
        }
        .pf-hero-bio {
          font-family: 'Syne', sans-serif;
          font-size: 17px; font-weight: 500; color: var(--black);
          max-width: 460px; margin: 0 0 40px; line-height: 1.7; position: relative;
        }
        .pf-hero-extra {
          font-family: 'Syne', sans-serif;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: .02em;
          color: var(--black);
          line-height: 1.6;
          max-width: 440px;
          margin: -20px 0 26px;
        }
        .pf-hero-actions { display: flex; flex-direction: column; gap: 12px; justify-content: flex-start; align-items: flex-start; width: 100%; position: relative; }
        .pf-hero-actions .pf-btn {
          font-family: 'Syne', sans-serif;
          width: 100%;
          justify-content: center;
          font-size: 16px;
          padding: 12px 20px;
        }
        .pf-below-hero {
          position: relative;
          isolation: isolate;
        }
        .pf-below-hero-content {
          position: relative;
          z-index: 1;
        }

        /* STATS */
        .pf-stats {
          display: grid; grid-template-columns: repeat(4, 1fr);
          border: 1px solid var(--border); border-radius: var(--r);
          overflow: hidden; background: var(--white);
          margin: 70px auto 0; max-width: 860px; position: relative;
        }
        .pf-stat {
          padding: 26px 16px; text-align: center;
          border-right: 1px solid var(--border); transition: background .2s;
        }
        .pf-stat:last-child { border-right: none; }
        .pf-stat:hover { background: var(--gray-50); }
        .pf-stat-val {
          font-family: 'Syne', sans-serif; font-size: 34px; font-weight: 800;
          letter-spacing: -1px; color: var(--black); line-height: 1; margin-bottom: 5px;
        }
        .pf-stat-lbl { font-size: 12px; color: var(--gray-500); }

        /* SECTION WRAPPER */
        .pf-section { max-width: 1100px; margin: 0 auto; padding: 96px 40px; }
        .pf-section-label {
          font-family: 'Syne', sans-serif; font-size: 11px; font-weight: 700;
          letter-spacing: .15em; text-transform: uppercase; color: var(--yellow);
          margin-bottom: 14px; display: flex; align-items: center; gap: 8px;
        }
        .pf-section-label::before {
          content: ''; display: inline-block; width: 18px; height: 2px;
          background: var(--yellow); border-radius: 1px;
        }
        .pf-section-title {
          font-family: 'Syne', sans-serif; font-size: clamp(26px, 3vw, 40px);
          font-weight: 800; letter-spacing: -1px; color: var(--black); line-height: 1.1;
        }
        .pf-section-sub {
          font-size: 15px; font-weight: 300; color: var(--gray-500);
          max-width: 420px; line-height: 1.7; margin-top: 10px;
        }

        /* ABOUT */
        .pf-about-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 64px; align-items: start; margin-top: 56px;
        }
        .pf-avatar {
          width: 80px; height: 80px; border-radius: 50%;
          border: 2px solid var(--border); object-fit: cover;
          background: var(--gray-100); overflow: hidden;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .pf-avatar-initials {
          font-family: 'Syne', sans-serif; font-size: 28px; font-weight: 800;
          color: var(--gray-300);
        }
        .pf-about-left { display: flex; flex-direction: column; gap: 24px; }
        .pf-bio {
          font-size: 16px; font-weight: 300; color: var(--gray-700); line-height: 1.75;
        }
        .pf-socials { display: flex; gap: 8px; }
        .pf-social {
          width: 40px; height: 40px; border: 1.5px solid var(--border-strong);
          border-radius: var(--r-sm); display: flex; align-items: center; justify-content: center;
          color: var(--gray-500); text-decoration: none;
          transition: border-color .2s, color .2s, transform .15s;
        }
        .pf-social:hover { border-color: var(--black); color: var(--black); transform: translateY(-1px); }
        .pf-about-table { display: flex; flex-direction: column; }
        .pf-about-row {
          display: flex; justify-content: space-between; align-items: baseline;
          padding: 16px 0; border-bottom: 1px solid var(--border); gap: 16px;
        }
        .pf-about-row:first-child { border-top: 1px solid var(--border); }
        .pf-about-key {
          font-family: 'Syne', sans-serif; font-size: 11px; font-weight: 700;
          letter-spacing: .12em; text-transform: uppercase; color: var(--gray-500);
          flex-shrink: 0;
        }
        .pf-about-val { font-size: 14px; color: var(--black); text-align: right; }

        /* PROJECTS */
        .pf-projects-bg { background: var(--gray-50); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
        .pf-tabs { display: flex; gap: 4px; background: var(--gray-100); border-radius: var(--r-sm); padding: 4px; width: fit-content; }
        .pf-tab {
          font-family: 'Syne', sans-serif; font-size: 13px; font-weight: 600;
          padding: 8px 20px; border-radius: 6px; cursor: pointer; border: none;
          transition: all .2s; letter-spacing: .02em;
        }
        .pf-tab-active { background: var(--white); color: var(--black); box-shadow: 0 1px 4px rgba(0,0,0,.1); }
        .pf-tab-inactive { background: transparent; color: var(--gray-500); }
        .pf-tab-inactive:hover { color: var(--black); }

        /* PROJECT CARDS */
        .pf-grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 2px; background: var(--border); border: 1px solid var(--border); border-radius: var(--r); overflow: hidden; }
        .pf-grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; background: var(--border); border: 1px solid var(--border); border-radius: var(--r); overflow: hidden; }
        .pf-card { background: var(--white); transition: background .2s; }
        .pf-card:hover { background: var(--gray-50); }
        .pf-card-img {
          height: 180px; overflow: hidden;
          display: flex; align-items: center; justify-content: center; position: relative;
        }
        .pf-card-img img { width: 100%; height: 100%; object-fit: cover; transition: transform .4s; }
        .pf-card:hover .pf-card-img img { transform: scale(1.04); }
        .pf-card-img-placeholder {
          width: 100%; height: 100%;
          display: flex; align-items: center; justify-content: center;
        }
        .pf-card-img-initial {
          font-family: 'Syne', sans-serif; font-size: 48px; font-weight: 800;
          opacity: .18;
        }
        .pf-card-year {
          position: absolute; top: 12px; right: 12px;
          font-family: 'Syne', sans-serif; font-size: 11px; font-weight: 700;
          background: rgba(255,255,255,.9); color: var(--gray-700);
          padding: 3px 8px; border-radius: 4px; backdrop-filter: blur(4px);
        }
        .pf-card-status-pill {
          position: absolute; top: 12px; left: 12px;
          font-family: 'Syne', sans-serif; font-size: 10px; font-weight: 700;
          padding: 3px 8px; border-radius: 4px; letter-spacing: .05em;
        }
        .pf-status-done { background: rgba(16,185,129,.12); color: #065F46; }
        .pf-status-ongoing { background: rgba(59,130,246,.12); color: #1D4ED8; }
        .pf-card-body { padding: 24px; }
        .pf-card-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 12px; }
        .pf-tag {
          font-family: 'Syne', sans-serif; font-size: 10px; font-weight: 700;
          letter-spacing: .06em; text-transform: uppercase;
          padding: 3px 8px; border-radius: 4px;
          background: var(--gray-100); color: var(--gray-700);
        }
        .pf-card-title {
          font-family: 'Syne', sans-serif; font-size: 18px; font-weight: 800;
          color: var(--black); letter-spacing: -.3px; margin-bottom: 8px;
        }
        .pf-card-desc {
          font-size: 13px; font-weight: 300; color: var(--gray-500); line-height: 1.65; margin-bottom: 16px;
        }
        .pf-card-deliverables { margin-bottom: 16px; display: flex; flex-direction: column; gap: 4px; }
        .pf-card-deliverable { font-size: 13px; color: var(--gray-500); display: flex; align-items: center; gap: 6px; }
        .pf-card-deliverable::before { content: ''; width: 4px; height: 4px; background: var(--yellow); border-radius: 50%; flex-shrink: 0; }
        .pf-card-links { display: flex; gap: 12px; }
        .pf-card-link {
          font-family: 'Syne', sans-serif; font-size: 12px; font-weight: 600;
          color: var(--gray-500); text-decoration: none; display: flex; align-items: center; gap: 4px;
          transition: color .2s;
        }
        .pf-card-link:hover { color: var(--black); }
        .pf-freelance-cta {
          margin-top: 16px; padding: 32px; border: 1px solid var(--border);
          border-radius: var(--r); background: var(--white); display: flex;
          align-items: center; justify-content: space-between; gap: 24px; flex-wrap: wrap;
        }
        .pf-freelance-cta-text { font-size: 15px; color: var(--gray-700); font-weight: 300; }
        .pf-freelance-cta-text strong { font-weight: 600; color: var(--black); }

        /* SKILLS */
        .pf-skills-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 40px; margin-top: 56px; }
        .pf-skill-category {
          font-family: 'Syne', sans-serif; font-size: 11px; font-weight: 700;
          letter-spacing: .12em; text-transform: uppercase; color: var(--yellow);
          margin-bottom: 16px;
        }
        .pf-skill-pills { display: flex; flex-wrap: wrap; gap: 6px; }
        .pf-skill-pill {
          font-size: 13px; font-weight: 400; color: var(--gray-700);
          background: var(--gray-100); border: 1px solid var(--border);
          padding: 6px 12px; border-radius: var(--r-sm);
          transition: all .2s; cursor: default;
        }
        .pf-skill-pill:hover { background: var(--black); color: var(--white); border-color: var(--black); }

        /* CTA */
        .pf-cta {
          background: var(--black); padding: 96px 40px; text-align: center; position: relative; overflow: hidden;
        }
        .pf-cta::before {
          content: ''; position: absolute; top: -200px; left: 50%; transform: translateX(-50%);
          width: 600px; height: 400px;
          background: radial-gradient(ellipse, rgba(245,158,11,.14) 0%, transparent 70%);
          pointer-events: none;
        }
        .pf-cta-title {
          font-family: 'Syne', sans-serif; font-size: clamp(28px, 4vw, 50px);
          font-weight: 800; color: var(--white); letter-spacing: -1.5px;
          line-height: 1.08; max-width: 580px; margin: 0 auto 16px; position: relative;
        }
        .pf-cta-sub { font-size: 15px; font-weight: 300; color: rgba(255,255,255,.5); margin-bottom: 36px; position: relative; }
        .pf-cta-actions { display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; position: relative; }

        /* FOOTER */
        .pf-footer {
          padding: 28px 40px; border-top: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap;
        }
        .pf-footer-name { font-family: 'Syne', sans-serif; font-size: 15px; font-weight: 700; color: var(--black); }
        .pf-footer-copy { font-size: 13px; color: var(--gray-500); }
        .pf-footer-links { display: flex; gap: 20px; }
        .pf-footer-link { font-size: 13px; color: var(--gray-500); text-decoration: none; cursor: pointer; transition: color .2s; }
        .pf-footer-link:hover { color: var(--black); }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .pf-hero-layout {
            grid-template-columns: 1fr;
            gap: 26px;
          }
          .pf-hero-left,
          .pf-hero-center,
          .pf-hero-right {
            grid-column: auto;
            text-align: center;
            max-width: 620px;
            margin: 0 auto;
            justify-self: center;
            padding-top: 0;
          }
          .pf-hero-center { order: 1; }
          .pf-hero-left { order: 2; }
          .pf-hero-right { order: 3; }
          .pf-hero-actions {
            justify-content: center;
            align-items: center;
            flex-direction: row;
            flex-wrap: wrap;
          }
          .pf-hero-actions .pf-btn {
            width: auto;
            font-size: 14px;
            padding: 8px 18px;
          }
          .pf-hero-bio {
            margin: 0 auto 34px;
          }
          .pf-about-grid { grid-template-columns: 1fr; gap: 40px; }
          .pf-grid-2 { grid-template-columns: 1fr; }
          .pf-grid-3 { grid-template-columns: 1fr; }
          .pf-skills-grid { grid-template-columns: 1fr 1fr; gap: 28px; }
        }
        @media (max-width: 640px) {
          .pf-nav { padding: 0 20px; }
          .pf-nav-links { display: none; }
          .pf-hamburger { display: block !important; }
          .pf-hero { padding: 110px 20px 60px; }
          .pf-stats { grid-template-columns: repeat(2, 1fr); }
          .pf-stat:nth-child(2) { border-right: none; }
          .pf-stat:nth-child(1), .pf-stat:nth-child(2) { border-bottom: 1px solid var(--border); }
          .pf-section { padding: 64px 20px; }
          .pf-skills-grid { grid-template-columns: 1fr; }
          .pf-cta { padding: 64px 20px; }
          .pf-footer { flex-direction: column; align-items: flex-start; gap: 12px; }
        }

        @keyframes fadeIn { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        .pf-fade-1 { animation: fadeIn .7s ease forwards; }
        .pf-fade-2 { animation: fadeIn .7s .1s ease forwards; opacity: 0; }
        .pf-fade-3 { animation: fadeIn .7s .2s ease forwards; opacity: 0; }
        .pf-fade-4 { animation: fadeIn .7s .3s ease forwards; opacity: 0; }
        .pf-fade-5 { animation: fadeIn .7s .4s ease forwards; opacity: 0; }

        /* DARK MODE */
        .dark .pf-root {
          background: linear-gradient(180deg, #09090b 0%, #000000 100%);
          color: #f4f4f5;
        }
        .dark .pf-hero-bg {
          background:
            radial-gradient(ellipse 1240px 820px at 50% -130px, rgba(245,158,11,.34) 0%, transparent 84%),
            linear-gradient(180deg, #0a0a0b 0%, #000 100%);
        }
        .dark .pf-nav.on {
          background: rgba(10, 10, 12, 0.86);
          box-shadow: 0 1px 0 rgba(255,255,255,.08);
        }
        .dark .pf-logo,
        .dark .pf-hero-name,
        .dark .pf-section-title,
        .dark .pf-card-title,
        .dark .pf-about-val,
        .dark .pf-footer-name {
          color: #fafafa;
        }
        .dark .pf-nav-links span,
        .dark .pf-footer-link,
        .dark .pf-card-link,
        .dark .pf-card-desc,
        .dark .pf-bio,
        .dark .pf-freelance-cta-text,
        .dark .pf-about-key,
        .dark .pf-footer-copy,
        .dark .pf-stat-lbl,
        .dark .pf-section-sub {
          color: #a1a1aa;
        }
        .dark .pf-hero-title,
        .dark .pf-hero-bio {
          color: #fafafa;
        }
        .dark .pf-hero-extra {
          color: #fafafa;
        }
        .dark .pf-nav-links span:hover,
        .dark .pf-footer-link:hover,
        .dark .pf-card-link:hover,
        .dark .pf-social:hover {
          color: #f4f4f5;
        }
        .dark .pf-stats,
        .dark .pf-card,
        .dark .pf-freelance-cta,
        .dark .pf-mobile-menu {
          background: #111113;
        }
        .dark .pf-projects-bg {
          background: #09090b;
          border-top: 1px solid rgba(255,255,255,.08);
          border-bottom: 1px solid rgba(255,255,255,.08);
        }
        .dark .pf-grid-2,
        .dark .pf-grid-3,
        .dark .pf-card,
        .dark .pf-stats,
        .dark .pf-freelance-cta,
        .dark .pf-about-row,
        .dark .pf-footer,
        .dark .pf-social,
        .dark .pf-btn-outline,
        .dark .pf-theme-toggle button {
          border-color: rgba(255,255,255,.12);
        }
        .dark .pf-tab-active {
          color: #dcfce7;
          background: linear-gradient(180deg, rgba(34,197,94,.22) 0%, rgba(22,163,74,.12) 100%);
          box-shadow: 0 0 0 1px rgba(34,197,94,.45), 0 0 18px rgba(34,197,94,.18);
        }
        .dark .pf-tab-inactive { color: #a1a1aa; }
        .dark .pf-tab-inactive:hover { color: #f5f5f5; }
        .dark .pf-tabs,
        .dark .pf-tag,
        .dark .pf-skill-pill {
          background: #18181b;
          color: #d4d4d8;
          border-color: rgba(255,255,255,.1);
        }
        .dark .pf-btn-dark {
          background: linear-gradient(180deg, #27272a 0%, #18181b 100%);
          color: #fafafa;
          border: 1px solid rgba(255,255,255,.12);
        }
        .dark .pf-btn-dark:hover {
          background: linear-gradient(180deg, #323238 0%, #1f1f24 100%);
          box-shadow: 0 8px 24px rgba(0,0,0,.45);
        }
        .dark .pf-btn-outline {
          color: #f4f4f5;
          background: transparent;
        }
        .dark .pf-btn-outline:hover {
          border-color: rgba(255,255,255,.3);
          background: rgba(255,255,255,.03);
        }
        .dark .pf-social { color: #a1a1aa; }
        .dark .pf-freelance-cta-text strong { color: #ffffff; }
        .dark .pf-social:hover {
          border-color: rgba(255,255,255,.26);
          background: rgba(255,255,255,.02);
        }
        .dark .pf-hamburger,
        .dark .pf-close-btn,
        .dark .pf-mobile-menu span {
          color: #d4d4d8;
        }
        .dark .pf-mobile-menu span:hover { color: #4ade80; }
        .dark .pf-stat:hover,
        .dark .pf-card:hover { background: #17171b; }
        .dark .pf-skill-pill:hover {
          background: #27272a;
          color: #fafafa;
          border-color: rgba(255,255,255,.24);
        }
        .dark .pf-card-year {
          background: rgba(10,10,10,.88);
          color: #d4d4d8;
          border: 1px solid rgba(255,255,255,.14);
        }
        .dark .pf-hero-email { color: #fafafa; }
        .dark .pf-hero-name-highlight {
          color: #fafafa;
          background: transparent;
        }
        .dark .pf-hero-image-wrap {
          box-shadow: none;
          border-radius: 0;
          background: transparent;
        }
        .dark .pf-cta {
          background: linear-gradient(180deg, #09090b 0%, #000000 100%);
          border-top: 1px solid rgba(255,255,255,.08);
        }
        .dark .pf-cta::before {
          background: radial-gradient(ellipse, rgba(245,158,11,.14) 0%, transparent 70%);
        }
        .dark .pf-cta-sub { color: rgba(255,255,255,.62); }
      `}</style>

      {/* NAV */}
      <nav className={`pf-nav ${scrolled ? "on" : ""}`}>
        <a href="/" className="pf-logo">
          Aarohi Portfolio
        </a>
        <ul className="pf-nav-links">
          {[["About", "about"], ["Projects", "projects"], ["Contact", "contact"]].map(([l, id]) => (
            <li key={id}><span onClick={() => go(id)}>{l}</span></li>
          ))}
        </ul>
        <div className="pf-nav-right">
          <div className="pf-theme-toggle">
            <ThemeToggle />
          </div>
          <a href={PROFILE.resumeUrl} download className="pf-btn pf-btn-dark">
            <Download size={14} /> Resume
          </a>
          <button className="pf-hamburger" onClick={() => setMenuOpen(true)}>
            <Menu size={20} />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="pf-mobile-menu">
          <button className="pf-close-btn" onClick={() => setMenuOpen(false)}><X size={22} /></button>
          {[["About", "about"], ["Projects", "projects"], ["Contact", "contact"]].map(([l, id]) => (
            <span key={id} onClick={() => go(id)}>{l}</span>
          ))}
        </div>
      )}

      {/* HERO */}
      <section id="hero" className="pf-hero">
        <div className="pf-hero-bg" />
        <div className="pf-hero-layout">
          <div className="pf-hero-left">
            <p className="pf-hero-title pf-fade-2">{PROFILE.title}</p>
            <p className="pf-hero-bio pf-fade-3">{PROFILE.bio}</p>
            <p className="pf-hero-extra pf-fade-3">Building practical AI products, scalable web systems, and reliable user-first experiences.</p>
          </div>
          <div className="pf-hero-center">
            <div className="pf-hero-email pf-fade-1">aarohi.bhanuj.ug23@nsut.ac.in</div>
            <div className="pf-hero-image-wrap pf-fade-1">
              <img src={PROFILE.heroImage} alt={PROFILE.name} className="pf-hero-image" />
            </div>
            <h1 className="pf-hero-name pf-fade-4">
              <span className="pf-hero-name-highlight">{PROFILE.name}</span>
            </h1>
          </div>
          <div className="pf-hero-right">
            <div className="pf-hero-actions pf-fade-5">
              <button className="pf-btn pf-btn-dark" onClick={() => go("projects")}>
                View Work <ArrowUpRight size={15} />
              </button>
              
              <button className="pf-btn pf-btn-outline"  onClick={() => go("contact")}>
                Get in Touch
              </button>
              <a href={PROFILE.resumeUrl} download className="pf-btn pf-btn-outline">
                <Download size={14} /> Resume
              </a>
              <a href={PROFILE.socials.github} target="_blank" rel="noopener noreferrer" className="pf-btn pf-btn-outline">
                <Github size={14} /> GitHub
              </a>
              <a href={PROFILE.socials.linkedin} target="_blank" rel="noopener noreferrer" className="pf-btn pf-btn-outline">
                <Linkedin size={14} /> LinkedIn
              </a>
              <a href={PROFILE.socials.instagram} target="_blank" rel="noopener noreferrer" className="pf-btn pf-btn-outline">
                <Instagram size={14} /> Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="pf-below-hero">
        <GradientDots opacity={0.3} spacing={18} dotSize={8} duration={24} />
        <div className="pf-below-hero-content">
      {/* ABOUT */}
      <section id="about">
        <div className="pf-section">
          <p className="pf-section-label">Who I am</p>
          <h2 className="pf-section-title">Engineer. Builder. Freelancer.</h2>
          <div className="pf-about-grid">
            <div className="pf-about-left">
              <div style={{display:"flex", alignItems:"center", gap:16}}>
                <div className="pf-avatar">
                  {PROFILE.avatar
                    ? <img src={PROFILE.avatar} alt="avatar" style={{width:"100%",height:"100%",objectFit:"cover"}} />
                    : <span className="pf-avatar-initials">{PROFILE.name.charAt(0)}</span>
                  }
                </div>
                <div>
                  <div style={{fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:18,letterSpacing:"-.3px"}}>{PROFILE.name}</div>
                  <div style={{fontSize:13,color:"var(--gray-500)",marginTop:3}}>{PROFILE.university}</div>
                </div>
              </div>
              <p className="pf-bio">{PROFILE.bio}</p>
              <div className="pf-socials">
                <a href={PROFILE.socials.github} target="_blank" rel="noopener noreferrer" className="pf-social"><Github size={16} /></a>
                <a href={PROFILE.socials.linkedin} target="_blank" rel="noopener noreferrer" className="pf-social"><Linkedin size={16} /></a>
                <a href={PROFILE.socials.instagram} target="_blank" rel="noopener noreferrer" className="pf-social"><Instagram size={16} /></a>
              </div>
              <a href={PROFILE.resumeUrl} download className="pf-btn pf-btn-dark" style={{width:"fit-content"}}>
                <Download size={14} /> Download Resume
              </a>
            </div>
            <div className="pf-about-table">
              {[
                ["Education", "B.Tech, Instrumentation and Control Engineering"],
                ["University", "NSUT, New Delhi (Aug 2023 - Present)"],
                ["Focus", "Full-Stack Engineering, AI/ML Systems"],
                ["Available", "Internships and selected freelance projects"],
                ["Mobile", "+91-9958994526"],
                ["Email", PROFILE.email],
              ].map(([k, v]) => (
                <div key={k} className="pf-about-row">
                  <span className="pf-about-key">{k}</span>
                  <span className="pf-about-val">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="pf-projects-bg">
        <div className="pf-section">
          <div style={{display:"flex",alignItems:"flex-end",justifyContent:"space-between",flexWrap:"wrap",gap:24,marginBottom:40}}>
            <div>
              <p className="pf-section-label">What I've built</p>
              <h2 className="pf-section-title">Projects</h2>
            </div>
            <div className="pf-tabs">
              
              <button className={`pf-tab ${tab==="freelance"?"pf-tab-active":"pf-tab-inactive"}`} onClick={() => setTab("freelance")}>Freelance</button>
              <button className={`pf-tab ${tab==="tech"?"pf-tab-active":"pf-tab-inactive"}`} onClick={() => setTab("tech")}>Engineering</button>
            </div>
          </div>

          {tab === "tech" && (
            <div className="pf-grid-3">
              {TECH_PROJECTS.map((p) => (
                <div key={p.id} className="pf-card">
                  <div className="pf-card-img" style={{background:p.accent+"14"}}>
                    {p.image ? <img src={p.image} alt={p.title} /> : (
                      <div className="pf-card-img-placeholder">
                        <span className="pf-card-img-initial" style={{color:p.accent}}>{p.title.charAt(0)}</span>
                      </div>
                    )}
                    <span className="pf-card-year">{p.year}</span>
                  </div>
                  <div className="pf-card-body">
                    <div className="pf-card-tags">{p.tags.map(t => <span key={t} className="pf-tag">{t}</span>)}</div>
                    <div className="pf-card-title">{p.title}</div>
                    <div className="pf-card-desc">{p.description}</div>
                    <div className="pf-card-links">
                      <a href={p.live} target="_blank" rel="noopener noreferrer" className="pf-card-link"><ExternalLink size={13} /> Live</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {tab === "freelance" && (
            <>
              <div className="pf-grid-3">
                {FREELANCE_PROJECTS.map((p) => (
                  <div key={p.id} className="pf-card">
                    <div className="pf-card-img" style={{background:p.accent+"14"}}>
                      {p.image ? <img src={p.image} alt={p.title} /> : (
                        <div className="pf-card-img-placeholder">
                          <span className="pf-card-img-initial" style={{color:p.accent}}>{p.title.charAt(0)}</span>
                        </div>
                      )}
                      <span className="pf-card-year">{p.year}</span>
                      <span className={`pf-card-status-pill ${p.status==="Ongoing"?"pf-status-ongoing":"pf-status-done"}`}>{p.status}</span>
                    </div>
                    <div className="pf-card-body">
                      <div className="pf-card-tags">{p.tags.map(t => <span key={t} className="pf-tag">{t}</span>)}</div>
                      <div className="pf-card-title">{p.title}</div>
                      <div style={{fontSize:12,color:"var(--gray-500)",marginBottom:8}}>{p.client}</div>
                      <div className="pf-card-desc">{p.description}</div>
                      <div className="pf-card-deliverables">
                        {p.deliverables.map(d => <div key={d} className="pf-card-deliverable">{d}</div>)}
                      </div>
                      <div className="pf-card-links">
                        <a href={p.live} target="_blank" rel="noopener noreferrer" className="pf-card-link"><ExternalLink size={13} /> Live</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pf-freelance-cta">
                <div className="pf-freelance-cta-text">
                  <strong>Open to freelance work.</strong> Got a project in mind? Let's talk scope, timeline, and budget.
                </div>
                <a href={`mailto:${PROFILE.email}`} className="pf-btn pf-btn-yellow">
                  Work with me <ArrowUpRight size={14} />
                </a>
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA / CONTACT */}
      <section id="contact" className="pf-cta">
        <h2 className="pf-cta-title">Let's build something great together.</h2>
        <p className="pf-cta-sub">Open to internships, full-time roles, and freelance projects.</p>
        <div className="pf-cta-actions">
          <a href={`mailto:${PROFILE.email}`} className="pf-btn pf-btn-yellow">
            Say hello <ArrowUpRight size={15} />
          </a>
          <a href={PROFILE.resumeUrl} download className="pf-btn" style={{background:"rgba(255,255,255,.1)",color:"white",border:"1.5px solid rgba(255,255,255,.15)"}}>
            <Download size={14} /> Download Resume
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pf-footer">
        <div className="pf-footer-name">{PROFILE.name}</div>
        <div className="pf-footer-copy">NSUT · New Delhi · {new Date().getFullYear()}</div>
        <div className="pf-footer-links">
          {[["About","about"],["Projects","projects"],["Contact","contact"]].map(([l,id]) => (
            <span key={id} className="pf-footer-link" onClick={() => go(id)}>{l}</span>
          ))}
        </div>
      </footer>
        </div>
      </div>
    </div>
  );
}