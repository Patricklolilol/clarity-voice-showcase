import { FadeInUp, StaggerGroup, StaggerItem } from "./motion";

const steps = [
  {
    n: 1,
    title: "We configure your agent",
    body: "We build your AI receptionist with your services, hours, pricing, and FAQs. Completely customized to your business.",
  },
  {
    n: 2,
    title: "You forward your number",
    body: "One step on your phone provider's website. Takes two minutes. Your calls now route through your AI receptionist.",
  },
  {
    n: 3,
    title: "Sophie handles the rest",
    body: "Every call answered instantly. Every appointment booked. Every missed call followed up by SMS. You get a monthly report showing exactly how much revenue was recovered.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="how" className="bg-bg-soft py-[120px] px-6">
      <div className="container mx-auto max-w-6xl">
        <FadeInUp>
          <p className="label-eyebrow text-accent">How It Works</p>
        </FadeInUp>
        <FadeInUp delay={0.15}>
          <h2
            className="font-serif font-light text-foreground mt-6 leading-[1.1]"
            style={{ fontSize: "clamp(34px, 5vw, 48px)", maxWidth: 760 }}
          >
            Live in 48 hours. No technical knowledge needed.
          </h2>
        </FadeInUp>

        <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
          {steps.map((s) => (
            <StaggerItem key={s.n}>
              <div
                className="w-12 h-12 rounded-full bg-accent/15 border border-accent flex items-center justify-center font-serif font-light text-accent"
                style={{ fontSize: 20 }}
              >
                {s.n}
              </div>
              <h3
                className="text-foreground font-medium mt-6"
                style={{ fontSize: 18 }}
              >
                {s.title}
              </h3>
              <p
                className="text-text-muted font-light mt-3"
                style={{ fontSize: 14, lineHeight: 1.7 }}
              >
                {s.body}
              </p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
};
