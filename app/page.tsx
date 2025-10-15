"use client";

import HeroSection from "@/components/home/HeroSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import AnimatedStats from "@/components/AnimatedStats";
import ReviewsSection from "@/components/home/ReviewsSection";
import GBPPostsSection from "@/components/home/GBPPostsSection";
import SocialFeed from "@/components/home/SocialFeed";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesOverview />
      <WhyChooseUs />
      <AnimatedStats />
      <ReviewsSection />
      <GBPPostsSection />
      <SocialFeed />
      <CTASection 
        title="Ready to Schedule Your Service?"
        description="Get your chimney inspected and cleaned by certified professionals"
        buttonText="Book Now"
        buttonLink="/booking"
      />
    </main>
  );
}
