"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const services = [
  { href: "/services/seo",                   label: "SEO Services" },
  { href: "/services/google-ads",            label: "Google Ads" },
  { href: "/services/meta-ads",              label: "Meta Ads" },
  { href: "/services/performance-marketing", label: "Performance Marketing" },
  { href: "/services/video-creation",        label: "Video Creation" },
  { href: "/services/web-development",       label: "Web Development" },
  { href: "/services/graphic-designing",     label: "Graphic Designing" },
  { href: "/services/social-media",          label: "Social Media" },
  { href: "/services/meme-marketing",        label: "Meme Marketing" },
  { href: "/services/ecommerce",             label: "Ecommerce Marketing" },
  { href: "/services/growth-hacking",        label: "Growth Hacking" },
];

export default function Navbar() {
  const pathname       = usePathname();
  const [visible,      setVisible]      = useState(true);   // navbar show/hide
  const [scrolled,     setScrolled]     = useState(false);  // bg blur
  const [mobileOpen,   setMobileOpen]   = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const lastY = useRef(0);

  // ── Hide on scroll-down, show on scroll-up ──────────────
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y < 80) {
        // near top — always show
        setVisible(true);
        setScrolled(false);
      } else {
        setScrolled(true);
        if (y > lastY.current + 6) {
          // scrolling DOWN  → hide
          setVisible(false);
          setMobileOpen(false);   // close panel if user scrolls away
        } else if (y < lastY.current - 6) {
          // scrolling UP    → show
          setVisible(true);
        }
      }
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* ── Main navbar bar ─────────────────────────────── */}
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300
          ${visible ? "translate-y-0" : "-translate-y-full"}
          ${scrolled
            ? "bg-[#07080b]/95 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/40"
            : "bg-transparent"}
        `}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex items-center justify-between h-[64px] sm:h-[72px]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-8 h-8 sm:w-9 sm:h-9 bg-gradient-to-br from-accent to-[#ea580c] rounded-[10px] flex items-center justify-center font-[Outfit] font-black text-[13px] sm:text-[15px] text-white shadow-lg shadow-accent/20">
              SJM
            </div>
            <span className="font-[Outfit] font-black text-base sm:text-lg text-white leading-none tracking-tight">
              S<span className="text-accent">JM</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-7 xl:gap-9">
            {[
              { href: "/",            label: "Home" },
              { href: "/about",       label: "About" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`nav-link text-sm font-[Outfit] font-medium transition-colors ${
                  isActive(href) ? "text-accent active" : "text-[#b0b0c8] hover:text-accent"
                }`}
              >
                {label}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className={`nav-link text-sm font-[Outfit] font-medium flex items-center gap-1.5 transition-colors ${
                  pathname.startsWith("/services") ? "text-accent active" : "text-[#b0b0c8] hover:text-accent"
                }`}
              >
                Services
                <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {/* Dropdown */}
              <div className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-[500px] bg-[#0d0e16] border border-white/[0.07] rounded-2xl p-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 shadow-2xl shadow-black/60">
                <div className="grid grid-cols-2 gap-1">
                  <Link
                    href="/services"
                    className="col-span-2 flex items-center gap-2 px-3 py-2.5 rounded-xl bg-accent/10 border border-accent/20 text-accent text-sm font-[Outfit] font-bold mb-2 hover:bg-accent/15 transition-colors"
                  >
                   All Services Overview
                  </Link>
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg text-[#9090b0] text-sm font-[Outfit] hover:bg-white/5 hover:text-white transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/50 shrink-0" />
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {[
              { href: "/case-studies", label: "Case Studies" },
              { href: "/blog",         label: "Blog" },
              { href: "/contact",      label: "Contact" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`nav-link text-sm font-[Outfit] font-medium transition-colors ${
                  isActive(href) ? "text-accent active" : "text-[#b0b0c8] hover:text-accent"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Right: CTA + Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center gap-1.5 bg-gradient-to-r from-accent to-[#ea580c] text-white text-sm font-[Outfit] font-bold px-5 py-2.5 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30"
            >
              Free Consultation
            </Link>
            {/* Visible on mobile as compact CTA */}
            <Link
              href="/contact"
              className="lg:hidden inline-flex items-center bg-gradient-to-r from-accent to-[#ea580c] text-white text-xs font-[Outfit] font-bold px-3.5 py-2 rounded-lg"
            >
              Free Call
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-9 h-9 flex flex-col justify-center items-center gap-[5px] rounded-lg hover:bg-white/5 transition-colors"
              aria-label="Toggle menu"
            >
              <span className={`block w-5 h-0.5 bg-white rounded transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block w-5 h-0.5 bg-white rounded transition-all duration-300 ${mobileOpen ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`block w-5 h-0.5 bg-white rounded transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile overlay ──────────────────────────────── */}
      <div
        className={`fixed inset-0 bg-black/70 z-40 lg:hidden backdrop-blur-sm transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* ── Mobile slide-in panel ────────────────────────── */}
      <div
        className={`
          fixed top-0 right-0 h-full w-[280px] sm:w-[320px]
          bg-[#0a0b10] border-l border-white/[0.07]
          z-50 lg:hidden
          transition-transform duration-300 ease-in-out
          flex flex-col overflow-y-auto
          ${mobileOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Panel header */}
        <div className="flex items-center justify-between px-5 h-[64px] border-b border-white/[0.07] shrink-0">
          <Link href="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
            <div className="w-7 h-7 bg-gradient-to-br from-accent to-[#ea580c] rounded-[7px] flex items-center justify-center font-[Outfit] font-black text-[11px] text-white">
              SJM
            </div>
            <span className="font-[Outfit] font-black text-base text-white tracking-tight">
              S<span className="text-accent">JM</span>
            </span>
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/5 text-[#9090b0] hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <div className="flex-1 px-4 py-5 flex flex-col gap-0.5 overflow-y-auto">
          {[
            { href: "/",      label: "Home" },
            { href: "/about", label: "About" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`block px-3 py-3 rounded-xl font-[Outfit] font-semibold text-[0.95rem] transition-colors ${
                isActive(href)
                  ? "text-accent bg-accent/10"
                  : "text-[#b0b0c8] hover:text-white hover:bg-white/5"
              }`}
            >
              {label}
            </Link>
          ))}

          {/* Services — split row: text navigates, arrow expands */}
          <div className={`flex items-center rounded-xl overflow-hidden ${
            pathname.startsWith("/services") ? "bg-accent/10" : ""
          }`}>
            <Link
              href="/services"
              className={`flex-1 px-3 py-3 font-[Outfit] font-semibold text-[0.95rem] transition-colors ${
                pathname.startsWith("/services") ? "text-accent" : "text-[#b0b0c8] hover:text-white"
              }`}
            >
              Services
            </Link>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="px-3 py-3 text-[#7a7a95] hover:text-white transition-colors"
              aria-label="Toggle services submenu"
            >
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          </div>

          {/* Submenu */}
          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
            servicesOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}>
            <div className="ml-3 pl-3 border-l border-white/[0.07] py-1 flex flex-col gap-0.5">
              {services.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className={`block py-2 px-2 rounded-lg text-sm font-[Outfit] transition-colors ${
                    pathname === s.href ? "text-accent" : "text-[#7a7a95] hover:text-accent"
                  }`}
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          {[
            { href: "/case-studies", label: "Case Studies" },
            { href: "/blog",         label: "Blog" },
            { href: "/contact",      label: "Contact" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`block px-3 py-3 rounded-xl font-[Outfit] font-semibold text-[0.95rem] transition-colors ${
                isActive(href)
                  ? "text-accent bg-accent/10"
                  : "text-[#b0b0c8] hover:text-white hover:bg-white/5"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Bottom CTAs */}
        <div className="px-4 pb-8 pt-4 shrink-0 border-t border-white/[0.07] flex flex-col gap-3">
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-accent to-[#ea580c] text-white font-[Outfit] font-bold py-3.5 rounded-xl text-sm shadow-lg shadow-accent/25"
          >
            Get Free Consultation →
          </Link>
          <a
            href="https://wa.me/917291001898"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-[#25d366]/10 border border-[#25d366]/30 text-[#25d366] font-syne font-semibold py-3 rounded-xl hover:bg-[#25d366]/15 transition-colors"
            >
            💬 WhatsApp Us
          </a>
        </div>
      </div>
    </>
  );
}
