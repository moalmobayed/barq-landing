"use client";

import dynamic from "next/dynamic";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";

// Lazy load below-the-fold sections
const TrustedRestaurantsSection = dynamic(
  () => import("@/components/home/TrustedRestaurantsSection"),
  { ssr: true },
);
const FeaturesSection = dynamic(
  () => import("@/components/home/FeaturesSection"),
  { ssr: true },
);
const HowItWorksSection = dynamic(
  () => import("@/components/home/HowItWorksSection"),
  { ssr: true },
);
const DishesSection = dynamic(() => import("@/components/home/DishesSection"), {
  ssr: true,
});
const RegisterRestaurantSection = dynamic(
  () => import("@/components/home/RegisterRestaurantSection"),
  { ssr: true },
);
const WhyChooseUsSection = dynamic(
  () => import("@/components/home/WhyChooseUsSection"),
  { ssr: true },
);
const DownloadAppSection = dynamic(
  () => import("@/components/home/DownloadAppSection"),
  { ssr: true },
);
const TestimonialsSection = dynamic(
  () => import("@/components/home/TestimonialsSection"),
  { ssr: true },
);
const SupportSection = dynamic(
  () => import("@/components/home/SupportSection"),
  { ssr: true },
);
const Footer = dynamic(() => import("@/components/layout/Footer"), {
  ssr: true,
});

export default function HomePage() {
  return (
    <main>
      <div id="home">
        <HeroSection />
      </div>

      <div id="about">
        <StatsSection />
        <TrustedRestaurantsSection />
      </div>

      <div id="features">
        <FeaturesSection />
      </div>

      <div id="how-it-works">
        <HowItWorksSection />
      </div>

      <DishesSection />
      <RegisterRestaurantSection />

      <div id="why-us">
        <WhyChooseUsSection />
      </div>

      <DownloadAppSection />
      <TestimonialsSection />
      <SupportSection />
      <Footer />
    </main>
  );
}
