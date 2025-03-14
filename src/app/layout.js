import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "CapLock - 3D Printing & IoT Solutions",
  description: "Discover premium 3D printing, IoT, and prototyping solutions at CapLock. Get custom designs, smart automation, and advanced robotics.",
  keywords: "3D printing, IoT solutions, prototyping, robotics, custom design, smart automation",
  authors: [{ name: "CapLock Team", url: "https://caplock.in" }],
  openGraph: {
    title: "CapLock - Innovate with 3D Printing & IoT",
    description: "Premium 3D printing, IoT, and automation solutions tailored for creators and businesses.",
    url: "https://caplock.in",
    type: "website",

  },

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
