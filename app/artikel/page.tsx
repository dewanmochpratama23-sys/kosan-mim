import React from "react";
import type { Metadata } from "next";
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";
import Link from "next/link";
import { FaBookOpen, FaCalendarAlt, FaUserEdit, FaArrowRight } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Panduan & Blog Seputar Kost di Karawang - Kosan Murah PT MIM",
  description:
    "Kumpulan artikel informatif seputar tips memilih kosan karyawan, panduan biaya hidup di Karawang, fasilitas industri Klari, dan rekomendasi hunian nyaman.",
};

const articles = [
  {
    slug: "tips-memilih-kosan-karyawan-karawang",
    title: "7 Tips Memilih Kosan Nyaman dan Strategis untuk Karyawan di Kawasan Industri Karawang",
    date: "23 Oktober 2026",
    author: "Dewan Mochamad Pratama",
    category: "Tips Hunian",
    excerpt:
      "Bekerja di kawasan industri Karawang menuntut ketahanan fisik tinggi. Memilih kosan yang salah dapat membuat lelah di jalan dan menguras dompet. Simak 7 kriteria penting sebelum memutuskan menyewa kosan.",
    readTime: "4 menit baca",
  },
  {
    slug: "panduan-biaya-hidup-karyawan-karawang",
    title: "Panduan Lengkap Estimasi Biaya Hidup & Pengeluaran Kost Karyawan di Klari Karawang",
    date: "22 Oktober 2026",
    author: "Dewan Mochamad Pratama",
    category: "Finansial & Anggaran",
    excerpt:
      "Rincian lengkap pos pengeluaran bulanan karyawan di Karawang: mulai dari sewa kamar, kuota listrik token, konsumsi makan harian, transportasi, laundry, hingga alokasi tabungan masa depan.",
    readTime: "5 menit baca",
  },
  {
    slug: "fasilitas-dan-akses-sekitar-pt-mim",
    title: "Mengenal Akses Transportasi, Fasilitas Publik & Kawasan Industri di Sekitar PT MIM Klari",
    date: "20 Oktober 2026",
    author: "Dewan Mochamad Pratama",
    category: "Info Lokasi",
    excerpt:
      "Ulasan lengkap mengenai aksesibilitas jalan raya, rute angkutan, kedekatan minimarket, fasilitas ATM, klinik kesehatan, dan titik kuliner terdekat dari Kosan Murah PT MIM di Sumurkondang Klari.",
    readTime: "4 menit baca",
  },
];

export default function ArticleHubPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col justify-between">
      <SiteNavbar />

      <main className="max-w-5xl mx-auto px-4 py-12 flex-1 space-y-8">
        {/* Breadcrumb */}
        <nav className="text-xs text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-blue-900">
            Beranda
          </Link>
          <span>/</span>
          <span className="text-slate-800 font-medium">Artikel &amp; Panduan Kost</span>
        </nav>

        {/* Header */}
        <header className="bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-900 text-white rounded-3xl p-8 sm:p-12 shadow-md relative overflow-hidden">
          <div className="max-w-2xl relative z-10 space-y-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-200 border border-blue-400/30">
              <FaBookOpen />
              <span>Pusat Edukasi &amp; Informasi Hunian</span>
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Panduan &amp; Artikel Seputar Kost Karawang
            </h1>
            <p className="text-sm text-slate-300 leading-relaxed">
              Informasi terkini, ulasan lokasi kawasan industri Klari, tips finansial karyawan, dan panduan memilih kontrakan terbaik untuk Anda.
            </p>
          </div>
        </header>

        {/* Article Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((art) => (
            <article
              key={art.slug}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between p-6 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2.5 py-1 rounded-md font-semibold bg-blue-50 text-blue-700">
                    {art.category}
                  </span>
                  <span className="text-slate-400 font-medium">{art.readTime}</span>
                </div>

                <h2 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                  <Link href={`/artikel/${art.slug}`}>{art.title}</Link>
                </h2>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {art.excerpt}
                </p>
              </div>

              <div className="pt-5 border-t border-slate-100 mt-5 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-slate-500">
                  <FaCalendarAlt className="text-slate-400" />
                  <span>{art.date}</span>
                </div>
                <Link
                  href={`/artikel/${art.slug}`}
                  className="font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  <span>Baca Selengkapnya</span>
                  <FaArrowRight className="text-[10px]" />
                </Link>
              </div>
            </article>
          ))}
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
