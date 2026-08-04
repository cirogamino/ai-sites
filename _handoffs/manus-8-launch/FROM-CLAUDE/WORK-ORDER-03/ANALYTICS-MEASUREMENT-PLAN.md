# Analytics Measurement Plan — Manus (-8)
Work Order 03. All event names lowercase snake_case. No email, name, or any other PII in any event payload — use anonymous/hashed identifiers only. UTM values follow `UTM-NAMING-STANDARD.md` (Work Order 02) exactly, so `utm_source`/`utm_medium`/`utm_campaign`/`utm_content` values below must match that standard's vocabulary.

---

### 1. `page_view`
- **Trigger:** Any page render/load, including SPA route changes.
- **Required properties:** `page_path`, `page_title`, `referrer_domain`
- **Optional properties:** `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`
- **Prohibited PII:** email, name, IP address stored raw (use platform's built-in anonymization)
- **Deduplication rule:** One event per route change; do not refire on component re-renders within the same route.
- **Acceptance test:** Navigate to 3 different pages in one session; confirm exactly 3 `page_view` events, each with a distinct `page_path`.

### 2. `product_view`
- **Trigger:** A product card or dedicated offer page becomes visible (viewport intersection) or is directly navigated to.
- **Required properties:** `product_slug` (`daily-ai-prompt-club`, `ai-automation-templates`, `ai-business-mastermind`), `price_usd`
- **Optional properties:** `utm_content` (to attribute which asset drove the view)
- **Prohibited PII:** none applicable — no user-identifying data in this event
- **Deduplication rule:** Fire once per product per page load, not once per scroll/re-intersection.
- **Acceptance test:** Load the homepage; confirm exactly 3 `product_view` events fire (one per product card), not more than once each.

### 3. `checkout_started`
- **Trigger:** User clicks a `.checkout-action` button (per the existing storefront source's click handler).
- **Required properties:** `product_slug`, `price_usd`, `checkout_session_id` (once returned by Stripe)
- **Optional properties:** `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`
- **Prohibited PII:** email, name, card data (Stripe handles all of this — never pass it through analytics)
- **Deduplication rule:** One event per checkout click; if the click handler retries after an error, do not fire a second `checkout_started` for the same session attempt.
- **Acceptance test:** Click each of the 3 checkout buttons once; confirm exactly 3 distinct `checkout_started` events with correct `product_slug` values.

### 4. `checkout_returned`
- **Trigger:** User lands back on the site from Stripe, regardless of outcome (success or cancel).
- **Required properties:** `product_slug`, `outcome` (`success` or `cancelled`), `checkout_session_id`
- **Optional properties:** none
- **Prohibited PII:** email, name
- **Deduplication rule:** One event per return; a page refresh on the success/cancel page must not refire this event (use the session ID to guard).
- **Acceptance test:** Complete one successful checkout and one cancelled checkout; confirm 2 events with correct, distinct `outcome` values.

### 5. `purchase_verified`
- **Trigger:** Server-side webhook confirms payment succeeded and an order record is created (this is a server-emitted event, not a client-side one, to avoid relying on an unreliable client redirect).
- **Required properties:** `product_slug`, `price_usd`, `order_id`, `checkout_session_id`
- **Optional properties:** `utm_source`, `utm_medium`, `utm_campaign`, `utm_content` (pulled from the stored order attribution, not re-read from the browser)
- **Prohibited PII:** email, name, card data
- **Deduplication rule:** Keyed on Stripe event ID — a webhook retry for the same payment must not create a second `purchase_verified` event. This is the same idempotency requirement as QA-025/QA-026 in Work Order 02's `QA-TEST-MATRIX.csv`.
- **Acceptance test:** Trigger the same Stripe webhook event twice (simulated retry); confirm exactly one `purchase_verified` event is recorded.

### 6. `lead_submitted`
- **Trigger:** Email capture form successfully submits (server accepts it, not just client-side validation passing).
- **Required properties:** `lead_magnet_slug` (`one-useful-prompt`, `automation-readiness-map`, `ai-operator-canvas`)
- **Optional properties:** `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`
- **Prohibited PII:** email address, name
- **Deduplication rule:** One event per successful submission; a duplicate-signup response (per `LEAD-CAPTURE-COPY.md`) should NOT fire a second `lead_submitted` — fire a separate `lead_duplicate` event instead if that distinction is wanted [MANUS: optional addition, not required by this work order].
- **Acceptance test:** Submit the capture form with a new email once; confirm exactly one `lead_submitted` event.

### 7. `lead_magnet_delivered`
- **Trigger:** Server-side confirmation that the delivery email for a lead magnet was sent successfully.
- **Required properties:** `lead_magnet_slug`
- **Optional properties:** none
- **Prohibited PII:** email address
- **Deduplication rule:** One event per delivery attempt that succeeds; a failed send should not fire this event (see `delivery_failed` handling under event 8's failure path, or track via your error logging separately).
- **Acceptance test:** Complete one lead signup; confirm exactly one `lead_magnet_delivered` fires after the email send succeeds, not before.

### 8. `product_downloaded`
- **Trigger:** The customer clicks the actual download link/button (not just receiving the delivery email).
- **Required properties:** `product_slug`, `order_id`
- **Optional properties:** none
- **Prohibited PII:** email, name
- **Deduplication rule:** Allow multiple downloads of the same order (customers re-download legitimately) — do NOT dedupe this event; each click is a real event. This differs from the other events in this plan and is intentional.
- **Acceptance test:** Download the same product twice from two different emails/devices; confirm 2 separate `product_downloaded` events, both correctly attributed to the same `order_id`.

### 9. `policy_viewed`
- **Trigger:** A policy page (Privacy, Terms, Refund, Disclosures) loads.
- **Required properties:** `policy_slug` (`privacy`, `terms`, `refund`, `disclosures`)
- **Optional properties:** `referrer_path` (which page linked here, e.g. checkout vs. footer)
- **Prohibited PII:** none applicable
- **Deduplication rule:** One event per page load, same as `page_view` — this is a distinct event so policy engagement can be measured separately from generic traffic.
- **Acceptance test:** Visit all 4 policy pages once each; confirm exactly 4 `policy_viewed` events with correct, distinct `policy_slug` values.

### 10. `support_requested`
- **Trigger:** A support contact form or escalation flow is submitted.
- **Required properties:** `request_category` (`payment`, `duplicate_charge`, `wrong_email`, `download_issue`, `refund`, `other` — matching `SUPPORT-MACROS.md` categories from Work Order 02)
- **Optional properties:** `order_id` (if the request is tied to a known order)
- **Prohibited PII:** email, name, free-text message content
- **Deduplication rule:** One event per submitted request; do not refire on form-validation retries before successful submission.
- **Acceptance test:** Submit one support request; confirm exactly one `support_requested` event with a valid `request_category`.

---

## Cross-Cutting Rules
- No event in this plan includes email, name, phone number, or physical address as a property, per the work order's prohibited-PII requirement.
- All UTM-carrying events must use the exact lowercase values defined in `UTM-NAMING-STANDARD.md` — do not introduce a second naming convention in the analytics layer.
- `purchase_verified` is the only event in this plan that should be treated as the source of truth for revenue reporting — `checkout_started` and `checkout_returned` are funnel-diagnostic only and can overcount relative to actual completed sales.
