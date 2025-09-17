import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { League_Spartan } from "next/font/google";
import AppLayout from "@/components/AppLayout";
import { Links } from "@/lib/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });
const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Henry Fame | Character Artist Portfolio",
  description:
    "Explore the portfolio of Olamide Henry Famojuro — Henry Fame — a passionate character artist skilled in modeling, sculpting, and texturing for games, films, and 3D prints.",
  applicationName: "Henry Fame Portfolio",
  keywords:
    "Character Artist, 3D Modeling, Sculpting, Texturing, Shading, ZBrush, 3D Art, Game Characters, Digital Sculpting, Henry Fame, Olamide Famojuro",
  creator: "Olamide Henry Famojuro",
  authors: [
    {
      name: "Olamide Henry Famojuro",
      url: Links.BASEURL,
    },
  ],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  openGraph: {
    title: "Henry Fame | Character Artist Portfolio",
    description:
      "Explore the portfolio of Olamide Henry Famojuro — Henry Fame — a passionate character artist skilled in modeling, sculpting, and texturing for games, films, and 3D prints.",
    url: Links.BASEURL,
    type: "website",
    siteName: "Henry Fame Portfolio",
    locale: "en_US",
    images: [
      {
        url: "https://olamidefamojuro.com/images/olamide-famojuro-hen.jpg",
        width: 1200,
        height: 630,
        alt: "Henry Fame Character Artist Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Henry Fame | Character Artist",
    description:
      "Explore captivating 3D characters crafted by Henry Fame, blending realism and creativity for games and film.",
    images: ["https://olamidefamojuro.com/images/olamide-famojuro-hen.jpg"],
  },
  metadataBase: new URL(Links.BASEURL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${leagueSpartan.className} antialiased`}>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
