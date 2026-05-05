import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/clarity-logo.png";

interface NavProps {
  onDemoClick: () => void;
}

const links = [
  { label: "Notre approche", href: "#approche" },
  { label: "Nos offres", href: "#offres" },
  { label: "Contact", href: "#contact" },
];

export const Nav = ({ onDemoClick }: NavProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(250,250,248,0.95)] backdrop-blur-sm border-b border-divider"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between">
        <a href="#top" onClick={(e) => handleAnchor(e, "#top")} className="flex items-center">
          <img src={logo} alt="Clarity — Agence IA Vocale" className="h-9 w-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleAnchor(e, l.href)}
              className="label-nav text-text-muted hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={onDemoClick}
            className="bg-accent text-accent-foreground label-nav font-medium px-[22px] py-[10px] hover:bg-accent/90 transition-colors"
            style={{ borderRadius: 0 }}
          >
            Demander une démo
          </button>
        </nav>

        <button
          className="md:hidden text-foreground p-2 -mr-2"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-divider">
          <div className="container mx-auto py-6 flex flex-col gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleAnchor(e, l.href)}
                className="label-nav text-text-muted"
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileOpen(false);
                onDemoClick();
              }}
              className="bg-accent text-accent-foreground label-nav font-medium px-[22px] py-[12px] mt-2"
              style={{ borderRadius: 0 }}
            >
              Demander une démo
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
