"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const services = [
  { href: "/services/seo", label: "SEO Services" },
  { href: "/services/google-ads", label: "Google Ads" },
  { href: "/services/meta-ads", label: "Meta Ads" },
  { href: "/services/performance-marketing", label: "Performance Marketing" },
  { href: "/services/video-creation", label: "Video Creation" },
  { href: "/services/web-development", label: "Web Development" },
  { href: "/services/graphic-designing", label: "Graphic Designing" },
  { href: "/services/social-media", label: "Social Media" },
  { href: "/services/meme-marketing", label: "Meme Marketing" },
  { href: "/services/ecommerce", label: "Ecommerce Marketing" },
  { href: "/services/growth-hacking", label: "Growth Hacking" },
];

export default function Navbar() {

  const pathname = usePathname();

  const [visible,setVisible] = useState(true);
  const [scrolled,setScrolled] = useState(false);
  const [mobileOpen,setMobileOpen] = useState(false);
  const [servicesOpen,setServicesOpen] = useState(false);

  const lastY = useRef(0);

  useEffect(() => {

    const onScroll = () => {

      const y = window.scrollY;

      if (y < 80) {

        setVisible(true);
        setScrolled(false);

      } else {

        setScrolled(true);

        if (y > lastY.current + 6) {

          setVisible(false);
          setMobileOpen(false);

        } else if (y < lastY.current - 6) {

          setVisible(true);

        }
      }

      lastY.current = y;

    };

    window.addEventListener("scroll",onScroll,{ passive:true });

    return () => window.removeEventListener("scroll",onScroll);

  },[]);


  useEffect(() => {

    setMobileOpen(false);
    setServicesOpen(false);

  },[pathname]);


  useEffect(() => {

    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };

  },[mobileOpen]);


  const isActive = (href:string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);


  return (

    <>
    
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${visible ? "translate-y-0" : "-translate-y-full"}
      ${scrolled
        ? "bg-[#07080b]/95 backdrop-blur-xl border-b border-white/[0.06]"
        : "bg-transparent"
      }`}
    >

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex items-center justify-between h-[64px] sm:h-[72px]">

        <Link href="/" className="flex items-center gap-2.5 shrink-0">

          <Image
            src="/image/sjm website logo.png"
            alt="SJM Logo"
            width={50}
            height={50}
            className="rounded-md"
          />

          <span className="font-[Outfit] font-black text-base sm:text-lg text-white leading-none tracking-tight">
            S<span className="text-accent">JM</span>
          </span>

        </Link>



        <div className="hidden lg:flex items-center gap-8">

          <Link
            href="/"
            className={`text-sm font-medium ${
              isActive("/") ? "text-accent" : "text-[#b0b0c8] hover:text-accent"
            }`}
          >
            Home
          </Link>

          <Link
            href="/about"
            className={`text-sm font-medium ${
              isActive("/about") ? "text-accent" : "text-[#b0b0c8] hover:text-accent"
            }`}
          >
            About
          </Link>



          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >

            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className={`flex items-center gap-1 text-sm font-medium ${
                pathname.startsWith("/services")
                  ? "text-accent"
                  : "text-[#b0b0c8] hover:text-accent"
              }`}
            >
              Services
            </button>


            <div
              className={`absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-[520px]
              bg-[#0d0e16] border border-white/[0.07] rounded-2xl p-4 shadow-2xl
              transition-all duration-200
              ${
                servicesOpen
                  ? "opacity-100 pointer-events-auto translate-y-0"
                  : "opacity-0 pointer-events-none -translate-y-2"
              }`}
            >

              <div className="grid grid-cols-2 gap-1">

                <Link
                  href="/services"
                  className="col-span-2 px-3 py-2.5 rounded-xl bg-accent/10 text-accent text-sm font-bold"
                >
                  All Services Overview
                </Link>

                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="px-3 py-2 rounded-lg text-sm text-[#9090b0] hover:text-white hover:bg-white/5"
                  >
                    {s.label}
                  </Link>
                ))}

              </div>

            </div>

          </div>



          <Link href="/case-studies" className="text-sm text-[#b0b0c8] hover:text-accent">
            Case Studies
          </Link>

          <Link href="/blog" className="text-sm text-[#b0b0c8] hover:text-accent">
            Blog
          </Link>

          <Link href="/contact" className="text-sm text-[#b0b0c8] hover:text-accent">
            Contact
          </Link>

        </div>



        <div className="flex items-center gap-3">

          <Link
            href="/contact"
            className="hidden lg:inline-flex bg-gradient-to-r from-accent to-[#ea580c]
            text-white text-sm font-bold px-5 py-2.5 rounded-xl"
          >
            Free Consultation
          </Link>


          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-9 h-9 flex flex-col justify-center items-center gap-[5px]"
          >
            <span className={`w-5 h-0.5 bg-white ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`w-5 h-0.5 bg-white ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`w-5 h-0.5 bg-white ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>

        </div>

      </div>

    </nav>



    <div
      className={`fixed inset-0 bg-black/70 z-40 lg:hidden transition-opacity
      ${mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      onClick={() => setMobileOpen(false)}
    />



    <div
      className={`fixed top-0 right-0 h-full w-[320px] bg-[#0a0b10]
      z-50 lg:hidden transition-transform duration-300
      ${mobileOpen ? "translate-x-0" : "translate-x-full"}
      flex flex-col overflow-y-auto`}
    >

      <div className="flex items-center justify-between px-5 h-[64px] border-b border-white/[0.07]">

        <Image
          src="/images/logo.png"
          alt="logo"
          width={30}
          height={30}
        />

        <button onClick={() => setMobileOpen(false)}>
          ✕
        </button>

      </div>



      <div className="px-4 py-5 flex flex-col gap-2">

        <Link href="/" className="py-3 text-[#b0b0c8]">Home</Link>

        <Link href="/about" className="py-3 text-[#b0b0c8]">About</Link>



        <button
          onClick={() => setServicesOpen(!servicesOpen)}
          className="py-3 text-left text-[#b0b0c8]"
        >
          Services
        </button>


        {servicesOpen && (

          <div className="ml-3 flex flex-col gap-2">

            {services.map((s) => (

              <Link
                key={s.href}
                href={s.href}
                className="text-sm text-[#7a7a95] hover:text-accent"
              >
                {s.label}
              </Link>

            ))}

          </div>

        )}



        <Link href="/case-studies" className="py-3 text-[#b0b0c8]">Case Studies</Link>

        <Link href="/blog" className="py-3 text-[#b0b0c8]">Blog</Link>

        <Link href="/contact" className="py-3 text-[#b0b0c8]">Contact</Link>

      </div>

    </div>

    </>
  );

}