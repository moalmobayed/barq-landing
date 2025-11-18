"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import AutoPlay from "embla-carousel-autoplay";
import res1 from "../../images/restaurants/res1.png";
import res2 from "../../images/restaurants/res2.png";
import res3 from "../../images/restaurants/res3.png";
import res4 from "../../images/restaurants/res4.png";
import res5 from "../../images/restaurants/res5.png";

const TrustedRestaurantsSection: React.FC = () => {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
    },
    [AutoPlay({ delay: 3000 })],
  );

  const restaurants = [
    {
      name: "Restaurant Food & Drink",
      logo: res1,
      alt: "Restaurant Food & Drink Logo",
    },
    {
      name: "Burgers",
      logo: res2,
      alt: "Burgers Restaurant Logo",
    },
    {
      name: "Restaurant Food & Drinks",
      logo: res3,
      alt: "Restaurant Food & Drinks Logo",
    },
    {
      name: "Restaurant Food & Drinks",
      logo: res4,
      alt: "Restaurant Food & Drinks Logo",
    },
    {
      name: "Foodies Fresh Food",
      logo: res5,
      alt: "Foodies Fresh Food Logo",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="font-lexend text-brand-blue mb-8 text-center text-3xl font-bold sm:mb-10 sm:text-3xl">
          Trusted by <span className="text-brand-blue">2.5k+ restaurant</span>
        </h2>

        {/* Restaurant Logos Slider */}
        <div className="mb-8 overflow-hidden sm:mb-12" ref={emblaRef}>
          <div className="flex gap-8 md:gap-12 lg:gap-16">
            {restaurants.map((restaurant, index) => (
              <div
                key={index}
                className="flex min-w-0 flex-[0_0_50%] items-center justify-center sm:flex-[0_0_33.33%] md:flex-[0_0_25%] lg:flex-[0_0_20%]"
              >
                <Image
                  src={restaurant.logo || "/images/logo/barq-logo.png"}
                  alt={restaurant.alt}
                  width={200}
                  height={80}
                  className="h-auto w-full max-w-[150px] object-contain transition-all duration-300 hover:scale-110 sm:max-w-40"
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <Link
          href="/register-restaurant"
          className="bg-brand-orange flex font-manrope justify-self-center rounded-lg px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-orange-600 hover:shadow-lg sm:px-8 sm:py-4"
        >
          Register Your Restaurant
        </Link>
      </div>
    </section>
  );
};

export default TrustedRestaurantsSection;
