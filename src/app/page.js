import AboutSection from "@/components/About";
import FaqSection from "@/components/Faq";
import HeroSection from "@/components/Home";
import ProductSection from "@/components/ProductSection";
import ShippingSection from "@/components/Shipping";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ProductSection />
      <ShippingSection />
      <FaqSection />
    </div>
  );
}
