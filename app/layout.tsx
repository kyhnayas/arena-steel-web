import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s | Arena Steel",
    default: "Arena Steel — Çelik Konstrüksiyon ve Demir İşleme Uzmanı",
  },
  description:
    "Enerjisa'dan Avrasya Tüneli'ne kadar Türkiye'nin dev projelerinde çeliğe hayat veriyoruz. Sakarya'nın lider çelik konstrüksiyon ve demir işleme uzmanı.",
  keywords: [
    "çelik konstrüksiyon",
    "demir işleme",
    "endüstriyel imalat",
    "Sakarya",
    "Arena Steel",
  ],
  authors: [{ name: "Arena Steel" }],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Arena Steel",
    title: "Arena Steel — Çelik Konstrüksiyon ve Demir İşleme Uzmanı",
    description:
      "Türkiye'nin dev projelerinde çeliğe hayat veriyoruz.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
