import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import TrustedRestaurantsSection from "@/components/home/TrustedRestaurantsSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import { Metadata } from "next";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import DishesSection from "@/components/home/DishesSection";
import RegisterRestaurantSection from "@/components/home/RegisterRestaurantSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import DownloadAppSection from "@/components/home/DownloadAppSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import SupportSection from "@/components/home/SupportSection";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Barq - Fast and Reliable Delivery Services",
  description:
    "Experience swift and dependable delivery services with Barq. Sign up now to get started!",
};

export default function HomePage() {
  return (
    <main>
      <div id="home" data-aos="fade-up">
        <HeroSection />
      </div>

      <div id="about" data-aos="fade-up">
        <StatsSection />
        <TrustedRestaurantsSection />
      </div>

      <div id="features" data-aos="fade-up">
        <FeaturesSection />
      </div>

      <div id="how-it-works" data-aos="fade-up">
        <HowItWorksSection />
      </div>

      <DishesSection />
      <RegisterRestaurantSection />

      <div id="why-us" data-aos="fade-up">
        <WhyChooseUsSection />
      </div>

      <DownloadAppSection />
      <TestimonialsSection />
      <SupportSection />
      <Footer />
    </main>
  );
}
