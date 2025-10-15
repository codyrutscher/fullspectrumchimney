"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CheckCircle, Sparkles } from "lucide-react";
import CTASection from "@/components/CTASection";
import Link from "next/link";

export default function CleaningPage() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const benefits = [
    "Remove dangerous creosote buildup",
    "Improve heating efficiency",
    "Prevent chimney fires",
    "Eliminate smoke and odor issues",
    "Extend chimney lifespan",
    "Ensure proper ventilation",
  ];

  const process = [
    { step: 1, title: "Inspection", description: "Thorough assessment of your chimney" },
    { step: 2, title: "Preparation", description: "Protect your home with drop cloths" },
    { step: 3, title: "Cleaning", description: "Professional cleaning from top to bottom" },
    { step: 4, title: "Final Check", description: "Verify everything is clean and safe" },
  ];

  return (
    <main className="min-h-screen pt-24">
      <section className="py-20 bg-gradient-to-br from-orange-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-8 h-8" />
                <span className="text-lg font-semibold">Professional Service</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Chimney Cleaning Services
              </h1>
              <p className="text-xl mb-8">
                Keep your chimney safe and efficient with professional cleaning from certified experts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/booking"
                  className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition text-center"
                >
                  Book Now - $199
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-orange-600 transition text-center"
                >
                  Get Free Quote
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=600&fit=crop"
                alt="Chimney cleaning"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section ref={ref} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Why Clean Your Chimney?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Regular chimney cleaning is essential for safety and efficiency
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 bg-gray-50 p-6 rounded-xl"
              >
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-lg">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Our Cleaning Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready for a Clean Chimney?"
        description="Schedule your professional cleaning today"
        buttonText="Book Cleaning Service"
        buttonLink="/booking"
      />
    </main>
  );
}
