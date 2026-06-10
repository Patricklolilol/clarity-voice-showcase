import { Nav } from "@/components/clarity/Nav";
import { Hero } from "@/components/clarity/Hero";
import { SocialProof } from "@/components/clarity/SocialProof";
import { Problem } from "@/components/clarity/Problem";
import { HowItWorks } from "@/components/clarity/HowItWorks";
import { Features } from "@/components/clarity/Features";
import { Multilingual } from "@/components/clarity/Multilingual";
import { Calculator } from "@/components/clarity/Calculator";
import { Pricing } from "@/components/clarity/Pricing";
import { Faq } from "@/components/clarity/Faq";
import { DemoCta } from "@/components/clarity/DemoCta";
import { Footer } from "@/components/clarity/Footer";

const Index = () => {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <SocialProof />
      <Problem />
      <HowItWorks />
      <Features />
      <Multilingual />
      <Calculator />
      <Pricing />
      <Faq />
      <DemoCta />
      <Footer />
    </main>
  );
};

export default Index;
