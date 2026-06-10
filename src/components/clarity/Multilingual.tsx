import { useEffect, useState } from "react";
import { FadeInUp } from "./motion";

const langs = [
  {
    code: "en",
    flag: "🇬🇧",
    label: "English",
    text: "Good morning, you've reached [Business Name]. How can I help you today?",
  },
  {
    code: "fr",
    flag: "🇫🇷",
    label: "Français",
    text: "Bonjour, vous êtes bien chez [Nom de l'entreprise]. Comment puis-je vous aider ?",
  },
  {
    code: "es",
    flag: "🇪🇸",
    label: "Español",
    text: "Buenos días, ha contactado con [Empresa]. ¿En qué puedo ayudarle?",
  },
];

export const Multilingual = () => {
  const [active, setActive] = useState(langs[0]);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    setTyped("");
    let i = 0;
    const id = window.setInterval(() => {
      i++;
      setTyped(active.text.slice(0, i));
      if (i >= active.text.length) window.clearInterval(id);
    }, 28);
    return () => window.clearInterval(id);
  }, [active]);

  return (
    <section className="bg-bg-soft py-[120px] px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <FadeInUp>
          <p className="label-eyebrow text-accent">Our Edge</p>
        </FadeInUp>
        <FadeInUp delay={0.12}>
          <h2
            className="font-serif font-light text-foreground mt-6 leading-[1.05]"
            style={{ fontSize: "clamp(34px, 5vw, 48px)" }}
          >
            One agent. Three languages. Automatic.
          </h2>
        </FadeInUp>
        <FadeInUp delay={0.24}>
          <p
            className="text-text-muted font-light mt-7 mx-auto"
            style={{ fontSize: 16, lineHeight: 1.8, maxWidth: 640 }}
          >
            Klora's AI receptionists detect whether a caller speaks English, French,
            or Spanish and respond fluently — without any switching, any delay, or any
            human intervention. For businesses in international markets or with
            multilingual customers, this is a capability no national platform offers
            as a fully managed service.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.36}>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-10">
            {langs.map((l) => {
              const isActive = l.code === active.code;
              return (
                <button
                  key={l.code}
                  onClick={() => setActive(l)}
                  className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-medium border transition-all hover-lift ${
                    isActive
                      ? "bg-accent text-accent-foreground border-accent"
                      : "border-divider text-text-muted hover:text-foreground"
                  }`}
                >
                  <span aria-hidden>{l.flag}</span>
                  {l.label}
                </button>
              );
            })}
          </div>
        </FadeInUp>

        <FadeInUp delay={0.48}>
          <div
            className="mt-10 mx-auto text-left bg-bg-dark border border-divider"
            style={{ maxWidth: 640, borderRadius: 6 }}
          >
            <div
              className="flex items-center gap-2 px-4 py-3 border-b border-divider"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
              <span className="w-2.5 h-2.5 rounded-full bg-accent/70" />
              <span
                className="ml-3 text-text-muted"
                style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11 }}
              >
                klora-agent · {active.code}
              </span>
            </div>
            <div
              className="px-5 py-6"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 14,
                lineHeight: 1.7,
                minHeight: 110,
              }}
            >
              <span className="text-accent">▸ </span>
              <span className="text-foreground blink-cursor">{typed}</span>
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
};
