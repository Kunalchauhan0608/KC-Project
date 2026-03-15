import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { STATS } from "@/lib/data";
import { PageHero, StatCard, CTABanner } from "@/components/UI";

export const metadata: Metadata = {
  title: "About Shreeji Marketers — Our Story, Mission & Team",
  description:
    "Learn about SJM's founding story, digital marketing philosophy, expert team, and why 500+ brands trust us for data-driven growth.",
};

const team = [
  {
    name: "Kunal Chauhan",
    role: "Founder & CEO",
    exp: "5 yrs",
    img: "/image/Kunal Chauhan.jpeg",
    bio: "Serial entrepreneur and digital strategist who built SJM from 3 clients to 500+ brands.",
  },
  {
    name: "Divya Shah",
    role: "Head of SEO",
    exp: "4 yrs",
    img: "/image/Divya Shah.png",
    bio: "Ex-Google specialist who has ranked 2,000+ keywords on Page 1 across industries.",
  },
  {
    name: "Rohan Mehta",
    role: "Performance Marketing Lead",
    exp: "4 yrs",
    img: "/image/Rohan Mehta.png",
    bio: "Managed ₹25Cr+ in ad spend with an average 6.8x ROAS across 100+ brands.",
  },
  {
    name: "Prachi Jain",
    role: "Creative Director",
    exp: "8 yrs",
    img: "/image/Prachi Jain.png",
    bio: "Award-winning designer leading all brand identity and creative campaigns.",
  },
];

const values = [
  {
    icon: "🎯",
    title: "Results Over Vanity",
    desc: "We measure success by revenue, leads, and profit.",
  },
  {
    icon: "🔍",
    title: "Data-First Thinking",
    desc: "Every decision is backed by research and measurable testing.",
  },
  {
    icon: "🤝",
    title: "Partnership Mindset",
    desc: "We treat your business like our own.",
  },
  {
    icon: "🚀",
    title: "Continuous Innovation",
    desc: "We constantly test new channels and strategies.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        tag="About Us"
        title='We&apos;re <span class="grad-text">Shreeji Marketers</span> —<br/>Your Digital Growth Partners'
        sub="Founded on the belief that great marketing is equal parts science and art."
      />

      {/* Story */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">

          <div>
            <div className="tag-pill mb-4">Our Story</div>

            <h2 className="font-syne font-800 text-[clamp(1.6rem,3vw,2.4rem)] text-white mb-4 leading-tight">
              Built by Marketers{" "}
              <span className="grad-text">for Businesses</span>
            </h2>

            <p className="text-[#9090b0] leading-relaxed mb-4 text-sm md:text-base">
              Shreeji Marketers (SJM) was founded to make enterprise-grade
              marketing accessible for businesses of all sizes.
            </p>

            <p className="text-[#9090b0] leading-relaxed mb-6 text-sm md:text-base">
              Today we serve 500+ brands globally with measurable growth,
              transparent reporting, and long-term partnerships.
            </p>

            <ul className="space-y-3">
              {[
                "Founded in 2018 with 3 clients — now 500+ brands",
                "Offices in Surat, Mumbai, Bangalore",
                "45+ certified specialists",
                "₹50Cr+ revenue generated for clients",
                "Google & Meta certified partner",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-[#9090b0] text-sm">
                  <svg
                    className="w-4 h-4 text-accent mt-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {STATS.map((s) => (
              <StatCard key={s.num} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20 px-4 bg-white/[0.02]">
        <div className="max-w-[1200px] mx-auto">

          <div className="text-center mb-10">
            <div className="tag-pill mb-3">Core Values</div>

            <h2 className="font-syne font-800 text-[clamp(1.6rem,3vw,2.3rem)] text-white">
              The Principles That <span className="grad-text">Drive Everything</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-[#10121a] border border-white/7 rounded-2xl p-6 text-center"
              >
                <div className="text-4xl mb-4">{icon}</div>

                <h3 className="font-syne font-700 text-white mb-2">{title}</h3>

                <p className="text-[#7a7a95] text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-[1200px] mx-auto">

          <div className="text-center mb-10">
            <div className="tag-pill mb-3">Our Team</div>

            <h2 className="font-syne font-800 text-[clamp(1.6rem,3vw,2.3rem)] text-white">
              Led by <span className="grad-text">Industry Experts</span>
            </h2>

            <p className="text-[#7a7a95] max-w-[500px] mx-auto text-sm">
              Experts across SEO, paid media, and digital strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {team.map(({ name, role, exp, img, bio }) => (
              <div
                key={name}
                className="bg-[#10121a] border border-white/7 rounded-2xl p-6 text-center transition hover:-translate-y-2"
              >

                <div className="flex justify-center mb-4">
                  <Image
                    src={img}
                    alt={name}
                    width={110}
                    height={110}
                    className="rounded-full object-cover border border-white/10"
                  />
                </div>

                <h3 className="font-syne font-700 text-white text-base mb-1">
                  {name}
                </h3>

                <div className="text-accent text-sm mb-1">{role}</div>

                <div className="text-[#7a7a95] text-xs mb-2">
                  {exp} experience
                </div>

                <p className="text-[#7a7a95] text-xs leading-relaxed">
                  {bio}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title='Start Your <span class="grad-text">Growth Journey</span> Today'
        sub="Book a free strategy session with our experts."
      />
    </>
  );
}