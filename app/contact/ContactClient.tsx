"use client";
import { useState } from "react";
import Link from "next/link";
import { SERVICES } from "@/lib/data";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", website: "", service: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const update = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((p) => ({ ...p, [k]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <section className="relative pt-16 pb-12 px-4 overflow-hidden">
        <div className="glow-blob w-[500px] h-[500px] bg-accent/8 -top-40 right-0" />
        <div className="max-w-[1200px] mx-auto relative z-10 text-center">
          <div className="tag-pill mb-5">Contact Us</div>
          <h1 className="font-syne font-800 text-[clamp(2rem,5vw,3.5rem)] text-white leading-tight mb-4">
            Book Your{" "}
            <span className="grad-text">Free Marketing Consultation</span>
          </h1>
          <p className="text-[#7a7a95] text-lg max-w-[580px] mx-auto leading-relaxed">
            Talk to our experts. No sales pitch — just a genuine conversation about how to grow your business online with smart, data-driven marketing.
          </p>
        </div>
      </section>

      {/* Trust bar */}
      <section className="px-4 pb-14">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: "⚡", t: "Response in 4 hrs", s: "Business hours" },
              { icon: "🎯", t: "Free Audit Included", s: "No strings attached" },
              { icon: "🤝", t: "No Lock-in Contracts", s: "Month-to-month plans" },
              { icon: "📊", t: "Custom Strategy", s: "Tailored to your goals" },
            ].map(({ icon, t, s }) => (
              <div key={t} className="bg-[#10121a] border border-white/7 rounded-xl p-4 text-center">
                <div className="text-2xl mb-1.5">{icon}</div>
                <div className="font-syne font-700 text-white text-sm mb-0.5">{t}</div>
                <div className="text-[#7a7a95] text-xs">{s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main grid */}
      <section className="px-4 pb-20">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-[1fr_420px] gap-10 items-start">

          {/* Form */}
          <div className="bg-[#10121a] border border-white/7 rounded-2xl p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-5">🎉</div>
                <h2 className="font-syne font-800 text-2xl text-white mb-3">We&apos;ll be in touch soon!</h2>
                <p className="text-[#7a7a95] leading-relaxed max-w-[400px] mx-auto mb-6">
                  Thank you for reaching out. Our team will contact you within 4 business hours to schedule your free consultation.
                </p>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25d366]/10 border border-[#25d366]/30 text-[#25d366] font-syne font-600 px-6 py-3 rounded-xl hover:bg-[#25d366]/15 transition-colors"
                >
                  💬 Or chat us on WhatsApp
                </a>
              </div>
            ) : (
              <>
                <h2 className="font-syne font-800 text-xl text-white mb-6">Send Us a Message</h2>
                <form onSubmit={submit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-[#7a7a95] mb-1.5 font-syne font-600">Full Name *</label>
                      <input required className="form-input" placeholder="Rahul Sharma" value={form.name} onChange={update("name")} />
                    </div>
                    <div>
                      <label className="block text-xs text-[#7a7a95] mb-1.5 font-syne font-600">Email Address *</label>
                      <input required type="email" className="form-input" placeholder="rahul@company.com" value={form.email} onChange={update("email")} />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-[#7a7a95] mb-1.5 font-syne font-600">Phone Number</label>
                      <input className="form-input" placeholder="+91 98765 43210" value={form.phone} onChange={update("phone")} />
                    </div>
                    <div>
                      <label className="block text-xs text-[#7a7a95] mb-1.5 font-syne font-600">Business Website</label>
                      <input className="form-input" placeholder="https://yoursite.com" value={form.website} onChange={update("website")} />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-[#7a7a95] mb-1.5 font-syne font-600">Service Required</label>
                    <select className="form-input" value={form.service} onChange={update("service")}>
                      <option value="">Select a service...</option>
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.id}>{s.label}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-[#7a7a95] mb-1.5 font-syne font-600">Tell Us About Your Business & Goals</label>
                    <textarea
                      className="form-input resize-y"
                      rows={4}
                      placeholder="Briefly describe your business, current challenges, and what you're hoping to achieve with digital marketing..."
                      value={form.message}
                      onChange={update("message")}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-accent to-[#ea580c] text-white font-syne font-700 py-4 rounded-xl shadow-lg shadow-accent/20 hover:shadow-accent/35 hover:-translate-y-0.5 transition-all text-base disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        Sending...
                      </span>
                    ) : "Book Free Consultation →"}
                  </button>

                  <p className="text-[#7a7a95] text-xs text-center">
                    By submitting, you agree to our Privacy Policy. We&apos;ll never spam you.
                  </p>
                </form>
              </>
            )}
          </div>

          {/* Contact info */}
          <div className="space-y-5">
            <h2 className="font-syne font-800 text-xl text-white mb-2">Get in Touch Directly</h2>

            {[
              { icon: "✉️", label: "Email Us", val: "hello@shreejimarketers.com", sub: "Reply within 4 business hours", href: "mailto:hello@shreejimarketers.com" },
              { icon: "📞", label: "Call Us", val: "+91 98765 43210", sub: "Mon–Sat, 10am–7pm IST", href: "tel:+919876543210" },
              { icon: "📍", label: "Office", val: "Ring Road, Surat, Gujarat 395002", sub: "India", href: "#" },
            ].map(({ icon, label, val, sub, href }) => (
              <a key={label} href={href}
                className="flex items-start gap-4 p-5 bg-[#10121a] border border-white/7 rounded-xl hover:border-accent/25 transition-all group block"
              >
                <div className="w-11 h-11 bg-accent/10 rounded-xl flex items-center justify-center text-xl shrink-0">
                  {icon}
                </div>
                <div>
                  <div className="font-syne font-700 text-white text-sm mb-0.5 group-hover:text-accent transition-colors">{label}</div>
                  <div className="text-[#e4e4f0] text-sm mb-0.5">{val}</div>
                  <div className="text-[#7a7a95] text-xs">{sub}</div>
                </div>
              </a>
            ))}

            {/* WhatsApp */}
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 p-5 bg-[#25d366]/8 border border-[#25d366]/25 rounded-xl hover:bg-[#25d366]/12 transition-all"
            >
              <div className="w-11 h-11 bg-[#25d366]/15 rounded-xl flex items-center justify-center text-2xl shrink-0">
                💬
              </div>
              <div>
                <div className="font-syne font-700 text-[#25d366] text-sm mb-0.5">WhatsApp Chat</div>
                <div className="text-[#7a7a95] text-xs">Instant response from our team</div>
              </div>
              <svg className="w-4 h-4 text-[#25d366] ml-auto" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </a>

            {/* Map placeholder */}
            <div className="bg-[#10121a] border border-white/7 rounded-xl overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-slate-900 to-slate-800 flex flex-col items-center justify-center gap-2">
                <div className="text-4xl">🗺️</div>
                <div className="text-[#7a7a95] text-sm">Surat, Gujarat, India</div>
                <a
                  href="https://maps.google.com/?q=Surat,Gujarat"
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent text-sm font-syne font-700 hover:underline"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>

            {/* Social proof */}
            <div className="bg-[#10121a] border border-white/7 rounded-xl p-5">
              <div className="flex gap-1 mb-2">
                {Array(5).fill(0).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 24 24">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className="text-[#9090b0] text-sm leading-relaxed italic mb-2">
                &quot;SJM responded within 2 hours and delivered a free audit the same day. Best agency decision we&apos;ve made.&quot;
              </p>
              <div className="text-white text-xs font-syne font-700">— Rahul S., TechKart India</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
