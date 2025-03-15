import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import Head from "next/head";
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
      <Head>
        {/* Favicon */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />

        {/* Standard Meta Tags */}
        <meta name="title" content="CapLock - 3D Printing & IoT Solutions" />
        <meta name="description" content="Discover premium 3D printing, IoT, and prototyping solutions at CapLock." />
        <meta name="keywords" content="3D printing, IoT solutions, prototyping, robotics, custom design, smart automation" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://caplock.in" />

        {/* Open Graph (Facebook, LinkedIn) */}
        <meta property="og:title" content="CapLock - Innovate with 3D Printing & IoT" />
        <meta property="og:description" content="Premium 3D printing, IoT, and automation solutions tailored for creators and businesses." />
        <meta property="og:url" content="https://caplock.in" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://caplock.in/favicon.ico" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CapLock - 3D Printing & IoT Solutions" />
        <meta name="twitter:description" content="Discover premium 3D printing, IoT, and prototyping solutions." />
        <meta name="twitter:site" content="@CaplockConnect" />
        <meta name="twitter:creator" content="@CaplockConnect" />
        <meta name="twitter:image" content="https://caplock.in/favicon.ico" />

        {/* Social Media Links */}
        <link rel="me" href="https://instagram.com/caplock.store" />
        <link rel="me" href="https://x.com/CaplockConnect" />
        <link rel="me" href="https://www.linkedin.com/in/caplock-store-0928b6356/" />

        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "CapLock",
              "url": "https://caplock.in",
              "logo": "https://caplock.in/favicon.ico",
              "description": "Discover premium 3D printing, IoT, and prototyping solutions at CapLock.",
              "sameAs": [
                "https://instagram.com/caplock.store",
                "https://x.com/CaplockConnect",
                "https://www.linkedin.com/in/caplock-store-0928b6356/",
              ],
            }),
          }}
        />
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ID}`}></script>
        <script
          dangerouslySetInnerHTML={
            {
              __html: `
              window.dataLayer = window.dataLayer || [];
            function gtag() {
              dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ID}',{
            page_path: window.location.pathname,});
            `,
            }
          }


        />


      </Head>


      <body>
        <Toaster />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
