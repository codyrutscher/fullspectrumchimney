"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, Users, Target, Heart } from "lucide-react";
import CTASection from "@/components/CTASection";

export default function AboutPage() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <main className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            About Elite Chimney
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Your trusted partner in chimney care for over 20 years
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section ref={ref} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-4">
                Founded in 2004, Elite Chimney Services has been serving homeowners with dedication and expertise. What started as a small family business has grown into the region's most trusted chimney service provider.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Our commitment to safety, quality, and customer satisfaction has earned us thousands of satisfied customers and countless five-star reviews.
              </p>
              <p className="text-lg text-gray-600">
                We believe every home deserves a safe, efficient chimney system, and we're here to make that happen.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1560184897-ae75f418493e?w=800&h=600&fit=crop"
                alt="Our team"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: "Excellence", description: "We strive for perfection in every job" },
              { icon: Users, title: "Teamwork", description: "Collaboration drives our success" },
              { icon: Target, title: "Integrity", description: "Honest and transparent service" },
              { icon: Heart, title: "Care", description: "We treat your home like our own" },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg text-center"
              >
                <value.icon className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Work With Us?"
        description="Experience the Elite Chimney difference today"
        buttonText="Get Started"
        buttonLink="/booking"
      />
    </main>
  );
}
