"use client"; // Menandakan komponen interaktif di Next.js
import React, { useState, useEffect } from "react";
import {
  FaWhatsapp,
  FaMapMarkerAlt,
  FaBolt,
  FaEdit,
  FaSave,
  FaLock,
  FaUnlock,
} from "react-icons/fa";

export default function Home() {
  const whatsappNumber = "6283137538544";
  const whatsappMessage = encodeURIComponent(
    "Halo Kak Dewan, saya ingin tanya-tanya / survei kamar Kosan Murah PT MIM.",
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  // Data awal tipe kamar
  const initialRooms = [
    {
      id: 1,
      type: "Tipe A1",
      price: "Rp 700.000",
      stock: "Tersedia",
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
      stock: "Tersedia",
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
      stock: "Sisa 2 Kamar",
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

  // State untuk menyimpan data kamar & mode admin
  const [rooms, setRooms] = useState(initialRooms);
  const [isAdmin, setIsAdmin] = useState(false);
  const [password, setPassword] = useState("");

  // Simpan/Muat data dari LocalStorage agar tidak reset saat direload
  useEffect(() => {
    const savedRooms = localStorage.getItem("kosan_mim_rooms");
    if (savedRooms) {
      setRooms(JSON.parse(savedRooms));
    }
  }, []);

  const handleUpdate = (
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
    localStorage.setItem("kosan_mim_rooms", JSON.stringify(updated));
  };

  const handleLoginAdmin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "223344") {
      // PIN Admin sederhana (bisa diubah)
      setIsAdmin(true);
      alert(
        "Mode Owner / Admin Aktif! Sekarang Anda bisa mengedit data kamar.",
      );
    } else {
      alert("PIN Salah! Gunakan PIN: HP");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans pb-20">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-900 tracking-tight">
            Kosan Murah PT MIM
          </h1>
          <div className="flex items-center gap-3">
            {!isAdmin ? (
              <form onSubmit={handleLoginAdmin} className="flex gap-2">
                <input
                  type="password"
                  placeholder="PIN HP"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="px-3 py-1.5 text-xs border border-slate-300 rounded-lg w-28 focus:outline-blue-600"
                />
                <button
                  type="submit"
                  className="bg-slate-800 text-white px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-slate-900 flex items-center gap-1"
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
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-full font-medium text-sm flex items-center gap-2 transition-all shadow-md"
            >
              <FaWhatsapp className="text-lg" /> WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* ADMIN NOTIFICATION BANNER */}
      {isAdmin && (
        <div className="bg-amber-500 text-slate-900 py-2 px-4 text-center font-semibold text-xs shadow-inner">
          ⚠️ MODE OWNER AKTIF: Anda dapat langsung mengubah Harga atau
          Keterangan Ketersediaan Kamar di bawah ini!
        </div>
      )}

      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20 px-4 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="bg-blue-700/60 text-blue-200 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider border border-blue-500/30 inline-block mb-4">
            Strategis Tepat di Belakang PT MIM
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
            Hunian Nyaman, Aman, & Terjangkau untuk Karyawan Karawang
          </h2>
          <p className="text-slate-300 text-base md:text-lg mb-8 max-w-2xl mx-auto">
            Lokasi sangat dekat dengan kawasan industri. Fasilitas lengkap mulai
            dari kipas angin hingga AC, kamar mandi dalam, dan Wi-Fi cepat.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#kamar"
              className="bg-white text-blue-900 hover:bg-slate-100 font-semibold px-6 py-3 rounded-xl shadow transition-all"
            >
              Lihat Tipe Kamar & Harga
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl shadow transition-all flex items-center justify-center gap-2"
            >
              <FaWhatsapp className="text-xl" /> Tanya Ketersediaan Kamar
            </a>
          </div>
        </div>
      </section>

      {/* LOKASI & INFO PEMILIK */}
      <section className="max-w-6xl mx-auto px-4 -mt-10 relative z-20 mb-16">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 border border-slate-100">
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 text-blue-800 p-3 rounded-xl text-xl">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h3 className="font-bold text-lg text-slate-900 mb-1">
                Lokasi Strategis
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Kp. Situwaringin, Dusun Serang, RT 012 / RW 004, Desa
                Sumurkondang, Kecamatan Klari, Kabupaten Karawang (Tepat di
                belakang PT MIM).
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-emerald-100 text-emerald-800 p-3 rounded-xl text-xl">
              <FaBolt />
            </div>
            <div>
              <h3 className="font-bold text-lg text-slate-900 mb-1">
                Sistem Listrik Mandiri
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Setiap kamar dilengkapi dengan{" "}
                <strong>token / kWh meter masing-masing</strong>, sehingga
                penggunaan listrik lebih transparan dan adil.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* KATALOG TIPE KAMAR */}
      <section id="kamar" className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            Pilihan Tipe Kamar & Harga
          </h3>
          <p className="text-slate-600 max-w-xl mx-auto text-sm">
            Pilih tipe kamar yang sesuai dengan kebutuhan dan kenyamanan
            istirahat Anda setelah bekerja.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rooms.map((room) => (
            <div
              key={room.id}
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
                        className="w-full px-3 py-1 border border-blue-400 rounded-lg font-bold text-blue-900 text-sm"
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

                  {/* Ketersediaan Kamar / Stok */}
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
                        className="w-full px-3 py-1 border border-amber-400 rounded-lg text-xs font-semibold text-amber-700 bg-amber-50"
                      />
                    </div>
                  ) : (
                    room.stock && (
                      <div className="text-xs text-amber-600 font-semibold mt-1 bg-amber-50 px-2.5 py-1 rounded-md inline-block border border-amber-200">
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
                className="w-full bg-slate-900 hover:bg-blue-900 text-white text-center py-2.5 rounded-xl text-sm font-medium transition-all"
              >
                Pesan / Tanya Kamar
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-4 mt-20 border-t border-slate-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div>
            <h4 className="text-white font-bold text-lg mb-1">
              Kosan Murah PT MIM
            </h4>
            <p className="text-sm">Pemilik: Dewan Mochamad Pratama</p>
            <p className="text-sm text-slate-500 mt-1">
              No. HP / WhatsApp: 083137538544
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-xl font-medium text-sm flex items-center gap-2 transition-all shadow-md"
            >
              <FaWhatsapp className="text-lg" /> Hubungi Pemilik via WhatsApp
            </a>
            <p className="text-xs text-slate-500">
              2026 Kosan Murah PT MIM. All rights reserved.S reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
