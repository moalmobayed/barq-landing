import React from "react";
import Image from "next/image";
import SectionBadge from "../common/SectionBadge";
import SectionTitle from "../common/SectionTitle";
import { FiTruck, FiAward, FiMap } from "react-icons/fi";
import { IconType } from "react-icons";
import deliveryHero from "../../images/hero/delivery-hero.png";

interface Feature {
  id: string;
  icon: IconType;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    id: "1",
    icon: FiTruck,
    title: "Delivery in 30 min",
    description:
      "Get your favorite meals delivered fresh and fast to your door in just 30 minutes! Enjoy the convenience!",
  },
  {
    id: "2",
    icon: FiAward,
    title: "Quality Food",
    description:
      "Enjoy premium meals from top local restaurants, expertly crafted to satisfy your taste and elevate your dining experience!",
  },
  {
    id: "3",
    icon: FiMap,
    title: "Track Live Map",
    description:
      "Easily track your order in real-time with our live map feature, ultimate convenience and keeping you updated every step of the way!",
  },
];

const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="mx-auto max-w-7xl rounded-[40px] border border-[#E3D3CF] bg-white px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8 lg:py-28">
      <div className="mb-8 space-y-4 text-center sm:mb-12 md:mb-16">
        <SectionBadge text="WHY USE BARQ" />
        <SectionTitle className="text-[#010949]">Why choose us</SectionTitle>
        <p className="mx-auto max-w-3xl text-base text-gray-600 sm:text-lg">
          We are the only platform that truly unites speed, selection, and
          reliability for both customers and businesses.
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
                className="group flex gap-4 rounded-[20px] border border-[#E3D3CF] bg-[#FAF9F5] p-8 transition-all duration-300 hover:border-orange-200 hover:shadow-lg sm:gap-6 sm:p-8"
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
