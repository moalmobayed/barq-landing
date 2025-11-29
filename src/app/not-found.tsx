"use client";

import GridShape from "@/components/common/GridShape";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./globals.css";

export default function NotFound() {
  return (
    <html lang="en">
      <body>
        <div className="relative z-1 flex min-h-screen flex-col items-center justify-center overflow-hidden p-6">
          <GridShape />
          <div className="mx-auto w-full max-w-[242px] text-center sm:max-w-[472px]">
            <h1 className="text-title-md xl:text-title-2xl mb-8 font-bold text-gray-800 dark:text-white/90">
              Error
            </h1>

            <Image
              src="/images/error/404.svg"
              alt="404"
              className="dark:hidden"
              width={472}
              height={152}
            />
            <Image
              src="/images/error/404-dark.svg"
              alt="404"
              className="hidden dark:block"
              width={472}
              height={152}
            />

            <p className="mt-10 mb-6 text-base text-gray-700 sm:text-lg dark:text-gray-400">
              We can&apos;t find the page you are looking for!
            </p>

            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3.5 text-sm font-medium text-gray-700 shadow-xs hover:bg-gray-50 hover:text-gray-800"
            >
              Back to Home
            </Link>
          </div>

          {/* <!-- Footer --> */}
          <p className="absolute bottom-6 text-center text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} - Mohamed Tarek - All rights
            reserved.
          </p>
        </div>
      </body>
    </html>
  );
}
