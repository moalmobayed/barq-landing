import React from "react";
import Link from "next/link";
import Image from "next/image";
import heroBurger from "../../images/hero/hero-burger.png";
import heroPhone from "../../images/hero/hero-phone.png";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen content-center bg-linear-to-br from-gray-50 to-white pb-20 md:py-28 lg:h-screen lg:py-0">
      <div className="mx-auto mt-20 grid max-w-7xl items-center gap-8 px-4 md:mt-24 md:px-6 lg:grid-cols-2 lg:gap-12">
        {/* Left Content */}
        <div className="space-y-4 text-center sm:space-y-6 lg:space-y-8 lg:text-left">
          <h1 className="font-lexend text-brand-blue text-3xl leading-tight font-bold sm:text-4xl md:text-5xl lg:text-6xl">
            Fast & best <span className="text-brand-orange">food delivery</span>{" "}
            services
            <br />
            in your town
          </h1>

          <p className="font-inter text-sm text-gray-600 sm:text-base md:text-lg">
            We commit to delivering your food to you within 30 minutes. if we
            would fail, we will give the food free.
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
                  <div className="text-[10px] text-white/90 sm:text-xs">
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
                  <div className="text-[10px] text-white/90 sm:text-xs">
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

        {/* Right Content - Main Phone */}
        <div className="relative flex w-fit justify-self-center lg:justify-self-end">
          {/* 30 min delivery - Top Left */}
          <div className="absolute top-32 -left-16 z-20 hidden max-w-29 justify-items-center rounded-4xl border-2 border-pink-100 bg-white p-5 shadow-lg lg:block">
            <div className="mb-1 flex size-10 items-center justify-center rounded-full bg-[#010949]">
              <svg
                className="size-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <p className="font-lexend text-center font-semibold">
              30 min delivery
            </p>
          </div>

          {/* Track live map - Top Right */}
          <div className="absolute top-20 right-32 z-20 hidden max-w-29 justify-items-center rounded-4xl border-2 border-pink-100 bg-white p-5 shadow-lg lg:block xl:-right-18">
            <svg
              className="mb-1 size-10 text-[#010949]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
              />
            </svg>
            <p className="font-lexend text-center font-semibold">
              Track live map
            </p>
          </div>

          {/* Quality badge - Bottom Right */}
          <div className="absolute right-32 bottom-16 z-20 hidden max-w-29 justify-items-center rounded-4xl border-2 border-pink-100 bg-white p-5 shadow-lg lg:block xl:-right-12">
            <svg
              className="mb-1 size-10 text-[#010949]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
            <p className="font-lexend text-center font-semibold">
              Track live map
            </p>
          </div>

          {/* Location pin with dotted line - Bottom Left */}
          <Image
            src="/icons/location.png"
            alt="Location"
            width={32}
            height={32}
            quality={100}
            className="absolute bottom-0 -left-12 z-20 hidden w-24 lg:block"
          />

          <Image
            src={heroPhone}
            alt="Barq App Interface"
            width={600}
            height={1200}
            className="relative z-10 h-auto w-full max-w-[300px]"
            priority
          />
        </div>
      </div>

      {/* Burger Image - Full Height of Section */}
      <Image
        src={heroBurger}
        alt="Delicious Burger"
        fill
        className="pointer-events-none absolute top-0 right-0 bottom-0 hidden h-full w-[400px] object-contain object-right lg:block xl:w-[600px] 2xl:w-[800px]"
        priority
      />
    </section>
  );
};

export default HeroSection;
