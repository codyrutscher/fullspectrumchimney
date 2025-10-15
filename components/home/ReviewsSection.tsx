"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star, Quote } from "lucide-react";
import { useEffect, useState } from "react";

const reviews = [
  {
    name: "John Smith",
    rating: 5,
    text: "Excellent service! The team was professional and thorough. Highly recommend!",
    date: "2 weeks ago",
    location: "Downtown",
    avatar: "JS",
  },
  {
    name: "Sarah Johnson",
    rating: 5,
    text: "They did an amazing job cleaning our chimney. Very satisfied with the results.",
    date: "1 month ago",
    location: "Westside",
    avatar: "SJ",
  },
  {
    name: "Mike Davis",
    rating: 5,
    text: "Fast, reliable, and affordable. Will definitely use them again!",
    date: "3 weeks ago",
    location: "Eastside",
    avatar: "MD",
  },
  {
    name: "Emily Brown",
    rating: 5,
    text: "Professional team that knows what they're doing. Great experience!",
    date: "1 week ago",
    location: "Northside",
    avatar: "EB",
  },
  {
    name: "David Wilson",
    rating: 5,
    text: "Outstanding work! They went above and beyond our expectations.",
    date: "2 days ago",
    location: "Southside",
    avatar: "DW",
  },
  {
    name: "Lisa Anderson",
    rating: 5,
    text: "Best chimney service in town. Highly professional and courteous.",
    date: "1 week ago",
    location: "Central",
    avatar: "LA",
  },
];

function Counter({ target, inView }: { target: number; inView: boolean }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest * 10) / 10);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, target, { duration: 2 });
      return controls.stop;
    }
  }, [inView, count, target]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => setDisplayValue(latest));
    return unsubscribe;
  }, [rounded]);

  return <span>{displayValue}</span>;
}

export default function ReviewsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="relative py-32 bg-white overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-red-50" />
      
      {/* Floating Quote Marks */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-20 left-10 text-orange-200 opacity-30"
      >
        <Quote className="w-32 h-32" />
      </motion.div>
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-20 right-10 text-red-200 opacity-30"
      >
        <Quote className="w-32 h-32 transform rotate-180" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Unique Header Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Left - Title */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ type: "spring", delay: 0.2 }}
              className="inline-block bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 transform rotate-[-2deg]"
            >
              Customer Reviews
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black leading-tight">
              <span className="block text-gray-900">What Our</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                Customers Say
              </span>
            </h2>
            <p className="text-xl text-gray-600 mt-6 max-w-2xl">
              Don't just take our word for it—hear from the homeowners who trust us with their chimney care.
            </p>
          </motion.div>

          {/* Right - Stats Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="sticky top-24 bg-gradient-to-br from-orange-600 to-red-600 p-8 rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={inView ? { scale: 1, rotate: 0 } : {}}
                      transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
                    >
                      <Star className="w-8 h-8 fill-yellow-300 text-yellow-300" />
                    </motion.div>
                  ))}
                </div>
                <div className="text-6xl font-black text-white mb-2">
                  <Counter target={4.9} inView={inView} />
                </div>
                <div className="text-white/90 text-lg mb-6">out of 5 stars</div>
                <div className="border-t border-white/30 pt-6">
                  <div className="text-4xl font-bold text-white mb-1">
                    <Counter target={250} inView={inView} />+
                  </div>
                  <div className="text-white/90">Happy Customers</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Masonry-style Review Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="break-inside-avoid"
            >
              <div className="relative bg-white p-6 rounded-2xl shadow-lg border-2 border-gray-100 hover:border-orange-300 transition-colors">
                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-orange-100 to-transparent rounded-tr-2xl rounded-bl-full" />
                
                {/* Avatar */}
                <div className="flex items-start gap-4 mb-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="relative flex-shrink-0"
                  >
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white font-bold text-lg">
                      {review.avatar}
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white" />
                  </motion.div>
                  
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-lg">{review.name}</h3>
                    <p className="text-sm text-gray-500">{review.location}</p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ delay: index * 0.1 + i * 0.05 }}
                    >
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 leading-relaxed mb-4 relative">
                  <Quote className="absolute -left-2 -top-2 w-6 h-6 text-orange-200" />
                  <span className="relative z-10">{review.text}</span>
                </p>

                {/* Date */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{review.date}</span>
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="text-orange-600 font-semibold"
                  >
                    ✓ Verified
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-orange-600 to-red-600 text-white px-10 py-5 rounded-full text-lg font-bold shadow-2xl hover:shadow-orange-500/50 transition-all"
          >
            <span>Read All Reviews</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
