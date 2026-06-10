import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FadeInUp } from "./motion";
import { PhoneWidget } from "./PhoneWidget";

const stats = [
  "62% of calls go unanswered during business hours",
  "93% of callers never call back after voicemail",
  "€450 average revenue lost per missed call",
];

export const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-screen w-full overflow-hidden bg-background flex flex-col"
    >
      <motion.div style={{ y: bgY }} aria-hidden className="absolute inset-0 -z-0">
        <div
          className="absolute inset-0 opacity-[0.22]"
          style={{
            background:
              "radial-gradient(ellipse at center, hsl(var(--accent)) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)",
            backgroundSize: "48px 48px",
          }}
        />
      </motion.div>

      <div className="relative z-10 flex-1 flex items-center justify-center px-6">
        <div className="container mx-auto max-w-4xl flex flex-col items-center text-center pt-28 pb-12">
          <FadeInUp>
            <p className="label-eyebrow text-accent">AI Voice Receptionist</p>
          </FadeInUp>

          <FadeInUp delay={0.12}>
            <h1
              className="font-serif font-light text-foreground mt-6 leading-[1]"
              style={{ fontSize: "clamp(44px, 7vw, 84px)" }}
            >
              Your business answers every call.
            </h1>
          </FadeInUp>

          <FadeInUp delay={0.24}>
            <p
              className="font-sans font-light text-text-muted mt-7 mx-auto"
              style={{ fontSize: 16, lineHeight: 1.75, maxWidth: 520 }}
            >
              Klora installs an AI receptionist that picks up instantly, books
              appointments in your calendar, and follows up with every missed caller —
              24/7, in English, French, and Spanish.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.36}>
            <div className="mt-10 flex justify-center">
              <PhoneWidget />
            </div>
          </FadeInUp>

          <FadeInUp delay={0.48}>
            <button
              onClick={() => scrollTo("#contact")}
              className="mt-6 text-text-muted underline underline-offset-4 hover:text-foreground transition-colors"
              style={{ fontSize: 12 }}
            >
              Or book a 15-minute call →
            </button>
          </FadeInUp>
        </div>
      </div>

      <div className="relative z-10 pb-10 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="h-px bg-white/10 mb-6" />
          <FadeInUp delay={0.6}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-0">
              {stats.map((s, i) => (
                <div key={s} className="flex items-center">
                  <span className="text-text-muted text-[11px] font-light px-6 text-center">{s}</span>
                  {i < stats.length - 1 && (
                    <span className="hidden sm:block w-px h-3 bg-white/15" />
                  )}
                </div>
              ))}
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
};
