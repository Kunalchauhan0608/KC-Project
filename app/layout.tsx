import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dm = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Shreeji Marketers (SJM) — Smart Marketing. Real Growth.",
    template: "%s | Shreeji Marketers",
  },
  description:
    "Shreeji Marketers (SJM) is India's performance-driven digital marketing agency specializing in SEO, Google Ads, Meta Ads, Performance Marketing, and more.",
  keywords: [
    "digital marketing agency",
    "SEO services India",
    "Google Ads agency",
    "Meta Ads agency",
    "performance marketing",
    "Shreeji Marketers",
    "SJM",
  ],
  openGraph: {
    siteName: "Shreeji Marketers",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${dm.variable}`}>
      <body className="font-dm bg-dark text-[#e4e4f0] antialiased overflow-x-hidden">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />

        {/* WhatsApp Floating Icon */}
        <a
  href="https://wa.me/917291001898"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50 w-14 h-14 flex items-center justify-center bg-[#25D366] rounded-full shadow-lg hover:scale-110 transition-all duration-300"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    className="w-7 h-7 fill-white"
  >
    <path d="M16 .396C7.163.396 0 7.559 0 16.396c0 2.89.756 5.706 2.188 8.17L0 32l7.64-2.165a15.94 15.94 0 0 0 8.36 2.303c8.837 0 16-7.163 16-16S24.837.396 16 .396zm0 29.195a13.13 13.13 0 0 1-6.687-1.83l-.48-.284-4.533 1.285 1.208-4.42-.312-.454A13.103 13.103 0 0 1 2.87 16.396C2.87 8.992 8.596 3.267 16 3.267s13.13 5.725 13.13 13.129S23.404 29.59 16 29.59z"/>
  </svg>
</a>
      </body>
    </html>
  );
}
