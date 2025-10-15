"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Calendar, Clock, User, Mail, Phone, Home, MessageSquare } from "lucide-react";

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking submitted:", formData);
    alert("Booking request submitted! We'll confirm your appointment soon.");
  };

  return (
    <main className="min-h-screen pt-24">
      <section className="py-20 bg-gradient-to-br from-orange-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Schedule Your Service
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Book your appointment online - it's quick and easy
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 p-8 md:p-12 rounded-2xl shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold mb-2">
                    <User className="w-4 h-4" /> Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-orange-600 focus:outline-none"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold mb-2">
                    <Mail className="w-4 h-4" /> Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-orange-600 focus:outline-none"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold mb-2">
                    <Phone className="w-4 h-4" /> Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-orange-600 focus:outline-none"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold mb-2">
                    <Home className="w-4 h-4" /> Service Address *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-orange-600 focus:outline-none"
                    placeholder="123 Main St"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-sm font-semibold mb-2">Service Type *</label>
                <select
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-orange-600 focus:outline-none"
                >
                  <option value="">Select a service</option>
                  <option value="cleaning">Chimney Cleaning - $199</option>
                  <option value="inspection">Chimney Inspection - $149</option>
                  <option value="repair">Chimney Repair - Quote Required</option>
                  <option value="installation">Chimney Installation - Quote Required</option>
                  <option value="fireplace">Fireplace Services - Quote Required</option>
                </select>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold mb-2">
                    <Calendar className="w-4 h-4" /> Preferred Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-orange-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold mb-2">
                    <Clock className="w-4 h-4" /> Preferred Time *
                  </label>
                  <select
                    required
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-orange-600 focus:outline-none"
                  >
                    <option value="">Select time</option>
                    <option value="8am">8:00 AM - 10:00 AM</option>
                    <option value="10am">10:00 AM - 12:00 PM</option>
                    <option value="12pm">12:00 PM - 2:00 PM</option>
                    <option value="2pm">2:00 PM - 4:00 PM</option>
                    <option value="4pm">4:00 PM - 6:00 PM</option>
                  </select>
                </div>
              </div>

              {/* Additional Notes */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold mb-2">
                  <MessageSquare className="w-4 h-4" /> Additional Notes
                </label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-orange-600 focus:outline-none"
                  placeholder="Any specific concerns or requirements?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition transform hover:scale-105"
              >
                Schedule Appointment
              </button>

              <p className="text-sm text-gray-600 text-center">
                By submitting this form, you agree to our terms and conditions. We'll contact you to confirm your appointment.
              </p>
            </form>
          </motion.div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-orange-50 p-6 rounded-xl text-center">
              <h3 className="font-bold text-lg mb-2">Same-Day Service</h3>
              <p className="text-gray-600 text-sm">Available for urgent requests</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-xl text-center">
              <h3 className="font-bold text-lg mb-2">Free Estimates</h3>
              <p className="text-gray-600 text-sm">No obligation quotes</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-xl text-center">
              <h3 className="font-bold text-lg mb-2">Satisfaction Guaranteed</h3>
              <p className="text-gray-600 text-sm">100% quality assurance</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
