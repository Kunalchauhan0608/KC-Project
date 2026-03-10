import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES } from "@/lib/data";
import { PageHero, CTABanner } from "@/components/UI";

export const metadata: Metadata = {
  title: "Digital Marketing Services — SEO, Google Ads, Meta Ads & More",
  description: "Explore all SJM digital marketing services: SEO, Google Ads, Meta Ads, Performance Marketing, Video Creation, Web Development, Graphic Design, and more.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        tag="Our Services"
        title='Full-Stack <span class="grad-text">Digital Marketing</span> Services'
        sub="From SEO to social media, paid ads to web development — everything your brand needs to dominate the digital landscape."
      />

      <section className="py-16 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <Link key={s.id} href={`/services/${s.id}`}>
                <div className="bg-[#10121a] border border-white/7 rounded-2xl p-8 h-full card-hover cursor-pointer group">
                  <div className="flex items-start gap-4 mb-5">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl shrink-0"
                      style={{ background: `${s.color}15` }}
                    >
                      {s.emoji}
                    </div>
                    <div>
                      <h3 className="font-syne font-700 text-white text-lg group-hover:text-accent transition-colors leading-tight mb-1">
                        {s.label}
                      </h3>
                      <p className="text-accent text-xs font-syne font-700">{s.tagline}</p>
                    </div>
                  </div>

                  <p className="text-[#7a7a95] text-sm leading-relaxed mb-5">{s.desc}</p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {s.features.slice(0, 4).map((f) => (
                      <span key={f}
                        className="text-xs px-2.5 py-1 rounded-full border text-accent/80 border-accent/20 bg-accent/8"
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-1.5 text-accent text-sm font-syne font-700 group-hover:gap-3 transition-all">
                    View Details
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison / Why hire */}
      <section className="py-16 px-4 bg-white/[0.01]">
        <div className="max-w-[900px] mx-auto">
          <div className="text-center mb-10">
            <div className="tag-pill mb-4">Not Sure Where to Start?</div>
            <h2 className="font-syne font-800 text-[clamp(1.6rem,3vw,2.3rem)] text-white mb-3">
              We&apos;ll Build the Right <span className="grad-text">Strategy for You</span>
            </h2>
            <p className="text-[#9090b0] max-w-[500px] mx-auto text-sm leading-relaxed">
              Every business is different. Book a free strategy call and our experts will audit your digital presence and recommend the exact services to achieve your goals.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
            {[
              { icon: "🔍", t: "Free Audit", d: "We review your current SEO, ads, and online presence." },
              { icon: "📋", t: "Custom Strategy", d: "We recommend a tailored service mix for your goals." },
              { icon: "🚀", t: "Fast Execution", d: "Campaigns and strategies go live within days." },
            ].map(({ icon, t, d }) => (
              <div key={t} className="bg-[#10121a] border border-white/7 rounded-2xl p-6 text-center">
                <div className="text-3xl mb-3">{icon}</div>
                <h4 className="font-syne font-700 text-white mb-2">{t}</h4>
                <p className="text-[#7a7a95] text-sm">{d}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-accent to-[#ea580c] text-white font-syne font-700 px-8 py-4 rounded-xl shadow-lg shadow-accent/20 hover:shadow-accent/35 hover:-translate-y-0.5 transition-all text-base"
            >
              Book Free Strategy Session →
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
        title='Ready to <span class="grad-text">Get Started?</span>'
        sub="Join 500+ brands growing with SJM. Your first consultation is completely free."
      />
    </>
  );
}
