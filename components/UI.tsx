"use client";
import Link from "next/link";
import { useState } from "react";
import type { FAQ } from "@/lib/data";

// ─── Section Header ──────────────────────────────────────
export function SectionHeader({
  tag, title, sub, center = false,
}: {
  tag?: string;
  title: string;
  sub?: string;
  center?: boolean;
}) {
  return (
    <div className={`mb-8 sm:mb-12 ${center ? "text-center" : ""}`}>
      {tag && (
        <div className={`tag-pill mb-3 sm:mb-4 ${center ? "mx-auto" : ""}`}>
          {tag}
        </div>
      )}
      <h2
        className="font-[Outfit] font-extrabold text-[clamp(1.55rem,4vw,2.8rem)] leading-[1.12] mb-3 sm:mb-4 text-white"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {sub && (
        <p className={`text-[#7a7a95] text-sm sm:text-[1.05rem] leading-relaxed font-[Outfit] ${center ? "mx-auto max-w-[520px] sm:max-w-[580px]" : "max-w-[580px]"}`}>
          {sub}
        </p>
      )}
    </div>
  );
}

// ─── Stat Card ───────────────────────────────────────────
export function StatCard({ num, label }: { num: string; label: string }) {
  return (
    <div className="bg-[#10121a] border border-white/[0.07] rounded-2xl p-5 sm:p-7 text-center card-hover">
      <div className="font-[Outfit] font-black text-2xl sm:text-4xl text-accent mb-1">{num}</div>
      <div className="text-[#7a7a95] text-xs sm:text-sm font-[Outfit]">{label}</div>
    </div>
  );
}

// ─── Service Card ─────────────────────────────────────────
export function ServiceCard({
  emoji, title, desc, href, color,
}: {
  emoji: string;
  title: string;
  desc: string;
  href: string;
  color: string;
}) {
  return (
    <Link href={href} className="block h-full">
      <div className="bg-[#10121a] border border-white/[0.07] rounded-2xl p-5 sm:p-7 h-full card-hover group flex flex-col">
        <div
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-xl sm:text-2xl mb-4 sm:mb-5 shrink-0"
          style={{ background: `${color}18` }}
        >
          {emoji}
        </div>
        <h3 className="font-[Outfit] font-bold text-white text-sm sm:text-base mb-2 group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-[#7a7a95] text-xs sm:text-sm leading-relaxed mb-4 font-[Outfit] flex-1">
          {desc}
        </p>
        <div className="flex items-center gap-1.5 text-accent text-xs sm:text-sm font-semibold font-[Outfit] mt-auto">
          Learn more
          <svg
            className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-1 transition-transform"
            fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

// ─── Testimonial Card ─────────────────────────────────────
export function TestimonialCard({
  name, role, company, text, stars, initials,
}: {
  name: string;
  role: string;
  company: string;
  text: string;
  stars: number;
  initials: string;
}) {
  return (
    <div className="bg-[#10121a] border border-white/[0.07] rounded-2xl p-5 sm:p-7 card-hover flex flex-col">
      <div className="flex gap-0.5 mb-3 sm:mb-4">
        {Array(stars).fill(0).map((_, i) => (
          <svg key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent" fill="currentColor" viewBox="0 0 24 24">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ))}
      </div>
      <p className="text-[#9090b0] text-xs sm:text-sm leading-relaxed flex-1 mb-4 sm:mb-5 font-[Outfit]">
        &ldquo;{text}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-accent to-[#ea580c] flex items-center justify-center font-[Outfit] font-bold text-white text-xs sm:text-sm shrink-0">
          {initials}
        </div>
        <div>
          <div className="font-[Outfit] font-bold text-white text-xs sm:text-sm">{name}</div>
          <div className="text-[#7a7a95] text-xs font-[Outfit]">{role}, {company}</div>
        </div>
      </div>
    </div>
  );
}

// ─── Case Study Card ──────────────────────────────────────
export function CaseCard({
  emoji, category, client, bg, results,
}: {
  emoji: string;
  category: string;
  client: string;
  bg: string;
  results: { label: string; val: string }[];
}) {
  return (
    <div className="bg-[#10121a] border border-white/[0.07] rounded-2xl overflow-hidden card-hover">
      <div className={`h-36 sm:h-44 bg-gradient-to-br ${bg} flex items-center justify-center text-4xl sm:text-5xl`}>
        {emoji}
      </div>
      <div className="p-4 sm:p-6">
        <div className="tag-pill mb-3">{category}</div>
        <h3 className="font-[Outfit] font-bold text-white mb-3 sm:mb-4 text-sm sm:text-base">{client}</h3>
        <div className="space-y-2">
          {results.map((r) => (
            <div key={r.label} className="flex justify-between items-center py-1.5 sm:py-2 border-b border-white/[0.05] text-xs sm:text-sm">
              <span className="text-[#7a7a95] font-[Outfit]">{r.label}</span>
              <span className="font-bold text-accent font-[Outfit]">{r.val}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── FAQ Accordion ────────────────────────────────────────
export function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div>
      {faqs.map((f, i) => (
        <div key={i} className="border-b border-white/[0.07] py-4 sm:py-5">
          <button
            className="w-full flex items-start justify-between gap-3 sm:gap-4 text-left group"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="font-[Outfit] font-bold text-white text-sm sm:text-base group-hover:text-accent transition-colors leading-snug">
              {f.q}
            </span>
            <span
              className="w-6 h-6 rounded-full border border-accent/40 flex items-center justify-center text-accent text-lg shrink-0 transition-transform duration-300 mt-0.5"
              style={{ transform: open === i ? "rotate(45deg)" : "rotate(0deg)" }}
            >
              +
            </span>
          </button>
          <div
            className="overflow-hidden transition-all duration-300"
            style={{ maxHeight: open === i ? "300px" : "0", opacity: open === i ? 1 : 0 }}
          >
            <p className="text-[#7a7a95] text-xs sm:text-sm leading-relaxed pt-3 font-[Outfit]">
              {f.a}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Blog Card ────────────────────────────────────────────
export function BlogCard({
  slug, emoji, tag, title, excerpt, date, readTime, bgColor,
}: {
  slug: string;
  emoji: string;
  tag: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  bgColor: string;
}) {
  return (
    <Link href={`/blog/${slug}`} className="block h-full">
      <div className="bg-[#10121a] border border-white/[0.07] rounded-2xl overflow-hidden card-hover group h-full flex flex-col">
        <div className={`h-36 sm:h-44 bg-gradient-to-br ${bgColor} flex items-center justify-center text-4xl sm:text-5xl shrink-0`}>
          {emoji}
        </div>
        <div className="p-4 sm:p-6 flex flex-col flex-1">
          <div className="text-accent text-[10px] sm:text-[11px] font-[Outfit] font-bold uppercase tracking-widest mb-2">
            {tag}
          </div>
          <h3 className="font-[Outfit] font-bold text-white text-sm sm:text-base leading-snug mb-2 sm:mb-3 group-hover:text-accent transition-colors flex-1">
            {title}
          </h3>
          <p className="text-[#7a7a95] text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-2 font-[Outfit]">
            {excerpt}
          </p>
          <div className="flex items-center justify-between mt-auto">
            <div className="flex gap-2 sm:gap-3 text-[#7a7a95] text-[10px] sm:text-xs font-[Outfit]">
              <span>{date}</span>
              <span>•</span>
              <span>{readTime}</span>
            </div>
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent group-hover:translate-x-1 transition-transform"
              fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}

// ─── CTA Banner ───────────────────────────────────────────
export function CTABanner({ title, sub }: { title: string; sub: string }) {
  return (
    <section className="py-14 sm:py-20 px-4">
      <div className="max-w-[1200px] mx-auto">
        <div className="relative overflow-hidden bg-gradient-to-br from-accent/15 to-[#ea580c]/[0.08] border border-accent/20 rounded-2xl sm:rounded-3xl px-5 sm:px-8 py-12 sm:py-16 text-center">
          <div className="glow-blob w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-accent/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          <div className="relative z-10">
            <div className="tag-pill mb-4 sm:mb-5 mx-auto">Ready to Grow?</div>
            <h2
              className="font-[Outfit] font-extrabold text-[clamp(1.5rem,4vw,3rem)] text-white leading-[1.12] mb-3 sm:mb-4"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <p className="text-[#9090b0] text-sm sm:text-base max-w-[420px] sm:max-w-[460px] mx-auto leading-relaxed mb-7 sm:mb-8 font-[Outfit]">
              {sub}
            </p>
            <div className="flex flex-col xs:flex-row flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-accent to-[#ea580c] text-white font-[Outfit] font-bold px-6 sm:px-7 py-3.5 rounded-xl shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:-translate-y-0.5 transition-all animate-pulse-glow text-sm sm:text-base"
              >
                Book Free Consultation →
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 border border-white/15 text-white font-[Outfit] font-semibold px-6 sm:px-7 py-3.5 rounded-xl hover:border-accent/40 hover:text-accent transition-all text-sm sm:text-base"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Page Hero ────────────────────────────────────────────
export function PageHero({
  tag, title, sub, center = true,
}: {
  tag: string;
  title: string;
  sub: string;
  center?: boolean;
}) {
  return (
    <section className="relative pt-28 sm:pt-36 pb-14 sm:pb-20 px-4 overflow-hidden">
      <div className="glow-blob w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-accent/[0.08] -top-20 right-0" />
      <div className="glow-blob w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] bg-accent/[0.05] bottom-0 left-0" />
      <div className={`max-w-[1200px] mx-auto relative z-10 ${center ? "text-center" : ""}`}>
        <div className={`tag-pill mb-4 sm:mb-5 ${center ? "mx-auto" : ""}`}>{tag}</div>
        <h1
          className="font-[Outfit] font-extrabold text-[clamp(1.8rem,5vw,3.5rem)] leading-[1.1] text-white mb-4 sm:mb-5"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p className={`text-[#7a7a95] text-base sm:text-lg leading-relaxed font-[Outfit] ${center ? "max-w-[560px] sm:max-w-[620px] mx-auto" : "max-w-[620px]"}`}>
          {sub}
        </p>
      </div>
    </section>
  );
}
