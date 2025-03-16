"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AboutPage from "@/components/AboutPage";
import ContactPage from "@/components/ContactPage";
import FaqPage from "@/components/FAQPage";
import PolicyPage from "@/components/Policy";
import ProductsPage from "@/components/ProductPage";
export default function Page() {
  const path = usePathname();
  const page = path.split("/").pop();
  // Map paths to page titles
  const pageTitles = {
    about: "About Us - CapLock",
    contact: "Contact Us - CapLock",
    faq: "FAQ - CapLock",
    policy: "Privacy Policy - CapLock",
    products: "Our Products - CapLock",
  };
  useEffect(() => {
    if (pageTitles[page]) {
      document.title = pageTitles[page];
    } else {
      document.title = "CapLock - 3D Printing & IoT Solutions";
    }
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "CapLock",
      "url": "https://caplock.in",
      "logo": "https://caplock.in/favicon.ico",
      "description": "Discover premium 3D printing, IoT, and prototyping solutions at CapLock.",
      "sameAs": [
        "https://instagram.com/caplock.store",
        "https://x.com/CaplockConnect",
        "https://www.linkedin.com/in/caplock-store-0928b6356/"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Vidisha",
        "addressCountry": "India"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9752133459",
        "contactType": "Customer Service",
        "areaServed": "IN",
        "availableLanguage": "English"
      }
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, [page]);

  return (
    <div>
      {page === "about" && <AboutPage />}
      {page === "contact" && <ContactPage />}
      {page === "faq" && <FaqPage />}
      {page === "policy" && <PolicyPage />}
      {page === "products" && <ProductsPage />}
    </div>
  );
}
