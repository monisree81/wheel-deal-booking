import { Navbar } from "@/components/ui/navbar";
import { HeroSection } from "@/components/hero-section";
import { FeaturedCars } from "@/components/featured-cars";
import { FeaturesSection } from "@/components/features-section";
import { Footer } from "@/components/footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturedCars />
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default Index;
