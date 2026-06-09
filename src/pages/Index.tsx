import { Nav } from "@/components/clarity/Nav";
import { Hero } from "@/components/clarity/Hero";
import { HowItWorks } from "@/components/clarity/HowItWorks";
import { Multilingual } from "@/components/clarity/Multilingual";
import { Pricing } from "@/components/clarity/Pricing";
import { DemoCta } from "@/components/clarity/DemoCta";
import { SocialProof } from "@/components/clarity/SocialProof";
import { Footer } from "@/components/clarity/Footer";

const Index = () => {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <HowItWorks />
      <Multilingual />
      <Pricing />
      <DemoCta />
      <SocialProof />
      <Footer />
    </main>
  );
};

export default Index;
