import React from "react";
import type { Metadata } from "next";
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan Sewa - Kosan Murah PT MIM Karawang",
  description:
    "Syarat dan ketentuan umum penyewaan kamar, tata tertib hunian, dan aturan pembayaran di Kosan Murah PT MIM Karawang.",
};

export default function TermsPage() {
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
          <span className="text-slate-800 font-medium">Syarat & Ketentuan</span>
        </nav>

        <article className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-200 space-y-6">
          <header className="border-b border-slate-100 pb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
              Aturan & Ketertiban Hunian
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3">
              Syarat & Ketentuan Sewa Kamar
            </h1>
            <p className="text-xs text-slate-500 mt-2">
              Diterapkan untuk menjaga kenyamanan, keamanan, dan ketenangan seluruh penghuni Kosan Murah PT MIM.
            </p>
          </header>

          <section className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <h2 className="text-base font-bold text-slate-900">1. Ketentuan Umum Calon Penghuni</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Calon penghuni wajib menyerahkan fotokopi atau foto identitas diri yang sah dan masih berlaku (KTP / Surat Keterangan Kerja / ID Card Perusahaan).</li>
              <li>Hunian diprioritaskan bagi karyawan/karyawati yang bekerja di sekitar kawasan industri Karawang (khususnya PT Multi Indomandiri dan sekitarnya).</li>
              <li>Penyewa bertanggung jawab penuh menjaga kebersihan kamar dan area bersama (lorong, tempat parkir, dan area jemuran).</li>
            </ul>

            <h2 className="text-base font-bold text-slate-900 pt-4 border-t border-slate-100">
              2. Pembayaran Sewa & Token Listrik
            </h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Uang sewa dibayarkan di awal periode sewa bulanan sesuai dengan tanggal masuk yang disepakati dengan pengelola.</li>
              <li>Setiap kamar dilengkapi dengan meteran listrik prabayar (token PLN) mandiri. Penghuni bertanggung jawab atas pengisian kuota listrik masing-masing kamar.</li>
              <li>Fasilitas air bersih dan akses jaringan Wi-Fi sudah termasuk ke dalam biaya sewa bulanan tanpa pungutan biaya tambahan.</li>
            </ul>

            <h2 className="text-base font-bold text-slate-900 pt-4 border-t border-slate-100">
              3. Keamanan, Ketertiban, & Kenyamanan Bersama
            </h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Dilarang keras membawa, menyimpan, atau mengonsumsi minuman keras, obat-obatan terlarang, narkotika, atau barang berbahaya yang melanggar hukum RI.</li>
              <li>Dilarang membawa senjata tajam atau senjata api ke lingkungan kosan.</li>
              <li>Mengingat mayoritas penghuni bekerja dengan sistem shift (pagi, sore, dan malam), seluruh penghuni diwajibkan menjaga ketenangan suara pada jam istirahat.</li>
              <li>Tamu luar yang menginap wajib melapor terlebih dahulu kepada pihak pengelola kosan demi keamanan bersama.</li>
            </ul>

            <h2 className="text-base font-bold text-slate-900 pt-4 border-t border-slate-100">
              4. Fasilitas Kamar & Penggunaan Aset
            </h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Setiap kamar telah disediakan fasilitas standar sesuai tipe (kasur, lemari, kipas angin/AC, wastafel, dan kamar mandi dalam).</li>
              <li>Penghuni wajib merawat fasilitas yang disediakan. Kerusakan yang timbul akibat kelalaian pemakaian menjadi tanggung jawab penghuni.</li>
              <li>Sebelum meninggalkan kamar dalam jangka waktu lama (misalnya cuti atau mudik), pastikan kran air tertutup rapat dan peralatan listrik dimatikan.</li>
            </ul>

            <h2 className="text-base font-bold text-slate-900 pt-4 border-t border-slate-100">
              5. Pengakhiran Masa Sewa
            </h2>
            <p>
              Penghuni yang berencana mengakhiri masa sewa diharapkan memberikan konfirmasi kepada pengelola sekurang-kurangnya 1 (satu) minggu sebelum tanggal jatuh tempo berikutnya. Kamar diserahkan kembali dalam kondisi bersih dan kunci diserahkan ke pengelola.
            </p>
          </section>
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}
