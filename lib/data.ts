// ─── TYPES ───────────────────────────────────────────────
export interface Service {
  id: string;
  label: string;
  shortLabel: string;
  emoji: string;
  color: string;
  tagline: string;
  desc: string;
  features: string[];
  subsections: { title: string; icon: string; desc: string }[];
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  stars: number;
  initials: string;
}

export interface CaseStudy {
  emoji: string;
  category: string;
  client: string;
  bg: string;
  challenge: string;
  results: { label: string; val: string }[];
}

export interface BlogPost {
  slug: string;
  emoji: string;
  tag: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  bgColor: string;
}

export interface FAQ {
  q: string;
  a: string;
}

// ─── SERVICES DATA ───────────────────────────────────────
export const SERVICES: Service[] = [
  {
    id: "seo",
    label: "Search Engine Optimization",
    shortLabel: "SEO",
    emoji: "🔍",
    color: "#10b981",
    tagline: "Rank Higher. Drive Traffic. Convert More.",
    desc: "Comprehensive SEO strategies that take your website from invisible to industry-leading across all major search engines.",
    features: ["Technical SEO", "On-Page SEO", "Off-Page & Link Building", "Keyword Research", "Local SEO", "Ecommerce SEO", "SEO Content Strategy", "Website Audit"],
    subsections: [
      { title: "Technical SEO", icon: "⚙️", desc: "Fix crawl errors, optimize site architecture, improve Core Web Vitals, and implement structured data markup." },
      { title: "On-Page SEO", icon: "📝", desc: "Optimize title tags, meta descriptions, heading hierarchy, content depth, and internal linking for relevance." },
      { title: "Off-Page & Link Building", icon: "🔗", desc: "Earn high-authority backlinks through digital PR, guest posting, and relationship-based outreach." },
      { title: "Keyword Research", icon: "🎯", desc: "Uncover the exact search terms your customers use and build a keyword map that drives business value." },
      { title: "Local SEO", icon: "📍", desc: "Dominate Google Maps and local pack results to capture nearby customers actively searching for you." },
      { title: "Ecommerce SEO", icon: "🛍️", desc: "Optimize product pages, category architecture, and site structure to drive organic sales at scale." },
      { title: "SEO Content Strategy", icon: "✍️", desc: "Build topical authority with comprehensive, search-optimized content that ranks and converts." },
      { title: "Website SEO Audit", icon: "🔎", desc: "Deep 200-point audit identifying every technical, content, and authority issue affecting your rankings." },
    ],
  },
  {
    id: "google-ads",
    label: "Google Ads",
    shortLabel: "Google Ads",
    emoji: "🎯",
    color: "#f59e0b",
    tagline: "Maximum ROI. Every Rupee Accountable.",
    desc: "Data-driven Google Ads campaigns that capture high-intent buyers and consistently deliver profitable returns.",
    features: ["Search Campaigns", "Display Advertising", "Shopping Ads", "YouTube Ads", "Performance Max", "Retargeting", "Smart Bidding", "Conversion Tracking"],
    subsections: [
      { title: "Search Campaigns", icon: "🔍", desc: "Capture buyers actively searching for your products with precision-targeted search ads." },
      { title: "Display Advertising", icon: "🖼️", desc: "Build brand awareness across Google's 2M+ partner sites with compelling visual ads." },
      { title: "Shopping Ads", icon: "🛒", desc: "Showcase products directly in search results with optimized Google Shopping campaigns." },
      { title: "YouTube Advertising", icon: "▶️", desc: "Engage audiences with skippable and non-skippable video ads on YouTube." },
      { title: "Performance Max", icon: "⚡", desc: "AI-powered cross-channel campaigns that automatically optimize for your goals." },
      { title: "Retargeting Campaigns", icon: "🔄", desc: "Re-engage website visitors and past customers with surgical remarketing precision." },
      { title: "Smart Bidding", icon: "🤖", desc: "Leverage Google's ML with Target ROAS and Target CPA for automated bid optimization." },
      { title: "Conversion Tracking", icon: "📊", desc: "Track every lead, sale, and call to understand true campaign ROI with full attribution." },
    ],
  },
  {
    id: "meta-ads",
    label: "Meta Ads",
    shortLabel: "Meta Ads",
    emoji: "📱",
    color: "#8b5cf6",
    tagline: "Scale Your Business on Facebook & Instagram.",
    desc: "High-converting Facebook and Instagram ad campaigns built on audience science, creative testing, and profit-first optimization.",
    features: ["Facebook Campaigns", "Instagram Ads", "Reels Advertising", "Lead Gen Ads", "Catalog Ads", "Retargeting", "Lookalike Audiences", "ROAS Optimization"],
    subsections: [
      { title: "Facebook Campaigns", icon: "📘", desc: "Full-funnel Facebook advertising from awareness to conversion with deep audience targeting." },
      { title: "Instagram Ads", icon: "📸", desc: "Visually stunning feed and story ads that stop the scroll and compel action." },
      { title: "Reels Advertising", icon: "🎬", desc: "Short-form video ads on Instagram and Facebook Reels with explosive organic-like reach." },
      { title: "Lead Generation Ads", icon: "📋", desc: "Native lead forms that capture qualified prospects without leaving the platform." },
      { title: "Catalog & Shopping Ads", icon: "🛍️", desc: "Dynamic product ads that automatically show relevant items to high-intent shoppers." },
      { title: "Retargeting Campaigns", icon: "🔄", desc: "Re-engage website visitors, video viewers, and lapsed customers with personalized messaging." },
      { title: "Lookalike Audiences", icon: "👥", desc: "Scale reach to new audiences that mirror the profile of your very best customers." },
      { title: "ROAS Optimization", icon: "💰", desc: "Continuous creative testing and budget reallocation to maximize return on every rupee." },
    ],
  },
  {
    id: "performance-marketing",
    label: "Performance Marketing",
    shortLabel: "Performance",
    emoji: "📈",
    color: "#ef4444",
    tagline: "ROI-Driven Campaigns That Scale.",
    desc: "Multi-channel performance marketing ecosystems where every decision is data-driven and optimized for your business outcomes.",
    features: ["Multi-Channel Strategy", "CRO", "Landing Pages", "A/B Testing", "Attribution", "Revenue Tracking", "Funnel Analysis", "Paid Media Scaling"],
    subsections: [
      { title: "Multi-Channel Strategy", icon: "🌐", desc: "Coordinated campaigns across Google, Meta, YouTube, and programmatic working in perfect harmony." },
      { title: "Conversion Rate Optimization", icon: "⬆️", desc: "Systematic A/B testing of pages, CTAs, and funnels to squeeze more value from existing traffic." },
      { title: "Landing Page Design", icon: "🖥️", desc: "High-converting landing pages purpose-built for paid traffic with built-in testing." },
      { title: "A/B Testing Framework", icon: "🔬", desc: "Structured creative and audience testing to continuously compound campaign improvements." },
      { title: "Attribution Modeling", icon: "📐", desc: "Understand every touchpoint in your customer's journey and credit value accurately." },
      { title: "Revenue Tracking", icon: "💹", desc: "Connect ad spend directly to revenue with sophisticated tracking and analytics setups." },
      { title: "Funnel Analysis", icon: "🔽", desc: "Find and eliminate friction at every stage from awareness through to purchase and loyalty." },
      { title: "Paid Media Scaling", icon: "🚀", desc: "Proven frameworks to scale budgets 3x–10x without sacrificing ROAS or CPL efficiency." },
    ],
  },
  {
    id: "video-creation",
    label: "Video Creation",
    shortLabel: "Video",
    emoji: "🎬",
    color: "#06b6d4",
    tagline: "Content That Stops Scrolls & Starts Conversations.",
    desc: "From brand films to viral Reels — compelling video content crafted to tell stories and achieve measurable marketing outcomes.",
    features: ["Brand Films", "Reels & Shorts", "Ad Creatives", "Explainer Videos", "Product Demos", "Testimonials", "Motion Graphics", "YouTube Content"],
    subsections: [
      { title: "Brand Films", icon: "🎥", desc: "Cinematic brand stories that communicate your values and build deep emotional connections." },
      { title: "Instagram Reels & Shorts", icon: "📱", desc: "Trendy, engaging short-form content optimized for maximum organic algorithmic reach." },
      { title: "Video Ad Creatives", icon: "🎯", desc: "High-converting video ads designed for Meta, YouTube, and Google paid campaigns." },
      { title: "Explainer Videos", icon: "💡", desc: "Clear, engaging videos that explain complex products or services in under 90 seconds." },
      { title: "Product Demonstrations", icon: "📦", desc: "Showcase features and benefits in engaging, conversion-focused product demo videos." },
      { title: "Customer Testimonials", icon: "⭐", desc: "Authentic video testimonials that build trust and overcome purchase hesitation." },
      { title: "Motion Graphics", icon: "✨", desc: "Eye-catching animated graphics for social media, ads, presentations, and websites." },
      { title: "YouTube Strategy", icon: "▶️", desc: "Long-form YouTube content strategy designed to build subscribers and generate leads." },
    ],
  },
  {
    id: "web-development",
    label: "Web Development",
    shortLabel: "Web Dev",
    emoji: "💻",
    color: "#84cc16",
    tagline: "Websites That Perform, Rank & Convert.",
    desc: "High-performance, SEO-optimized websites and landing pages engineered to turn visitors into customers.",
    features: ["Custom Websites", "Landing Pages", "Ecommerce Stores", "WordPress", "Shopify", "Speed Optimization", "Core Web Vitals", "Mobile-First"],
    subsections: [
      { title: "Custom Website Design", icon: "🎨", desc: "Bespoke, brand-aligned website designs that create lasting first impressions and drive action." },
      { title: "Landing Page Development", icon: "📄", desc: "Conversion-optimized landing pages for paid campaigns with A/B testing infrastructure." },
      { title: "Ecommerce Development", icon: "🛍️", desc: "Feature-rich online stores on Shopify, WooCommerce, or custom platforms." },
      { title: "WordPress Development", icon: "🔷", desc: "Powerful, flexible WordPress sites that are easy to manage, scale, and optimize." },
      { title: "Shopify Stores", icon: "🟢", desc: "Beautifully designed and conversion-optimized Shopify stores for D2C brands." },
      { title: "Speed Optimization", icon: "⚡", desc: "Achieve 95+ Google PageSpeed scores with advanced caching and code optimization." },
      { title: "Core Web Vitals", icon: "📊", desc: "LCP, CLS, and INP optimization to improve both user experience and search rankings." },
      { title: "Mobile-First Design", icon: "📱", desc: "Pixel-perfect responsive designs that deliver flawless experiences on every device." },
    ],
  },
  {
    id: "graphic-designing",
    label: "Graphic Designing",
    shortLabel: "Design",
    emoji: "🎨",
    color: "#f97316",
    tagline: "Design That Makes Your Brand Unforgettable.",
    desc: "Stunning visual identities and marketing assets that communicate your brand's personality and drive real engagement.",
    features: ["Logo & Branding", "Social Media Graphics", "Ad Creatives", "Brochures & Flyers", "Packaging Design", "Presentations", "UI/UX Design", "Infographics"],
    subsections: [
      { title: "Logo & Brand Identity", icon: "✏️", desc: "Memorable logos and comprehensive brand identity systems built for lasting recognition." },
      { title: "Social Media Graphics", icon: "📸", desc: "Scroll-stopping visuals consistently aligned with your brand across all platforms." },
      { title: "Ad Creative Design", icon: "🎯", desc: "High-performing static and animated ad creatives for Meta, Google, and OOH channels." },
      { title: "Brochures & Flyers", icon: "📑", desc: "Professional print and digital marketing collateral that commands authority." },
      { title: "Packaging Design", icon: "📦", desc: "Product packaging that stands out on shelves and creates shareable unboxing moments." },
      { title: "Presentation Design", icon: "📊", desc: "Polished pitch decks and business presentations that win deals and impress investors." },
      { title: "UI/UX Design", icon: "🖥️", desc: "Intuitive, beautiful interface designs for websites, apps, and digital products." },
      { title: "Infographic Design", icon: "📈", desc: "Data-rich infographics that make complex information visually compelling and shareable." },
    ],
  },
  {
    id: "social-media",
    label: "Social Media Marketing",
    shortLabel: "Social Media",
    emoji: "📣",
    color: "#ec4899",
    tagline: "Community & Engagement at Scale.",
    desc: "End-to-end social media management — creating content, building communities, and running campaigns that grow your brand and drive business results.",
    features: ["Content Strategy", "Daily Posting", "Community Management", "Influencer Outreach", "Instagram Growth", "LinkedIn Marketing", "YouTube SEO", "Analytics"],
    subsections: [
      { title: "Content Strategy", icon: "📋", desc: "A data-backed content strategy aligned to your brand voice, audience, and business goals." },
      { title: "Content Creation & Scheduling", icon: "📅", desc: "Daily posts across all platforms, designed to engage, educate, and convert followers." },
      { title: "Community Management", icon: "💬", desc: "Active real-time engagement — responding to comments, DMs, mentions, and reviews." },
      { title: "Influencer Marketing", icon: "⭐", desc: "Strategic collaborations with niche-relevant creators to amplify your brand reach." },
      { title: "Instagram Growth", icon: "📸", desc: "Systematic follower growth strategies targeting your ideal customer demographic." },
      { title: "LinkedIn Marketing", icon: "💼", desc: "B2B thought leadership and lead generation strategies on LinkedIn." },
      { title: "YouTube Management", icon: "▶️", desc: "Full YouTube channel management from strategy to upload to SEO optimization." },
      { title: "Analytics & Reporting", icon: "📊", desc: "Monthly deep-dive reports on reach, engagement, follower growth, and conversions." },
    ],
  },
  {
    id: "meme-marketing",
    label: "Meme Marketing",
    shortLabel: "Meme Marketing",
    emoji: "😂",
    color: "#a78bfa",
    tagline: "Viral Content That Makes Your Brand Beloved.",
    desc: "We tap into internet culture to create meme-based content that makes your brand relatable, shareable, and genuinely loved.",
    features: ["Trend Monitoring", "Brand Meme Creation", "Platform-Specific", "Viral Campaigns", "Community Engagement", "Cultural Audits", "Reels Memes", "Meme Analytics"],
    subsections: [
      { title: "Trend Monitoring", icon: "📡", desc: "Real-time monitoring of viral formats and cultural moments to capitalize immediately." },
      { title: "Brand Meme Creation", icon: "🎭", desc: "Memes that authentically represent your brand while riding viral formats and trends." },
      { title: "Platform-Specific Content", icon: "📱", desc: "Tailored meme content for Instagram, Twitter/X, Reddit, and WhatsApp audiences." },
      { title: "Viral Campaign Strategy", icon: "🚀", desc: "Planned viral campaigns orchestrated around launches, events, and cultural moments." },
      { title: "Community Engagement", icon: "💬", desc: "Build cult-like brand followings through consistently funny and authentic interactions." },
      { title: "Cultural Relevance Audits", icon: "🔍", desc: "Ensure meme content is appropriate, timely, and resonant with your specific audience." },
      { title: "Reels Meme Content", icon: "🎬", desc: "Short-form video meme content designed for Instagram Reels and TikTok virality." },
      { title: "Meme Analytics", icon: "📊", desc: "Track shares, reach, sentiment, and brand perception impact of meme campaigns." },
    ],
  },
  {
    id: "ecommerce",
    label: "Ecommerce Marketing",
    shortLabel: "Ecommerce",
    emoji: "🛍️",
    color: "#34d399",
    tagline: "Shopify & D2C Growth That Compounds.",
    desc: "Full-funnel ecommerce marketing for D2C brands, Shopify stores, and Amazon sellers looking to acquire customers and maximize lifetime value.",
    features: ["Shopify Marketing", "Amazon Ads", "D2C Growth", "Cart Recovery", "Email Automation", "Listing Optimization", "Reputation Management", "Retention Marketing"],
    subsections: [
      { title: "Shopify Marketing", icon: "🟢", desc: "Comprehensive Shopify growth combining SEO, paid ads, CRO, and email automation." },
      { title: "Amazon SEO & Advertising", icon: "📦", desc: "Dominate Amazon search and drive sales with optimized listings and Sponsored Ads." },
      { title: "D2C Growth Strategy", icon: "🚀", desc: "Full-funnel frameworks covering acquisition, activation, retention, and expansion." },
      { title: "Cart Abandonment Recovery", icon: "🔄", desc: "Email and retargeting sequences that recover lost revenue from abandoned carts." },
      { title: "Email & SMS Automation", icon: "📧", desc: "Automated flows for welcome, post-purchase, re-engagement, and upselling journeys." },
      { title: "Product Listing Optimization", icon: "✍️", desc: "SEO-optimized titles, descriptions, and images that convert browsers to buyers." },
      { title: "Reviews & Reputation", icon: "⭐", desc: "Systematic review generation and reputation management across all platforms." },
      { title: "Retention & LTV", icon: "💎", desc: "Loyalty programs, subscriptions, and tactics designed to maximize customer lifetime value." },
    ],
  },
  {
    id: "digital-marketing",
    label: "Digital Marketing",
    shortLabel: "Digital Marketing",
    emoji: "🚀",
    color: "#3b82f6",
    tagline: "Full-Stack Growth Strategies for Modern Brands.",
    desc: "Comprehensive, integrated digital marketing covering every channel and tactic — orchestrated as one cohesive, data-driven growth machine.",
    features: ["360° Strategy", "Market Research", "Multi-Channel Campaigns", "Brand Building", "Lead Generation", "CRM Integration", "Social Media", "Monthly Reporting"],
    subsections: [
      { title: "360° Digital Strategy", icon: "🗺️", desc: "A holistic strategy integrating SEO, paid, social, email, and content for maximum impact." },
      { title: "Market & Competitor Research", icon: "🔍", desc: "Deep market analysis to identify growth opportunities and outmaneuver competition." },
      { title: "Multi-Channel Campaigns", icon: "🌐", desc: "Coordinated messaging across Google, Meta, LinkedIn, YouTube, and email." },
      { title: "Brand Building", icon: "🏆", desc: "Build awareness, authority, and preference through consistent, compelling messaging." },
      { title: "Lead Generation Systems", icon: "🎣", desc: "Multi-channel lead pipelines that fill your CRM with qualified prospects consistently." },
      { title: "CRM & Lead Nurturing", icon: "💌", desc: "Automated nurture sequences that move leads through the funnel to conversion." },
      { title: "Social Media Integration", icon: "📣", desc: "Social media as part of your overall digital marketing ecosystem and brand voice." },
      { title: "Monthly Analytics Reports", icon: "📊", desc: "Comprehensive monthly KPI reports with insights and forward-looking strategy." },
    ],
  },
  {
    id: "growth-hacking",
    label: "Growth Hacking",
    shortLabel: "Growth Hacking",
    emoji: "⚡",
    color: "#fb923c",
    tagline: "Rapid Scaling Through Unconventional Tactics.",
    desc: "Rapid experimentation and unconventional growth tactics to find the highest-leverage growth levers unique to your business.",
    features: ["Viral Loops", "Product-Led Growth", "Referral Programs", "CRO Hacking", "Retention", "Acquisition Hacks", "Funnel Optimization", "Marketing Automation"],
    subsections: [
      { title: "Viral Loop Design", icon: "🔄", desc: "Engineer viral mechanics into your product and marketing for exponential word-of-mouth." },
      { title: "Product-Led Growth", icon: "🛠️", desc: "Make your product the primary driver of acquisition, retention, and expansion." },
      { title: "Referral Programs", icon: "🤝", desc: "Design referral systems that turn your happiest customers into your best salespeople." },
      { title: "Conversion Hacking", icon: "⬆️", desc: "Aggressive systematic testing to find breakthrough conversion improvements." },
      { title: "Retention Engineering", icon: "💎", desc: "Data-driven tactics to reduce churn and dramatically increase customer LTV." },
      { title: "Unconventional Acquisition", icon: "💡", desc: "Find and exploit untapped channels before your competitors even notice them." },
      { title: "Funnel Optimization", icon: "🔽", desc: "Identify and eliminate every friction point from awareness through to purchase." },
      { title: "Marketing Automation", icon: "🤖", desc: "Automate repetitive growth tasks to scale without proportionally growing costs." },
    ],
  },
];

// ─── STATS ───────────────────────────────────────────────
export const STATS = [
  { num: "500+", label: "Brands Grown" },
  { num: "₹50Cr+", label: "Revenue Generated" },
  { num: "8x", label: "Average ROAS" },
  { num: "98%", label: "Client Retention" },
];

// ─── TESTIMONIALS ────────────────────────────────────────
export const TESTIMONIALS: Testimonial[] = [
  { name: "Rahul Sharma", role: "Founder", company: "TechKart India", text: "SJM grew our organic traffic by 340% in just 8 months. Their SEO expertise is genuinely world-class. We went from page 3 to consistently ranking #1 for all our main keywords.", stars: 5, initials: "RS" },
  { name: "Priya Mehta", role: "Marketing Head", company: "StyleNest", text: "Our Meta Ads ROAS jumped from 1.8x to 6.2x after SJM restructured our campaigns. The team is incredibly responsive, data-driven, and genuinely cares about results.", stars: 5, initials: "PM" },
  { name: "Aditya Verma", role: "CEO", company: "BuildRight Constructions", text: "The website SJM built converts 3x better than our old one. We now get quality inbound leads every single day. Best digital investment we've made in 5 years of business.", stars: 5, initials: "AV" },
  { name: "Sneha Patel", role: "Co-founder", company: "GreenBite Foods", text: "SJM's content and social strategy transformed our brand presence completely. We're now recognized as the thought leader in health food across all digital platforms.", stars: 5, initials: "SP" },
  { name: "Vikram Singh", role: "Director", company: "EduPrime Learning", text: "Lead generation results far exceeded our expectations. We went from 50 monthly inquiries to over 400 after SJM took over our performance marketing campaigns.", stars: 5, initials: "VS" },
  { name: "Anju Kapoor", role: "Owner", company: "Kapoor Real Estate", text: "The local SEO work SJM did is phenomenal. We now dominate property searches in our city and our phone rings constantly with serious, qualified buyers.", stars: 5, initials: "AK" },
];

// ─── CASE STUDIES ────────────────────────────────────────
export const CASE_STUDIES: CaseStudy[] = [
  {
    emoji: "🛍️", category: "Ecommerce D2C", client: "Fashion Brand",
    bg: "from-indigo-900 to-purple-900",
    challenge: "Scaling organic traffic and improving conversion rate on Shopify store.",
    results: [{ label: "Organic Traffic", val: "+420%" }, { label: "Conversion Rate", val: "4.8%" }, { label: "Monthly Revenue", val: "+₹42L" }],
  },
  {
    emoji: "🏗️", category: "Real Estate", client: "Construction Company",
    bg: "from-stone-900 to-stone-800",
    challenge: "Generating quality leads and ranking for high-intent property keywords.",
    results: [{ label: "Lead Volume", val: "+380%" }, { label: "Cost per Lead", val: "-62%" }, { label: "Google Rankings", val: "#1 for 18 KWs" }],
  },
  {
    emoji: "🎓", category: "Education", client: "Online Learning Platform",
    bg: "from-green-950 to-emerald-900",
    challenge: "Acquiring enrolled students profitably via paid performance campaigns.",
    results: [{ label: "Student Enrollments", val: "+280%" }, { label: "Ad ROAS", val: "7.4x" }, { label: "Monthly Leads", val: "400+" }],
  },
  {
    emoji: "🏥", category: "Healthcare", client: "Multi-Specialty Clinic",
    bg: "from-blue-950 to-blue-900",
    challenge: "Building local search dominance and reducing patient acquisition costs.",
    results: [{ label: "Patient Inquiries", val: "+250%" }, { label: "Local Rankings", val: "#1 in City" }, { label: "Ad CPA", val: "-48%" }],
  },
  {
    emoji: "💻", category: "SaaS / B2B", client: "B2B Software Co.",
    bg: "from-slate-900 to-slate-800",
    challenge: "Increasing demo requests and reducing cost-per-MQL from paid channels.",
    results: [{ label: "Trial Signups", val: "+320%" }, { label: "MQL Volume", val: "+180%" }, { label: "CAC Reduction", val: "-35%" }],
  },
  {
    emoji: "🍕", category: "Food & Restaurant", client: "Restaurant Chain",
    bg: "from-red-950 to-orange-900",
    challenge: "Building online presence and driving footfall for 3 city locations.",
    results: [{ label: "Online Orders", val: "+190%" }, { label: "Google Rating", val: "4.8 ★" }, { label: "Walk-in Traffic", val: "+65%" }],
  },
];

// ─── BLOG POSTS ──────────────────────────────────────────
export const BLOG_POSTS: BlogPost[] = [
  { slug: "google-core-update-2025", emoji: "🔍", tag: "SEO", title: "Google's 2025 Core Algorithm Update: What Every Marketer Must Know", excerpt: "The latest core update has reshuffled rankings across industries. Here's what changed, what it means for your site, and the exact actions to take now.", date: "Mar 2025", readTime: "6 min read", bgColor: "from-emerald-950 to-teal-900" },
  { slug: "meta-ads-roas-2025", emoji: "📈", tag: "Meta Ads", title: "How to Achieve 5x ROAS on Meta Ads in 2025 (With Real Numbers)", excerpt: "We've spent ₹10Cr+ on Meta ads this year. Here's the exact creative framework, audience structure, and bidding strategy that's consistently delivering 5x+ returns.", date: "Feb 2025", readTime: "9 min read", bgColor: "from-purple-950 to-violet-900" },
  { slug: "lead-generation-india", emoji: "🚀", tag: "Growth Hacking", title: "10 Proven Lead Generation Strategies for Indian SMBs in 2025", excerpt: "Forget generic advice. These are battle-tested lead generation tactics we've used across 100+ Indian SMBs to generate consistent, high-quality pipeline.", date: "Feb 2025", readTime: "7 min read", bgColor: "from-orange-950 to-amber-900" },
  { slug: "smart-bidding-vs-manual", emoji: "🎯", tag: "Google Ads", title: "Smart Bidding vs Manual CPC: A Complete 2025 Decision Guide", excerpt: "When should you let Google's AI control bids? We break down every scenario with data from 200+ campaigns to help you choose the right strategy.", date: "Jan 2025", readTime: "10 min read", bgColor: "from-blue-950 to-cyan-900" },
  { slug: "viral-social-strategy", emoji: "📱", tag: "Social Media", title: "Building a Viral Social Media Strategy From Zero to 100K Followers", excerpt: "The exact content system, posting cadence, and community-building tactics that took three of our clients from 0 to 100K followers in under 12 months.", date: "Jan 2025", readTime: "5 min read", bgColor: "from-pink-950 to-rose-900" },
  { slug: "core-web-vitals-checklist", emoji: "🌐", tag: "Web Development", title: "Core Web Vitals 2025: The Complete Technical SEO Checklist", excerpt: "A developer and marketer's guide to achieving perfect Core Web Vitals scores — with specific fixes for LCP, CLS, and INP issues causing ranking drops.", date: "Dec 2024", readTime: "11 min read", bgColor: "from-lime-950 to-green-900" },
];

// ─── FAQs ────────────────────────────────────────────────
export const FAQS: FAQ[] = [
  { q: "What makes SJM different from other digital marketing agencies?", a: "We combine data science with creative strategy. Every campaign is built on real analytics, tested hypotheses, and transparent reporting. You get a dedicated team that treats your growth as their own — with zero vanity metrics, only business outcomes." },
  { q: "How long does SEO take to show results?", a: "Meaningful improvements typically appear within 3–6 months. Competitive keywords and newer domains may take longer. We provide monthly progress reports with ranking movements, traffic data, and conversion metrics so you always know exactly where things stand." },
  { q: "Do you work with small businesses and startups?", a: "Absolutely. We have custom-built packages for businesses of all sizes — from solo founders to enterprise teams. Our startup-friendly plans let you start lean and scale services as your revenue grows." },
  { q: "What is your approach to Google Ads and Meta Ads?", a: "We start with deep audience research, build account structures from scratch (or audit existing ones), run structured A/B tests on creatives and audiences, then optimize weekly based on real conversion data — not just CTRs and impressions." },
  { q: "Can I get a free audit of my website or campaigns?", a: "Yes. We offer a complimentary SEO and marketing audit for qualified businesses. Our team reviews your site, current rankings, competitor landscape, and paid campaigns — then delivers a prioritized action plan. No strings attached." },
  { q: "What industries does SJM specialize in?", a: "We serve ecommerce D2C, real estate, healthcare, education, SaaS, fintech, hospitality, local businesses, and more. Every strategy is tailored to your industry's unique customer journey and competitive dynamics." },
  { q: "Do you offer performance-based pricing?", a: "Yes, for qualified clients we offer hybrid models that tie a portion of our fee to measurable performance outcomes. Contact us to discuss whether your business qualifies for a performance-linked engagement." },
  { q: "How do you report results and communicate with clients?", a: "You receive a detailed monthly report plus access to a live dashboard. Your dedicated account manager is available via WhatsApp, email, and weekly video calls — whatever communication style works best for you." },
];

// ─── INDUSTRIES ──────────────────────────────────────────
export const INDUSTRIES = [
  "Ecommerce & D2C", "Real Estate", "Healthcare & Clinics", "Education & EdTech",
  "SaaS & Technology", "Finance & Fintech", "Hospitality & Hotels", "Manufacturing",
  "Legal Services", "Local Businesses", "Restaurants & Food", "Fashion & Lifestyle",
];

// ─── PROCESS STEPS ───────────────────────────────────────
export const SEO_PROCESS = [
  { n: "01", t: "Deep-Dive SEO Audit", d: "200-point analysis of every technical, on-page, and off-page factor currently affecting your rankings." },
  { n: "02", t: "Keyword & Competitor Research", d: "Map the full keyword landscape, identify quick wins, and expose gaps in competitor strategies." },
  { n: "03", t: "On-Page & Technical Optimization", d: "Fix structural issues, optimize all content, and bring Core Web Vitals up to benchmark." },
  { n: "04", t: "Content & Authority Building", d: "Create topically authoritative content and earn high-quality backlinks from relevant sources." },
  { n: "05", t: "Monitor, Report & Scale", d: "Track rankings, traffic, and conversions weekly — then double down on what moves the needle." },
];
