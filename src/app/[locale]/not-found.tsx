import GridShape from "@/components/common/GridShape";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  const t = useTranslations("NotFound");

  return (
    <div className="relative z-1 flex min-h-screen flex-col items-center justify-center overflow-hidden p-6">
      <GridShape />
      <div className="mx-auto w-full max-w-[242px] text-center sm:max-w-[472px]">
        <h1 className="text-title-md xl:text-title-2xl mb-8 font-bold text-gray-800 dark:text-white/90">
          {t("title")}
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
          {t("description")}
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3.5 text-sm font-medium text-gray-700 shadow-xs hover:bg-gray-50 hover:text-gray-800"
        >
          {t("backToHome")}
        </Link>
      </div>

      {/* <!-- Footer --> */}
      <p className="absolute bottom-6 text-center text-sm text-gray-500 dark:text-gray-400">
        {t("copyright", { year: new Date().getFullYear() })}
      </p>
    </div>
  );
}
