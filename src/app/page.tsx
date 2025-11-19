import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import TrustedRestaurantsSection from "@/components/home/TrustedRestaurantsSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import { Metadata } from "next";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import DishesSection from "@/components/home/DishesSection";
import RegisterRestaurantSection from "@/components/home/RegisterRestaurantSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";

export const metadata: Metadata = {
  title: "Barq - Fast and Reliable Delivery Services",
  description:
    "Experience swift and dependable delivery services with Barq. Sign up now to get started!",
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <TrustedRestaurantsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <DishesSection />
      <RegisterRestaurantSection />
      <WhyChooseUsSection />
    </main>
  );
}
