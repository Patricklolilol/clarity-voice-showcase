import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FadeInUp } from "./motion";

interface HeroProps {
  onDemoClick: () => void;
}

const stats = [
  "62% d'appels manqués",
  "93% ne rappellent pas",
  "€450 perdu par appel",
];

export const Hero = ({ onDemoClick }: HeroProps) => {
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
      className="relative min-h-screen w-full overflow-hidden bg-bg-dark flex flex-col"
    >
      {/* Parallax background layer — subtle radial vignette */}
      <motion.div
        style={{ y: bgY }}
        aria-hidden
        className="absolute inset-0 -z-0"
      >
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            background:
              "radial-gradient(ellipse at center, hsl(var(--accent)) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)",
            backgroundSize: "48px 48px",
          }}
        />
      </motion.div>

      <div className="relative z-10 flex-1 flex items-center justify-center px-6">
        <div className="container mx-auto max-w-4xl flex flex-col items-center text-center pt-24 pb-16">
          <FadeInUp>
            <p className="label-eyebrow text-accent" style={{ fontSize: 10, letterSpacing: "0.18em" }}>
              Nice · Côte d'Azur
            </p>
          </FadeInUp>

          <FadeInUp delay={0.15}>
            <h1
              className="font-serif font-light text-white mt-6 leading-[1]"
              style={{ fontSize: "clamp(52px, 7vw, 88px)" }}
            >
              Votre agence ne dort jamais.
            </h1>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <p
              className="font-sans font-light text-[#9A9088] mt-8 mx-auto"
              style={{ fontSize: 16, lineHeight: 1.7, maxWidth: 540 }}
            >
              Klora installe une réceptionniste IA qui répond à chaque appel,
              prend les rendez-vous et récupère le chiffre d'affaires que vous
              perdez en ce moment.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.45}>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-12">
              <button
                onClick={onDemoClick}
                className="bg-accent text-accent-foreground font-medium px-9 py-[14px] text-sm hover:bg-accent/90 transition-colors"
                style={{ borderRadius: 0 }}
              >
                Voir la démo
              </button>
              <button
                onClick={() => scrollTo("#offres")}
                className="bg-transparent text-white font-medium px-9 py-[14px] text-sm border hover:bg-white/5 transition-colors"
                style={{ borderRadius: 0, borderColor: "rgba(255,255,255,0.2)" }}
              >
                Découvrir nos offres
              </button>
            </div>
          </FadeInUp>
        </div>
      </div>

      {/* Bottom stats */}
      <div className="relative z-10 pb-10 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="h-px bg-white/10 mb-6" />
          <FadeInUp delay={0.6}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-0">
              {stats.map((s, i) => (
                <div key={s} className="flex items-center">
                  <span className="text-[#9A9088] text-xs font-light px-6">{s}</span>
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
