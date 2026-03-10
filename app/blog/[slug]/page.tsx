import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/data";

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return BLOG_POSTS.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = BLOG_POSTS.find((b) => b.slug === params.slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default function BlogPostPage({ params }: Props) {
  const post = BLOG_POSTS.find((b) => b.slug === params.slug);
  if (!post) notFound();

  const related = BLOG_POSTS.filter((b) => b.slug !== params.slug).slice(0, 3);

  const sampleContent = [
    { heading: "Introduction", body: `In today's competitive digital landscape, understanding ${post.tag} is no longer optional — it's essential for any brand looking to grow online. This comprehensive guide breaks down everything you need to know, backed by real data from our campaigns.` },
    { heading: "Why This Matters in 2025", body: "The digital marketing landscape has shifted dramatically. Brands that fail to adapt to the latest strategies are losing ground to competitors who are moving faster and smarter. Here's what the data tells us about where the biggest opportunities lie right now." },
    { heading: "The Core Framework", body: "Our team has tested hundreds of approaches across 500+ brands. The most consistently successful campaigns share three traits: they're data-led from day one, they test rapidly and iterate, and they optimize for actual business outcomes — not vanity metrics like impressions or followers." },
    { heading: "Step-by-Step Implementation", body: "1. Start with a full audit of your current state.\n2. Define clear, measurable KPIs tied to revenue or leads.\n3. Build your initial hypothesis and campaign structure.\n4. Launch with minimum viable budget.\n5. Measure weekly, optimize bi-weekly.\n6. Scale what works — cut what doesn't." },
    { heading: "Real Results & Numbers", body: "Across our client base, brands that follow this framework see an average of 280% growth within the first 12 months. The key is consistency and a willingness to let data — not gut feelings — drive decisions." },
    { heading: "Conclusion", body: `Mastering ${post.tag} in 2025 requires a combination of technical knowledge, creative thinking, and analytical discipline. If you're not already seeing results, it's time to reassess your approach. Our team at Shreeji Marketers is always happy to review your current setup and recommend improvements.` },
  ];

  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <div className={`h-72 md:h-96 w-full bg-gradient-to-br ${post.bgColor} flex items-center justify-center text-8xl`}>
        {post.emoji}
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12">
        <div className="grid lg:grid-cols-[1fr_320px] gap-12 items-start">
          {/* Article */}
          <article>
            <div className="mb-4">
              <nav className="flex items-center gap-2 text-sm text-[#7a7a95] mb-6">
                <Link href="/" className="hover:text-accent">Home</Link>
                <span>/</span>
                <Link href="/blog" className="hover:text-accent">Blog</Link>
                <span>/</span>
                <span className="text-[#e4e4f0] truncate max-w-[200px]">{post.title}</span>
              </nav>

              <div className="tag-pill mb-4">{post.tag}</div>
              <h1 className="font-syne font-800 text-[clamp(1.6rem,3.5vw,2.6rem)] text-white leading-tight mb-4">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-[#7a7a95] mb-8 pb-8 border-b border-white/7">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-[#ea580c] flex items-center justify-center text-xs font-syne font-700 text-white">SJM</div>
                  <span>SJM Editorial Team</span>
                </div>
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </div>

            <p className="text-[#b0b0c8] text-lg leading-relaxed mb-8 font-light">{post.excerpt}</p>

            <div className="space-y-8">
              {sampleContent.map(({ heading, body }) => (
                <div key={heading}>
                  <h2 className="font-syne font-700 text-white text-xl mb-3">{heading}</h2>
                  <p className="text-[#9090b0] leading-relaxed whitespace-pre-line">{body}</p>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="mt-10 pt-8 border-t border-white/7">
              <div className="flex flex-wrap gap-2">
                {[post.tag, "Digital Marketing", "SJM", "Growth Strategy"].map((t) => (
                  <span key={t} className="text-sm px-3 py-1.5 rounded-full border border-white/8 text-[#7a7a95] hover:border-accent/30 hover:text-accent transition-colors cursor-pointer">
                    #{t.replace(/ /g, "")}
                  </span>
                ))}
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24 space-y-5">
            {/* CTA */}
            <div className="bg-gradient-to-br from-accent/12 to-transparent border border-accent/20 rounded-2xl p-6">
              <h4 className="font-syne font-700 text-white mb-2">Want These Results?</h4>
              <p className="text-[#7a7a95] text-sm mb-4 leading-relaxed">Book a free strategy session with our {post.tag} specialists.</p>
              <Link href="/contact"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-accent to-[#ea580c] text-white font-syne font-700 py-3 rounded-xl text-sm hover:shadow-lg hover:shadow-accent/25 transition-all"
              >
                Free Consultation →
              </Link>
            </div>

            {/* Related posts */}
            <div className="bg-[#10121a] border border-white/7 rounded-2xl p-6">
              <h4 className="font-syne font-700 text-white mb-4">Related Articles</h4>
              <div className="space-y-4">
                {related.map((b) => (
                  <Link key={b.slug} href={`/blog/${b.slug}`}>
                    <div className="flex gap-3 group cursor-pointer py-2 border-b border-white/5 last:border-0">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${b.bgColor} flex items-center justify-center text-xl shrink-0`}>
                        {b.emoji}
                      </div>
                      <div>
                        <div className="text-[10px] text-accent font-syne font-700 uppercase tracking-wider mb-0.5">{b.tag}</div>
                        <div className="text-white text-xs leading-snug group-hover:text-accent transition-colors line-clamp-2">{b.title}</div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-[#10121a] border border-white/7 rounded-2xl p-6">
              <h4 className="font-syne font-700 text-white mb-2">Weekly Digest</h4>
              <p className="text-[#7a7a95] text-xs mb-3">Get our best insights every Tuesday.</p>
              <input type="email" placeholder="your@email.com" className="form-input mb-2 text-sm py-2.5" />
              <button className="w-full bg-white/6 border border-white/8 text-white text-sm font-syne font-600 py-2.5 rounded-lg hover:border-accent/30 hover:text-accent transition-all">
                Subscribe Free
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
