"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    { name: "Chimney Cleaning", href: "/services/cleaning" },
    { name: "Chimney Inspection", href: "/services/inspection" },
    { name: "Chimney Repair", href: "/services/repair" },
    { name: "Chimney Installation", href: "/services/installation" },
    { name: "Fireplace Services", href: "/services/fireplace" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-orange-600">
            Elite Chimney
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-orange-600 transition">
              Home
            </Link>
            <Link href="/about" className="hover:text-orange-600 transition">
              About
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center hover:text-orange-600 transition">
                Services <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-white shadow-xl rounded-lg py-2"
                  >
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-4 py-2 hover:bg-orange-50 hover:text-orange-600 transition"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link href="/gallery" className="hover:text-orange-600 transition">
              Gallery
            </Link>
            <Link href="/contact" className="hover:text-orange-600 transition">
              Contact
            </Link>
            <Link
              href="/booking"
              className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4"
            >
              <div className="flex flex-col space-y-4">
                <Link href="/" className="hover:text-orange-600">
                  Home
                </Link>
                <Link href="/about" className="hover:text-orange-600">
                  About
                </Link>
                <div className="space-y-2">
                  <p className="font-semibold">Services</p>
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block pl-4 hover:text-orange-600"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
                <Link href="/gallery" className="hover:text-orange-600">
                  Gallery
                </Link>
                <Link href="/contact" className="hover:text-orange-600">
                  Contact
                </Link>
                <Link
                  href="/booking"
                  className="bg-orange-600 text-white px-6 py-2 rounded-full text-center"
                >
                  Book Now
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
