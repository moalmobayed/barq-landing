"use client";

import React from "react";
import Image from "next/image";
import { FaStar, FaQuoteRight } from "react-icons/fa";
import Button from "../common/Button";
import SectionHeader from "../common/SectionHeader";
import { useTranslations } from "next-intl";

interface Testimonial {
  id: string;
  name: string;
  image: string;
  rating: number;
  title: string;
  review: string;
}

const TestimonialsSection: React.FC = () => {
  const t = useTranslations("TestimonialsSection");

  const testimonials: Testimonial[] = [
    {
      id: "1",
      name: "Sandra Luna",
      image: "/images/logo/barq-logo.png",
      rating: 5,
      title: t("reviews.0.title"),
      review: t("reviews.0.review"),
    },
    {
      id: "2",
      name: "Amelia Elisa",
      image: "/images/logo/barq-logo.png",
      rating: 5,
      title: t("reviews.1.title"),
      review: t("reviews.1.review"),
    },
    {
      id: "3",
      name: "Maria Sim",
      image: "/images/logo/barq-logo.png",
      rating: 5,
      title: t("reviews.2.title"),
      review: t("reviews.2.review"),
    },
  ];

  return (
    <section
      data-aos="fade-up"
      className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8 lg:py-28"
    >
      {/* Decorative Thumbs Up */}
      <Image
        src="/icons/like.png"
        alt="Thumbs Up Icon"
        width={32}
        height={32}
        className="absolute top-40 left-4 hidden size-28 lg:block"
      />

      {/* Decorative Heart */}
      <Image
        src="/icons/love.png"
        alt="Heart Icon"
        width={32}
        height={32}
        className="absolute right-4 bottom-20 hidden size-28 lg:block"
      />

      {/* Header */}
      <SectionHeader
        badge={t("badge")}
        title={t("title")}
        description={t("description")}
        align="center"
        className="mb-8 sm:mb-12 md:mb-16"
      />

      {/* Testimonials Grid */}
      <div className="grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-10">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="group relative flex flex-col items-center overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 text-center transition-all duration-300 hover:border-orange-200 hover:shadow-xl sm:p-8 md:p-10"
          >
            {/* Avatar */}
            <div className="mb-4 overflow-hidden rounded-full ring-4 ring-gray-100 transition-all duration-300 group-hover:ring-orange-100 sm:mb-6">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={120}
                height={120}
                className="size-20 object-cover sm:size-23 md:size-28"
              />
            </div>

            {/* Name */}
            <h3 className="mb-2 text-base font-bold sm:mb-3 sm:text-lg md:text-xl">
              {testimonial.name}
            </h3>

            {/* Stars */}
            <div className="mb-3 flex gap-1 sm:mb-4">
              {[...Array(testimonial.rating)].map((_, index) => (
                <FaStar
                  key={index}
                  className="text-brand-orange size-3.5 sm:size-4 md:size-5"
                />
              ))}
            </div>

            {/* Review Title */}
            <p className="mb-4 text-sm text-gray-600 sm:mb-6 sm:text-base md:text-lg">
              <span className="text-brand-orange">“</span>
              <span className="font-semibold text-gray-900">
                {testimonial.title}
              </span>
              <span className="text-brand-orange">”</span> {testimonial.review}
            </p>

            {/* Quote Icon */}
            <div className="absolute -bottom-6 left-1/2 flex size-14 -translate-x-1/2 items-start justify-center rounded-full bg-orange-100 pt-2 sm:-bottom-8 sm:size-16 sm:pt-3 md:size-18 md:pt-4">
              <FaQuoteRight className="text-brand-orange size-3.5 sm:size-4 md:size-5" />
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-10 flex justify-center">
        <Button>{t("readMoreButton")}</Button>
      </div>
    </section>
  );
};

export default TestimonialsSection;
