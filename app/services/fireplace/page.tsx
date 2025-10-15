"use client";

import { motion } from "framer-motion";
import { Flame } from "lucide-react";
import CTASection from "@/components/CTASection";
import Link from "next/link";

export default function FireplacePage() {
  return (
    <main className="min-h-screen pt-24">
      <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Fireplace Services</h1>
              <p className="text-xl mb-8">
                Complete fireplace maintenance, repair, and installation services for your home.
              </p>
              <Link href="/booking" className="inline-block bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition">
                Schedule Service
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&h=600&fit=crop" alt="Fireplace" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Our Fireplace Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Fireplace Cleaning", description: "Thorough cleaning and maintenance" },
              { title: "Gas Fireplace Service", description: "Installation and repair of gas fireplaces" },
              { title: "Fireplace Restoration", description: "Restore beauty to old fireplaces" },
              { title: "Insert Installation", description: "Efficient fireplace insert installation" },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-50 p-8 rounded-2xl"
              >
                <Flame className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Transform Your Fireplace" description="Let us help you create the perfect fireplace" buttonText="Get Started" buttonLink="/booking" />
    </main>
  );
}
