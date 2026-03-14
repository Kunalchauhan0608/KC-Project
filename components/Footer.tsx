import Link from "next/link";

const services = [
  { href: "/services/seo", label: "SEO Services" },
  { href: "/services/google-ads", label: "Google Ads" },
  { href: "/services/meta-ads", label: "Meta Ads" },
  { href: "/services/performance-marketing", label: "Performance Marketing" },
  { href: "/services/video-creation", label: "Video Creation" },
  { href: "/services/web-development", label: "Web Development" },
];

export default function Footer() {
  return (
    <footer className="bg-[#050608] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">

        {/* ── Top grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand — logo updated to match header */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-accent to-[#ea580c] rounded-[10px] flex items-center justify-center font-[Outfit] font-black text-[14px] text-white">
                SJM
              </div>
              {/* Updated from "ShreejiMarketers" → "SJM" matching header */}
              <span className="font-[Outfit] font-black text-lg text-white tracking-tight">
                S<span className="text-accent">JM</span>
              </span>
            </Link>
            <p className="text-[#7a7a95] text-sm leading-relaxed mb-5 max-w-[260px] font-[Outfit]">
              Smart Marketing. Real Growth. Data-driven digital strategies that deliver measurable results for brands of all sizes.
            </p>
            <div className="flex gap-2.5">
              {[
                { icon: "𝑓", label: "Facebook" },
                { icon: "ig", label: "Instagram" },
                { icon: "𝕏", label: "Twitter" },
                { icon: "in", label: "LinkedIn" },
                { icon: "▶", label: "YouTube" },
              ].map(({ icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="w-9 h-9 bg-white/[0.04] border border-white/[0.07] rounded-lg flex items-center justify-center text-sm text-[#7a7a95] hover:text-accent hover:border-accent/30 transition-all"
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-[Outfit] font-bold text-white text-sm mb-4">Company</h4>
            <div className="flex flex-col gap-2.5">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/case-studies", label: "Case Studies" },
                { href: "/blog", label: "Blog" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-[#7a7a95] text-sm font-[Outfit] hover:text-accent transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-[Outfit] font-bold text-white text-sm mb-4">Services</h4>
            <div className="flex flex-col gap-2.5">
              {services.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-[#7a7a95] text-sm font-[Outfit] hover:text-accent transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h4 className="font-[Outfit] font-bold text-white text-sm mb-4">Get In Touch</h4>
            <div className="flex flex-col gap-3 mb-6">
              {[
                { icon: "✉", text: "hello@sjm.in" },
                { icon: "📞", text: "+91 98765 43210" },
                { icon: "📍", text: "Surat, Gujarat, India" },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-start gap-2.5 text-sm text-[#7a7a95] font-[Outfit]">
                  <span className="text-accent mt-0.5">{icon}</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>
            <p className="text-[#7a7a95] text-xs mb-2.5 font-[Outfit]">Weekly marketing insights, free.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="form-input text-sm py-2.5 px-3 flex-1 font-[Outfit]"
              />
              <button className="bg-gradient-to-r from-accent to-[#ea580c] text-white text-sm font-[Outfit] font-semibold px-3.5 py-2.5 rounded-lg shrink-0 hover:shadow-lg hover:shadow-accent/20 transition-all">
                →
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="divider mb-6" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#7a7a95] text-xs font-[Outfit]">© 2025 SJM. All rights reserved.</p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Service", "Sitemap"].map((t) => (
              <button key={t} className="text-[#7a7a95] text-xs font-[Outfit] hover:text-accent transition-colors">
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* WhatsApp FAB */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#25d366] rounded-full flex items-center justify-center text-2xl shadow-xl shadow-[#25d366]/30 hover:scale-110 transition-transform z-40"
        aria-label="WhatsApp"
      >
        💬
      </a>
    </footer>
  );
}
