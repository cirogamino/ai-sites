# Blocking Decision Register — Manus (-8)
Work Order 03. Only genuine owner decisions that block launch — not copy gaps Manus can implement from already-provided replacement text, and not settled instructions being re-litigated. Prioritized, most urgent first.

---

## 1. Refund policy terms
**Current evidence:** `REFUND-AND-FULFILLMENT-POLICY-DRAFT.md` (Work Order 01) has the refund section left as an explicit placeholder with three unselected options (no refunds on digital goods / a fixed window regardless of download / a window conditioned on limited access). `CUSTOMER-SUPPORT-RUNBOOK.md` (this work order) currently routes every refund request to the owner by rule because no policy exists to route by.
**Safest provisional default:** No refunds on digital products once downloaded, with a stated exception for delivery failures (broken file, wrong file) — this is the most common approach for low-price digital goods and requires no new infrastructure.
**Consequence of deferral:** Every refund request continues requiring manual owner involvement indefinitely; support cannot resolve any refund case independently, which doesn't scale past a handful of requests.
**Exact implementation point:** Fill the placeholder in `REFUND-AND-FULFILLMENT-POLICY-DRAFT.md` under "Refunds," then update `POLICY-PLACEHOLDER-REGISTER.csv` row for that field and `CUSTOMER-SUPPORT-RUNBOOK.md` scenario 7's escalation threshold to reflect the real policy.

---

## 2. Product 3 scope: fix the marketing copy, or change the product
**Current evidence:** `SELF-GUIDED-COPY-PATCHES.md` (this work order) documents 24 instances across the storefront, a lead magnet, and two marketing-asset files that describe The AI Business Mastermind -8 as live, group-based, or scheduled ("working room," "with other operators," "we meet bi-weekly"). The actual built product (`03-AI-BUSINESS-MASTERMIND/`, Work Order 01) is a self-guided solo framework. This was confirmed as the deliberate build decision earlier in this engagement.
**Safest provisional default:** Apply the exact replacement copy already written in `SELF-GUIDED-COPY-PATCHES.md` — no new product work required, and it's the option consistent with the instruction already given.
**Consequence of deferral:** Every customer who buys based on the unpatched copy is a live risk for a refund request or complaint (`CUSTOMER-SUPPORT-RUNBOOK.md` scenario 10) the moment real sales start.
**Exact implementation point:** Manus applies the replacements in `SELF-GUIDED-COPY-PATCHES.md` directly to `STOREFRONT-SOURCE.html`, the live lead magnet, and any channel assets scheduled for publishing. If the owner instead wants to build a real live component to match the existing copy, that is a new scope decision outside this work order and should be raised explicitly, not assumed.

---

## 3. Governing jurisdiction for Terms of Sale
**Current evidence:** `TERMS-OF-SALE-AND-USE-DRAFT.md` (Work Order 01) has "[OWNER/LEGAL: insert governing jurisdiction]" unfilled — this is a legal decision, not a copy gap, and Claude has not guessed at a state or country.
**Safest provisional default:** None offered — this genuinely requires the owner's (or counsel's) input; guessing a jurisdiction risks setting an incorrect legal term that's hard to unwind after real sales begin.
**Consequence of deferral:** The Terms of Sale document remains legally incomplete; low visible customer impact short-term, but a real gap if a dispute ever arises.
**Exact implementation point:** Fill the placeholder in `TERMS-OF-SALE-AND-USE-DRAFT.md` under "Governing law," then update the corresponding row in `POLICY-PLACEHOLDER-REGISTER.csv`.

---

## 4. Real support contact email
**Current evidence:** All four policy drafts and multiple support/email deliverables across all three work orders reference `[OWNER: insert real support email]` — no functioning contact address currently exists in any delivered document.
**Safest provisional default:** None offered — Claude will not invent a plausible-looking email address for a real business; this needs to be an address the owner actually monitors.
**Consequence of deferral:** Every policy document, support macro, and customer-journey state that references support has a dead-end placeholder instead of a real contact path.
**Exact implementation point:** Once confirmed, find-and-replace `[OWNER: insert real support email]` across all four policy drafts, `SUPPORT-MACROS.md`, `CUSTOMER-JOURNEY-COPY.md`, and `LEAD-CAPTURE-COPY.md` — this is a single piece of information that unblocks many files at once.

---

*Items intentionally excluded from this register: analytics tool selection, delivery time-window wording, and the "support has been notified" claim in `CUSTOMER-JOURNEY-COPY.md` — these are implementation/verification tasks Manus can resolve directly and do not require owner judgment.*
