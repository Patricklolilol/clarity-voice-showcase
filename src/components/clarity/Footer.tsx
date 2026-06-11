import { CONTACT_EMAIL, PHONE_DISPLAY, PHONE_TEL } from "./constants";

export const Footer = () => {
  return (
    <footer
      className="bg-background px-6 py-10"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="wordmark text-foreground text-sm">KLORA</span>
        <p
          className="text-text-muted text-center font-light"
          style={{ fontSize: 12 }}
        >
          © 2025 Klora AI Voice Agency · Nice, Côte d'Azur · Operating Globally
        </p>
        <div className="flex flex-col md:items-end items-center gap-1">
          <a
            href={`tel:${PHONE_TEL}`}
            className="text-accent font-medium hover:text-accent-light transition-colors"
            style={{ fontSize: 12 }}
          >
            {PHONE_DISPLAY}
          </a>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-text-muted font-light hover:text-foreground transition-colors"
            style={{ fontSize: 12 }}
          >
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>
    </footer>
  );
};
