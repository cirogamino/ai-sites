# Claude Work Order 03 — Final Parallel Launch Support

**Status:** Start immediately  
**Owner:** Claude  
**Implementing agent:** Manus  
**Return folder:** `_handoffs/manus-8-launch/FROM-CLAUDE/WORK-ORDER-03/`  
**Do not modify:** application code, database schema, Stripe configuration, storage objects, the 100-point launch checklist, prior Claude returns, or Manus implementation files.

## Purpose

Manus is implementing secure delivery, lead capture, analytics, policies, and functional tests. Work Order 03 assigns only additional writing, specification, and review work that can run in parallel. Do not repeat Work Order 01 or 02 deliverables. Use the current files in `FROM-MANUS/`, `FROM-CLAUDE/CLAUDE-RETURN/`, and `FROM-CLAUDE/WORK-ORDER-02/` as source material.

## Required Deliverables

| File | Required content | Acceptance standard |
|---|---|---|
| `POST-PURCHASE-EMAIL-SEQUENCES.md` | For each paid product: receipt/access email, day-one onboarding email, unused-download reminder, and support-escalation email | 12 complete emails; subject, preview text, body, CTA placeholder, support placeholder, virtual-persona disclosure where relevant; no invented delivery timing or human service |
| `SEO-SOCIAL-METADATA.md` | Production title, meta description, canonical-path recommendation, Open Graph title/description, X card copy, and social-share alt text for home, three offer anchors/pages, checkout success, checkout cancellation, privacy, terms, and refund pages | Character-conscious, unique per page, no unsupported claims, and explicit `noindex` recommendation for checkout result pages |
| `STRUCTURED-DATA-SPEC.md` | Content-only JSON-LD specification for Organization/Person disclosure approach, WebSite, three Product entries, FAQPage, and policy pages | Use placeholders for unknown legal/support fields; prices fixed at 9/49/199 USD; no ratings, reviews, availability claims, or human-person misrepresentation |
| `ANALYTICS-MEASUREMENT-PLAN.md` | Event names, trigger, required properties, optional properties, prohibited PII, deduplication rule, and acceptance test for page view, product view, checkout started, checkout returned, purchase verified, lead submitted, lead magnet delivered, product downloaded, policy viewed, and support requested | Implementation-ready table; lowercase snake_case names; no email/name in analytics; align with UTM standard from Work Order 02 |
| `SELF-GUIDED-COPY-PATCHES.md` | Exact source quote, file/location, risk, and exact replacement for every phrase implying a live room, other operators, group accountability, calls, coaching, community, or scheduled service for the $199 self-guided product | Cover storefront, lead magnet 3, email copy, channel assets, and campaign assets; do not merely flag—provide exact replacement text that preserves conversion intent without changing the product |
| `CUSTOMER-SUPPORT-RUNBOOK.md` | Triage flow, required evidence, first response, escalation threshold, and resolution boundary for payment, duplicate concern, wrong email, missing order, download failure, corrupt archive, refund request, privacy request, accessibility issue, and unsupported product expectation | No legal conclusions, no guaranteed refund, no blame, no fabricated SLA; clearly distinguish automated response from owner decision |
| `POLICY-PLACEHOLDER-REGISTER.csv` | Every unresolved placeholder in all four policy drafts with file, section, placeholder, why required, safe temporary handling, and launch-blocking status | One row per unresolved field; never invent address, jurisdiction, support email, refund window, legal entity, tax data, or phone number |
| `END-TO-END-FUNNEL-REVIEW.md` | Review campaign → landing page → offer → Stripe → success/cancel → order record → delivery → onboarding → support | For each stage: promise, evidence, next action, failure path, contradiction, severity, and exact fix; reference actual filenames and copy |
| `BLOCKING-DECISION-REGISTER.md` | Only owner decisions that genuinely prevent launch, with current evidence, safest provisional default, consequence of deferral, and exact implementation point | Do not debate settled instructions; do not include matters Manus can safely implement; keep the register concise and prioritized |
| `WORK-ORDER-03-COMPLETION.md` | CDT start/finish timestamps, returned filenames, pass/block status, source gaps, and concise summary | Mark nothing complete unless the required file exists and meets its row above |

## Fixed Facts

| Offer | Price | Delivery |
|---|---:|---|
| The Daily AI Prompt Club -8 | $9 | Immediate digital ZIP after verified payment |
| The AI Automation Templates -8 | $49 | Immediate digital ZIP after verified payment |
| The AI Business Mastermind -8 | $199 | Immediate self-guided digital ZIP; no live room, calls, coaching, community, or other-operator access |

Mara Quinn is a fictional, disclosed virtual AI educator. Never fabricate testimonials, ratings, customer counts, revenue, results, credentials, scarcity, guarantees, live services, or response times.

## Source Priority

When sources conflict, use this order: this work order’s fixed facts, verified product specifications, current product packages, policy drafts, current storefront source, Work Order 02 artifacts, then campaign assets. Record conflicts; do not invent resolutions.

## Return Rules

Create `_handoffs/manus-8-launch/FROM-CLAUDE/WORK-ORDER-03/`, add exactly the ten required files, commit, and push. Do not edit any file outside that return folder. Start immediately without requesting further confirmation when the sources are present.
