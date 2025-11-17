import { Lexend, Inter, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body
        className={`${lexend.variable} ${inter.variable} ${manrope.variable} bg-white dark:bg-gray-900`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
