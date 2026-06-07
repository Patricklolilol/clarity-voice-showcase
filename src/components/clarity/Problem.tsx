import { FadeInUp, StaggerGroup, StaggerItem } from "./motion";

const stats = [
  {
    n: "62%",
    label: "Of calls missed",
    body: "On average, even during regular business hours.",
  },
  {
    n: "93%",
    label: "Never call back",
    body: "After voicemail, the prospect dials the next competitor.",
  },
  {
    n: "22×",
    label: "The average ROI",
    body: "For a dental practice, every euro invested returns twenty-two.",
  },
];

export const Problem = () => {
  return (
    <section id="approche" className="bg-background py-[120px] px-6">
      <div className="container mx-auto max-w-6xl">
        <FadeInUp>
          <p className="label-eyebrow text-accent">The problem</p>
        </FadeInUp>
        <FadeInUp delay={0.15}>
          <h2
            className="font-serif font-light text-foreground mt-6 leading-[1.1]"
            style={{ fontSize: "clamp(34px, 5vw, 48px)", maxWidth: 600 }}
          >
            Every unanswered call is a lost client.
          </h2>
        </FadeInUp>

        <div className="h-px bg-divider my-10" />

        <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {stats.map((s) => (
            <StaggerItem key={s.n}>
              <div
                className="font-serif font-light text-accent leading-none"
                style={{ fontSize: 72 }}
              >
                {s.n}
              </div>
              <div className="text-foreground font-medium mt-5" style={{ fontSize: 13 }}>
                {s.label}
              </div>
              <p className="text-text-muted mt-2 font-light" style={{ fontSize: 14, lineHeight: 1.6 }}>
                {s.body}
              </p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
};
