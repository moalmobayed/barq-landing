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

const FeaturesSection: React.FC = () => {
  return (
    <section className="mx-auto max-w-7xl overflow-x-hidden bg-white px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-24">
      {/* Section Header */}
      <SectionHeader
        badge="ADVANCED FEATURES"
        title="Win-win for restaurants & users"
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
              <FiCheck
                className="text-base text-white sm:text-lg md:text-xl"
                strokeWidth={4}
              />
            </div>
            <p className="font-lexend text-center text-xs font-semibold sm:text-sm md:text-base">
              Received <br /> new order
            </p>
          </div>

          {/* Overlay 2 - Image Card */}
          <div className="absolute right-0 -bottom-4 w-3/5 sm:bottom-1/4 sm:w-2/3 md:w-3/5 lg:-right-20 lg:bottom-1/5">
            <Image
              src={restaurantManagementOffer}
              alt="Special Offer Dashboard"
              width={300}
              height={200}
              className="h-auto w-full"
            />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <SectionBadge text="FOR RESTAURANT" />

          <SectionTitle as="h3" className="text-2xl! sm:text-3xl! md:text-4xl!">
            Effortless management of restaurant operations.
          </SectionTitle>

          <SectionDescription>
            Our system provides you with a centralized dashboard for full
            control over workflow, from receiving orders to generating financial
            reports, allowing you to focus on your food quality and customer
            service.
          </SectionDescription>

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
                  Handling of orders
                </h4>
                <p>
                  Orders are instantly and accurately routed to the kitchen or
                  delivery department, significantly reducing waiting time and
                  boosting customer satisfaction.
                </p>
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
                  Sale system connectivity
                </h4>
                <p>
                  Connect your ordering app directly to your Point of Sale (POS)
                  system. Log all sales, track inventory, and issue accurate
                  invoices, all from one unified platform.
                </p>
              </div>
            </div>
          </div>

          <Button href="/register-restaurant">Register Your Restaurant</Button>
        </div>
      </div>

      {/* Customer Ordering Feature */}
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Content */}
        <div className="space-y-4 lg:order-1">
          <SectionBadge text="FOR CUSTOMER" />

          <SectionTitle as="h3" className="text-2xl! sm:text-3xl! md:text-4xl!">
            Seamless ordering process from app
          </SectionTitle>

          <SectionDescription>
            Order your favorite meal or products with ultimate ease and speed!
            Our app is designed to provide an intuitive and rapid user
            experience, from selecting the item to completing the payment in
            simple, comfortable steps.
          </SectionDescription>

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
                  Delivery within 3 min
                </h4>
                <p>
                  The fastest delivery in the city! Rely on our smart fleet to
                  ensure your order arrives fresh and on time, so you can enjoy
                  your product without the wait.
                </p>
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
                  Live map tracking
                </h4>
                <p>
                  Follow your order step-by-step in real-time. Watch the
                  delivery agent&apos;s location directly on the map and
                  accurately predict the arrival time for total peace of mind.
                </p>
              </div>
            </div>
          </div>

          <Button href="#">Download App</Button>
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
          <div className="font-lexend absolute top-16 right-2 flex items-center gap-2 rounded-xl border border-[#FB5B2933] bg-white px-3 py-2 shadow-lg sm:top-20 sm:right-4 sm:gap-3 sm:rounded-2xl sm:px-4 sm:py-3 md:top-28 md:-right-4 md:px-6 md:py-4 lg:-right-24">
            <div className="bg-brand-blue flex size-8 shrink-0 items-center justify-center rounded-full sm:size-10 md:size-12">
              <FiCheck
                className="text-base text-white sm:text-lg md:text-xl"
                strokeWidth={4}
              />
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-800 sm:text-sm md:text-base">
                Your order has confirmed
              </p>
              <p className="text-[10px] text-gray-600 sm:text-xs md:text-sm">
                02:00 pm - June 17, 2025
              </p>
            </div>
          </div>

          {/* Overlay 2 - Delivery Status Card */}
          <div className="bg-brand-blue absolute -right-2 bottom-12 flex flex-col items-center gap-2 rounded-3xl px-3 py-2 shadow-xl sm:-right-4 sm:bottom-16 sm:gap-3 sm:px-4 sm:py-3 md:bottom-20 md:px-6 md:py-4 lg:-right-16">
            <div className="flex size-8 items-center justify-center rounded-sm bg-white sm:size-10">
              <FaRegClock className="size-4 sm:size-5 md:size-6" />
            </div>
            <div className="font-lexend text-center text-white">
              <p>Ongoing Order</p>
              <p>
                <span className="text-base font-bold sm:text-lg md:text-2xl">
                  45
                </span>{" "}
                mins
              </p>
              <p>Estimated Delivery</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
