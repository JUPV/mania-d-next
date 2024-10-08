
import CardapioSection from "@/components/CardapioSection";
import FeedbackSection from "@/components/FeedbackSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HistoriaSection from "@/components/HistoriaSection";

export default function Home() {
  return (
    <div className="dark">
      <div className=" bg-cover bg-center bg-no-repeat bg-banner h-screen">
        <div className="bg-black bg-opacity-50 h-full">
          <Header />
          <HeroSection />
        </div>
      </div>
      <HistoriaSection />
      <CardapioSection />
      <FeedbackSection />
      <Footer />
    </div>
  );
}
