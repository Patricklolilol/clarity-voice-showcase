export const Footer = () => {
  return (
    <footer id="contact" className="bg-background border-t border-divider px-6 py-10">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="wordmark text-accent text-sm">CLARITY</span>
        <p
          className="text-text-muted text-center font-light"
          style={{ fontSize: 12 }}
        >
          © 2025 Clarity AI Voice Agency · Nice, Côte d'Azur · Operating Globally
        </p>
        <a
          href="mailto:contact@clarity-agency.com"
          className="text-accent font-medium hover:opacity-80 transition-opacity"
          style={{ fontSize: 12 }}
        >
          contact@clarity-agency.com
        </a>
      </div>
    </footer>
  );
};
