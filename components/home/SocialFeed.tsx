"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Instagram, Facebook, Heart, MessageCircle } from "lucide-react";

const socialPosts = [
  {
    platform: "instagram",
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=400&h=400&fit=crop",
    likes: 124,
    comments: 8,
    caption: "Another successful chimney cleaning! 🔥",
  },
  {
    platform: "facebook",
    image: "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=400&h=400&fit=crop",
    likes: 89,
    comments: 12,
    caption: "Safety first! Annual inspection completed ✅",
  },
  {
    platform: "instagram",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=400&fit=crop",
    likes: 156,
    comments: 15,
    caption: "Beautiful fireplace restoration project 🏠",
  },
  {
    platform: "facebook",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&h=400&fit=crop",
    likes: 203,
    comments: 21,
    caption: "Team photo! Meet our certified professionals 👷",
  },
];

export default function SocialFeed() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Follow Us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            See our latest work and updates on social media
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:shadow-lg transition"
            >
              <Instagram className="w-5 h-5" />
              Instagram
            </a>
            <a
              href="#"
              className="bg-blue-600 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:shadow-lg transition"
            >
              <Facebook className="w-5 h-5" />
              Facebook
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group cursor-pointer overflow-hidden rounded-xl"
            >
              <img
                src={post.image}
                alt="Social post"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition text-white flex gap-6">
                  <div className="flex items-center gap-2">
                    <Heart className="w-6 h-6" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-6 h-6" />
                    <span>{post.comments}</span>
                  </div>
                </div>
              </div>
              <div className="absolute top-3 right-3">
                {post.platform === "instagram" ? (
                  <Instagram className="w-6 h-6 text-white drop-shadow-lg" />
                ) : (
                  <Facebook className="w-6 h-6 text-white drop-shadow-lg" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
