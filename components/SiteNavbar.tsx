import React from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function SiteNavbar() {
  const whatsappNumber = "6282318730894";
  const whatsappMessage = encodeURIComponent(
    "Halo Kak Dewan, saya ingin tanya-tanya / survei kamar Kosan Murah PT MIM.",
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center gap-3">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 cursor-pointer">
          <div className="bg-blue-900 text-white p-2 rounded-xl shadow-sm flex items-center justify-center">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </div>
          <div>
            <span className="text-base md:text-lg font-extrabold text-blue-900 tracking-tight block leading-none">
              Kosan Murah PT MIM
            </span>
            <span className="text-[10px] text-slate-500 font-medium tracking-wide">
              KARAWANG
            </span>
          </div>
        </Link>

        {/* NAVIGATION LINKS */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-semibold text-slate-600">
          <Link href="/" className="hover:text-blue-900 transition-colors">
            Beranda
          </Link>
          <Link href="/#kamar" className="hover:text-blue-900 transition-colors">
            Tipe Kamar
          </Link>
          <Link href="/laundry" className="hover:text-blue-900 transition-colors">
            Laundry
          </Link>
          <Link href="/artikel" className="hover:text-blue-900 transition-colors">
            Panduan & Blog
          </Link>
          <Link href="/tentang-kami" className="hover:text-blue-900 transition-colors">
            Tentang Kami
          </Link>
        </nav>

        {/* WHATSAPP CTA */}
        <div className="flex items-center gap-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-3.5 py-1.5 rounded-lg font-medium text-xs sm:text-sm flex items-center gap-1.5 transition-all shadow-sm"
          >
            <FaWhatsapp className="text-base" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}
