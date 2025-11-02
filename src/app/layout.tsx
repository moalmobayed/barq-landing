import { Rubik } from "next/font/google";
import "./globals.css";

// const outfit = Outfit({
//   subsets: ["latin"],
// });

// const cairo = Cairo({
//   subsets: ["latin"],
// });

const rubik = Rubik({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${rubik.className} dark:bg-gray-900`}>{children}</body>
    </html>
  );
}
