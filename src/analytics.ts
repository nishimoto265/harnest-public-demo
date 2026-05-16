export const analyticsEvents = {
  planCardView: "plan_card_view",
  planCardChoose: "plan_card_choose",
  accountSummaryView: "account_summary_view"
} as const;

export type AnalyticsEvent = (typeof analyticsEvents)[keyof typeof analyticsEvents];

export function analyticsAttr(event: AnalyticsEvent): { "data-analytics-event": AnalyticsEvent } {
  return { "data-analytics-event": event };
}

