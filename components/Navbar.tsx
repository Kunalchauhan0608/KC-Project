"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const services = [
  { href: "/services/seo", label: "SEO Services" },
  { href: "/services/google-ads", label: "Google Ads" },
  { href: "/services/meta-ads", label: "Meta Ads" },
  { href: "/services/performance-marketing", label: "Performance Marketing" },
  { href: "/services/video-creation", label: "Video Creation" },
  { href: "/services/web-development", label: "Web Development" },
  { href: "/services/graphic-designing", label: "Graphic Designing" },
  { href: "/services/social-media", label: "Social Media" },
  { href: "/services/meme-marketing", label: "Meme Marketing" },
  { href: "/services/ecommerce", label: "Ecommerce Marketing" },
  { href: "/services/growth-hacking", label: "Growth Hacking" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const navLink = (href: string, label: string) => {
    const active = pathname === href;
    return (
      <Link
        href={href}
        className={`nav-link text-sm font-medium transition-colors font-[Outfit] ${
          active ? "text-accent active" : "text-[#b0b0c8] hover:text-accent"
        }`}
      >
        {label}
      </Link>
    );
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#07080b]/90 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex items-center justify-between h-[72px]">

          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-9 h-9 bg-gradient-to-br from-accent to-[#ea580c] rounded-[10px] flex items-center justify-center font-[Outfit] font-black text-[15px] text-white shadow-lg shadow-accent/20">
              SJM
            </div>
            {/* visible text changed from "ShreejiMarketers" → "SJM" */}
            <span className="font-[Outfit] font-black text-lg text-white leading-none hidden sm:block tracking-tight">
              S<span className="text-accent">JM</span>
            </span>
          </Link>

          {/* ── Desktop Nav ── */}
          <div className="hidden lg:flex items-center gap-8">
            {navLink("/", "Home")}
            {navLink("/about", "About")}

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className={`nav-link text-sm font-[Outfit] font-medium flex items-center gap-1.5 transition-colors ${
                  pathname.startsWith("/services")
                    ? "text-accent active"
                    : "text-[#b0b0c8] hover:text-accent"
                }`}
              >
                Services
                <svg
                  className="w-3.5 h-3.5 transition-transform group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {/* Dropdown panel */}
              <div className="absolute top-[calc(100%+14px)] left-1/2 -translate-x-1/2 w-[520px] bg-[#0d0e16] border border-white/[0.07] rounded-2xl p-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 shadow-2xl shadow-black/50">
                <div className="grid grid-cols-2 gap-1">
                  <Link
                    href="/services"
                    className="col-span-2 flex items-center gap-2 px-3 py-2.5 rounded-lg bg-accent/10 border border-accent/20 text-accent text-sm font-[Outfit] font-bold mb-1 hover:bg-accent/15 transition-colors"
                  >
                    <span>🚀</span> All Services Overview
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

            {navLink("/case-studies", "Case Studies")}
            {navLink("/blog", "Blog")}
            {navLink("/contact", "Contact")}
          </div>

          {/* ── CTA + Mobile Toggle ── */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center gap-1.5 bg-gradient-to-r from-accent to-[#ea580c] text-white text-sm font-[Outfit] font-bold px-5 py-2.5 rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30"
            >
              Free Consultation
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 flex flex-col justify-center items-center gap-[5px] rounded-lg hover:bg-white/5 transition-colors"
              aria-label="Toggle menu"
            >
              <span className={`block w-5 h-0.5 bg-white rounded transition-all ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block w-5 h-0.5 bg-white rounded transition-all ${mobileOpen ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`block w-5 h-0.5 bg-white rounded transition-all ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* ── Mobile Panel ── */}
      <div
        className={`fixed top-0 right-0 h-full w-[300px] bg-[#0a0b10] border-l border-white/[0.07] z-50 lg:hidden transition-transform duration-300 flex flex-col overflow-y-auto ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Mobile panel header — logo updated to SJM */}
        <div className="flex items-center justify-between px-5 h-[72px] border-b border-white/[0.07] shrink-0">
          <Link href="/" className="flex items-center gap-2.5" onClick={() => setMobileOpen(false)}>
            <div className="w-8 h-8 bg-gradient-to-br from-accent to-[#ea580c] rounded-[8px] flex items-center justify-center font-[Outfit] font-black text-[13px] text-white">
              SJM
            </div>
            <span className="font-[Outfit] font-black text-lg text-white tracking-tight">
              S<span className="text-accent">JM</span>
            </span>
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-white/5"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="flex-1 px-5 py-6 flex flex-col gap-1">
          {/* Static nav links */}
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`block px-3 py-3 rounded-lg font-[Outfit] font-semibold text-base transition-colors ${
                pathname === href
                  ? "text-accent bg-accent/10"
                  : "text-[#b0b0c8] hover:text-white hover:bg-white/5"
              }`}
            >
              {label}
            </Link>
          ))}

          {/*
           * ── SERVICES ROW ──────────────────────────────
           * FIX: Single row with two separate interactive zones:
           *   Left  → Link to /services page
           *   Right → Arrow button toggles submenu
           * Removes the duplicate "All Services" item entirely.
           */}
          <div className={`flex items-center rounded-lg overflow-hidden transition-colors ${
            pathname.startsWith("/services") ? "bg-accent/10" : "hover:bg-white/5"
          }`}>
            {/* Text — navigates to /services */}
            <Link
              href="/services"
              className={`flex-1 px-3 py-3 font-[Outfit] font-semibold text-base transition-colors ${
                pathname.startsWith("/services")
                  ? "text-accent"
                  : "text-[#b0b0c8] hover:text-white"
              }`}
            >
              Services
            </Link>
            {/* Arrow — expands submenu only */}
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="px-3 py-3 text-[#b0b0c8] hover:text-white transition-colors"
              aria-label="Toggle services submenu"
            >
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          </div>

          {/* Submenu */}
          <div
            className={`overflow-hidden transition-all duration-300 ${
              servicesOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="ml-4 flex flex-col gap-1 border-l border-white/[0.07] pl-3 py-1">
              {services.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="block py-2 text-sm font-[Outfit] text-[#7a7a95] hover:text-accent transition-colors"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Remaining nav links */}
          {[
            { href: "/case-studies", label: "Case Studies" },
            { href: "/blog", label: "Blog" },
            { href: "/contact", label: "Contact" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`block px-3 py-3 rounded-lg font-[Outfit] font-semibold text-base transition-colors ${
                pathname === href
                  ? "text-accent bg-accent/10"
                  : "text-[#b0b0c8] hover:text-white hover:bg-white/5"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="px-5 pb-8 shrink-0">
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-accent to-[#ea580c] text-white font-[Outfit] font-bold py-3 rounded-xl text-base shadow-lg shadow-accent/25 hover:shadow-accent/40 transition-shadow"
          >
            Free Consultation →
          </Link>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 w-full mt-3 bg-[#25d366]/10 border border-[#25d366]/30 text-[#25d366] font-[Outfit] font-semibold py-3 rounded-xl text-base transition-colors hover:bg-[#25d366]/15"
          >
            💬 WhatsApp Us
          </a>
        </div>
      </div>
    </>
  );
}
