import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FadeInUp } from "./motion";
import { PHONE_TEL } from "./constants";

const stats = [
  "62% of calls go unanswered",
  "93% of callers never call back",
  "€450 lost per missed call on average",
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
          className="absolute inset-0 opacity-[0.18]"
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
        <div className="container mx-auto max-w-4xl flex flex-col items-center text-center pt-24 pb-16">
          <FadeInUp>
            <p className="label-eyebrow text-accent">AI Voice Agency</p>
          </FadeInUp>

          <FadeInUp delay={0.15}>
            <h1
              className="font-serif font-light text-foreground mt-6 leading-[1]"
              style={{ fontSize: "clamp(52px, 7vw, 88px)" }}
            >
              Your business never misses a call.
            </h1>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <p
              className="font-sans font-light text-text-muted mt-8 mx-auto"
              style={{ fontSize: 16, lineHeight: 1.7, maxWidth: 620 }}
            >
              Clarity installs an AI receptionist that answers every inbound call,
              books appointments, and recovers the revenue you're losing right now —
              24/7, in English, French, and Spanish.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.45}>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-12">
              <a
                href={`tel:${PHONE_TEL}`}
                className="bg-accent text-accent-foreground font-medium px-9 py-[14px] text-sm hover:bg-accent/90 transition-colors"
                style={{ borderRadius: 2 }}
              >
                Call Our AI Now →
              </a>
              <button
                onClick={() => scrollTo("#offres")}
                className="bg-transparent text-foreground font-medium px-9 py-[14px] text-sm border hover:bg-white/5 transition-colors"
                style={{ borderRadius: 2, borderColor: "rgba(255,255,255,0.25)" }}
              >
                See Our Plans
              </button>
            </div>
          </FadeInUp>
        </div>
      </div>

      <div className="relative z-10 pb-10 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="h-px bg-white/10 mb-6" />
          <FadeInUp delay={0.6}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-0">
              {stats.map((s, i) => (
                <div key={s} className="flex items-center">
                  <span className="text-text-muted text-xs font-light px-6">{s}</span>
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
