"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Shield, Award, Clock } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-orange-900 to-gray-900">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Elite Chimney Services
            <span className="block text-orange-400 mt-2">Safety First, Always</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Professional chimney cleaning, inspection, and repair services you can trust
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/booking"
              className="bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-700 transition transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Schedule Service <ArrowRight />
            </Link>
            <Link
              href="/contact"
              className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105"
            >
              Get Free Quote
            </Link>
          </div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="flex flex-col items-center gap-3 text-white">
              <Shield className="w-12 h-12 text-orange-400" />
              <h3 className="font-semibold text-lg">Certified & Insured</h3>
              <p className="text-gray-400 text-sm">Fully licensed professionals</p>
            </div>
            <div className="flex flex-col items-center gap-3 text-white">
              <Award className="w-12 h-12 text-orange-400" />
              <h3 className="font-semibold text-lg">20+ Years Experience</h3>
              <p className="text-gray-400 text-sm">Trusted by thousands</p>
            </div>
            <div className="flex flex-col items-center gap-3 text-white">
              <Clock className="w-12 h-12 text-orange-400" />
              <h3 className="font-semibold text-lg">Same-Day Service</h3>
              <p className="text-gray-400 text-sm">Available 24/7</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
