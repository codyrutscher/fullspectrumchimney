"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState, useRef } from "react";
import { Flame, Users, Award, Clock } from "lucide-react";

interface StatProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

function AnimatedNumber({ end, duration = 2, suffix = "", prefix = "" }: StatProps) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        
        setCount(Math.floor(progress * end));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [inView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}

export default function AnimatedStats() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  const stats = [
    { 
      value: 5000, 
      suffix: "+", 
      label: "Happy Customers",
      icon: Users,
      color: "from-orange-500 to-red-500",
      position: "top-0 left-0"
    },
    { 
      value: 20, 
      suffix: "+", 
      label: "Years Experience",
      icon: Award,
      color: "from-blue-500 to-indigo-500",
      position: "top-0 right-0"
    },
    { 
      value: 100, 
      suffix: "%", 
      label: "Satisfaction Rate",
      icon: Flame,
      color: "from-green-500 to-teal-500",
      position: "bottom-0 left-0"
    },
    { 
      value: 24, 
      suffix: "/7", 
      label: "Emergency Service",
      icon: Clock,
      color: "from-purple-500 to-pink-500",
      position: "bottom-0 right-0"
    },
  ];

  return (
    <section ref={containerRef} className="relative py-32 bg-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-black to-red-900/20" />
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-orange-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ 
              opacity: Math.random()
            }}
            animate={{
              y: [0, Math.random() * -200],
              opacity: [null, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Rotating Circle Decoration */}
      <motion.div
        style={{ rotate }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-2 border-orange-500/20 rounded-full"
      />
      <motion.div
        style={{ rotate: useTransform(scrollYProgress, [0, 1], [360, 0]) }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border-2 border-red-500/20 rounded-full"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-block bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6"
          >
            By The Numbers
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-black text-white">
            <span className="block">Proven</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              Excellence
            </span>
          </h2>
        </motion.div>

        {/* Stats Grid - Unique Circular Layout */}
        <div className="relative h-[600px] md:h-[700px]">
          {stats.map((stat, index) => {
            const angle = (index * 90 - 45) * (Math.PI / 180);
            const radius = 280;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={inView ? { 
                  opacity: 1, 
                  scale: 1, 
                  rotate: 0,
                  x: x,
                  y: y
                } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring"
                }}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 360,
                  transition: { duration: 0.5 }
                }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <div className={`relative bg-gradient-to-br ${stat.color} p-8 rounded-3xl shadow-2xl w-48 h-48 flex flex-col items-center justify-center text-center group cursor-pointer`}>
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity`} />
                  
                  {/* Icon */}
                  <motion.div
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                    className="relative mb-3"
                  >
                    {(() => {
                      const Icon = stat.icon;
                      return <Icon className="w-12 h-12 text-white" />;
                    })()}
                  </motion.div>

                  {/* Number */}
                  <div className="relative text-5xl font-black text-white mb-2">
                    <AnimatedNumber end={stat.value} suffix={stat.suffix} />
                  </div>

                  {/* Label */}
                  <div className="relative text-sm font-semibold text-white/90 leading-tight">
                    {stat.label}
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-2 right-2 w-3 h-3 bg-white rounded-full opacity-50" />
                  <div className="absolute bottom-2 left-2 w-3 h-3 bg-white rounded-full opacity-50" />
                </div>
              </motion.div>
            );
          })}

          {/* Center Element */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={inView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 1, delay: 0.8, type: "spring" }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 rounded-full blur-2xl opacity-50"
              />
              <div className="relative bg-gray-900 border-4 border-orange-600 w-32 h-32 rounded-full flex items-center justify-center">
                <Flame className="w-16 h-16 text-orange-500" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
          className="text-center mt-12"
        >
          <p className="text-xl text-gray-400">
            <span className="text-orange-400 font-bold">Trusted by thousands</span> of homeowners since 2004
          </p>
        </motion.div>
      </div>
    </section>
  );
}
