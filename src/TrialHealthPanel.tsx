import { analyticsAttr, analyticsEvents } from "./analytics";
import { focusRingClass, responsiveCardClass } from "./ui";

export type TrialHealthStatus = "healthy" | "ending-soon" | "expired";

type TrialHealthPanelProps = {
  status: TrialHealthStatus;
  daysRemaining?: number;
  extendTrialUrl: string;
  supportUrl: string;
};

const statusCopy: Record<TrialHealthStatus, { eyebrow: string; title: string; body: string; state: string }> = {
  healthy: {
    eyebrow: "Trial status",
    title: "Your trial is active",
    body: "Keep exploring premium features and invite teammates before your trial ends.",
    state: "trial-active"
  },
  "ending-soon": {
    eyebrow: "Trial ending soon",
    title: "Review your trial before it ends",
    body: "Confirm billing details or request more time if your team needs a longer evaluation.",
    state: "trial-ending"
  },
  expired: {
    eyebrow: "Trial ended",
    title: "Reactivate your workspace",
    body: "Choose a plan or contact support to keep access to trial features.",
    state: "trial-expired"
  }
};

export function TrialHealthPanel({
  status,
  daysRemaining,
  extendTrialUrl,
  supportUrl
}: TrialHealthPanelProps) {
  const copy = statusCopy[status];
  const hasDaysRemaining = typeof daysRemaining === "number";

  return (
    <section
      className={`${responsiveCardClass} border-sky-200 bg-sky-50 text-sky-950`}
      data-ui-state={copy.state}
      aria-live={status === "expired" ? "assertive" : "polite"}
      {...analyticsAttr(analyticsEvents.trialHealthView)}
    >
      <p className="text-xs font-semibold uppercase tracking-wide">{copy.eyebrow}</p>
      <h2 className="mt-2 text-lg font-semibold">{copy.title}</h2>
      <p className="mt-2 text-sm">{copy.body}</p>
      {hasDaysRemaining ? <p className="mt-2 text-sm font-medium">{daysRemaining} days remaining</p> : null}
      <div className="mt-4 flex flex-col gap-2 sm:flex-row">
        <a
          className={`inline-flex rounded-full bg-sky-950 px-4 py-2 text-sm font-medium text-white ${focusRingClass}`}
          href={extendTrialUrl}
          aria-label="Request a trial extension"
          {...analyticsAttr(analyticsEvents.trialHealthExtendTrial)}
        >
          Extend trial
        </a>
        <a
          className={`inline-flex rounded-full border border-sky-300 px-4 py-2 text-sm font-medium text-sky-950 ${focusRingClass}`}
          href={supportUrl}
          aria-label="Contact support about trial access"
          {...analyticsAttr(analyticsEvents.trialHealthContactSupport)}
        >
          Contact support
        </a>
      </div>
    </section>
  );
}
