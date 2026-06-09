import { FadeInUp, StaggerGroup, StaggerItem } from "./motion";
import { Check } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL } from "./constants";

const plans = [
  {
    name: "Standard",
    price: "€297",
    suffix: "/month",
    setup: "+ €200 one-time setup",
    features: [
      "AI receptionist — 24/7 inbound calls",
      "Up to 500 call minutes/month",
      "Live calendar booking",
      "Missed call SMS text-back (<60 seconds)",
      "FAQ handling (services, hours, pricing)",
      "Monthly performance report",
      "1 language of your choice (FR/EN/ES)",
      "Initial setup + 1 update/month",
    ],
    highlighted: false,
  },
  {
    name: "Advanced",
    price: "€597",
    suffix: "/month",
    setup: "+ €350 one-time setup",
    features: [
      "Everything in Standard, plus:",
      "Unlimited call minutes",
      "Multilingual agent (FR + EN + ES)",
      "Automated Google review requests",
      "Appointment reminder sequences (SMS + email)",
      "No-show re-engagement automation",
      "Lead nurturing sequence",
      "Two-way SMS inbox",
      "Website chat widget (AI-powered)",
      "Monthly 30-min strategy call",
      "Priority same-day support",
      "2 updates/month",
    ],
    highlighted: true,
  },
];

export const Pricing = () => {
  return (
    <section id="offres" className="bg-bg-soft py-[120px] px-6">
      <div className="container mx-auto max-w-5xl">
        <FadeInUp>
          <p className="label-eyebrow text-accent">Our Plans</p>
        </FadeInUp>
        <FadeInUp delay={0.15}>
          <h2
            className="font-serif font-light text-foreground mt-6 leading-[1.1]"
            style={{ fontSize: "clamp(34px, 5vw, 48px)" }}
          >
            Transparent pricing. No surprises.
          </h2>
        </FadeInUp>
        <FadeInUp delay={0.3}>
          <p className="text-text-muted font-light mt-5" style={{ fontSize: 15, maxWidth: 560 }}>
            Month-to-month. Cancel anytime. Operational in 48 hours.
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
                      style={{ fontSize: 9, letterSpacing: "0.15em", borderRadius: 2 }}
                    >
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <div
                  className="p-10 h-full flex flex-col border border-divider bg-background relative"
                  style={{ borderRadius: 2 }}
                >
                  <div
                    className={`absolute top-0 left-0 right-0 h-[3px] ${
                      hi ? "bg-accent" : "bg-divider"
                    }`}
                  />
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

                  <div className="h-px my-7 bg-divider" />

                  <ul className="space-y-3 flex-1">
                    {p.features.map((f) => (
                      <li
                        key={f}
                        className="flex gap-3 font-light text-foreground/85"
                        style={{ fontSize: 14, lineHeight: 1.6 }}
                      >
                        <Check size={16} className="text-accent shrink-0 mt-[3px]" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`tel:${PHONE_TEL}`}
                    className={`mt-8 text-center font-medium px-9 py-[14px] text-sm transition-colors ${
                      hi
                        ? "bg-accent text-accent-foreground hover:bg-accent/90"
                        : "border border-divider text-foreground hover:bg-white/5"
                    }`}
                    style={{ borderRadius: 2 }}
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
              Not sure which plan is right for you?{" "}
              <br className="sm:hidden" />
              Call our AI and we'll figure it out together.
            </p>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-block mt-4 text-accent font-medium hover:opacity-80 transition-opacity"
              style={{ fontSize: 14 }}
            >
              {PHONE_DISPLAY} →
            </a>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
};
