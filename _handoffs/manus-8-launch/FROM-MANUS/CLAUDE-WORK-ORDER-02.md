# Claude Work Order 02 — Parallel Launch Support

**Status:** Ready to start immediately  
**Owner:** Claude  
**Implementing agent:** Manus  
**Return folder:** `_handoffs/manus-8-launch/FROM-CLAUDE/WORK-ORDER-02/`  
**Constraint:** Do not modify application code, Stripe configuration, database schema, the 100-point checklist, or any Manus-owned file.

## Purpose

Manus is continuing checkout, order persistence, lead capture, delivery, analytics, and functional testing. Claude should complete the following additive writing and QA artifacts in parallel. These deliverables must not repeat or replace the original product packages, email sequence, policies, or original QA report.

## Required Deliverables

| File | Required content | Acceptance standard |
|---|---|---|
| `CUSTOMER-JOURNEY-COPY.md` | Final customer-facing copy for checkout redirect, payment success, payment cancellation, payment failure, order lookup, delivery preparing, delivery ready, delivery failure, duplicate purchase, and support escalation states | Each state has a heading, short body, primary CTA, secondary CTA, and accessibility-safe status text; no invented promises or urgency |
| `LEAD-CAPTURE-COPY.md` | Form headline, value statement, field labels, consent text, privacy microcopy, success state, duplicate signup state, invalid-email state, server-error state, and lead-magnet delivery copy for all three magnets | Clear and concise; consent is explicit; delivery expectations are accurate; no newsletter frequency promise unless stated as optional |
| `LAUNCH-FAQ.md` | Buyer FAQ covering product differences, prices, format, immediate access, support boundaries, refunds, virtual-persona disclosure, privacy, and choosing the right offer | At least 15 non-duplicative questions; answers must match the fixed offers and policy drafts |
| `SUPPORT-MACROS.md` | Ready-to-use support replies for payment succeeded/no access, duplicate charge concern, wrong email, download trouble, refund request, purchase cancellation, lead-magnet failure, and product-selection question | Calm, direct, no blame, no unsupported refund commitment, clear escalation placeholders |
| `CAMPAIGN-ACTIVATION-MATRIX.csv` | One row for every supplied daily marketing asset; columns for asset number, working title, offer, channel fit, funnel stage, primary CTA, landing target, risk flag, and recommended launch order | Every supplied asset represented once; unsupported claims and duplicate frames flagged, never silently rewritten |
| `UTM-NAMING-STANDARD.md` | Canonical lowercase UTM rules and examples for X, Instagram, TikTok, YouTube, Pinterest, Beehiiv, and direct-message campaigns across all three offers | Define source, medium, campaign, content, and term; include examples; avoid spaces and personally identifying data |
| `QA-TEST-MATRIX.csv` | Test cases for desktop, mobile, keyboard, screen reader labels, checkout, cancellation, webhook/order record, lead signup, delivery, policy links, analytics events, UTM persistence, and failure states | Columns: ID, area, precondition, steps, expected result, severity, owner, status; at least 40 specific tests; status defaults to `NOT RUN` |
| `STOREFRONT-COPY-AUDIT.md` | Evidence-based review of the supplied storefront source limited to contradictions, unsupported claims, unclear CTAs, dead ends, disclosure gaps, pricing inconsistencies, and accessibility-language issues | Quote exact source text and location; classify severity; propose replacement copy only where needed; do not redesign the site |
| `WORK-ORDER-02-COMPLETION.md` | Status, CDT start/finish timestamps, returned filenames, blocked items, and a concise summary | Mark nothing complete unless the required file exists in the return folder |

## Fixed Facts

| Offer | Price | Delivery model |
|---|---:|---|
| The Daily AI Prompt Club -8 | $9 | Immediately deliverable 30-day prompt-practice package |
| The AI Automation Templates -8 | $49 | Immediately deliverable reusable assisted-workflow template package |
| The AI Business Mastermind -8 | $199 | Immediately deliverable self-guided 30-day owner/operator decision program |

Mara Quinn is a fictional, disclosed virtual AI educator. Do not imply that she is a human, that a live room exists, or that coaching, community access, calls, testimonials, earnings, guarantees, scarcity, or customer outcomes exist unless an authorized source explicitly establishes them.

## Source Priority

Use the files already in `FROM-MANUS/` plus the `WORK-ORDER-02-SOURCES/` folder. When sources conflict, use this priority: fixed facts in this work order, current storefront source, product specifications, policy drafts, then campaign assets. Flag any unresolved conflict in the completion file rather than inventing an answer.

## Return Rules

Create `_handoffs/manus-8-launch/FROM-CLAUDE/WORK-ORDER-02/`, place only the nine required files there, commit, and push. Do not overwrite the first Claude return. Do not edit `LAUNCH-100-CHECKLIST.md`. Do not wait for further approval if the required sources are present.
