import React from "react";
import type { Metadata } from "next";
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";
import Link from "next/link";
import { FaCheckCircle, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Tentang Kami & Profil Pengelola - Kosan Murah PT MIM Karawang",
  description:
    "Profil resmi Kosan Murah PT MIM di Klari Karawang. Didirikan dan dikelola langsung oleh Dewan Mochamad Pratama untuk menyediakan hunian kontrakan terjangkau dan nyaman bagi karyawan.",
};

export default function AboutPage() {
  const whatsappNumber = "6282318730894";
  const whatsappMessage = encodeURIComponent(
    "Halo Mas Dewan, saya ingin tanya informasi kamar Kosan Murah PT MIM.",
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col justify-between">
      <SiteNavbar />

      <main className="max-w-4xl mx-auto px-4 py-12 flex-1 space-y-8">
        {/* Breadcrumb */}
        <nav className="text-xs text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-blue-900">
            Beranda
          </Link>
          <span>/</span>
          <span className="text-slate-800 font-medium">Tentang Kami</span>
        </nav>

        {/* Hero Card */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-200 space-y-6">
          <div className="border-b border-slate-100 pb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
              Profil Unit Usaha
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
              Tentang Kosan Murah PT MIM Karawang
            </h1>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              Solusi hunian sewa kontrakan yang aman, bersih, dan berbiaya hemat tepat di jantung kawasan industri Klari, Karawang.
            </p>
          </div>

          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <h2 className="text-lg font-bold text-slate-900">Latar Belakang &amp; Visi Hunian</h2>
            <p>
              <strong>Kosan Murah PT MIM</strong> didirikan dengan tujuan mulia untuk memberikan solusi tempat tinggal yang layak, tenang, dan terjangkau bagi para tenaga kerja industri, operator pabrik, staf logistik, serta masyarakat umum di Karawang.
            </p>
            <p>
              Berada tepat di area belakang pabrik <strong>PT Multi Indomandiri (Wings Group)</strong>, hunian ini sangat menguntungkan bagi karyawan yang mendambakan efisiensi waktu tempuh ke tempat kerja tanpa harus terjebak macet jalan raya atau mengeluarkan ongkos bensin berlebih setiap harinya.
            </p>

            <h2 className="text-lg font-bold text-slate-900 pt-4 border-t border-slate-100">
              Profil Pemilik &amp; Pengelola
            </h2>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-2">
              <h3 className="font-bold text-base text-slate-900">Dewan Mochamad Pratama</h3>
              <p className="text-xs text-slate-600 font-medium">
                Founder, Pemilik Properti, &amp; Pengembang Web Platform Kosan Murah PT MIM
              </p>
              <p className="text-xs text-slate-600 leading-relaxed pt-1">
                Dewan Mochamad Pratama adalah praktisi operasional yang telah berpengalaman selama lebih dari 4 tahun di industri logistik pergudangan Karawang (PT Multi Indomandiri). Memahami betul dinamika dan kebutuhan para pekerja pabrik terhadap tempat istirahat yang tenang setelah lelah bekerja lembur atau giliran shift, beliau mengelola properti kontrakan ini secara profesional, transparan, dan ramah kekeluargaan.
              </p>
            </div>

            <h2 className="text-lg font-bold text-slate-900 pt-4 border-t border-slate-100">
              Nilai Utama &amp; Keunggulan yang Kami Tawarkan
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-blue-50/50 border border-blue-100 text-xs text-slate-700">
                <FaCheckCircle className="text-blue-600 mt-0.5 shrink-0" />
                <span><strong>Jarak Selangkah:</strong> Hanya beberapa menit berjalan kaki ke pintu gerbang area industri.</span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-emerald-50/50 border border-emerald-100 text-xs text-slate-700">
                <FaCheckCircle className="text-emerald-600 mt-0.5 shrink-0" />
                <span><strong>Listrik Token Mandiri:</strong> Penggunaan listrik transparan per kamar, tidak ada saling curiga.</span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-purple-50/50 border border-purple-100 text-xs text-slate-700">
                <FaCheckCircle className="text-purple-600 mt-0.5 shrink-0" />
                <span><strong>Koneksi Wi-Fi Lancar:</strong> Disediakan jaringan internet tanpa biaya tambahan untuk hiburan &amp; komunikasi.</span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-amber-50/50 border border-amber-100 text-xs text-slate-700">
                <FaCheckCircle className="text-amber-600 mt-0.5 shrink-0" />
                <span><strong>Fasilitas Laundry Cepat:</strong> Terintegrasi dengan layanan cuci setrika kiloan langsung di lokasi.</span>
              </div>
            </div>

            <h2 className="text-lg font-bold text-slate-900 pt-4 border-t border-slate-100">
              Lokasi &amp; Titik Kordinat
            </h2>
            <div className="flex items-start gap-3 p-4 bg-slate-100 rounded-xl">
              <FaMapMarkerAlt className="text-rose-500 text-xl mt-1 shrink-0" />
              <div className="text-xs text-slate-700 space-y-1">
                <p className="font-bold text-slate-900 text-sm">Alamat Lengkap:</p>
                <p>Kampung Situwaringin, Dusun Serang, RT 012 / RW 004, Desa Sumurkondang, Kecamatan Klari, Kabupaten Karawang, Jawa Barat 41371.</p>
                <p className="text-slate-500">Patokan: Masuk gang pemukiman tepat di belakang kompleks pabrik PT Multi Indomandiri.</p>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-all shadow-sm"
              >
                <FaWhatsapp className="text-base" />
                <span>Survei Lokasi &amp; Tanya Kamar via WhatsApp</span>
              </a>
              <Link
                href="/#kamar"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-blue-900 text-white font-semibold text-xs transition-all shadow-sm"
              >
                <span>Lihat Katalog Kamar &amp; Harga</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
