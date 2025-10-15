"use client";

import { motion } from "framer-motion";
import { Home } from "lucide-react";
import CTASection from "@/components/CTASection";
import Link from "next/link";

export default function InstallationPage() {
  return (
    <main className="min-h-screen pt-24">
      <section className="py-20 bg-gradient-to-br from-green-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Chimney Installation</h1>
              <p className="text-xl mb-8">
                Professional installation of new chimneys with quality materials and expert craftsmanship.
              </p>
              <Link href="/contact" className="inline-block bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition">
                Request Consultation
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop" alt="Installation" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Professional Installation Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            From design to completion, we handle every aspect of your new chimney installation with precision and care.
          </p>
        </div>
      </section>

      <CTASection title="Ready for a New Chimney?" description="Contact us for a custom quote" buttonText="Get Started" buttonLink="/contact" />
    </main>
  );
}
