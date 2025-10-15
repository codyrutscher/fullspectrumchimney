"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { Flame, Search, Wrench, Home, Sparkles } from "lucide-react";
import { useRef } from "react";

const services = [
  {
    icon: Sparkles,
    title: "Chimney Cleaning",
    description: "Professional cleaning to remove soot, creosote, and debris",
    link: "/services/cleaning",
    color: "from-orange-500 to-red-500",
    position: "top-0 left-0",
  },
  {
    icon: Search,
    title: "Chimney Inspection",
    description: "Thorough inspection to ensure safety and compliance",
    link: "/services/inspection",
    color: "from-blue-500 to-indigo-500",
    position: "top-0 right-0",
  },
  {
    icon: Wrench,
    title: "Chimney Repair",
    description: "Expert repairs for all chimney issues and damages",
    link: "/services/repair",
    color: "from-red-500 to-pink-500",
    position: "bottom-0 left-0",
  },
  {
    icon: Home,
    title: "Chimney Installation",
    description: "New chimney installation with quality materials",
    link: "/services/installation",
    color: "from-green-500 to-teal-500",
    position: "bottom-0 right-0",
  },
  {
    icon: Flame,
    title: "Fireplace Services",
    description: "Complete fireplace maintenance and upgrades",
    link: "/services/fireplace",
    color: "from-purple-500 to-pink-500",
    position: "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
  },
];

export default function ServicesOverview() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section ref={containerRef} className="relative py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Decorative Background Elements */}
      <motion.div
        style={{ rotate }}
        className="absolute top-20 right-20 w-64 h-64 border-4 border-orange-200 rounded-full opacity-30"
      />
      <motion.div
        style={{ rotate: useTransform(scrollYProgress, [0, 1], [360, 0]) }}
        className="absolute bottom-20 left-20 w-96 h-96 border-4 border-red-200 rounded-full opacity-20"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Asymmetric Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ type: "spring", delay: 0.2 }}
              className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4"
            >
              What We Offer
            </motion.span>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="block">Our Expert</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                Services
              </span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center"
          >
            <p className="text-xl text-gray-600 leading-relaxed">
              From routine maintenance to emergency repairs, we provide comprehensive chimney solutions tailored to your needs. Every service backed by our satisfaction guarantee.
            </p>
          </motion.div>
        </div>

        {/* Bento Grid Layout - Unique Asymmetric Design */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mb-12">
          {/* Large Card - Cleaning */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-3 md:row-span-2"
          >
            <Link href={services[0].link}>
              <div className="group relative h-full bg-gradient-to-br from-orange-500 to-red-600 p-8 rounded-3xl overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity" />
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mb-6"
                >
                  {(() => {
                    const Icon = services[0].icon;
                    return <Icon className="w-10 h-10 text-white" />;
                  })()}
                </motion.div>
                <h3 className="text-3xl font-bold text-white mb-4">{services[0].title}</h3>
                <p className="text-white/90 text-lg mb-6">{services[0].description}</p>
                <motion.div
                  initial={{ x: 0 }}
                  whileHover={{ x: 10 }}
                  className="text-white font-semibold flex items-center gap-2"
                >
                  Learn More →
                </motion.div>
              </div>
            </Link>
          </motion.div>

          {/* Medium Card - Inspection */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-3"
          >
            <Link href={services[1].link}>
              <div className="group relative h-full bg-gradient-to-br from-blue-500 to-indigo-600 p-8 rounded-3xl overflow-hidden cursor-pointer">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -10 }}
                  className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
                >
                  {(() => {
                    const Icon = services[1].icon;
                    return <Icon className="w-8 h-8 text-white" />;
                  })()}
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-3">{services[1].title}</h3>
                <p className="text-white/90">{services[1].description}</p>
              </div>
            </Link>
          </motion.div>

          {/* Small Card - Repair */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-2"
          >
            <Link href={services[2].link}>
              <div className="group relative h-full bg-gradient-to-br from-red-500 to-pink-600 p-6 rounded-3xl overflow-hidden cursor-pointer">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white/20 backdrop-blur-sm w-14 h-14 rounded-xl flex items-center justify-center mb-3"
                >
                  {(() => {
                    const Icon = services[2].icon;
                    return <Icon className="w-7 h-7 text-white" />;
                  })()}
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-2">{services[2].title}</h3>
                <p className="text-white/90 text-sm">{services[2].description}</p>
              </div>
            </Link>
          </motion.div>

          {/* Small Card - Installation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-2"
          >
            <Link href={services[3].link}>
              <div className="group relative h-full bg-gradient-to-br from-green-500 to-teal-600 p-6 rounded-3xl overflow-hidden cursor-pointer">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="bg-white/20 backdrop-blur-sm w-14 h-14 rounded-xl flex items-center justify-center mb-3"
                >
                  {(() => {
                    const Icon = services[3].icon;
                    return <Icon className="w-7 h-7 text-white" />;
                  })()}
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-2">{services[3].title}</h3>
                <p className="text-white/90 text-sm">{services[3].description}</p>
              </div>
            </Link>
          </motion.div>

          {/* Medium Card - Fireplace */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="md:col-span-2"
          >
            <Link href={services[4].link}>
              <div className="group relative h-full bg-gradient-to-br from-purple-500 to-pink-600 p-6 rounded-3xl overflow-hidden cursor-pointer">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="bg-white/20 backdrop-blur-sm w-14 h-14 rounded-xl flex items-center justify-center mb-3"
                >
                  {(() => {
                    const Icon = services[4].icon;
                    return <Icon className="w-7 h-7 text-white" />;
                  })()}
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-2">{services[4].title}</h3>
                <p className="text-white/90 text-sm">{services[4].description}</p>
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Unique CTA Placement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center"
        >
          <Link
            href="/booking"
            className="group relative bg-gradient-to-r from-orange-600 to-red-600 text-white px-12 py-6 rounded-full text-xl font-bold overflow-hidden shadow-2xl"
          >
            <span className="relative z-10">Schedule a Service</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-orange-700 to-red-700"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
