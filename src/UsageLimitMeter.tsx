import { analyticsAttr, analyticsEvents } from "./analytics";
import { focusRingClass, responsiveCardClass } from "./ui";

type UsageLimitMeterProps = {
  used: number;
  limit: number;
  upgradeUrl: string;
};

function percentUsed(used: number, limit: number): number {
  if (limit <= 0) {
    return 0;
  }

  return Math.min(100, Math.max(0, Math.round((used / limit) * 100)));
}

export function UsageLimitMeter({ used, limit, upgradeUrl }: UsageLimitMeterProps) {
  const percent = percentUsed(used, limit);
  const isNearLimit = percent >= 80;

  return (
    <section
      className={`${responsiveCardClass} ${isNearLimit ? "border-orange-200 bg-orange-50 text-orange-950" : ""}`}
      data-ui-state={isNearLimit ? "near-limit" : "within-limit"}
      {...analyticsAttr(analyticsEvents.usageLimitView)}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide">Usage limit</p>
          <h2 className="mt-2 text-lg font-semibold">{percent}% used</h2>
        </div>
        <p className="text-sm font-medium">
          {used} / {limit}
        </p>
      </div>
      <div className="mt-4 h-2 rounded-full bg-slate-200" aria-hidden="true">
        <div className="h-2 rounded-full bg-orange-500" style={{ width: `${percent}%` }} />
      </div>
      <p className="mt-3 text-sm">
        {isNearLimit
          ? "Upgrade before the workspace reaches the limit to avoid interrupted access."
          : "Your workspace is within the current plan limit."}
      </p>
      {isNearLimit ? (
        <a
          className={`mt-4 inline-flex rounded-full bg-orange-950 px-4 py-2 text-sm font-medium text-white ${focusRingClass}`}
          href={upgradeUrl}
          aria-label="Upgrade plan before reaching the usage limit"
          {...analyticsAttr(analyticsEvents.usageLimitUpgrade)}
        >
          Upgrade plan
        </a>
      ) : null}
    </section>
  );
}
