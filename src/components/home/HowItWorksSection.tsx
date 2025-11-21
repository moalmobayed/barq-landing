import React from "react";
import Image from "next/image";
import phoneMockup from "../../images/hero/phone-mockup.png";
import Link from "next/link";
import SectionBadge from "../common/SectionBadge";
import SectionTitle from "../common/SectionTitle";
import { FiUserPlus, FiShoppingBag, FiHome } from "react-icons/fi";
import { IconType } from "react-icons";

interface StepCard {
  id: string;
  number: string;
  icon: IconType;
  title: string;
  description: string;
}

const stepsData: StepCard[] = [
  {
    id: "1",
    number: "01",
    icon: FiUserPlus,
    title: "Download App & create a free account",
    description:
      "Simply download the app and create your profile. Unlock instant access to every restaurant, menu, and deal in your area.",
  },
  {
    id: "2",
    number: "02",
    icon: FiShoppingBag,
    title: "Place orders at your preferred eatery",
    description:
      "Customize your meal, and complete your payment. Our smart filtering makes it fast and fun to discover your next favorite.",
  },
  {
    id: "3",
    number: "03",
    icon: FiHome,
    title: "Get it delivered directly to your home, effortlessly",
    description:
      "Track your order from the kitchen to your door. Our drivers ensure lightning-fast delivery, so you can enjoy your perfect meal.",
  },
];

const HowItWorksSection: React.FC = () => {
  return (
    <section className="relative mx-auto max-w-7xl overflow-x-clip rounded-[40px] bg-[#010949] py-16 sm:py-20 md:py-24 lg:mb-20 lg:py-28 lg:pb-80">
      {/* Yellow blur (user provided) - behind content */}
      <div className="pointer-events-none absolute top-12 -right-36 z-0 size-48 rounded-full bg-[#ffcc00] blur-[90px] sm:size-56 md:size-64 lg:top-20 lg:-right-28"></div>
      <div className="pointer-events-none absolute left-28 z-0 hidden size-48 rounded-full bg-[#ffcc00] blur-[90px] sm:size-56 md:size-64 lg:bottom-20 lg:block"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <div className="mb-8 space-y-6 text-center sm:mb-12 md:mb-16">
          <SectionBadge text="EASY STEPS" />
          <SectionTitle className="text-white">How it Works</SectionTitle>
        </div>

        {/* Steps Cards */}
        <div className="grid gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-10">
          {stepsData.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.id}
                className="group relative rounded-2xl border border-white/40 bg-white/20 p-6 pb-8 text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/30 hover:shadow-2xl hover:shadow-orange-500/20 sm:p-8 md:p-10"
              >
                <div className="bg-brand-orange absolute top-0 left-0 rounded-tl-2xl rounded-br-3xl px-4 py-2 text-xl font-bold transition-all duration-300 group-hover:bg-orange-600">
                  {step.number}
                </div>

                <div className="mt-6 flex flex-col items-center text-center sm:mt-9 lg:mt-12">
                  <div className="group-hover:bg-brand-orange mb-6 flex size-16 items-center justify-center rounded-full bg-white">
                    <Icon
                      className="text-brand-orange size-8 group-hover:text-white"
                      strokeWidth={2}
                    />
                  </div>

                  <h4 className="mb-3 text-xl font-bold">{step.title}</h4>
                  <p className="leading-relaxed text-white/80">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA + Phone */}
        <div className="mt-10 flex flex-col items-center text-center md:justify-between">
          <p className="mb-4 text-base text-white">
            Get 50% off on your first order! Grab it now.
          </p>

          {/* App Store Buttons */}
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 lg:items-start lg:justify-start">
            <Link
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full sm:w-auto"
            >
              <div className="bg-brand-orange flex h-12 w-full items-center justify-center gap-2 rounded-xl px-4 transition-all hover:bg-orange-600 hover:shadow-lg sm:h-14 sm:gap-3 sm:px-6">
                <svg
                  className="h-6 w-6 text-white sm:h-8 sm:w-8"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] font-semibold text-white sm:text-xs">
                    GET IT ON
                  </div>
                  <div className="text-base font-semibold text-white sm:text-lg">
                    Google Play
                  </div>
                </div>
              </div>
            </Link>

            <Link
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full sm:w-auto"
            >
              <div className="bg-brand-orange flex h-12 w-full items-center justify-center gap-2 rounded-xl px-4 transition-all hover:bg-orange-600 hover:shadow-lg sm:h-14 sm:gap-3 sm:px-6">
                <svg
                  className="h-6 w-6 text-white sm:h-8 sm:w-8"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] font-semibold text-white sm:text-xs">
                    Download on the
                  </div>
                  <div className="text-base font-semibold text-white sm:text-lg">
                    App Store
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute start-1/2 top-6/12 bottom-0 z-9 mx-auto hidden w-[260px] -translate-x-1/2 sm:w-[320px] md:w-[420px] lg:block lg:w-[380px]">
        {/* Phone image (user will replace if needed) */}
        <Image
          src={phoneMockup}
          alt="App phone mockup"
          width={540}
          height={420}
          className="-rotate-90"
          priority
        />
      </div>
    </section>
  );
};

export default HowItWorksSection;
