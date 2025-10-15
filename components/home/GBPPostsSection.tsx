"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, Clock, ArrowRight, Newspaper, TrendingUp } from "lucide-react";
import { useRef } from "react";

const posts = [
  {
    title: "Spring Chimney Maintenance Tips",
    excerpt: "Get your chimney ready for the warmer months with these essential tips from our experts...",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Tips & Guides",
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=600&fit=crop",
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Why Annual Inspections Matter",
    excerpt: "Learn why regular chimney inspections are crucial for your home's safety and efficiency...",
    date: "March 10, 2024",
    readTime: "4 min read",
    category: "Safety",
    image: "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=800&h=600&fit=crop",
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "New Service Area Expansion",
    excerpt: "We're excited to announce we're now serving additional neighborhoods in the greater metro area...",
    date: "March 5, 2024",
    readTime: "3 min read",
    category: "News",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    color: "from-green-500 to-teal-500",
  },
];

export default function GBPPostsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section ref={containerRef} className="relative py-32 bg-gradient-to-br from-gray-50 via-orange-50 to-red-50 overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        style={{ x }}
        className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-orange-500 to-transparent"
      />
      <motion.div
        style={{ x: useTransform(scrollYProgress, [0, 1], [50, -50]) }}
        className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-red-500 to-transparent"
      />

      {/* Floating Newspaper Icon */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-20 right-20 text-orange-200 opacity-30"
      >
        <Newspaper className="w-32 h-32" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Unique Header with Diagonal Layout */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={inView ? { scale: 1, rotate: 0 } : {}}
                transition={{ type: "spring", delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 transform -rotate-2"
              >
                <TrendingUp className="w-5 h-5" />
                <span>Latest Updates</span>
              </motion.div>

              <h2 className="text-5xl md:text-7xl font-black leading-tight">
                <span className="block text-gray-900">Stay</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                  Informed
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col gap-6"
            >
              <p className="text-xl text-gray-600 leading-relaxed">
                Expert tips, industry news, and company updates delivered straight from our team.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-600 border-4 border-white flex items-center justify-center text-white font-bold"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-bold text-orange-600">500+</span> readers this month
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Featured Post - Large Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="group relative bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-orange-500/20 transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image Side */}
              <div className="relative h-96 lg:h-auto overflow-hidden">
                <img
                  src={posts[0].image}
                  alt={posts[0].title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Category Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: 0.3, type: "spring" }}
                  className="absolute top-6 left-6"
                >
                  <div className={`bg-gradient-to-r ${posts[0].color} text-white px-4 py-2 rounded-full text-sm font-bold`}>
                    {posts[0].category}
                  </div>
                </motion.div>
              </div>

              {/* Content Side */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{posts[0].date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{posts[0].readTime}</span>
                  </div>
                </div>

                <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                  {posts[0].title}
                </h3>

                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  {posts[0].excerpt}
                </p>

                <motion.a
                  href="#"
                  whileHover={{ x: 10 }}
                  className="inline-flex items-center gap-3 text-orange-600 font-bold text-lg group"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Secondary Posts - Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.slice(1).map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotate: index % 2 === 0 ? -3 : 3 }}
              animate={inView ? { opacity: 1, y: 0, rotate: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -10, rotate: 0 }}
              className={index % 2 === 0 ? 'md:mt-12' : ''}
            >
              <div className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all h-full">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className={`absolute top-4 left-4 bg-gradient-to-r ${post.color} text-white px-4 py-2 rounded-full text-sm font-bold`}>
                    {post.category}
                  </div>

                  {/* Read Time Badge */}
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-900">
                    {post.readTime}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <motion.a
                    href="#"
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center gap-2 text-orange-600 font-semibold"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="#"
            className="group inline-flex items-center gap-4 bg-gradient-to-r from-orange-600 to-red-600 text-white px-10 py-5 rounded-full text-lg font-bold shadow-2xl hover:shadow-orange-500/50 transition-all"
          >
            <span>View All Posts</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-6 h-6" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
