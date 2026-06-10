import { FadeInUp, StaggerGroup, StaggerItem } from "./motion";
import { Check } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL } from "./constants";

const plans = [
  {
    name: "Standard",
    price: "€297",
    suffix: "/month",
    setup: "+ €200 one-time setup",
    audience: "For: home services, paramedical, small practices",
    features: [
      "AI receptionist — 24/7 answering",
      "Up to 500 call minutes/month",
      "Live calendar booking",
      "Missed call SMS (<60 seconds)",
      "FAQ handling (services, hours, pricing)",
      "Monthly performance report",
      "1 language (EN, FR, or ES)",
      "Initial setup + 1 update/month",
    ],
    highlighted: false,
  },
  {
    name: "Advanced",
    price: "€597",
    suffix: "/month",
    setup: "+ €350 one-time setup",
    audience: "For: real estate, legal, aesthetics, luxury services",
    features: [
      "Everything in Standard, plus:",
      "Unlimited call minutes",
      "Multilingual agent (EN + FR + ES)",
      "Automated Google review requests",
      "Appointment reminders (SMS + email)",
      "No-show re-engagement automation",
      "Lead nurturing sequences",
      "Two-way SMS inbox",
      "Website chat widget (AI-powered)",
      "Monthly 30-min strategy call",
      "Priority same-day support",
    ],
    highlighted: true,
  },
];

export const Pricing = () => {
  return (
    <section id="offres" className="bg-bg-soft py-[120px] px-6">
      <div className="container mx-auto max-w-5xl">
        <FadeInUp>
          <p className="label-eyebrow text-accent">Pricing</p>
        </FadeInUp>
        <FadeInUp delay={0.12}>
          <h2
            className="font-serif font-light text-foreground mt-6 leading-[1.05]"
            style={{ fontSize: "clamp(34px, 5vw, 48px)" }}
          >
            Transparent pricing. Month-to-month. No surprises.
          </h2>
        </FadeInUp>
        <FadeInUp delay={0.24}>
          <p
            className="text-text-muted font-light mt-5"
            style={{ fontSize: 15, maxWidth: 560 }}
          >
            Setup in 48 hours. Cancel anytime.
          </p>
        </FadeInUp>

        <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 items-stretch">
          {plans.map((p) => {
            const hi = p.highlighted;
            return (
              <StaggerItem key={p.name} className="relative">
                {hi && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <span
                      className="bg-accent text-accent-foreground font-medium px-3 py-[6px]"
                      style={{ fontSize: 9, letterSpacing: "0.18em", borderRadius: 999 }}
                    >
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <div
                  className={`p-10 h-full flex flex-col bg-bg-card hover-lift ${
                    hi ? "border-2 border-accent" : "border border-divider"
                  }`}
                >
                  <p className="label-eyebrow text-text-muted">{p.name}</p>
                  <div className="mt-5 flex items-baseline gap-1">
                    <span
                      className="font-serif font-light leading-none text-foreground"
                      style={{ fontSize: 48 }}
                    >
                      {p.price}
                    </span>
                    <span className="text-sm font-light text-text-muted">{p.suffix}</span>
                  </div>
                  <p className="mt-3 font-light text-text-muted" style={{ fontSize: 12 }}>
                    {p.setup}
                  </p>
                  <p className="mt-2 font-light text-text-muted italic" style={{ fontSize: 12 }}>
                    {p.audience}
                  </p>

                  <div className="h-px my-7 bg-divider" />

                  <ul className="space-y-3 flex-1">
                    {p.features.map((f) => (
                      <li
                        key={f}
                        className="flex gap-3 font-light text-foreground/90"
                        style={{ fontSize: 14, lineHeight: 1.6 }}
                      >
                        <Check size={16} className="text-accent shrink-0 mt-[3px]" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`tel:${PHONE_TEL}`}
                    className={`mt-8 text-center font-medium px-9 py-[14px] text-sm hover-lift ${
                      hi
                        ? "bg-accent text-accent-foreground hover:bg-accent-light"
                        : "border border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-colors"
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>

        <FadeInUp delay={0.4}>
          <div className="text-center mt-14">
            <p className="text-text-muted font-light" style={{ fontSize: 14 }}>
              Not sure which plan fits your business?
              <br />
              Call our AI now and we'll figure it out:
            </p>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-block mt-3 text-accent font-medium hover:text-accent-light transition-colors"
              style={{ fontSize: 15, fontFamily: "'JetBrains Mono', monospace" }}
            >
              {PHONE_DISPLAY}
            </a>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
};
