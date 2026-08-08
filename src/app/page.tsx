import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/home/HeroSection";
import StatsBar from "../components/home/StatsBar";
import MadlenBanner from "../components/home/MadlenBanner";
import BurslulukBanner from "../components/home/BurslulukBanner";
import YaziliHazirlikBanner from "../components/home/YaziliHazirlikBanner";
import ServicesGrid from "../components/home/ServicesGrid";
import DenemeKulubu from "../components/home/DenemeKulubu";
import GoogleReviews from "../components/home/GoogleReviews";
import NetSimulator from "../components/home/NetSimulator";
import CountdownSection from "../components/home/CountdownSection";
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
      <BurslulukBanner />
      <MadlenBanner />
      <ServicesGrid />
      <DenemeKulubu />
      <YaziliHazirlikBanner />
      <GoogleReviews />
      <NetSimulator />
      <CountdownSection />
      <FaqSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
