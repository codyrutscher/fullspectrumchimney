"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, MapPin } from "lucide-react";

const posts = [
  {
    title: "Spring Chimney Maintenance Tips",
    excerpt: "Get your chimney ready for the warmer months with these essential tips...",
    date: "March 15, 2024",
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=400&h=300&fit=crop",
  },
  {
    title: "Why Annual Inspections Matter",
    excerpt: "Learn why regular chimney inspections are crucial for your home's safety...",
    date: "March 10, 2024",
    image: "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=400&h=300&fit=crop",
  },
  {
    title: "New Service Area Expansion",
    excerpt: "We're excited to announce we're now serving additional neighborhoods...",
    date: "March 5, 2024",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop",
  },
];

export default function GBPPostsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Latest Updates</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay informed with our latest news and tips
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2 cursor-pointer"
            >
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 hover:text-orange-600 transition">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a href="#" className="text-orange-600 font-semibold hover:underline">
                  Read More →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
