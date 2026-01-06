"use client";

import HeroSection from "@/components/home/HeroSection";
import RegulatorySection from "@/components/home/RegulatorySection";
import FeatureSection from "@/components/home/FeatureSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import PersonaSection from "@/components/home/PersonaSection";
import FloatingCards from "@/components/home/FloatingCards";
import ScrollText from "@/components/home/ScrollText";

export default function Home() {
  return (
    <main className="bg-black relative min-h-screen text-white">
      <HeroSection />
      <FeatureSection />
      <ScrollText />
      <FloatingCards />
      <TestimonialsSection />
      <RegulatorySection />
      <PersonaSection />
    </main>
  );
}
