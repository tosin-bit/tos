import type { Metadata } from "next";
import type React from "react";
import { Bodoni_Moda, Archivo } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import PageTransition from "@/components/PageTransition";

const display = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const body = Archivo({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500"],
});

const SITE_URL = "https://nennehcheyassin.com";
const FULL_NAME = "Nenneh Cheyassin Secka-Kebe";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: FULL_NAME,
  description:
    "Nenneh Cheyassin Secka-Kebe — Gambian nurse, businesswoman and philanthropist. Scholarships at the University of The Gambia and a borehole for the women farmers of Farato.",
  openGraph: {
    title: FULL_NAME,
    description:
      "Nenneh Cheyassin Secka-Kebe — Gambian nurse, businesswoman and philanthropist.",
    url: SITE_URL,
    siteName: FULL_NAME,
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: FULL_NAME,
    description:
      "Nenneh Cheyassin Secka-Kebe — Gambian nurse, businesswoman and philanthropist.",
    images: ["/opengraph-image"],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: FULL_NAME,
  url: SITE_URL,
  jobTitle: "Philanthropist and healthcare entrepreneur",
  nationality: "Gambian",
  alumniOf: "Nursing and graduate business studies",
  knowsAbout: ["Philanthropy", "Residential care", "Education", "Women's financial independence"],
  sameAs: ["https://www.instagram.com/dormi_cheyassin/"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="has-custom-cursor">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <SmoothScroll>
          <CustomCursor />
          <PageTransition />
          <Nav />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
