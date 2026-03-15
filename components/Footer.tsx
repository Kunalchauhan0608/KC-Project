import Link from "next/link";

const services = [
  { href: "/services/seo",                   label: "SEO Services" },
  { href: "/services/google-ads",            label: "Google Ads" },
  { href: "/services/meta-ads",              label: "Meta Ads" },
  { href: "/services/performance-marketing", label: "Performance Marketing" },
  { href: "/services/video-creation",        label: "Video Creation" },
  { href: "/services/web-development",       label: "Web Development" },
];

export default function Footer() {
  return (
    <footer className="bg-[#050608] border-t border-white/[0.05] pt-14 pb-8">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">

        {/* ── Top grid ──────────────────────────────────── */}
        {/*
         * Mobile:  single column stack
         * Tablet:  2-column grid
         * Desktop: 4-column grid
         */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-accent to-[#ea580c] rounded-[10px] flex items-center justify-center font-[Outfit] font-black text-[14px] text-white">
                SJM
              </div>
              <span className="font-[Outfit] font-black text-lg text-white tracking-tight">
                S<span className="text-accent">JM</span>
              </span>
            </Link>
            <p className="text-[#7a7a95] text-sm leading-relaxed mb-5 font-[Outfit] max-w-[280px]">
              Smart Marketing. Real Growth. Data-driven digital strategies that deliver measurable results for brands of all sizes.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                { icon: "f",  label: "Facebook" },
                { icon: "ig", label: "Instagram" },
                { icon: "𝕏",  label: "Twitter" },
                { icon: "in", label: "LinkedIn" },
                { icon: "▶",  label: "YouTube" },
              ].map(({ icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="w-9 h-9 bg-white/[0.04] border border-white/[0.07] rounded-lg flex items-center justify-center text-xs font-[Outfit] font-bold text-[#7a7a95] hover:text-accent hover:border-accent/30 transition-all"
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-[Outfit] font-bold text-white text-sm mb-4 uppercase tracking-wider">
              Company
            </h4>
            <div className="flex flex-col gap-2.5">
              {[
                { href: "/",             label: "Home" },
                { href: "/about",        label: "About Us" },
                { href: "/services",     label: "Services" },
                { href: "/case-studies", label: "Case Studies" },
                { href: "/blog",         label: "Blog" },
                { href: "/contact",      label: "Contact" },
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
            <h4 className="font-[Outfit] font-bold text-white text-sm mb-4 uppercase tracking-wider">
              Services
            </h4>
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
            <h4 className="font-[Outfit] font-bold text-white text-sm mb-4 uppercase tracking-wider">
              Get In Touch
            </h4>
            <div className="flex flex-col gap-3 mb-6">
              {[
                { icon: "✉",  text: "hello@sjm.in" },
                { icon: "📞", text: "+91 98765 43210" },
                { icon: "📍", text: "Surat, Gujarat, India" },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-start gap-2.5 text-sm text-[#7a7a95] font-[Outfit]">
                  <span className="text-accent mt-0.5 shrink-0">{icon}</span>
                  <span className="break-all">{text}</span>
                </div>
              ))}
            </div>
            <p className="text-[#7a7a95] text-xs mb-3 font-[Outfit]">
              Weekly marketing insights, free.
            </p>
            {/* Newsletter — stacked on very small screens */}
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="form-input text-sm py-2.5 px-3 flex-1 min-w-0"
              />
              <button className="bg-gradient-to-r from-accent to-[#ea580c] text-white text-sm font-[Outfit] font-semibold px-3.5 py-2.5 rounded-lg shrink-0 hover:shadow-lg hover:shadow-accent/20 transition-all">
                →
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="divider mb-6" />

        {/* Bottom — stacks on mobile */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-[#7a7a95] text-xs font-[Outfit]">
            © 2025 SJM. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
            {["Privacy Policy", "Terms of Service", "Sitemap"].map((t) => (
              <button key={t} className="text-[#7a7a95] text-xs font-[Outfit] hover:text-accent transition-colors">
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* WhatsApp Slider */}
<div className="fixed right-0 bottom-10 z-[9999] group flex items-center">

  <a
    href="https://wa.me/917291001898"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-l-full shadow-lg
    transform translate-x-[78%] group-hover:translate-x-0 transition-transform duration-300"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className="w-5 h-5 fill-white"
    >
      <path d="M16 .396C7.163.396 0 7.559 0 16.396c0 2.89.756 5.706 2.188 8.17L0 32l7.64-2.165a15.94 15.94 0 0 0 8.36 2.303c8.837 0 16-7.163 16-16S24.837.396 16 .396z"/>
    </svg>

    <span className="text-sm font-semibold whitespace-nowrap">
      Chat on WhatsApp
    </span>

  </a>

</div>
      
    </footer>
  );
}
