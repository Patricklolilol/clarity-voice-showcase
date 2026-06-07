import { FadeInUp, StaggerGroup, StaggerItem } from "./motion";

interface PricingProps {
  onDemoClick: () => void;
}

const plans = [
  {
    name: "Standard",
    price: "€197",
    suffix: "/month",
    target: "For paramedical practices",
    features: [
      "24/7 AI receptionist",
      "Up to 200 min/month",
      "Appointment booking + SMS follow-up",
      "Monthly report",
      "1 update per month",
    ],
  },
  {
    name: "Pro",
    price: "€347",
    suffix: "/month",
    target: "For dental & aesthetic clinics",
    features: [
      "Everything in Standard, plus:",
      "Up to 400 min/month",
      "Google reviews automation",
      "No-show SMS reminders",
      "Bi-monthly review",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    price: "€497–797",
    suffix: "/month",
    target: "For real estate, legal & luxury",
    features: [
      "Everything in Pro, plus:",
      "Unlimited minutes",
      "Multilingual agent EN/FR/ES",
      "CRM integration",
      "Weekly strategy call",
    ],
  },
];

export const Pricing = ({ onDemoClick }: PricingProps) => {
  return (
    <section id="offres" className="bg-background py-[120px] px-6">
      <div className="container mx-auto max-w-6xl">
        <FadeInUp>
          <p className="label-eyebrow text-accent">Our plans</p>
        </FadeInUp>
        <FadeInUp delay={0.15}>
          <h2
            className="font-serif font-light text-foreground mt-6 leading-[1.1]"
            style={{ fontSize: "clamp(32px, 4.5vw, 44px)" }}
          >
            Three plans. One outcome.
          </h2>
        </FadeInUp>
        <FadeInUp delay={0.3}>
          <p className="text-text-muted font-light mt-5" style={{ fontSize: 15, maxWidth: 560 }}>
            Priced on the value we create, not on what it costs us.
          </p>
        </FadeInUp>

        <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 items-stretch">
          {plans.map((p) => {
            const dark = p.highlighted;
            return (
              <StaggerItem key={p.name} className="relative">
                {p.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <span
                      className="bg-accent text-accent-foreground font-medium px-3 py-[6px]"
                      style={{ fontSize: 9, letterSpacing: "0.15em", borderRadius: 0 }}
                    >
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <div
                  className={`p-10 h-full flex flex-col border ${
                    dark
                      ? "bg-bg-dark border-bg-dark text-white"
                      : "bg-background border-divider"
                  }`}
                  style={{ borderRadius: 0 }}
                >
                  <p
                    className={`label-eyebrow ${dark ? "text-accent" : "text-text-muted"}`}
                  >
                    {p.name}
                  </p>
                  <div className="mt-5 flex items-baseline gap-1">
                    <span
                      className={`font-serif font-light leading-none ${
                        dark ? "text-white" : "text-foreground"
                      }`}
                      style={{ fontSize: 44 }}
                    >
                      {p.price}
                    </span>
                    <span
                      className={`text-sm font-light ${
                        dark ? "text-text-on-dark" : "text-text-muted"
                      }`}
                    >
                      {p.suffix}
                    </span>
                  </div>
                  <p
                    className={`mt-3 font-light ${
                      dark ? "text-text-on-dark" : "text-text-muted"
                    }`}
                    style={{ fontSize: 13 }}
                  >
                    {p.target}
                  </p>

                  <div
                    className={`h-px my-7 ${dark ? "bg-white/10" : "bg-divider"}`}
                  />

                  <ul className="space-y-3 flex-1">
                    {p.features.map((f) => (
                      <li
                        key={f}
                        className={`font-light ${
                          dark ? "text-white/85" : "text-foreground/80"
                        }`}
                        style={{ fontSize: 14, lineHeight: 1.6 }}
                      >
                        {f}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={onDemoClick}
                    className="mt-8 text-accent text-sm font-medium hover:opacity-80 transition-opacity self-start"
                  >
                    Book a demo →
                  </button>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>

        <FadeInUp delay={0.4}>
          <p
            className="text-text-muted text-center mt-12 font-light"
            style={{ fontSize: 11 }}
          >
            One-time setup fee · No commitment · Live in 48 hours
          </p>
        </FadeInUp>
      </div>
    </section>
  );
};
