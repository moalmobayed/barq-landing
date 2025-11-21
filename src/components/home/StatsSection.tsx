import Image from "next/image";
import React from "react";

const StatsSection: React.FC = () => {
  const stats = [
    {
      number: "1,879+",
      label: "Positive Reviews",
      icon: "/icons/positive-reviews.png",
    },
    {
      number: "3,855+",
      label: "Restaurant Listings",
      icon: "/icons/restaurant-listings.png",
    },
    {
      number: "985M+",
      label: "Successful deliveries",
      icon: "/icons/successful-deliveries.png",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#010949] py-12 sm:py-16 md:py-20 lg:py-24">
      {/* Gradient Background */}
      <div className="absolute -top-16 size-48 rounded-full bg-[#fb5a29] blur-[90px] sm:size-56 md:size-64"></div>
      <div className="absolute -right-12 -bottom-20 size-48 rounded-full bg-[#fb5a29] blur-[90px] sm:size-56 md:size-64"></div>
      <div className="absolute -bottom-32 left-1/4 size-48 rounded-full bg-[#ffcc00] blur-[90px] sm:size-56 md:size-64"></div>
      <div className="absolute -top-40 right-1/4 size-48 rounded-full bg-[#ffcc00] blur-[90px] sm:size-56 md:size-64"></div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border border-white/40 bg-white/20 p-6 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white/30 sm:rounded-2xl sm:p-8"
            >
              {/* Icon */}
              <Image
                src={stat.icon}
                alt={stat.label}
                width={64}
                height={57}
                className="justify-self-end object-contain"
              />

              {/* Number */}
              <div className="font-lexend mb-2 text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
                {stat.number}
              </div>

              {/* Label */}
              <div className="font-inter text-sm text-white/80 sm:text-base md:text-lg">
                {stat.label}
              </div>

              {/* Decorative gradient */}
              <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-linear-to-br from-orange-500/20 to-transparent blur-2xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
