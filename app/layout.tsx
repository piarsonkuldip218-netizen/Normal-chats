import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { clinic } from "@/lib/data";
import Providers from "./providers";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tamsdental.in"),
  // Canonical tells Google the one true URL for this site, so the old
  // GitHub Pages URL (…github.io/Tams-dental) is dropped from results
  // and only tamsdental.in is shown/indexed.
  alternates: {
    canonical: "https://tamsdental.in",
  },
  title: {
    default: `${clinic.name} | Best Dental Clinic in Rangapara, Sonitpur`,
    template: `%s | ${clinic.name}`,
  },
  description:
    "TAMS Dental Clinic by Dr. Tabarak Hussain (B.D.S) — modern, painless dental care in Rangapara, Sonitpur, Assam. RCT, implants, braces, whitening & more. Open all 7 days.",
  keywords: [
    "dental clinic Rangapara",
    "best dentist Sonitpur",
    "TAMS Dental",
    "Dr Tabarak Hussain",
    "root canal Rangapara",
    "dental implants Assam",
    "braces Sonitpur",
    "teeth whitening",
    "kids dentistry Rangapara",
  ],
  authors: [{ name: "TAMS Dental Clinic" }],
  creator: "TAMS Dental Clinic",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://tamsdental.in",
    title: `${clinic.name} | Best Dental Clinic in Rangapara, Sonitpur`,
    description:
      "Modern, painless dental care by Dr. Tabarak Hussain (B.D.S). RCT, implants, braces, whitening and more. Book your appointment today.",
    siteName: clinic.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${clinic.name} | Dental Clinic in Rangapara`,
    description:
      "Modern, painless dental care by Dr. Tabarak Hussain (B.D.S).",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: `${basePath}/favicon.svg`, type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#0d9488",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // JSON-LD structured data for local business SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: clinic.fullName,
    image: "https://tamsdental.in/og-image.jpg",
    description:
      "TAMS Dental Clinic by Dr. Tabarak Hussain (B.D.S) — modern, painless dental care in Rangapara, Sonitpur, Assam.",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${clinic.address.line1}, ${clinic.address.line2}`,
      addressLocality: clinic.address.line3,
      addressRegion: clinic.address.state,
      postalCode: clinic.address.pincode,
      addressCountry: "IN",
    },
    telephone: clinic.contact.phone,
    email: clinic.contact.email,
    priceRange: "₹₹",
    openingHoursSpecification: clinic.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.day,
      opens: "10:00",
      closes: "20:00",
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: clinic.rating.score,
      reviewCount: clinic.rating.reviews,
    },
  };

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
