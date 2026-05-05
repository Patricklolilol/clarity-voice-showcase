import { FadeInUp, StaggerGroup, StaggerItem } from "./motion";

const cards = [
  {
    label: "Disponibilité",
    title: "24h/24, 7j/7",
    body: "Sophie répond à chaque appel, y compris le soir, le week-end et les jours fériés. Aucun appel ne tombe en messagerie.",
    accent: true,
  },
  {
    title: "Prise de rendez-vous instantanée",
    body: "Sophie consulte votre agenda en temps réel et pose les rendez-vous directement — sans double réservation, sans allers-retours.",
  },
  {
    title: "SMS de relance automatique",
    body: "Chaque appel manqué déclenche un SMS en moins de 60 secondes avec un lien de réservation. Les prospects qui partent reviennent.",
  },
  {
    title: "Rapport mensuel de performance",
    body: "Appels traités, rendez-vous pris, chiffre d'affaires récupéré. Un document clair, chaque mois, qui justifie votre investissement.",
  },
];

export const Solution = () => {
  return (
    <section className="bg-bg-soft py-[120px] px-6">
      <div className="container mx-auto max-w-6xl">
        <FadeInUp>
          <p className="label-eyebrow text-accent">La solution</p>
        </FadeInUp>
        <FadeInUp delay={0.15}>
          <h2
            className="font-serif font-light text-foreground mt-6 leading-[1.1]"
            style={{ fontSize: "clamp(34px, 5vw, 48px)" }}
          >
            Sophie répond. Toujours.
          </h2>
        </FadeInUp>
        <FadeInUp delay={0.3}>
          <p className="text-text-muted font-light mt-5" style={{ fontSize: 16, maxWidth: 560 }}>
            Une réceptionniste IA configurée pour votre activité. Opérationnelle en 48 heures.
          </p>
        </FadeInUp>

        <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {cards.map((c) => (
            <StaggerItem key={c.title}>
              <div
                className="bg-white border border-divider p-9 h-full transition-transform duration-300 hover:-translate-y-[3px] relative"
                style={{ borderRadius: 0 }}
              >
                {c.accent && (
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-accent" />
                )}
                {c.label && (
                  <p className="label-eyebrow text-text-muted mb-4">{c.label}</p>
                )}
                <h3
                  className="font-serif font-light text-foreground leading-tight"
                  style={{ fontSize: 28 }}
                >
                  {c.title}
                </h3>
                <p
                  className="text-text-muted font-light mt-4"
                  style={{ fontSize: 15, lineHeight: 1.7 }}
                >
                  {c.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
};
