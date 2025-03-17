'use client'
import AboutSection from "@/components/About";
import FaqSection from "@/components/Faq";
import HeroSection, { IncubationSection } from "@/components/Home";
import ProductSection from "@/components/ProductSection";
import RecentActivity from "@/components/RecentActivity";
import ShippingSection from "@/components/Shipping";
import { usePathname } from "next/navigation";
export default function Home() {
  const path = usePathname()
  const page = path.split('/').pop()

  // Map paths to page titles
  const pageTitles = {
    about: "About Us - CapLock",
    contact: "Contact Us - CapLock",
    faq: "FAQ - CapLock",
    policy: "Privacy Policy - CapLock",
    products: "Our Products - CapLock"
  }

  useEffect(() => {
    if (pageTitles[page]) {
      document.title = pageTitles[page]
    } else {
      document.title = "CapLock - 3D Printing & IoT Solutions"
    }
  }, [page])
  return (
    <div>
      <HeroSection />
      <RecentActivity />
      <IncubationSection />
      <AboutSection />
      <ProductSection />
      <ShippingSection />
      <FaqSection />
    </div>
  );
}
