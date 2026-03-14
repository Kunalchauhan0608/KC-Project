"use client";
import Link from "next/link";
import { useState } from "react";
import {
  SERVICES, STATS, TESTIMONIALS, CASE_STUDIES,
  BLOG_POSTS, FAQS, INDUSTRIES, SEO_PROCESS,
} from "@/lib/data";
import {
  SectionHeader, StatCard, ServiceCard, TestimonialCard,
  CaseCard, FAQAccordion, BlogCard, CTABanner,
} from "@/components/UI";

// ── Category map ─────────────────────────────────────────
const CATEGORIES = [
  { key: "performance", label: "Performance",       ids: ["seo", "google-ads", "meta-ads"] },
  { key: "content",     label: "Content & Social",  ids: ["social-media", "meme-marketing", "video-creation"] },
  { key: "dev",         label: "Dev & Design",       ids: ["web-development", "graphic-designing"] },
  { key: "growth",      label: "Growth & Strategy", ids: ["ecommerce", "digital-marketing", "growth-hacking"] },
] as const;
type CatKey = (typeof CATEGORIES)[number]["key"];

// ── Tabbed Services ───────────────────────────────────────
function TabbedServices() {
  const [active, setActive] = useState<CatKey>("performance");
  const current = CATEGORIES.find((c) => c.key === active)!;
  const visible = SERVICES.filter((s) => current.ids.includes(s.id as never));

  return (
    <div>
      {/* Tab buttons, horizontal scroll on mobile */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap mb-8">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActive(cat.key)}
            className={`
              shrink-0 px-4 py-2.5 rounded-xl text-sm font-[Outfit] font-semibold
              border transition-all duration-200 whitespace-nowrap
              ${active === cat.key
                ? "bg-gradient-to-r from-accent to-[#ea580c] text-white border-transparent shadow-lg shadow-accent/20"
                : "bg-[#10121a] border-white/[0.07] text-[#9090b0] hover:border-accent/30 hover:text-accent"
              }
            `}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div
        key={active}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 animate-fade-up"
      >
        {visible.map((s) => (
          <ServiceCard
            key={s.id}
            emoji={s.emoji}
            title={s.shortLabel}
            desc={s.tagline}
            href={`/services/${s.id}`}
            color={s.color}
          />
        ))}
      </div>

      <div className="text-center mt-8">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 border border-white/15 text-white font-[Outfit] font-semibold px-6 py-3 rounded-xl hover:border-accent/40 hover:text-accent transition-all text-sm"
        >
          View All Services →
        </Link>
      </div>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      {/*
       * ── HERO ─────────────────────────────────────────
       * Mobile:  min-h driven, stacked layout, no floating card
       * Tablet:  same stacked layout with card below
       * Desktop: 2.16:1 aspect ratio, card absolutely centered right
       *
       * We use `min-h-[100svh]` on mobile so the full viewport
       * (including safe areas) is used, then switch to the
       * aspect-ratio approach from lg upward.
       */}
      <section className="relative w-full overflow-hidden flex items-center pt-[64px] sm:pt-[72px] min-h-[100svh] lg:min-h-0 lg:aspect-[2.16/1] lg:max-h-[900px]">
        {/* Glows */}
        <div className="glow-blob w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:w-[700px] lg:h-[700px] bg-accent/10 -top-20 -right-20 lg:-top-40 lg:-right-60" />
        <div className="glow-blob w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] bg-accent/[0.06] bottom-0 -left-20 lg:-left-40" />
        <div className="noise absolute inset-0 pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10 w-full py-10 sm:py-14 lg:py-0 lg:h-full lg:flex lg:items-center">

          {/* Left content */}
          <div className="w-full lg:max-w-[640px] xl:max-w-[680px]">

            {/* Badge */}
            <div
            style={{ marginBottom: "20px" }}
             className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm text-accent font-[Outfit] font-semibold mb-5 animate-fade-in">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent animate-pulse shrink-0" />
              <span>India&apos;s #1 Performance-Driven Digital Marketing Agency</span>
            </div>

            {/* H1 */}
            <h1 className="font-[Outfit] font-extrabold text-[clamp(1.9rem,6vw,3.5rem)] leading-[1.1] tracking-tight text-white mb-4 sm:mb-5 animate-fade-up">
              Digital Marketing Agency
              <br />
              That Delivers{" "}
              <span className="grad-text">Real Business Growth</span>
            </h1>

            {/* Body */}
            <p className="text-[#9090b0] text-[clamp(0.875rem,2vw,1.05rem)] leading-[1.7] mb-7 font-[Outfit] animate-fade-up delay-200 max-w-[560px]">
              SJM helps startups and established brands scale faster with expert SEO, Google Ads,
              Meta Ads, and full-funnel performance marketing. 
            </p>

            {/* CTAs */}
            <div className="flex flex-col xs:flex-row flex-wrap gap-3 mb-8 sm:mb-10 animate-fade-up delay-300">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-accent to-[#ea580c] text-white font-[Outfit] font-bold px-6 py-3.5 rounded-xl shadow-xl shadow-accent/20 hover:shadow-accent/40 hover:-translate-y-0.5 transition-all animate-pulse-glow text-sm sm:text-base"
              >
                Get Free Strategy Session →
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 border border-white/15 text-white font-[Outfit] font-semibold px-6 py-3.5 rounded-xl hover:border-accent/40 hover:text-accent transition-all text-sm sm:text-base"
              >
                Explore Services
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 xs:grid-cols-4 gap-4 sm:gap-6 animate-fade-up delay-400">
              {STATS.map((s) => (
                <div key={s.num} className="flex flex-col">
                  <div className="font-[Outfit] font-black text-[clamp(1.4rem,3.5vw,2rem)] text-accent leading-none">
                    {s.num}
                  </div>
                  <div className="text-[#7a7a95] text-xs sm:text-sm mt-1 font-[Outfit] leading-tight">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/*
           * Results card, desktop only (xl+), absolutely centered right.
           * On mobile/tablet it is rendered separately below the hero.
           */}
          <div className="hidden xl:flex xl:absolute xl:right-0 xl:top-1/2 xl:-translate-y-1/2 flex-col bg-[#10121a] border border-white/[0.07] rounded-2xl p-5 w-[250px] animate-float shadow-2xl shadow-black/40">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse shrink-0" />
              <span className="text-[#10b981] text-[10px] font-[Outfit] font-bold uppercase tracking-wider">
                Live Client Results
              </span>
            </div>
            {[
              { l: "Organic Traffic",   v: "+340%", c: "#10b981" },
              { l: "Google Ads ROAS",   v: "8.2×",  c: "#f97316" },
              { l: "Leads / Month",     v: "1,240", c: "#3b82f6" },
              { l: "Revenue Growth",    v: "+280%", c: "#f59e0b" },
            ].map(({ l, v, c }) => (
              <div key={l} className="flex justify-between items-center py-2.5 border-b border-white/[0.05] last:border-0 gap-2">
                <span className="text-[#7a7a95] text-xs font-[Outfit] leading-snug">{l}</span>
                <span className="font-[Outfit] font-bold text-sm shrink-0" style={{ color: c }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results card, mobile & tablet only (below hero) */}
      <div className="xl:hidden px-4 pt-6 pb-2">
        <div className="max-w-sm mx-auto bg-[#10121a] border border-white/[0.07] rounded-2xl p-5 shadow-xl shadow-black/30">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse shrink-0" />
            <span className="text-[#10b981] text-[10px] font-[Outfit] font-bold uppercase tracking-wider">
              Live Client Results
            </span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { l: "Organic Traffic",   v: "+340%", c: "#10b981" },
              { l: "Google Ads ROAS",   v: "8.2×",  c: "#f97316" },
              { l: "Leads / Month",     v: "1,240", c: "#3b82f6" },
              { l: "Revenue Growth",    v: "+280%", c: "#f59e0b" },
            ].map(({ l, v, c }) => (
              <div key={l} className="bg-white/[0.03] rounded-xl p-3">
                <div className="font-[Outfit] font-black text-lg sm:text-xl" style={{ color: c }}>{v}</div>
                <div className="text-[#7a7a95] text-xs font-[Outfit] mt-0.5 leading-tight">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── MARQUEE ──────────────────────────────────────── */}
      <div className="bg-accent py-2.5 sm:py-3 overflow-hidden mt-6 xl:mt-0" aria-hidden="true">
        <div className="flex gap-8 sm:gap-12 animate-marquee whitespace-nowrap" style={{ width: "max-content" }}>
          {[...Array(2)].flatMap((_, r) =>
            [
              "SEO Services", "Google Ads", "Meta Ads", "Performance Marketing",
              "Video Production", "Web Development", "Graphic Design",
              "Ecommerce Marketing", "Social Media", "Growth Hacking",
              "Lead Generation", "Brand Strategy",
            ].map((t, i) => (
              <span key={`${r}-${i}`} className="font-[Outfit] font-bold text-xs sm:text-sm text-white uppercase tracking-widest">
                {t}&nbsp;•
              </span>
            ))
          )}
        </div>
      </div>

      {/* ── ABOUT ────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 px-4">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <SectionHeader
              tag="About SJM"
              title='We Are Your <span class="grad-text">Digital Growth</span> Partner'
              sub="SJM isn't just another digital marketing agency. We're a full-stack growth team combining analytical precision with creative strategy, building campaigns that directly improve your revenue."
            />
            <ul className="space-y-3 mb-8" role="list">
              {[
                "Transparent reporting with real-time client dashboards",
                "Dedicated account manager assigned to every project",
                "Data-first methodology, zero vanity metrics, only business results",
                "Industry specialists across 12+ verticals and markets",
                "Proven growth frameworks delivering consistent, compounding ROI",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-[#9090b0] text-sm font-[Outfit]">
                  <svg className="w-4 h-4 text-accent mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {t}
                </li>
              ))}
            </ul>
            <div className="flex flex-col xs:flex-row flex-wrap gap-3">
              <Link href="/about" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-accent to-[#ea580c] text-white font-[Outfit] font-bold px-6 py-3 rounded-xl hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/25 transition-all text-sm sm:text-base">
                About SJM
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 border border-white/15 text-white font-[Outfit] font-semibold px-6 py-3 rounded-xl hover:border-accent/40 hover:text-accent transition-all text-sm sm:text-base">
                Talk to an Expert
              </Link>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {STATS.map((s) => <StatCard key={s.num} {...s} />)}
          </div>
        </div>
      </section>

      <div className="divider mx-4 sm:mx-6" />

      {/* ── SERVICES (Tabbed) ─────────────────────────────── */}
      <section className="py-14 sm:py-20 px-4">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader
            tag="Our Services"
            title='Full-Stack Digital Marketing <span class="grad-text">Services</span>'
            sub="From SEO to paid ads, social media to web development, SJM covers the entire digital spectrum with specialist-level expertise."
            center
          />
          <TabbedServices />
        </div>
      </section>

      <div className="divider mx-4 sm:mx-6" />

      {/* ── WHY SJM ──────────────────────────────────────── */}
      <section className="py-14 sm:py-20 px-4 bg-white/[0.01]">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader
            tag="Why SJM"
            title='Why 500+ Brands Trust <span class="grad-text">SJM</span>'
            center
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {[
              { title: "100% Data-Driven Decisions",  desc: "Every strategy is backed by analytics, A/B testing, and real conversion data. No guesswork, ever." },
              { title: "Revenue-Focused Marketing",    desc: "We optimise for revenue and profit margins, not impressions or clicks. Your growth is our KPI." },
              { title: "Full-Funnel Expertise",        desc: "From first touch to repeat purchase, SJM builds marketing systems that perform at every funnel stage." },
              { title: "Fast Campaign Execution",      desc: "Campaigns go live within days. Our agile teams move at the pace your business demands." },
              { title: "Radical Transparency",         desc: "Live dashboards, monthly performance reports, weekly calls. No surprises, just full visibility." },
              { title: "Scalable Growth Systems",      desc: "We engineer repeatable, compounding growth systems, not short-lived campaigns that lose momentum." },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-[#10121a] border border-white/[0.07] rounded-2xl p-6 sm:p-7 card-hover">
                <h3 className="font-[Outfit] font-bold text-[1rem] sm:text-[1.05rem] text-white mb-2">{title}</h3>
                <p className="text-[#7a7a95] text-sm leading-relaxed font-[Outfit]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEO PROCESS ──────────────────────────────────── */}
      <section className="py-14 sm:py-20 px-4">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <SectionHeader
              tag="SEO Process"
              title='SJM&apos;s Proven <span class="grad-text">SEO Growth</span> Framework'
              sub="A systematic, repeatable 5-step SEO process that takes your website from invisible to industry-leading in organic search."
            />
            <div className="space-y-5 sm:space-y-6">
              {SEO_PROCESS.map(({ n, t, d }) => (
                <div key={n} className="flex gap-4">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 min-w-[40px] sm:min-w-[44px] bg-accent/[0.12] border border-accent/25 rounded-full flex items-center justify-center font-[Outfit] font-extrabold text-accent text-xs sm:text-sm shrink-0">
                    {n}
                  </div>
                  <div>
                    <h4 className="font-[Outfit] font-bold text-white mb-1 text-sm sm:text-base">{t}</h4>
                    <p className="text-[#7a7a95] text-sm leading-relaxed font-[Outfit]">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#10121a] border border-white/[0.07] rounded-2xl p-6 sm:p-8 lg:sticky lg:top-24">
            <h3 className="font-[Outfit] font-bold text-[1rem] sm:text-[1.1rem] text-white mb-5 sm:mb-6">
              Typical SEO Results Timeline
            </h3>
            <div className="space-y-4 sm:space-y-5">
              {[
                { label: "Month 1–2: Technical Audit & Fixes",      pct: 25 },
                { label: "Month 3–4: Rankings & Content Growth",    pct: 55 },
                { label: "Month 5–6: Page 1 Rankings Emerge",       pct: 75 },
                { label: "Month 7+: Authority & Sustained Traffic", pct: 95 },
              ].map(({ label, pct }) => (
                <div key={label}>
                  <div className="flex justify-between text-xs sm:text-sm mb-2">
                    <span className="text-[#9090b0] font-[Outfit]">{label}</span>
                    <span className="text-accent font-[Outfit] font-bold">{pct}%</span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-fill" style={{ width: `${pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="/services/seo"
              className="mt-6 flex items-center justify-center gap-2 bg-gradient-to-r from-accent to-[#ea580c] text-white font-[Outfit] font-bold py-3.5 rounded-xl hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5 transition-all text-sm sm:text-base"
            >
              Explore SEO Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ─────────────────────────────────── */}
      <section className="py-14 sm:py-20 px-4 bg-white/[0.01]">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader
            tag="Case Studies"
            title='Proven Results for <span class="grad-text">Real Businesses</span>'
            sub="Numbers don't lie. Here's a snapshot of measurable growth SJM has driven across industries and business sizes."
            center
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {CASE_STUDIES.slice(0, 3).map((c, i) => (
              <CaseCard key={i} {...c} />
            ))}
          </div>
          <div className="text-center mt-8 sm:mt-10">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 border border-white/15 text-white font-[Outfit] font-semibold px-6 py-3 rounded-xl hover:border-accent/40 hover:text-accent transition-all text-sm"
            >
              View All Case Studies →
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────── */}
      <section className="py-14 sm:py-20 px-4">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader
            tag="Client Reviews"
            title='What SJM <span class="grad-text">Clients Say</span>'
            center
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {TESTIMONIALS.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ───────────────────────────────────── */}
      <section className="py-12 sm:py-16 px-4 bg-white/[0.01]">
        <div className="max-w-[1200px] mx-auto text-center">
          <SectionHeader
            tag="Industries We Serve"
            title='We Work Across <span class="grad-text">12+ Industries</span>'
            center
          />
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            {INDUSTRIES.map((ind) => (
              <div
                key={ind}
                className="bg-[#10121a] border border-white/[0.07] rounded-full px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-[Outfit] text-[#9090b0] hover:border-accent/30 hover:text-accent transition-all cursor-default"
              >
                {ind}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOG ─────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-12 gap-4">
            <SectionHeader
              tag="Digital Marketing Blog"
              title='Marketing <span class="grad-text">Insights & Strategies</span>'
            />
            <Link href="/blog" className="text-accent font-[Outfit] font-bold text-sm hover:underline shrink-0 self-start sm:self-auto">
              View All Articles →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {BLOG_POSTS.slice(0, 3).map((b) => (
              <BlogCard key={b.slug} {...b} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 px-4 bg-white/[0.01]">
        <div className="max-w-[720px] mx-auto">
          <SectionHeader
            tag="FAQ"
            title='Frequently Asked Questions <span class="grad-text">About SJM</span>'
            center
          />
          <FAQAccordion faqs={FAQS} />
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <CTABanner
        title='Ready to Grow? Let&apos;s Build Your <span class="grad-text">Digital Success Story</span>'
        sub="Book a free 30-minute strategy session with an SJM expert. No commitment, just a clear roadmap to grow your business online."
      />
    </>
  );
}
