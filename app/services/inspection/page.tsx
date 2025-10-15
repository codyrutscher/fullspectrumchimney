"use client";

import { motion } from "framer-motion";
import { Search, Shield, Camera, FileText } from "lucide-react";
import CTASection from "@/components/CTASection";
import Link from "next/link";

export default function InspectionPage() {
  return (
    <main className="min-h-screen pt-24">
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Chimney Inspection</h1>
              <p className="text-xl mb-8">
                Comprehensive inspections to ensure your chimney is safe and code-compliant.
              </p>
              <Link
                href="/booking"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition"
              >
                Schedule Inspection - $149
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1560184897-ae75f418493e?w=800&h=600&fit=crop" alt="Inspection" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Inspection Levels</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { level: "Level 1", price: "$149", description: "Basic visual inspection for routine maintenance" },
              { level: "Level 2", price: "$299", description: "Detailed inspection with video camera" },
              { level: "Level 3", price: "$499", description: "Comprehensive inspection with structural assessment" },
            ].map((level, index) => (
              <motion.div
                key={level.level}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition"
              >
                <h3 className="text-2xl font-bold mb-2">{level.level}</h3>
                <p className="text-3xl font-bold text-blue-600 mb-4">{level.price}</p>
                <p className="text-gray-600">{level.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Need an Inspection?" description="Book your chimney inspection today" buttonText="Schedule Now" buttonLink="/booking" />
    </main>
  );
}
