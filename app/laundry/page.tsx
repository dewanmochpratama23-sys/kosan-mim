"use client";

import React from "react";
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaClock,
  FaTshirt,
  FaTag,
} from "react-icons/fa";

export default function LaundryPage() {
  const laundryPartner = {
    name: "M.Ilyas Laundry Rumahan",
    tagline:
      "Mitra resmi layanan cuci kiloan, setrika uap, laundry sepatu, sprei, hingga boneka & bantal kesayangan Anda.",
    price: "Rp 7.000 / kg",
    duration: "Estimasi selesai 2 hari (tersedia opsi kilat 1 hari)",
    distance: "± 50 meter dari Kosan Murah PT MIM",
    whatsapp: "6285813940423",
    badge: "Mitra Resmi Terverifikasi",
  };

  const services = [
    {
      title: "Cuci Kering Setrika (Kiloan)",
      price: "Rp 7.000 / kg",
      duration: "Estimasi 2 Hari",
      desc: "Pakaian dicuci bersih, wangi, disetrika rapi, dan dikemas plastik per item/bundel. Pilihan paling hemat dan populer untuk pakaian kerja karyawan.",
      highlight: true,
    },
    {
      title: "Layanan Kilat / Express",
      price: "Rp 10.000 / kg",
      duration: "Selesai 24 Jam (1 Hari)",
      desc: "Cocok untuk Anda yang membutuhkan seragam kerja mendadak atau pakaian bersih dalam waktu cepat.",
      highlight: false,
    },
    {
      title: "Cuci Sprei & Bedcover",
      price: "Rp 15.000 – Rp 25.000",
      duration: "Estimasi 2–3 Hari",
      desc: "Perawatan khusus untuk sprei single, double, selimut tebal, hingga bedcover dengan pewangi tahan lama.",
      highlight: false,
    },
    {
      title: "Laundry Sepatu Kerja & Sneakers",
      price: "Mulai Rp 20.000 / pasang",
      duration: "Estimasi 2 Hari",
      desc: "Pembersihan noda mendalam sol dan bahan sepatu kanvas, kulit sintetis, atau sneakers harian tanpa merusak material.",
      highlight: false,
    },
  ];

  const whatsappMessage = encodeURIComponent(
    "Halo Kak M.Ilyas Laundry, saya penghuni/tamu dari website Kosan Murah PT MIM, mau tanya dan order laundry.",
  );
  const whatsappUrl = `https://wa.me/${laundryPartner.whatsapp}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col justify-between">
      <SiteNavbar />

      <main className="max-w-5xl mx-auto px-4 py-10 md:py-14 flex-1 space-y-8">
        {/* Breadcrumb */}
        <nav className="text-xs text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-blue-900">
            Beranda
          </Link>
          <span>/</span>
          <span className="text-slate-800 font-medium">Layanan Laundry</span>
        </nav>

        {/* HERO BANNER DENGAN ANIMASI HALUS FRAMER MOTION */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 text-white rounded-3xl p-8 sm:p-12 shadow-lg relative overflow-hidden"
        >
          <div className="max-w-2xl relative z-10 space-y-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-200 border border-blue-400/30">
              <FaTshirt />
              <span>{laundryPartner.badge}</span>
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              Layanan Cuci &amp; Setrika Pakaian Terdekat
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Kebutuhan cuci pakaian harian anak kost jadi praktis, wangi, dan rapi tanpa perlu repot mencuci sendiri setelah lelah bekerja shift di pabrik.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs sm:text-sm font-bold transition-all shadow-md hover:scale-105 active:scale-95"
              >
                <FaWhatsapp className="text-base" />
                <span>Hubungi Mitra Laundry via WhatsApp</span>
              </a>
              <Link
                href="/#kamar"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold transition-all border border-white/20"
              >
                <span>Lihat Tipe Kamar Kos</span>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* PROFIL MITRA UTAMA */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-6 items-center"
        >
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                {laundryPartner.name}
              </h2>
              <span className="text-xs bg-emerald-100 text-emerald-800 font-semibold px-2.5 py-0.5 rounded-full">
                Buka Tiap Hari
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {laundryPartner.tagline}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-700">
              <div className="p-3 rounded-xl bg-blue-50/60 border border-blue-100">
                <span className="text-slate-500 block">Biaya Kiloan</span>
                <span className="font-bold text-blue-900 text-sm">{laundryPartner.price}</span>
              </div>
              <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-100">
                <span className="text-slate-500 block">Jarak dari Kos</span>
                <span className="font-bold text-emerald-900 text-sm">{laundryPartner.distance}</span>
              </div>
              <div className="p-3 rounded-xl bg-purple-50/60 border border-purple-100">
                <span className="text-slate-500 block">Waktu Selesai</span>
                <span className="font-bold text-purple-900 text-sm">2 Hari Kerja</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-xl">
              <FaWhatsapp />
            </div>
            <div>
              <div className="text-xs text-slate-500 font-medium">Nomor WhatsApp Mitra:</div>
              <div className="text-base font-bold text-slate-900 font-mono">0858-1394-0423</div>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-all shadow-sm"
            >
              <span>Chat WhatsApp Sekarang</span>
            </a>
          </div>
        </motion.section>

        {/* DAFTAR PAKET & HARGA LENGKAP */}
        <section className="space-y-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md inline-block mb-1">
              Daftar Layanan
            </span>
            <h3 className="text-2xl font-extrabold text-slate-900">
              Pilihan Paket Layanan Laundry
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Pakaian Anda ditangani secara higienis, bersih maksimal, dan tidak dicampur antar pelanggan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                className={`bg-white rounded-2xl p-6 border shadow-sm flex flex-col justify-between transition-all hover:shadow-md ${
                  item.highlight
                    ? "border-blue-500 ring-2 ring-blue-500/20"
                    : "border-slate-200"
                }`}
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-base text-slate-900">
                      {item.title}
                    </h4>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-100 text-blue-800">
                      {item.duration}
                    </span>
                  </div>
                  <div className="text-2xl font-black text-blue-900">
                    {item.price}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 mt-5">
                  <a
                    href={`https://wa.me/${laundryPartner.whatsapp}?text=${encodeURIComponent(
                      `Halo Kak M.Ilyas Laundry, saya mau tanya paket: ${item.title}.`,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2 rounded-xl bg-slate-900 hover:bg-blue-900 text-white text-xs font-semibold transition-all"
                  >
                    <FaWhatsapp className="text-sm" />
                    <span>Pesan Layanan Ini</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* KEUNGGULAN & STANDAR KEBERSIHAN */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
          <h3 className="text-lg font-bold text-slate-900">
            Kenapa Menggunakan Layanan Mitra Laundry Kosan?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-700">
            <div className="flex items-start gap-2.5">
              <FaCheckCircle className="text-emerald-500 mt-0.5 shrink-0 text-sm" />
              <span><strong>1 Mesin 1 Pelanggan:</strong> Pakaian tidak pernah dicampur dengan pakaian orang lain untuk menjaga kebersihan dan mencegah tertukar.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <FaCheckCircle className="text-emerald-500 mt-0.5 shrink-0 text-sm" />
              <span><strong>Deterjen Premium &amp; Pewangi Tahan Lama:</strong> Formula khusus yang menjaga serat kain seragam kerja tetap awet dan harum sepanjang hari.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <FaCheckCircle className="text-emerald-500 mt-0.5 shrink-0 text-sm" />
              <span><strong>Jarak Cuma 50 Meter:</strong> Cukup jalan kaki santai 1 menit keluar dari gerbang kosan, sangat praktis sepulang shift kerja.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <FaCheckCircle className="text-emerald-500 mt-0.5 shrink-0 text-sm" />
              <span><strong>Setrika Uap Rapi:</strong> Kerah kemeja, celana kerja, dan kaos disetrika licin dan bebas kerutan sebelum dikemas rapi.</span>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
