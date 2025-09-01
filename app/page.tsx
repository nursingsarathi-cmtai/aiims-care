import { Metadata } from "next";
import HeroSection from "@/components/home/hero";
import AboutSection from "@/components/home/about-section";
import ServiceSection from "@/components/home/service-section";
import WhyChooseUs from "@/components/home/why-choose-us";
import BookingSection from "@/components/home/booking-section";
import FAQSection from "@/components/home/faq-section";
import CareSection from "@/components/home/care-section";
import Contact from "../components/home/contact-section";
import TestimonialsSection from "@/components/home/testimonials-section";
import CareerPage from "@/components/home/career-section"

export const metadata: Metadata = {
  title: "Nursing Sarathi - Best Home Nursing Services in Patna | 24/7 Home Care & Critical Care Nursing",
  description: "Get professional home nursing services in Patna. Expert home care, dialysis care, critical care, and medical support. 24/7 nursing assistance in Patna, Bihar. Book now!",
  keywords: "nursing service, nursing services, home nursing service, professional nursing service, 24/7 nursing service, emergency nursing service, ICU nursing service, post-surgery nursing service, elderly nursing service, pediatric nursing service, chronic illness nursing service, bedridden patient nursing service, routine medical nursing service, nursing service in Patna, Patna nursing service, nursing service near me, local nursing service in Patna, certified nursing service, qualified nursing service, trusted nursing service, affordable nursing service, skilled nursing service, benefits of nursing service, when to get nursing service, how to choose nursing service, cost of nursing service, nursing service vs hospital care, dialysis nursing service, critical care nursing service, medical nursing service, nursing sarathi service, home healthcare nursing service, patient care nursing service, medical support nursing service",
};

export default function Home() {
  return (
    <div>

      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <WhyChooseUs />
      <BookingSection />
      <FAQSection />
      <CareSection />
      <TestimonialsSection />
      <Contact />
      <CareerPage/>
    </div>
  );
}
