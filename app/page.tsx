import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES, STATS, TESTIMONIALS, CASE_STUDIES, BLOG_POSTS, FAQS, INDUSTRIES, SEO_PROCESS } from "@/lib/data";
import { SectionHeader, StatCard, ServiceCard, TestimonialCard, CaseCard, FAQAccordion, BlogCard, CTABanner } from "@/components/UI";

export const metadata: Metadata = {
  title: "Shreeji Marketers (SJM) — Smart Marketing. Real Growth.",
  description: "SJM helps brands grow with advanced SEO, Google Ads, Meta Ads, performance marketing, and data-driven digital campaigns that deliver measurable ROI.",
};

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-[72px]">
        {/* Background glows */}
        <div className="glow-blob w-[700px] h-[700px] bg-accent/10 -top-40 -right-60" />
        <div className="glow-blob w-[400px] h-[400px] bg-accent/6 bottom-0 -left-40" />
        {/* Noise */}
        <div className="noise absolute inset-0 pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10 py-20 w-full">
          <div className="max-w-[780px]">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 text-sm text-accent font-syne font-700 mb-6 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              India&apos;s #1 Performance-Driven Digital Agency
            </div>

            <h1 className="font-syne font-800 leading-[1.08] text-white mb-6 animate-fade-up">
              Grow Your Business with{" "}
              <span className="grad-text">Result-Driven</span>
              <br />Digital Marketing
            </h1>

            <p className="text-[#9090b0] text-lg leading-relaxed max-w-[580px] mb-9 animate-fade-up delay-200">
              Shreeji Marketers (SJM) helps brands scale with advanced SEO strategies, performance marketing, and data-driven digital campaigns that deliver measurable, transparent ROI.
            </p>

            <div className="flex flex-wrap gap-3 mb-14 animate-fade-up delay-300">
              <Link href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-accent to-[#ea580c] text-white font-syne font-700 px-7 py-4 rounded-xl shadow-xl shadow-accent/20 hover:shadow-accent/40 hover:-translate-y-0.5 transition-all animate-pulse-glow text-base"
              >
                Get Free Consultation →
              </Link>
              <Link href="/services"
                className="inline-flex items-center gap-2 border border-white/15 text-white font-syne font-600 px-7 py-4 rounded-xl hover:border-accent/40 hover:text-accent transition-all text-base"
              >
                View Services
              </Link>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8 animate-fade-up delay-400">
              {STATS.map((s) => (
                <div key={s.num}>
                  <div className="font-syne font-black text-3xl text-accent">{s.num}</div>
                  <div className="text-[#7a7a95] text-sm mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating card – desktop only */}
          <div className="hidden xl:block absolute right-0 top-1/2 -translate-y-1/2 bg-[#10121a] border border-white/7 rounded-2xl p-6 w-[270px] animate-float shadow-2xl shadow-black/40">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#10b981] animate-pulse" />
              <span className="text-[#10b981] text-xs font-syne font-700">Live Results</span>
            </div>
            {[
              { l: "Organic Traffic", v: "+340%", c: "#10b981" },
              { l: "Ad ROAS", v: "8.2x", c: "#f97316" },
              { l: "Leads Generated", v: "1,240/mo", c: "#3b82f6" },
              { l: "Client Growth Avg", v: "+280%", c: "#f59e0b" },
            ].map(({ l, v, c }) => (
              <div key={l} className="flex justify-between py-2.5 border-b border-white/5 last:border-0 text-sm">
                <span className="text-[#7a7a95]">{l}</span>
                <span className="font-syne font-700" style={{ color: c }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MARQUEE ──────────────────────────────────────── */}
      <div className="bg-accent py-3 overflow-hidden">
        <div className="flex gap-12 animate-marquee whitespace-nowrap" style={{ width: "max-content" }}>
          {[...Array(2)].flatMap((_, r) =>
            ["SEO Services", "Google Ads", "Meta Ads", "Performance Marketing", "Video Creation", "Web Development", "Graphic Design", "Ecommerce Marketing", "Social Media", "Growth Hacking", "Lead Generation", "Brand Strategy"].map((t, i) => (
              <span key={`${r}-${i}`} className="font-syne font-700 text-sm text-white uppercase tracking-widest">
                {t} &nbsp;•
              </span>
            ))
          )}
        </div>
      </div>

      {/* ── ABOUT SNIPPET ─────────────────────────────────── */}
      <section className="py-24 px-4">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              tag="About SJM"
              title='We Are <span class="grad-text">Digital Growth</span> Engineers'
              sub="Shreeji Marketers isn't just another agency. We're a full-stack digital growth team combining analytical precision with creative strategy to build campaigns that actually move your bottom line."
            />
            <ul className="space-y-3 mb-8">
              {[
                "Transparent reporting with real-time client dashboards",
                "Dedicated account manager assigned to every project",
                "Data-first methodology — no vanity metrics, only results",
                "Industry specialists across 12+ verticals and markets",
                "Proven frameworks delivering consistent, compounding ROI",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-[#9090b0] text-sm">
                  <svg className="w-4 h-4 text-accent mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {t}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <Link href="/about" className="inline-flex items-center gap-2 bg-gradient-to-r from-accent to-[#ea580c] text-white font-syne font-700 px-6 py-3 rounded-xl hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/25 transition-all">
                Learn More About Us
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 border border-white/15 text-white font-syne font-600 px-6 py-3 rounded-xl hover:border-accent/40 hover:text-accent transition-all">
                Talk to Us
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {STATS.map((s) => <StatCard key={s.num} {...s} />)}
          </div>
        </div>
      </section>

      <div className="divider mx-4 sm:mx-6" />

      {/* ── SERVICES GRID ─────────────────────────────────── */}
      <section className="py-24 px-4">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader
            tag="Our Services"
            title='Everything You Need to <span class="grad-text">Dominate Online</span>'
            sub="From SEO to social media, paid ads to web development — we cover the full digital spectrum with specialist-level expertise."
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

      {/* ── WHY CHOOSE SJM ────────────────────────────────── */}
      <section className="py-24 px-4 bg-white/[0.01]">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader
            tag="Why SJM"
            title='Why 500+ Brands Choose <span class="grad-text">Shreeji Marketers</span>'
            center
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: "📊", title: "100% Data-Driven", desc: "Every decision backed by analytics, A/B testing, and real conversion data. Zero guesswork." },
              { icon: "🎯", title: "ROI-Focused Always", desc: "We optimize for revenue and profit, not vanity metrics. Your bottom line is our north star." },
              { icon: "🔄", title: "Full Funnel Expertise", desc: "From first touchpoint to loyal customer — we build strategies that work at every stage." },
              { icon: "⚡", title: "Rapid Execution", desc: "Campaigns go live in days. Agile, fast-moving teams that match your ambition." },
              { icon: "🤝", title: "Radical Transparency", desc: "Monthly reports, live dashboards, weekly calls. No surprises, only clarity." },
              { icon: "🚀", title: "Scalable Systems", desc: "We build repeatable growth systems, not one-off campaigns that lose steam." },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-[#10121a] border border-white/7 rounded-2xl p-7 card-hover">
                <div className="text-3xl mb-4">{icon}</div>
                <h3 className="font-syne font-700 text-white mb-2.5">{title}</h3>
                <p className="text-[#7a7a95] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEO PROCESS ───────────────────────────────────── */}
      <section className="py-24 px-4">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <SectionHeader
              tag="Our Process"
              title='Proven <span class="grad-text">SEO Growth</span> Framework'
              sub="A systematic, repeatable 5-step process that takes your website from invisible to industry-leading in organic search."
            />
            <div className="space-y-6">
              {SEO_PROCESS.map(({ n, t, d }) => (
                <div key={n} className="flex gap-4">
                  <div className="w-11 h-11 min-w-[44px] bg-accent/12 border border-accent/25 rounded-full flex items-center justify-center font-syne font-800 text-accent text-sm">
                    {n}
                  </div>
                  <div>
                    <h4 className="font-syne font-700 text-white mb-1">{t}</h4>
                    <p className="text-[#7a7a95] text-sm leading-relaxed">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#10121a] border border-white/7 rounded-2xl p-8 lg:sticky lg:top-24">
            <h3 className="font-syne font-700 text-white mb-6">Typical SEO Results Timeline</h3>
            <div className="space-y-5">
              {[
                { label: "Month 1–2: Technical Fixes + Indexing", pct: 25 },
                { label: "Month 3–4: Keyword Gains + Content Boost", pct: 55 },
                { label: "Month 5–6: Page 1 Rankings Emerge", pct: 75 },
                { label: "Month 7+: Authority + Sustained Traffic", pct: 95 },
              ].map(({ label, pct }) => (
                <div key={label}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-[#9090b0]">{label}</span>
                    <span className="text-accent font-syne font-700">{pct}%</span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-fill" style={{ width: `${pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <Link href="/services/seo"
              className="mt-7 flex items-center justify-center gap-2 bg-gradient-to-r from-accent to-[#ea580c] text-white font-syne font-700 py-3.5 rounded-xl hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5 transition-all"
            >
              Explore SEO Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ──────────────────────────────────── */}
      <section className="py-24 px-4 bg-white/[0.01]">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader
            tag="Results"
            title='Real Results for <span class="grad-text">Real Businesses</span>'
            sub="Numbers don't lie. Here's a snapshot of the growth we've driven across industries."
            center
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CASE_STUDIES.slice(0, 3).map((c, i) => <CaseCard key={i} {...c} />)}
          </div>
          <div className="text-center mt-10">
            <Link href="/case-studies"
              className="inline-flex items-center gap-2 border border-white/15 text-white font-syne font-600 px-6 py-3 rounded-xl hover:border-accent/40 hover:text-accent transition-all"
            >
              View All Case Studies →
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────── */}
      <section className="py-24 px-4">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader tag="Testimonials" title='What Our <span class="grad-text">Clients Say</span>' center />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t, i) => <TestimonialCard key={i} {...t} />)}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ────────────────────────────────────── */}
      <section className="py-20 px-4 bg-white/[0.01]">
        <div className="max-w-[1200px] mx-auto text-center">
          <SectionHeader tag="Industries" title='We Serve <span class="grad-text">12+ Industries</span>' center />
          <div className="flex flex-wrap gap-3 justify-center">
            {INDUSTRIES.map((ind) => (
              <div key={ind}
                className="bg-[#10121a] border border-white/7 rounded-full px-5 py-2.5 text-sm text-[#9090b0] hover:border-accent/30 hover:text-accent transition-all cursor-default"
              >
                {ind}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOG PREVIEW ──────────────────────────────────── */}
      <section className="py-24 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <SectionHeader tag="Blog" title='Marketing <span class="grad-text">Insights & Strategies</span>' />
            <Link href="/blog" className="text-accent font-syne font-700 text-sm hover:underline shrink-0">
              View All Posts →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BLOG_POSTS.slice(0, 3).map((b) => <BlogCard key={b.slug} {...b} />)}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-white/[0.01]">
        <div className="max-w-[760px] mx-auto">
          <SectionHeader
            tag="FAQ"
            title='Frequently Asked <span class="grad-text">Questions</span>'
            center
          />
          <FAQAccordion faqs={FAQS} />
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <CTABanner
        title='Let&apos;s Build Your <span class="grad-text">Digital Success Story</span>'
        sub="Book a free 30-minute strategy session. No commitment, just clarity on how to grow your business online."
      />
    </>
  );
}
