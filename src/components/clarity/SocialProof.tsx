import { FadeInUp, StaggerGroup, StaggerItem } from "./motion";

const metrics = [
  { n: "38%", title: "fewer no-shows", body: "Average across healthcare clients" },
  { n: "Day 1", title: "revenue recovery", body: "Typically within first week" },
  { n: "< 1", title: "ring response time", body: "Every call, every time" },
];

export const SocialProof = () => {
  return (
    <section className="bg-bg-soft py-[120px] px-6">
      <div className="container mx-auto max-w-6xl">
        <FadeInUp>
          <p className="label-eyebrow text-accent">Trusted By</p>
        </FadeInUp>
        <FadeInUp delay={0.15}>
          <h2
            className="font-serif font-light text-foreground mt-6 leading-[1.1]"
            style={{ fontSize: "clamp(34px, 5vw, 48px)" }}
          >
            Results our clients actually see
          </h2>
        </FadeInUp>

        <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {metrics.map((m) => (
            <StaggerItem key={m.title}>
              <div
                className="p-9 h-full border border-divider bg-background"
                style={{ borderRadius: 2 }}
              >
                <div
                  className="font-serif font-light text-accent leading-none"
                  style={{ fontSize: 56 }}
                >
                  {m.n}
                </div>
                <p className="text-foreground font-medium mt-5" style={{ fontSize: 15 }}>
                  {m.title}
                </p>
                <p className="text-text-muted font-light mt-2" style={{ fontSize: 13 }}>
                  {m.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <FadeInUp delay={0.4}>
          <div
            className="mt-10 p-10 border border-dashed border-divider text-center"
            style={{ borderRadius: 2 }}
          >
            <p className="text-text-muted font-light italic" style={{ fontSize: 14 }}>
              Client testimonial coming soon
            </p>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
};
