import { FadeInUp, StaggerGroup, StaggerItem } from "./motion";

const features = [
  {
    title: "24/7 Inbound Reception",
    body: "Sophie answers every call instantly — evenings, weekends, public holidays. Zero calls go to voicemail.",
  },
  {
    title: "Live Calendar Booking",
    body: "Real-time availability check and appointment confirmation during the call. No double-bookings.",
  },
  {
    title: "Missed Call SMS Follow-Up",
    body: "Every unanswered call triggers an automatic SMS within 60 seconds with a direct booking link.",
  },
  {
    title: "Monthly Performance Report",
    body: "Calls handled, appointments booked, estimated revenue recovered. Delivered to your inbox monthly.",
  },
];

export const Features = () => {
  return (
    <section className="bg-background py-[120px] px-6">
      <div className="container mx-auto max-w-6xl">
        <FadeInUp>
          <p className="label-eyebrow text-accent">What We Deliver</p>
        </FadeInUp>
        <FadeInUp delay={0.12}>
          <h2
            className="font-serif font-light text-foreground mt-6 leading-[1.05]"
            style={{ fontSize: "clamp(34px, 5vw, 48px)", maxWidth: 720 }}
          >
            More than a voice. A complete front-office system.
          </h2>
        </FadeInUp>

        <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
          {features.map((f) => (
            <StaggerItem key={f.title}>
              <div
                className="relative p-9 h-full bg-bg-card border border-divider hover-lift"
                style={{ borderTop: "3px solid hsl(var(--accent))" }}
              >
                <h3
                  className="text-foreground font-medium"
                  style={{ fontSize: 18 }}
                >
                  {f.title}
                </h3>
                <p
                  className="text-text-muted font-light mt-3"
                  style={{ fontSize: 14, lineHeight: 1.7 }}
                >
                  {f.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
};
