import HeroSection from "@/components/home/HeroSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Barq - Fast and Reliable Delivery Services",
  description:
    "Experience swift and dependable delivery services with Barq. Sign up now to get started!",
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
    </main>
  );
}
