import { Navbar } from "@/components/ui/navbar";
import { HeroSection } from "@/components/hero-section";
import { FeaturedCars } from "@/components/featured-cars";
import { FeaturesSection } from "@/components/features-section";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturedCars />
      <FeaturesSection />
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
