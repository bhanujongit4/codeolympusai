'use client'

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Code, Cpu, Layout, Shield, Star, ArrowUpRight, Menu, X } from 'lucide-react';

import Stack from "../components/stack"
import FAQComponent from "../components/Faq"
import Footer from "../components/Footer"

// ─── SERVICES DATA ───────────────────────────────────────────────────────────
const SERVICES = [
  {
    icon: <Layout className="w-5 h-5" />,
    title: 'Web Design',
    description: 'Pixel-perfect interfaces built to convert. Every element considered, nothing wasted.',
    accent: '#F59E0B',
  },
  {
    icon: <Code className="w-5 h-5" />,
    title: 'Web Development',
    description: 'Scalable, fast, and reliable web apps — engineered for the long run.',
    accent: '#3B82F6',
  },
  {
    icon: <Cpu className="w-5 h-5" />,
    title: 'AI Solutions',
    description: 'Integrate intelligence into your product. LLMs, automation, custom models.',
    accent: '#8B5CF6',
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: 'Security',
    description: 'End-to-end hardening. Your users deserve infrastructure that doesn't break trust.',
    accent: '#10B981',
  },
  {
    icon: <Star className="w-5 h-5" />,
    title: 'SEO Expertise',
    description: 'Organic growth that compounds. Technical SEO, content strategy, real results.',
    accent: '#F97316',
  },
  {
    icon: <ChevronRight className="w-5 h-5" />,
    title: 'Maintenance',
    description: 'We stick around. Updates, monitoring, performance — handled without a second thought.',
    accent: '#EC4899',
  },
];

// ─── STATS ───────────────────────────────────────────────────────────────────
const STATS = [
  { value: '40+', label: 'Projects Shipped' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '3×', label: 'Average ROI' },
  { value: '24h', label: 'Response Time' },
];

// ─── PROCESS ─────────────────────────────────────────────────────────────────
const PROCESS = [
  { step: '01', title: 'Discovery', desc: 'We learn your goals, constraints, and what success looks like for you.' },
  { step: '02', title: 'Strategy', desc: 'Architecture, tech stack, and roadmap — all locked before a line is written.' },
  { step: '03', title: 'Build', desc: 'Rapid, iterative development with weekly check-ins and live previews.' },
  { step: '04', title: 'Launch', desc: 'Staged rollout, performance audit, and full handoff or ongoing support.' },
];

// ─── COMPONENT ───────────────────────────────────────────────────────────────
const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="co-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

        :root {
          --yellow: #F59E0B;
          --yellow-light: #FDE68A;
          --yellow-pale: #FFFBEB;
          --black: #0A0A0A;
          --near-black: #111111;
          --gray-900: #1A1A1A;
          --gray-700: #3D3D3D;
          --gray-500: #6B6B6B;
          --gray-300: #C4C4C4;
          --gray-100: #F2F2F2;
          --gray-50: #FAFAFA;
          --white: #FFFFFF;
          --border: rgba(0,0,0,0.08);
          --border-strong: rgba(0,0,0,0.14);
          --radius: 12px;
          --radius-sm: 8px;
        }

        .co-root {
          font-family: 'DM Sans', sans-serif;
          background: var(--white);
          color: var(--black);
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
        }

        /* ── NAV ── */
        .co-nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 40px;
          height: 68px;
          transition: background 0.3s, box-shadow 0.3s;
        }
        .co-nav.scrolled {
          background: rgba(255,255,255,0.96);
          backdrop-filter: blur(12px);
          box-shadow: 0 1px 0 var(--border);
        }
        .co-logo {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 18px;
          letter-spacing: -0.5px;
          color: var(--black);
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .co-logo-dot {
          width: 8px; height: 8px;
          background: var(--yellow);
          border-radius: 50%;
          display: inline-block;
        }
        .co-nav-links {
          display: flex;
          gap: 32px;
          list-style: none;
          margin: 0; padding: 0;
        }
        .co-nav-links a {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 400;
          color: var(--gray-700);
          text-decoration: none;
          transition: color 0.2s;
        }
        .co-nav-links a:hover { color: var(--black); }
        .co-nav-cta {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 500;
          background: var(--black);
          color: var(--white);
          padding: 9px 20px;
          border-radius: var(--radius-sm);
          text-decoration: none;
          transition: background 0.2s, transform 0.15s;
          border: none;
          cursor: pointer;
        }
        .co-nav-cta:hover { background: var(--gray-900); transform: translateY(-1px); }

        /* ── HERO ── */
        .co-hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 120px 40px 80px;
          text-align: center;
          overflow: hidden;
        }
        .co-hero-bg {
          position: absolute;
          inset: 0;
          /* Replace with your background image */
          /* background-image: url('/images/bg-7.png'); */
          background: 
            radial-gradient(ellipse 800px 600px at 50% -100px, rgba(245,158,11,0.08) 0%, transparent 70%),
            radial-gradient(ellipse 600px 400px at 80% 50%, rgba(245,158,11,0.04) 0%, transparent 60%),
            var(--white);
          background-size: cover;
          background-position: center;
        }
        .co-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--yellow-pale);
          border: 1px solid rgba(245,158,11,0.2);
          border-radius: 100px;
          padding: 6px 14px;
          font-size: 13px;
          font-weight: 500;
          color: #92400E;
          margin-bottom: 32px;
          position: relative;
        }
        .co-hero-badge-dot {
          width: 6px; height: 6px;
          background: var(--yellow);
          border-radius: 50%;
          animation: pulse-dot 2s ease-in-out infinite;
        }
        @keyframes pulse-dot {
          0%,100% { opacity:1; transform: scale(1); }
          50% { opacity:0.6; transform: scale(1.3); }
        }
        .co-hero-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(42px, 6vw, 80px);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -2px;
          color: var(--black);
          max-width: 820px;
          margin: 0 auto 24px;
          position: relative;
        }
        .co-hero-title span {
          position: relative;
          display: inline-block;
        }
        .co-hero-title span::after {
          content: '';
          position: absolute;
          bottom: 4px; left: 0; right: 0;
          height: 6px;
          background: var(--yellow);
          opacity: 0.35;
          border-radius: 2px;
          z-index: -1;
        }
        .co-hero-sub {
          font-size: 17px;
          font-weight: 300;
          color: var(--gray-500);
          max-width: 480px;
          margin: 0 auto 44px;
          line-height: 1.7;
          position: relative;
        }
        .co-hero-actions {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
          position: relative;
        }
        .co-btn-primary {
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          font-weight: 500;
          background: var(--black);
          color: var(--white);
          padding: 13px 28px;
          border-radius: var(--radius-sm);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
          border: none;
          cursor: pointer;
        }
        .co-btn-primary:hover {
          background: var(--gray-900);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.15);
        }
        .co-btn-secondary {
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          font-weight: 500;
          background: var(--white);
          color: var(--black);
          padding: 13px 28px;
          border-radius: var(--radius-sm);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          border: 1.5px solid var(--border-strong);
          transition: border-color 0.2s, transform 0.15s, box-shadow 0.2s;
          cursor: pointer;
        }
        .co-btn-secondary:hover {
          border-color: var(--gray-300);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.07);
        }

        /* ── STATS BAR ── */
        .co-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          border: 1px solid var(--border);
          border-radius: var(--radius);
          overflow: hidden;
          background: var(--white);
          margin: 80px auto 0;
          max-width: 900px;
        }
        .co-stat {
          padding: 28px 20px;
          text-align: center;
          border-right: 1px solid var(--border);
          transition: background 0.2s;
        }
        .co-stat:last-child { border-right: none; }
        .co-stat:hover { background: var(--gray-50); }
        .co-stat-value {
          font-family: 'Syne', sans-serif;
          font-size: 36px;
          font-weight: 800;
          color: var(--black);
          letter-spacing: -1px;
          line-height: 1;
          margin-bottom: 6px;
        }
        .co-stat-label {
          font-size: 13px;
          color: var(--gray-500);
          font-weight: 400;
        }

        /* ── SECTION ── */
        .co-section {
          max-width: 1120px;
          margin: 0 auto;
          padding: 100px 40px;
        }
        .co-section-label {
          font-family: 'Syne', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--yellow);
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .co-section-label::before {
          content: '';
          display: inline-block;
          width: 20px; height: 2px;
          background: var(--yellow);
          border-radius: 1px;
        }
        .co-section-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(28px, 3.5vw, 44px);
          font-weight: 800;
          letter-spacing: -1px;
          color: var(--black);
          line-height: 1.1;
          margin-bottom: 16px;
        }
        .co-section-desc {
          font-size: 16px;
          font-weight: 300;
          color: var(--gray-500);
          line-height: 1.7;
          max-width: 480px;
        }

        /* ── SERVICES GRID ── */
        .co-services-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 56px;
          gap: 24px;
          flex-wrap: wrap;
        }
        .co-services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
          background: var(--border);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          overflow: hidden;
        }
        .co-service-card {
          background: var(--white);
          padding: 36px 32px;
          transition: background 0.25s;
          cursor: default;
          position: relative;
          overflow: hidden;
        }
        .co-service-card::before {
          content: '';
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .co-service-card:hover { background: var(--gray-50); }
        .co-service-icon {
          width: 44px; height: 44px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          transition: transform 0.3s;
        }
        .co-service-card:hover .co-service-icon { transform: scale(1.08); }
        .co-service-title {
          font-family: 'Syne', sans-serif;
          font-size: 17px;
          font-weight: 700;
          color: var(--black);
          margin-bottom: 10px;
          letter-spacing: -0.3px;
        }
        .co-service-desc {
          font-size: 14px;
          font-weight: 300;
          color: var(--gray-500);
          line-height: 1.65;
        }
        .co-service-arrow {
          position: absolute;
          top: 28px; right: 28px;
          color: var(--gray-300);
          transition: color 0.2s, transform 0.2s;
          opacity: 0;
        }
        .co-service-card:hover .co-service-arrow {
          opacity: 1;
          color: var(--black);
          transform: translate(2px,-2px);
        }

        /* ── PROCESS ── */
        .co-process-section {
          background: var(--gray-50);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }
        .co-process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          border: 1px solid var(--border);
          border-radius: var(--radius);
          overflow: hidden;
          background: var(--border);
        }
        .co-process-step {
          background: var(--white);
          padding: 40px 28px;
          position: relative;
        }
        .co-step-number {
          font-family: 'Syne', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--yellow);
          margin-bottom: 20px;
        }
        .co-step-title {
          font-family: 'Syne', sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: var(--black);
          margin-bottom: 12px;
          letter-spacing: -0.4px;
        }
        .co-step-desc {
          font-size: 14px;
          font-weight: 300;
          color: var(--gray-500);
          line-height: 1.65;
        }
        .co-step-line {
          position: absolute;
          top: 40px; right: 0;
          width: 1px; height: 40px;
          background: var(--border-strong);
        }

        /* ── CTA ── */
        .co-cta-section {
          background: var(--black);
          padding: 100px 40px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .co-cta-section::before {
          content: '';
          position: absolute;
          top: -200px; left: 50%;
          transform: translateX(-50%);
          width: 600px; height: 400px;
          background: radial-gradient(ellipse, rgba(245,158,11,0.15) 0%, transparent 70%);
          pointer-events: none;
        }
        .co-cta-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(30px, 4vw, 52px);
          font-weight: 800;
          color: var(--white);
          letter-spacing: -1.5px;
          line-height: 1.08;
          max-width: 640px;
          margin: 0 auto 20px;
          position: relative;
        }
        .co-cta-sub {
          font-size: 16px;
          font-weight: 300;
          color: rgba(255,255,255,0.5);
          margin-bottom: 40px;
          position: relative;
        }
        .co-cta-btn {
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          font-weight: 500;
          background: var(--yellow);
          color: var(--black);
          padding: 14px 32px;
          border-radius: var(--radius-sm);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: transform 0.15s, box-shadow 0.2s;
          position: relative;
          border: none;
          cursor: pointer;
        }
        .co-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(245,158,11,0.35);
        }

        /* ── MOBILE NAV ── */
        .co-mobile-menu {
          position: fixed;
          inset: 0;
          background: var(--white);
          z-index: 99;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 32px;
          animation: slideDown 0.25s ease;
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .co-mobile-menu a {
          font-family: 'Syne', sans-serif;
          font-size: 28px;
          font-weight: 700;
          color: var(--black);
          text-decoration: none;
          letter-spacing: -0.5px;
        }
        .co-mobile-menu a:hover { color: var(--yellow); }

        /* ── RESPONSIVE ── */
        @media (max-width: 768px) {
          .co-nav { padding: 0 20px; }
          .co-nav-links { display: none; }
          .co-hero { padding: 100px 20px 60px; }
          .co-stats { grid-template-columns: repeat(2, 1fr); }
          .co-stat { border-bottom: 1px solid var(--border); }
          .co-section { padding: 64px 20px; }
          .co-services-grid { grid-template-columns: 1fr; }
          .co-process-grid { grid-template-columns: 1fr 1fr; }
          .co-services-header { flex-direction: column; align-items: flex-start; }
          .co-cta-section { padding: 64px 20px; }
        }
        @media (max-width: 480px) {
          .co-process-grid { grid-template-columns: 1fr; }
        }

        /* ── ANIMATIONS ── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .co-fade-up { animation: fadeUp 0.7s ease forwards; }
        .co-fade-up-1 { animation: fadeUp 0.7s 0.1s ease forwards; opacity: 0; }
        .co-fade-up-2 { animation: fadeUp 0.7s 0.2s ease forwards; opacity: 0; }
        .co-fade-up-3 { animation: fadeUp 0.7s 0.3s ease forwards; opacity: 0; }
        .co-fade-up-4 { animation: fadeUp 0.7s 0.4s ease forwards; opacity: 0; }
      `}</style>

      {/* ── NAV ── */}
      <nav className={`co-nav ${scrolled ? 'scrolled' : ''}`}>
        <a href="/" className="co-logo">
          <span className="co-logo-dot" />
          CodeOlympus
        </a>
        <ul className="co-nav-links">
          {[['Services', '#services'], ['Process', '#process'], ['Work', '/projects'], ['Contact', '/contact']].map(([label, href]) => (
            <li key={label}><a href={href}>{label}</a></li>
          ))}
        </ul>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <a href="/contact" className="co-nav-cta">Start a project</a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}
            className="co-hamburger"
          >
            <Menu size={20} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="co-mobile-menu">
          <button onClick={() => setMenuOpen(false)} style={{ position: 'absolute', top: 20, right: 20, background: 'none', border: 'none', cursor: 'pointer' }}>
            <X size={24} />
          </button>
          {[['Services', '#services'], ['Process', '#process'], ['Work', '/projects'], ['Contact', '/contact']].map(([label, href]) => (
            <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
        </div>
      )}

      {/* ── HERO ── */}
      <section className="co-hero">
        <div className="co-hero-bg" />

        <div className="co-hero-badge co-fade-up">
          <span className="co-hero-badge-dot" />
          Web Development · AI Solutions · SEO
        </div>

        <h1 className="co-hero-title co-fade-up-1">
          We build things that{' '}
          <span>actually work.</span>
        </h1>

        <p className="co-hero-sub co-fade-up-2">
          CodeOlympus delivers fast, scalable, and intelligent digital products.
          From concept to deployment — no fluff, just results.
        </p>

        <div className="co-hero-actions co-fade-up-3">
          <a href="/contact" className="co-btn-primary">
            Start a project <ArrowUpRight size={16} />
          </a>
          <a href="/projects" className="co-btn-secondary">
            View our work
          </a>
        </div>

        {/* Stats bar */}
        <div className="co-stats co-fade-up-4">
          {STATS.map((s) => (
            <div key={s.label} className="co-stat">
              <div className="co-stat-value">{s.value}</div>
              <div className="co-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services">
        <div className="co-section">
          <div className="co-services-header">
            <div>
              <p className="co-section-label">What we do</p>
              <h2 className="co-section-title">
                Six disciplines.<br />One team.
              </h2>
            </div>
            <p className="co-section-desc">
              We're a small, senior team. Every project gets our best thinking — not
              an intern and a template.
            </p>
          </div>

          <div className="co-services-grid" id="services-grid">
            {SERVICES.map((service, i) => (
              <div
                key={i}
                className="co-service-card"
                onMouseEnter={() => setHoveredService(i)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div
                  className="co-service-icon"
                  style={{ background: service.accent + '18', color: service.accent }}
                >
                  {service.icon}
                </div>
                <div className="co-service-title">{service.title}</div>
                <div className="co-service-desc">{service.description}</div>
                <div className="co-service-arrow">
                  <ArrowUpRight size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section id="process" className="co-process-section">
        <div className="co-section">
          <div style={{ marginBottom: 56 }}>
            <p className="co-section-label">How we work</p>
            <h2 className="co-section-title">A process you can set your clock to.</h2>
            <p className="co-section-desc" style={{ marginTop: 12 }}>
              No surprises. No scope creep. Clean communication from day one to launch day.
            </p>
          </div>

          <div className="co-process-grid">
            {PROCESS.map((step, i) => (
              <div key={i} className="co-process-step">
                <div className="co-step-number">{step.step}</div>
                <div className="co-step-title">{step.title}</div>
                <div className="co-step-desc">{step.desc}</div>
                {i < PROCESS.length - 1 && <div className="co-step-line" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slot for your existing components */}
      {/* <FAQComponent /> */}
      {/* <Stack /> */}

      {/* ── CTA ── */}
      <section className="co-cta-section">
        <h2 className="co-cta-title">
          Ready to build something great?
        </h2>
        <p className="co-cta-sub">
          Most projects start within a week. Let's talk.
        </p>
        <a href="/contact" className="co-cta-btn">
          Get in touch <ArrowUpRight size={16} />
        </a>
      </section>

      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
