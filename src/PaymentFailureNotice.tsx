import { analyticsAttr, analyticsEvents } from "./analytics";
import { focusRingClass, responsiveCardClass } from "./ui";

type PaymentFailureNoticeProps = {
  retryDate?: string;
  billingUrl: string;
};

export function PaymentFailureNotice({ retryDate, billingUrl }: PaymentFailureNoticeProps) {
  const hasRetryDate = typeof retryDate === "string" && retryDate.length > 0;

  return (
    <aside
      className={`${responsiveCardClass} border-rose-200 bg-rose-50 text-rose-950`}
      data-ui-state={hasRetryDate ? "retry-scheduled" : "action-required"}
      aria-live="assertive"
      {...analyticsAttr(analyticsEvents.paymentFailureView)}
    >
      <p className="text-xs font-semibold uppercase tracking-wide">Payment needs attention</p>
      <h2 className="mt-2 text-lg font-semibold">
        {hasRetryDate ? `We will retry your payment on ${retryDate}` : "Update your payment method to keep access"}
      </h2>
      <p className="mt-2 text-sm">
        {hasRetryDate
          ? "Update billing details before the retry date if your card information has changed."
          : "We could not schedule an automatic retry. Update billing details to avoid losing access."}
      </p>
      <a
        className={`mt-4 inline-flex rounded-full bg-rose-950 px-4 py-2 text-sm font-medium text-white ${focusRingClass}`}
        href={billingUrl}
        aria-label="Update payment method in billing settings"
        {...analyticsAttr(analyticsEvents.paymentFailureUpdateMethod)}
      >
        Update payment method
      </a>
    </aside>
  );
}

