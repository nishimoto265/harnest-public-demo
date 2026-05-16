import { analyticsAttr, analyticsEvents } from "./analytics";
import { focusRingClass, responsiveCardClass } from "./ui";

export type Plan = {
  name: string;
  price: string;
  ctaLabel?: string;
};

export function PlanCard({ plan }: { plan: Plan }) {
  return (
    <section className={responsiveCardClass} data-ui-state="ready" {...analyticsAttr(analyticsEvents.planCardView)}>
      <h2 className="text-lg font-semibold text-slate-950">{plan.name}</h2>
      <p className="mt-2 text-sm text-slate-600">{plan.price}</p>
      <button
        className={`mt-4 rounded-full bg-slate-950 px-4 py-2 text-sm text-white ${focusRingClass}`}
        aria-label={`Choose ${plan.name}`}
        {...analyticsAttr(analyticsEvents.planCardChoose)}
      >
        {plan.ctaLabel ?? "Choose plan"}
      </button>
    </section>
  );
}

