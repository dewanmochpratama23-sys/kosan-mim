import React from "react";
import type { Metadata } from "next";
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";
import Link from "next/link";
import { FaCalendarAlt, FaUserEdit, FaClock, FaMapMarkedAlt, FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Fasilitas Publik & Akses Transportasi Sekitar PT MIM Klari - Kosan Murah PT MIM",
  description:
    "Ulasan lengkap rute transportasi, kedekatan minimarket, ATM, klinik kesehatan, pasar tradisional, dan akses jalan di sekitar kawasan PT MIM Klari Karawang.",
};

export default function ArticleThreePage() {
  const whatsappNumber = "6282318730894";
  const whatsappMessage = encodeURIComponent(
    "Halo Mas Dewan, saya ingin tanya info lokasi dan kamar Kosan Murah PT MIM.",
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col justify-between">
      <SiteNavbar />

      <main className="max-w-4xl mx-auto px-4 py-12 flex-1">
        {/* Breadcrumb */}
        <nav className="text-xs text-slate-500 mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-blue-900">
            Beranda
          </Link>
          <span>/</span>
          <Link href="/artikel" className="hover:text-blue-900">
            Artikel &amp; Panduan
          </Link>
          <span>/</span>
          <span className="text-slate-800 font-medium">Fasilitas &amp; Akses Klari</span>
        </nav>

        <article className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-200 space-y-6">
          <header className="border-b border-slate-100 pb-6 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
              Panduan Wilayah Klari
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
              Mengenal Akses Transportasi, Fasilitas Publik &amp; Kawasan Industri di Sekitar PT MIM Klari
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-1">
              <span className="flex items-center gap-1.5">
                <FaUserEdit className="text-slate-400" />
                <span>Ditulis oleh: Dewan Mochamad Pratama</span>
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1.5">
                <FaCalendarAlt className="text-slate-400" />
                <span>20 Oktober 2026</span>
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1.5">
                <FaClock className="text-slate-400" />
                <span>4 Menit Baca</span>
              </span>
            </div>
          </header>

          <div className="space-y-5 text-sm sm:text-base text-slate-700 leading-relaxed">
            <p>
              Kecamatan Klari merupakan salah satu titik urat nadi industri dan perekonomian terpenting di Kabupaten Karawang. Terletak strategis di perlintasan jalur pantura Karawang–Cikampek dan terhubung langsung dengan Gerbang Tol Karawang Timur, kawasan ini menjadi rumah bagi banyak korporasi manufaktur terkemuka, salah satunya kompleks pabrik <strong>PT Multi Indomandiri (Wings Group)</strong>.
            </p>
            <p>
              Bagi Anda yang berencana tinggal di sekitar kawasan pabrik ini, berikut ulasan lengkap mengenai fasilitas umum dan aksesibilitas yang ada di sekitarnya:
            </p>

            <h2 className="text-lg sm:text-xl font-bold text-slate-900 pt-4 border-t border-slate-100">
              1. Akses Jalan Raya &amp; Transportasi Umum
            </h2>
            <p>
              Wilayah Dusun Serang, Desa Sumurkondang terhubung langsung dengan jalan raya utama Klari. Dari lokasi ini, Anda dapat dengan mudah menjangkau:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Stasiun Kereta Api Klari:</strong> Berjarak hanya sekitar 10–12 menit, memudahkan mobilisasi menggunakan Kereta Commuter Line (Lokal Walahar / Jatiluhur) menuju Cikarang, Purwakarta, hingga Jakarta.</li>
              <li><strong>Pintu Tol Karawang Timur:</strong> Akses mudah ke Jalan Tol Jakarta–Cikampek dalam radius kurang dari 15 menit berkendara.</li>
              <li><strong>Angkutan Kota (Angkot):</strong> Rute angkot Klari–Johar dan Cikampek melintas secara rutin di jalan utama, memudahkan mobilitas bagi yang tidak membawa kendaraan pribadi.</li>
            </ul>

            <h2 className="text-lg sm:text-xl font-bold text-slate-900 pt-4 border-t border-slate-100">
              2. Kebutuhan Belanja Harian &amp; Minimarket
            </h2>
            <p>
              Untuk kebutuhan sehari-hari seperti sabun, pasta gigi, air mineral galon, maupun cemilan, gerai <strong>Indomaret</strong> dan <strong>Alfamart</strong> tersedia dalam jarak sangat dekat (sekitar 200–300 meter). Selain itu, terdapat pasar tradisional dan pedagang sayur keliling setiap pagi yang memudahkan penghuni kos membeli bahan makanan segar dengan harga terjangkau.
            </p>

            <h2 className="text-lg sm:text-xl font-bold text-slate-900 pt-4 border-t border-slate-100">
              3. Fasilitas Kesehatan &amp; Klinik Medis
            </h2>
            <p>
              Kesehatan adalah prioritas utama pekerja. Di sekitar kawasan Klari dan Sumurkondang terdapat fasilitas kesehatan yang mudah diakses:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Klinik BPJS Kesehatan &amp; Apotek 24 Jam:</strong> Tersedia di sepanjang jalan utama Klari untuk pertolongan medis pertama dan penebusan obat.</li>
              <li><strong>Puskesmas Klari:</strong> Pusat layanan kesehatan masyarakat kecamatan yang melayani pemeriksaan umum.</li>
              <li><strong>Rumah Sakit Terdekat:</strong> RS Citra Sari Husada (Intan Barokah) dan RS Fikri Medika berjarak sekitar 10–15 menit berkendara.</li>
            </ul>

            <h2 className="text-lg sm:text-xl font-bold text-slate-900 pt-4 border-t border-slate-100">
              4. Fasilitas Perbankan &amp; Mesin ATM
            </h2>
            <p>
              Mesin ATM bersama untuk bank-bank utama seperti <strong>BCA, BRI, Mandiri, dan BNI</strong> tersedia di minimarket-minimarket terdekat di jalan raya. Hal ini mempermudah pengambilan uang tunai gaji bulanan tanpa perlu menempuh perjalanan jauh ke pusat kota Karawang.
            </p>

            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 mt-6 space-y-3">
              <h3 className="font-bold text-base text-emerald-950 flex items-center gap-2">
                <FaMapMarkedAlt className="text-emerald-700" />
                <span>Kosan Murah PT MIM: Posisi Emas di Sumurkondang Klari</span>
              </h3>
              <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed">
                Tepat berada di Kampung Situwaringin, RT 012 / RW 004, Desa Sumurkondang, kosan kami menawarkan perpaduan sempurna antara ketenangan lingkungan kampung yang ramah dengan akses selangkah ke pabrik PT MIM dan fasilitas publik Klari.
              </p>
              <div className="pt-1">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-sm"
                >
                  <FaWhatsapp className="text-base" />
                  <span>Kirim Pesan / Survei Lokasi Sekarang</span>
                </a>
              </div>
            </div>
          </div>
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}
