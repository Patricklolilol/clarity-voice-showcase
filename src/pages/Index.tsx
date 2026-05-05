import { useState } from "react";
import { Nav } from "@/components/clarity/Nav";
import { Hero } from "@/components/clarity/Hero";
import { Problem } from "@/components/clarity/Problem";
import { Solution } from "@/components/clarity/Solution";
import { Pricing } from "@/components/clarity/Pricing";
import { WhyClarity } from "@/components/clarity/WhyClarity";
import { CtaFooter } from "@/components/clarity/CtaFooter";
import { DemoModal } from "@/components/clarity/DemoModal";

const Index = () => {
  const [demoOpen, setDemoOpen] = useState(false);
  const openDemo = () => setDemoOpen(true);

  return (
    <main className="bg-background text-foreground">
      <Nav onDemoClick={openDemo} />
      <Hero onDemoClick={openDemo} />
      <Problem />
      <Solution />
      <Pricing onDemoClick={openDemo} />
      <WhyClarity />
      <CtaFooter onDemoClick={openDemo} />
      <DemoModal open={demoOpen} onOpenChange={setDemoOpen} />
    </main>
  );
};

export default Index;
