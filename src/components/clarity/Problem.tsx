import { FadeInUp, StaggerGroup, StaggerItem } from "./motion";

const stats = [
  { n: "62%", body: "of calls are missed during business hours" },
  { n: "93%", body: "of callers never call back after reaching voicemail" },
  { n: "22×", body: "average ROI for our clients in the first month" },
];

export const Problem = () => {
  return (
    <section className="bg-background py-[120px] px-6">
      <div className="container mx-auto max-w-6xl">
        <FadeInUp>
          <p className="label-eyebrow text-accent">The Problem</p>
        </FadeInUp>
        <FadeInUp delay={0.12}>
          <h2
            className="font-serif font-light text-foreground mt-6 leading-[1.05]"
            style={{ fontSize: "clamp(34px, 5vw, 48px)", maxWidth: 720 }}
          >
            Every missed call is a missed client.
          </h2>
        </FadeInUp>

        <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
          {stats.map((s) => (
            <StaggerItem key={s.n}>
              <div
                className="p-9 h-full border border-divider bg-bg-card hover-lift"
              >
                <div
                  className="font-serif font-light text-accent leading-none"
                  style={{ fontSize: 64 }}
                >
                  {s.n}
                </div>
                <p
                  className="text-text-muted font-light mt-5"
                  style={{ fontSize: 13, lineHeight: 1.6 }}
                >
                  {s.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <FadeInUp delay={0.4}>
          <div
            className="mt-10 p-8 bg-bg-soft"
            style={{ borderLeft: "3px solid hsl(var(--accent))" }}
          >
            <p
              className="text-foreground font-light"
              style={{ fontSize: 17, lineHeight: 1.7 }}
            >
              A dental clinic missing 3 calls per day at €150/appointment loses
              <span className="text-accent"> €135,000/year</span>. Klora costs
              <span className="text-accent"> €297/month</span>.
            </p>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
};
