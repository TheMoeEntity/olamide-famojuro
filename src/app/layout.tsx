import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { League_Spartan } from "next/font/google";
import AppLayout from "@/components/AppLayout";
import { baseUrl, bio, Links } from "@/lib/constants";
import { sanitizeHtmlForMetaDescription } from "@/lib/helpers";

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
  title: "Olamide Famojuro | Character Artist Portfolio",
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
    {
      name: "Moses Chukwudi Nwigberi",
      url: `https://mosesnwigberi.com`,
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
    title: "Olamide Famojuro | Character Artist Portfolio",
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
const description = sanitizeHtmlForMetaDescription(bio);
const scriptData = {
  __html: JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": baseUrl,
        name: "Olamide Famojuro",
        alternateName: "Henry Fame",
        jobTitle: "Character Artist",
        description,
        url: baseUrl,
        image: baseUrl + "/olamide-famojuro-hen.jpg", // replace with actual profile/OG image
        sameAs: [
          Links.INSTAGRAM, // replace with real handles
          Links.ARTSTATION,
          Links.GUMROAD,
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Lagos",
          addressCountry: "Nigeria",
        },
      },
      {
        "@type": "WebSite",
        "@id": baseUrl + "/#website",
        url: baseUrl,
        name: "Olamide Famojuro | Character Artist Portfolio",
        description:
          "The official portfolio of Olamide Famojuro (Henry Fame) — a Lagos-based character artist showcasing his works, animations, and creative projects." +
          description,
        publisher: {
          "@id": baseUrl + "/#person",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: baseUrl + "/?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "CreativeWork",
        "@id": "https://olamidefamojuro.com/#portfolio",
        name: "Character Artworks and Animations by Olamide Famojuro",
        creator: {
          "@id": "https://olamidefamojuro.com/#person",
        },
        url: "https://olamidefamojuro.com",
        about:
          "A curated showcase of original 2D and 3D character designs, concept art, and animations created by Olamide Famojuro.",
        genre: [
          "Character Art",
          "3D Modeling",
          "Digital Illustration",
          "Animation",
        ],
      },
    ],
  }),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(scriptData).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className={`${leagueSpartan.className} antialiased`}>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
