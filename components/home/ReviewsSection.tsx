"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "John Smith",
    rating: 5,
    text: "Excellent service! The team was professional and thorough. Highly recommend!",
    date: "2 weeks ago",
  },
  {
    name: "Sarah Johnson",
    rating: 5,
    text: "They did an amazing job cleaning our chimney. Very satisfied with the results.",
    date: "1 month ago",
  },
  {
    name: "Mike Davis",
    rating: 5,
    text: "Fast, reliable, and affordable. Will definitely use them again!",
    date: "3 weeks ago",
  },
  {
    name: "Emily Brown",
    rating: 5,
    text: "Professional team that knows what they're doing. Great experience!",
    date: "1 week ago",
  },
];

export default function ReviewsSection() {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it
          </p>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-lg font-semibold">4.9 out of 5</span>
            <span className="text-gray-600">(250+ reviews)</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="flex mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">{review.text}</p>
              <div className="border-t pt-4">
                <p className="font-semibold">{review.name}</p>
                <p className="text-sm text-gray-500">{review.date}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-700 transition"
          >
            Read More Reviews
          </a>
        </motion.div>
      </div>
    </section>
  );
}
