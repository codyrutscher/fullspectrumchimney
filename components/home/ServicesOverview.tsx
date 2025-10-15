"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { Flame, Search, Wrench, Home, Sparkles } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Chimney Cleaning",
    description: "Professional cleaning to remove soot, creosote, and debris",
    link: "/services/cleaning",
  },
  {
    icon: Search,
    title: "Chimney Inspection",
    description: "Thorough inspection to ensure safety and compliance",
    link: "/services/inspection",
  },
  {
    icon: Wrench,
    title: "Chimney Repair",
    description: "Expert repairs for all chimney issues and damages",
    link: "/services/repair",
  },
  {
    icon: Home,
    title: "Chimney Installation",
    description: "New chimney installation with quality materials",
    link: "/services/installation",
  },
  {
    icon: Flame,
    title: "Fireplace Services",
    description: "Complete fireplace maintenance and upgrades",
    link: "/services/fireplace",
  },
];

export default function ServicesOverview() {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive chimney solutions for your home
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={service.link}>
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 cursor-pointer group">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-600 transition">
                    <service.icon className="w-8 h-8 text-orange-600 group-hover:text-white transition" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-orange-600 transition">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <span className="text-orange-600 font-semibold group-hover:underline">
                    Learn More →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link
            href="/booking"
            className="inline-block bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-700 transition transform hover:scale-105"
          >
            Schedule a Service
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
