"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Shield, Users, Clock, Award, ThumbsUp, Zap } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Certified Professionals",
    description: "All technicians are certified and insured",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description: "Over 20 years serving the community",
  },
  {
    icon: Clock,
    title: "Fast Response",
    description: "Same-day service available",
  },
  {
    icon: Award,
    title: "Quality Guaranteed",
    description: "100% satisfaction guarantee",
  },
  {
    icon: ThumbsUp,
    title: "5-Star Rated",
    description: "Highly rated by customers",
  },
  {
    icon: Zap,
    title: "Modern Equipment",
    description: "Latest tools and technology",
  },
];

export default function WhyChooseUs() {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're committed to providing the best chimney services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-orange-50 transition"
            >
              <div className="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
