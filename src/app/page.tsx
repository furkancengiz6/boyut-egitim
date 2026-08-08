import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/home/HeroSection";
import StatsBar from "../components/home/StatsBar";
import MadlenShowcase from "../components/home/MadlenShowcase";
import ServicesGrid from "../components/home/ServicesGrid";
import DenemeKulubu from "../components/home/DenemeKulubu";
import NetSimulator from "../components/home/NetSimulator";
import CountdownSection from "../components/home/CountdownSection";
import Testimonials from "../components/home/Testimonials";
import FaqSection from "../components/home/FaqSection";
import WhatsAppButton from "../components/ui/WhatsAppButton";
import InfiniteMarquee from "../components/ui/InfiniteMarquee";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <InfiniteMarquee />
      <StatsBar />
      <MadlenShowcase />
      <ServicesGrid />
      <DenemeKulubu />
      <NetSimulator />
      <CountdownSection />
      <Testimonials />
      <FaqSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
