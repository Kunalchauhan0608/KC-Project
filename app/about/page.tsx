import type { Metadata } from "next";
import Link from "next/link";
import { STATS } from "@/lib/data";
import { PageHero, StatCard, CTABanner } from "@/components/UI";

export const metadata: Metadata = {
  title: "About Shreeji Marketers — Our Story, Mission & Team",
  description: "Learn about SJM's founding story, digital marketing philosophy, expert team, and why 500+ brands trust us for data-driven growth.",
};

const team = [
  { name: "Aakash Patel", role: "Founder & CEO", exp: "12 yrs", icon: "👨‍💼", bio: "Serial entrepreneur and digital strategist who built SJM from 3 clients to 500+ brands." },
  { name: "Divya Shah", role: "Head of SEO", exp: "9 yrs", icon: "👩‍💻", bio: "Ex-Google specialist who has ranked 2,000+ keywords on Page 1 across every industry." },
  { name: "Rohan Mehta", role: "Performance Marketing Lead", exp: "8 yrs", icon: "👨‍📊", bio: "Managed ₹25Cr+ in ad spend with an average 6.8x ROAS across 100+ brands." },
  { name: "Prachi Jain", role: "Creative Director", exp: "10 yrs", icon: "👩‍🎨", bio: "Award-winning designer who leads all brand identity and creative campaign work." },
];

const values = [
  { icon: "🎯", title: "Results Over Vanity", desc: "We measure success by revenue, leads, and profit — not impressions, likes, or reach." },
  { icon: "🔍", title: "Data-First Thinking", desc: "Every recommendation is backed by evidence, research, and measurable testing." },
  { icon: "🤝", title: "Partnership Mindset", desc: "We treat your business like our own, with the same urgency and sense of ownership." },
  { icon: "🚀", title: "Continuous Innovation", desc: "We're always learning, testing new channels, and staying ahead of algorithm changes." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        tag="About Us"
        title='We&apos;re <span class="grad-text">Shreeji Marketers</span> —<br />Your Digital Growth Partners'
        sub="Founded on the belief that great marketing is equal parts science and art, SJM has grown into one of India's most trusted digital marketing agencies."
      />

      {/* Story */}
      <section className="py-20 px-4">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="tag-pill mb-5">Our Story</div>
            <h2 className="font-syne font-800 text-[clamp(1.8rem,3vw,2.5rem)] text-white leading-tight mb-5">
              Built by Marketers,{" "}
              <span className="grad-text">for Businesses</span>
            </h2>
            <p className="text-[#9090b0] leading-relaxed mb-4">
              Shreeji Marketers (SJM) was founded with a clear mission: make enterprise-grade digital marketing accessible to businesses of all sizes. We saw too many companies burning budgets on agencies that prioritized impressions over impact, activity over outcomes.
            </p>
            <p className="text-[#9090b0] leading-relaxed mb-6">
              Today, we serve 500+ brands across India and globally — from bootstrapped startups to established enterprises — with the same relentless focus on measurable growth, transparent reporting, and long-term relationships built on trust.
            </p>
            <ul className="space-y-3">
              {[
                "Founded in 2018 with 3 clients — now serving 500+ brands",
                "Offices in Surat, Mumbai, and Bangalore",
                "45+ certified digital marketing specialists on the team",
                "₹50Cr+ revenue generated for clients across industries",
                "Google Premier Partner & Meta Business Partner",
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

          <div className="grid grid-cols-2 gap-4">
            {STATS.map((s) => <StatCard key={s.num} {...s} />)}
          </div>
        </div>
      </section>

      <div className="divider mx-4 sm:mx-6" />

      {/* Mission / Vision / Philosophy */}
      <section className="py-20 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: "🎯", title: "Our Mission", desc: "To deliver data-driven digital marketing that creates real, measurable business impact for every client we work with." },
              { icon: "🔭", title: "Our Vision", desc: "To be India's most trusted digital growth partner — known globally for results, transparency, and client success." },
              { icon: "💡", title: "Our Philosophy", desc: "Marketing is an investment, not an expense. Every rupee must generate a measurable, attributable return." },
              { icon: "🤝", title: "Our Promise", desc: "We treat your business exactly like our own — with identical urgency, care, and obsession for growth." },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-[#10121a] border border-white/7 rounded-2xl p-7 card-hover">
                <div className="text-3xl mb-4">{icon}</div>
                <h3 className="font-syne font-700 text-white mb-3">{title}</h3>
                <p className="text-[#7a7a95] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-white/[0.01]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <div className="tag-pill mb-4">Core Values</div>
            <h2 className="font-syne font-800 text-[clamp(1.8rem,3vw,2.5rem)] text-white mb-3">
              The Principles That <span className="grad-text">Drive Everything</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(({ icon, title, desc }) => (
              <div key={title} className="bg-[#10121a] border border-white/7 rounded-2xl p-7 card-hover text-center">
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="font-syne font-700 text-white mb-3">{title}</h3>
                <p className="text-[#7a7a95] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <div className="tag-pill mb-4">Our Team</div>
            <h2 className="font-syne font-800 text-[clamp(1.8rem,3vw,2.5rem)] text-white mb-3">
              Led by <span className="grad-text">Industry Experts</span>
            </h2>
            <p className="text-[#7a7a95] max-w-[500px] mx-auto">
              Our team combines decades of experience across SEO, paid media, creative strategy, and technology.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map(({ name, role, exp, icon, bio }) => (
              <div key={name} className="bg-[#10121a] border border-white/7 rounded-2xl p-7 card-hover text-center">
                <div className="text-5xl mb-4">{icon}</div>
                <h3 className="font-syne font-700 text-white mb-1">{name}</h3>
                <div className="text-accent text-sm font-syne font-700 mb-1">{role}</div>
                <div className="text-[#7a7a95] text-xs mb-3">{exp} experience</div>
                <p className="text-[#7a7a95] text-xs leading-relaxed">{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 px-4">
        <div className="max-w-[900px] mx-auto">
          <div className="bg-gradient-to-br from-accent/10 to-transparent border border-accent/15 rounded-3xl p-10 text-center">
            <h2 className="font-syne font-800 text-2xl text-white mb-3">
              <span className="grad-text">EEAT-Certified</span> Digital Expertise
            </h2>
            <p className="text-[#9090b0] max-w-[520px] mx-auto mb-6 text-sm leading-relaxed">
              Our team holds 60+ active certifications including Google Ads, Meta Blueprint, HubSpot, SEMrush, and more. We continuously invest in education so you always get cutting-edge strategies.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {["Google Premier Partner", "Meta Business Partner", "HubSpot Certified", "SEMrush Academy", "Shopify Partner", "Moz Associate"].map((cert) => (
                <div key={cert} className="bg-white/5 border border-white/8 rounded-full px-4 py-2 text-sm text-[#9090b0]">{cert}</div>
              ))}
            </div>
            <Link href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-accent to-[#ea580c] text-white font-syne font-700 px-7 py-3.5 rounded-xl hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/25 transition-all"
            >
              Work With Our Experts →
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
        title='Start Your <span class="grad-text">Growth Journey</span> Today'
        sub="Book a free strategy session with our experts. No commitments, just a genuine conversation about growing your business."
      />
    </>
  );
}
