import React from "react";
import Image from "next/image";
import { FiCheck } from "react-icons/fi";
import SectionHeader from "../common/SectionHeader";
import SectionBadge from "../common/SectionBadge";
import SectionTitle from "../common/SectionTitle";
import SectionDescription from "../common/SectionDescription";
import Button from "../common/Button";
import restaurantManagement from "../../images/features/restaurant-management.png";
import customerOrdering from "../../images/features/customer-ordering.png";
import restaurantManagementOffer from "../../images/features/restaurant-management-offer.png";
import { FaRegClock } from "react-icons/fa";
import { CircleCheckBig } from "../animate-ui/icons/circle-check-big";
import { AnimateIcon } from "../animate-ui/icons/icon";
import { CheckCheck } from "../animate-ui/icons/check-check";
import { useLocale, useTranslations } from "next-intl";

const FeaturesSection: React.FC = () => {
  const locale = useLocale();
  const t = useTranslations("FeaturesSection");

  return (
    <section className="mx-auto max-w-7xl overflow-x-hidden bg-white px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-24">
      {/* Section Header */}
      <SectionHeader
        badge={t("headerBadge")}
        title={t("headerTitle")}
        className="mb-8 sm:mb-12 md:mb-16"
      />

      {/* Restaurant Management Feature */}
      <div className="mb-16 grid items-center gap-8 sm:mb-20 md:mb-24 lg:grid-cols-2 lg:gap-12">
        {/* Image with Overlays */}
        <div className="relative mx-auto w-full max-w-md">
          {/* Main Image */}
          <Image
            src={restaurantManagement}
            alt="Restaurant Management Dashboard"
            width={500}
            height={400}
            className="h-auto w-full rounded-2xl"
            priority
          />

          {/* Overlay 1 - Text Card */}
          <div className="absolute top-8 right-2 flex flex-col items-center gap-1 rounded-2xl border border-[#FB5B2933] bg-white px-3 py-2 shadow-lg sm:top-12 sm:right-4 sm:gap-2 sm:rounded-3xl sm:px-4 sm:py-3 md:top-16 md:right-6 md:px-5 lg:-right-12">
            <div className="bg-brand-blue flex size-8 items-center justify-center rounded-full sm:size-10 md:size-12">
              <AnimateIcon
                animate
                animation="path-loop"
                loop
                loopDelay={1000}
                className="text-base text-white sm:text-lg md:text-xl"
              >
                <CircleCheckBig animation="path-loop" />
              </AnimateIcon>
            </div>
            <p
              className={`${locale === "ar" ? "font-cairo" : "font-lexend"} text-center text-xs font-semibold sm:text-sm md:text-base`}
            >
              {t.rich("newOrder", {
                br: () => <br />,
              })}
            </p>
          </div>

          {/* Overlay 2 - Image Card */}
          <div className="absolute right-0 -bottom-4 w-3/5 sm:bottom-1/4 sm:w-2/3 md:w-3/5 lg:-right-20 lg:bottom-1/5">
            <Image
              src={restaurantManagementOffer}
              alt="Special Offer Dashboard"
              width={200}
              height={133}
              quality={80}
              className="h-auto w-full"
            />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <SectionBadge text={t("restaurantBadge")} />

          <SectionTitle as="h3" className="text-2xl! sm:text-3xl! md:text-4xl!">
            {t("restaurantTitle")}
          </SectionTitle>

          <SectionDescription>{t("restaurantDescription")}</SectionDescription>

          <div className="space-y-4">
            {/* Feature 1 */}
            <div className="flex gap-3">
              <div className="bg-brand-orange flex size-6 shrink-0 items-center justify-center rounded-full">
                <FiCheck
                  className="text-sm font-bold text-white"
                  strokeWidth={4}
                />
              </div>
              <div>
                <h4 className="text-base font-bold sm:text-lg">
                  {t("restaurantFeature1Title")}
                </h4>
                <p>{t("restaurantFeature1Desc")}</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-3">
              <div className="bg-brand-orange flex size-6 shrink-0 items-center justify-center rounded-full">
                <FiCheck
                  className="text-sm font-bold text-white"
                  strokeWidth={4}
                />
              </div>
              <div>
                <h4 className="text-base font-bold sm:text-lg">
                  {t("restaurantFeature2Title")}
                </h4>
                <p>{t("restaurantFeature2Desc")}</p>
              </div>
            </div>
          </div>

          <Button href="/register-restaurant">{t("registerButton")}</Button>
        </div>
      </div>

      {/* Customer Ordering Feature */}
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Content */}
        <div className="space-y-4 lg:order-1">
          <SectionBadge text={t("customerBadge")} />

          <SectionTitle as="h3" className="text-2xl! sm:text-3xl! md:text-4xl!">
            {t("customerTitle")}
          </SectionTitle>

          <SectionDescription>{t("customerDescription")}</SectionDescription>

          <div className="space-y-4">
            {/* Feature 1 */}
            <div className="flex gap-3">
              <div className="bg-brand-orange flex size-6 shrink-0 items-center justify-center rounded-full">
                <FiCheck
                  className="text-sm font-bold text-white"
                  strokeWidth={4}
                />
              </div>
              <div>
                <h4 className="text-base font-bold sm:text-lg">
                  {t("customerFeature1Title")}
                </h4>
                <p>{t("customerFeature1Desc")}</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-3">
              <div className="bg-brand-orange flex size-6 shrink-0 items-center justify-center rounded-full">
                <FiCheck
                  className="text-sm font-bold text-white"
                  strokeWidth={4}
                />
              </div>
              <div>
                <h4 className="text-base font-bold sm:text-lg">
                  {t("customerFeature2Title")}
                </h4>
                <p>{t("customerFeature2Desc")}</p>
              </div>
            </div>
          </div>

          <Button href="#">{t("downloadButton")}</Button>
        </div>

        {/* Image with Overlays */}
        <div className="relative mx-auto w-full max-w-md lg:order-2">
          {/* Main Image */}
          <Image
            src={customerOrdering}
            alt="Customer Ordering Experience"
            width={500}
            height={400}
            className="h-auto w-full rounded-2xl"
          />

          {/* Overlay 1 - Order Confirmation Card */}
          <div
            className={`${locale === "ar" ? "font-cairo" : "font-lexend"} absolute end-2 top-16 flex items-center gap-2 rounded-xl border border-[#FB5B2933] bg-white px-3 py-2 shadow-lg sm:end-4 sm:top-20 sm:gap-3 sm:rounded-2xl sm:px-4 sm:py-3 md:-end-4 md:top-28 md:px-6 md:py-4 lg:-end-24`}
          >
            <div className="bg-brand-blue flex size-8 shrink-0 items-center justify-center rounded-full sm:size-10 md:size-12">
              <AnimateIcon
                animate
                loop
                loopDelay={700}
                className="text-base text-white sm:text-lg md:text-xl"
              >
                <CheckCheck />
              </AnimateIcon>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-800 sm:text-sm md:text-base">
                {t("orderConfirmed")}
              </p>
              <p className="text-[10px] text-gray-600 sm:text-xs md:text-sm">
                02:00 pm - June 17, 2025
              </p>
            </div>
          </div>

          {/* Overlay 2 - Delivery Status Card */}
          <div className="bg-brand-blue absolute -end-2 bottom-12 flex flex-col items-center gap-2 rounded-3xl px-3 py-2 shadow-xl sm:-end-4 sm:bottom-16 sm:gap-3 sm:px-4 sm:py-3 md:bottom-20 md:px-6 md:py-4 lg:-end-16">
            <div className="flex size-8 items-center justify-center rounded-sm bg-white sm:size-10">
              <FaRegClock className="size-4 sm:size-5 md:size-6" />
            </div>
            <div className={`${locale === "ar" ? "font-cairo" : "font-lexend"} text-center text-white`}>
              <p>{t("ongoingOrder")}</p>
              <p>
                <span className="text-base font-bold sm:text-lg md:text-2xl">
                  45
                </span>{" "}
                mins
              </p>
              <p>{t("estimatedDelivery")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
