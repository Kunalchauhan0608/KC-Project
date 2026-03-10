import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-[72px]">
      <div className="text-center">
        <div className="font-syne font-black text-[8rem] text-accent/15 leading-none mb-4">404</div>
        <h1 className="font-syne font-800 text-3xl text-white mb-3">Page Not Found</h1>
        <p className="text-[#7a7a95] mb-8 max-w-[360px] mx-auto">
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/" className="inline-flex items-center gap-2 bg-gradient-to-r from-accent to-[#ea580c] text-white font-syne font-700 px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-accent/25 transition-all">
            ← Back to Home
          </Link>
          <Link href="/services" className="inline-flex items-center gap-2 border border-white/15 text-white font-syne font-600 px-6 py-3 rounded-xl hover:border-accent/40 hover:text-accent transition-all">
            View Services
          </Link>
        </div>
      </div>
    </div>
  );
}
