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

       
      


      </body>
    </html>
  );
}
