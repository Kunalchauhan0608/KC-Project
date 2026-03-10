import type { Metadata } from "next";
import { BLOG_POSTS } from "@/lib/data";
import { PageHero, BlogCard } from "@/components/UI";

export const metadata: Metadata = {
  title: "Digital Marketing Blog — SEO Tips, Google Ads, Growth Strategies",
  description: "Expert digital marketing insights, SEO strategies, Google Ads tips, performance marketing guides, and growth hacking tactics from the SJM team.",
};

const categories = ["All", "SEO", "Google Ads", "Meta Ads", "Performance Marketing", "Social Media", "Growth Hacking", "Web Development"];

export default function BlogPage() {
  return (
    <>
      <PageHero
        tag="SJM Blog"
        title='Digital Marketing <span class="grad-text">Insights & Strategies</span>'
        sub="Expert guides, deep dives, and actionable strategies from SJM's team of certified digital marketing specialists."
      />

      {/* Filter tabs */}
      <section className="px-4 pb-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat, i) => (
              <button key={cat}
                className={`px-4 py-2 rounded-full text-sm font-syne font-600 transition-all border ${
                  i === 0
                    ? "bg-accent text-white border-accent"
                    : "bg-transparent text-[#7a7a95] border-white/8 hover:border-accent/30 hover:text-accent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured post */}
      <section className="px-4 pb-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-[#10121a] border border-white/7 rounded-2xl overflow-hidden card-hover">
            <div className="grid lg:grid-cols-2">
              <div className={`h-64 lg:h-auto bg-gradient-to-br ${BLOG_POSTS[0].bgColor} flex items-center justify-center text-7xl`}>
                {BLOG_POSTS[0].emoji}
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="tag-pill mb-4">{BLOG_POSTS[0].tag}</div>
                <h2 className="font-syne font-800 text-white text-[clamp(1.2rem,2.5vw,1.7rem)] leading-snug mb-3 hover:text-accent transition-colors">
                  {BLOG_POSTS[0].title}
                </h2>
                <p className="text-[#7a7a95] text-sm leading-relaxed mb-5">{BLOG_POSTS[0].excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-3 text-[#7a7a95] text-xs">
                    <span>{BLOG_POSTS[0].date}</span>
                    <span>•</span>
                    <span>{BLOG_POSTS[0].readTime}</span>
                  </div>
                  <span className="text-accent font-syne font-700 text-sm">Read Article →</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All posts grid */}
      <section className="px-4 pb-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BLOG_POSTS.slice(1).map((b) => <BlogCard key={b.slug} {...b} />)}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4 bg-white/[0.01]">
        <div className="max-w-[560px] mx-auto text-center">
          <div className="tag-pill mb-5">Newsletter</div>
          <h2 className="font-syne font-800 text-[clamp(1.5rem,2.5vw,2rem)] text-white mb-3">
            Never Miss a <span className="grad-text">Marketing Insight</span>
          </h2>
          <p className="text-[#7a7a95] text-sm mb-6 leading-relaxed">
            Weekly strategies, algorithm updates, and real campaign data — delivered every Tuesday to 8,000+ marketers.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email address"
              className="form-input flex-1"
            />
            <button className="bg-gradient-to-r from-accent to-[#ea580c] text-white font-syne font-700 px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-accent/25 transition-all whitespace-nowrap">
              Subscribe Free
            </button>
          </div>
          <p className="text-[#7a7a95] text-xs mt-3">No spam. Unsubscribe anytime.</p>
        </div>
      </section>
    </>
  );
}
