export const analyticsEvents = {
  planCardView: "plan_card_view",
  planCardChoose: "plan_card_choose",
  accountSummaryView: "account_summary_view",
  renewalReminderView: "renewal_reminder_view",
  renewalReminderManage: "renewal_reminder_manage",
  paymentFailureView: "payment_failure_view",
  paymentFailureUpdateMethod: "payment_failure_update_method",
  trialHealthView: "trial_health_view",
  trialHealthExtendTrial: "trial_health_extend_trial",
  trialHealthContactSupport: "trial_health_contact_support",
  usageLimitView: "usage_limit_view",
  usageLimitUpgrade: "usage_limit_upgrade"
} as const;

export type AnalyticsEvent = (typeof analyticsEvents)[keyof typeof analyticsEvents];

export function analyticsAttr(event: AnalyticsEvent): { "data-analytics-event": AnalyticsEvent } {
  return { "data-analytics-event": event };
}
