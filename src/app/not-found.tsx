import GridShape from "@/components/common/GridShape";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "صفحة غير موجودة | برق",
  description: "الصفحة التي تبحث عنها غير موجودة.",
};

export default function NotFound() {
  return (
    <div className="relative z-1 flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gray-900 p-6">
      <GridShape />
      <div className="mx-auto w-full max-w-[242px] text-center sm:max-w-[472px]">
        <h1 className="text-title-md xl:text-title-2xl mb-8 font-bold text-white/90">
          خطأ
        </h1>

        <Image
          src="/images/error/404-dark.svg"
          alt="404"
          width={472}
          height={152}
        />

        <p className="mt-10 mb-6 text-base text-gray-400 sm:text-lg">
          لا يمكننا العثور على الصفحة التي تبحث عنها!
        </p>

        <Link
          href="/"
          className="shadow-theme-xs inline-flex items-center justify-center rounded-lg border border-gray-700 bg-gray-800 px-5 py-3.5 text-sm font-medium text-gray-400 hover:bg-white/3 hover:text-gray-200"
        >
          الرجوع إلى الصفحة الرئيسية
        </Link>
      </div>

      {/* <!-- Footer --> */}
      <p className="absolute bottom-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} - Mohamed Tarek - جميع الحقوق محفوظة.
      </p>
    </div>
  );
}
