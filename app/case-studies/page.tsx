import type { Metadata } from "next";
import Link from "next/link";
import { CASE_STUDIES } from "@/lib/data";
import { PageHero, CaseCard, CTABanner } from "@/components/UI";

export const metadata: Metadata = {
  title: "Case Studies — Real Results for Real Businesses",
  description: "See how Shreeji Marketers has delivered 280–420% growth across ecommerce, real estate, healthcare, education, SaaS, and more.",
};

const metrics = [
  { num: "+420%", label: "Peak Organic Traffic Growth", icon: "📈" },
  { num: "7.4x", label: "Best Campaign ROAS", icon: "💰" },
  { num: "-62%", label: "Cost Per Lead Reduction", icon: "⬇️" },
  { num: "400+", label: "Monthly Leads for Single Client", icon: "🎯" },
];

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        tag="Case Studies"
        title='Real Results for <span class="grad-text">Real Businesses</span>'
        sub="Detailed breakdowns of how we've driven measurable, compounding growth for brands across every major industry."
      />

      {/* Highlight metrics */}
      <section className="px-4 pb-16">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {metrics.map(({ num, label, icon }) => (
              <div key={label} className="bg-[#10121a] border border-white/7 rounded-2xl p-6 text-center card-hover">
                <div className="text-3xl mb-2">{icon}</div>
                <div className="font-syne font-black text-3xl text-accent mb-1">{num}</div>
                <div className="text-[#7a7a95] text-xs">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All case studies */}
      <section className="py-8 px-4 pb-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CASE_STUDIES.map((c, i) => (
              <div key={i} className="flex flex-col">
                <div className="bg-[#10121a] border border-white/7 rounded-2xl overflow-hidden card-hover flex flex-col h-full">
                  <div className={`h-44 bg-gradient-to-br ${c.bg} flex items-center justify-center text-5xl`}>
                    {c.emoji}
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="tag-pill mb-3">{c.category}</div>
                    <h3 className="font-syne font-700 text-white text-lg mb-2">{c.client}</h3>
                    <p className="text-[#7a7a95] text-sm leading-relaxed mb-4">{c.challenge}</p>
                    <div className="space-y-2.5 mb-5 flex-1">
                      {c.results.map((r) => (
                        <div key={r.label} className="flex justify-between items-center py-2 border-b border-white/5 text-sm">
                          <span className="text-[#7a7a95]">{r.label}</span>
                          <span className="font-syne font-700 text-accent">{r.val}</span>
                        </div>
                      ))}
                    </div>
                    <Link href="/contact"
                      className="flex items-center justify-center gap-1.5 border border-white/10 text-[#9090b0] text-sm font-syne font-600 py-2.5 rounded-xl hover:border-accent/30 hover:text-accent transition-all"
                    >
                      Get Similar Results →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4 bg-white/[0.01]">
        <div className="max-w-[900px] mx-auto text-center">
          <div className="tag-pill mb-5">Our Approach</div>
          <h2 className="font-syne font-800 text-[clamp(1.6rem,3vw,2.3rem)] text-white mb-4">
            How We <span className="grad-text">Deliver These Results</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-8">
            {[
              { n: "01", t: "Deep Discovery", d: "We audit your business, market, competitors, and current performance before making any recommendations." },
              { n: "02", t: "Custom Strategy", d: "We build a tailored strategy with specific channels, tactics, and KPI targets for your unique goals." },
              { n: "03", t: "Execute & Optimize", d: "We launch, measure, and iterate every week — compounding gains month over month." },
            ].map(({ n, t, d }) => (
              <div key={n} className="bg-[#10121a] border border-white/7 rounded-2xl p-6 text-left">
                <div className="font-syne font-800 text-4xl text-accent/20 mb-3">{n}</div>
                <h4 className="font-syne font-700 text-white mb-2">{t}</h4>
                <p className="text-[#7a7a95] text-sm leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title='Your Success Story <span class="grad-text">Starts Here</span>'
        sub="Join 500+ brands that trust SJM for their digital growth. Book your free strategy call today."
      />
    </>
  );
}
