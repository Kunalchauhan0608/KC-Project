import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SERVICES } from "@/lib/data";
import { CTABanner } from "@/components/UI";

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = SERVICES.find((s) => s.id === params.slug);
  if (!service) return {};
  return {
    title: `${service.label} Services — Shreeji Marketers`,
    description: service.desc,
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = SERVICES.find((s) => s.id === params.slug);
  if (!service) notFound();

  const otherServices = SERVICES.filter((s) => s.id !== service.id).slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-16 px-4 overflow-hidden">
        <div className="glow-blob w-[600px] h-[600px] bg-accent/8 -top-40 right-0" />
        <div className="max-w-[1200px] mx-auto relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-[#7a7a95] mb-8">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-accent transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#e4e4f0]">{service.label}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-5xl mb-5">{service.emoji}</div>
              <div className="tag-pill mb-4">{service.shortLabel}</div>
              <h1 className="font-[Outfit] font-extrabold text-[clamp(2rem,4vw,3rem)] text-white">
                <span className="grad-text">{service.tagline}</span>
              </h1>
              <p className="text-[#9090b0] text-lg leading-relaxed mb-8">{service.desc}</p>

              <div className="flex flex-wrap gap-2 mb-8">
                {service.features.map((f) => (
                  <span key={f} className="text-sm px-3 py-1.5 rounded-full border text-accent/80 border-accent/20 bg-accent/8">
                    {f}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-accent to-[#ea580c] text-white font-syne font-700 px-7 py-3.5 rounded-xl shadow-lg shadow-accent/20 hover:shadow-accent/35 hover:-translate-y-0.5 transition-all"
                >
                  Get Free Consultation →
                </Link>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 border border-white/15 text-white font-syne font-600 px-7 py-3.5 rounded-xl hover:border-accent/40 hover:text-accent transition-all"
                >
                  View Pricing
                </Link>
              </div>
            </div>

            {/* Quick stats card */}
            <div className="bg-[#10121a] border border-white/7 rounded-2xl p-8">
              <h3 className="font-syne font-700 text-white mb-5">Why Clients Choose SJM for {service.shortLabel}</h3>
              <div className="space-y-3 mb-6">
                {[
                  { label: "Avg. Client Growth", val: "+280%" },
                  { label: "Time to First Results", val: "60–90 days" },
                  { label: "Client Retention Rate", val: "98%" },
                  { label: "Active Certifications", val: "60+" },
                ].map(({ label, val }) => (
                  <div key={label} className="flex justify-between items-center py-2.5 border-b border-white/5 text-sm">
                    <span className="text-[#7a7a95]">{label}</span>
                    <span className="font-syne font-700 text-accent">{val}</span>
                  </div>
                ))}
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Sub-services grid */}
      <section className="py-16 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-10">
            <div className="tag-pill mb-4">What&apos;s Included</div>
            <h2 className="font-syne font-800 text-[clamp(1.8rem,3vw,2.5rem)] text-white mb-3">
              Our <span className="grad-text">{service.shortLabel} Services</span> in Detail
            </h2>
            <p className="text-[#7a7a95] max-w-[520px] mx-auto text-sm leading-relaxed">
              Everything covered under this service, delivered by certified specialists, tracked with real-time metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {service.subsections.map(({ title, icon, desc }) => (
              <div key={title} className="bg-[#10121a] border border-white/7 rounded-2xl p-6 card-hover">
                <div className="text-3xl mb-4">{icon}</div>
                <h3 className="font-syne font-700 text-white text-sm mb-2">{title}</h3>
                <p className="text-[#7a7a95] text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why SJM for this service */}
      <section className="py-16 px-4 bg-white/[0.01]">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="tag-pill mb-5">Why Choose SJM</div>
            <h2 className="font-syne font-800 text-[clamp(1.6rem,3vw,2.3rem)] text-white mb-5 leading-tight">
              Why SJM for <span className="grad-text">{service.label}?</span>
            </h2>
            <ul className="space-y-3">
              {[
                `Certified ${service.shortLabel} specialists with 5+ years of focused experience`,
                "Transparent monthly reporting — KPIs that actually matter to your business",
                "Dedicated account manager with direct access via WhatsApp and email",
                "Proven track record with 500+ brands across 12+ industries in India",
                "Custom strategy tailored to your specific market, goals, and budget",
                "No long-term lock-in — results keep you here, not rigid contracts",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-[#9090b0] text-sm">
                  <svg className="w-4 h-4 text-accent mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#10121a] border border-white/7 rounded-2xl p-8">
            <h3 className="font-syne font-700 text-white mb-3">
              Claim Your Free {service.shortLabel} Audit
            </h3>
            <p className="text-[#7a7a95] text-sm leading-relaxed mb-6">
              Our team will analyze your current {service.label.toLowerCase()} performance and deliver a prioritized action plan — completely free, no strings attached.
            </p>
            <div className="space-y-3 mb-6">
              {[
                "✓  Full performance audit of your current setup",
                "✓  Competitor gap analysis",
                "✓  Prioritized 90-day action plan",
                "✓  Live Q&A with a senior specialist",
              ].map((t) => (
                <div key={t} className="text-sm text-[#9090b0]">{t}</div>
              ))}
            </div>
            <Link href="/contact"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-accent to-[#ea580c] text-white font-syne font-700 py-3.5 rounded-xl hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5 transition-all"
            >
              Claim Free Audit →
            </Link>
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="py-16 px-4">
        <div className="max-w-[1200px] mx-auto">
          <h3 className="font-syne font-700 text-white text-xl mb-6">Explore Other Services</h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherServices.map((s) => (
              <Link key={s.id} href={`/services/${s.id}`}>
                <div className="bg-[#10121a] border border-white/7 rounded-xl p-5 card-hover cursor-pointer group h-full">
                  <div className="text-2xl mb-2">{s.emoji}</div>
                  <div className="font-syne font-700 text-white text-sm group-hover:text-accent transition-colors">{s.shortLabel}</div>
                  <div className="text-[#7a7a95] text-xs mt-1">{s.tagline}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title={`Ready to Scale with <span class="grad-text">${service.shortLabel}?</span>`}
        sub="Start with a free audit. Our experts will build a custom strategy tailored to your goals."
      />
    </>
  );
}
