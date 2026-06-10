import { useState } from "react";
import { Plus } from "lucide-react";
import { FadeInUp } from "./motion";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  {
    q: "How long does setup actually take?",
    a: "48 hours from the moment you sign. We handle the entire configuration — you just forward your phone number at the end. That's a 2-minute step.",
  },
  {
    q: "Will my clients know they're talking to an AI?",
    a: "Most won't suspect it, and many won't realise until they're told. Our agents are specifically trained to sound natural and warm — not robotic. Call our demo number and judge for yourself.",
  },
  {
    q: "What if the AI can't answer a question?",
    a: "It handles the most common 90% of inbound calls flawlessly. For anything outside its knowledge base, it says 'Let me have someone call you back on that' and logs the request. No caller is left without a response.",
  },
  {
    q: "Do I need to change my phone number?",
    a: "No. You keep your existing number. You simply set up a conditional forward (calls go to us if you don't pick up in 2 rings, or all the time if you prefer). Takes 2 minutes with any provider.",
  },
  {
    q: "Is there a minimum commitment?",
    a: "Month-to-month. No contracts. Cancel with 30 days notice.",
  },
  {
    q: "Can it book into my existing calendar system?",
    a: "Yes — Google Calendar, Outlook, Calendly, Doctolib, and most scheduling platforms. We'll confirm compatibility during setup.",
  },
];

export const Faq = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-background py-[120px] px-6">
      <div className="container mx-auto max-w-3xl">
        <FadeInUp>
          <p className="label-eyebrow text-accent">FAQ</p>
        </FadeInUp>
        <FadeInUp delay={0.12}>
          <h2
            className="font-serif font-light text-foreground mt-6 leading-[1.05]"
            style={{ fontSize: "clamp(34px, 5vw, 48px)" }}
          >
            Questions we get every time.
          </h2>
        </FadeInUp>

        <FadeInUp delay={0.24}>
          <div className="mt-12 border-t border-divider">
            {faqs.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.q} className="border-b border-divider">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-6 py-6 text-left text-foreground hover:text-accent transition-colors"
                  >
                    <span style={{ fontSize: 16, fontWeight: 400 }}>{item.q}</span>
                    <span
                      className="text-accent transition-transform"
                      style={{
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                        transition: "transform 0.3s ease",
                      }}
                    >
                      <Plus size={20} />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p
                          className="text-text-muted font-light pb-6 pr-12"
                          style={{ fontSize: 14, lineHeight: 1.75 }}
                        >
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </FadeInUp>
      </div>
    </section>
  );
};
