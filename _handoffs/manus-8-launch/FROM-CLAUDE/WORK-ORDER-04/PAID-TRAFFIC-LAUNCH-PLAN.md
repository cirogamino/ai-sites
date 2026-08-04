# Paid-Traffic Launch Plan — Manus (-8)
Work Order 04. Meta-first, with secondary-channel recommendations. Two complete 60-day tracks. Every audience and performance figure below is a **hypothesis to test, not a promise of results** — see `AUDIENCE-HYPOTHESES.csv` and `BUDGET-AND-STOP-RULES.md` for the scenario ranges these numbers assume.

**Hard gate, both tracks:** The paid track stays `DRAFT` until Manus verifies purchase/lead/attribution events (Work Order 03's `ANALYTICS-MEASUREMENT-PLAN.md`) and the owner explicitly authorizes live spend. Product 3 (Business Mastermind) is `HOLD` on both tracks until `SELF-GUIDED-COPY-PATCHES.md` is applied to the storefront and any live creative.

---

## Shared Stage Gates (apply to both tracks)

| Gate | Prerequisite | Owner decision required? |
|---|---|---|
| Gate 0 — Storefront ready | Policy links live, staging banners removed, Mastermind copy patched (`STOREFRONT-COPY-AUDIT.md`, `SELF-GUIDED-COPY-PATCHES.md`) | No — Manus can verify and confirm |
| Gate 1 — Tracking verified | `purchase_verified`, `lead_submitted`, and UTM persistence pass QA (Work Order 02/03 test matrices) | No — Manus can verify and confirm |
| Gate 2 — Support ready | Real support email live, refund policy decided (`BLOCKING-DECISION-REGISTER.md` items 1 and 4) | **Yes — owner** |
| Gate 3 — Spend authorized | Owner explicitly approves a budget scenario from `BUDGET-AND-STOP-RULES.md` | **Yes — owner** |

No day in either track below should be treated as starting until the gates it depends on are cleared.

---

## Track A — $0 Organic / Distribution Track (60 days)

**Channel roles:** Meta (Instagram/Facebook organic) and TikTok carry top-of-funnel reach via short-form video. X and LinkedIn carry the "operator" positioning for Products 2 and 3. Pinterest is a slow-compounding discovery channel, best suited to Product 1 and 2's evergreen how-to framing. Beehiiv (email) is the owned retention channel every other channel should feed.

### Weeks 1–2 — Foundation
**Objective:** Publish the already-patched channel assets (Work Order 02/03) across all 7 channels for Products 1 and 2 only. Hold all Product 3 assets per the gate above.
**Learning question:** Which channel produces the highest click-through to the storefront per post, using UTM data (`UTM-NAMING-STANDARD.md`)?
**Owner decision:** None required — this uses already-approved assets.

### Weeks 3–4 — Iterate on winners
**Objective:** Double posting frequency on the top 2 channels from weeks 1–2; pause or reduce the bottom 2.
**Learning question:** Does frequency increase reach linearly, or does engagement rate drop as frequency rises?
**Owner decision:** None required.

### Weeks 5–6 — Introduce Product 3 (conditional)
**Objective:** Only if Gate 0 is cleared (Mastermind copy patched), begin publishing Product 3 organic assets using the corrected self-guided framing.
**Learning question:** Does the corrected, non-live framing convert at a meaningfully different rate than the flagged live-room framing would have (directionally — not a controlled test, since the old copy was never published)?
**Owner decision:** Confirm Gate 0 is actually cleared before this week begins — do not assume.

### Weeks 7–8 — Retention loop
**Objective:** Shift emphasis toward driving organic traffic into the lead-magnet capture flow (Work Order 01/02 lead copy) rather than direct-to-checkout, to build the email list feeding `RETARGETING-SEQUENCE.md`.
**Learning question:** What percentage of organic clicks convert to lead capture vs. direct purchase?
**Owner decision:** None required.

### Weeks 9–60 (ongoing cadence, 6-week cycles)
**Objective:** Repeat the "post → measure → double down on winners → retire losers" cycle every 6 weeks, using `CAMPAIGN-ACTIVATION-MATRIX.csv` (Work Order 02) as the living asset log — update its status column rather than starting a new tracker.
**Learning question (recurring):** Has the winning-channel ranking from the prior cycle held, or has channel performance shifted?
**Owner decision:** Review every 6 weeks whether the organic track alone is producing enough volume to justify continuing without paid support, or whether Track B should now be prioritized.

---

## Track B — Paid-Testing Track (60 days)

**Channel roles:** Meta Ads is the primary paid channel (broadest targeting flexibility at small budgets, and the storefront's existing UTM/attribution logic already anticipates `utm_source=instagram`/`facebook`-style values). Secondary paid channels (TikTok Ads, Pinterest Ads) are recommended only after Meta produces a learnings baseline — running multiple paid channels simultaneously with a small budget fragments the data too much to learn from.

**This entire track remains `DRAFT` (per the campaign safety rule) until Gates 1–3 above are cleared.**

### Days 1–7 — Setup (no spend)
**Objective:** Build all campaigns/ad sets/ads in `META-ADS-BUILD-SHEET.csv` as drafts inside Meta Ads Manager. Install/verify the Meta pixel and confirm event matching against `ANALYTICS-MEASUREMENT-PLAN.md`.
**Prerequisite:** Gates 1 and 2.
**Owner decision:** Approve the specific campaigns to be built (all three offers, or start with one).

### Days 8–14 — Low-budget test launch
**Objective:** Launch only the "low" budget scenario from `BUDGET-AND-STOP-RULES.md`, Product 1 and Product 2 only (Product 3 stays `HOLD`).
**Prerequisite:** Gate 3 (explicit spend authorization).
**Learning question:** Does cost-per-lead/cost-per-purchase fall within a plausible range for a $9/$49 digital product, or is it clearly unworkable at this budget?
**Owner decision:** Approve the actual dollar amount from the "low" scenario.

### Days 15–21 — First read, kill/hold/iterate
**Objective:** Apply the stop rules in `BUDGET-AND-STOP-RULES.md` to every ad set. Kill anything meeting the kill condition; hold anything inconclusive; iterate creative on anything showing a weak-but-real signal.
**Learning question:** Which audience hypotheses from `AUDIENCE-HYPOTHESES.csv` are performing best, worst, and inconclusive?
**Owner decision:** Approve moving to the "base" budget scenario if days 8–21 show a workable signal.

### Days 22–35 — Base-budget scaling test
**Objective:** Increase budget on surviving ad sets only, per the "base" scenario. Introduce Product 3 paid ads only if its Gate 0 (copy patches) is confirmed cleared.
**Learning question:** Does performance hold as budget increases, or does cost-per-result degrade (audience saturation)?
**Owner decision:** Approve Product 3 entering paid testing; approve base-budget spend.

### Days 36–49 — Retargeting activation
**Objective:** Turn on `RETARGETING-SEQUENCE.md` for product viewers, engaged leads, and checkout starters, using the surviving campaigns from days 22–35 as the traffic source feeding these audiences.
**Learning question:** Does retargeting spend produce a meaningfully lower cost-per-purchase than cold audiences?
**Owner decision:** None required if within the already-approved base budget; escalate if retargeting needs incremental budget.

### Days 50–60 — Decision point
**Objective:** Consolidate learnings across both tracks. Recommend scale, hold, or stop per offer based on actual data, not the hypotheses this plan started with.
**Learning question:** Which offer(s), if any, justify moving to the "high" budget scenario?
**Owner decision:** Approve or decline scaling to "high" budget for any offer; this is a full go/no-go decision, not an automatic continuation.

---

## Secondary Channel Recommendations (beyond Meta)
- **TikTok Ads:** Recommended only after Meta's Days 22–35 read, using the same creative briefs adapted per `CREATIVE-BRIEFS.md` — do not build a parallel campaign from day one.
- **Pinterest Ads:** Lowest priority for paid spend; better suited to the $0 organic track given its slow-compounding, low-CPC discovery behavior for evergreen content like Product 1 and 2.
- **X Ads / LinkedIn Ads:** Not recommended for the initial 60 days at small budget — both platforms typically carry higher minimum-effective spend than Meta for this offer size; revisit only after a scale decision at day 60.

---
*Every week/day range above assumes gates are cleared on schedule — if a gate is delayed, shift the whole track's calendar by the same number of days rather than skipping the gate.*
