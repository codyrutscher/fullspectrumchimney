"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Instagram, Facebook, Heart, MessageCircle, Share2, TrendingUp } from "lucide-react";
import { useRef } from "react";

const socialPosts = [
  {
    platform: "instagram",
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600&h=600&fit=crop",
    likes: 124,
    comments: 8,
    caption: "Another successful chimney cleaning! 🔥",
    time: "2h ago",
  },
  {
    platform: "facebook",
    image: "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=600&h=600&fit=crop",
    likes: 89,
    comments: 12,
    caption: "Safety first! Annual inspection completed ✅",
    time: "5h ago",
  },
  {
    platform: "instagram",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=600&fit=crop",
    likes: 156,
    comments: 15,
    caption: "Beautiful fireplace restoration project 🏠",
    time: "1d ago",
  },
  {
    platform: "facebook",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&h=600&fit=crop",
    likes: 203,
    comments: 21,
    caption: "Team photo! Meet our certified professionals 👷",
    time: "2d ago",
  },
  {
    platform: "instagram",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=600&fit=crop",
    likes: 178,
    comments: 19,
    caption: "Before and after transformation 🌟",
    time: "3d ago",
  },
  {
    platform: "facebook",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=600&fit=crop",
    likes: 145,
    comments: 14,
    caption: "Spring maintenance season is here! 🌸",
    time: "4d ago",
  },
];

export default function SocialFeed() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} className="relative py-32 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(249, 115, 22, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(249, 115, 22, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating Social Icons */}
      <motion.div
        style={{ y }}
        className="absolute top-20 left-10 text-pink-500 opacity-20"
      >
        <Instagram className="w-24 h-24" />
      </motion.div>
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
        className="absolute bottom-20 right-10 text-blue-500 opacity-20"
      >
        <Facebook className="w-24 h-24" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Creative Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-8"
          >
            <TrendingUp className="w-5 h-5" />
            <span>Follow Our Journey</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-black text-white mb-6"
          >
            <span className="block">We're Social</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400">
              Join the Community
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto mb-8"
          >
            See our latest work, tips, and behind-the-scenes moments
          </motion.p>

          {/* Social Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="#"
              className="group flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-bold hover:shadow-2xl hover:shadow-pink-500/50 transition-all"
            >
              <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span>Instagram</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </a>
            <a
              href="#"
              className="group flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-bold hover:shadow-2xl hover:shadow-blue-500/50 transition-all"
            >
              <Facebook className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span>Facebook</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </a>
          </motion.div>
        </div>

        {/* Diagonal Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {socialPosts.map((post, index) => {
            const isLarge = index === 0 || index === 5;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotate: Math.random() * 20 - 10 }}
                animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
                className={`relative group cursor-pointer ${
                  isLarge ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <div className="relative overflow-hidden rounded-3xl aspect-square">
                  {/* Image */}
                  <img
                    src={post.image}
                    alt="Social post"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Platform Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="absolute top-4 right-4 z-10"
                  >
                    {post.platform === "instagram" ? (
                      <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-2 rounded-full">
                        <Instagram className="w-5 h-5 text-white" />
                      </div>
                    ) : (
                      <div className="bg-blue-600 p-2 rounded-full">
                        <Facebook className="w-5 h-5 text-white" />
                      </div>
                    )}
                  </motion.div>

                  {/* Engagement Stats */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform">
                    <p className="text-white text-sm mb-3 line-clamp-2">{post.caption}</p>
                    <div className="flex items-center justify-between text-white">
                      <div className="flex items-center gap-4">
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          className="flex items-center gap-2"
                        >
                          <Heart className="w-5 h-5 fill-red-500 text-red-500" />
                          <span className="font-semibold">{post.likes}</span>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          className="flex items-center gap-2"
                        >
                          <MessageCircle className="w-5 h-5" />
                          <span className="font-semibold">{post.comments}</span>
                        </motion.div>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Share2 className="w-5 h-5" />
                      </motion.div>
                    </div>
                    <div className="text-gray-400 text-xs mt-2">{post.time}</div>
                  </div>

                  {/* Quick View Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold"
                    >
                      View Post
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="text-center mt-16"
        >
          <div className="inline-block relative">
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 10, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur-2xl opacity-30"
            />
            <div className="relative bg-gray-900 border-2 border-pink-600 px-8 py-4 rounded-full">
              <p className="text-white font-semibold">
                <span className="text-pink-400">10K+</span> followers across all platforms
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
