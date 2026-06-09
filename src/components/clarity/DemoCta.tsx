import { FadeInUp } from "./motion";
import { PHONE_DISPLAY, PHONE_TEL } from "./constants";

export const DemoCta = () => {
  return (
    <section className="relative bg-background py-[140px] px-6 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.25] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, hsl(var(--accent)) 0%, transparent 55%)",
        }}
      />
      <div className="container mx-auto max-w-3xl text-center relative z-10">
        <FadeInUp>
          <h2
            className="font-serif font-light text-foreground leading-[1.05]"
            style={{ fontSize: "clamp(40px, 6vw, 64px)" }}
          >
            Don't take our word for it.
          </h2>
        </FadeInUp>
        <FadeInUp delay={0.15}>
          <p
            className="text-text-muted font-light mt-6 mx-auto"
            style={{ fontSize: 17, lineHeight: 1.7, maxWidth: 560 }}
          >
            Call this number right now. Our AI will pick up immediately.
            That's exactly what your customers would experience.
          </p>
        </FadeInUp>
        <FadeInUp delay={0.3}>
          <a
            href={`tel:${PHONE_TEL}`}
            className="block mt-12 text-accent hover:opacity-90 transition-opacity"
            style={{
              fontFamily: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace",
              fontSize: "clamp(32px, 5vw, 56px)",
              letterSpacing: "0.04em",
              fontWeight: 500,
            }}
          >
            {PHONE_DISPLAY}
          </a>
        </FadeInUp>
        <FadeInUp delay={0.45}>
          <p className="text-text-muted font-light mt-6" style={{ fontSize: 12 }}>
            Available 24/7 · No commitment · Takes 90 seconds
          </p>
        </FadeInUp>
      </div>
    </section>
  );
};
