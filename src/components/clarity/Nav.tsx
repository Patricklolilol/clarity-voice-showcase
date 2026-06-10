import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { PHONE_TEL } from "./constants";

const links = [
  { label: "How It Works", href: "#how" },
  { label: "Pricing", href: "#offres" },
  { label: "Contact", href: "#contact" },
];

export const Nav = () => {
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
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md border-b"
          : "bg-transparent border-b border-transparent"
      }`}
      style={
        scrolled
          ? { backgroundColor: "rgba(13,27,42,0.95)", borderBottomColor: "rgba(255,255,255,0.06)" }
          : undefined
      }
    >
      <div className="container mx-auto flex h-16 items-center justify-between">
        <a
          href="#top"
          onClick={(e) => handleAnchor(e, "#top")}
          className="flex items-center gap-2 wordmark text-foreground text-base"
        >
          <span
            aria-hidden
            className="inline-block w-[7px] h-[7px] rounded-full bg-accent"
            style={{ boxShadow: "0 0 12px hsl(var(--accent) / 0.7)" }}
          />
          KLORA
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
          <a
            href={`tel:${PHONE_TEL}`}
            className="bg-accent text-accent-foreground label-nav font-medium px-[22px] py-[10px] hover-lift hover:bg-accent-light"
          >
            Call Our AI →
          </a>
        </nav>

        <button
          className="md:hidden text-foreground p-2 -mr-2"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 top-16 z-40"
          style={{ backgroundColor: "rgba(13,27,42,0.98)" }}
        >
          <div className="container mx-auto py-10 flex flex-col gap-7">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleAnchor(e, l.href)}
                className="text-foreground text-2xl font-light"
              >
                {l.label}
              </a>
            ))}
            <a
              href={`tel:${PHONE_TEL}`}
              onClick={() => setMobileOpen(false)}
              className="bg-accent text-accent-foreground label-nav font-medium px-[22px] py-[14px] mt-4 text-center"
            >
              Call Our AI →
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
