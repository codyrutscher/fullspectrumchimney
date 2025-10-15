"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import CTASection from "@/components/CTASection";

const categories = ["All", "Cleaning", "Repair", "Installation", "Fireplace"];

const galleryItems = [
  { category: "Cleaning", image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600&h=400&fit=crop", title: "Chimney Cleaning" },
  { category: "Repair", image: "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=600&h=400&fit=crop", title: "Brick Repair" },
  { category: "Installation", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop", title: "New Installation" },
  { category: "Fireplace", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&h=400&fit=crop", title: "Fireplace Restoration" },
  { category: "Cleaning", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop", title: "Interior Cleaning" },
  { category: "Repair", image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=400&fit=crop", title: "Crown Repair" },
  { category: "Installation", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop", title: "Cap Installation" },
  { category: "Fireplace", image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=600&h=400&fit=crop", title: "Modern Fireplace" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <main className="min-h-screen pt-24">
      <section className="py-20 bg-gradient-to-br from-orange-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Our Work Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto"
          >
            See the quality of our craftsmanship
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition ${
                  activeCategory === category
                    ? "bg-orange-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition flex items-center justify-center">
                  <p className="text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition">
                    {item.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Like What You See?"
        description="Let us transform your chimney too"
        buttonText="Schedule Service"
        buttonLink="/booking"
      />
    </main>
  );
}
