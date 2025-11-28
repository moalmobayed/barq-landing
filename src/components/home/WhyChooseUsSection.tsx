import React from "react";
import Image from "next/image";
import SectionBadge from "../common/SectionBadge";
import SectionTitle from "../common/SectionTitle";
import { FiTruck, FiAward, FiMap } from "react-icons/fi";
import { IconType } from "react-icons";
import deliveryHero from "../../images/hero/delivery-hero.png";
import { useTranslations } from "next-intl";

interface Feature {
  id: string;
  icon: IconType;
  title: string;
  description: string;
}

const WhyChooseUsSection: React.FC = () => {
  const t = useTranslations("WhyChooseUsSection");

  const features: Feature[] = [
    {
      id: "1",
      icon: FiTruck,
      title: t("feature1Title"),
      description: t("feature1Desc"),
    },
    {
      id: "2",
      icon: FiAward,
      title: t("feature2Title"),
      description: t("feature2Desc"),
    },
    {
      id: "3",
      icon: FiMap,
      title: t("feature3Title"),
      description: t("feature3Desc"),
    },
  ];

  return (
    <section className="mx-auto max-w-7xl rounded-[40px] border border-[#E3D3CF] bg-white px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8 lg:py-28">
      <div className="mb-8 space-y-4 text-center sm:mb-12 md:mb-16">
        <SectionBadge text={t("badge")} />
        <SectionTitle className="text-[#010949]">{t("title")}</SectionTitle>
        <p className="mx-auto max-w-3xl text-base text-gray-600 sm:text-lg">
          {t("description")}
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Features List */}
        <div className="flex flex-col justify-center space-y-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="group flex gap-4 rounded-[20px] border border-[#E3D3CF] bg-[#FAF9F5] p-8 transition-all duration-300 hover:border-orange-300 hover:shadow-lg sm:gap-6 sm:p-8"
              >
                <div className="bg-brand-orange flex size-14 shrink-0 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110 sm:size-16">
                  <Icon
                    className="size-7 text-white sm:size-8"
                    strokeWidth={2}
                  />
                </div>
                <div>
                  <h3 className="text-brand-blue mb-2 text-lg font-bold">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Image */}
        <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-3xl lg:max-w-full">
          <Image
            src={deliveryHero}
            alt="Delivery person on yellow scooter with giant burger"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
