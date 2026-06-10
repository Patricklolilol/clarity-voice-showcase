import { useMemo, useState } from "react";
import { Minus, Plus } from "lucide-react";
import { FadeInUp } from "./motion";
import { PHONE_TEL } from "./constants";

const fmt = (n: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);

export const Calculator = () => {
  const [missed, setMissed] = useState(5);
  const [value, setValue] = useState(150);

  const { monthly, yearly, roi } = useMemo(() => {
    const monthly = missed * 4.33 * value;
    const yearly = monthly * 12;
    const roi = monthly / 297;
    return { monthly, yearly, roi };
  }, [missed, value]);

  const Stepper = ({
    val,
    setVal,
    step = 1,
    min = 0,
    prefix,
  }: {
    val: number;
    setVal: (n: number) => void;
    step?: number;
    min?: number;
    prefix?: string;
  }) => (
    <div className="flex items-center gap-3 bg-bg-soft border border-divider px-4 py-3">
      <button
        type="button"
        onClick={() => setVal(Math.max(min, val - step))}
        className="text-text-muted hover:text-accent transition-colors p-2"
        aria-label="decrease"
      >
        <Minus size={16} />
      </button>
      <div className="flex-1 flex items-baseline justify-center gap-1">
        {prefix && <span className="text-text-muted text-base">{prefix}</span>}
        <input
          type="number"
          inputMode="numeric"
          value={val}
          min={min}
          onChange={(e) => setVal(Math.max(min, Number(e.target.value) || 0))}
          className="bg-transparent text-accent text-center outline-none w-full"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            fontSize: 36,
          }}
        />
      </div>
      <button
        type="button"
        onClick={() => setVal(val + step)}
        className="text-text-muted hover:text-accent transition-colors p-2"
        aria-label="increase"
      >
        <Plus size={16} />
      </button>
    </div>
  );

  return (
    <section className="bg-background py-[120px] px-6">
      <div className="container mx-auto max-w-4xl">
        <FadeInUp>
          <p className="label-eyebrow text-accent text-center">Your ROI</p>
        </FadeInUp>
        <FadeInUp delay={0.12}>
          <h2
            className="font-serif font-light text-foreground text-center mt-6 leading-[1.05]"
            style={{ fontSize: "clamp(34px, 5vw, 48px)" }}
          >
            See exactly what you're losing.
          </h2>
        </FadeInUp>

        <FadeInUp delay={0.24}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
            <div>
              <label
                className="label-eyebrow text-text-muted block mb-3"
                style={{ fontSize: 10 }}
              >
                Calls missed per week
              </label>
              <Stepper val={missed} setVal={setMissed} step={1} min={0} />
            </div>
            <div>
              <label
                className="label-eyebrow text-text-muted block mb-3"
                style={{ fontSize: 10 }}
              >
                Avg value per appointment / job
              </label>
              <Stepper val={value} setVal={setValue} step={10} min={0} prefix="€" />
            </div>
          </div>
        </FadeInUp>

        <FadeInUp delay={0.36}>
          <div
            className="mt-10 p-10 bg-bg-card border border-divider text-center"
            style={{ borderTop: "3px solid hsl(var(--accent))" }}
          >
            <p className="text-text-muted font-light" style={{ fontSize: 13 }}>
              You're losing approximately
            </p>
            <p
              className="text-foreground font-serif font-light mt-3 leading-none"
              style={{ fontSize: "clamp(40px, 6vw, 64px)" }}
            >
              {fmt(monthly)}
              <span className="text-text-muted text-base font-sans"> / month</span>
            </p>
            <p
              className="text-text-muted font-light mt-4"
              style={{ fontSize: 14 }}
            >
              {fmt(yearly)} per year
            </p>
            <div className="h-px bg-divider my-7 max-w-xs mx-auto" />
            <p
              className="text-foreground font-light"
              style={{ fontSize: 15 }}
            >
              Klora Standard (€297/mo) would pay for itself{" "}
              <span className="text-accent font-medium">{roi.toFixed(1)}×</span> over.
            </p>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-block mt-8 bg-accent text-accent-foreground font-medium px-9 py-[14px] text-sm hover-lift hover:bg-accent-light"
            >
              Recover this revenue →
            </a>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
};
