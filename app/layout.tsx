import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FloatingWidget from "@/components/FloatingWidget";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elite Chimney Services - Professional Chimney Care",
  description: "Professional chimney cleaning, inspection, and repair services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <FloatingWidget />
      </body>
    </html>
  );
}
