import { FadeInUp } from "./motion";
import { CONTACT_EMAIL, PHONE_DISPLAY, PHONE_TEL } from "./constants";

export const DemoCta = () => {
  return (
    <section
      id="contact"
      className="relative py-[140px] px-6 overflow-hidden"
      style={{ background: "hsl(var(--bg-card))" }}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.18] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, hsl(var(--accent)) 0%, transparent 55%)",
        }}
      />
      <div className="container mx-auto max-w-3xl text-center relative z-10">
        <FadeInUp>
          <h2
            className="font-serif font-light text-foreground leading-[1.05]"
            style={{ fontSize: "clamp(40px, 6vw, 52px)" }}
          >
            Don't take our word for it.
          </h2>
        </FadeInUp>
        <FadeInUp delay={0.12}>
          <p
            className="text-text-muted font-light mt-6 mx-auto"
            style={{ fontSize: 18, lineHeight: 1.7, maxWidth: 560 }}
          >
            Call this number right now. Klora's AI picks up on the first ring.
          </p>
        </FadeInUp>
        <FadeInUp delay={0.24}>
          <div className="mt-12 flex justify-center">
            <div
              className="pulse-ring inline-block"
              style={{
                padding: "28px 44px",
                border: "1px solid hsl(var(--accent) / 0.6)",
                borderRadius: 12,
                background: "hsl(var(--bg-dark) / 0.5)",
              }}
            >
              <a
                href={`tel:${PHONE_TEL}`}
                className="block text-accent hover:text-accent-light transition-colors"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "clamp(32px, 5vw, 56px)",
                  letterSpacing: "0.04em",
                  fontWeight: 300,
                  lineHeight: 1.1,
                }}
              >
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </FadeInUp>
        <FadeInUp delay={0.36}>
          <p className="text-text-muted font-light mt-6" style={{ fontSize: 12 }}>
            Available 24/7 · 90 seconds · No commitment
          </p>
        </FadeInUp>
        <FadeInUp delay={0.48}>
          <p className="mt-4" style={{ fontSize: 13 }}>
            <span className="text-text-muted font-light">Prefer email? </span>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-accent hover:text-accent-light transition-colors"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </FadeInUp>
      </div>
    </section>
  );
};
