# Seven-Day Launch Calendar — Manus (-8)
Work Order 04. No automatic spending or posting happens on any day below — every "go live" moment requires the named owner action first. Covers both the $0 organic track and the paid-testing track (both defined fully in `PAID-TRAFFIC-LAUNCH-PLAN.md`).

---

## Day 1 — Setup
**Objective:** All assets exist and are internally consistent before anything touches the public.
**Owner responsibility:** Resolve or explicitly defer the items in `BLOCKING-DECISION-REGISTER.md` — at minimum, confirm whether Gate 0 (Mastermind copy patches) will be applied before Day 3.
**Manus responsibility:** Apply `SELF-GUIDED-COPY-PATCHES.md` to the live storefront if Product 3 is going live this cycle; build the draft campaigns from `META-ADS-BUILD-SHEET.csv` in Meta Ads Manager (still paused/draft, no spend); confirm pixel/CAPI installation.
**Claude responsibility:** None further — all Work Order 04 content is delivered as of this calendar's creation; available to answer questions about any deliverable if asked.
**Required evidence before advancing:** Screenshot or export confirming all draft campaigns exist in Ads Manager with `DRAFT` status; confirmation that data-quality prerequisites in `BUDGET-AND-STOP-RULES.md` are being worked, even if not yet complete.
**$0 track action:** Finalize which organic assets from `CAMPAIGN-ACTIVATION-MATRIX.csv` (Work Order 02) are approved to post this week — Product 1 and 2 only unless Gate 0 clears.
**Paid track action:** Build only — no spend authorized yet.

---

## Day 2 — Preflight
**Objective:** Verify tracking is trustworthy before it's used to make any decision.
**Owner responsibility:** None required unless an issue is escalated.
**Manus responsibility:** Run the four data-quality prerequisite checks in `BUDGET-AND-STOP-RULES.md` (event accuracy, no double-counting, UTM persistence, pixel match quality). Fix anything that fails before proceeding.
**Claude responsibility:** Available to clarify any test case from `QA-TEST-MATRIX.csv` (Work Order 02) if Manus needs the original acceptance criteria.
**Required evidence before advancing:** All four data-quality prerequisites pass, documented with actual screenshots/exports, not just a verbal confirmation.
**$0 track action:** Schedule (not yet publish) the Day 3 organic posts.
**Paid track action:** Do not proceed to Day 3's paid activation if any prerequisite fails — hold at Day 2 until resolved, even if that delays the whole week.

---

## Day 3 — Soft Launch
**Objective:** Real traffic starts flowing, at the smallest reasonable scale.
**Owner responsibility:** Explicitly authorize the "Low" budget scenario from `BUDGET-AND-STOP-RULES.md` for Product 1 and 2 (Product 3 only if Gate 0 cleared on Day 1). This is the actual spend-authorization moment — nothing before this point should have spent money.
**Manus responsibility:** Publish the approved organic posts; activate the paid campaigns at the approved Low-scenario budget only.
**Claude responsibility:** None further.
**Required evidence before advancing:** Confirmation from Manus that campaigns are live and spending at the approved (not a different) budget level; organic posts are live with UTM links per `UTM-NAMING-STANDARD.md`.
**$0 track action:** Publish Day 1–2 organic content across approved channels.
**Paid track action:** Live at Low scenario budget only, Product 1 and 2 (Product 3 conditional on Gate 0).

---

## Day 4 — Monitoring
**Objective:** Watch for anything broken before watching for performance — a tracking failure looks identical to a bad ad if you're not careful.
**Owner responsibility:** None required unless an issue is escalated.
**Manus responsibility:** Daily check of spend pacing, delivery status (no "learning limited" or disapproval flags), and that `purchase_verified`/`lead_submitted` events are still firing correctly. Log any customer support tickets against `CUSTOMER-SUPPORT-RUNBOOK.md` scenario 10 (unsupported product expectation) specifically — an early signal of a message-match problem.
**Claude responsibility:** None further unless a new contradiction is reported, in which case treat it the same way the existing 24 patches were produced.
**Required evidence before advancing:** No unresolved delivery/tracking errors; at least one full day of clean data.
**$0 track action:** Continue organic posting cadence per `PAID-TRAFFIC-LAUNCH-PLAN.md` Track A, weeks 1–2.
**Paid track action:** Continue at Low scenario; do not evaluate kill/hold/scale decisions yet — the minimum run duration (7 days for Low) hasn't elapsed.

---

## Day 5 — Monitoring (continued) / early signal check
**Objective:** Distinguish real signal from noise without acting prematurely.
**Owner responsibility:** None required unless spend is approaching the Kill threshold in `BUDGET-AND-STOP-RULES.md` early (3x product price with zero purchases) — if so, this is an early warning, not yet an action point.
**Manus responsibility:** Continue daily monitoring; prepare a performance summary per ad set (spend, CTR, `checkout_started` count, `purchase_verified` count) ahead of Day 6's decision point.
**Claude responsibility:** None further.
**Required evidence before advancing:** Performance summary compiled and ready for the Day 6 decision.
**$0 track action:** Continue organic cadence; note which posts are outperforming for the Day 6 review.
**Paid track action:** Continue at Low scenario; still within the minimum run window.

---

## Day 6 — Decision
**Objective:** Apply the Kill/Hold/Iterate/Scale rules from `BUDGET-AND-STOP-RULES.md` to every active ad set using real data.
**Owner responsibility:** Review Manus's performance summary and approve or reject any recommendation to move to the Base budget scenario for a specific ad set — this is a real go/no-go decision, not automatic.
**Manus responsibility:** Present the performance summary with a recommendation (kill/hold/iterate/scale) per ad set, referencing the specific rule from `BUDGET-AND-STOP-RULES.md` that applies.
**Claude responsibility:** Available if Manus wants a second read on whether a result should be classified as "inconclusive" (hold) vs. a clear kill/scale signal.
**Required evidence before advancing:** A documented decision (not just a verbal one) per ad set, logged somewhere durable (e.g., appended to `META-ADS-BUILD-SHEET.csv`'s status column).
**$0 track action:** Apply the same "double down on winners, retire losers" logic from `PAID-TRAFFIC-LAUNCH-PLAN.md` Track A weeks 3–4 to the organic posts, informally.
**Paid track action:** Execute the approved decisions — pause kills, leave holds unchanged, swap creative on iterates, and only increase budget on scales the owner explicitly approved.

---

## Day 7 — Correction and Expansion
**Objective:** Close the loop on this week and set up the next one correctly, rather than just repeating whatever happened to be running.
**Owner responsibility:** Approve whether next week continues at the same scenario tier, moves to Base (if not already), or pauses paid entirely pending further creative/audience work.
**Manus responsibility:** Implement any creative swaps identified in Day 6's "iterate" decisions; update `AUDIENCE-HYPOTHESES.csv` status column for any hypothesis now supported or contradicted by real data; if Product 3 wasn't part of this week and Gate 0 has since cleared, prepare it for next week's Day 1.
**Claude responsibility:** Available to help interpret whether a hypothesis was actually falsified or the data was simply inconclusive, if asked.
**Required evidence before advancing to next week's Day 1:** A written one-paragraph summary of the week — what was learned, what changed, what's next — this becomes the input for the next 7-day cycle rather than starting from scratch.
**$0 track action:** Carry forward into `PAID-TRAFFIC-LAUNCH-PLAN.md` Track A's next 2-week block.
**Paid track action:** Carry forward into Track B's next phase per the 60-day plan, at whatever scenario tier was approved.

---
*No day in this calendar authorizes spend or publishing on its own — every transition marked "Owner responsibility" is a required human decision point, not a formality.*
