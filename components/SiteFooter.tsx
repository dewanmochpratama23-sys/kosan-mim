import React from "react";
import Link from "next/link";
import { FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa";

export default function SiteFooter() {
  const whatsappNumber = "6282318730894";
  const whatsappMessage = encodeURIComponent(
    "Halo Kak Dewan, saya ingin tanya-tanya / survei kamar Kosan Murah PT MIM.",
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-slate-800">
          
          {/* Col 1: Profil Kosan */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="bg-blue-600 text-white p-2 rounded-xl">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <div>
                <h4 className="text-white font-extrabold text-base tracking-tight leading-none">
                  Kosan Murah PT MIM
                </h4>
                <span className="text-[10px] text-blue-400 font-bold uppercase tracking-wider">
                  Karawang Timur
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed pt-1">
              Pilihan hunian sewa kontrakan nyaman, bersih, dan aman khusus karyawan industri di kawasan Klari, Karawang. Lokasi strategis tepat di belakang pabrik PT Multi Indomandiri (Wings Group).
            </p>
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-all shadow-sm"
              >
                <FaWhatsapp className="text-sm" /> Chat via WhatsApp
              </a>
            </div>
          </div>

          {/* Col 2: Navigasi Cepat */}
          <div className="space-y-3">
            <h5 className="text-sm font-bold text-white uppercase tracking-wider">
              Navigasi Halaman
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors">
                  Beranda Utama
                </Link>
              </li>
              <li>
                <Link href="/#kamar" className="hover:text-blue-400 transition-colors">
                  Daftar & Harga Kamar
                </Link>
              </li>
              <li>
                <Link href="/laundry" className="hover:text-blue-400 transition-colors">
                  Layanan Laundry Kiloan
                </Link>
              </li>
              <li>
                <Link href="/tentang-kami" className="hover:text-blue-400 transition-colors">
                  Tentang Kami & Pengelola
                </Link>
              </li>
              <li>
                <Link href="/artikel" className="hover:text-blue-400 transition-colors">
                  Blog & Panduan Kost
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Artikel Edukasi Populer */}
          <div className="space-y-3">
            <h5 className="text-sm font-bold text-white uppercase tracking-wider">
              Panduan & Artikel
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/artikel/tips-memilih-kosan-karyawan-karawang"
                  className="hover:text-blue-400 transition-colors line-clamp-2"
                >
                  Tips Memilih Kosan Strategis Karyawan Karawang
                </Link>
              </li>
              <li>
                <Link
                  href="/artikel/panduan-biaya-hidup-karyawan-karawang"
                  className="hover:text-blue-400 transition-colors line-clamp-2"
                >
                  Estimasi Biaya Hidup & Kost di Klari Karawang
                </Link>
              </li>
              <li>
                <Link
                  href="/artikel/fasilitas-dan-akses-sekitar-pt-mim"
                  className="hover:text-blue-400 transition-colors line-clamp-2"
                >
                  Fasilitas & Akses Publik di Sekitar PT MIM
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Legalitas & Kontak */}
          <div className="space-y-3">
            <h5 className="text-sm font-bold text-white uppercase tracking-wider">
              Informasi & Kebijakan
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/kebijakan-privasi" className="hover:text-blue-400 transition-colors">
                  Kebijakan Privasi (Privacy Policy)
                </Link>
              </li>
              <li>
                <Link href="/syarat-ketentuan" className="hover:text-blue-400 transition-colors">
                  Syarat & Ketentuan Sewa
                </Link>
              </li>
            </ul>
            <div className="pt-2 space-y-1.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-blue-400 mt-0.5 shrink-0" />
                <span>Kp. Situwaringin, Ds. Sumurkondang, Klari, Karawang</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-emerald-400 shrink-0" />
                <span>0823-1873-0894 (Dewan M. Pratama)</span>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <FaGlobe className="text-blue-400 shrink-0" />
                <a
                  href="https://dewan-portofolio-delta.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 font-medium underline underline-offset-2 transition-colors"
                >
                  Portofolio Founder (Dewan M. Pratama) &rarr;
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <p>
            &copy; 2026 Kosan Murah PT MIM Karawang. Dikelola &amp; Dikembangkan oleh{" "}
            <a
              href="https://dewan-portofolio-delta.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 font-medium underline underline-offset-2 transition-colors"
            >
              Dewan Mochamad Pratama
            </a>
            .
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://dewan-portofolio-delta.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              Portofolio Founder
            </a>
            <span>&bull;</span>
            <Link href="/kebijakan-privasi" className="hover:text-slate-400 transition-colors">
              Privasi
            </Link>
            <span>&bull;</span>
            <Link href="/syarat-ketentuan" className="hover:text-slate-400 transition-colors">
              Syarat Sewa
            </Link>
            <span>&bull;</span>
            <Link href="/tentang-kami" className="hover:text-slate-400 transition-colors">
              Tentang
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
