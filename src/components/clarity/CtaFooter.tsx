import { FadeInUp } from "./motion";
import logo from "@/assets/clarity-logo.png";

interface CtaFooterProps {
  onDemoClick: () => void;
}

export const CtaFooter = ({ onDemoClick }: CtaFooterProps) => {
  return (
    <section id="contact" className="bg-background">
      <div className="px-6 py-[120px]">
        <div className="container mx-auto max-w-3xl text-center">
          <FadeInUp>
            <h2
              className="font-serif font-light text-foreground leading-[1.1]"
              style={{ fontSize: "clamp(32px, 4.5vw, 44px)" }}
            >
              Prêt à ne plus jamais manquer un appel ?
            </h2>
          </FadeInUp>
          <FadeInUp delay={0.15}>
            <p
              className="text-text-muted font-light mt-6 mx-auto"
              style={{ fontSize: 15, maxWidth: 480 }}
            >
              Réservez une démonstration de 15 minutes. Gratuit, sans engagement.
            </p>
          </FadeInUp>
          <FadeInUp delay={0.3}>
            <button
              onClick={onDemoClick}
              className="mt-10 bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-colors"
              style={{
                borderRadius: 0,
                padding: "16px 48px",
                fontSize: 14,
              }}
            >
              Demander une démo
            </button>
          </FadeInUp>
        </div>
      </div>

      <footer className="border-t border-divider px-6 py-8">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
          <img src={logo} alt="Clarity" className="h-7 w-auto" />
          <p className="text-text-muted text-center font-light" style={{ fontSize: 12 }}>
            © 2025 Clarity — AI Voice Agency — Nice, Côte d'Azur
          </p>
          <a
            href="mailto:contact@clarity-agency.fr"
            className="text-accent font-medium hover:opacity-80 transition-opacity"
            style={{ fontSize: 12 }}
          >
            contact@clarity-agency.fr
          </a>
        </div>
      </footer>
    </section>
  );
};
