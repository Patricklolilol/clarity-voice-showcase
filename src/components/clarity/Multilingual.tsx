import { FadeInUp } from "./motion";

const langs = [
  { flag: "🇬🇧", label: "English" },
  { flag: "🇫🇷", label: "Français" },
  { flag: "🇪🇸", label: "Español" },
];

export const Multilingual = () => {
  return (
    <section className="bg-background py-[120px] px-6">
      <div className="container mx-auto max-w-3xl text-center">
        <FadeInUp>
          <p className="label-eyebrow text-accent">Our Edge</p>
        </FadeInUp>
        <FadeInUp delay={0.15}>
          <h2
            className="font-serif font-light text-foreground mt-6 leading-[1.1]"
            style={{ fontSize: "clamp(34px, 5vw, 48px)" }}
          >
            One agent. Three languages. Zero missed calls.
          </h2>
        </FadeInUp>
        <FadeInUp delay={0.3}>
          <p
            className="text-text-muted font-light mt-7 mx-auto"
            style={{ fontSize: 16, lineHeight: 1.8, maxWidth: 620 }}
          >
            Our AI receptionists automatically detect whether a caller speaks
            English, French, or Spanish — and respond fluently in their language,
            without any manual switching. For businesses with international
            clients or Spanish-speaking customers, this is a capability no
            national SaaS platform offers as a fully managed service.
          </p>
        </FadeInUp>
        <FadeInUp delay={0.45}>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-10">
            {langs.map((l) => (
              <span
                key={l.label}
                className="inline-flex items-center gap-2 border border-accent/60 text-accent px-4 py-2 text-xs font-medium"
                style={{ borderRadius: 999 }}
              >
                <span aria-hidden>{l.flag}</span>
                {l.label}
              </span>
            ))}
          </div>
        </FadeInUp>
      </div>
    </section>
  );
};
