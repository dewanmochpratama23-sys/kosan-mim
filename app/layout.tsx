import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kosan Murah PT MIM Karawang - Hunian Nyaman & Strategis",
  description:
    "Cari kosan murah di dekat PT MIM Karawang? Kosan Murah PT MIM menyediakan kamar nyaman, fasilitas lengkap, AC, Wi-Fi cepat, dan token listrik mandiri.",
  keywords: [
    "Kosan Murah PT MIM",
    "Kosan Karawang",
    "Kosan Dekat PT MIM Klari",
    "Kosan Karyawan Karawang",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6241814970810068"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
