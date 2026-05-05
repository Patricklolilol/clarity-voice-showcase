import { FadeInUp, StaggerGroup, StaggerItem } from "./motion";

const facts = [
  { n: "0", label: "Agences IA locales sur la Côte d'Azur" },
  { n: "48h", label: "Délai d'installation" },
  { n: "3", label: "Langues parlées par vos agents" },
  { n: "200+", label: "Prospects qualifiés dans votre zone" },
];

export const WhyClarity = () => {
  return (
    <section className="bg-bg-dark py-[120px] px-6">
      <div className="container mx-auto max-w-6xl">
        <FadeInUp>
          <p className="label-eyebrow text-accent">Pourquoi Clarity</p>
        </FadeInUp>
        <FadeInUp delay={0.15}>
          <h2
            className="font-serif font-light text-white mt-6 leading-[1.1]"
            style={{ fontSize: "clamp(34px, 5vw, 48px)" }}
          >
            Locaux. Multilingues. Les seuls.
          </h2>
        </FadeInUp>
        <FadeInUp delay={0.3}>
          <p
            className="text-text-on-dark font-light mt-7"
            style={{ fontSize: 16, lineHeight: 1.8, maxWidth: 580 }}
          >
            Nous sommes la seule agence IA physiquement présente sur la Côte
            d'Azur. Nos agents conversent en français, anglais et espagnol —
            une capacité qu'aucune solution nationale ne peut offrir. Et
            contrairement aux plateformes SaaS, nous sommes disponibles le lundi
            matin quand quelque chose ne va pas.
          </p>
        </FadeInUp>

        <div className="h-px bg-white/10 mt-16 mb-12" />

        <StaggerGroup className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {facts.map((f) => (
            <StaggerItem key={f.label}>
              <div
                className="font-serif font-light text-accent leading-none"
                style={{ fontSize: 48 }}
              >
                {f.n}
              </div>
              <p
                className="text-text-on-dark mt-3 font-light"
                style={{ fontSize: 12, lineHeight: 1.6 }}
              >
                {f.label}
              </p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
};
