import { analyticsAttr, analyticsEvents } from "./analytics";
import { responsiveCardClass } from "./ui";

export function AccountSummary({ email }: { email: string }) {
  return (
    <section className={responsiveCardClass} data-ui-state="ready" {...analyticsAttr(analyticsEvents.accountSummaryView)}>
      <h1 className="text-xl font-semibold text-slate-950">Account</h1>
      <p className="mt-2 text-sm text-slate-600">{email}</p>
    </section>
  );
}

