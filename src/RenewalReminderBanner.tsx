import { analyticsAttr, analyticsEvents } from "./analytics";
import { focusRingClass, responsiveCardClass } from "./ui";

type RenewalReminderBannerProps = {
  daysRemaining?: number;
  billingUrl: string;
};

export function RenewalReminderBanner({ daysRemaining, billingUrl }: RenewalReminderBannerProps) {
  const hasDate = typeof daysRemaining === "number";

  return (
    <aside
      className={`${responsiveCardClass} border-amber-200 bg-amber-50 text-amber-950`}
      data-ui-state={hasDate ? "scheduled" : "unknown"}
      aria-live="polite"
      {...analyticsAttr(analyticsEvents.renewalReminderView)}
    >
      <p className="text-xs font-semibold uppercase tracking-wide">Subscription renewal</p>
      <h2 className="mt-2 text-lg font-semibold">
        {hasDate ? `Your plan renews in ${daysRemaining} days` : "We could not confirm your renewal date"}
      </h2>
      <p className="mt-2 text-sm">
        {hasDate
          ? "Review billing details before the renewal date if you need to update your plan."
          : "Open billing settings to confirm the renewal date and keep your subscription active."}
      </p>
      <a
        className={`mt-4 inline-flex rounded-full bg-amber-950 px-4 py-2 text-sm font-medium text-white ${focusRingClass}`}
        href={billingUrl}
        aria-label="Review subscription billing settings"
        {...analyticsAttr(analyticsEvents.renewalReminderManage)}
      >
        Manage billing
      </a>
    </aside>
  );
}

