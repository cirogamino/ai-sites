# Customer Support Runbook — Manus (-8)
Work Order 03. Ten scenarios. Reply text for most of these already exists in `SUPPORT-MACROS.md` (Work Order 02) — this runbook adds the triage logic, evidence requirements, and decision boundaries around those macros. No legal conclusions are made here, no refund is guaranteed, no blame is assigned to the customer, and no SLA is invented.

---

## 1. Payment (charge succeeded, no access / charge unclear to customer)
**Triage flow:** Look up order by email or order ID → confirm payment status in Stripe → confirm whether a delivery record exists.
**Required evidence:** Order email, approximate purchase date.
**First response (automated-safe):** Support Macro #1 ("Payment Succeeded, Customer Reports No Access").
**Escalation threshold:** Escalate to owner if payment shows succeeded in Stripe but no order record exists in the database — this indicates a webhook failure, not a simple resend.
**Resolution boundary:** Support can resend a working download link. Support cannot alter Stripe records or issue a refund without the refund policy being finalized (see `BLOCKING-DECISION-REGISTER.md`).

## 2. Duplicate Charge Concern
**Triage flow:** Pull full order history for the customer's email → compare charge count to product count purchased → determine if it's a true duplicate or two distinct legitimate purchases.
**Required evidence:** Order email; ideally the last 4 digits of the card or approximate charge amounts from the customer's statement.
**First response:** Support Macro #2.
**Escalation threshold:** Any confirmed true duplicate charge escalates to the owner for refund of the second charge — support does not self-authorize refunds.
**Resolution boundary:** Support can confirm/deny duplication using order records. Only the owner (or a confirmed refund policy with pre-authorized thresholds) can approve the actual refund.

## 3. Wrong Email Used at Checkout
**Triage flow:** Verify the order exists under the email the customer used to pay → confirm identity is plausible (matching name/order details, not a formal ID check) → resend to the address the customer requests.
**Required evidence:** The email actually used at checkout, and the correct email to resend to.
**First response:** Support Macro #3.
**Escalation threshold:** Escalate if the customer cannot confirm any details matching an actual order — possible account confusion or attempted unauthorized access.
**Resolution boundary:** Support can resend to a reasonably verified alternate address. Support does not change the email on file in a way that would affect future correspondence without a clear customer request in writing (email).

## 4. Missing Order (customer believes they purchased, no record found)
**Triage flow:** Search by email, partial name, and approximate date → check Stripe directly for a matching charge even if no local order record exists (catches webhook failures) → if genuinely nothing found, ask the customer for payment confirmation evidence (bank/card statement line, Stripe receipt email).
**Required evidence:** Approximate purchase date, payment method used, any receipt or confirmation email received.
**First response:** Order Lookup flow copy from `CUSTOMER-JOURNEY-COPY.md` (#5), or Support Macro-equivalent if initiated via email rather than the lookup tool.
**Escalation threshold:** If Stripe shows a real charge with no corresponding order record, escalate immediately as a technical/webhook issue, not a routine lookup miss.
**Resolution boundary:** Support can search and confirm order status. Support cannot fabricate an order record or guess at what was purchased — if truly unresolvable from the data, escalate rather than guess.

## 5. Download Failure (link broken, page errors)
**Triage flow:** Confirm the order and product → test the download link directly → check whether the issue is link-specific or a broader delivery-system issue (affecting multiple customers).
**Required evidence:** Order email, which product, and what error the customer saw (a screenshot helps but is not required).
**First response:** Support Macro #4.
**Escalation threshold:** Escalate if the same failure is reported by more than one customer in a short window — likely a systemic delivery issue, not an isolated link problem.
**Resolution boundary:** Support can issue a fresh link. Support cannot promise a permanent technical fix timeline without engineering (Manus) confirmation.

## 6. Corrupt Archive (file downloads but won't open / is incomplete)
**Triage flow:** Confirm which product and which device/app the customer used to open it → send a fresh copy from the verified source ZIP (per `FULFILLMENT-MANIFEST.md`) → if still corrupt, treat as a packaging issue, not a one-off.
**Required evidence:** Order email, product name, device/app used to open the file.
**First response:** Support Macro #4, adapted: "Sorry about that — here's a fresh copy of the file: [NEW LINK]. If it still won't open, let me know what app you're using and I'll troubleshoot further."
**Escalation threshold:** Escalate to Manus/engineering if a fresh copy from the verified source also fails to open — this indicates the master file itself may be corrupted, not a one-off delivery glitch.
**Resolution boundary:** Support can resend from the known-good source file. Support cannot re-package or re-build the product file themselves.

## 7. Refund Request
**Triage flow:** Confirm order exists and details match → check against the finalized refund policy (once one exists) → determine eligibility.
**Required evidence:** Order email, product, approximate purchase date, reason for request (not required to be justified in detail, just logged).
**First response:** Support Macro #5 — **intentionally incomplete pending the refund policy decision.** Do not commit to a refund window or approval without that policy finalized.
**Escalation threshold:** Every refund request escalates to the owner until a refund policy with pre-set support authority exists. This is a hard rule, not a judgment call per request.
**Resolution boundary:** Support cannot approve or deny a refund independently until `BLOCKING-DECISION-REGISTER.md` item on refund policy is resolved by the owner.

## 8. Privacy Request (access, correction, deletion of personal data)
**Triage flow:** Confirm the requester's identity reasonably matches the account/email on file → log the request with date and type (access/correction/deletion) → route per the finalized Privacy Policy's stated process.
**Required evidence:** The email address the data is associated with, and the specific type of request (access, correction, or deletion).
**First response:** "Thanks for reaching out — we've received your privacy request and are looking into it. We'll follow up directly at this email address." No specific turnaround time stated unless one is confirmed in the finalized Privacy Policy.
**Escalation threshold:** All privacy requests escalate to the owner — this is not a category support resolves independently, since it may have legal implications the owner needs to be aware of. This runbook makes no legal determination about what the request obligates the business to do.
**Resolution boundary:** Support logs and forwards. Only the owner (with legal review if needed) determines the actual response to a privacy request.

## 9. Accessibility Issue (customer reports a barrier using the site or product)
**Triage flow:** Log the specific issue (page, device, assistive technology used if known) → check whether it's a known issue already in `QA-TEST-MATRIX.csv` (Work Order 02) → if new, escalate for a fix.
**Required evidence:** What page/product, what assistive technology or browser setting was in use, and what happened.
**First response:** "Thanks for flagging this — I've logged the specific issue and I'm passing it to our team to look into. In the meantime, is there a way I can help you directly with what you were trying to do?"
**Escalation threshold:** All accessibility issues escalate — support offers a direct workaround in the moment but does not close the underlying report without an engineering fix or explicit owner decision that no fix is planned.
**Resolution boundary:** Support can offer manual workarounds (e.g., resending content in plain text). Support cannot commit to a specific fix timeline without engineering confirmation.

## 10. Unsupported Product Expectation (customer expected something the product doesn't include — e.g., live sessions for the Mastermind)
**Triage flow:** Identify exactly what the customer expected and where that expectation likely came from (which marketing asset or page) → confirm what the product actually includes per `LAUNCH-FAQ.md` and the product's own `START-HERE.md` → respond honestly.
**Required evidence:** What the customer expected, and if possible, where they saw that expectation set (helps identify which marketing asset needs correcting — see `SELF-GUIDED-COPY-PATCHES.md`).
**First response:** "I hear you — to be clear on what's included: [RESTATE ACTUAL PRODUCT SCOPE FROM LAUNCH-FAQ.md]. If that's not what you're looking for, let's talk about what would actually help, including whether a refund makes sense here." Do not argue that the customer misread something; if marketing copy caused the confusion, that's a real gap on our end, not a customer error.
**Escalation threshold:** Any case where the mismatch traces back to still-unpatched marketing copy (see `SELF-GUIDED-COPY-PATCHES.md`) escalates to the owner immediately — this is a signal that copy needs fixing, not just an individual refund decision.
**Resolution boundary:** Support can acknowledge the gap honestly and offer to escalate for a refund per whatever policy exists. Support cannot promise to "add" live sessions or community access that don't exist, even informally, to smooth over the complaint.

---
*Every "Resolution boundary" line above exists to separate what a support agent can do automatically from what requires the owner. This runbook does not invent a refund policy, an SLA, or a legal position anywhere — those are owner decisions tracked in `BLOCKING-DECISION-REGISTER.md`.*
