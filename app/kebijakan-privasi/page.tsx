import React from "react";
import type { Metadata } from "next";
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kebijakan Privasi (Privacy Policy) - Kosan Murah PT MIM Karawang",
  description:
    "Kebijakan privasi resmi situs Kosan Murah PT MIM. Informasi mengenai pengumpulan data, penggunaan cookie, periklanan Google AdSense, dan perlindungan privasi pengguna.",
};

export default function PrivacyPolicyPage() {
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
          <span className="text-slate-800 font-medium">Kebijakan Privasi</span>
        </nav>

        <article className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-200 space-y-6">
          <header className="border-b border-slate-100 pb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
              Kepatuhan & Transparansi Pengguna
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3">
              Kebijakan Privasi (Privacy Policy)
            </h1>
            <p className="text-xs text-slate-500 mt-2">
              Terakhir diperbarui: 23 Oktober 2026 &bull; Dikelola oleh: Dewan Mochamad Pratama
            </p>
          </header>

          <section className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <p>
              Di <strong>Kosan Murah PT MIM</strong> (dapat diakses melalui{" "}
              <Link href="/" className="text-blue-600 underline">
                https://kosan-mim.vercel.app/
              </Link>
              ), salah satu prioritas utama kami adalah privasi para pengunjung kami. Dokumen Kebijakan Privasi ini berisi jenis informasi yang dikumpulkan dan dicatat oleh situs kami serta bagaimana kami menggunakannya.
            </p>
            <p>
              Jika Anda memiliki pertanyaan tambahan atau memerlukan informasi lebih lanjut tentang Kebijakan Privasi kami, jangan ragu untuk menghubungi kami melalui WhatsApp atau email resmi kami.
            </p>

            <h2 className="text-lg font-bold text-slate-900 pt-4 border-t border-slate-100">
              1. Berkas Log (Log Files)
            </h2>
            <p>
              Kosan Murah PT MIM mengikuti prosedur standar dalam menggunakan berkas log. Berkas ini mencatat pengunjung saat mereka mengunjungi situs web. Semua perusahaan hosting melakukan hal ini sebagai bagian dari analitik layanan hosting. Informasi yang dikumpulkan oleh berkas log mencakup alamat protokol internet (IP), jenis peramban (browser), Penyedia Layanan Internet (ISP), tanggal dan cap waktu, halaman rujukan/keluar, dan mungkin jumlah klik. Informasi ini tidak ditautkan ke informasi apa pun yang dapat diidentifikasi secara pribadi. Tujuannya adalah untuk menganalisis tren, mengelola situs, melacak pergerakan pengguna di situs web, dan mengumpulkan informasi demografis.
            </p>

            <h2 className="text-lg font-bold text-slate-900 pt-4 border-t border-slate-100">
              2. Cookie dan Web Beacon
            </h2>
            <p>
              Seperti situs web lainnya, Kosan Murah PT MIM menggunakan &quot;cookie&quot;. Cookie ini digunakan untuk menyimpan informasi termasuk preferensi pengunjung, dan halaman-halaman di situs web yang diakses atau dikunjungi pengunjung. Informasi tersebut digunakan untuk mengoptimalkan pengalaman pengguna dengan menyesuaikan konten halaman web kami berdasarkan jenis browser pengunjung dan/atau informasi lainnya.
            </p>

            <h2 className="text-lg font-bold text-slate-900 pt-4 border-t border-slate-100">
              3. Cookie Google DoubleClick DART &amp; Periklanan Google AdSense
            </h2>
            <p>
              Google adalah salah satu vendor pihak ketiga di situs kami. Google juga menggunakan cookie, yang dikenal sebagai cookie DART, untuk menayangkan iklan kepada pengunjung situs kami berdasarkan kunjungan mereka ke situs kami dan situs lain di internet.
            </p>
            <p>
              Pengunjung dapat memilih untuk menolak penggunaan cookie DART dengan mengunjungi Kebijakan Privasi jaringan iklan dan konten Google di URL berikut:{" "}
              <a
                href="https://policies.google.com/technologies/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                https://policies.google.com/technologies/ads
              </a>
              .
            </p>
            <p>
              Mitra periklanan kami, termasuk Google AdSense, dapat menggunakan cookie dan web beacon di situs kami untuk mengukur keefektifan kampanye iklan mereka dan/atau mempersonalisasi konten iklan yang Anda lihat. Kosan Murah PT MIM tidak memiliki akses atau kontrol terhadap cookie yang digunakan oleh pengiklan pihak ketiga tersebut.
            </p>

            <h2 className="text-lg font-bold text-slate-900 pt-4 border-t border-slate-100">
              4. Kebijakan Privasi Pihak Ketiga
            </h2>
            <p>
              Kebijakan Privasi Kosan Murah PT MIM tidak berlaku untuk pengiklan atau situs web lain. Oleh karena itu, kami menyarankan Anda untuk berkonsultasi dengan Kebijakan Privasi masing-masing dari server iklan pihak ketiga ini untuk informasi yang lebih terperinci. Ini mungkin mencakup praktik mereka dan petunjuk tentang cara menyisih dari opsi tertentu.
            </p>
            <p>
              Anda dapat memilih untuk menonaktifkan cookie melalui opsi peramban individual Anda. Untuk mengetahui informasi lebih rinci tentang pengelolaan cookie dengan peramban web tertentu, informasi tersebut dapat ditemukan di situs web resmi masing-masing peramban.
            </p>

            <h2 className="text-lg font-bold text-slate-900 pt-4 border-t border-slate-100">
              5. Informasi Anak
            </h2>
            <p>
              Bagian lain dari prioritas kami adalah menambahkan perlindungan bagi anak-anak saat menggunakan internet. Kami mendorong orang tua dan wali untuk mengamati, berpartisipasi, dan/atau memantau serta membimbing aktivitas online mereka. Kosan Murah PT MIM tidak secara sadar mengumpulkan Informasi Identifikasi Pribadi apa pun dari anak-anak di bawah usia 13 tahun.
            </p>

            <h2 className="text-lg font-bold text-slate-900 pt-4 border-t border-slate-100">
              6. Persetujuan Anda
            </h2>
            <p>
              Dengan menggunakan situs web kami, Anda dengan ini menyetujui Kebijakan Privasi kami dan menyetujui syarat dan ketentuannya.
            </p>

            <h2 className="text-lg font-bold text-slate-900 pt-4 border-t border-slate-100">
              7. Kontak Resmi Pengelola
            </h2>
            <p>
              Jika ada pertanyaan seputar kebijakan privasi ini atau hak data Anda, silakan hubungi kontak pengelola:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-700">
              <li><strong>Pengelola:</strong> Dewan Mochamad Pratama</li>
              <li><strong>Alamat Kosan:</strong> Kp. Situwaringin, RT 012 / RW 004, Desa Sumurkondang, Kec. Klari, Kab. Karawang, Jawa Barat</li>
              <li><strong>WhatsApp / Telepon:</strong> 0823-1873-0894</li>
              <li><strong>Email:</strong> dewan.mochpratama23@gmail.com</li>
            </ul>
          </section>
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}
