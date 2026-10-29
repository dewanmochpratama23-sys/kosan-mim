"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaWhatsapp,
  FaMapMarkerAlt,
  FaBolt,
  FaLock,
  FaUnlock,
  FaBookOpen,
  FaArrowRight,
  FaCheckCircle,
  FaGlobe,
} from "react-icons/fa";
import { motion } from "framer-motion";

import LaundrySection from "./Laundrysection";
import SiteFooter from "@/components/SiteFooter";
import { createClient } from "@/utils/supabase/client";

export default function Home() {
  const whatsappNumber = "6282318730894";
  const whatsappMessage = encodeURIComponent(
    "Halo Kak Dewan, saya ingin tanya-tanya / survei kamar Kosan Murah PT MIM.",
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const initialRooms = [
    {
      id: 1,
      type: "Tipe A1",
      price: "Rp 700.000",
      stock: "Penuh",
      features: [
        "Kasur",
        "Kipas Angin",
        "Lemari",
        "Wi-Fi",
        "Kamar Mandi Dalam",
        "Wastafel",
      ],
      badge: "Populer",
      highlight: false,
    },
    {
      id: 2,
      type: "Tipe A2",
      price: "Rp 1.000.000",
      stock: "Penuh",
      features: [
        "Kasur",
        "AC",
        "Lemari",
        "Wi-Fi",
        "Kamar Mandi Dalam",
        "Wastafel",
      ],
      badge: "Fasilitas Lengkap (AC)",
      highlight: true,
    },
    {
      id: 3,
      type: "Tipe B",
      price: "Rp 650.000",
      stock: "Sisa 1 Kamar",
      features: [
        "Kasur",
        "Kipas Angin",
        "Lemari",
        "Wi-Fi",
        "Kamar Mandi Dalam",
      ],
      badge: "Ekonomis",
      highlight: false,
    },
    {
      id: 4,
      type: "Tipe C",
      price: "Rp 500.000",
      stock: "Sisa 2 Kamar",
      features: ["Wi-Fi", "Kamar Mandi Dalam"],
      badge: "Super Hemat",
      highlight: false,
    },
    {
      id: 5,
      type: "Tipe D",
      price: "Rp 550.000",
      stock: "Sisa 2 Kamar",
      features: ["Kasur", "Lemari", "Wi-Fi", "Kamar Mandi Dalam"],
      badge: "Nyaman",
      highlight: false,
    },
  ];

  const [rooms, setRooms] = useState(initialRooms);
  const [isAdmin, setIsAdmin] = useState(false);
  const [password, setPassword] = useState("");
  const [isSyncing, setIsSyncing] = useState(false);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const supabase = createClient();
        const { data, error } = await supabase
          .from("rooms")
          .select("*")
          .order("id", { ascending: true });

        if (data && data.length > 0 && !error) {
          setRooms(data);
          localStorage.setItem("kosan_mim_rooms_v2", JSON.stringify(data));
          return;
        }
      } catch (err) {
        console.warn("Supabase fetch fallback:", err);
      }

      const savedRooms = localStorage.getItem("kosan_mim_rooms_v2");
      if (savedRooms) {
        try {
          setRooms(JSON.parse(savedRooms));
        } catch (e) {}
      }
    };

    fetchRooms();
  }, []);

  const handleUpdate = async (
    id: number,
    field: "price" | "stock",
    value: string,
  ) => {
    const updated = rooms.map((room) => {
      if (room.id === id) {
        return { ...room, [field]: value };
      }
      return room;
    });
    setRooms(updated);
    localStorage.setItem("kosan_mim_rooms_v2", JSON.stringify(updated));

    // Sinkronisasi instan ke Supabase Cloud Database
    try {
      setIsSyncing(true);
      const supabase = createClient();
      await supabase
        .from("rooms")
        .update({ [field]: value })
        .eq("id", id);
      setIsSyncing(false);
    } catch (err) {
      console.warn("Update Supabase:", err);
      setIsSyncing(false);
    }
  };

  const handleLoginAdmin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "223344") {
      setIsAdmin(true);
      alert(
        "Mode Owner / Admin Aktif! Sekarang Anda bisa mengedit data kamar.",
      );
    } else {
      alert("PIN Salah! Gunakan PIN: 223344");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans pb-20">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-3">
          {/* LOGO & BRANDING */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 cursor-pointer"
          >
            {/* Ikon Logo Vektor Atap Rumah Minimalis */}
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
              <h1 className="text-base md:text-lg font-extrabold text-blue-900 tracking-tight leading-none">
                Kosan Murah PT MIM
              </h1>
              <p className="text-[10px] text-slate-500 font-medium tracking-wide mt-0.5">
                KARAWANG
              </p>
            </div>
          </motion.div>

          {/* NAV LINKS (DESKTOP) */}
          <nav className="hidden md:flex items-center gap-5 text-xs font-semibold text-slate-600">
            <a href="#kamar" className="hover:text-blue-900 transition-colors">
              Pilihan Kamar
            </a>
            <Link href="/laundry" className="hover:text-blue-900 transition-colors">
              Laundry
            </Link>
            <Link href="/artikel" className="hover:text-blue-900 transition-colors">
              Panduan Kost
            </Link>
            <Link href="/tentang-kami" className="hover:text-blue-900 transition-colors">
              Tentang Kami
            </Link>
          </nav>

          {/* MENU KANAN (LOGIN & WHATSAPP) */}
          <div className="flex flex-wrap items-center justify-center gap-2 w-full sm:w-auto">
            {!isAdmin ? (
              <form
                onSubmit={handleLoginAdmin}
                className="flex gap-1.5 flex-1 sm:flex-initial"
              >
                <input
                  type="password"
                  placeholder="PIN HP"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="px-3 py-1.5 text-xs border border-slate-300 rounded-lg w-28 sm:w-32 focus:outline-blue-600 bg-slate-50"
                />
                <button
                  type="submit"
                  className="bg-slate-800 text-white px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-slate-900 flex items-center gap-1 shrink-0"
                >
                  <FaLock /> Login
                </button>
              </form>
            ) : (
              <button
                onClick={() => setIsAdmin(false)}
                className="bg-amber-600 hover:bg-amber-700 text-white px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1"
              >
                <FaUnlock /> Keluar Admin
              </button>
            )}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-3.5 py-1.5 rounded-lg font-medium text-xs sm:text-sm flex items-center gap-1.5 transition-all shadow-sm shrink-0"
            >
              <FaWhatsapp className="text-base" /> WhatsApp
            </a>
          </div>
        </div>
      </header>

      {isAdmin && (
        <div className="bg-amber-500 text-slate-900 py-2 px-4 text-center font-semibold text-xs shadow-inner">
          ⚠️ MODE OWNER AKTIF: Anda dapat langsung mengubah Harga atau
          Keterangan Ketersediaan Kamar di bawah ini!
        </div>
      )}

      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-16 md:py-20 px-4 text-center relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <span className="bg-blue-700/60 text-blue-200 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider border border-blue-500/30 inline-block mb-4">
            Strategis Tepat di Belakang PT MIM
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-4 md:mb-6 leading-tight">
            Hunian Nyaman, Aman, & Terjangkau untuk Karyawan Karawang
          </h2>
          <p className="text-slate-300 text-sm md:text-lg mb-8 max-w-2xl mx-auto">
            Lokasi sangat dekat dengan kawasan industri. Fasilitas lengkap mulai
            dari kipas angin hingga AC, kamar mandi dalam, dan Wi-Fi cepat.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a
              href="#kamar"
              className="bg-white text-blue-900 hover:bg-slate-100 font-semibold px-6 py-3 rounded-xl shadow transition-all text-sm"
            >
              Lihat Tipe Kamar & Harga
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl shadow transition-all flex items-center justify-center gap-2 text-sm"
            >
              <FaWhatsapp className="text-lg" /> Tanya Ketersediaan Kamar
            </a>
          </div>
        </motion.div>
      </section>

      {/* LOKASI & INFO PEMILIK */}
      <section className="max-w-6xl mx-auto px-4 -mt-8 md:-mt-10 relative z-20 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-5 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 border border-slate-100"
        >
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 text-blue-800 p-3 rounded-xl text-xl shrink-0">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h3 className="font-bold text-base md:text-lg text-slate-900 mb-1">
                Lokasi Strategis
              </h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                Kp. Situwaringin, Dusun Serang, RT 012 / RW 004, Desa
                Sumurkondang, Kecamatan Klari, Kabupaten Karawang (Tepat di
                belakang PT MIM).
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-emerald-100 text-emerald-800 p-3 rounded-xl text-xl shrink-0">
              <FaBolt />
            </div>
            <div>
              <h3 className="font-bold text-base md:text-lg text-slate-900 mb-1">
                Sistem Listrik Mandiri
              </h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                Setiap kamar dilengkapi dengan{" "}
                <strong>token / kWh meter masing-masing</strong>, sehingga
                penggunaan listrik lebih transparan dan adil.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* KATALOG TIPE KAMAR */}
      <section id="kamar" className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            Pilihan Tipe Kamar & Harga
          </h3>
          <p className="text-slate-600 max-w-xl mx-auto text-sm">
            Pilih tipe kamar yang sesuai dengan kebutuhan dan kenyamanan
            istirahat Anda setelah bekerja.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`bg-white rounded-2xl p-6 shadow-md border transition-all hover:shadow-xl flex flex-col justify-between ${
                room.highlight
                  ? "border-blue-500 ring-2 ring-blue-500/20"
                  : "border-slate-200"
              }`}
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold text-xl text-slate-900">
                    {room.type}
                  </span>
                  <span
                    className={`text-xs px-2.5 py-1 rounded-full font-semibold ${
                      room.highlight
                        ? "bg-blue-100 text-blue-700"
                        : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    {room.badge}
                  </span>
                </div>

                <div className="mb-6">
                  {isAdmin ? (
                    <div className="mb-2">
                      <label className="text-xs text-slate-500 font-semibold">
                        Edit Harga:
                      </label>
                      <input
                        type="text"
                        value={room.price}
                        onChange={(e) =>
                          handleUpdate(room.id, "price", e.target.value)
                        }
                        className="w-full px-3 py-1.5 border border-blue-400 rounded-lg font-bold text-blue-900 text-sm bg-blue-50/50"
                      />
                    </div>
                  ) : (
                    <div>
                      <span className="text-3xl font-extrabold text-blue-900">
                        {room.price}
                      </span>
                      <span className="text-slate-500 text-sm"> / bulan</span>
                    </div>
                  )}

                  {isAdmin ? (
                    <div className="mt-2">
                      <label className="text-xs text-slate-500 font-semibold">
                        Edit Status Ketersediaan:
                      </label>
                      <input
                        type="text"
                        value={room.stock}
                        onChange={(e) =>
                          handleUpdate(room.id, "stock", e.target.value)
                        }
                        className="w-full px-3 py-1.5 border border-amber-400 rounded-lg text-xs font-semibold text-amber-700 bg-amber-50"
                      />
                    </div>
                  ) : (
                    room.stock && (
                      <div className="text-xs text-amber-600 font-semibold mt-1.5 bg-amber-50 px-2.5 py-1 rounded-md inline-block border border-amber-200">
                        ● {room.stock}
                      </div>
                    )
                  )}
                </div>

                <div className="border-t border-slate-100 pt-4 mb-6">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                    Fasilitas Utama:
                  </p>
                  <ul className="space-y-2.5 text-sm text-slate-600">
                    {room.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-slate-900 hover:bg-blue-900 text-white text-center py-2.5 rounded-xl text-sm font-medium transition-all shadow-sm"
              >
                Pesan / Tanya Kamar
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      <LaundrySection />

      {/* TENTANG KOSAN MURAH PT MIM (SUBSTANTIAL CONTENT SECTION) */}
      <section className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-md inline-block">
              Tentang Hunian Kami
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
              Hunian Tenang, Bersih, &amp; Nyaman Khusus Pekerja Industri Karawang
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              <strong>Kosan Murah PT MIM</strong> berlokasi di Dusun Serang, Desa Sumurkondang, Kecamatan Klari, Kabupaten Karawang—posisi tepat di belakang pabrik PT Multi Indomandiri. Kami memahami bahwa setelah seharian lelah bekerja di kawasan industri, setiap pekerja membutuhkan kamar istirahat yang sejuk, tenang, dan memiliki privasi terjaga.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Dengan sistem <strong>listrik token mandiri per kamar</strong>, fasilitas kamar mandi dalam, akses Wi-Fi berkecepatan tinggi, dan lingkungan warga yang guyub serta aman, kami berkomitmen memberikan hunian sewa terbaik dengan harga paling terjangkau di kawasan Klari.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href="/tentang-kami"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-semibold text-xs transition-all shadow-sm"
              >
                <span>Baca Profil Lengkap &amp; Pengelola</span>
                <FaArrowRight className="text-[10px]" />
              </Link>
              <Link
                href="/kebijakan-privasi"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-all"
              >
                <span>Kebijakan Privasi</span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h4 className="font-bold text-slate-900 text-sm">Bebas Macet &amp; Hemat Bensin</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Jarak sangat dekat ke pabrik memungkinkan Anda cukup berjalan kaki atau naik motor 2–3 menit ke tempat kerja.
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h4 className="font-bold text-slate-900 text-sm">Transparansi Listrik Token</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Setiap kamar memiliki meteran PLN tersendiri, pemakaian adil sesuai kebutuhan masing-masing penghuni.
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h4 className="font-bold text-slate-900 text-sm">Koneksi Internet Lancar</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Fasilitas Wi-Fi gratis berkecepatan stabil untuk menunjang hiburan, komunikasi keluarga, dan belajar.
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-sm">
                04
              </div>
              <h4 className="font-bold text-slate-900 text-sm">Layanan Laundry Terpadu</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tersedia layanan cuci setrika kiloan bersih dan wangi langsung di lingkungan kosan tanpa repot.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ARTIKEL & PANDUAN KOST SECTION */}
      <section className="max-w-6xl mx-auto px-4 py-10 md:py-14">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md inline-block mb-2">
              Blog &amp; Edukasi
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Panduan &amp; Artikel Seputar Kost Karawang
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Informasi bermanfaat seputar tips memilih hunian, estimasi biaya hidup, dan fasilitas wilayah Klari.
            </p>
          </div>
          <Link
            href="/artikel"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 group"
          >
            <span>Lihat Semua Artikel</span>
            <FaArrowRight className="text-[10px] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <article className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div className="space-y-3">
              <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700">
                Tips Hunian
              </span>
              <h4 className="font-bold text-slate-900 text-sm sm:text-base group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                <Link href="/artikel/tips-memilih-kosan-karyawan-karawang">
                  7 Tips Memilih Kosan Nyaman dan Strategis untuk Karyawan di Kawasan Industri Karawang
                </Link>
              </h4>
              <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                Bekerja di kawasan industri menuntut fisik bugar. Jangan sampai salah memilih kosan yang membuat lelah di jalan dan boros bensin.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 mt-4 flex justify-between items-center text-xs">
              <span className="text-slate-400">23 Okt 2026</span>
              <Link
                href="/artikel/tips-memilih-kosan-karyawan-karawang"
                className="font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
              >
                <span>Baca</span>
                <FaArrowRight className="text-[10px]" />
              </Link>
            </div>
          </article>

          {/* Card 2 */}
          <article className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div className="space-y-3">
              <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700">
                Finansial &amp; Anggaran
              </span>
              <h4 className="font-bold text-slate-900 text-sm sm:text-base group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                <Link href="/artikel/panduan-biaya-hidup-karyawan-karawang">
                  Panduan Lengkap Estimasi Biaya Hidup &amp; Pengeluaran Kost Karyawan di Klari Karawang
                </Link>
              </h4>
              <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                Rincian pos pengeluaran bulanan: sewa kamar, kuota listrik token, makan harian, bensin, dan strategi menabung dari gaji UMK.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 mt-4 flex justify-between items-center text-xs">
              <span className="text-slate-400">22 Okt 2026</span>
              <Link
                href="/artikel/panduan-biaya-hidup-karyawan-karawang"
                className="font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
              >
                <span>Baca</span>
                <FaArrowRight className="text-[10px]" />
              </Link>
            </div>
          </article>

          {/* Card 3 */}
          <article className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div className="space-y-3">
              <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-purple-50 text-purple-700">
                Info Wilayah
              </span>
              <h4 className="font-bold text-slate-900 text-sm sm:text-base group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                <Link href="/artikel/fasilitas-dan-akses-sekitar-pt-mim">
                  Mengenal Akses Transportasi, Fasilitas Publik &amp; Kawasan Industri di Sekitar PT MIM Klari
                </Link>
              </h4>
              <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                Aksesibilitas Stasiun Klari, Tol Karawang Timur, rute angkot, minimarket 24 jam, dan klinik kesehatan di sekitar Sumurkondang.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 mt-4 flex justify-between items-center text-xs">
              <span className="text-slate-400">20 Okt 2026</span>
              <Link
                href="/artikel/fasilitas-dan-akses-sekitar-pt-mim"
                className="font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
              >
                <span>Baca</span>
                <FaArrowRight className="text-[10px]" />
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* FOUNDER & OWNER SPOTLIGHT SECTION */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-800 relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-56 h-56 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/dewan-foto.jpg"
                alt="Dewan Mochamad Pratama - Founder & Pengelola Kosan Murah PT MIM"
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-2 border-blue-400/40 shadow-lg shrink-0"
              />
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-[11px] font-semibold tracking-wide border border-blue-400/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Founder &amp; Pengelola Properti
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                  Dewan Mochamad Pratama
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
                  Menghadirkan hunian sewa kontrakan yang nyaman, aman, dan hemat biaya tepat di belakang pabrik PT Multi Indomandiri Klari. Dikelola langsung secara transparan dan kekeluargaan.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
              <a
                href="https://dewan-portofolio-delta.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-all shadow-md hover:shadow-blue-500/20 group"
              >
                <FaGlobe className="text-xs group-hover:rotate-12 transition-transform" />
                <span>Lihat Portofolio Dewan &rarr;</span>
              </a>
              <Link
                href="/tentang-kami"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs border border-white/15 transition-all"
              >
                <span>Profil &amp; Visi Hunian</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <SiteFooter />
    </div>
  );
}
