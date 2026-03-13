import type { Metadata } from "next";
import Link from "next/link";
import {
  SERVICES, STATS, TESTIMONIALS, CASE_STUDIES,
  BLOG_POSTS, FAQS, INDUSTRIES, SEO_PROCESS,
} from "@/lib/data";
import {
  SectionHeader, StatCard, ServiceCard, TestimonialCard,
  CaseCard, FAQAccordion, BlogCard, CTABanner,
} from "@/components/UI";

export const metadata: Metadata = {
  title: "SJM — Digital Marketing Agency | SEO, Google Ads & Performance Marketing",
  description:
    "SJM is a performance-driven digital marketing agency helping brands scale with advanced SEO, Google Ads, Meta Ads, and data-driven campaigns that deliver measurable ROI.",
};

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-[72px]">
        <div className="glow-blob w-[700px] h-[700px] bg-accent/10 -top-40 -right-60" />
        <div className="glow-blob w-[400px] h-[400px] bg-accent/[0.06] bottom-0 -left-40" />
        <div className="noise absolute inset-0 pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10 py-20 w-full">
          <div className="max-w-[780px]">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 text-sm text-accent font-[Outfit] font-semibold mb-6 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              India&apos;s #1 Performance-Driven Digital Marketing Agency
            </div>

            <h1 className="font-[Outfit] font-extrabold text-[clamp(2.4rem,5.5vw,4rem)] leading-[1.08] tracking-tight text-white mb-6 animate-fade-up">
              Digital Marketing Agency
              <br />
              That Delivers{" "}
              <span className="grad-text">Real Business Growth</span>
            </h1>

            <p className="text-[#9090b0] text-[clamp(1rem,1.5vw,1.125rem)] leading-[1.75] max-w-[580px] mb-9 font-[Outfit] animate-fade-up delay-200">
              SJM helps startups and established brands scale faster with expert SEO, Google Ads,
              Meta Ads, and full-funnel performance marketing. Every campaign is built around
              measurable ROIno fluff, just results.
            </p>

            <div className="flex flex-wrap gap-3 mb-14 animate-fade-up delay-300">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-accent to-[#ea580c] text-white font-[Outfit] font-bold px-7 py-4 rounded-xl shadow-xl shadow-accent/20 hover:shadow-accent/40 hover:-translate-y-0.5 transition-all animate-pulse-glow text-base"
              >
                Get Free Strategy Session →
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 border border-white/15 text-white font-[Outfit] font-semibold px-7 py-4 rounded-xl hover:border-accent/40 hover:text-accent transition-all text-base"
              >
                Explore Services
              </Link>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8 animate-fade-up delay-400">
              {STATS.map((s) => (
                <div key={s.num}>
                  <div className="font-[Outfit] font-black text-[clamp(1.75rem,3vw,2.25rem)] text-accent leading-none">
                    {s.num}
                  </div>
                  <div className="text-[#7a7a95] text-sm mt-1 font-[Outfit]">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating card — desktop right / mobile below */}
          <div className="mt-12 xl:mt-0 xl:absolute xl:right-0 xl:top-1/2 xl:-translate-y-1/2 bg-[#10121a] border border-white/[0.07] rounded-2xl p-6 w-full sm:max-w-[360px] xl:w-[270px] mx-auto xl:mx-0 animate-float shadow-2xl shadow-black/40">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#10b981] animate-pulse" />
              <span className="text-[#10b981] text-xs font-[Outfit] font-bold uppercase tracking-wider">
                Live Client Results
              </span>
            </div>
            {[
              { l: "Organic Traffic Growth", v: "+340%", c: "#10b981" },
              { l: "Google Ads ROAS",        v: "8.2×",  c: "#f97316" },
              { l: "Leads Generated / Mo",   v: "1,240", c: "#3b82f6" },
              { l: "Avg. Revenue Growth",    v: "+280%", c: "#f59e0b" },
            ].map(({ l, v, c }) => (
              <div
                key={l}
                className="flex justify-between items-center py-3 border-b border-white/[0.05] last:border-0 gap-4"
              >
                <span className="text-[#7a7a95] text-sm font-[Outfit] leading-snug">{l}</span>
                <span className="font-[Outfit] font-bold text-base shrink-0" style={{ color: c }}>
                  {v}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MARQUEE ──────────────────────────────────────── */}
      <div className="bg-accent py-3 overflow-hidden" aria-hidden="true">
        <div className="flex gap-12 animate-marquee whitespace-nowrap" style={{ width: "max-content" }}>
          {[...Array(2)].flatMap((_, r) =>
            [
              "SEO Services", "Google Ads", "Meta Ads", "Performance Marketing",
              "Video Production", "Web Development", "Graphic Design",
              "Ecommerce Marketing", "Social Media Management",
              "Growth Hacking", "Lead Generation", "Brand Strategy",
            ].map((t, i) => (
              <span key={`${r}-${i}`} className="font-[Outfit] font-bold text-sm text-white uppercase tracking-widest">
                {t}&nbsp;•
              </span>
            ))
          )}
        </div>
      </div>

      {/* ── ABOUT ────────────────────────────────────────── */}
      <section className="py-24 px-4">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              tag="About SJM"
              title='We Are Your <span class="grad-text">Digital Growth</span> Partner'
              sub="SJM isn't just another digital marketing agency. We're a full-stack growth team combining analytical precision with creative strategy — building campaigns that directly improve your revenue."
            />
            <ul className="space-y-3 mb-8" role="list">
              {[
                "Transparent reporting with real-time client dashboards",
                "Dedicated account manager assigned to every project",
                "Data-first methodology — zero vanity metrics, only business results",
                "Industry specialists across 12+ verticals and markets",
                "Proven growth frameworks delivering consistent, compounding ROI",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-[#9090b0] text-sm font-[Outfit]">
                  <svg
                    className="w-4 h-4 text-accent mt-0.5 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {t}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-accent to-[#ea580c] text-white font-[Outfit] font-bold px-6 py-3 rounded-xl hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/25 transition-all"
              >
                About SJM
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-white/15 text-white font-[Outfit] font-semibold px-6 py-3 rounded-xl hover:border-accent/40 hover:text-accent transition-all"
              >
                Talk to an Expert
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {STATS.map((s) => (
              <StatCard key={s.num} {...s} />
            ))}
          </div>
        </div>
      </section>

      <div className="divider mx-4 sm:mx-6" />

      {/* ── SERVICES ─────────────────────────────────────── */}
      <section className="py-24 px-4">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader
            tag="Our Services"
            title='Full-Stack Digital Marketing <span class="grad-text">Services</span>'
            sub="From SEO to paid ads, social media to web development — SJM covers the entire digital spectrum with specialist-level expertise and accountable results."
            center
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {SERVICES.map((s) => (
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
        </div>
      </section>

      <div className="divider mx-4 sm:mx-6" />

      {/* ── WHY SJM ──────────────────────────────────────── */}
      <section className="py-24 px-4 bg-white/[0.01]">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader
            tag="Why SJM"
            title='Why 500+ Brands Trust <span class="grad-text">SJM</span>'
            center
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "100% Data-Driven Decisions",
                desc: "Every strategy is backed by analytics, A/B testing, and real conversion data. No guesswork — ever.",
              },
              {
                title: "Revenue-Focused Marketing",
                desc: "We optimise for revenue and profit margins, not impressions or clicks. Your growth is our KPI.",
              },
              {
                title: "Full-Funnel Expertise",
                desc: "From first touch to repeat purchase — SJM builds marketing systems that perform at every stage of the funnel.",
              },
              {
                title: "Fast Campaign Execution",
                desc: "Campaigns go live within days. Our agile teams move at the pace your business demands.",
              },
              {
                title: "Radical Transparency",
                desc: "Live dashboards, monthly performance reports, weekly calls. No surprises — just full visibility.",
              },
              {
                title: "Scalable Growth Systems",
                desc: "We engineer repeatable, compounding growth systems — not short-lived campaigns that lose momentum.",
              },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-[#10121a] border border-white/[0.07] rounded-2xl p-7 card-hover">
                <h3 className="font-[Outfit] font-bold text-[1.05rem] text-white mb-2.5">{title}</h3>
                <p className="text-[#7a7a95] text-sm leading-relaxed font-[Outfit]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEO PROCESS ──────────────────────────────────── */}
      <section className="py-24 px-4">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <SectionHeader
              tag="SEO Process"
              title='SJM&apos;s Proven <span class="grad-text">SEO Growth</span> Framework'
              sub="A systematic, repeatable 5-step SEO process that takes your website from invisible to industry-leading in organic search rankings."
            />
            <div className="space-y-6">
              {SEO_PROCESS.map(({ n, t, d }) => (
                <div key={n} className="flex gap-4">
                  <div className="w-11 h-11 min-w-[44px] bg-accent/[0.12] border border-accent/25 rounded-full flex items-center justify-center font-[Outfit] font-extrabold text-accent text-sm">
                    {n}
                  </div>
                  <div>
                    <h4 className="font-[Outfit] font-bold text-white mb-1">{t}</h4>
                    <p className="text-[#7a7a95] text-sm leading-relaxed font-[Outfit]">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#10121a] border border-white/[0.07] rounded-2xl p-8 lg:sticky lg:top-24">
            <h3 className="font-[Outfit] font-bold text-[1.1rem] text-white mb-6">
              Typical SEO Results Timeline
            </h3>
            <div className="space-y-5">
              {[
                { label: "Month 1–2: Technical Audit & Indexing Fixes",    pct: 25 },
                { label: "Month 3–4: Keyword Rankings & Content Growth",   pct: 55 },
                { label: "Month 5–6: Page 1 Rankings Emerge",              pct: 75 },
                { label: "Month 7+: Domain Authority & Sustained Traffic", pct: 95 },
              ].map(({ label, pct }) => (
                <div key={label}>
                  <div className="flex justify-between text-sm mb-2">
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
              className="mt-7 flex items-center justify-center gap-2 bg-gradient-to-r from-accent to-[#ea580c] text-white font-[Outfit] font-bold py-3.5 rounded-xl hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5 transition-all"
            >
              Explore SEO Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ─────────────────────────────────── */}
      <section className="py-24 px-4 bg-white/[0.01]">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader
            tag="Case Studies"
            title='Proven Results for <span class="grad-text">Real Businesses</span>'
            sub="Numbers don't lie. Here's a snapshot of measurable growth SJM has driven across industries and business sizes."
            center
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CASE_STUDIES.slice(0, 3).map((c, i) => (
              <CaseCard key={i} {...c} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 border border-white/15 text-white font-[Outfit] font-semibold px-6 py-3 rounded-xl hover:border-accent/40 hover:text-accent transition-all"
            >
              View All Case Studies →
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────── */}
      <section className="py-24 px-4">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader
            tag="Client Reviews"
            title='What SJM <span class="grad-text">Clients Say</span>'
            center
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ───────────────────────────────────── */}
      <section className="py-20 px-4 bg-white/[0.01]">
        <div className="max-w-[1200px] mx-auto text-center">
          <SectionHeader
            tag="Industries We Serve"
            title='Digital Marketing Across <span class="grad-text">12+ Industries</span>'
            center
          />
          <div className="flex flex-wrap gap-3 justify-center">
            {INDUSTRIES.map((ind) => (
              <div
                key={ind}
                className="bg-[#10121a] border border-white/[0.07] rounded-full px-5 py-2.5 text-sm font-[Outfit] text-[#9090b0] hover:border-accent/30 hover:text-accent transition-all cursor-default"
              >
                {ind}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOG ─────────────────────────────────────────── */}
      <section className="py-24 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <SectionHeader
              tag="Digital Marketing Blog"
              title='Marketing <span class="grad-text">Insights & Strategies</span>'
            />
            <Link href="/blog" className="text-accent font-[Outfit] font-bold text-sm hover:underline shrink-0">
              View All Articles →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BLOG_POSTS.slice(0, 3).map((b) => (
              <BlogCard key={b.slug} {...b} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-white/[0.01]">
        <div className="max-w-[760px] mx-auto">
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
        sub="Book a free 30-minute strategy session with an SJM expert. No commitment — just a clear roadmap to grow your business online."
      />
    </>
  );
}
