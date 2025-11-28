"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import SectionBadge from "../common/SectionBadge";
import dishOne from "../../images/dishes/dish-1.png";
import dishTwo from "../../images/dishes/dish-2.png";
import dishThree from "../../images/dishes/dish-3.png";
import dishFour from "../../images/dishes/dish-4.png";

const DownloadAppSection: React.FC = () => {
  const leftFoods = [
    { src: dishOne, alt: "Pizza" },
    { src: dishTwo, alt: "Burger" },
    { src: dishThree, alt: "Wrap" },
  ];

  const rightFoods = [
    { src: dishFour, alt: "Pizza slice" },
    { src: dishOne, alt: "Fried food" },
    { src: dishTwo, alt: "Salad" },
  ];

  return (
    <section
      data-aos="fade-up"
      className="relative mx-auto max-w-7xl overflow-hidden rounded-4xl bg-black py-16 sm:py-20 md:py-24 lg:my-15 lg:py-28"
    >
      {/* Background Food Images - Left Side Slider (2 columns) */}
      <div className="absolute top-0 left-0 hidden h-full w-1/4 overflow-hidden lg:block">
        <div className="flex gap-4">
          {/* Left Column 1 */}
          <div className="animate-scroll-up flex w-1/2 -rotate-12 flex-col gap-4">
            {[...leftFoods, ...leftFoods, ...leftFoods].map((food, index) => (
              <div
                key={`left-col1-${index}`}
                className="h-40 w-full shrink-0 opacity-90"
              >
                <Image
                  src={food.src}
                  alt={food.alt}
                  width={160}
                  height={160}
                  className="h-full w-full rounded-2xl object-cover shadow-lg"
                />
              </div>
            ))}
          </div>
          {/* Left Column 2 */}
          <div className="animate-scroll-down flex w-1/2 -rotate-12 flex-col gap-4">
            {[...leftFoods, ...leftFoods, ...leftFoods].map((food, index) => (
              <div
                key={`left-col2-${index}`}
                className="h-40 w-full shrink-0 opacity-90"
              >
                <Image
                  src={food.src}
                  alt={food.alt}
                  width={160}
                  height={160}
                  className="h-full w-full rounded-2xl object-cover shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Food Images - Right Side Slider (2 columns) */}
      <div className="absolute top-0 right-0 hidden h-full w-1/4 overflow-hidden lg:block">
        <div className="flex gap-4">
          {/* Right Column 1 */}
          <div className="animate-scroll-down flex w-1/2 rotate-12 flex-col gap-4">
            {[...rightFoods, ...rightFoods, ...rightFoods].map(
              (food, index) => (
                <div
                  key={`right-col1-${index}`}
                  className="h-40 w-full shrink-0 opacity-90"
                >
                  <Image
                    src={food.src}
                    alt={food.alt}
                    width={160}
                    height={160}
                    className="h-full w-full rounded-2xl object-cover shadow-lg"
                  />
                </div>
              ),
            )}
          </div>
          {/* Right Column 2 */}
          <div className="animate-scroll-up flex w-1/2 rotate-12 flex-col gap-4">
            {[...rightFoods, ...rightFoods, ...rightFoods].map(
              (food, index) => (
                <div
                  key={`right-col2-${index}`}
                  className="h-40 w-full shrink-0 opacity-90"
                >
                  <Image
                    src={food.src}
                    alt={food.alt}
                    width={160}
                    height={160}
                    className="h-full w-full rounded-2xl object-cover shadow-lg"
                  />
                </div>
              ),
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <SectionBadge text="DOWNLOAD" />

        <h1 className="font-lexend my-4 text-3xl leading-tight font-semibold text-white sm:text-4xl md:text-5xl">
          Download app to enjoy 4500+ foods from 1200+ restaurants
        </h1>

        <p className="mb-10 max-w-[550px] justify-self-center text-base text-gray-300 sm:text-lg">
          Download our app to your phone from the stores and start enjoying a
          wealth of exclusive features and benefits immediately
        </p>

        {/* App Store Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <Link
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full sm:w-auto"
          >
            <div className="bg-brand-orange flex h-14 w-full items-center justify-center gap-3 rounded-xl px-8 transition-all hover:bg-orange-600 hover:shadow-lg sm:h-16 sm:px-10">
              <svg
                className="h-8 w-8 text-white sm:h-10 sm:w-10"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              <div className="text-left">
                <div className="text-xs font-semibold text-white">
                  GET IT ON
                </div>
                <div className="text-xl font-semibold text-white">
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
            <div className="bg-brand-orange flex h-14 w-full items-center justify-center gap-3 rounded-xl px-8 transition-all hover:bg-orange-600 hover:shadow-lg sm:h-16 sm:px-10">
              <svg
                className="h-8 w-8 text-white sm:h-10 sm:w-10"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
              </svg>
              <div className="text-left">
                <div className="text-xs font-semibold text-white">
                  Download on the
                </div>
                <div className="text-xl font-semibold text-white">
                  App Store
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Orange Blur */}
      <div className="bg-brand-orange pointer-events-none absolute -bottom-32 left-1/4 z-0 hidden size-48 rounded-full blur-[90px] sm:size-56 md:size-1/2 lg:-bottom-64 lg:block"></div>
    </section>
  );
};

export default DownloadAppSection;
