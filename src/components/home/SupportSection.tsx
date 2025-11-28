import React from "react";
import Link from "next/link";
import { FiMail } from "react-icons/fi";
import { FaHeadset } from "react-icons/fa";

const SupportSection: React.FC = () => {
  return (
    <section
      data-aos="fade-up"
      className="relative z-10 mx-auto -mb-28 max-w-7xl px-4 pt-16 sm:px-6 sm:pt-20 md:pt-24 lg:px-8 lg:pt-28"
    >
      <div className="bg-brand-orange relative overflow-hidden rounded-[40px] px-6 py-12 sm:px-8 sm:py-16 md:px-12 md:py-20 lg:px-16 lg:py-24">
        {/* Decorative Stars */}
        <div className="absolute top-10 right-20 hidden text-white opacity-50 lg:block">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="animate-pulse"
          >
            <path d="M12 2L9.5 9.5L2 12L9.5 14.5L12 22L14.5 14.5L22 12L14.5 9.5L12 2Z" />
          </svg>
        </div>
        <div className="absolute bottom-20 left-10 hidden text-white opacity-50 lg:block">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="animate-pulse"
            style={{ animationDelay: "1s" }}
          >
            <path d="M12 2L9.5 9.5L2 12L9.5 14.5L12 22L14.5 14.5L22 12L14.5 9.5L12 2Z" />
          </svg>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-between gap-8 lg:flex-row">
          {/* Left Content */}
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:gap-8 sm:text-left lg:items-start">
            {/* Icon */}
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-white shadow-lg sm:h-24 sm:w-24">
              <FaHeadset className="text-brand-orange h-10 w-10 sm:h-12 sm:w-12" />
            </div>

            {/* Text */}
            <div className="max-w-xl">
              <h2 className="mb-2 text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
                Need support?
              </h2>
              <p className="text-base text-white/90 sm:text-lg">
                Lorem ipsum is simply dummy text of the printing.
              </p>
            </div>
          </div>

          {/* Right Button */}
          <Link
            href="mailto:support@barq.com"
            className="inline-block shrink-0"
          >
            <button className="flex items-center gap-3 rounded-xl bg-white px-8 py-4 text-base font-semibold transition-all duration-300 hover:shadow-xl sm:px-10 sm:py-5 sm:text-lg">
              <FiMail className="text-brand-orange h-6 w-6" />
              <span className="text-gray-900">Email us</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
