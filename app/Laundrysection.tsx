import React from "react";

export default function LaundrySection() {
  // Data mitra laundry tunggal dengan nomor WhatsApp baru
  const laundryPartner = {
    name: "M.Ilyas Laundry Rumahan",
    tagline:
      "Melayani cuci kiloan, laundry sepatu, hingga boneka & bantal kesayangan Anda.",
    price: "Rp 7.000 / kg",
    duration: "Estimasi selesai 2 hari",
    distance: "± 50 meter dari kos",
    whatsapp: "6285813940423", // Nomor WhatsApp terbaru
    badge: "Mitra Resmi",
  };

  return (
    <section className="py-12 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-10">
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
            Mitra & Kebutuhan Anak Kos
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2">
            Rekomendasi Laundry Terdekat
          </h2>
          <p className="text-gray-600 mt-1">
            Pilihan laundry terpercaya di sekitar area kos untuk memudahkan
            aktivitas harian Anda.
          </p>
        </div>

        {/* Single Card Laundry (Ditengah & Responsif) */}
        <div className="flex justify-center">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8 flex flex-col justify-between max-w-xl w-full hover:shadow-md transition-shadow duration-300">
            <div>
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-2xl font-bold text-gray-900">
                  {laundryPartner.name}
                </h3>
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded-full">
                  {laundryPartner.badge}
                </span>
              </div>

              <p className="text-gray-600 text-sm mb-6">
                {laundryPartner.tagline}
              </p>

              <div className="space-y-2 text-sm text-gray-700 mb-8 bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                <div className="flex items-center">
                  <span className="font-semibold w-28 text-gray-900">
                    💰 Harga:
                  </span>
                  <span className="text-blue-700 font-bold">
                    {laundryPartner.price}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold w-28 text-gray-900">
                    ⏱️ Pengerjaan:
                  </span>
                  <span>{laundryPartner.duration}</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold w-28 text-gray-900">
                    📍 Jarak:
                  </span>
                  <span>{laundryPartner.distance}</span>
                </div>
              </div>
            </div>

            {/* Tombol Hubungi WhatsApp Laundry */}
            <a
              href={`https://wa.me/${laundryPartner.whatsapp}?text=Halo%20Kak%20M.Ilyas%20Laundry,%20saya%20dapat%20info%20dari%20website%20Kosan%20ingin%20laundry.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-medium py-3 px-4 rounded-xl flex items-center justify-center space-x-2 transition-colors duration-200 shadow-sm"
            >
              {/* Ikon WhatsApp SVG */}
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>Hubungi M.Ilyas Laundry via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
