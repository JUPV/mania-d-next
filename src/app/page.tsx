
import CardapioSection from "@/components/CardapioSection";
import FeedbackSection from "@/components/FeedbackSection";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HistoriaSection from "@/components/HistoriaSection";

export default function Home() {
  return (
    <div className="dark">
      <div className="bg-cover bg-center bg-no-repeat bg-banner">
        <Header />
        <HeroSection />
      </div>
      <HistoriaSection />
      <CardapioSection />
      <FeedbackSection />
    </div>
  );
}
