# Launch Operations Runbook — Manus (-8)
Work Order 05, deliverable 2 of 25. Day 0 through Day 90 operating procedures. This is the "how the days actually run" companion to `EXECUTIVE-LAUNCH-OPERATING-PLAN.md`'s phase structure.

---

## Day 0 — Final Pre-Launch Check
Run this checklist the day before Phase 1 ends. Do not proceed to Day 1 if any item fails.
- [ ] All four data-quality prerequisites from `BUDGET-AND-STOP-RULES.md` (Work Order 04) pass.
- [ ] `SELF-GUIDED-COPY-PATCHES.md` (Work Order 03) is applied to the live storefront, OR Product 3 is confirmed excluded from all Day 1+ activity.
- [ ] Real support email is live and monitored (not a placeholder) if any customer-facing send is planned in Week 1.
- [ ] `OWNER-DECISION-REGISTER.csv` (this work order) has a current status on every row — "unresolved" is an acceptable status; "unreviewed" is not.

---

## Daily Launch-Week Checks (Days 1–7 of any new publishing wave)
Run every day during the first week of organic publishing, and again during the first week of any new paid budget tier:
1. Confirm the day's scheduled content actually published (per `90-DAY-ORGANIC-CALENDAR.csv` status column).
2. Confirm UTM links resolve correctly (spot-check at least one per channel).
3. Confirm no support ticket has come in citing `CUSTOMER-SUPPORT-RUNBOOK.md` scenario 10 (unsupported product expectation) — an early signal of a message-match problem.
4. Confirm `purchase_verified` and `lead_submitted` events are still firing (per `ANALYTICS-MEASUREMENT-PLAN.md`, Work Order 03).
5. Log the day's check (pass/fail, one line) in a shared log — this runbook assumes Manus maintains that log; format is Manus's choice.

---

## Twice-Weekly Reviews (ongoing, every Monday and Thursday from Week 2 onward)
**Attendees:** Owner (Ciro) and Manus; Claude available on request.
**Agenda template:**
1. What published/ran since the last review (reference specific asset IDs).
2. What the data shows (reference specific KPI IDs from `KPI-DASHBOARD-SPEC.csv`).
3. Any new contradiction or compliance issue found (reference `CROSS-FILE-COMPLIANCE-AUDIT.md` format if a new one surfaces).
4. Any decision from `OWNER-DECISION-REGISTER.csv` that needs a status update.
5. What changes before the next review.

---

## Weekly Reporting (every Friday)
**Format:** A single written summary, not a live dashboard walkthrough, covering:
- Volume: content published, emails sent (with suppression counts), leads captured, purchases verified — per offer.
- Spend (if paid track active): total spend, cost-per-result, current kill/hold/iterate/scale status per ad set.
- Compliance: any new placeholder resolved, any new contradiction found and patched.
- Next week's plan: which phase-week from `EXECUTIVE-LAUNCH-OPERATING-PLAN.md` is next, and what's still blocking it.

---

## Incident Response
| Severity | Definition | Response |
|---|---|---|
| Critical | Payment processing broken, data breach/leak, false charge to a customer | Pause all active paid spend and new publishing immediately; owner notified same day; root-cause and fix before resuming |
| High | Delivery failures affecting multiple customers, tracking data clearly wrong (e.g., duplicate purchase records), a live contradiction found in published Product 3 copy | Pause the affected channel/campaign only; fix within 48 hours; owner notified within 24 hours |
| Medium | Single customer delivery issue, one broken UTM link, one support ticket citing confusion | Handle via `CUSTOMER-SUPPORT-RUNBOOK.md` (Work Order 03) directly; no pause required; note in the next weekly report |
| Low | Typo in published copy, minor formatting issue | Fix at next scheduled update; no separate response required |

---

## Rollback Triggers
Roll back (unpublish/pause) a specific asset or campaign, not the whole launch, when:
- A Critical or High incident (above) is traced to that specific asset.
- A CRO experiment (`CRO-EXPERIMENT-BACKLOG.csv`) shows a statistically clear negative result against its guardrail metric.
- A compliance scan (per this work order's QA requirements) finds a live contradiction that wasn't caught before publishing.

**Rollback does not require owner approval for Critical incidents** (act first, report immediately) but does require owner approval to resume after a Critical rollback.

---

## Customer Issue Routing
Route every inbound customer contact through `CUSTOMER-SUPPORT-RUNBOOK.md` (Work Order 03) first — its 10 scenarios and resolution boundaries still govern day-to-day support during this 90-day window. This runbook adds only:
- Any issue traced back to a specific published asset (from this work order's asset ID system) should be logged against that asset ID, so patterns become visible over time.
- Any issue matching `CUSTOMER-SUPPORT-RUNBOOK.md` scenario 7 (refund) or 8 (privacy) still escalates to the owner by rule, unchanged from Work Order 03.

---

## Explicit Owner Approval Gates (consolidated list)
These require owner sign-off and cannot be inferred from a prior approval:
1. Entering Phase 2 if Phase 1's gates were deferred rather than cleared.
2. Any paid budget tier change (Low → Base → High).
3. Product 3 entering any new distribution channel.
4. Any CRO experiment touching pricing, policy language, or checkout flow.
5. Any partner outreach message actually being sent (not just drafted).
6. Any PR outreach being sent.
7. The affiliate program moving from draft to real, live terms.
8. Resuming activity after a Critical-severity rollback.

*This runbook does not replace `CUSTOMER-SUPPORT-RUNBOOK.md` or `SEVEN-DAY-LAUNCH-CALENDAR.md` (Work Order 04) — it operates alongside both for the full 90-day window.*
