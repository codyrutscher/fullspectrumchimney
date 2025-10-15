"use client";

import { motion } from "framer-motion";
import { Wrench } from "lucide-react";
import CTASection from "@/components/CTASection";
import Link from "next/link";

export default function RepairPage() {
  const repairs = [
    "Crown Repair & Replacement",
    "Flue Liner Repair",
    "Masonry Restoration",
    "Chimney Cap Installation",
    "Waterproofing",
    "Tuckpointing",
  ];

  return (
    <main className="min-h-screen pt-24">
      <section className="py-20 bg-gradient-to-br from-red-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Chimney Repair</h1>
              <p className="text-xl mb-8">
                Expert repairs to restore your chimney's safety and functionality.
              </p>
              <Link href="/contact" className="inline-block bg-white text-red-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition">
                Get Free Estimate
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop" alt="Repair" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Repair Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repairs.map((repair, index) => (
              <motion.div
                key={repair}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 bg-gray-50 p-6 rounded-xl"
              >
                <Wrench className="w-6 h-6 text-red-600" />
                <span className="text-lg font-semibold">{repair}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Need Repairs?" description="Contact us for a free estimate" buttonText="Get Quote" buttonLink="/contact" />
    </main>
  );
}
