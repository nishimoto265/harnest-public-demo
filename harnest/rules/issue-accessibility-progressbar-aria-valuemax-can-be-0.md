---
status: active
severity: low
confidence: medium
category: accessibility
---

# issue-accessibility-progressbar-aria-valuemax-can-be-0

- candidate_id: cand-2026-05-16-pr3-19f2d37-001
- source_id: issue-accessibility-progressbar-aria-valuemax-can-be-0
- classification: new

## Checklist Item

Verify aria-valuemin/max/now stay consistent for degenerate limits

## Problem

Pass1 judge reported low issue(s) for issue-accessibility-progressbar-aria-valuemax-can-be-0.

## Evidence

- issue: a3/primary/low: In UsageLimitMeter, when limit<=0, safeLimit=0 and aria-valuemax={safeLimit} renders 0 while percent is forced to 100, producing an inconsistent progressbar.

## Guidance

- Apply this proposed lesson: When a numeric limit can be zero/invalid, either omit the progressbar or set aria-valuemax to a sensible value and keep aria-valuenow/percent consistent.
- Address this explicit pass1 issue while implementing the task: a3/primary/low: In UsageLimitMeter, when limit<=0, safeLimit=0 and aria-valuemax={safeLimit} renders 0 while percent is forced to 100, producing an inconsistent progressbar.

## Exceptions

If the task explicitly requires behavior that conflicts with this lesson, document the exception and rationale.

## Merge Notes

Before adding another lesson, compare existing lessons by source, checklist item, problem, guidance, and evidence. Prefer updating an existing lesson when it covers the same failure mode.
