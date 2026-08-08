import type { Metadata, Viewport } from "next";
import MobileBottomBar from "../components/ui/MobileBottomBar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Boyut Eğitim — Kalabalıkta Kaybolma | Kazananların Dünyası",
  description:
    "Boyut Eğitim ile öğrenmede boyutun değişiyor. Yapay zeka destekli MADLEN sistemi, Deneme Kulübü ve kişiselleştirilmiş öğrenme planı ile hedefine ulaş. #ÇARE BOYUT",
  keywords:
    "boyut eğitim, dershane, TYT, AYT, YKS, MADLEN, yapay zeka, deneme sınavı, gaziantep, kurs",
  openGraph: {
    title: "Boyut Eğitim — Kalabalıkta Kaybolma",
    description:
      "Türkiye'nin en yenilikçi eğitim kurumu. MADLEN AI sistemi ile başarıya ulaş.",
    type: "website",
    locale: "tr_TR",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Boyut Eğitim Kurumları",
  description:
    "Yapay Zeka Destekli MADLEN Eğitim Sistemi ve 16+ yayınevi Deneme Kulübü ile YKS hazırlık kurumu.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "İsmet Paşa Tramvay Durağı Yanı",
    addressLocality: "Gaziantep",
    addressCountry: "TR",
  },
  telephone: "+905060272741",
  url: "https://boyutegitim.com",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <MobileBottomBar />
      </body>
    </html>
  );
}
