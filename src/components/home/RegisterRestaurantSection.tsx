import React from "react";
import Link from "next/link";
import SectionBadge from "../common/SectionBadge";
import restaurantBg from "../../images/restaurants/restaurant-bg.jpg";
import { useLocale, useTranslations } from "next-intl";

const RegisterRestaurantSection: React.FC = () => {
  const locale = useLocale();
  const t = useTranslations("RegisterRestaurantSection");
  return (
    <section
      data-aos="fade-up"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8 lg:py-16"
    >
      <div
        className="relative overflow-hidden rounded-[40px] bg-cover bg-center px-6 py-20 sm:px-8 sm:py-24 md:py-28 lg:py-32"
        style={{
          backgroundImage: `url(${restaurantBg.src})`,
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <SectionBadge text={t("badge")} className="mb-2" />

          <h2
            className={`${locale === "ar" ? "font-cairo" : "font-lexend"} mb-8 max-w-lg text-3xl leading-tight font-semibold text-white sm:text-4xl md:text-5xl`}
          >
            {t("title")}
          </h2>

          <Link
            href="/register-restaurant"
            className="bg-brand-orange inline-block rounded-xl px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-orange-600 hover:shadow-lg sm:px-10 sm:py-5 sm:text-lg"
          >
            {t("button")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RegisterRestaurantSection;
