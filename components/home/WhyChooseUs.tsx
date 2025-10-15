"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Shield, Users, Clock, Award, ThumbsUp, Zap } from "lucide-react";
import { useRef } from "react";

const features = [
  {
    icon: Shield,
    title: "Certified Professionals",
    description: "All technicians are certified and insured",
    stat: "100%",
    statLabel: "Licensed",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description: "Over 20 years serving the community",
    stat: "5000+",
    statLabel: "Customers",
  },
  {
    icon: Clock,
    title: "Fast Response",
    description: "Same-day service available",
    stat: "24/7",
    statLabel: "Available",
  },
  {
    icon: Award,
    title: "Quality Guaranteed",
    description: "100% satisfaction guarantee",
    stat: "4.9★",
    statLabel: "Rating",
  },
  {
    icon: ThumbsUp,
    title: "5-Star Rated",
    description: "Highly rated by customers",
    stat: "250+",
    statLabel: "Reviews",
  },
  {
    icon: Zap,
    title: "Modern Equipment",
    description: "Latest tools and technology",
    stat: "Top",
    statLabel: "Equipment",
  },
];

export default function WhyChooseUs() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section ref={containerRef} className="relative py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, orange 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Floating Decorative Elements */}
      <motion.div
        style={{ x }}
        className="absolute top-20 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"
      />
      <motion.div
        style={{ x: useTransform(scrollYProgress, [0, 1], [100, -100]) }}
        className="absolute bottom-20 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Diagonal Split Header */}
        <div className="relative mb-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
              <div>
                <motion.span
                  initial={{ scale: 0, rotate: -180 }}
                  animate={inView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ type: "spring", delay: 0.2 }}
                  className="inline-block bg-orange-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 transform -rotate-2"
                >
                  Why Choose Us
                </motion.span>
                <h2 className="text-5xl md:text-7xl font-black text-white leading-tight">
                  <span className="block">Excellence</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                    In Every Detail
                  </span>
                </h2>
              </div>
              <motion.p
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-400 max-w-md"
              >
                We're not just another chimney service—we're your partners in home safety and comfort.
              </motion.p>
            </div>
          </motion.div>

          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-600 via-red-600 to-transparent origin-left"
          />
        </div>

        {/* Staggered Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50, rotate: isEven ? -5 : 5 }}
                animate={inView ? { opacity: 1, y: 0, rotate: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10, 
                  rotate: isEven ? 2 : -2,
                  transition: { duration: 0.3 }
                }}
                className={`relative group ${isEven ? 'lg:mt-0' : 'lg:mt-12'}`}
              >
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl border border-gray-700 overflow-hidden">
                  {/* Hover Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-600/0 to-red-600/0 group-hover:from-orange-600/10 group-hover:to-red-600/10 transition-all duration-500" />
                  
                  {/* Icon with Animated Background */}
                  <div className="relative mb-6">
                    <motion.div
                      animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360]
                      }}
                      transition={{ 
                        duration: 20, 
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 rounded-full blur-xl opacity-20"
                    />
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="relative bg-gradient-to-br from-orange-600 to-red-600 w-20 h-20 rounded-2xl flex items-center justify-center"
                    >
                      {(() => {
                        const Icon = feature.icon;
                        return <Icon className="w-10 h-10 text-white" />;
                      })()}
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    {/* Stat Badge */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                      className="absolute -top-4 -right-4 bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-bold transform rotate-12"
                    >
                      {feature.stat}
                    </motion.div>

                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="flex items-center gap-2 text-orange-500 font-semibold">
                      <span className="text-3xl">{feature.stat}</span>
                      <span className="text-sm text-gray-500">{feature.statLabel}</span>
                    </div>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-orange-600/20 to-transparent rounded-tl-full" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Decorative Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1 }}
          className="mt-20 text-center"
        >
          <div className="inline-block relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 rounded-full blur-2xl opacity-30"
            />
            <div className="relative bg-gray-900 border-2 border-orange-600 px-8 py-4 rounded-full">
              <p className="text-white font-semibold">
                <span className="text-orange-400">Trusted by 5,000+</span> homeowners since 2004
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
