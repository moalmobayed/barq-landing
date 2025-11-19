import { Lexend, Inter, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import type { Metadata } from "next";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: {
    default: "Barq - Fast and Reliable Food Delivery in Egypt",
    template: "%s | Barq",
  },
  description:
    "Experience swift and dependable food delivery services with Barq. Order from 3,855+ restaurants across Egypt. Join 985M+ successful deliveries with 1,879+ positive reviews.",
  keywords: [
    "food delivery",
    "egypt delivery",
    "barq",
    "restaurant delivery",
    "online food order",
    "fast delivery",
    "meal delivery",
  ],
  authors: [{ name: "Barq" }],
  creator: "Barq",
  publisher: "Barq",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://barqshipping.com",
    siteName: "Barq",
    title: "Barq - Fast and Reliable Food Delivery in Egypt",
    description:
      "Experience swift and dependable food delivery services with Barq. Order from 3,855+ restaurants across Egypt.",
    images: [
      {
        url: "/images/logo/barq-logo.png",
        width: 192,
        height: 192,
        alt: "Barq Food Delivery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Barq - Fast and Reliable Food Delivery in Egypt",
    description:
      "Experience swift and dependable food delivery services with Barq. Order from 3,855+ restaurants across Egypt.",
    images: ["/images/logo/barq-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
    apple: [{ url: "/favicon.ico" }],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#fb5a29" />
      </head>
      <body
        className={`${lexend.variable} ${inter.variable} ${manrope.variable} bg-[#FFCE000D] dark:bg-gray-900`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
