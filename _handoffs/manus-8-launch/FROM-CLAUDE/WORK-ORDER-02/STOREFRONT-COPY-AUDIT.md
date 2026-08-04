# Storefront Copy Audit — STOREFRONT-SOURCE.html
Work Order 02. Text-only review — no layout, component, or visual-design changes proposed. All quotes and line numbers below are from the version of `STOREFRONT-SOURCE.html` supplied in `FROM-MANUS/` (788 lines).

---

## 1. Contradiction — Mastermind implies live group access (CRITICAL, previously flagged)

**Source text, line 589:** `<span class="product-price">...</span>` preceded by `<span>Judgment / Working room</span>`
**Source text, line 591:** "A focused room for owners and operators choosing, testing, and reviewing practical AI systems with accountability."
**Source text, lines 593–595:**
- "Bring one real workflow"
- "Challenge assumptions together"
- "Return with test evidence"

**Issue:** "Challenge assumptions together" and "a focused room... with accountability" describe a live, social, multi-person process. The actual built product (`03-AI-BUSINESS-MASTERMIND/` in the first Claude return) is a self-guided written framework worked alone — confirmed as the deliberate build decision. A customer reading this card before checkout would reasonably expect live group access and would not receive it.

**Severity:** Critical — this is the storefront's primary conversion surface for the $199 product, not a secondary asset.

**Proposed replacement copy** (text only, same card structure):
- Meta tag: "Decisions / Self-guided" (replaces "Judgment / Working room")
- Body: "A self-guided, 30-day decision framework for owners and operators who want to make better calls on real business decisions — worked on your own schedule."
- Points: "One real decision per week" / "A written framework, not a course" / "A documented reversal trigger for every call"

*(This is the same underlying conflict already logged in `PRODUCT-SPECIFICATIONS.md` and `QA-REPORT.md` from the first return — repeating it here because it lives in the storefront source itself, which this work order asks to be audited directly.)*

---

## 2. Disclosure gap — no policy links anywhere on the storefront (HIGH)

**Observed:** The `<nav>` (lines 457–461) contains only Products, Free field notes, and Meet Mara. The `<footer>` (lines 687–695) contains only the brand lockup and a copyright line. Nowhere on the page is there a link to a Privacy Policy, Terms of Sale, Refund Policy, or Disclosures page.

**Issue:** There is currently no path from the storefront to any of the four policy documents. This is a real gap for a live checkout, not just a nice-to-have.

**Severity:** High — flagging as a gap to close before launch, not proposing specific footer HTML since that's a layout change outside this audit's scope.

---

## 3. Disclosure inconsistency — outcome disclaimer present in social copy, absent on the storefront (MEDIUM-HIGH)

**Observed:** The Stage 2 Final channel copy for the Mastermind consistently includes a disclaimer, e.g. "No guaranteed business, revenue, or efficiency results. Outcomes depend on the business, implementation, tools, and decisions involved." The storefront's Mastermind product card (lines 588–602) has no equivalent disclaimer text anywhere near the price or CTA.

**Issue:** The page most likely to convert a purchase has less disclosure than the social posts driving traffic to it. That's backwards.

**Severity:** Medium-high. **Proposed addition:** a one-line disclaimer under the product-points list, e.g. "No income or business outcome is guaranteed."

---

## 4. Staging/placeholder copy that must not reach real customers (HIGH)

**Source text, line 446:** "Preview build — Stripe test checkout connected; no live charges or email addresses are collected"
**Source text, line 653:** "Preview mode: this form has no backend and collects nothing."
**Source text, line 769 (JS):** "Preview confirmed. Your email was not sent or stored. Connect an email platform before launch."
**Source text, line 693:** "Preview storefront<br>Stripe test checkout connected · Email capture pending"

**Issue:** These four strings are correct and appropriate for a staging build, and this audit is not asking to change staging behavior. Flagging them here only so they're not missed: if this HTML is promoted to production as-is, real customers will be told their email "was not sent or stored" and that charges are not live — which would be false once checkout goes live. This needs an explicit swap step before launch, not a silent assumption that someone will remember.

**Severity:** High as a launch-blocker checklist item; zero severity as a staging-build issue (it's doing its job today).

---

## 5. Pricing — internally consistent, but conflicts with other supplied assets (MEDIUM, cross-reference)

**Observed:** All three storefront CTAs are flat one-time purchases: "Buy the $9 club" (line 534), "Buy the $49 pack" (line 566), "Buy the $199 program" (line 599). This matches the Fixed Facts in this work order.

**Issue:** `CHANNEL-ASSETS-ITERATION-3.md` (a separate supplied asset, not this file) describes Product 1 as "$9/month" and Product 3 as "$199/mo." The storefront itself is not the problem — but if those iteration-3 assets are published without correction, they'll drive traffic to a page that contradicts them. Full detail and per-asset flags are in `CAMPAIGN-ACTIVATION-MATRIX.csv`.

**Severity:** Medium, storefront-side (no storefront text needs to change) — the fix belongs in the marketing assets, not here.

---

## 6. Minor accessibility notes (LOW)

- **Line 690:** Footer logo `<img src="..." alt="" />` uses an empty alt attribute, while the header's identical mark (line 451) has descriptive alt text ("Mara Quinn folded field-note logo"). This is defensible if the footer mark is treated as decorative/redundant, but worth a deliberate decision rather than an oversight.
- **Lines 479, 509, 541, 573:** Image and role="img" alt/aria-label text is specific and descriptive throughout the page — no changes needed, noted as a positive finding.
- **Line 697:** Toast uses `role="status" aria-live="polite"` correctly — no changes needed.

---

## What this audit did not do
Per scope, this did not touch layout, CSS, component structure, JavaScript logic, or visual design — only the text content and disclosure gaps. It also did not rewrite the HTML file itself; all proposed copy above is for Manus (or whoever owns the storefront source) to apply.

*Mara Quinn is a disclosed virtual AI educator created for the Manus (-8) product line.*
