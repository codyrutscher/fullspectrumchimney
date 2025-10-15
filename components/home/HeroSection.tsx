"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Shield, Award, Clock, Flame, Sparkles } from "lucide-react";
import { useRef } from "react";

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden bg-black">
      {/* Animated Particles Background */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-orange-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ 
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{
              y: [0, Math.random() * -100 - 50],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Diagonal Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-transparent to-red-600/20" />
      
      <motion.div style={{ y, opacity }} className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content with Asymmetric Layout */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              {/* Decorative Element */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-10 -left-10 w-20 h-20 border-4 border-orange-500 rounded-full opacity-20"
              />
              
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="inline-block bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 rotate-[-2deg]"
              >
                <Sparkles className="inline w-4 h-4 mr-2" />
                Trusted Since 2004
              </motion.div>

              <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-none">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="block"
                >
                  Elite
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500"
                >
                  Chimney
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="block text-5xl md:text-6xl text-gray-400"
                >
                  Services
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-xl text-gray-300 mb-8 max-w-lg leading-relaxed"
              >
                Experience the difference of <span className="text-orange-400 font-semibold">certified excellence</span> in chimney care. Safety isn't just our priority—it's our promise.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/booking"
                  className="group relative bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Schedule Service 
                    <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-700 to-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition text-center backdrop-blur-sm"
                >
                  Free Quote
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Side - Floating Trust Badges with Unique Layout */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="relative h-[600px] hidden lg:block"
            >
              {/* Badge 1 - Top Right */}
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-0 right-0 bg-gradient-to-br from-orange-500 to-red-600 p-8 rounded-3xl shadow-2xl transform rotate-6 w-64"
              >
                <Shield className="w-16 h-16 text-white mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Certified</h3>
                <p className="text-orange-100">Fully licensed & insured professionals</p>
              </motion.div>

              {/* Badge 2 - Middle Left */}
              <motion.div
                animate={{ 
                  y: [0, 20, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                className="absolute top-40 left-0 bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl shadow-2xl transform -rotate-6 w-64 border border-orange-500/30"
              >
                <Award className="w-16 h-16 text-orange-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">20+ Years</h3>
                <p className="text-gray-300">Trusted by thousands of homeowners</p>
              </motion.div>

              {/* Badge 3 - Bottom Right */}
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 3, 0]
                }}
                transition={{ duration: 4.5, repeat: Infinity, delay: 1 }}
                className="absolute bottom-0 right-12 bg-white p-8 rounded-3xl shadow-2xl transform rotate-3 w-64"
              >
                <Clock className="w-16 h-16 text-orange-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">24/7 Service</h3>
                <p className="text-gray-600">Same-day emergency response available</p>
              </motion.div>

              {/* Decorative Flame Icon */}
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <Flame className="w-32 h-32 text-orange-500 opacity-20" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-white"
        >
          <span className="text-sm font-semibold">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
