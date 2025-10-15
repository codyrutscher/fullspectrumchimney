"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-orange-600 mb-4">Elite Chimney</h3>
            <p className="text-gray-400">
              Professional chimney services with over 20 years of experience.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-orange-600">About Us</Link></li>
              <li><Link href="/services/cleaning" className="text-gray-400 hover:text-orange-600">Services</Link></li>
              <li><Link href="/gallery" className="text-gray-400 hover:text-orange-600">Gallery</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-orange-600">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services/cleaning" className="text-gray-400 hover:text-orange-600">Chimney Cleaning</Link></li>
              <li><Link href="/services/inspection" className="text-gray-400 hover:text-orange-600">Inspection</Link></li>
              <li><Link href="/services/repair" className="text-gray-400 hover:text-orange-600">Repair</Link></li>
              <li><Link href="/services/installation" className="text-gray-400 hover:text-orange-600">Installation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="w-4 h-4" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <span>info@elitechimney.com</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>123 Main St, City, ST 12345</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-orange-600"><Facebook /></a>
              <a href="#" className="text-gray-400 hover:text-orange-600"><Instagram /></a>
              <a href="#" className="text-gray-400 hover:text-orange-600"><Twitter /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Elite Chimney Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
