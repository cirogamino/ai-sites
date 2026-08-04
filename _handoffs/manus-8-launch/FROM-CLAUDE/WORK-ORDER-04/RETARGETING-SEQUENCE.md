# Retargeting Sequence — Manus (-8)
Work Order 04. Six audience states. **Hard rule: no buyer is ever retargeted with the same offer they already purchased** — buyers only receive cross-sell messaging for a different product, or no retargeting at all if cross-sell isn't appropriate yet.

---

## 1. Product Viewers (saw a product but did not start checkout)
**Window:** 14 days since last `product_view` event
**Exclusion:** Anyone with a `purchase_verified` event for that same product
**Event prerequisite:** `product_view` fired (per `ANALYTICS-MEASUREMENT-PLAN.md`), no `checkout_started` for the same product in the window
**Message:** A single reminder ad using the same matched-proof angle they saw (per `MESSAGE-MATCH-MATRIX.csv`) — not a discount, not urgency. Example: "Still thinking about it? Here's exactly what's inside The Daily AI Prompt Club -8."
**Destination:** The specific offer's storefront section (`[OFFER LINK]`)
**Frequency assumption:** Maximum 1 ad served per day, capped at 3 impressions total per person for this window — a rough starting assumption to avoid fatigue, adjust based on actual frequency reporting once live.
**Stop condition:** Stop immediately on `checkout_started` (move them to segment 3) or `purchase_verified` (remove entirely).

## 2. Engaged Leads (downloaded a free field note, did not purchase)
**Window:** 30 days since `lead_magnet_delivered`
**Exclusion:** Anyone with `purchase_verified` for the corresponding paid product
**Event prerequisite:** `lead_magnet_delivered` fired; no purchase event for the related product
**Message:** Bridge from the free resource to the paid product, matching the existing lead-nurture email logic (`LEAD-FOLLOW-UP-SEQUENCES.md`, Work Order 01) but as an ad rather than email — same non-pushy, teaching-first tone. Example: "You've got the Automation Readiness Map. The Automation Templates -8 is the next 14 documents."
**Destination:** The specific offer's storefront section
**Frequency assumption:** Maximum 1 ad per 2 days, capped at 4 impressions over the 30-day window.
**Stop condition:** Stop on `purchase_verified` for the related product, or at 30 days with no action (let the segment expire rather than re-targeting indefinitely).

## 3. Checkout Starters (began checkout, did not complete)
**Window:** 3 days since `checkout_started` with no matching `purchase_verified`
**Exclusion:** Anyone with `purchase_verified` for that product in the same window (covers delayed webhook confirmation)
**Event prerequisite:** `checkout_started` fired; no `checkout_returned` with outcome `success` for the same session
**Message:** Direct, no new claims — acknowledge the interruption without guilt-tripping. Example: "Checkout didn't finish — no charge was made. Your $49 automation pack is still here if you want it."
**Destination:** Directly back to the checkout flow for that product (`[OFFER LINK]`, not the general storefront)
**Frequency assumption:** Maximum 2 ads total over 3 days — this is a short, high-intent window and doesn't need sustained frequency.
**Stop condition:** Stop immediately on `purchase_verified`, or automatically expire after 3 days regardless of outcome.

## 4. Non-Buyers, General (visited the site broadly, no specific product/lead engagement recorded)
**Window:** 21 days since last `page_view` with no `product_view`, `lead_submitted`, or `checkout_started` recorded
**Exclusion:** Anyone with any purchase or lead event, to avoid overlapping with the more specific segments above
**Event prerequisite:** At least one `page_view`; none of the more specific events
**Message:** Broad awareness-level reminder of all three offers together, not a single-product push — this segment showed general interest, not specific intent. Example: "Three practical AI resources, no hype: $9, $49, or $199 — see which fits."
**Destination:** Homepage (`/`), not a specific offer page
**Frequency assumption:** Maximum 1 ad per 3 days, capped at 3 impressions over the 21-day window — lower priority/lower frequency than the higher-intent segments above.
**Stop condition:** Stop on any `product_view`, `lead_submitted`, or `checkout_started` event (they graduate to a more specific segment), or expire at 21 days.

## 5. Buyers (completed at least one purchase)
**Window:** Ongoing from `purchase_verified`
**Exclusion:** **Never** shown an ad for the specific product(s) they already purchased — this is the hard rule for this entire document.
**Event prerequisite:** At least one `purchase_verified` event
**Message:** No promotional retargeting by default. If any message is shown, it should be a satisfaction/support touchpoint, not a sales ad — e.g., directing to the onboarding email content already sent (`POST-PURCHASE-EMAIL-SEQUENCES.md`, Work Order 03), not a paid ad. Paid retargeting of buyers should be limited to segment 6 (cross-sell) only.
**Destination:** N/A for generic buyer retargeting; see segment 6 for cross-sell destinations.
**Frequency assumption:** N/A — no standing ad frequency for this segment outside of segment 6.
**Stop condition:** N/A — this is a permanent segment membership (once a buyer, always excluded from same-product ads).

## 6. Cross-Sell Eligibility (bought one product, eligible to see a different one)
**Window:** Starts 7 days after `purchase_verified` for the first product (give them time to start using it before pitching another), ongoing for 60 days
**Exclusion:** Anyone who already purchased the cross-sell target product; anyone shown the same cross-sell message more than the frequency cap allows
**Event prerequisite:** `purchase_verified` for Product A, no `purchase_verified` for Product B (the cross-sell target)
**Message:** Ladder-logic messaging matching the actual product relationship (`MANUS-8-STAGE-2-ITERATION-3-FINAL.md`, Part 3 — Product 1 → Product 2 → Product 3 as increasing commitment levels). Example, Product 1 buyer → Product 2: "Already building the daily practice? The Automation Templates -8 is the next step once you've got one repeated task to fix." **Product 3 cross-sell messaging must use only the self-guided framing from `SELF-GUIDED-COPY-PATCHES.md` — no exceptions for cross-sell copy.**
**Destination:** The cross-sell target product's storefront section
**Frequency assumption:** Maximum 1 ad per 5 days, capped at 4 impressions over the 60-day window — this is a longer, lower-pressure window since it's a considered upsell, not a checkout recovery.
**Stop condition:** Stop on `purchase_verified` for the cross-sell target product, or expire at 60 days.

---
*Segment 5's rule (never retarget a buyer with a product they already own) governs every other segment's exclusion logic above — segments 1–4 and 6 all explicitly exclude anyone who already purchased the relevant product.*
