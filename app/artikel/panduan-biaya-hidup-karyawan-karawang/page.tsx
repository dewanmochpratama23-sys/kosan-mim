import React from "react";
import type { Metadata } from "next";
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";
import Link from "next/link";
import { FaCalendarAlt, FaUserEdit, FaClock, FaCheckCircle, FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Panduan Estimasi Biaya Hidup & Kost Karyawan di Klari Karawang - Kosan Murah PT MIM",
  description:
    "Rincian lengkap estimasi pengeluaran bulanan karyawan industri di Karawang: sewa kamar kos, token listrik, makan harian, bensin, laundry, dan tips menabung.",
};

export default function ArticleTwoPage() {
  const whatsappNumber = "6282318730894";
  const whatsappMessage = encodeURIComponent(
    "Halo Mas Dewan, saya ingin tanya info ketersediaan kamar Kosan Murah PT MIM.",
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
          <span className="text-slate-800 font-medium">Estimasi Biaya Hidup</span>
        </nav>

        <article className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-200 space-y-6">
          <header className="border-b border-slate-100 pb-6 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
              Manajemen Finansial Karyawan
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
              Panduan Lengkap Estimasi Biaya Hidup &amp; Pengeluaran Kost Karyawan di Klari Karawang
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-1">
              <span className="flex items-center gap-1.5">
                <FaUserEdit className="text-slate-400" />
                <span>Ditulis oleh: Dewan Mochamad Pratama</span>
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1.5">
                <FaCalendarAlt className="text-slate-400" />
                <span>22 Oktober 2026</span>
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1.5">
                <FaClock className="text-slate-400" />
                <span>5 Menit Baca</span>
              </span>
            </div>
          </header>

          <div className="space-y-5 text-sm sm:text-base text-slate-700 leading-relaxed">
            <p>
              Dengan standar Upah Minimum Kabupaten (UMK) Karawang yang secara konsisten menjadi salah satu yang tertinggi di Indonesia, banyak karyawan perantau yang bercita-cita mengumpulkan tabungan maksimal untuk masa depan, modal usaha, atau membahagiakan orang tua di kampung.
            </p>
            <p>
              Namun, besaran gaji UMK bisa cepat habis jika Anda tidak pintar mengelola anggaran bulanan, terutama pos pengeluaran primer seperti sewa tempat tinggal, konsumsi makanan, dan mobilitas.
            </p>
            <p>
              Berikut adalah <strong>rincian estimasi biaya hidup realistis</strong> per bulan bagi seorang karyawan yang tinggal di kawasan Klari, Karawang:
            </p>

            <h2 className="text-lg sm:text-xl font-bold text-slate-900 pt-4 border-t border-slate-100">
              1. Biaya Sewa Kamar Kost (Rp 500.000 – Rp 1.000.000)
            </h2>
            <p>
              Di daerah Klari dan sekitarnya (seperti Sumurkondang dan Kosambi), harga sewa kamar kos berkisar antara Rp 500.000 hingga Rp 1.000.000 per bulan tergantung fasilitas:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Tipe Standar Hemat:</strong> Rp 500.000 – Rp 650.000 / bulan (Kamar mandi dalam, kasur, lemari, kipas angin).</li>
              <li><strong>Tipe Premium Ber-AC:</strong> Rp 850.000 – Rp 1.000.000 / bulan (Kamar mandi dalam, AC dingin, kasur empuk, wastafel).</li>
            </ul>

            <h2 className="text-lg sm:text-xl font-bold text-slate-900 pt-4 border-t border-slate-100">
              2. Biaya Token Listrik Mandiri (Rp 75.000 – Rp 200.000)
            </h2>
            <p>
              Dengan sistem meteran token per kamar, pengeluaran listrik sangat fleksibel tergantung kebutuhan:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Untuk kamar non-AC (kipas angin, lampu LED, charger HP/laptop): sekitar Rp 50.000 – Rp 80.000 per bulan.</li>
              <li>Untuk kamar ber-AC (penggunaan malam hari saat tidur): sekitar Rp 150.000 – Rp 250.000 per bulan.</li>
            </ul>

            <h2 className="text-lg sm:text-xl font-bold text-slate-900 pt-4 border-t border-slate-100">
              3. Biaya Konsumsi Makan &amp; Minum (Rp 1.200.000 – Rp 1.800.000)
            </h2>
            <p>
              Kawasan sekitar pabrik dipenuhi oleh warung nasi Tegal (Warteg), warung Padang hemat, serta pedagang makanan kaki lima. Rata-rata satu porsi makan komplit berkisar antara Rp 12.000 hingga Rp 18.000. Jika Anda makan 3 kali sehari di warung, anggaran sekitar Rp 40.000 – Rp 50.000 per hari (Rp 1,2 juta – Rp 1,5 juta per bulan). Anda bisa lebih berhemat dengan memasak nasi sendiri di kosan.
            </p>

            <h2 className="text-lg sm:text-xl font-bold text-slate-900 pt-4 border-t border-slate-100">
              4. Biaya Transportasi &amp; Bensin (Rp 100.000 – Rp 250.000)
            </h2>
            <p>
              Inilah kunci penghematan terbesar! Jika Anda menyewa kamar kos yang lokasinya tepat di belakang pabrik tempat Anda bekerja, biaya bensin Anda hampir mendekati <strong>Rp 0</strong> karena Anda bisa berjalan kaki dengan santai tanpa perlu menyalakan mesin motor.
            </p>

            <h2 className="text-lg sm:text-xl font-bold text-slate-900 pt-4 border-t border-slate-100">
              5. Biaya Laundry Cuci Setrika (Rp 100.000 – Rp 200.000)
            </h2>
            <p>
              Seragam kerja pabrik dan pakaian sehari-hari umumnya mencapai 3–4 kg per minggu. Dengan tarif laundry kiloan sekitar Rp 7.000 – Rp 8.000 per kg, pengeluaran cuci bersih setrika wangi berada di angka Rp 100.000 – Rp 150.000 per bulan.
            </p>

            <div className="bg-slate-900 text-white rounded-2xl p-6 mt-6 space-y-3">
              <h3 className="font-bold text-base text-emerald-400">
                Ringkasan Simulasi Total Biaya Bulanan
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs pt-1">
                <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                  <span className="text-slate-400 block">Sewa Kosan</span>
                  <span className="font-bold text-sm text-white">Rp 650.000</span>
                </div>
                <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                  <span className="text-slate-400 block">Makan &amp; Minum</span>
                  <span className="font-bold text-sm text-white">Rp 1.400.000</span>
                </div>
                <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                  <span className="text-slate-400 block">Listrik &amp; Cuci</span>
                  <span className="font-bold text-sm text-white">Rp 200.000</span>
                </div>
                <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                  <span className="text-slate-400 block">Estimasi Total</span>
                  <span className="font-bold text-sm text-emerald-400">~Rp 2.250.000</span>
                </div>
              </div>
              <p className="text-xs text-slate-300 pt-2 leading-relaxed">
                Dengan pengeluaran hidup sekitar Rp 2,2 jutaan di kawasan Klari, Anda masih dapat menyisihkan lebih dari <strong>50% penghasilan UMK</strong> untuk tabungan masa depan dan investasi!
              </p>
            </div>
          </div>
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}
