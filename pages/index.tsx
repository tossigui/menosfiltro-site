import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import ProductsSection from "@/components/ProductsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <BenefitsSection />
      <ProductsSection />
      <Footer />
    </div>
  );
};

export default Index;
