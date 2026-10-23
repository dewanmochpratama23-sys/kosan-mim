import React from "react";
import type { Metadata } from "next";
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";
import Link from "next/link";
import { FaCalendarAlt, FaUserEdit, FaClock, FaCheckCircle, FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "7 Tips Memilih Kosan Karyawan di Kawasan Industri Karawang - Kosan Murah PT MIM",
  description:
    "Panduan lengkap dan 7 tips praktis memilih kosan karyawan di Karawang. Perhatikan jarak ke pabrik, sistem token listrik, ventilasi udara, dan keamanan lingkungan.",
};

export default function ArticleOnePage() {
  const whatsappNumber = "6282318730894";
  const whatsappMessage = encodeURIComponent(
    "Halo Mas Dewan, saya membaca artikel tips kosan dan ingin survei kamar di Kosan Murah PT MIM.",
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
          <span className="text-slate-800 font-medium">Tips Memilih Kosan</span>
        </nav>

        <article className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-200 space-y-6">
          <header className="border-b border-slate-100 pb-6 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
              Panduan Karyawan Industri
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
              7 Tips Memilih Kosan Nyaman dan Strategis untuk Karyawan di Kawasan Industri Karawang
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-1">
              <span className="flex items-center gap-1.5">
                <FaUserEdit className="text-slate-400" />
                <span>Ditulis oleh: Dewan Mochamad Pratama</span>
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1.5">
                <FaCalendarAlt className="text-slate-400" />
                <span>23 Oktober 2026</span>
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
              Kabupaten Karawang dikenal sebagai salah satu pusat manufaktur dan kawasan industri terbesar di Asia Tenggara. Ribuan pekerja dari berbagai pelosok nusantara berdatangan setiap tahunnya untuk meniti karir di pabrik-pabrik multinasional, termasuk di kawasan Klari, KIIC, KIM, dan Surya Cipta.
            </p>
            <p>
              Bagi seorang karyawan industri, tempat tinggal atau kamar kost bukan sekadar tempat menaruh barang bawaan. Kosan adalah tempat Anda memulihkan tenaga, melepas lelah setelah berdiri berjam-jam di lini produksi, dan beristirahat tenang demi menjaga fokus kerja esok hari.
            </p>
            <p>
              Berikut adalah <strong>7 pertimbangan penting</strong> sebelum Anda menandatangani akad sewa atau membayar uang muka kamar kos di wilayah Karawang:
            </p>

            <h2 className="text-lg sm:text-xl font-bold text-slate-900 pt-4 border-t border-slate-100">
              1. Kedekatan Jarak Fisik ke Lokasi Kerja (Waktu Tempuh)
            </h2>
            <p>
              Kemacetan di jalur arteri Klari, Jalan Raya Kosambi, hingga pintu tol Karawang Timur bisa sangat melelahkan pada jam pergantian shift pagi dan sore. Memilih kosan yang berjarak sangat dekat dengan pabrik (misalnya dapat ditempuh dengan berjalan kaki atau 3 menit berkendara motor) akan menghemat 1–2 jam waktu tidur Anda setiap harinya, sekaligus memotong anggaran bensin bulanan.
            </p>

            <h2 className="text-lg sm:text-xl font-bold text-slate-900 pt-4 border-t border-slate-100">
              2. Sistem Meteran Listrik Mandiri (Token Prabayar)
            </h2>
            <p>
              Hindari sistem pembagian listrik borongan atau sistem iuran yang tidak transparan. Kosan modern idealnya dilengkapi dengan <strong>kWh meteran token PLN tersendiri di setiap kamar</strong>. Dengan cara ini, Anda hanya membayar energi yang Anda gunakan sendiri—apakah menyalakan AC secara intensif atau sekadar mengisi daya ponsel dan kipas angin.
            </p>

            <h2 className="text-lg sm:text-xl font-bold text-slate-900 pt-4 border-t border-slate-100">
              3. Kamar Mandi Dalam untuk Menghindari Antrean Shift Pagi
            </h2>
            <p>
              Bagi karyawan shift pagi yang harus melakukan absensi tepat pukul 07.00 WIB, mengantre giliran mandi bersama 5 orang lainnya bisa menjadi mimpi buruk. Memilih tipe kamar dengan kamar mandi dalam memberikan privasi mutlak dan keleluasaan waktu bersiap-siap.
            </p>

            <h2 className="text-lg sm:text-xl font-bold text-slate-900 pt-4 border-t border-slate-100">
              4. Sirkulasi Udara &amp; Suhu Ruangan yang Sejuk
            </h2>
            <p>
              Iklim Karawang tergolong cukup panas di siang hari. Pastikan kamar memiliki ventilasi udara yang baik, jendela yang bisa dibuka dengan kawat nyamuk, serta pilihan kamar berfasilitas AC atau kipas angin yang memadai agar tidur tidak terasa pengap.
            </p>

            <h2 className="text-lg sm:text-xl font-bold text-slate-900 pt-4 border-t border-slate-100">
              5. Jaringan Internet Wi-Fi Cepat &amp; Stabil
            </h2>
            <p>
              Setelah pulang bekerja, hiburan seperti menonton video streaming, bermain game santai, serta melakukan video call dengan keluarga di kampung halaman membutuhkan koneksi internet yang lancar. Pastikan pihak kosan menyediakan koneksi Wi-Fi yang sudah teruji stabil.
            </p>

            <h2 className="text-lg sm:text-xl font-bold text-slate-900 pt-4 border-t border-slate-100">
              6. Keamanan Lingkungan &amp; Parkir Motor
            </h2>
            <p>
              Sepeda motor adalah aset transportasi utama bagi sebagian besar pekerja Karawang. Pastikan lingkungan kosan memiliki area parkir motor yang tertutup, memiliki pagar pembatas, dan berada di tengah perkampungan warga yang guyub serta aman dari kriminalitas.
            </p>

            <h2 className="text-lg sm:text-xl font-bold text-slate-900 pt-4 border-t border-slate-100">
              7. Ketersediaan Fasilitas Pendukung (Laundry &amp; Minimarket)
            </h2>
            <p>
              Mencuci dan menyetrika seragam kerja setelah lembur adalah tugas yang melelahkan. Keberadaan fasilitas cuci pakaian kiloan (laundry) langsung di lokasi atau warung makan dan minimarket dalam radius 100 meter adalah nilai tambah luar biasa yang akan mempermudah rutinitas harian Anda.
            </p>

            {/* Kesimpulan Callout */}
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mt-8 space-y-3">
              <h3 className="font-bold text-base text-blue-950 flex items-center gap-2">
                <FaCheckCircle className="text-blue-600" />
                <span>Mencari Kosan yang Memenuhi Seluruh Kriteria di Atas?</span>
              </h3>
              <p className="text-xs sm:text-sm text-blue-900 leading-relaxed">
                <strong>Kosan Murah PT MIM</strong> berlokasi tepat di belakang pabrik PT Multi Indomandiri, Desa Sumurkondang, Klari, Karawang. Kami menyediakan kamar bersih ber-AC/kipas, token listrik mandiri, Wi-Fi gratis, kamar mandi dalam, serta layanan laundry langsung di tempat.
              </p>
              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-sm"
                >
                  <FaWhatsapp className="text-base" />
                  <span>Konsultasi &amp; Jadwalkan Survei Kamar</span>
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
