import { FadeInUp, StaggerGroup, StaggerItem } from "./motion";

const cards = [
  {
    label: "Availability",
    title: "24/7, every day",
    body: "Sophie answers every call — evenings, weekends, and holidays included. No call ever drops to voicemail.",
    accent: true,
  },
  {
    title: "Instant appointment booking",
    body: "Sophie checks your calendar in real time and books appointments directly — no double bookings, no back-and-forth.",
  },
  {
    title: "Automatic SMS follow-up",
    body: "Every missed call triggers an SMS within 60 seconds with a booking link. Prospects who leave come back.",
  },
  {
    title: "Monthly performance report",
    body: "Calls handled, appointments booked, revenue recovered. A clear document, every month, that justifies your investment.",
  },
];

export const Solution = () => {
  return (
    <section className="bg-bg-soft py-[120px] px-6">
      <div className="container mx-auto max-w-6xl">
        <FadeInUp>
          <p className="label-eyebrow text-accent">The solution</p>
        </FadeInUp>
        <FadeInUp delay={0.15}>
          <h2
            className="font-serif font-light text-foreground mt-6 leading-[1.1]"
            style={{ fontSize: "clamp(34px, 5vw, 48px)" }}
          >
            Sophie answers. Always.
          </h2>
        </FadeInUp>
        <FadeInUp delay={0.3}>
          <p className="text-text-muted font-light mt-5" style={{ fontSize: 16, maxWidth: 560 }}>
            An AI receptionist configured for your business. Up and running in 48 hours.
          </p>
        </FadeInUp>

        <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {cards.map((c) => (
            <StaggerItem key={c.title}>
              <div
                className="bg-white border border-divider p-9 h-full transition-transform duration-300 hover:-translate-y-[3px] relative"
                style={{ borderRadius: 0 }}
              >
                {c.accent && (
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-accent" />
                )}
                {c.label && (
                  <p className="label-eyebrow text-text-muted mb-4">{c.label}</p>
                )}
                <h3
                  className="font-serif font-light text-foreground leading-tight"
                  style={{ fontSize: 28 }}
                >
                  {c.title}
                </h3>
                <p
                  className="text-text-muted font-light mt-4"
                  style={{ fontSize: 15, lineHeight: 1.7 }}
                >
                  {c.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
};
