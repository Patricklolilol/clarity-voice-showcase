import { FadeInUp, StaggerGroup, StaggerItem } from "./motion";

const facts = [
  { n: "0", label: "Local AI agencies on the French Riviera" },
  { n: "48h", label: "Setup time" },
  { n: "3", label: "Languages your agents speak" },
  { n: "200+", label: "Qualified prospects in your area" },
];

export const WhyKlora = () => {
  return (
    <section className="bg-bg-dark py-[120px] px-6">
      <div className="container mx-auto max-w-6xl">
        <FadeInUp>
          <p className="label-eyebrow text-accent">Why Klora</p>
        </FadeInUp>
        <FadeInUp delay={0.15}>
          <h2
            className="font-serif font-light text-white mt-6 leading-[1.1]"
            style={{ fontSize: "clamp(34px, 5vw, 48px)" }}
          >
            Local. Multilingual. The only one.
          </h2>
        </FadeInUp>
        <FadeInUp delay={0.3}>
          <p
            className="text-text-on-dark font-light mt-7"
            style={{ fontSize: 16, lineHeight: 1.8, maxWidth: 580 }}
          >
            We're the only AI agency physically present on the French Riviera.
            Our agents converse in French, English, and Spanish — a capability
            no national platform can match. And unlike SaaS providers, we're
            here on Monday morning when something goes wrong.
          </p>
        </FadeInUp>

        <div className="h-px bg-white/10 mt-16 mb-12" />

        <StaggerGroup className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {facts.map((f) => (
            <StaggerItem key={f.label}>
              <div
                className="font-serif font-light text-accent leading-none"
                style={{ fontSize: 48 }}
              >
                {f.n}
              </div>
              <p
                className="text-text-on-dark mt-3 font-light"
                style={{ fontSize: 12, lineHeight: 1.6 }}
              >
                {f.label}
              </p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
};
