# Executive Launch Operating Plan — Manus (-8), 90 Days
Work Order 05, deliverable 1 of 25. Five phases, thirteen weeks. Every "evidence gate" references a real file already delivered across Work Orders 01–05. Nothing here duplicates Work Order 04's paid-traffic calendar — this plan governs the whole 90-day system it sits inside.

**Standing blockers carried into this plan (do not resolve them here — see `OWNER-DECISION-REGISTER.csv`):** refund policy terms, Product 3 self-guided copy patches not yet confirmed live, real support email, governing jurisdiction, mailing address.

---

## Phase 1 — Pre-Launch (Weeks 1–2, Days 1–14)
**Objective:** Every gate from `BLOCKING-DECISION-REGISTER.md` (Work Order 03) and `PAID-TRAFFIC-LAUNCH-PLAN.md`'s shared stage gates (Work Order 04) is either cleared or explicitly deferred with a documented owner decision — nothing launches on an unconfirmed assumption.
**Weekly objectives:** Week 1: confirm storefront copy patches, policy placeholders, and support contact status. Week 2: confirm tracking/analytics integrity per `ANALYTICS-MEASUREMENT-PLAN.md` (Work Order 03).
**Owner responsibility:** Resolve or explicitly defer each item in `OWNER-DECISION-REGISTER.csv` (this work order) — at minimum mark a status for every row before Week 3 begins.
**Manus responsibility:** Apply `SELF-GUIDED-COPY-PATCHES.md`; verify the four data-quality prerequisites in `BUDGET-AND-STOP-RULES.md`; confirm policy pages are live with real (not placeholder) links.
**Claude responsibility:** None further — all Work Order 05 content exists as of delivery; available on request.
**Dependencies:** Work Orders 01–04 deliverables (already returned).
**Stop condition:** Do not enter Phase 2 if Gate 0 (Mastermind copy) or Gate 1 (tracking) from Work Order 04 remain unresolved.
**Evidence gate:** Written confirmation from Manus that both gates pass, referencing the specific QA test IDs from `QA-TEST-MATRIX.csv` (Work Order 02) used to verify.
**What remains blocked:** All paid spend (Work Order 04 Track B); all Product 3 organic/paid publishing.

---

## Phase 2 — Launch (Weeks 3–4, Days 15–28)
**Objective:** Organic distribution begins at the cadence defined in `90-DAY-ORGANIC-CALENDAR.csv` (this work order); paid testing begins only if Phase 1's gates cleared and the owner authorized the Low budget scenario.
**Weekly objectives:** Week 3: publish Days 1–7 of the organic calendar, Products 1 and 2 only unless Gate 0 cleared. Week 4: publish Days 8–14; if paid is authorized, run Work Order 04's `SEVEN-DAY-LAUNCH-CALENDAR.md` in parallel.
**Owner responsibility:** Authorize (or decline) the Low paid-budget scenario per `BUDGET-AND-STOP-RULES.md` (Work Order 04); confirm real support email is live before any customer-facing send goes out.
**Manus responsibility:** Publish per the calendar; monitor delivery/support per `LAUNCH-OPERATIONS-RUNBOOK.md` (this work order); log any Product 3 confusion tickets against `CUSTOMER-SUPPORT-RUNBOOK.md` scenario 10 (Work Order 03).
**Claude responsibility:** None further.
**Dependencies:** Phase 1 evidence gate passed.
**Stop condition:** If Phase 1's gates were deferred rather than cleared, Phase 2 proceeds organic-only, Product 1/2-only, no paid spend, no Product 3.
**Evidence gate:** At least 7 consecutive days of clean event tracking (no data-quality regressions) before Phase 3 begins.
**What remains blocked:** Product 3 publishing on any channel until Gate 0 is confirmed; scaling past the Low budget scenario.

---

## Phase 3 — Validation (Weeks 5–7, Days 29–49)
**Objective:** Determine which channels, offers, and audience hypotheses (Work Order 04's `AUDIENCE-HYPOTHESES.csv`) are actually producing signal, using real data instead of assumptions.
**Weekly objectives:** Week 5: first full read of organic channel performance (`CAMPAIGN-ACTIVATION-MATRIX.csv`, Work Order 02, status column updated with real results). Week 6: apply Work Order 04's kill/hold/iterate/scale rules to any live paid ad sets. Week 7: introduce Product 3 to organic and (if separately authorized) paid channels, if and only if Gate 0 has been confirmed live for at least 2 full weeks with no new contradictions found.
**Owner responsibility:** Approve or decline moving any paid ad set to the Base budget scenario; approve Product 3's entry into Phase 3 distribution.
**Manus responsibility:** Compile weekly performance summaries; update `CRO-EXPERIMENT-BACKLOG.csv` (this work order) status column as experiments are run or deprioritized.
**Claude responsibility:** Available to help classify an ambiguous result as hold vs. kill, if asked.
**Dependencies:** Phase 2 evidence gate passed; at least 14 days of the organic calendar published.
**Stop condition:** Do not scale any paid budget tier without the owner's explicit per-tier approval (per Work Order 04's rule that no tier is automatic).
**Evidence gate:** A documented decision (not verbal) on every ad set and organic channel: continue, iterate, or retire.
**What remains blocked:** The High paid-budget scenario; any partner or PR activity (Phase 5) before validation completes.

---

## Phase 4 — Optimization (Weeks 8–10, Days 50–70)
**Objective:** Fix what Phase 3 showed was weak, rather than adding more volume on top of unproven assets.
**Weekly objectives:** Week 8: implement the highest-priority items from `CRO-EXPERIMENT-BACKLOG.csv` on the storefront and email flows. Week 9: launch the SEO content from `SEO-ARTICLE-BRIEFS.md` for the topics with validated search intent. Week 10: review `KPI-DASHBOARD-SPEC.csv` metrics against Phase 1–3 baselines.
**Owner responsibility:** Approve any CRO experiment that touches pricing display, policy language, or checkout flow — these are not Manus's to change unilaterally even if flagged as high-priority.
**Manus responsibility:** Implement approved CRO experiments one at a time (per `CRO-EXPERIMENT-BACKLOG.csv`'s single-variable requirement) so results stay attributable; publish validated SEO content.
**Claude responsibility:** Available to draft additional article content if new validated topics emerge beyond the original 18 briefs.
**Dependencies:** Phase 3 evidence gate passed; at least one full validation cycle of data per offer.
**Stop condition:** Do not run more than one CRO experiment per page area simultaneously — confounded results aren't usable.
**Evidence gate:** Each implemented experiment has a documented before/after comparison against its stated primary event, using real data.
**What remains blocked:** Affiliate program activation (`AFFILIATE-PROGRAM-DRAFT.md` remains an owner-review draft through this entire phase).

---

## Phase 5 — Expansion (Weeks 11–13, Days 71–90)
**Objective:** Extend reach through partners and press only once the core funnel (Phases 1–4) is demonstrated to work on owned and paid channels.
**Weekly objectives:** Week 11: begin partner outreach per `PARTNER-OUTREACH-KIT.md`, evaluated against `PARTNER-EVALUATION-RUBRIC.csv`. Week 12: owner reviews `PR-LAUNCH-KIT.md` and decides whether to pursue press outreach. Week 13: full 90-day review — compile results against every KPI in `KPI-DASHBOARD-SPEC.csv` and produce the next 90-day plan's starting assumptions.
**Owner responsibility:** Approve which (if any) partner outreach messages actually get sent; approve or decline PR outreach; approve whether the affiliate program moves from draft to real terms.
**Manus responsibility:** Send only owner-approved partner messages; track responses against `PARTNER-EVALUATION-RUBRIC.csv`.
**Claude responsibility:** Available to draft a Week 14+ operating plan once real 90-day data exists, following the same phase structure.
**Dependencies:** Phase 4 evidence gate passed.
**Stop condition:** No partner or press outreach is sent without individual owner approval per message — this is not a batch-approval process.
**Evidence gate:** A written 90-day retrospective comparing actual results to the `DRAFT ASSUMPTION`-labeled figures in `BUDGET-AND-STOP-RULES.md` (Work Order 04) and this plan.
**What remains blocked:** Nothing structurally — by Week 13 every gate in this plan should either be cleared or have an explicit, current owner decision on record.

---
*Every phase's "stop condition" is a hard gate, not a suggestion — a phase does not begin because the calendar date arrived, it begins because its dependency's evidence gate actually passed.*
