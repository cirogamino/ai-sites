# Budget and Stop Rules — Manus (-8)
Work Order 04. Every dollar figure below is an **illustrative test-scenario assumption**, not a forecast or a promise that spend will produce revenue. Actual amounts require explicit owner approval (`BLOCKING-DECISION-REGISTER.md` Gate 3) before any dollar is spent.

---

## Data-Quality Prerequisites (must pass before ANY spend)
1. `purchase_verified` fires correctly and matches Stripe's actual completed-payment count in a manual spot-check (minimum 3 test transactions).
2. `lead_submitted` fires correctly and doesn't double-count on form-validation retries.
3. UTM parameters persist from ad click through to `purchase_verified` (per `UTM-NAMING-STANDARD.md` and QA-041/042 in Work Order 02).
4. Meta Pixel/Conversions API event matching is confirmed in Meta Events Manager showing "Great" or equivalent match-quality rating, not just "events received."

**If any of the four are not confirmed, do not begin spending — optimization decisions based on broken data are worse than no data.**

---

## Allocation Logic
- Spend is allocated per-offer, not pooled — Product 1, 2, and 3 (once cleared) are tracked and budgeted as separate lines, because their price points and expected conversion rates are different enough that pooled budget would let one offer's performance mask another's.
- Within an offer, spend starts split evenly across its active ad sets (per `META-ADS-BUILD-SHEET.csv`) and only shifts toward a winner after the "First read" evaluation point below — do not pick a winner before there's enough data.
- Retargeting (`RETARGETING-SEQUENCE.md`) draws from a separate, smaller allocation than cold-audience testing, since retargeting pools are inherently smaller.

---

## Scenario Table (illustrative, per offer, per day — subject to owner approval)

| Scenario | Daily spend per active ad set | Rationale | Minimum run before first read |
|---|---:|---|---|
| Low | $10 | Meta's typical minimum for reliable delivery at small scale; slowest learning speed | 7 days |
| Base | $25 | Faster data accumulation without a large financial commitment | 5–7 days |
| High | $50 | Only after Low or Base shows a workable signal; not a starting point | 5 days |

**These figures are starting assumptions based on common small-budget digital-ad practice, not a guarantee of what this specific account will need or produce. The owner may set different figures.**

---

## Kill / Hold / Iterate / Scale Rules

### Kill
An ad set is killed (paused, not deleted, so history is preserved) when:
- Spend reaches 3x the product's price ($27 for Product 1, $147 for Product 2, $597 for Product 3) with zero `purchase_verified` events, AND the minimum run duration for the active scenario has elapsed.
- Click-through rate is below 0.5% after at least 5,000 impressions (a signal the creative/audience match is fundamentally off, independent of price).

### Hold
An ad set is held (left running, no budget change) when:
- It has not yet reached the minimum run duration for the current scenario.
- It shows some signal (clicks, `checkout_started` events) but not yet enough `purchase_verified` volume to judge confidently — avoid both premature killing and premature scaling.

### Iterate
An ad set's creative or audience is iterated (new variant swapped in, same budget) when:
- Click-through rate is healthy (above 1%) but `checkout_started`-to-`purchase_verified` conversion is weak — this points to a message-match problem, not a targeting problem. Check `MESSAGE-MATCH-MATRIX.csv` first for a documented contradiction before assuming the creative itself is at fault.
- The minimum run duration has elapsed with an inconclusive (neither clearly good nor clearly bad) result.

### Scale
An ad set's budget is increased (following the Low → Base → High scenario progression) only when:
- It has produced at least 3 `purchase_verified` events at a cost-per-purchase the owner has explicitly approved as acceptable for that offer.
- The owner has explicitly approved moving to the next scenario tier — this is never automatic.

---

## Cross-Cutting Rules
- No ad set skips directly from Low to High — Base is not optional to skip, even if Low looks promising, because a 5x budget jump can behave very differently (Meta's delivery algorithm re-learns at significantly different budget levels).
- Product 3 does not enter any scenario tier until its Gate 0 (self-guided copy patches applied) is confirmed cleared — this overrides all other rules in this document for that offer specifically.
- If total spend across all active ad sets for an offer reaches the High scenario's weekly total (7 x $50 x number of active ad sets) with no `purchase_verified` events at all, stop that offer's paid testing entirely and revisit the audience hypotheses and message-match matrix before resuming — do not simply keep spending at the same rate hoping for a different result.

*No figure in this document should be read as an expected return on ad spend. These are test-budget ceilings and evaluation triggers only.*
