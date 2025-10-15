"use client";

import { useState } from "react";
import { MessageCircle, Phone, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <>
      {/* Main Floating Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-orange-600 text-white p-4 rounded-full shadow-2xl hover:bg-orange-700 transition"
        >
          {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
        </button>

        {/* Action Buttons */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute bottom-20 right-0 flex flex-col gap-3"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                onClick={() => window.location.href = "tel:5551234567"}
                className="bg-green-600 text-white p-4 rounded-full shadow-xl hover:bg-green-700 transition flex items-center gap-2"
              >
                <Phone size={24} />
                <span className="text-sm font-medium">Call Us</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                onClick={() => window.location.href = "sms:5551234567"}
                className="bg-blue-600 text-white p-4 rounded-full shadow-xl hover:bg-blue-700 transition flex items-center gap-2"
              >
                <MessageCircle size={24} />
                <span className="text-sm font-medium">Text Us</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                onClick={() => setIsChatOpen(true)}
                className="bg-purple-600 text-white p-4 rounded-full shadow-xl hover:bg-purple-700 transition flex items-center gap-2"
              >
                <MessageCircle size={24} />
                <span className="text-sm font-medium">Chat</span>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-6 right-6 w-96 h-[500px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col"
          >
            <div className="bg-orange-600 text-white p-4 rounded-t-2xl flex justify-between items-center">
              <h3 className="font-semibold">Chat with Us</h3>
              <button onClick={() => setIsChatOpen(false)}>
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 p-4 overflow-y-auto">
              <div className="bg-gray-100 p-3 rounded-lg mb-4">
                <p className="text-sm">Hi! How can we help you today?</p>
              </div>
            </div>

            <div className="p-4 border-t">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-orange-600"
                />
                <button className="bg-orange-600 text-white p-2 rounded-full hover:bg-orange-700">
                  <Send size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
