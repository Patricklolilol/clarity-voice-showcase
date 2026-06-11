import { PHONE_DISPLAY, PHONE_TEL } from "./constants";

export const PhoneWidget = ({
  label = "CALL OUR AI — LIVE DEMO",
  caption = "Picks up on the first ring. Takes 90 seconds.",
  size = "md",
}: {
  label?: string;
  caption?: string;
  size?: "md" | "lg";
}) => {
  const numberSize = size === "lg" ? "clamp(32px, 6vw, 56px)" : "clamp(22px, 4vw, 28px)";
  return (
    <div
      className="pulse-ring inline-block max-w-full"
      style={{
        background: "hsl(var(--bg-soft))",
        border: "1px solid hsl(var(--accent) / 0.6)",
        padding: size === "lg" ? "36px 44px" : "26px 32px",
        borderRadius: 12,
        boxShadow: "0 0 0 1px #1D9E75, 0 0 20px rgba(29,158,117,0.15)",
      }}
    >
      <p
        className="text-accent text-center"
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: 9,
          letterSpacing: "0.22em",
          fontWeight: 500,
        }}
      >
        {label}
      </p>
      <a
        href={`tel:${PHONE_TEL}`}
        className="block text-center text-accent hover:text-accent-light transition-colors mt-3"
        style={{
          fontFamily: "'JetBrains Mono', ui-monospace, monospace",
          fontSize: numberSize,
          fontWeight: 300,
          letterSpacing: "0.04em",
          lineHeight: 1.1,
        }}
      >
        {PHONE_DISPLAY}
      </a>
      <p
        className="text-text-muted text-center mt-3"
        style={{ fontSize: 11, fontWeight: 300 }}
      >
        {caption}
      </p>
    </div>
  );
};
